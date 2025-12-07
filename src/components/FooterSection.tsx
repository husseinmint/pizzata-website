"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function FooterSection() {
  return (
    <motion.section 
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen w-full flex items-center justify-center bg-[#0c0a10] px-5 pt-8 sm:pt-12 md:pt-16 lg:pt-[120px] pb-12 sm:pb-16 md:pb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[140px]">
        {/* Logo Section */}
        <div className="w-full flex justify-center px-2 sm:px-4">
          <Link href="/" className="block w-full aspect-[2.5416666666666665/1] max-w-full">
            <Logo />
          </Link>
        </div>

        {/* Bottom Section - Menu and Copyright */}
        <div className="w-full flex flex-col items-center gap-4 sm:gap-6 px-4">
          {/* Navigation Menu */}
          <nav className="flex flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 flex-wrap">
            <Link 
              href="/menu" 
              className="text-[#73747d] text-[10px] sm:text-xs font-normal tracking-[0.2em] uppercase hover:text-[#ffedd8] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: '16px' }}
            >
              MENU
            </Link>
            <Link 
              href="/about" 
              className="text-[#73747d] text-[10px] sm:text-xs font-normal tracking-[0.2em] uppercase hover:text-[#ffedd8] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: '16px' }}
            >
              ABOUT
            </Link>
            <Link 
              href="/contact" 
              className="text-[#73747d] text-[10px] sm:text-xs font-normal tracking-[0.2em] uppercase hover:text-[#ffedd8] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: '16px' }}
            >
              CONTACT
            </Link>
          </nav>

          {/* Copyright */}
          <p 
            className="text-[#73747d] text-[10px] sm:text-xs font-normal text-center"
            style={{ fontFamily: 'Inter, sans-serif', lineHeight: '16px', letterSpacing: '0em' }}
          >
            © 2088 Pizzata
          </p>
        </div>
      </div>
    </motion.section>
  );
}

