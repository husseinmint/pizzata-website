"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Star from "./Star";

export default function AboutHero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-[#0c0a10] aspect-[0.557143/1] sm:aspect-[1.0125/1] md:aspect-[1.33333/1]">
      {/* Background Image Container */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="https://img.freepik.com/premium-photo/top-view-pizza-photo_1048944-6762631.jpg?w=1480"
          alt="About Us - Pizza"
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ objectPosition: '50% 50%' }}
        />
      </motion.div>
      
      {/* Dark elegant minimal overlay filter - Full viewport coverage */}
      <div 
        className="absolute inset-0 z-[5] w-full h-full" 
        style={{
          background: 'linear-gradient(180deg, rgba(12, 10, 16, 0.4) 0%, rgba(12, 10, 16, 0.5) 50%, rgba(12, 10, 16, 0.6) 100%)'
        }}
      />
      
      {/* Subtle vignette effect for elegance - Full viewport coverage */}
      <div 
        className="absolute inset-0 z-[6] w-full h-full" 
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
        }}
      />
      
      {/* Top gradient fade */}
      <div 
        className="absolute top-0 left-0 right-0 z-[7] w-full" 
        style={{
          background: 'linear-gradient(180deg, rgba(12, 10, 16, 1) 0%, rgba(12, 10, 16, 0.8) 0%, transparent 100%)',
          height: '380px'
        }}
      />
      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-[7] w-full" 
        style={{
          background: 'linear-gradient(0deg, rgba(12, 10, 16, 1) 0%, rgba(12, 10, 16, 0.8) 0%, transparent 100%)',
          height: '380px'
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center gap-5 px-5 w-full max-w-[770px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        {/* Decorative Title Section with Lines and Stars */}
        <motion.div 
          className="flex flex-col items-center gap-5 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Title Row with Lines and Stars */}
          <div className="flex flex-row items-center justify-center gap-6 w-full">
            {/* Left Line */}
            <div className="flex-1 h-px bg-[#ffedd8]" />
            
            {/* Stars */}
            <div className="flex flex-row items-center gap-3">
              <Star />
              <Star />
              <Star />
            </div>
            
            {/* Right Line */}
            <div className="flex-1 h-px bg-[#ffedd8]" />
          </div>

          {/* Main Title */}
          <h1 
            className="text-center text-[#ffedd8] text-[64px] sm:text-[80px] md:text-[100px] leading-[68px] sm:leading-[80px] md:leading-[96px] tracking-[-0.03em] capitalize font-normal font-forum w-full"
            style={{ fontFamily: 'var(--font-forum), sans-serif' }}
          >
            A QUEST TO EXCELLENCE
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
}

