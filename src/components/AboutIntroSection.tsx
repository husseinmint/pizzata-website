"use client";

import { motion } from "framer-motion";

export default function AboutIntroSection() {
  return (
    <section className="w-full flex items-center justify-center bg-[#0c0a10] py-20 sm:py-24 md:py-[120px] px-5">
      <motion.div 
        className="flex flex-col items-start gap-4 max-w-[440px] w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Heading */}
        <h2 
          className="text-[#ffedd8] text-[32px] sm:text-[40px] leading-[40px] sm:leading-[44px] tracking-[-0.04em] capitalize font-normal font-forum"
          style={{ fontFamily: 'var(--font-forum), sans-serif' }}
        >
          Bold, Unique, and Unmatched Culinary Craftsmanship
        </h2>
        
        {/* Paragraph */}
        <p 
          className="text-[#ffedd8] text-[18px] sm:text-[22px] leading-[28px] sm:leading-[34px] font-normal"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          At Pizzata, pizza is more than just food—it&apos;s an expression of craftsmanship. Every pie is meticulously prepared with the finest ingredients, ensuring a perfect balance of flavor, texture, and presentation. Our chefs bring years of passion to the table, transforming simple ingredients into edible works of art.
        </p>
      </motion.div>
    </section>
  );
}

