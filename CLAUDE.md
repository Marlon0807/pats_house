# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for "Pat's House @ The Prom" — an Airbnb vacation rental property listing in Fish Creek, Victoria. No build system, no dependencies, no package manager. Pure HTML, CSS, and vanilla JavaScript.

## Development

**No build/test/lint commands.** This is a static site with three source files:

- `index.html` — single-page site with all content
- `assets/css/style.css` — all styling (CSS custom properties, grid layouts, animations)
- `assets/js/main.js` — Intersection Observer scroll animations and smooth scrolling

To preview locally, serve the directory via any HTTP server (e.g., `python3 -m http.server`).

## Deployment

GitHub Pages via push to `main` branch. The `.nojekyll` file disables Jekyll processing.

## Design System

CSS custom properties defined in `:root` in `style.css`:
- `--primary` / `--primary-light`: forest greens (#2C5F3D, #4A8259)
- `--accent`: warm tan (#D4A574)
- `--cream`: background (#F8F4EF)
- `--charcoal`: text (#2B2B2B)
- `--earth`: brown (#8B7355)

Typography uses Google Fonts: Cormorant Garamond (headings) and Montserrat (body).

## Key Patterns

- Responsive grids via `repeat(auto-fit, minmax(..., 1fr))`
- Fluid typography via `clamp()`
- Media query breakpoints at 768px and 968px
- Images stored in `assets/images/` (high-res property photos)
