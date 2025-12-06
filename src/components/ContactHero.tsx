"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ContactHero() {
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
          src="https://framerusercontent.com/images/NAJ0An8AIra0tZt5s2bxV4fmU28.png"
          alt="Contact Us"
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ objectPosition: '50% 50%' }}
        />
      </motion.div>
      
      {/* Dark elegant minimal overlay filter */}
      <div 
        className="absolute inset-0 z-[5] w-full h-full" 
        style={{
          background: 'linear-gradient(180deg, rgba(12, 10, 16, 0.4) 0%, rgba(12, 10, 16, 0.5) 50%, rgba(12, 10, 16, 0.6) 100%)'
        }}
      />
      
      {/* Subtle vignette effect */}
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
          height: '600px'
        }}
      />
      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-[7] w-full" 
        style={{
          background: 'linear-gradient(0deg, rgba(12, 10, 16, 1) 0%, rgba(12, 10, 16, 0.8) 0%, transparent 100%)',
          height: '360px'
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center gap-5 px-5 w-full max-w-[770px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        {/* Title with Lines */}
        <motion.div 
          className="flex items-center gap-6 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex-1 h-px bg-[#ffedd8]" />
          <h3
            className="text-[#ffedd8] text-[34px] font-normal capitalize whitespace-pre"
            style={{ fontFamily: 'var(--font-forum), sans-serif' }}
          >
            CONTACT US
          </h3>
          <div className="flex-1 h-px bg-[#ffedd8]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-[#ffedd8] text-[64px] sm:text-[80px] md:text-[100px] font-normal capitalize text-center leading-[68px] sm:leading-[80px] md:leading-[96px] tracking-[-0.03em] w-full"
          style={{ fontFamily: 'var(--font-forum), sans-serif' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          WE'RE AT YOUR SERVICE
        </motion.h1>
      </motion.div>
    </section>
  );
}

