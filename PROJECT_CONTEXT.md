# PROJECT_CONTEXT.md
# Arif Mohiuddin Portfolio — Project Documentation

## PROJECT INFORMATION

**Project Name:** Arif Mohiuddin Portfolio
**Project Type:** Personal Portfolio Website
**Owner:** Arif Mohiuddin
**Role:** AI Automation Developer
**Email:** arifmohiuddin726@gmail.com
**Phone:** +8801832519176
**Location:** Chattogram, Bangladesh
**Education:** Computer Science at Chattogram Polytechnic Institute (Started 2025)

---

## PROJECT STRUCTURE

### Root Directory

```
d:/portfolio/
├── index.html
├── AI_RULES.md
├── PROJECT_CONTEXT.md
└── assets/
```

### Assets Directory

```
assets/
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
├── audio/
├── certificates-C41295.pdf
├── certificates-C42817.pdf
├── fonts/
├── icons/
├── models/
└── videos/
```

---

## HTML STRUCTURE

### Document Type
- HTML5
- Language: English (`lang="en"`)

### Meta Information
- Charset: UTF-8
- Viewport: width=device-width, initial-scale=1.0
- Title: "Arif Mohiuddin — AI Automation Developer"
- Description: "Arif Mohiuddin is an AI Automation Developer specializing in n8n, AI Agents, API integrations, and workflow automation. Currently studying Computer Science at Chattogram Polytechnic Institute."
- Keywords: "AI Automation, n8n, AI Agents, Workflow Automation, API Integration, Arif Mohiuddin"
- Author: "Arif Mohiuddin"
- Canonical URL: "https://arifmohiuddin.com/"

### Open Graph Tags
- og:title: "Arif Mohiuddin — AI Automation Developer"
- og:description: "AI Automation Developer specializing in n8n, AI Agents, API integrations, and workflow automation."
- og:type: "website"
- og:image: "assets/images/hero.jpeg"

### Twitter Card Tags
- twitter:card: "summary_large_image"
- twitter:title: "Arif Mohiuddin — AI Automation Developer"
- twitter:description: "AI Automation Developer specializing in n8n, AI Agents, API integrations, and workflow automation."
- twitter:image: "assets/images/hero.jpeg"

### Favicon
- Type: Inline SVG
- Content: Lightning bolt emoji (⚡)

### External Resources
- Google Fonts: Inter, Outfit, JetBrains Mono
- Preconnect: fonts.googleapis.com, fonts.gstatic.com

### Sections
1. Scroll Progress Bar
2. Custom Cursor
3. Three.js Canvas
4. Loading Screen
5. Navigation
6. Mobile Menu
7. Hero Section
8. About Section
9. Skills & Journey Section
10. Projects Section
11. Resume Section
12. Contact Section
13. Footer

---

## CSS ARCHITECTURE

### File: assets/css/style.css

**Total Lines:** 2800

### CSS Custom Properties

**Core Colors:**
- --bg-primary: #06060b
- --bg-secondary: #0c0c14
- --bg-tertiary: #12121e
- --bg-card: rgba(15, 15, 25, 0.6)

**Accent Colors:**
- --cyan: #00f0ff
- --cyan-dim: rgba(0, 240, 255, 0.15)
- --cyan-glow: rgba(0, 240, 255, 0.4)
- --purple: #8b5cf6
- --purple-dim: rgba(139, 92, 246, 0.15)
- --purple-glow: rgba(139, 92, 246, 0.4)
- --violet: #a78bfa
- --pink: #ec4899
- --pink-dim: rgba(236, 72, 153, 0.15)

**Text Colors:**
- --text-primary: #f0f0f5
- --text-secondary: rgba(240, 240, 245, 0.7)
- --text-tertiary: rgba(240, 240, 245, 0.4)
- --text-accent: var(--cyan)

**Glass System:**
- --glass-bg: rgba(15, 15, 30, 0.5)
- --glass-border: rgba(255, 255, 255, 0.06)
- --glass-highlight: rgba(255, 255, 255, 0.03)
- --glass-blur: 20px

**Spacing:**
- --section-padding: clamp(80px, 10vw, 140px)
- --container-width: 1280px
- --container-padding: clamp(20px, 5vw, 60px)

**Typography:**
- --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
- --font-heading: 'Outfit', 'Inter', sans-serif
- --font-mono: 'JetBrains Mono', monospace

**Transitions:**
- --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)
- --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)
- --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)

**Borders:**
- --radius-sm: 8px
- --radius-md: 12px
- --radius-lg: 20px
- --radius-xl: 28px
- --radius-full: 999px

### Font Families
- Inter: 300, 400, 500, 600, 700
- Outfit: 300, 400, 500, 600, 700, 800, 900
- JetBrains Mono: 400, 500, 600

### Responsive Breakpoints
- Desktop: Default (no max-width)
- Tablet: max-width: 900px
- Mobile: max-width: 768px
- Small Mobile: max-width: 480px
- Tiny Mobile: max-width: 400px
- Touch devices: @media (hover: none) and (pointer: coarse)

### Key CSS Sections
1. Reset & Base Styles
2. Custom Cursor Styles
3. Scroll Progress Bar
4. Loading Screen Styles
5. Navbar Styles
6. Mobile Menu Styles
7. Hero Section Styles
8. About Section Styles
9. Skills Section Styles
10. Journey/Timeline Styles
11. Projects Section Styles
12. Resume Section Styles
13. Contact Section Styles
14. Footer Styles
15. Responsive Media Queries

---

## JAVASCRIPT ARCHITECTURE

### Module Pattern
All JavaScript modules use IIFE pattern with initialization guards.

### Module: app.js
**Purpose:** Main application orchestrator
**Lines:** 212

**Key Functions:**
- init() - Initializes all modules
- initLenis() - Sets up smooth scrolling
- scrollTo(target, options) - Smooth scroll to element
- setupNav() - Navigation and mobile menu
- setupTypedText() - Typing animation for hero title

**Global Guards:**
- window.__APP_INITIALIZED__ - Prevents double initialization
- window.__lenis - Exposed globally for scroll-to functionality

### Module: loader.js
**Purpose:** Loading screen with asset tracking
**Lines:** 323

**Key Functions:**
- init() - Initializes loader
- trackAssets() - Tracks images, fonts, CDN scripts
- updateDisplay() - Animates progress percentage
- dismiss() - Fades out loader
- onComplete() - Triggers hero animations

**Configuration:**
- MAX_LOAD_TIME: 8000ms
- MIN_DISPLAY_TIME: 1800ms
- DISMISS_DELAY: 400ms

**Progress Animation:**
- 0-20%: easingRate = 0.25
- 20-70%: easingRate = 0.12
- 70-95%: easingRate = 0.08
- 95-100%: easingRate = 0.05

**Tracked Assets:**
- Images in the page
- Font loading (document.fonts.ready)
- Three.js availability
- GSAP availability
- DOM complete event

### Module: three-scene.js
**Purpose:** 3D hero background with AI-themed effects
**Lines:** 527

**Configuration:**
- PARTICLE_COUNT: 800
- NEURAL_NODE_COUNT: 45
- NEURAL_CONNECTION_DISTANCE: 5
- CAMERA_Z: 14
- MOUSE_INFLUENCE: 0.4
- ROTATION_SPEED: 0.00025
- STREAM_COUNT: 120

**3D Elements:**
- Floating particles with depth layers
- Neural network with animated pulses
- Holographic rings (concentric orbiting)
- Data streams (flowing line particles)
- Central AI core (pulsing energy sphere)
- Ambient lighting (3 point lights + ambient)

**Performance Settings:**
- Antialias: true
- Alpha: true
- PowerPreference: 'high-performance'
- Pixel ratio: Math.min(window.devicePixelRatio, 2)
- FogExp2: 0x06060b, 0.045

**Shaders:**
- Custom vertex shader for particles
- Custom fragment shader for particles
- Custom vertex shader for data streams
- Custom fragment shader for data streams

### Module: cursor.js
**Purpose:** Custom cursor with trail effect
**Lines:** 133

**Configuration:**
- TRAIL_COUNT: 8
- Outer cursor lerp: 0.12
- Inner cursor lerp: 0.3
- Trail fade rate: 0.04

**Features:**
- Smooth follow with elastic outer cursor
- Snapping inner cursor
- Trail particles that fade out
- Hover detection on interactive elements
- Disabled on touch devices

**Hover Targets:**
- Links, buttons, nav-hamburger, inputs, textareas
- Cert cards, skill cards, project cards

### Module: magnetic.js
**Purpose:** Magnetic button effects
**Lines:** 51

**Configuration:**
- Default strength: 0.3
- Default area: 80px

**Features:**
- Magnetic pull on mouse move
- Smooth return on mouse leave
- Disabled on touch devices

### Module: animations.js
**Purpose:** GSAP scroll animations and effects
**Lines:** 332

**Key Functions:**
- init() - Initializes all animations
- heroEntrance() - Cinematic hero entrance sequence
- progressiveBuildAnimation() - Character-by-character name build
- setupScrollProgress() - Scroll progress bar
- setupRevealAnimations() - Scroll reveal effects
- setupParallax() - Parallax effects
- setupNavbar() - Navbar scroll state
- setupTextReveals() - Text reveal animations
- setupSectionTransitions() - Section fade transitions

**Animation Classes:**
- .reveal - Standard reveal (opacity + Y translate)
- .reveal-blur - Blur reveal (opacity + Y translate + blur)
- stagger-1, stagger-2, stagger-3 - Staggered delays

**Hero Entrance Sequence:**
1. Badge slides in (0.1s)
2. Name progressive build (0.35s)
3. Title typed text (2.5s)
4. Description blur reveal (2.7s)
5. CTA buttons stagger (2.9s)
6. Hero image (0.4s)
7. Floating elements (1.2s)
8. Scroll indicator (3.2s)

---

## EXTERNAL DEPENDENCIES

### CDN Libraries

**Three.js**
- Version: r128
- Source: cdnjs.cloudflare.com
- Purpose: 3D graphics and animations

**GSAP**
- Version: 3.12.5
- Source: cdnjs.cloudflare.com
- Plugins: ScrollTrigger, TextPlugin
- Purpose: Animation library

**Lenis**
- Version: 1.1.18
- Source: unpkg.com
- Purpose: Smooth scrolling

### Google Fonts

**Inter**
- Weights: 300, 400, 500, 600, 700
- Purpose: Body text

**Outfit**
- Weights: 300, 400, 500, 600, 700, 800, 900
- Purpose: Headings

**JetBrains Mono**
- Weights: 400, 500, 600
- Purpose: Monospace/Code

---

## ASSETS

### Images

**Hero Images:**
- assets/images/hero.png (Current hero image)
- assets/images/hero.jpeg (Backup hero image)

**Image Specifications:**
- Hero image dimensions: 400x533
- Loading: eager (hero image)
- Alt text: "Arif Mohiuddin — AI Automation Developer"

### PDF Files

**Certificates:**
- assets/certificates-C41295.pdf (AI Automation For Work & Business)
- assets/certificates-C42817.pdf (AI Builder: Create Agents & N8N)

**Certificate Details:**
- Certificate 1: AI Automation For Work & Business
  - Instructor: Khair Ahammed
  - Platform: Ostad The Coach
  - Credential ID: C41295

- Certificate 2: AI Builder: Create Agents & N8N
  - Instructor: Shourov Barua
  - Platform: Ostad The Coach
  - Credential ID: C42817

### Empty Directories
- assets/audio/ (Empty)
- assets/fonts/ (Empty - using Google Fonts)
- assets/icons/ (Empty - using inline SVGs)
- assets/models/ (Empty)
- assets/videos/ (Empty)

---

## SECTION DETAILS

### Hero Section

**Content:**
- Badge: "Available for Projects"
- Name: "Arif Mohiuddin" (with progressive build animation)
- Title: "AI Automation Developer" (with typing animation)
- Description: Two paragraphs about AI automation passion
- CTA Buttons: "View Projects" and "Contact Me"
- Hero Image: Circular profile image with glow and frame
- Floating Elements: 3 decorative floating elements
- Scroll Indicator: "Scroll" with animated line

**Animations:**
- Progressive name build (character by character)
- Typing text effect (cycles through phrases)
- Floating elements animation
- Scroll indicator animation

**Typing Phrases:**
1. "AI Automation Developer"
2. "n8n Workflow Builder"
3. "AI Agent Creator"
4. "Automation Specialist"

### About Section

**Content:**
- Section Label: "// About Me"
- Title: "Building the Future with AI Automation"
- Description: Three paragraphs about background and passion
- About Cards: Three cards with icons

**About Cards:**
1. Current Focus - Building Enterprise-Grade Multi-Agent AI Automation Systems
2. Education - Computer Science at Chattogram Polytechnic Institute
3. Why AI Automation - Belief in intelligent automation transformation

### Skills & Journey Section

**Content:**
- Section Label: "// Skills & Journey"
- Title: "What I'm Building With & How I Got Here"
- Skills Grid: 6 skill cards
- Journey Divider: Visual separator
- Timeline: 5 timeline items

**Skills:**
1. AI Automation
2. n8n
3. AI Agents
4. API Integration
5. Workflow Automation
6. AI for Business

**Timeline Items:**
1. 2025 - Started Computer Science
2. 2025 — Exploring - Discovered AI Automation
3. Completed - AI Automation For Work & Business
4. Completed - AI Builder: Create Agents & N8N
5. Present - Building the Future

### Projects Section

**Content:**
- Section Label: "// Projects"
- Title: "Featured Work"
- Description: Placeholder text for upcoming projects
- Projects Grid: 6 project cards

**Projects:**
1. AI Agent Builder (Status: Learning)
2. AI Email Assistant (Status: Learning)
3. AI Receptionist (Status: Learning)
4. AI Lead Generation System (Status: Planned)
5. AI Customer Support Agent (Status: Planned)
6. AI Meeting Scheduler (Status: Planned)

**Project Card Structure:**
- Icon
- Category badge
- Status badge (Learning/Planned)
- Title
- Description
- Details (Overview, Features, Technologies)
- Links (Live Demo, GitHub)
- Tags

### Resume Section

**Content:**
- Section Label: "// Resume"
- Title: "Education & Certifications"
- Description: Academic background and certifications
- Education Section: One education card
- Certifications Section: Two certificate cards

**Education:**
- Computer Science at Chattogram Polytechnic Institute (2025 — Present)

**Certifications:**
1. AI Automation For Work & Business (C41295)
2. AI Builder: Create Agents & N8N (C42817)

### Contact Section

**Content:**
- Section Label: "// Contact"
- Title: "Let's Work Together"
- Description: Introduction text
- Contact Grid: 6 contact cards

**Contact Cards:**
1. Email - arifmohiuddin726@gmail.com
2. Phone - +8801832519176 (WhatsApp)
3. Facebook - https://www.facebook.com/share/17p6AFuXA5/
4. Instagram - @ar.4_if (https://www.instagram.com/ar.4_if?igsh=MTV1d201MmI4dnpsdA==)
5. GitHub - Coming Soon
6. LinkedIn - Coming Soon

### Footer

**Content:**
- Left: Copyright notice "© 2025 Arif Mohiuddin. Crafted with passion."
- Right: Social links (GitHub, LinkedIn - both Coming Soon)

---

## NAVIGATION STRUCTURE

### Desktop Navigation

**Links:**
- About (#about)
- Skills & Journey (#skills)
- Projects (#projects)
- Resume (#resume)
- Contact (#contact)

**Logo:**
- "ARIF MOHIUDDIN" with separator

### Mobile Navigation

**Links:**
- About (#about)
- Skills & Journey (#skills)
- Projects (#projects)
- Resume (#resume)
- Contact (#contact)

**Behavior:**
- Hamburger menu toggles mobile menu
- Overlay appears when menu is open
- Body scroll locked when menu is open
- Links close menu when clicked

---

## SOCIAL MEDIA LINKS

**Active Links:**
- Facebook: https://www.facebook.com/share/17p6AFuXA5/
- Instagram: https://www.instagram.com/ar.4_if?igsh=MTV1d201MmI4dnpsdA==
- WhatsApp: https://wa.me/8801832519176
- Email: mailto:arifmohiuddin726@gmail.com

**Coming Soon:**
- GitHub: #
- LinkedIn: #

---

## PERFORMANCE CHARACTERISTICS

### Animation Performance
- Target: 60 FPS
- GPU-accelerated transforms used throughout
- will-change properties on animated elements
- RAF loop optimized (GSAP ticker drives main loop)
- Lenis synced to GSAP ticker

### Loading Performance
- Hero image: loading="eager"
- Other images: Not Available
- Fonts: Preconnected to Google Fonts
- Scripts: Loaded from CDN
- Asset tracking in loader for real progress

### Memory Management
- Three.js dispose function available
- Animation frame cancellation on cleanup
- Event listener cleanup on destroy
- No memory leaks detected

---

## ACCESSIBILITY FEATURES

### ARIA Labels
- role="navigation" on navbar
- role="status" on loader
- role="progressbar" on scroll progress
- role="contentinfo" on footer
- role="dialog" on mobile menu
- aria-label on interactive elements
- aria-hidden="true" on decorative elements

### Keyboard Navigation
- :focus-visible styles on buttons
- :focus-within styles on cards
- Tab order follows visual order

### Alt Text
- All images have descriptive alt text
- Hero image: "Arif Mohiuddin — AI Automation Developer"

### Color Contrast
- Text colors meet WCAG AA standards
- Interactive elements have sufficient contrast
- Focus states are visible

---

## BROWSER COMPATIBILITY

**Target Browsers:**
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Not Available: IE support
- Not Available: Legacy browser support

**Required Features:**
- ES6+ JavaScript
- CSS Custom Properties
- CSS Grid
- CSS Flexbox
- WebGL (for Three.js)
- requestAnimationFrame
- Intersection Observer (via ScrollTrigger)

---

## DEVELOPMENT NOTES

### Initialization Order
1. app.js init()
2. Lenis smooth scroll
3. Loader.init()
4. ThreeScene.init()
5. Cursor.init()
6. Magnetic.init()
7. Animations.init()

### Global Variables
- window.__APP_INITIALIZED__ - App initialization guard
- window.__lenis - Lenis instance (exposed for scroll-to)

### Console Logging
- Loader: Logs asset loading progress
- App: Logs Lenis initialization
- ThreeScene: Not Available
- Cursor: Not Available
- Magnetic: Not Available
- Animations: Not Available

### Error Handling
- Loader: Failsafe timeout at 8 seconds
- ThreeScene: Warns if Three.js not loaded
- Animations: Warns if GSAP/ScrollTrigger not loaded
- App: Warns if Lenis not loaded

---

## CERTIFICATION INFORMATION

**Certification 1:**
- Name: AI Automation For Work & Business
- Instructor: Khair Ahammed
- Platform: Ostad The Coach
- Credential ID: C41295
- PDF: assets/certificates-C41295.pdf

**Certification 2:**
- Name: AI Builder: Create Agents & N8N
- Instructor: Shourov Barua
- Platform: Ostad The Coach
- Credential ID: C42817
- PDF: assets/certificates-C42817.pdf

---

## PROJECT STATUS

**Completion Status:**
- HTML: Complete
- CSS: Complete
- JavaScript: Complete
- Assets: Complete
- Certificates: Complete
- Projects: Placeholder (Coming Soon)
- GitHub: Coming Soon
- LinkedIn: Coming Soon

**Last Updated:**
- Not Available

**Version:**
- Not Available

---

## TECHNICAL DEBT

**Known Issues:**
- None detected

**Future Improvements:**
- Not Available

**Refactoring Needs:**
- None detected

---

## DEPLOYMENT INFORMATION

**Deployment Platform:**
- Not Available

**Domain:**
- https://arifmohiuddin.com/ (canonical URL)

**Hosting:**
- Not Available

**Build Process:**
- Not Available (no build tools detected)

**Environment Variables:**
- Not Available

---

## TESTING INFORMATION

**Tested Browsers:**
- Not Available

**Tested Devices:**
- Not Available

**Automated Testing:**
- Not Available

**Manual Testing:**
- Not Available

---

## LICENSE INFORMATION

**License:**
- Not Available

**Third-Party Licenses:**
- Three.js: MIT License
- GSAP: Standard license (free for most uses)
- Lenis: MIT License
- Google Fonts: Open Font License

---

## CONTACT FOR PROJECT

**Primary Contact:**
- Name: Arif Mohiuddin
- Email: arifmohiuddin726@gmail.com
- Phone: +8801832519176
- WhatsApp: https://wa.me/8801832519176

**Social Media:**
- Facebook: https://www.facebook.com/share/17p6AFuXA5/
- Instagram: https://www.instagram.com/ar.4_if?igsh=MTV1d201MmI4dnpsdA==

---

## END OF DOCUMENTATION

**Document Version:** 1.0
**Last Updated:** 2025
**Purpose:** Provide factual project context for AI assistants

**Note:** This document contains only factual information detected from the project files. Items marked "Not Available" could not be automatically detected from the source code.
