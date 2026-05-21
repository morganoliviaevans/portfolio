# Morgan Olivia Evans — Portfolio

Personal portfolio website for Morgan Olivia Evans, a new grad software engineer and scientific researcher with a background in high-performance computing, scientific research and embedded systems.

**Live site:** [https://morganoliviaevans.com](https://morganoliviaevans.github.io/portfolio)

---

## Overview

Single-page portfolio built with vanilla HTML, CSS, and JavaScript. No frameworks or build tools — just a static site. I'm new to webdev!

**Sections:**
- Landing — name, title, animated avatar
- About — bio, tools & languages grid, affiliations marquee
- Experience — KPFF, NASA, ACCESS, SCEC (accordion with detail panels)
- Projects — Robotic Traffic Cone, Audio Feedback Device, Cat Toy, NASA MINDS, NASA GLEE (accordion with detail panels)
- Footer — contact links

---

## Tech Stack

| Layer | Detail |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 — custom properties, CSS Grid, Flexbox |
| Scripting | Vanilla JavaScript |
| Lightbox | [GLightbox](https://biati-digital.github.io/glightbox/) |
| Icons | [Font Awesome 6](https://fontawesome.com/) |
| Fonts | Google Fonts — Lato, Roboto |

---

## Project Structure

```
/
├── index.html
├── style.css
├── script.js
├── favicon.ico
└── media/
    ├── avatar.png / avatar.gif
    ├── about/
    │   ├── affiliations/
    │   └── tools/
    ├── experience/
    │   ├── kpff/
    │   ├── nasa/
    │   ├── access/
    │   └── scec/
    └── projects/
        ├── bithacks/
        ├── atmega32/
        ├── esp32/
        ├── nasa-minds/
        └── nasa-glee/
```

---

## Features

**Experience & Projects accordion** — Cards expand an inline detail panel on click. Active card gets a gold border; inactive cards go grayscale. Clicking the active card again collapses the panel.
**Comparison slider** — Before/after image slider in the ACCESS detail panel, implemented with a range input and `clip-path`.
**Affiliations marquee** — CSS-only infinite scroll strip of affiliation logos. Duplicated track for seamless loop.
**Avatar hover** — Static PNG swaps to GIF on hover, with a preloaded GIF to (hopefully) prevent flicker.
**Scroll indicator** — Animated line with SCROLL text on the landing section; fades out on scroll.
**Mobile nav** — Full-screen slide-in navigation with hamburger toggle. Contact icons move into the nav drawer on mobile.
**GLightbox galleries** — Images and YouTube embeds open in a lightbox. Multi-page documents use hidden gallery items for sequential navigation.

---

## CSS Architecture

- All design tokens (colors, fonts, spacing, breakpoints) are defined as CSS custom properties in `:root`. No preprocessor.
- Mobile styles are scoped entirely within `@media (max-width: 768px)` — desktop styles are never modified inside the media query.
- Mobile-only elements use the `-mobile` class suffix; desktop-only elements use `-desktop`. Each is hidden at the opposite breakpoint via `display: none`.
- Viewport-sized elements on mobile use `100dvw` / `100dvh` to account for browser chrome on iOS/Android.

---

## JavaScript

No libraries beyond GLightbox. Very basic. All interactivity is event-driven:

- Scroll listener manages nav-active state and scroll indicators.
- Click listeners on `.experience-card` and `.projects-card` drive accordion open/close.
- Hamburger toggle manages mobile nav open/close state.
- Comparison slider driven by `<input type="range">`.
- Avatar swap on `mouseenter` / `mouseleave`.

---

## License

© 2026 Morgan Olivia Evans. All rights reserved.
