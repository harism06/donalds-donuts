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
      {
        image: "filled_donuts.jpeg",
        name: "Filled Donuts",
        prices: ["$1.49 each", "$7.49 - 6 count", "$12.99 - 12 count"],
      },
      {
        image: "glazed_donut.jpeg",
        name: "Glazed Donuts",
        prices: ["$1.49 each", "$7.39 - 6 count", "$11.99 - 12 count"],
      },
      {
        image: "sprinkled_donut.jpeg",
        name: "Sprinkled Donuts",
        prices: ["$1.49 each", "$7.49 - 6 count", "$12.99 - 12 count"],
      },
      {
        image: "cake.jpeg",
        name: "Cake",
        prices: ["$1.49 each", "$7.49 - 6 count", "$12.99 - 12 count"],
      },
      {
        image: "donut_holes.jpeg",
        name: "Donut Holes",
        prices: ["$2.09 - 6 count", "$2.59 - 12 count"],
      },
      {
        image: "chocolate_donut_holes.jpeg",
        name: "Chocolate Donut Holes",
        prices: ["$2.09 - 6 count", "$2.59 - 12 count"],
      },
    ],
  },
  {
    slug: "pastries",
    title: "Pastries",
    bg: "pastries_menu.jpeg",
    items: [
      {
        image: "eclair.jpeg",
        name: "Éclair Cake",
        prices: ["$2.15 each", "$12.49 - 6 count", "$17.99 - 12 count"],
      },
      {
        image: "apple_fritter.jpeg",
        name: "Apple Fritter",
        prices: ["$2.15 each"],
      },
      {
        image: "cinnamon_roll.jpg",
        name: "Cinnamon Roll",
        prices: ["$2.15 each"],
      },
      {
        image: "cinnamon_twist.jpeg",
        name: "Cinnamon Twist",
        prices: ["$2.15 each"],
      },
    ],
  },
  {
    slug: "breakfast",
    title: "Breakfast & Danish",
    bg: "breakfast_menu.jpeg",
    items: [
      {
        image: "breakfast_taco.jpeg",
        name: "Sausage, Egg, &amp; Cheese Tacos",
        prices: ["$2.99 each", "$17.99 - 6 count", "$27.99 - 12 count"],
      },
      {
        image: "cream_cheese_danish.jpeg",
        name: "Cream Cheese Danish",
        prices: ["$2.15 each", "$11.99 - 6 count", "$17.99 - 12 count"],
      },
      {
        image: "blueberry_danish.jpeg",
        name: "Blueberry Danish",
        prices: ["$2.15 each", "$11.99 - 6 count", "$17.99 - 12 count"],
      },
      {
        image: "raspberry_danish.jpeg",
        name: "Raspberry Danish",
        prices: ["$2.15 each", "$11.99 - 6 count", "$17.99 - 12 count"],
      },
    ],
  },
  {
    slug: "kolaches",
    title: "Kolaches",
    bg: "kolache_menu.jpeg",
    items: [
      {
        image: "cheese_sausage.jpeg",
        name: "Cheese Sausage",
        prices: ["$1.69 each", "$8.99 - 6 count", "$17.29 - 12 count"],
      },
      {
        image: "sausage.jpeg",
        name: "Plain Sausage",
        prices: ["$1.69 each", "$8.99 - 6 count", "$17.29 - 12 count"],
      },
      {
        image: "jalapeno.jpeg",
        name: "Jalapeno Kolaches",
        prices: ["$1.69 each", "$8.99 - 6 count", "$17.29 - 12 count"],
      },
      {
        image: "large_ham_chapel_mild.jpeg",
        name: "Large Ham Kolaches",
        prices: ["$2.99 each", "$17.49 - 6 count", "$27.99 - 12 count"],
      },
      {
        image: "sausage.jpeg",
        name: "Large Sausage Kolaches",
        prices: ["$2.99 each", "$17.49 - 6 count", "$27.99 - 12 count"],
      },
      {
        image: "sausage_jalapeno.jpeg",
        name: "Large Sausage &amp; Jalapeno",
        prices: ["$2.99 each", "$17.49 - 6 count", "$27.99 - 12 count"],
      },
      {
        image: "large_ham_chapel_mild.jpeg",
        name: "Boudin/Chapel Hill Mild",
        prices: ["$3.29 each", "$18.99 - 6 count", "$28.99 - 12 count"],
      },
      {
        image: "jalapeno.jpeg",
        name: "Boudin/Chapel Hill Jalapeno",
        prices: ["$3.29 each", "$18.99 - 6 count", "$28.99 - 12 count"],
      },
    ],
  },
  {
    slug: "croissant_sandwiches",
    title: "Croissant Sandwiches",
    bg: "croissant_sandwich_menu.jpeg",
    items: [
      {
        image: "plain_croissant.jpeg",
        name: "Plain Croissant",
        prices: ["$2.39 each", "$25.99 - 6 count", "$42.99 - 12 count"],
      },
      {
        image: "bacon_egg_ham_cheese.jpeg",
        name: "Bacon, Egg, Ham &amp; Cheese Croissant Sandwich",
        prices: ["$4.19 each", "$25.99 - 6 count"],
      },
      {
        image: "sausage_egg_cheese.jpeg",
        name: "Sausage, Egg &amp; Cheese Sandwich",
        prices: ["$4.19 each"],
      },
      {
        image: "all_meat_egg_chesse.jpeg",
        name: "All Meat, Egg &amp; Cheese Croissant Sandwich",
        prices: ["$5.29 each"],
      },
      { image: "biscuit.jpeg", name: "Biscuit", prices: ["$3.29 each"] },
    ],
  },
  {
    slug: "beverages",
    title: "Beverages",
    bg: "beverages_menu.jpg",
    items: [
      {
        image: "juice.jpeg",
        name: "Juice",
        prices: ["$2.19 - Small", "$3.19 - Large"],
      },
      {
        image: "soda.jpg",
        name: "Soda",
        prices: ["$1.89 - Small", "$2.89 - Large"],
      },
      {
        image: "milk.jpeg",
        name: "Milk",
        prices: ["$3.15 - Large"],
      },
      {
        image: "monster.jpg",
        name: "Monster/<br />Starbucks",
        prices: ["$3.69 - Small"],
      },
      { image: "bang.JPG", name: "Bang", prices: ["$3.69 - Small"] },
      {
        image: "nesquick.JPG",
        name: "Nesquick",
        prices: ["$2.19 - Small", "$3.19 - Large"],
      },
      {
        image: "redbull.jpg",
        name: "Red Bull/Redline",
        prices: ["$3.69 - Small"],
      },
    ],
  },
];
