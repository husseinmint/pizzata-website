"use client";

import { useState, useEffect } from "react";

interface MenuNavigationProps {
  categories?: string[];
}

export function MenuNavigation({ categories = ["Pizza", "Salad", "Drinks"] }: MenuNavigationProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(categories[0] || null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map((cat) => document.getElementById(cat.toLowerCase().replace(/\s+/g, "-")));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(categories[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  const scrollToCategory = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById(category.toLowerCase().replace(/\s+/g, "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="flex flex-wrap justify-center gap-2 md:gap-4 py-8 border-b border-[#ffedd8]/20">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => scrollToCategory(category)}
          className={`
            font-[family-name:var(--font-inter)] text-sm md:text-base px-4 py-2 transition-colors whitespace-nowrap
            ${
              activeCategory === category
                ? "text-gray-50 border-b-2 border-gray-50"
                : "text-[#ffedd8] hover:text-gray-50"
            }
          `}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
