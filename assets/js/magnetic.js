/* ============================================================
   MAGNETIC — Magnetic Button Effects
   ============================================================ */
const Magnetic = (() => {
  let hasInitialized = false; // Prevent double initialization

  function init() {
    // Prevent double initialization
    if (hasInitialized) {
      console.warn('[Magnetic] Already initialized, skipping duplicate call.');
      return;
    }
    hasInitialized = true;

    // Don't run on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const magnets = document.querySelectorAll('.magnetic-wrap');
    magnets.forEach(wrap => {
      const btn = wrap.querySelector('.btn, a, button') || wrap;
      const strength = parseFloat(wrap.dataset.strength) || 0.3;
      const area = parseFloat(wrap.dataset.area) || 80;

      wrap.addEventListener('mousemove', (e) => {
        const rect = wrap.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const dist = Math.sqrt(distX * distX + distY * distY);

        if (dist < area) {
          const pullX = distX * strength;
          const pullY = distY * strength;
          btn.style.transform = `translate(${pullX}px, ${pullY}px)`;
        }
      });

      wrap.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(() => {
          btn.style.transition = '';
        }, 500);
      });
    });
  }

  return { init };
})();
