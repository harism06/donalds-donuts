# Donald's Donuts

Website for Donald's Donuts, a donut shop in Webster, Texas. It is a fast,
fully static site featuring a home page, customer reviews, and category pages
that show photos and pricing for donuts, pastries, kolaches, croissant
sandwiches, breakfast items, and beverages.

Originally built in 2024 and modernized in 2026 into a static site with no
runtime dependencies.

Live site: https://donalds-donuts.onrender.com/

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Editing the Menu](#editing-the-menu)
6. [Changing the Theme](#changing-the-theme)
7. [Building](#building)
8. [Running Locally](#running-locally)
9. [Deployment](#deployment)
10. [Notes](#notes)

## Overview

The site is plain HTML served as static files. There is no backend and no
server to run in production. Two things are generated at build time:

1. The six category pages are generated from a single data file, so the menu
   lives in one place instead of being duplicated across pages.
2. The CSS is compiled once into a single stylesheet, instead of loading a
   CSS framework from a CDN in the browser.

## Tech Stack

| Concern         | Choice                                     |
| :-------------- | :----------------------------------------- |
| Markup          | Static HTML                                |
| Styling         | Tailwind CSS with DaisyUI (cupcake theme)  |
| Page generation | Node script (no dependencies)              |
| Hosting         | Any static host (Render Static Site, etc.) |

Tailwind and DaisyUI are development dependencies only. The compiled
stylesheet is committed, so production needs no build step and no packages.

## Project Structure

```
public/                    Deployed site (static files)
  index.html               Home page: hero, menu, reviews, footer
  <category>/index.html    Generated menu pages (do not edit by hand)
  styles/app.css           Compiled Tailwind + DaisyUI stylesheet
  images/                  Optimized photos
src/
  menu.js                  Source of truth: categories, items, prices
  build.js                 Generates the category pages from menu.js
  input.css                Tailwind entry plus custom CSS
tailwind.config.js         Theme and content configuration
package.json               Scripts and dev dependencies
```

## Getting Started

Prerequisites: Node.js (v18 or newer) and npm.

Install the build tools (only needed if you plan to rebuild pages or CSS):

```bash
npm install
```

## Editing the Menu

The entire menu is defined in `src/menu.js`. Each category has a title, a
background image, and a list of items, where each item has an image, a name,
and one or more price lines.

To change an item, price, or category:

1. Edit `src/menu.js`.
2. Run `npm run build`.
3. The matching `public/<category>/index.html` files are regenerated.

Do not edit the category `index.html` files directly. They are generated and
any manual changes will be overwritten on the next build.

## Changing the Theme

The color theme is set in `tailwind.config.js`:

```js
daisyui: {
  themes: ["cupcake"],
}
```

Replace `cupcake` with another DaisyUI theme name (for example `light`,
`pastel`, or `valentine`), then run `npm run build`.

## Building

| Command              | What it does                                |
| :------------------- | :------------------------------------------ |
| `npm run build`      | Builds the pages and the CSS                |
| `npm run build:html` | Regenerates the category pages from menu.js |
| `npm run build:css`  | Compiles `src/input.css` into app.css       |

## Running Locally

With the project tooling:

```bash
npm start
```

Or with no dependencies at all:

```bash
python3 -m http.server -d public 8000
```

Then open http://localhost:8000 in a browser.

## Deployment

This is a static site, so the `public/` folder can be hosted on any static
host (Render Static Site, Netlify, Vercel, GitHub Pages, and similar).

Recommended settings:

- Publish directory: `public`
- Build command: none required (the compiled `app.css` is committed)

## Notes

- Social icons are inline SVGs, so no image assets or attribution are needed.
- Images are pre optimized for fast loading.

Designed and created by Haris M.
