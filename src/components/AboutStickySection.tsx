"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/about-2.jpg", alt: "Pizzata Experience 1" },
  { src: "/about-3.jpg", alt: "Pizzata Experience 2" },
  { src: "/about-4.jpg", alt: "Pizzata Experience 3" },
];

export default function AboutStickySection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-start gap-10 md:gap-[40px] bg-[#0c0a10] py-10 md:py-10 px-5 md:px-0 md:pl-10">
      {/* Text Section - Sticky on Desktop */}
      <motion.div 
        className="flex flex-col items-start gap-6 flex-1 w-full md:max-w-[470px] md:sticky md:top-10 md:self-start"
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
          Pizzata Isn&apos;t Just About Food — It&apos;s a Cultural Experience
        </h2>
        
        {/* Paragraph */}
        <p 
          className="text-[#ffedd8] text-lg leading-[26px] tracking-[0.01em] font-normal"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Experience Italian cuisine at its finest. Whether you&apos;re a pizza lover, an adventurous foodie, or simply looking for a place to enjoy authentic flavors, Pizzata is here to serve up something extraordinary.
        </p>
      </motion.div>

      {/* Images Section */}
      <div className="flex flex-col gap-0 flex-1 w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[0.73/1] w-full overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
            {/* Fade gradient on last image */}
            {index === images.length - 1 && (
              <div 
                className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#0c0a10] to-transparent pointer-events-none z-10"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

