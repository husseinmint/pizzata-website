"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

interface MenuItem {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    name: "PIZZA",
    items: [
      {
        id: "1",
        image: "https://framerusercontent.com/images/aN5MZ7c58dSugIWaxQAFrvi9FI.png",
        title: "MARGHERITA",
        price: "$16",
        description: "Classic Neapolitan pizza with fresh mozzarella, San Marzano tomatoes, basil, and extra virgin olive oil."
      },
      {
        id: "2",
        image: "https://framerusercontent.com/images/iZkYbLs7HEU6TzQuK1g8Lc3Hirg.png",
        title: "PEPPERONI",
        price: "$19",
        description: "Traditional pepperoni pizza with our house-made mozzarella and a perfect blend of Italian spices."
      },
      {
        id: "3",
        image: "https://framerusercontent.com/images/Rrxkm9q9KSK2bxDknklzbIUhjiw.png",
        title: "QUATTRO STAGIONI",
        price: "$22",
        description: "Four seasons pizza featuring artichokes, mushrooms, ham, and olives, each representing a different season."
      },
      {
        id: "4",
        image: "https://framerusercontent.com/images/DGdfMrb3rUV9EpaBwU9xFoEabLo.png",
        title: "CAPRICCIOSA",
        price: "$21",
        description: "A delightful combination of ham, mushrooms, artichokes, olives, and mozzarella on our signature crust."
      },
      {
        id: "5",
        image: "https://framerusercontent.com/images/aN5MZ7c58dSugIWaxQAFrvi9FI.png",
        title: "DIAVOLA",
        price: "$20",
        description: "Spicy Italian salami, mozzarella, and fresh chili peppers for those who love a bit of heat."
      },
      {
        id: "6",
        image: "https://framerusercontent.com/images/iZkYbLs7HEU6TzQuK1g8Lc3Hirg.png",
        title: "PROSCIUTTO E FUNGHI",
        price: "$23",
        description: "Thinly sliced prosciutto, fresh mushrooms, mozzarella, and a drizzle of truffle oil."
      },
      {
        id: "7",
        image: "https://framerusercontent.com/images/Rrxkm9q9KSK2bxDknklzbIUhjiw.png",
        title: "QUATTRO FORMAGGI",
        price: "$24",
        description: "Four cheese blend of mozzarella, gorgonzola, parmesan, and fontina for the ultimate cheese lover."
      }
    ]
  },
  {
    id: "salad",
    name: "SALAD",
    items: [
      {
        id: "8",
        image: "https://framerusercontent.com/images/DGdfMrb3rUV9EpaBwU9xFoEabLo.png",
        title: "CAESAR SALAD",
        price: "$14",
        description: "Crisp romaine lettuce with our house-made Caesar dressing, parmesan cheese, and garlic croutons."
      },
      {
        id: "9",
        image: "https://framerusercontent.com/images/aN5MZ7c58dSugIWaxQAFrvi9FI.png",
        title: "CAPRESE SALAD",
        price: "$15",
        description: "Fresh mozzarella, ripe tomatoes, and basil drizzled with extra virgin olive oil and balsamic glaze."
      },
      {
        id: "10",
        image: "https://framerusercontent.com/images/iZkYbLs7HEU6TzQuK1g8Lc3Hirg.png",
        title: "MEDITERRANEAN SALAD",
        price: "$16",
        description: "Mixed greens with olives, feta cheese, red onions, cherry tomatoes, and our lemon-herb vinaigrette."
      },
      {
        id: "11",
        image: "https://framerusercontent.com/images/Rrxkm9q9KSK2bxDknklzbIUhjiw.png",
        title: "ARUGULA & PARMESAN",
        price: "$13",
        description: "Fresh arugula with shaved parmesan, cherry tomatoes, and a light lemon vinaigrette."
      },
      {
        id: "12",
        image: "https://framerusercontent.com/images/DGdfMrb3rUV9EpaBwU9xFoEabLo.png",
        title: "GARDEN SALAD",
        price: "$12",
        description: "Mixed seasonal greens with cucumbers, carrots, bell peppers, and your choice of dressing."
      }
    ]
  },
  {
    id: "drinks",
    name: "DRINKS",
    items: [
      {
        id: "13",
        image: "https://framerusercontent.com/images/0vxSgUz6jRJuj5PYRkdedJRzrg.jpg",
        title: "ITALIAN SODA",
        price: "$5",
        description: "Refreshing sparkling water with your choice of flavor: lemon, orange, or cherry."
      },
      {
        id: "14",
        image: "https://framerusercontent.com/images/V4m6xQkFK4DtQIe4julp2wAZU.jpg",
        title: "SAN PELLEGRINO",
        price: "$4",
        description: "Premium Italian sparkling water, served chilled."
      },
      {
        id: "15",
        image: "https://framerusercontent.com/images/Xo26AxVknouwTRkRlDq4iAY61lM.jpg",
        title: "FRESH LEMONADE",
        price: "$6",
        description: "House-made lemonade with fresh lemons, served over ice."
      },
      {
        id: "16",
        image: "https://framerusercontent.com/images/P3HXY0bdkKqOIuqpxPx1WCZZJI.jpg",
        title: "ICED TEA",
        price: "$4",
        description: "Freshly brewed iced tea, sweetened or unsweetened, with a slice of lemon."
      },
      {
        id: "17",
        image: "https://framerusercontent.com/images/0vxSgUz6jRJuj5PYRkdedJRzrg.jpg",
        title: "ITALIAN COFFEE",
        price: "$5",
        description: "Rich espresso or cappuccino, made the traditional Italian way."
      },
      {
        id: "18",
        image: "https://framerusercontent.com/images/V4m6xQkFK4DtQIe4julp2wAZU.jpg",
        title: "RED WINE",
        price: "$8",
        description: "Selection of fine Italian red wines, served by the glass."
      },
      {
        id: "19",
        image: "https://framerusercontent.com/images/Xo26AxVknouwTRkRlDq4iAY61lM.jpg",
        title: "WHITE WINE",
        price: "$8",
        description: "Selection of crisp Italian white wines, served by the glass."
      },
      {
        id: "20",
        image: "https://framerusercontent.com/images/P3HXY0bdkKqOIuqpxPx1WCZZJI.jpg",
        title: "BEER",
        price: "$6",
        description: "Selection of Italian and local craft beers, served ice cold."
      }
    ]
  }
];

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState("pizza");

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash.slice(1);
    if (hash && menuCategories.find(cat => cat.id === hash)) {
      setActiveCategory(hash);
    }
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Scroll to the category section
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full bg-[#0c0a10] py-10 sm:py-16 md:py-20 px-5 sm:px-10 md:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-[60px]">
          {/* Sticky Sidebar */}
          <aside className="md:sticky md:top-10 md:self-start md:w-[200px] lg:w-[239px] flex-shrink-0 relative md:relative">
            <div className="flex flex-row md:flex-col gap-3 sm:gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide -mx-4 sm:-mx-0 px-4 sm:px-0">
              {menuCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`#${category.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategoryClick(category.id);
                  }}
                  className={`
                    flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border transition-all duration-200 whitespace-nowrap text-sm sm:text-base
                    ${
                      activeCategory === category.id
                        ? "bg-[#f1c287] border-[#f1c287] text-[#09090b]"
                        : "bg-transparent border-[#e7ecf4] text-[#ffedd8] hover:text-[#f1c287]"
                    }
                  `}
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  <span className="font-normal">{category.name}</span>
                </Link>
              ))}
            </div>
          </aside>

          {/* Menu Items */}
          <div className="flex-1 space-y-12 sm:space-y-16 md:space-y-20">
            {menuCategories.map((category) => (
              <motion.div
                key={category.id}
                id={category.id}
                className="scroll-mt-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 sm:gap-5 mb-6 sm:mb-8 md:mb-10">
                  <h2
                    className="text-[#ffedd8] text-base sm:text-lg md:text-xl lg:text-[22px] font-normal whitespace-pre"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {category.name}
                  </h2>
                  <div className="flex-1 h-px bg-[#e7ecf4]" />
                </div>

                {/* Menu Items */}
                <div className="space-y-6 sm:space-y-8 md:space-y-10">
                  {category.items.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Image */}
                      <div className="relative w-[90px] sm:w-[120px] md:w-[136px] h-[69px] sm:h-[105px] flex-shrink-0 rounded-xl overflow-hidden border border-black/6">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          quality={85}
                          sizes="(max-width: 640px) 90px, (max-width: 768px) 120px, 136px"
                        />
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 flex flex-col gap-2 sm:gap-2.5">
                        {/* Header: Title, Line, Price */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:gap-5">
                          <h3
                            className="text-[#ffedd8] text-base font-normal whitespace-pre"
                            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                          >
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-4 md:gap-5 w-full sm:w-auto">
                            <div className="flex-1 sm:flex-initial sm:flex-1 h-px bg-[#e7ecf4]" />
                            <p
                              className="text-[#ffedd8] text-lg font-normal text-right whitespace-pre flex-shrink-0"
                              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                            >
                              {item.price}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p
                          className="text-[#ffedd8] text-base font-normal leading-relaxed max-w-full sm:max-w-[450px]"
                          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

