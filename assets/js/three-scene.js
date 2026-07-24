/* ============================================================
   THREE SCENE — Premium AI-Themed 3D Hero Background
   Enhanced: deeper neural network, holographic rings,
   data streams, pulsing core, mouse-reactive depth
   ============================================================ */
const ThreeScene = (() => {
  let scene, camera, renderer;
  let particles, neuralNodes, neuralLines;
  let holoRings = [];
  let dataStreams;
  let centralCore, coreGlow;
  let mouseX = 0, mouseY = 0;
  let targetMouseX = 0, targetMouseY = 0;
  let clock;
  let animFrame;
  let isInitialized = false;
  let hasInitBeenCalled = false; // Prevent double initialization
  let isTabVisible = true;

  const CONFIG = {
    PARTICLE_COUNT: 800,
    NEURAL_NODE_COUNT: 45,
    NEURAL_CONNECTION_DISTANCE: 5,
    CAMERA_Z: 14,
    MOUSE_INFLUENCE: 0.4,
    ROTATION_SPEED: 0.00025,
    STREAM_COUNT: 120,
  };

  function init() {
    // Prevent double initialization
    if (hasInitBeenCalled) {
      console.warn('[ThreeScene] Already initialized, skipping duplicate call.');
      return;
    }
    hasInitBeenCalled = true;

    if (typeof THREE === 'undefined') {
      console.warn('Three.js not loaded');
      return;
    }

    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;

    clock = new THREE.Clock();

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06060b, 0.045);

    camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      120
    );
    camera.position.z = CONFIG.CAMERA_Z;

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    createParticles();
    createNeuralNetwork();
    createHolographicRings();
    createDataStreams();
    createCentralCore();
    createAmbientLight();

    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    
    // Pause animation when tab is hidden to save CPU/GPU
    document.addEventListener('visibilitychange', onVisibilityChange);

    isInitialized = true;
    animate();
  }

  function onVisibilityChange() {
    isTabVisible = !document.hidden;
    if (!isTabVisible && animFrame) {
      cancelAnimationFrame(animFrame);
      animFrame = null;
    } else if (isTabVisible && isInitialized && !animFrame) {
      animate();
    }
  }

  /* ---- Floating Particles with depth layers ---- */
  function createParticles() {
    const count = CONFIG.PARTICLE_COUNT;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const alphas = new Float32Array(count);

    const cyan = new THREE.Color(0x00f0ff);
    const purple = new THREE.Color(0x8b5cf6);
    const white = new THREE.Color(0xe0e0f0);
    const pink = new THREE.Color(0xec4899);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 4 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi) - 3;

      // Varied sizes — more tiny ones, fewer large glowing ones
      const sizeRand = Math.random();
      sizes[i] = sizeRand < 0.7 ? Math.random() * 1.5 + 0.3 :
                 sizeRand < 0.9 ? Math.random() * 3 + 1.5 :
                 Math.random() * 5 + 3;

      alphas[i] = 0.3 + Math.random() * 0.7;

      const colorChoice = Math.random();
      let color;
      if (colorChoice < 0.35) color = cyan;
      else if (colorChoice < 0.6) color = purple;
      else if (colorChoice < 0.8) color = white;
      else color = pink;

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        attribute float aSize;
        attribute float aAlpha;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uTime;
        uniform float uPixelRatio;

        void main() {
          vColor = color;
          vAlpha = aAlpha;
          vec3 pos = position;

          // Organic floating — different frequencies per axis
          float seed = position.x * 0.3 + position.y * 0.5 + position.z * 0.2;
          pos.x += sin(uTime * 0.2 + seed) * 0.4;
          pos.y += cos(uTime * 0.15 + seed * 1.3) * 0.4;
          pos.z += sin(uTime * 0.1 + seed * 0.7) * 0.25;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = aSize * uPixelRatio * (90.0 / -mvPosition.z);
          gl_PointSize = max(gl_PointSize, 0.5);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;

          // Soft radial falloff
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= vAlpha * 0.55;

          // Inner core glow
          float glow = exp(-dist * 5.0) * 0.4;
          vec3 finalColor = vColor + glow;

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);
  }

  /* ---- Neural Network with animated pulses ---- */
  function createNeuralNetwork() {
    const nodeCount = CONFIG.NEURAL_NODE_COUNT;
    const nodePositions = [];

    const nodeGeometry = new THREE.SphereGeometry(0.05, 8, 8);

    const nodeGroup = new THREE.Group();

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 10 - 2;

      nodePositions.push(new THREE.Vector3(x, y, z));

      const isCyan = Math.random() > 0.4;
      const nodeColor = isCyan ? 0x00f0ff : 0x8b5cf6;

      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: nodeColor,
        transparent: true,
        opacity: 0.9
      });

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(x, y, z);

      // Glow halo
      const glowGeo = new THREE.SphereGeometry(0.18, 8, 8);
      const glowMat = new THREE.MeshBasicMaterial({
        color: nodeColor,
        transparent: true,
        opacity: 0.12
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      node.add(glow);

      nodeGroup.add(node);
    }

    neuralNodes = nodeGroup;
    scene.add(neuralNodes);

    // Connections with distance-based opacity
    const linePositions = [];
    const lineColors = [];
    const cyan = new THREE.Color(0x00f0ff);
    const purple = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < CONFIG.NEURAL_CONNECTION_DISTANCE) {
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
          const t = dist / CONFIG.NEURAL_CONNECTION_DISTANCE;
          const c1 = cyan.clone().lerp(purple, t);
          const c2 = purple.clone().lerp(cyan, t);
          lineColors.push(c1.r, c1.g, c1.b, c2.r, c2.g, c2.b);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });

    neuralLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(neuralLines);
  }

  /* ---- Holographic Rings — concentric orbiting rings ---- */
  function createHolographicRings() {
    const ringConfigs = [
      { radius: 5, tube: 0.008, color: 0x00f0ff, opacity: 0.15, rotAxis: 'x', speed: 0.15 },
      { radius: 7, tube: 0.006, color: 0x8b5cf6, opacity: 0.1, rotAxis: 'y', speed: -0.1 },
      { radius: 9, tube: 0.005, color: 0x00f0ff, opacity: 0.06, rotAxis: 'z', speed: 0.08 },
    ];

    ringConfigs.forEach(cfg => {
      const geometry = new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 100);
      const material = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: cfg.opacity,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      ring.userData = { rotAxis: cfg.rotAxis, speed: cfg.speed };
      scene.add(ring);
      holoRings.push(ring);
    });
  }

  /* ---- Data Streams — flowing line particles ---- */
  function createDataStreams() {
    const count = CONFIG.STREAM_COUNT;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const cyan = new THREE.Color(0x00f0ff);
    const purple = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 30;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 15 - 5;
      velocities[i] = Math.random() * 0.02 + 0.005;
      sizes[i] = Math.random() * 2 + 0.5;

      const c = Math.random() > 0.5 ? cyan : purple;
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.userData = { velocities };

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uPixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        attribute float aSize;
        varying vec3 vColor;

        uniform float uPixelRatio;

        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPixelRatio * (50.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;

        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = (1.0 - smoothstep(0.0, 0.5, dist)) * 0.35;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    dataStreams = new THREE.Points(geometry, material);
    scene.add(dataStreams);
  }

  /* ---- Central AI Core — pulsing energy sphere ---- */
  function createCentralCore() {
    // Inner sphere
    const coreGeo = new THREE.SphereGeometry(0.4, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.25,
    });
    centralCore = new THREE.Mesh(coreGeo, coreMat);
    centralCore.position.set(0, 0, -2);
    scene.add(centralCore);

    // Outer glow
    const glowGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.04,
      blending: THREE.AdditiveBlending
    });
    coreGlow = new THREE.Mesh(glowGeo, glowMat);
    coreGlow.position.set(0, 0, -2);
    scene.add(coreGlow);

    // Wireframe orbit
    const wireGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
      blending: THREE.AdditiveBlending
    });
    const wireframe = new THREE.Mesh(wireGeo, wireMat);
    wireframe.position.set(0, 0, -2);
    centralCore.userData.wireframe = wireframe;
    scene.add(wireframe);
  }

  function createAmbientLight() {
    const light1 = new THREE.PointLight(0x00f0ff, 1.5, 35);
    light1.position.set(6, 4, 6);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x8b5cf6, 1.2, 30);
    light2.position.set(-6, -4, 4);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xec4899, 0.6, 20);
    light3.position.set(0, 6, -5);
    scene.add(light3);

    const ambient = new THREE.AmbientLight(0x111122, 0.3);
    scene.add(ambient);
  }

  function onMouseMove(e) {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }

  function onResize() {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    if (!isInitialized || !isTabVisible) return;
    animFrame = requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();

    // Smooth mouse follow
    mouseX += (targetMouseX - mouseX) * 0.04;
    mouseY += (targetMouseY - mouseY) * 0.04;

    // Camera parallax
    camera.position.x = mouseX * CONFIG.MOUSE_INFLUENCE;
    camera.position.y = -mouseY * CONFIG.MOUSE_INFLUENCE * 0.5;
    camera.lookAt(0, 0, -2);

    // Particles
    if (particles) {
      particles.rotation.y = elapsed * CONFIG.ROTATION_SPEED;
      particles.rotation.x = Math.sin(elapsed * 0.08) * 0.04;
      particles.material.uniforms.uTime.value = elapsed;
    }

    // Neural nodes
    if (neuralNodes) {
      neuralNodes.children.forEach((node, i) => {
        const pulse = 1 + Math.sin(elapsed * 1.5 + i * 0.7) * 0.35;
        node.scale.setScalar(pulse);
        node.position.y += Math.sin(elapsed * 0.4 + i * 0.9) * 0.0008;
        node.position.x += Math.cos(elapsed * 0.3 + i * 0.6) * 0.0005;
      });
      neuralNodes.rotation.y = elapsed * 0.03;
    }

    // Neural lines pulse
    if (neuralLines) {
      neuralLines.material.opacity = 0.08 + Math.sin(elapsed * 0.4) * 0.04;
      neuralLines.rotation.y = elapsed * 0.03;
    }

    // Holographic rings
    holoRings.forEach(ring => {
      const axis = ring.userData.rotAxis;
      const speed = ring.userData.speed;
      ring.rotation[axis] += speed * 0.01;
      // Subtle wobble
      ring.rotation.x += Math.sin(elapsed * 0.2) * 0.001;
    });

    // Data streams — flow upward
    if (dataStreams) {
      const pos = dataStreams.geometry.attributes.position.array;
      const vel = dataStreams.geometry.userData.velocities;
      for (let i = 0; i < vel.length; i++) {
        pos[i * 3 + 1] += vel[i]; // move up
        if (pos[i * 3 + 1] > 12) {
          pos[i * 3 + 1] = -12;
          pos[i * 3] = (Math.random() - 0.5) * 30;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
        }
      }
      dataStreams.geometry.attributes.position.needsUpdate = true;
    }

    // Central core pulse
    if (centralCore) {
      const coreScale = 1 + Math.sin(elapsed * 1.2) * 0.15;
      centralCore.scale.setScalar(coreScale);
      centralCore.material.opacity = 0.2 + Math.sin(elapsed * 1.5) * 0.1;

      if (coreGlow) {
        coreGlow.scale.setScalar(1 + Math.sin(elapsed * 0.8) * 0.2);
        coreGlow.material.opacity = 0.03 + Math.sin(elapsed * 1.0) * 0.02;
      }

      if (centralCore.userData.wireframe) {
        centralCore.userData.wireframe.rotation.x = elapsed * 0.1;
        centralCore.userData.wireframe.rotation.y = elapsed * 0.15;
      }
    }

    renderer.render(scene, camera);
  }

  function destroy() {
    isInitialized = false;
    isTabVisible = false;
    if (animFrame) cancelAnimationFrame(animFrame);
    document.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    
    // Properly dispose Three.js resources
    if (particles) {
      particles.geometry.dispose();
      particles.material.dispose();
      scene.remove(particles);
    }
    if (neuralNodes) {
      neuralNodes.children.forEach(node => {
        node.geometry.dispose();
        node.material.dispose();
      });
      scene.remove(neuralNodes);
    }
    if (neuralLines) {
      neuralLines.geometry.dispose();
      neuralLines.material.dispose();
      scene.remove(neuralLines);
    }
    if (dataStreams) {
      dataStreams.geometry.dispose();
      dataStreams.material.dispose();
      scene.remove(dataStreams);
    }
    if (centralCore) {
      centralCore.geometry.dispose();
      centralCore.material.dispose();
      scene.remove(centralCore);
    }
    if (coreGlow) {
      coreGlow.geometry.dispose();
      coreGlow.material.dispose();
      scene.remove(coreGlow);
    }
    if (centralCore.userData.wireframe) {
      centralCore.userData.wireframe.geometry.dispose();
      centralCore.userData.wireframe.material.dispose();
      scene.remove(centralCore.userData.wireframe);
    }
    holoRings.forEach(ring => {
      ring.geometry.dispose();
      ring.material.dispose();
      scene.remove(ring);
    });
    
    if (renderer) {
      renderer.dispose();
      renderer.forceContextLoss();
    }
  }

  return { init, destroy };
})();
