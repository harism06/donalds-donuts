// Single source of truth for every menu page.
// Each category renders to public/<slug>/index.html via build.js.
// `image` is resolved as ../images/<slug>/<image>; `bg` lives in images/menu_page_imgs/.
// `name` may contain inline HTML (e.g. a <br />). `prices` is one <br />-separated line each.

module.exports = [
  {
    slug: "donuts",
    title: "Donuts",
    bg: "donuts_menu.jpg",
    items: [
      { image: "filled_donuts.jpeg", name: "Filled Donuts", prices: ["$1.29 each", "$6.99 - 6 count", "$11.99 - 12 count"] },
      { image: "glazed_donut.jpeg", name: "Glazed Donuts", prices: ["$1.19 each", "$6.69 - 6 count", "$10.99 - 12 count"] },
      { image: "sprinkled_donut.jpeg", name: "Sprinkled Donuts", prices: ["$1.29 each", "$6.99 - 6 count", "$11.99 - 12 count"] },
      { image: "cake.jpeg", name: "Cake", prices: ["$1.29 each", "$6.99 - 6 count", "$11.99 - 12 count"] },
      { image: "donut_holes.jpeg", name: "Donut Holes", prices: ["$1.89 - 6 count", "$2.29 - 12 count"] },
      { image: "chocolate_donut_holes.jpeg", name: "Chocolate Donut Holes", prices: ["$1.89 - 6 count", "$2.29 - 12 count"] },
    ],
  },
  {
    slug: "pastries",
    title: "Pastries",
    bg: "pastries_menu.jpeg",
    items: [
      { image: "eclair.jpeg", name: "Éclair Cake", prices: ["$1.89 each", "$10.99 - 6 count", "$16.99 - 12 count"] },
      { image: "apple_fritter.jpeg", name: "Apple Fritter", prices: ["$1.89 each"] },
      { image: "cinnamon_roll.jpg", name: "Cinnamon Roll", prices: ["$1.89 each"] },
      { image: "cinnamon_twist.jpeg", name: "Cinnamon Twist", prices: ["$1.89 each"] },
    ],
  },
  {
    slug: "breakfast",
    title: "Breakfast & Danish",
    bg: "breakfast_menu.jpeg",
    items: [
      { image: "breakfast_taco.jpeg", name: "Sausage, Egg, &amp; Cheese Tacos", prices: ["$2.69 each", "$15.99 - 6 count", "$25.99 - 12 count"] },
      { image: "cream_cheese_danish.jpeg", name: "Cream Cheese Danish", prices: ["$10.99 - 6 count", "$16.99 - 12 count"] },
      { image: "blueberry_danish.jpeg", name: "Blueberry Danish", prices: ["$1.89 each", "$10.99 - 6 count", "$26.99 - 12 count"] },
      { image: "raspberry_danish.jpeg", name: "Raspberry Danish", prices: ["$10.99 - 6 count", "$16.99 - 12 count"] },
    ],
  },
  {
    slug: "kolaches",
    title: "Kolaches",
    bg: "kolache_menu.jpeg",
    items: [
      { image: "cheese_sausage.jpeg", name: "Cheese Sausage", prices: ["$1.59 each", "$7.99 - 6 count", "$15.99 - 12 count"] },
      { image: "sausage.jpeg", name: "Plain Sausage", prices: ["$1.59 each", "$7.99 - 6 count", "$15.99 - 12 count"] },
      { image: "jalapeno.jpeg", name: "Jalapeno Kolaches", prices: ["$1.59 each", "$7.99 - 6 count", "$15.99 - 12 count"] },
      { image: "large_ham_chapel_mild.jpeg", name: "Large Ham Kolaches", prices: ["$2.69 each", "$15.99 - 6 count", "$25.99 - 12 count"] },
      { image: "sausage.jpeg", name: "Large Sausage Kolaches", prices: ["$2.69 each", "$15.99 - 6 count", "$25.99 - 12 count"] },
      { image: "sausage_jalapeno.jpeg", name: "Large Sausage &amp; Jalapeno", prices: ["$2.69 each", "$15.99 - 6 count", "$25.99 - 12 count"] },
      { image: "large_ham_chapel_mild.jpeg", name: "Boudin/Chapel Hill Mild", prices: ["$2.99 each", "$16.99 - 6 count", "$27.99 - 12 count"] },
      { image: "jalapeno.jpeg", name: "Boudin/Chapel Hill Jalapeno", prices: ["$2.99 each", "$16.99 - 6 count", "$27.99 - 12 count"] },
    ],
  },
  {
    slug: "croissant_sandwiches",
    title: "Croissant Sandwiches",
    bg: "croissant_sandwich_menu.jpeg",
    items: [
      { image: "plain_croissant.jpeg", name: "Plain Croissant", prices: ["$1.99 each", "$22.99 - 6 count", "$35.99 - 12 count"] },
      { image: "bacon_egg_ham_cheese.jpeg", name: "Bacon, Egg, Ham &amp; Cheese Croissant Sandwich", prices: ["$3.89 each"] },
      { image: "sausage_egg_cheese.jpeg", name: "Sausage, Egg &amp; Cheese Sandwich", prices: ["$3.89 each", "$22.99 - 6 count"] },
      { image: "all_meat_egg_chesse.jpeg", name: "All Meat, Egg &amp; Cheese Croissant Sandwich", prices: ["$4.99 each"] },
      { image: "biscuit.jpeg", name: "Biscuit", prices: ["$4.99 each"] },
    ],
  },
  {
    slug: "beverages",
    title: "Beverages",
    bg: "beverages_menu.jpg",
    items: [
      { image: "juice.jpeg", name: "Juice", prices: ["$2.19 - Small", "$2.79 - Large"] },
      { image: "soda.jpg", name: "Soda", prices: ["$1.49 - Small", "$2.49 - Large"] },
      { image: "milk.jpeg", name: "Milk", prices: ["$1.79 - Small", "$2.79 - Large"] },
      { image: "monster.jpg", name: "Monster/<br />Starbucks", prices: ["$3.29 - Small"] },
      { image: "bang.JPG", name: "Bang", prices: ["$3.29 - Small"] },
      { image: "nesquick.JPG", name: "Nesquick", prices: ["$1.79 - Small", "$2.79 - Large"] },
      { image: "redbull.jpg", name: "Red Bull/Redline", prices: ["$3.29 - Small"] },
    ],
  },
];
