/* ============================================================
   APP — Main Application Orchestrator
   Enhanced: Optimized Lenis smooth scrolling with GSAP sync,
   RAF-based update loop, mobile optimizations
   ============================================================ */

// Global initialization guard - prevents ANY duplicate initialization
if (!window.__APP_INITIALIZED__) {
  window.__APP_INITIALIZED__ = true;

  const App = (() => {
    let lenis;

    function init() {
      // Reset scroll to top on every page load
      window.scrollTo(0, 0);
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }

      // Init Lenis smooth scrolling FIRST
      initLenis();

      // Init modules
      Loader.init();
      ThreeScene.init();
      Cursor.init();
      Magnetic.init();
      Animations.init();

      // Setup navigation
      setupNav();

      // Typed text effect
      setupTypedText();
    }

  function initLenis() {
    if (typeof Lenis === 'undefined') {
      console.warn('[App] Lenis not loaded, using native scroll.');
      return;
    }

    // Detect mobile for tuned settings
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                     || window.innerWidth < 768;

    lenis = new Lenis({
      duration: isMobile ? 0.9 : 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: isMobile ? 1.2 : 0.9,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    // Connect Lenis to GSAP ticker for perfectly synced scroll-triggered animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      // Let GSAP drive the RAF loop for both GSAP and Lenis
      // This prevents double-RAF and ensures sync
      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      // Disable GSAP lag smoothing — prevents jank during heavy frames
      gsap.ticker.lagSmoothing(0);
    } else {
      // Fallback: standalone RAF loop if GSAP isn't loaded
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Expose globally for other modules (e.g. nav scroll-to)
    window.__lenis = lenis;

    console.log('[App] Lenis smooth scroll initialized' + (isMobile ? ' (mobile mode)' : ''));
  }

  function scrollTo(target, options = {}) {
    const defaults = { offset: -80, duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) };
    const opts = { ...defaults, ...options };

    if (lenis) {
      lenis.scrollTo(target, opts);
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY + (opts.offset || 0);
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }

  function setupNav() {
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    if (!hamburger || !mobileMenu) return;

    function toggleMenu() {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
      overlay.classList.toggle('visible');

      if (isOpen) {
        document.body.style.overflow = 'hidden';
        if (lenis) lenis.stop();
      } else {
        document.body.style.overflow = '';
        if (lenis) lenis.start();
      }
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu();
      });
    });

    // Smooth scroll for ALL anchor links — single handler, no duplicates
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#' || href.length <= 1) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        scrollTo(target);
      }
    });
  }

  function setupTypedText() {
    const el = document.querySelector('.typed-text');
    if (!el) return;

    const phrases = [
      'AI Automation Developer',
      'n8n Workflow Builder',
      'AI Agent Creator',
      'Automation Specialist'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPausing = false;

    function type() {
      const current = phrases[phraseIndex];

      if (isPausing) return;

      if (!isDeleting) {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
          isPausing = true;
          setTimeout(() => {
            isPausing = false;
            isDeleting = true;
            type();
          }, 2000);
          return;
        }
      } else {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      const speed = isDeleting ? 40 : 80;
      setTimeout(type, speed);
    }

    // Start after loader completes
    setTimeout(type, 3500);
  }

  // Start on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init, scrollTo };
})();

} // End of global initialization guard
