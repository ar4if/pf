# AI_RULES.md
# Arif Mohiuddin Portfolio — AI Assistant Guidelines

## PROJECT OVERVIEW

This is a premium, award-worthy portfolio website for Arif Mohiuddin, an AI Automation Developer. The site features cinematic animations, 3D effects, glassmorphism design, and smooth interactions. All modifications must preserve the existing design quality and user experience.

---

## ABSOLUTE PROHIBITIONS

### NEVER DO THESE THINGS

- ❌ DO NOT redesign the website
- ❌ DO NOT change the color palette
- ❌ DO NOT modify typography (font families, sizes, weights, spacing)
- ❌ DO NOT change the Hero section layout or design
- ❌ DO NOT modify the Loader animation or timing
- ❌ DO NOT change GSAP animations or easing
- ❌ DO NOT modify Lenis smooth scroll configuration
- ❌ DO NOT change Three.js scene or effects
- ❌ DO NOT alter the navbar design or behavior
- ❌ DO NOT modify section order or structure
- ❌ DO NOT change spacing, margins, or padding unless fixing a visual bug
- ❌ DO NOT remove or add sections without explicit approval
- ❌ DO NOT change the glassmorphism design system
- ❌ DO NOT modify the gradient system
- ❌ DO NOT change the glow effects
- ❌ DO NOT alter the custom cursor behavior
- ❌ DO NOT modify the magnetic button effects
- ❌ DO NOT change the responsive breakpoints
- ❌ DO NOT alter the mobile menu behavior
- ❌ DO NOT modify the scroll progress bar
- ❌ DO NOT change the floating particle effects
- ❌ DO NOT alter the neural network animation
- ❌ DO NOT modify the holographic rings
- ❌ DO NOT change the data streams
- ❌ DO NOT alter the central core animation
- ❌ DO NOT modify the typing text effect
- ❌ DO NOT change the project card design
- ❌ DO NOT alter the skill card design
- ❌ DO NOT modify the timeline design
- ❌ DO NOT change the contact card design
- ❌ DO NOT alter the certificate card design
- ❌ DO NOT modify the footer design
- ❌ DO NOT change the favicon
- ❌ DO NOT alter the SEO meta tags without explicit approval
- ❌ DO NOT modify the Open Graph tags without explicit approval
- ❌ DO NOT change the Twitter Card tags without explicit approval
- ❌ DO NOT modify the canonical URL without explicit approval
- ❌ DO NOT change the image alt text
- ❌ DO NOT modify ARIA labels unless fixing accessibility issues
- ❌ DO NOT change the social media links without explicit approval
- ❌ DO NOT alter the email address
- ❌ DO NOT modify the phone number
- ❌ DO NOT change the WhatsApp link
- ❌ DO NOT alter the PDF file paths
- ❌ DO NOT modify the hero image path without explicit approval
- ❌ DO NOT change the CDN script versions without testing
- ❌ DO NOT add new dependencies without explicit approval
- ❌ DO NOT remove existing dependencies
- ❌ DO NOT modify the initialization order of JavaScript modules
- ❌ DO NOT change the global initialization guards
- ❌ DO NOT remove the `hasInitialized` checks
- ❌ DO NOT modify the failsafe timeout in the loader
- ❌ DO NOT change the minimum display time in the loader
- ❌ DO NOT alter the dismiss delay in the loader
- ❌ DO NOT modify the easing rates in the loader progress animation
- ❌ DO NOT change the RAF loop synchronization between Lenis and GSAP
- ❌ DO NOT modify the GSAP ticker lag smoothing
- ❌ DO NOT alter the ScrollTrigger scrub values
- ❌ DO NOT change the ScrollTrigger start/end positions
- ❌ DO NOT modify the stagger values in GSAP animations
- ❌ DO NOT change the duration values in GSAP animations
- ❌ DO NOT alter the easing functions in GSAP animations
- ❌ DO NOT modify the Three.js particle count
- ❌ DO NOT change the Three.js neural node count
- ❌ DO NOT alter the Three.js connection distance
- ❌ DO NOT modify the Three.js camera position
- ❌ DO NOT change the Three.js fog settings
- ❌ DO NOT alter the Three.js light positions or intensities
- ❌ DO NOT modify the Three.js shader code
- ❌ DO NOT change the cursor trail count
- ❌ DO NOT alter the cursor follow speed
- ❌ DO NOT modify the magnetic button strength
- ❌ DO NOT change the magnetic button area
- ❌ DO NOT alter the CSS custom properties (variables)
- ❌ DO NOT modify the border radius values
- ❌ DO NOT change the easing function variables
- ❌ DO NOT alter the glass blur values
- ❌ DO NOT modify the container width
- ❌ DO NOT change the section padding values
- ❌ DO NOT alter the font family assignments
- ❌ DO NOT modify the color variable assignments
- ❌ DO NOT change the glow opacity values
- ❌ DO NOT alter the shadow values
- ❌ DO NOT modify the transition durations
- ❌ DO NOT change the animation durations
- ❌ DO NOT alter the keyframe animations
- ❌ DO NOT modify the media query breakpoints
- ❌ DO NOT change the mobile-specific styles
- ❌ DO NOT alter the touch device detection
- ❌ DO NOT modify the cursor hiding on touch devices
- ❌ DO NOT change the hover state styles
- ❌ DO NOT alter the active state styles
- ❌ DO NOT modify the focus-visible styles
- ❌ DO NOT change the will-change properties
- ❌ DO NOT alter the GPU acceleration hints
- ❌ DO NOT modify the z-index values
- ❌ DO NOT change the overflow settings
- ❌ DO NOT alter the position values
- ❌ DO NOT modify the display values
- ❌ DO NOT change the flex/grid layouts
- ❌ DO NOT alter the transform properties
- ❌ DO NOT modify the filter properties
- ❌ DO NOT change the backdrop-filter values
- ❌ DO NOT alter the mix-blend-mode values
- ❌ DO NOT modify the opacity values
- ❌ DO NOT change the visibility values
- ❌ DO NOT alter the pointer-events values

---

## DESIGN SYSTEM RULES

### Color Palette

The color palette is strictly defined in CSS custom properties. NEVER change these values:

**Core Colors:**
- `--bg-primary: #06060b` (Main background)
- `--bg-secondary: #0c0c14` (Secondary background)
- `--bg-tertiary: #12121e` (Tertiary background)
- `--bg-card: rgba(15, 15, 25, 0.6)` (Card background)

**Accent Colors:**
- `--cyan: #00f0ff` (Primary accent)
- `--purple: #8b5cf6` (Secondary accent)
- `--pink: #ec4899` (Tertiary accent)
- `--violet: #a78bfa` (Supporting accent)

**Text Colors:**
- `--text-primary: #f0f0f5` (Primary text)
- `--text-secondary: rgba(240, 240, 245, 0.7)` (Secondary text)
- `--text-tertiary: rgba(240, 240, 245, 0.4)` (Tertiary text)

**Glass System:**
- `--glass-bg: rgba(15, 15, 30, 0.5)` (Glass background)
- `--glass-border: rgba(255, 255, 255, 0.06)` (Glass border)
- `--glass-highlight: rgba(255, 255, 255, 0.03)` (Glass highlight)
- `--glass-blur: 20px` (Glass blur amount)

### Typography

**Font Families (NEVER CHANGE):**
- `--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- `--font-heading: 'Outfit', 'Inter', sans-serif`
- `--font-mono: 'JetBrains Mono', monospace`

**Font Usage:**
- Body text: Inter (300, 400, 500, 600, 700)
- Headings: Outfit (300, 400, 500, 600, 700, 800, 900)
- Code/Technical: JetBrains Mono (400, 500, 600)
- Monospace elements: JetBrains Mono

### Spacing System

**NEVER CHANGE these spacing values:**
- `--section-padding: clamp(80px, 10vw, 140px)`
- `--container-width: 1280px`
- `--container-padding: clamp(20px, 5vw, 60px)`

### Border Radius

**NEVER CHANGE these radius values:**
- `--radius-sm: 8px`
- `--radius-md: 12px`
- `--radius-lg: 20px`
- `--radius-xl: 28px`
- `--radius-full: 999px`

### Easing Functions

**NEVER CHANGE these easing values:**
- `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`
- `--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)`
- `--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)`

---

## ANIMATION RULES

### GSAP Animation Standards

**Initialization Order (NEVER CHANGE):**
1. Lenis smooth scroll initializes FIRST
2. Loader.init()
3. ThreeScene.init()
4. Cursor.init()
5. Magnetic.init()
6. Animations.init()

**GSAP Settings (NEVER CHANGE):**
- GSAP ticker drives RAF loop for both GSAP and Lenis
- `gsap.ticker.lagSmoothing(0)` — disabled for performance
- Lenis connects to GSAP ticker via `lenis.on('scroll', ScrollTrigger.update)`

 **ScrollTrigger Standards:**
- Start position: `'top 85%'` or `'top 90%'` for reveals
- Toggle actions: `'play none none none'` for one-time animations
- Scrub: `true` for continuous scroll-linked animations
- Scrub value: `1` for parallax effects

**Animation Durations (NEVER CHANGE without explicit approval):**
- Reveal animations: 0.8s - 1.2s
- Hero entrance: 0.6s - 1.4s
- Stagger: 0.1s - 0.15s
- Parallax scrub: 1

**Easing Standards:**
- Primary: `'expo.out'` or `'power3.out'`
- Secondary: `'power2.out'`
- Never use linear or basic ease-in/out

### Three.js Animation Standards

**Configuration (NEVER CHANGE):**
- PARTICLE_COUNT: 800
- NEURAL_NODE_COUNT: 45
- NEURAL_CONNECTION_DISTANCE: 5
- CAMERA_Z: 14
- MOUSE_INFLUENCE: 0.4
- ROTATION_SPEED: 0.00025
- STREAM_COUNT: 120

**Performance Settings (NEVER CHANGE):**
- Antialias: true
- Alpha: true
- PowerPreference: 'high-performance'
- Pixel ratio: Math.min(window.devicePixelRatio, 2)
- FogExp2: 0x06060b, 0.045

**Animation Loop (NEVER CHANGE):**
- Smooth mouse follow with 0.04 lerp factor
- Camera parallax based on mouse position
- Particles rotate with ROTATION_SPEED
- Neural nodes pulse with sine wave
- Data streams flow upward
- Central core pulses with sine wave

### Loader Animation Standards

**Timing (NEVER CHANGE):**
- MAX_LOAD_TIME: 8000ms (failsafe timeout)
- MIN_DISPLAY_TIME: 1800ms (minimum display)
- DISMISS_DELAY: 400ms (pause at 100%)

**Progress Animation Easing (NEVER CHANGE):**
- 0-20%: easingRate = 0.25 (fast acceleration)
- 20-70%: easingRate = 0.12 (smooth middle)
- 70-95%: easingRate = 0.08 (slower near end)
- 95-100%: easingRate = 0.05 (satisfying finish)

**Exit Animation (NEVER CHANGE):**
- Duration: 0.8s
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Scale: 1.08
- Blur: 12px

### Cursor Animation Standards

**Configuration (NEVER CHANGE):**
- TRAIL_COUNT: 8
- Outer cursor lerp: 0.12
- Inner cursor lerp: 0.3
- Trail fade rate: 0.04

**Touch Device Behavior (NEVER CHANGE):**
- Cursor is hidden on touch devices
- Magnetic effects disabled on touch devices
- Custom cursor replaced with system cursor

---

## RESPONSIVE DESIGN RULES

### Breakpoints (NEVER CHANGE)

- Desktop: Default (no max-width)
- Tablet: max-width: 900px
- Mobile: max-width: 768px
- Small Mobile: max-width: 480px
- Tiny Mobile: max-width: 400px

### Mobile-Specific Rules

**Navbar (NEVER CHANGE):**
- Below 768px: Nav links hidden, hamburger menu shown
- Mobile menu slides in from right
- Overlay appears when menu is open
- Body scroll locked when menu is open

**Hero Section (NEVER CHANGE):**
- Below 900px: Grid changes to single column
- Text aligns to center
- Image container centers

**Grid Layouts (NEVER CHANGE):**
- About grid: Single column below 768px
- Skills grid: Responsive grid (auto-fit)
- Projects grid: Single column below 400px
- Certificates grid: Single column below 400px
- Contact grid: Single column below 768px
- Timeline: Reduced padding below 768px

**Footer (NEVER CHANGE):**
- Below 768px: Flex direction column, text center
- Below 480px: Same as 768px

---

## JAVASCRIPT MODULE RULES

### Module Structure

**All modules MUST have:**
- IIFE pattern: `const ModuleName = (() => { ... })();`
- Initialization guard: `let hasInitialized = false;`
- Public API: `return { init, ... };`
- Prevent double initialization in init()

**Initialization Guard Pattern (NEVER CHANGE):**

```javascript
function init() {
  if (hasInitialized) {
    console.warn('[ModuleName] Already initialized, skipping duplicate call.');
    return;
  }
  hasInitialized = true;
  // ... initialization code
}
```

### Module Dependencies

**Initialization Order (NEVER CHANGE):**
1. app.js (main orchestrator)
2. loader.js (loading screen)
3. three-scene.js (3D background)
4. cursor.js (custom cursor)
5. magnetic.js (magnetic buttons)
6. animations.js (GSAP animations)

**Global Guards (NEVER CHANGE):**
- `window.__APP_INITIALIZED__` in app.js
- `window.__lenis` exposed globally for scroll-to

### Event Listener Rules

**NEVER add duplicate event listeners:**
- Use single handler for anchor links
- Use { once: true } for one-time events
- Check for existing listeners before adding

**Event Delegation:**
- Prefer event delegation over individual listeners
- Use `e.target.closest()` for dynamic elements

---

## PERFORMANCE RULES

### GPU Acceleration

**Always use GPU-accelerated properties:**
- `transform: translate() scale() rotate()`
- `opacity`
- `filter: blur()`

**NEVER use for animation:**
- `top`, `left`, `bottom`, `right`
- `width`, `height`
- `margin`, `padding`

**will-change Hints (NEVER REMOVE):**
- Add `will-change: transform` to animated elements
- Add `will-change: opacity` to fade elements
- Add `will-change: filter` to blur elements

### RAF Loop Optimization

**NEVER create multiple RAF loops:**
- GSAP ticker drives the main RAF loop
- Lenis syncs to GSAP ticker
- Three.js uses its own RAF loop (necessary)
- Custom cursor uses its own RAF loop (necessary)

### Memory Management

**Always cleanup:**
- Remove event listeners when destroying
- Cancel animation frames when stopping
- Dispose Three.js resources when destroying
- Clear intervals and timeouts

---

## ACCESSIBILITY RULES

### ARIA Labels (NEVER REMOVE)

**Required ARIA attributes:**
- `role="navigation"` on navbar
- `role="status"` on loader
- `role="progressbar"` on scroll progress
- `role="contentinfo"` on footer
- `role="dialog"` on mobile menu
- `aria-label` on interactive elements
- `aria-hidden="true"` on decorative elements

### Keyboard Navigation

**NEVER remove focus states:**
- `:focus-visible` styles on buttons
- `:focus-within` styles on cards
- Tab order must follow visual order

### Alt Text

**NEVER remove or change alt text:**
- Hero image: "Arif Mohiuddin — AI Automation Developer"
- All images must have descriptive alt text

### Color Contrast

**NEVER change colors that affect contrast:**
- Text must meet WCAG AA standards
- Interactive elements must have sufficient contrast
- Focus states must be visible

---

## SEO RULES

### Meta Tags (NEVER CHANGE without explicit approval)

**Required Meta Tags:**
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<title>` — Page title
- `<meta name="description">` — Page description
- `<meta name="keywords">` — Keywords
- `<meta name="author">` — Author name
- `<link rel="canonical">` — Canonical URL

**Open Graph Tags (NEVER CHANGE without explicit approval):**
- `og:title` — Page title
- `og:description` — Page description
- `og:type` — website
- `og:image` — Hero image path

**Twitter Card Tags (NEVER CHANGE without explicit approval):**
- `twitter:card` — summary_large_image
- `twitter:title` — Page title
- `twitter:description` — Page description
- `twitter:image` — Hero image path

### Favicon

**NEVER change the favicon:**
- Currently using inline SVG lightning bolt
- Path: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='28' font-size='28'>⚡</text></svg>`

---

## FILE STRUCTURE RULES

### Directory Structure (NEVER CHANGE)

```
d:/portfolio/
├── index.html
├── AI_RULES.md
├── PROJECT_CONTEXT.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── app.js
    │   ├── loader.js
    │   ├── three-scene.js
    │   ├── cursor.js
    │   ├── magnetic.js
    │   └── animations.js
    ├── images/
    │   ├── hero.png
    │   └── hero.jpeg
    ├── certificates-C41295.pdf
    └── certificates-C42817.pdf
```

### File Naming Conventions

**NEVER change file names:**
- HTML: `index.html`
- CSS: `style.css`
- JS: kebab-case (e.g., `app.js`, `loader.js`)
- Images: kebab-case or descriptive names
- PDFs: `certificates-{ID}.pdf`

---

## MODIFICATION RULES

### When Adding New Content

**ALWAYS follow these rules:**
1. Match existing design system (colors, typography, spacing)
2. Use existing CSS custom properties
3. Follow existing animation patterns
4. Maintain responsive behavior
5. Add proper ARIA labels
6. Test on all breakpoints
7. Verify performance (60 FPS)
8. Check accessibility

### When Modifying Existing Content

**ONLY modify if:**
1. Explicitly requested by user
2. Fixing a verified bug
3. Improving accessibility
4. Improving performance
5. Fixing a critical issue

**NEVER modify for:**
- Subjective preferences
- Personal taste
- "Modernization"
- "Improvement" without specific issue

### When Removing Content

**ONLY remove if:**
1. Explicitly requested by user
2. Content is broken beyond repair
3. Content is causing critical issues

**ALWAYS backup before removing**

---

## TESTING CHECKLIST

### Before Any Modification

**Verify:**
- [ ] Modification is explicitly requested
- [ ] Modification is necessary
- [ ] Design system will be preserved
- [ ] Animations will not be affected
- [ ] Responsive behavior will be maintained
- [ ] Performance will not degrade
- [ ] Accessibility will not be reduced

### After Any Modification

**Test:**
- [ ] Visual inspection on desktop
- [ ] Visual inspection on tablet (768px-900px)
- [ ] Visual inspection on mobile (<768px)
- [ ] All animations play smoothly
- [ ] No console errors
- [ ] No console warnings
- [ ] Performance is 60 FPS
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Touch interactions work
- [ ] Scroll behavior is smooth
- [ ] Loader completes to 100%
- [ ] Hero animations trigger correctly
- [ ] Scroll animations trigger correctly
- [ ] Mobile menu opens/closes correctly
- [ ] All links work
- [ ] All buttons work

---

## BUG FIXING RULES

### Bug Fixing Process

1. **Identify the bug:**
   - Reproduce the issue
   - Document the exact behavior
   - Note the browser/device

2. **Find the root cause:**
   - Locate the problematic code
   - Understand why it's happening
   - Determine the minimal fix

3. **Implement the fix:**
   - Make the smallest possible change
   - Use existing patterns
   - Preserve design system

4. **Test the fix:**
   - Verify the bug is resolved
   - Test on all browsers
   - Test on all devices
   - Check for side effects

5. **Document the fix:**
   - Add comments if necessary
   - Update documentation if needed

### Bug Fixing Principles

**ALWAYS:**
- Fix the root cause, not symptoms
- Use minimal changes
- Follow existing patterns
- Test thoroughly

**NEVER:**
- Add workarounds
- Ignore the root cause
- Make unnecessary changes
- Break existing functionality

---

## EMERGENCY PROTOCOLS

### If Something Breaks

1. **Stop immediately**
2. **Assess the damage**
3. **Revert the change**
4. **Investigate the cause**
5. **Try a different approach**

### If Unsure About a Change

1. **Ask for clarification**
2. **Explain the risks**
3. **Propose alternatives**
4. **Wait for approval**

### If User Requests Something Forbidden

1. **Explain why it's forbidden**
2. **Reference this document**
3. **Suggest alternatives**
4. **Maintain the design system**

---

## FINAL RULES

### Golden Rule

**Preserve the design quality above all else.**

This portfolio is designed to be award-worthy. Every modification must maintain or enhance that quality. Never compromise the design for convenience or personal preference.

### Trust the Design System

The design system exists for a reason. Use the CSS custom properties, follow the patterns, and maintain consistency. The design system is the foundation of the portfolio's quality.

### Less is More

When in doubt, do less. Minimal changes are less likely to break something. The portfolio is already excellent—most modifications are unnecessary.

### Test Everything

Never assume something works. Test every modification on multiple devices and browsers. Verify performance, accessibility, and user experience.

### Ask Questions

If you're unsure about anything, ask. It's better to ask than to make a mistake that breaks the portfolio.

---

## CONTACT INFORMATION

**Portfolio Owner:** Arif Mohiuddin
**Role:** AI Automation Developer
**Email:** arifmohiuddin726@gmail.com
**Phone:** +8801832519176

---

## DOCUMENTATION VERSION

**Version:** 1.0
**Last Updated:** 2025
**Purpose:** Guide AI assistants in modifying the portfolio safely

---

## SIGNATURE

This document is the authoritative guide for all modifications to the Arif Mohiuddin portfolio. Any modification that violates these rules is unauthorized and should be rejected.

**End of AI_RULES.md**
