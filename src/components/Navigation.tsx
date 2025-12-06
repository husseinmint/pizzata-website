"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LetterLogo from "./LetterLogo";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-5 md:px-10 bg-transparent">
        <Link href="/" className="flex items-center h-7">
          <LetterLogo />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/menu" className="text-[#FFEED9] text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity font-normal">
            MENU
          </Link>
          <Link href="/about" className="text-[#FFEED9] text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity font-normal">
            ABOUT
          </Link>
          <Link href="/contact" className="text-[#FFEED9] text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity font-normal">
            CONTACT
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full cursor-pointer relative"
          aria-label="Toggle menu"
        >
          <div className="relative w-full h-full">
            {/* Top Line */}
            <div 
              className={`absolute h-0.5 bg-[#ffedd8] transition-all duration-300 ${isMenuOpen ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 rotate-45' : 'top-[14px] w-4'}`}
              style={{ 
                borderRadius: '55px',
                left: isMenuOpen ? '50%' : 'calc(52.5% - 8px)',
                transform: isMenuOpen ? 'translate(-50%, -50%) rotate(45deg)' : 'none'
              }}
            />
            {/* Middle Line */}
            <div 
              className={`absolute h-0.5 bg-[#ffedd8] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              style={{ 
                borderRadius: '55px',
                top: 'calc(50% - 1px)',
                left: '7px',
                width: '16px'
              }}
            />
            {/* Bottom Line */}
            <div 
              className={`absolute h-0.5 bg-[#ffedd8] transition-all duration-300 ${isMenuOpen ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 -rotate-45' : 'bottom-[14px] w-4'}`}
              style={{ 
                borderRadius: '55px',
                left: isMenuOpen ? '50%' : 'calc(52.5% - 8px)',
                transform: isMenuOpen ? 'translate(-50%, -50%) rotate(-45deg)' : 'none'
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[100] bg-[rgb(9,9,11)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />

            {/* Menu Content */}
            <motion.div
              className="fixed inset-0 z-[101] flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Top Section - Logo and Close Button */}
              <div className="flex items-center justify-between px-5 py-5 h-[75px]">
                <Link href="/" onClick={closeMenu} className="flex items-center h-6">
                  <LetterLogo />
                </Link>
                
                {/* Close Button */}
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
                  aria-label="Close menu"
                >
                  <div className="relative w-5 h-5">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-[#ffedd8] rounded-full rotate-45" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-[#ffedd8] rounded-full -rotate-45" />
                  </div>
                </button>
              </div>

              {/* Links Section */}
              <motion.div
                className="flex flex-col items-center gap-6 px-5 py-8 flex-1"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Link
                  href="/menu"
                  onClick={closeMenu}
                  className="text-[#ffedd8] text-lg font-normal text-center hover:text-[#FFEED9] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: '26px', letterSpacing: '0.01em' }}
                >
                  Menu
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="text-[#ffedd8] text-lg font-normal text-center hover:text-[#FFEED9] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: '26px', letterSpacing: '0.01em' }}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="text-[#ffedd8] text-lg font-normal text-center hover:text-[#FFEED9] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: '26px', letterSpacing: '0.01em' }}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

