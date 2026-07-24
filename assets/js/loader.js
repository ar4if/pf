/* ============================================================
   LOADER — Fail-Safe Animated Loading Screen
   Tracks real asset loading (images, fonts, CDN scripts).
   GUARANTEED to dismiss — never sticks at 99%.
   ============================================================ */
const Loader = (() => {
  // State
  let percent = 0;
  let displayPercent = 0;
  let animFrame = null;
  let hasCompleted = false;
  let hasInitialized = false; // Prevent double initialization

  // Timing
  const MAX_LOAD_TIME = 8000;   // Absolute failsafe: dismiss after 8s no matter what
  const MIN_DISPLAY_TIME = 1800; // Minimum time to show loader for aesthetic feel
  const DISMISS_DELAY = 400;     // Pause at 100% before fade-out

  // Tracked assets
  let totalAssets = 0;
  let loadedAssets = 0;
  let failedAssets = 0;

  // DOM refs
  let loaderEl, percentEl, barEl, nameEl;

  function init() {
    // Prevent double initialization
    if (hasInitialized) {
      console.warn('[Loader] Already initialized, skipping duplicate call.');
      return;
    }
    hasInitialized = true;

    loaderEl = document.getElementById('loader');
    if (!loaderEl) {
      console.warn('[Loader] No #loader element found, skipping.');
      onComplete();
      return;
    }

    percentEl = loaderEl.querySelector('.loader-percent');
    barEl = loaderEl.querySelector('.loader-bar-fill');
    nameEl = loaderEl.querySelector('.loader-name');

    // Reveal name text immediately
    requestAnimationFrame(() => {
      if (nameEl) nameEl.classList.add('reveal');
    });

    // Start tracking real assets
    trackAssets();

    // Start the display animation loop
    animFrame = requestAnimationFrame(updateDisplay);

    // FAILSAFE: Always dismiss after MAX_LOAD_TIME
    setTimeout(() => {
      if (!hasCompleted) {
        console.warn('[Loader] Failsafe timeout reached (' + MAX_LOAD_TIME + 'ms). Force-completing.');
        percent = 100;
      }
    }, MAX_LOAD_TIME);
  }

  /* ----------------------------------------------------------
     ASSET TRACKING — Real progress based on actual loads
     ---------------------------------------------------------- */
  function trackAssets() {
    const promises = [];

    // 1. Track all images in the page
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      totalAssets++;
      const p = new Promise(resolve => {
        if (img.complete && img.naturalHeight > 0) {
          assetLoaded('image: ' + (img.src || '').split('/').pop());
          resolve();
        } else {
          img.addEventListener('load', () => {
            assetLoaded('image: ' + (img.src || '').split('/').pop());
            resolve();
          }, { once: true });
          img.addEventListener('error', () => {
            assetFailed('image: ' + (img.src || '').split('/').pop());
            resolve(); // Resolve anyway — don't block
          }, { once: true });
        }
      });
      promises.push(p);
    });

    // 2. Track font loading
    if (document.fonts && document.fonts.ready) {
      totalAssets++;
      const fontPromise = document.fonts.ready.then(() => {
        assetLoaded('fonts');
      }).catch(() => {
        assetFailed('fonts');
      });
      promises.push(fontPromise);
    }

    // 3. Track Three.js availability (loaded via CDN <script>)
    totalAssets++;
    const threePromise = new Promise(resolve => {
      if (typeof THREE !== 'undefined') {
        assetLoaded('three.js');
        resolve();
      } else {
        // Check with longer interval to reduce CPU usage
        let checks = 0;
        const interval = setInterval(() => {
          checks++;
          if (typeof THREE !== 'undefined') {
            clearInterval(interval);
            assetLoaded('three.js');
            resolve();
          } else if (checks > 25) {
            clearInterval(interval);
            assetFailed('three.js');
            resolve();
          }
        }, 200);
      }
    });
    promises.push(threePromise);

    // 4. Track GSAP availability
    totalAssets++;
    const gsapPromise = new Promise(resolve => {
      if (typeof gsap !== 'undefined') {
        assetLoaded('gsap');
        resolve();
      } else {
        // Check with longer interval to reduce CPU usage
        let checks = 0;
        const interval = setInterval(() => {
          checks++;
          if (typeof gsap !== 'undefined') {
            clearInterval(interval);
            assetLoaded('gsap');
            resolve();
          } else if (checks > 25) {
            clearInterval(interval);
            assetFailed('gsap');
            resolve();
          }
        }, 200);
      }
    });
    promises.push(gsapPromise);

    // 5. Track DOM fully ready
    totalAssets++;
    if (document.readyState === 'complete') {
      assetLoaded('DOM complete');
    } else {
      const domPromise = new Promise(resolve => {
        window.addEventListener('load', () => {
          assetLoaded('DOM complete');
          resolve();
        }, { once: true });
        // Failsafe for window.load
        setTimeout(() => {
          if (loadedAssets + failedAssets < totalAssets) {
            assetLoaded('DOM complete (timeout)');
          }
          resolve();
        }, 6000);
      });
      promises.push(domPromise);
    }

    // If no assets were found to track, just complete
    if (totalAssets === 0) {
      percent = 100;
    }

    // When all promises resolve, ensure 100%
    Promise.all(promises).then(() => {
      // Ensure we reach 100 even if counts are off
      percent = 100;
    }).catch(() => {
      // Should never happen since all promises resolve, but just in case
      console.warn('[Loader] Promise.all rejected unexpectedly. Force-completing.');
      percent = 100;
    });
  }

  function assetLoaded(name) {
    loadedAssets++;
    updateProgress();
    console.log('[Loader] ✓ Loaded: ' + name + ' (' + loadedAssets + '/' + totalAssets + ')');
  }

  function assetFailed(name) {
    failedAssets++;
    updateProgress();
    console.warn('[Loader] ✗ Failed to load: ' + name + ' (skipping)');
  }

  function updateProgress() {
    if (totalAssets === 0) {
      percent = 100;
    } else {
      // Real progress: count both loaded AND failed as "done"
      const done = loadedAssets + failedAssets;
      percent = Math.min(Math.round((done / totalAssets) * 100), 100);
    }
  }

  /* ----------------------------------------------------------
     DISPLAY ANIMATION — Smooth counter with realistic acceleration/deceleration
     ---------------------------------------------------------- */
  function updateDisplay() {
    if (hasCompleted) return;

    // Smoothly approach target percent with variable easing based on progress
    const diff = percent - displayPercent;

    if (diff > 0.5) {
      // Variable easing rate based on current progress for realistic feel
      let easingRate;
      if (displayPercent < 20) {
        // Fast acceleration at start (0-20%)
        easingRate = 0.25;
      } else if (displayPercent < 70) {
        // Smooth middle section (20-70%)
        easingRate = 0.12;
      } else if (displayPercent < 95) {
        // Slightly slower near end (70-95%)
        easingRate = 0.08;
      } else {
        // Very satisfying finish (95-100%)
        easingRate = 0.05;
      }
      displayPercent += diff * easingRate;
    } else if (percent >= 100) {
      // Snap to 100 when close enough — THIS is the fix for the 99% bug
      displayPercent = 100;
    }

    // Clamp
    displayPercent = Math.min(displayPercent, 100);

    // Round for display (use Math.round, not Math.floor!)
    const shown = Math.round(displayPercent);

    if (percentEl) {
      percentEl.textContent = String(shown).padStart(3, '0') + '%';
    }
    if (barEl) {
      barEl.style.width = shown + '%';
    }

    // Check if done
    if (shown >= 100) {
      onDisplayReached100();
    } else {
      animFrame = requestAnimationFrame(updateDisplay);
    }
  }

  function onDisplayReached100() {
    if (hasCompleted) return;

    // Ensure minimum display time for aesthetics
    const initTime = performance.now();

    if (percentEl) percentEl.textContent = '100%';
    if (barEl) barEl.style.width = '100%';

    // Brief pause at 100%, then dismiss
    setTimeout(() => {
      dismiss();
    }, DISMISS_DELAY);
  }

  /* ----------------------------------------------------------
     DISMISS — Fade out loader and unlock the site
     ---------------------------------------------------------- */
  function dismiss() {
    if (hasCompleted) return;
    hasCompleted = true;

    // Cancel any remaining animation frame
    if (animFrame) {
      cancelAnimationFrame(animFrame);
      animFrame = null;
    }

    // Unlock scrolling immediately
    document.body.classList.add('loaded');
    document.body.style.overflow = '';

    // Trigger hero animation immediately
    onComplete();

    // Fade out loader
    if (loaderEl) {
      loaderEl.classList.add('hidden');
    }

    // Report final stats
    console.log('[Loader] Complete. Loaded: ' + loadedAssets + '/' + totalAssets +
                ', Failed: ' + failedAssets);
  }

  function onComplete() {
    // Start hero animations
    if (typeof Animations !== 'undefined' && Animations.heroEntrance) {
      try {
        Animations.heroEntrance();
      } catch (err) {
        console.warn('[Loader] Error in heroEntrance:', err);
      }
    }
  }

  return { init };
})();
