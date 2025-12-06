import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import MenuHero from "@/components/MenuHero";
import { MenuNavigation } from "@/components/MenuNavigation";
import { MenuCategory } from "@/components/MenuCategory";
import { MenuCTA } from "@/components/MenuCTA";
import FooterSection from "@/components/FooterSection";
import ReservationSection from "@/components/ReservationSection";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore Pizzata's exceptional menu featuring authentic Italian pizzas, fresh salads, and premium beverages. From classic Margherita to chef's special selections, discover flavors that celebrate Italian culinary tradition.",
  openGraph: {
    title: "Pizzata Menu - Exceptional Flavors",
    description: "Explore Pizzata's exceptional menu featuring authentic Italian pizzas, fresh salads, and premium beverages. From classic Margherita to chef's special selections.",
    url: "/menu",
  },
  alternates: {
    canonical: "/menu",
  },
};

const pizza = [
  { name: "Margherita", description: "Classic Neapolitan pizza with fresh mozzarella, San Marzano tomatoes, basil, and extra virgin olive oil", price: "$16" },
  { name: "Pepperoni", description: "Traditional pepperoni pizza with our house-made mozzarella and a perfect blend of Italian spices", price: "$19" },
  { name: "Quattro Stagioni", description: "Four seasons pizza featuring artichokes, mushrooms, ham, and olives, each representing a different season", price: "$22" },
  { name: "Capricciosa", description: "A delightful combination of ham, mushrooms, artichokes, olives, and mozzarella on our signature crust", price: "$21" },
  { name: "Diavola", description: "Spicy Italian salami, mozzarella, and fresh chili peppers for those who love a bit of heat", price: "$20" },
  { name: "Quattro Formaggi", description: "Four cheese blend of mozzarella, gorgonzola, parmesan, and fontina for the ultimate cheese lover", price: "$24" },
];

const salad = [
  { name: "Caesar Salad", description: "Crisp romaine lettuce with our house-made Caesar dressing, parmesan cheese, and garlic croutons", price: "$14" },
  { name: "Caprese Salad", description: "Fresh mozzarella, ripe tomatoes, and basil drizzled with extra virgin olive oil and balsamic glaze", price: "$15" },
  { name: "Mediterranean Salad", description: "Mixed greens with olives, feta cheese, red onions, cherry tomatoes, and our lemon-herb vinaigrette", price: "$16" },
  { name: "Arugula & Parmesan", description: "Fresh arugula with shaved parmesan, cherry tomatoes, and a light lemon vinaigrette", price: "$13" },
];

const drinks = [
  { name: "Italian Soda", description: "Refreshing sparkling water with your choice of flavor: lemon, orange, or cherry", price: "$5" },
  { name: "San Pellegrino", description: "Premium Italian sparkling water, served chilled", price: "$4" },
  { name: "Fresh Lemonade", description: "House-made lemonade with fresh lemons, served over ice", price: "$6" },
  { name: "Iced Tea", description: "Freshly brewed iced tea, sweetened or unsweetened, with a slice of lemon", price: "$4" },
  { name: "Italian Coffee", description: "Rich espresso or cappuccino, made the traditional Italian way", price: "$5" },
  { name: "Red Wine", description: "Selection of fine Italian red wines, served by the glass", price: "$8" },
  { name: "White Wine", description: "Selection of crisp Italian white wines, served by the glass", price: "$8" },
  { name: "Beer", description: "Selection of Italian and local craft beers, served ice cold", price: "$6" },
];

export default function Menu() {
  return (
    <main className="min-h-screen bg-[#0c0a10]">
      <div className="relative">
        <Navigation />
        <MenuHero />
      </div>

      <div className=" px-5 md:px-10">
        <MenuNavigation categories={["Pizza", "Salad", "Drinks"]} />

        <div className="flex flex-col gap-24 py-16">
          <MenuCategory
            title="Pizza"
            subtitle="Authentic Italian Flavors"
            items={pizza}
            image="https://framerusercontent.com/images/jljuGXhSCqRqJ435nzzY6sDqfMc.png"
            imageAlt="Delicious Italian pizzas"
          />

          <MenuCategory
            title="Salad"
            subtitle="Fresh & Crisp"
            items={salad}
            image="https://framerusercontent.com/images/mo5YJTuN4Uex3kCicCo4Alyuuuw.jpg?scale-down-to=2048"
            imageAlt="Fresh salad selection"
            reverse
          />

          <MenuCategory
            title="Drinks"
            subtitle="Refreshing Beverages"
            items={drinks}
            image="https://framerusercontent.com/images/gpTP82qszHtIE5BS53K5he5JsU.jpg?scale-down-to=2048"
            imageAlt="Selection of beverages"
          />
        </div>

        <MenuCTA />
      </div>

      {/* Bottom gradient fade */}
      <div className="h-32 bg-gradient-to-t from-[#0c0a10] to-transparent" />
      <ReservationSection />
      <FooterSection />
    </main>
  );
}

