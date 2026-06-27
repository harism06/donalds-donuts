// Generates the category menu pages (public/<slug>/index.html) from src/menu.js.
// Pure Node, no dependencies. Run with: node src/build.js
const fs = require("fs");
const path = require("path");
const categories = require("./menu");

const PHONE = "tel:+12814804402";

const navbar = () => `
  <!-- Navigation Bar -->
  <div class="navbar bg-base-300">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/">Home</a></li>
          <li><a href="../#reviews">Reviews</a></li>
          <li><a href="../#menu">Menu</a></li>
          <li><a href="${PHONE}">Order Now!</a></li>
        </ul>
      </div>
      <a href="/" class="btn btn-lg btn-ghost"><img src="../images/logo.PNG" id="navbar-logo" /></a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/" class="text-xl">Home</a></li>
        <li><a href="../#reviews" class="text-xl">Reviews</a></li>
        <li><a href="../#menu" class="text-xl">Menu</a></li>
        <li><a href="${PHONE}" class="text-xl">Order Now!</a></li>
      </ul>
    </div>
    <div class="navbar-end"></div>
  </div>`;

const footer = () => `
  <!-- Footer -->
  <footer class="p-10 bg-base-200 text-base-content py-8">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6">
      <div class="mb-6 md:mb-0">
        <h3 class="text-lg font-semibold mb-2">Address</h3>
        <p>435 El Dorado Blvd</p>
        <p>Webster, Texas, 77598</p>
      </div>
      <div class="mb-6 md:mb-0">
        <h3 class="text-lg font-semibold mb-2">Hours of Operation</h3>
        <p>Tuesday - Sunday</p>
        <p>5:00am - 12:30pm</p>
        <p>Closed on Mondays</p>
      </div>
      <div class="mb-6 md:mb-0">
        <h3 class="text-lg font-semibold mb-2">Contact</h3>
        <p>Phone: (281) 480-4402</p>
        <p>Email: rothouch@gmail.com</p>
      </div>
      <div class="mb-6 md:mb-0">
        <h3 class="text-lg font-semibold mb-2">Follow Us</h3>
        <div class="flex space-x-4 mb-2">
          <a href="https://www.facebook.com/originaldonaldsdonuts/" target="_blank" aria-label="Facebook">
            <svg class="w-8 h-8 hover:scale-105" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/originaldonaldsdonuts/" target="_blank" aria-label="Instagram">
            <svg class="w-8 h-8 hover:scale-105" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="divider divider-neutral"></div>
    <div class="text-center mt-4">
      <p>Designed and Created by Haris M.</p>
    </div>
  </footer>`;

const card = (slug, item) => `
      <div class="card w-full md:w-1/3 lg:w-1/4 bg-base-100 shadow-xl transition-transform transform hover:scale-105 border-solid border-4 border-black rounded-3xl">
        <figure class="rounded-t-3xl overflow-hidden">
          <img src="../images/${slug}/${item.image}" class="w-full h-full object-cover" />
        </figure>
        <div class="card-body flex flex-col justify-center items-center p-4">
          <p class="card-title text-2xl md:text-3xl lg:text-4xl text-center">${item.name}</p>
          <p class="text-sm text-center mt-2">${item.prices.join("<br />\n            ")}</p>
        </div>
      </div>`;

const page = (c) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../styles/app.css" />
  <title>Donald's Donuts</title>
  <link rel="icon" href="../images/logo.PNG" />
</head>
<body>${navbar()}

  <!-- ${c.title} Page -->
  <section id="menu-page" class="py-16 bg-cover bg-center relative"
    style="background-image: url('../images/menu_page_imgs/${c.bg}')">
    <div class="text-center text-white p-4 bg-black bg-opacity-55 rounded-lg mb-8">
      <h1 class="text-5xl md:text-7xl font-bold">${c.title}</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-4 mt-8">${c.items.map((i) => card(c.slug, i)).join("")}
    </div>
  </section>
${footer()}
</body>
</html>
`;

let count = 0;
for (const c of categories) {
  const out = path.join(__dirname, "..", "public", c.slug, "index.html");
  fs.writeFileSync(out, page(c));
  console.log(`  ✓ ${c.slug.padEnd(22)} ${c.items.length} items`);
  count += c.items.length;
}
console.log(`Generated ${categories.length} category pages, ${count} items total.`);
