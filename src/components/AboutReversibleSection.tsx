"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FlipCardProps {
  frontImage: string;
  frontTitle: string;
  backTitle: string;
  backDescription: string;
  index: number;
}

const FlipCard = ({ frontImage, frontTitle, backTitle, backDescription, index }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-[400px] sm:h-[500px] md:h-[600px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={frontImage}
              alt={frontTitle}
              fill
              className="object-cover"
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
              <h3 
                className="text-[#ffedd8] text-[28px] sm:text-[32px] md:text-[40px] font-forum leading-tight"
                style={{ fontFamily: 'var(--font-forum), sans-serif' }}
              >
                {frontTitle}
              </h3>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="relative w-full h-full bg-[#0c0a10] border-2 border-[#ffedd8]/20 rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <h3 
              className="text-[#ffedd8] text-[28px] sm:text-[32px] md:text-[40px] font-forum mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-forum), sans-serif' }}
            >
              {backTitle}
            </h3>
            <p 
              className="text-[#ffedd8] text-base sm:text-lg md:text-xl leading-relaxed font-normal" 
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {backDescription}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const reversibleCards = [
  {
    frontImage: "https://framerusercontent.com/images/gpTP82qszHtIE5BS53K5he5JsU.jpg?scale-down-to=2048",
    frontTitle: "OUR STORY",
    backTitle: "A Journey of Passion",
    backDescription: "Pizzata was born from a deep love for authentic Italian cuisine. Our founders traveled across Italy, learning traditional techniques from master pizzaiolos in Naples. Every recipe tells a story of heritage, passion, and the pursuit of perfection."
  },
  {
    frontImage: "https://framerusercontent.com/images/mo5YJTuN4Uex3kCicCo4Alyuuuw.jpg?scale-down-to=2048",
    frontTitle: "OUR CRAFT",
    backTitle: "Artisan Excellence",
    backDescription: "We handcraft every pizza using time-honored methods. Our dough ferments for 48 hours, our sauce is made fresh daily, and we source only the finest ingredients. Each pie is a masterpiece, baked to perfection in our wood-fired ovens."
  },
  {
    frontImage: "https://framerusercontent.com/images/k1w6CkeYYhZ0xnEJWDY7WKgFY.png?scale-down-to=2048",
    frontTitle: "OUR PROMISE",
    backTitle: "Quality First",
    backDescription: "At Pizzata, we promise an unforgettable dining experience. From the moment you walk in, you'll be greeted with warm hospitality, exceptional service, and pizza that exceeds expectations. We're not just serving food—we're creating memories."
  }
];

export default function AboutReversibleSection() {
  return (
    <section className="w-full bg-[#0c0a10] py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 
            className="text-[#ffedd8] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-forum tracking-[-0.03em] mb-4"
            style={{ fontFamily: 'var(--font-forum), sans-serif' }}
          >
            DISCOVER MORE
          </h2>
          <p 
            className="text-[#ffedd8] text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto opacity-90" 
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Hover or click to explore our story, craft, and promise
          </p>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {reversibleCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <FlipCard
                frontImage={card.frontImage}
                frontTitle={card.frontTitle}
                backTitle={card.backTitle}
                backDescription={card.backDescription}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

