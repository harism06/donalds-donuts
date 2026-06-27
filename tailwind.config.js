/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  plugins: [require("daisyui")],
  // Pin a single warm light theme so the site never auto-switches to dark
  // on dark-mode phones. Swap "cupcake" for "light" (plain white) or another
  // DaisyUI theme name to change the look, then run `npm run build`.
  daisyui: {
    themes: ["cupcake"],
  },
};
