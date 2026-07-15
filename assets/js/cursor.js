/* ============================================================
   CURSOR — Custom Cursor + Trail
   ============================================================ */
const Cursor = (() => {
  let outerX = 0, outerY = 0;
  let innerX = 0, innerY = 0;
  let mouseX = 0, mouseY = 0;
  let outer, inner;
  let trails = [];
  const TRAIL_COUNT = 8;
  let isTouch = false;
  let hasInitialized = false; // Prevent double initialization

  function init() {
    // Prevent double initialization
    if (hasInitialized) {
      console.warn('[Cursor] Already initialized, skipping duplicate call.');
      return;
    }
    hasInitialized = true;

    // Don't init on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      isTouch = true;
      return;
    }

    outer = document.querySelector('.cursor-outer');
    inner = document.querySelector('.cursor-inner');

    if (!outer || !inner) return;

    // Create trail particles
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
      trails.push({
        el: trail,
        x: 0, y: 0,
        life: 0
      });
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', show);
    document.addEventListener('mouseleave', hide);

    // Add hover detection to interactive elements
    setupHoverTargets();

    animate();
  }

  function onMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Add trail
    addTrail(mouseX, mouseY);
  }

  let trailIndex = 0;
  function addTrail(x, y) {
    const t = trails[trailIndex % TRAIL_COUNT];
    t.x = x;
    t.y = y;
    t.life = 1;
    t.el.style.left = x + 'px';
    t.el.style.top = y + 'px';
    t.el.style.opacity = 0.5;
    t.el.style.transform = 'translate(-50%, -50%) scale(1)';
    trailIndex++;
  }

  function animate() {
    // Smooth follow for outer cursor (elastic)
    outerX += (mouseX - outerX) * 0.12;
    outerY += (mouseY - outerY) * 0.12;

    // Snap for inner cursor
    innerX += (mouseX - innerX) * 0.3;
    innerY += (mouseY - innerY) * 0.3;

    if (outer) {
      outer.style.left = outerX + 'px';
      outer.style.top = outerY + 'px';
    }
    if (inner) {
      inner.style.left = innerX + 'px';
      inner.style.top = innerY + 'px';
    }

    // Fade trails
    trails.forEach(t => {
      if (t.life > 0) {
        t.life -= 0.04;
        t.el.style.opacity = t.life * 0.4;
        t.el.style.transform = `translate(-50%, -50%) scale(${t.life * 0.8})`;
        if (t.life <= 0) {
          t.el.style.opacity = 0;
        }
      }
    });

    requestAnimationFrame(animate);
  }

  function show() {
    if (outer) outer.style.opacity = 1;
    if (inner) inner.style.opacity = 1;
  }

  function hide() {
    if (outer) outer.style.opacity = 0;
    if (inner) inner.style.opacity = 0;
  }

  function setupHoverTargets() {
    const targets = document.querySelectorAll('a, button, .btn, .nav-hamburger, input, textarea, .cert-card, .skill-card, .project-card');
    targets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        if (outer) outer.classList.add('hovering');
      });
      target.addEventListener('mouseleave', () => {
        if (outer) outer.classList.remove('hovering');
      });
    });
  }

  return { init };
})();
