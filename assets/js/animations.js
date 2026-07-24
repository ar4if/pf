/* ============================================================
   ANIMATIONS — GSAP Scroll Animations & Effects
   Enhanced: Cinematic hero name animation with character
   stagger, gradient sweep, glow reveal
   ============================================================ */
const Animations = (() => {
  let scrollProgressBar;
  let hasInitialized = false; // Prevent double initialization

  function init() {
    // Prevent double initialization
    if (hasInitialized) {
      console.warn('[Animations] Already initialized, skipping duplicate call.');
      return;
    }
    hasInitialized = true;

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP/ScrollTrigger not loaded');
      document.querySelectorAll('.reveal, .reveal-blur').forEach(el => {
        el.classList.add('active');
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    scrollProgressBar = document.getElementById('scroll-progress');

    setupScrollProgress();
    setupRevealAnimations();
    setupParallax();
    setupNavbar();
    setupTextReveals();
    setupSectionTransitions();
  }

  /* --- Progressive Build Name Animation --- */
  function progressiveBuildAnimation() {
    const nameText = document.getElementById('hero-name-text');
    if (!nameText) return;

    const fullName = 'Arif Mohiuddin';
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Build progressive prefixes: A, AR, ARI, ARIF, ARIF , ARIF M, etc.
    for (let i = 1; i <= fullName.length; i++) {
      const prefix = fullName.substring(0, i);
      
      tl.to(nameText, {
        text: { value: prefix },
        opacity: 1,
        duration: 0.15,
        ease: 'power2.out'
      }, i * 0.12);
    }

    // Add subtle glow effect during build
    tl.fromTo('.hero-name-glow',
      { opacity: 0.3, scale: 0.95 },
      { 
        opacity: 0.8, 
        scale: 1.05, 
        duration: 0.8, 
        ease: 'power2.out' 
      }, 0.1
    )
    .to('.hero-name-glow',
      { opacity: 0, duration: 1.2, ease: 'power2.in' }, '-=0.5'
    );

    return tl.duration();
  }

  /* --- Hero Entrance — Cinematic sequence with progressive name build animation --- */
  function heroEntrance() {
    if (typeof gsap === 'undefined') {
      document.querySelectorAll('.hero-content .reveal, .hero-content .reveal-blur').forEach(el => {
        el.classList.add('active');
      });
      document.querySelectorAll('.hero-char').forEach(c => {
        c.style.opacity = 1;
        c.style.transform = 'none';
        c.style.filter = 'none';
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    // 1. Badge slides in
    tl.fromTo('.hero-badge',
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1 }, 0.1
    )

    // 2. Name — progressive build animation with fade-in and upward motion
    .fromTo('#hero-name-text',
      {
        opacity: 0,
        y: 8,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, 0.3
    )
    .add(() => progressiveBuildAnimation(), 0.35)

    // 3. Title typed text area
    .fromTo('.hero-title',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }, 2.5
    )

    // 4. Description blur reveal
    .fromTo('.hero-description',
      { opacity: 0, y: 20, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 }, 2.7
    )

    // 5. CTA buttons stagger in
    .fromTo('.hero-cta .btn',
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12 }, 2.9
    )

    // 6. Hero image
    .fromTo('.hero-image-container',
      { opacity: 0, scale: 0.88, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: 'expo.out' }, 0.4
    )
    .fromTo('.hero-image-frame',
      { opacity: 0, scale: 0.85 },
      { opacity: 0.6, scale: 1, duration: 1 }, 0.6
    )

    // 7. Floating elements pop in
    .fromTo('.hero-float',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.15 }, 1.2
    )

    // 8. Scroll indicator
    .fromTo('.hero-scroll-indicator',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6 }, 3.2
    );
  }

  /* --- Scroll Progress Bar --- */
  function setupScrollProgress() {
    if (!scrollProgressBar) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (scrollTop / docHeight) * 100;
          scrollProgressBar.style.width = progress + '%';
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* --- Scroll Reveal Animations --- */
  function setupRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    const blurs = document.querySelectorAll('.reveal-blur');
    blurs.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 40, filter: 'blur(12px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    const grids = document.querySelectorAll('.skills-grid, .certificates-grid, .projects-grid');
    grids.forEach(grid => {
      const cards = grid.children;
      gsap.fromTo(cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  /* --- Parallax Effects --- */
  function setupParallax() {
    const orbs = document.querySelectorAll('.gradient-orb');
    orbs.forEach(orb => {
      gsap.to(orb, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: orb.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });
  }

  /* --- Navbar Scroll State --- */
  function setupNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    ScrollTrigger.create({
      start: 80,
      onUpdate: (self) => {
        if (self.scroll() > 80) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });
  }

  /* --- Text Reveals --- */
  function setupTextReveals() {
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
      gsap.fromTo(title,
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    const labels = document.querySelectorAll('.section-label');
    labels.forEach(label => {
      gsap.fromTo(label,
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: label,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }

  /* --- Section Transitions --- */
  function setupSectionTransitions() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      gsap.fromTo(section,
        { opacity: 0.5 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 30%',
            scrub: true
          }
        }
      );
    });
  }

  return { init, heroEntrance };
})();
