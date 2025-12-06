"use client";

import TextLogo from "./TextLogo";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0c0a10]">
      {/* Background Video Container */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '50% 50%' }}
        >
          <source src="/12456197_2160_3840_25fps.mp4" type="video/mp4" />
          {/* Fallback if video doesn't load */}
          <div className="absolute inset-0 bg-[#0c0a10]" />
        </video>
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
        className="relative z-20 flex flex-col items-center justify-center gap-3 px-5 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        {/* Text Logo */}
        <motion.div 
          className="w-full max-w-[767px] mb-3 px-2 md:px-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <TextLogo />
        </motion.div>
        
        {/* Subtitle */}
        <motion.div 
          className="text-center max-w-[90%] sm:max-w-[400px] px-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-[#FFEED9] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[28px] sm:leading-[36px] md:leading-[40px] lg:leading-[44px] tracking-[-0.04em] capitalize font-normal whitespace-pre-wrap font-forum">
            BORN IN NAPOLI{'\n'}BAKED IN NITRA
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}

