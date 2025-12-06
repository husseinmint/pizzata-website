"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const metrics = [
  { number: "50+", label: "MENU ITEMS" },
  { number: "100%", label: "FRESH INGREDIENTS" },
  { number: "12", label: "EXPERT CHEFS" },
  { number: "01", label: "FLAGSHIP LOCATION" },
];

export default function AboutMetricsSection() {
  return (
    <section className="w-full flex flex-col bg-[#0c0a10]">
      {/* Image */}
      <div className="relative w-full aspect-[0.866667/1] sm:aspect-[1.47273/1] md:aspect-[1.82371/1]">
        <Image
          src="https://framerusercontent.com/images/aghAysVM8yaAYyXtTwgcZfONws.png"
          alt="Metrics"
          fill
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Metrics Container */}
      <div className="relative w-full border-b border-[#0c0a10] py-10 sm:py-16 md:py-20 px-5 sm:px-10">
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 max-w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 w-full sm:w-[14%] sm:flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Number */}
              <h2 
                className="text-[#ffedd8] text-[32px] sm:text-[40px] leading-[40px] sm:leading-[44px] tracking-[-0.04em] capitalize font-normal font-forum text-center"
                style={{ fontFamily: 'var(--font-forum), sans-serif' }}
              >
                {metric.number}
              </h2>
              
              {/* Label */}
              <p 
                className="text-[#ffedd8] text-base leading-6 tracking-[0.01em] font-medium text-center"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

