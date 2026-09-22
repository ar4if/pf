# Arif Mohiuddin Portfolio

A modern, interactive personal portfolio website showcasing AI automation projects, skills, and certifications.

## Project Overview

**Project Name:** Arif Mohiuddin Portfolio  
**Type:** Personal Portfolio Website  
**Owner:** Arif Mohiuddin  
**Role:** AI Automation Developer  
**Email:** arifmohiuddin726@gmail.com  
**Phone:** +8801832519176 / 01824418009  
**Location:** Chattogram, Bangladesh  
**Education:** Computer Science at Chattogram Polytechnic Institute (Started 2025)

## Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)** - IIFE modules, modern syntax

### Libraries & Dependencies
- **Three.js** (r128) - 3D graphics and animations via CDN
- **GSAP** (3.12.5) - Animation library with ScrollTrigger and TextPlugin via CDN
- **Lenis** (1.1.18) - Smooth scrolling via CDN

### Fonts
- **Inter** - Body text (300, 400, 500, 600, 700)
- **Outfit** - Headings (300, 400, 500, 600, 700, 800, 900)
- **JetBrains Mono** - Monospace/code (400, 500, 600)

## Website Sections

1. **Navigation** - Fixed navbar with smooth scroll links and mobile menu
2. **Hero Section** - Animated intro with 3D background, typing effect, and profile image
3. **About Section** - Personal background with three info cards
4. **Skills & Journey Section** - Skills grid and timeline of journey milestones
5. **Projects Section** - 9 completed AI automation projects with demo links
6. **Resume Section** - Education and certifications with PDF downloads
7. **Contact Section** - Premium contact design with social links
8. **Footer** - Copyright and social links

## Features

### Animation System
- **GSAP ScrollTrigger** - Scroll-based reveal animations
- **Three.js Scene** - Interactive 3D hero background with particles, neural network, and data streams
- **Custom Cursor** - Magnetic cursor with trail effect (desktop only)
- **Lenis Smooth Scroll** - Smooth scrolling experience
- **Progressive Text Animations** - Character-by-character name build, typing effects
- **Parallax Effects** - Subtle parallax on scroll

### Design System
- **Color Palette** - Dark theme with cyan (#00f0ff), purple (#8b5cf6), and pink (#ec4899) accents
- **Glass Morphism** - Semi-transparent backgrounds with blur effects
- **Gradient Effects** - Linear and radial gradients for depth
- **Typography Scale** - CSS variables for consistent font sizes
- **Border Radius System** - Consistent rounded corners (8px to 999px)

### Responsive Design
- **Desktop** - Full layout with all features
- **Tablet** (max-width: 900px) - Adjusted spacing and grid layouts
- **Mobile** (max-width: 768px) - Single column, hamburger menu
- **Small Mobile** (max-width: 480px) - Further optimized spacing
- **Touch Detection** - Disables cursor effects on touch devices

## Project Structure

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
    ├── certificates/
    │   ├── ai-automation-certificate-C41295.pdf
    │   └── ai-builder-n8n-certificate-C42817.pdf
    ├── audio/ (empty)
    ├── fonts/ (empty - using Google Fonts)
    ├── icons/ (empty - using inline SVGs)
    ├── models/ (empty)
    └── videos/ (empty)
```

## Featured Projects

The Projects section showcases 9 completed AI automation projects:

1. **LinkedIn Job Alert Automation System** - Job hunting automation with keyword filtering and notifications
2. **AI Email Automation System** - Dental clinic email management for appointments and patient inquiries
3. **Automated Excel Data Processing System** - Data cleaning with AI-powered validation
4. **AI-Powered Image Discovery Agent** - Smart image search with quality filtering
5. **AI Travel Assistant using MCP** - Trip planning and destination recommendations
6. **Smart Student Assistant** - Academic assistance and study management
7. **AI Knowledge Base Support Agent** - RAG-powered customer support with Supabase Vector Store
8. **YouTube Content Automation System** - End-to-end YouTube content creation workflow
9. Additional AI automation projects

All projects include:
- Category and status badges
- Overview and features
- Tech stack badges
- Google Drive demo links

## Certifications

- **AI Automation For Work & Business** (C41295) - Ostad The Coach, Instructor: Khair Ahammed
- **AI Builder: Create Agents & N8N** (C42817) - Ostad The Coach, Instructor: Shourov Barua

## Contact Information

- **Email:** arifmohiuddin726@gmail.com
- **WhatsApp:** +8801832519176
- **Phone:** 01824418009
- **LinkedIn:** https://www.linkedin.com/in/arifmohiuddin01
- **GitHub:** https://github.com/arifmohiuddin726-ship-it
- **Facebook:** https://www.facebook.com/share/17p6AFuXA5/
- **Instagram:** https://www.instagram.com/ar.4_if

## Installation

No build process required. Simply:

1. Clone or download the repository
2. Open `index.html` in a web browser

## Local Development

Since this is a static website with no build tools:

1. Open the project folder in a code editor
2. Use a local server (e.g., Live Server in VS Code, Python's http.server, or Node's http-server)
3. Open `http://localhost:PORT` in your browser

Example using Python:
```bash
python -m http.server 8000
```

Example using Node.js:
```bash
npx http-server
```

## Deployment

This is a static site that can be deployed to any static hosting service:

- **Netlify** - Drag and drop the folder
- **Vercel** - Connect to Git repository
- **GitHub Pages** - Push to gh-pages branch
- **Any web server** - Upload files directly

## Performance Considerations

- **Hero Image** - Loaded eagerly for immediate display
- **CDN Libraries** - Three.js, GSAP, Lenis loaded from CDN
- **Google Fonts** - Preconnected for faster loading
- **Asset Tracking** - Loader tracks image and font loading
- **GPU Acceleration** - CSS transforms used for animations
- **Touch Optimization** - Cursor effects disabled on touch devices

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus-visible styles
- Alt text on images
- Role attributes where appropriate
- Reduced motion support via `@media (prefers-reduced-motion)`

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires ES6+ JavaScript
- Requires WebGL (for Three.js)
- Requires CSS Custom Properties
- No IE support

## License

This is a personal portfolio project. Third-party libraries have their respective licenses:
- Three.js: MIT License
- GSAP: Standard license (free for most uses)
- Lenis: MIT License
- Google Fonts: Open Font License

## Contact

For questions about this portfolio or collaboration opportunities:
- Email: arifmohiuddin726@gmail.com
- WhatsApp: +8801832519176
