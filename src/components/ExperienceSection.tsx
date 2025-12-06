"use client";

import DecorativeIcon from "./DecorativeIcon";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="relative w-full bg-[#0c0a10] py-24 px-5">
      <motion.div 
        className="max-w-6xl mx-auto flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Decorative Icons */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <DecorativeIcon />
          <DecorativeIcon />
          <DecorativeIcon />
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h1 className="text-[#FFEED9] text-[64px] md:text-[100px] leading-[68px] md:leading-[96px] tracking-[-0.03em] capitalize font-forum">
            A UNIQUE
            <br />
            EXPERIENCE
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-[600px]">
          <p className="text-[#FFEED9] text-[22px] leading-[34px] font-normal">
            Redefining the way you experience sushi, bringing creativity and bold flavors to every bite.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

