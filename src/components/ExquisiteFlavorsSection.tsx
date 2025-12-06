"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExquisiteFlavorsSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0c0a10]">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="https://framerusercontent.com/images/gpTP82qszHtIE5BS53K5he5JsU.jpg?scale-down-to=2048"
          alt="Exquisite Flavors"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Dark overlay for better text readability */}
      <div 
        className="absolute inset-0 z-[5] w-full h-full" 
        style={{
          background: 'linear-gradient(180deg, rgba(12, 10, 16, 0.3) 0%, rgba(12, 10, 16, 0.5) 50%, rgba(12, 10, 16, 0.4) 100%)'
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center gap-6 px-5 w-full max-w-[800px] text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Main Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[#FFEED9] text-[64px] md:text-[80px] lg:text-[96px] leading-[110%] tracking-[-0.03em] font-forum">
            EXQUISITE
          </h1>
          <h1 className="text-[#FFEED9] text-[64px] md:text-[80px] lg:text-[96px] leading-[110%] tracking-[-0.03em] font-forum">
            FLAVORS
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-[#FFEED9] text-[18px] md:text-[22px] leading-[28px] md:leading-[34px] font-normal max-w-[600px] opacity-90">
          Holier is more than just food—it's a celebration of culinary passion, crafted from an inspiring journey.
        </p>

        {/* Learn More Button */}
        <Link
          href="/about"
          className="mt-4 px-10 py-4 rounded-lg text-[#09090b] text-base font-medium tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
          style={{
            backgroundColor: 'rgb(255, 227, 69)',
            fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
          }}
        >
          LEARN MORE
        </Link>
      </motion.div>
    </section>
  );
}

