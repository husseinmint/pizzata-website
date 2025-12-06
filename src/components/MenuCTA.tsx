"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const chefsPicks = [
  {
    name: "Margherita",
    price: "$16",
    image: "https://framerusercontent.com/images/aN5MZ7c58dSugIWaxQAFrvi9FI.png",
    aspectRatio: "1 / 1", // Square
  },
  {
    name: "Quattro Formaggi",
    price: "$24",
    image: "https://framerusercontent.com/images/Rrxkm9q9KSK2bxDknklzbIUhjiw.png",
    aspectRatio: "0.734531 / 1", // Taller
  },
  {
    name: "Diavola",
    price: "$20",
    image: "https://framerusercontent.com/images/iZkYbLs7HEU6TzQuK1g8Lc3Hirg.png",
    aspectRatio: "1 / 1", // Square
  },
];

export function MenuCTA() {
  return (
    <motion.section
      className="min-h-screen w-full flex flex-col justify-center items-center bg-[#0c0a10] px-3 sm:px-3 md:px-8 py-14 sm:py-14 md:py-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full flex flex-col gap-12 md:gap-12">
        {/* Title */}
        <h2
          className="text-[#ffedd8] text-[40px] sm:text-[40px] md:text-[48px] font-normal"
          style={{ 
            fontFamily: 'var(--font-forum), sans-serif', 
            letterSpacing: '-0.03em', 
            lineHeight: '110%',
            textAlign: 'left'
          }}
        >
          Chef&apos;s picks
        </h2>

        {/* Pizza Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-6 w-full">
          {chefsPicks.map((pizza, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-3 flex-1 md:flex-[1_0_0px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ transform: 'perspective(1200px)' }}
            >
              {/* Image */}
              <div 
                className="relative w-full rounded overflow-hidden"
                style={{ 
                  aspectRatio: pizza.aspectRatio,
                  borderRadius: '4px'
                }}
              >
                <Image
                  src={pizza.image}
                  alt={pizza.name}
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 809px) 100vw, max((100vw - 112px) / 3, 0px)"
                />
              </div>

              {/* Text Section */}
              <div className="flex items-center justify-between w-full">
                <p
                  className="text-[#ffedd8] text-sm font-normal"
                  style={{ 
                    fontFamily: 'var(--font-inter), sans-serif', 
                    letterSpacing: '-0.02em', 
                    lineHeight: '1.2em',
                    whiteSpace: 'pre'
                  }}
                >
                  {pizza.name}
                </p>
                <p
                  className="text-[#ffedd8] text-sm font-normal opacity-80"
                  style={{ 
                    fontFamily: 'var(--font-inter), sans-serif', 
                    letterSpacing: '-0.02em', 
                    lineHeight: '1.2em',
                    whiteSpace: 'pre'
                  }}
                >
                  {pizza.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
