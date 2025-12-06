"use client";

import InfiniteSlider from "./InfiniteSlider";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageItem {
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  { src: "/gallery-1.jpg", alt: "Authentic Italian pizza at Pizzata restaurant" },
  { src: "/gallery-2.jpg", alt: "Traditional wood-fired pizza from Pizzata" },
  { src: "/gallery-3.jpg", alt: "Fresh Italian ingredients at Pizzata" },
  { src: "/gallery-4.jpg", alt: "Premium Italian beverages at Pizzata" },
  { src: "/gallery-5.jpg", alt: "Artisan pizza preparation at Pizzata" },
  { src: "/gallery-6.jpg", alt: "Italian cuisine at Pizzata restaurant" },
  { src: "/gallery-7.jpg", alt: "Delicious Italian food at Pizzata" },
  { src: "/gallery-8.jpg", alt: "Authentic Italian dining experience at Pizzata" },
];

export default function ImageGallery() {
  return (
    <motion.section 
      className="relative w-full bg-[#0c0a10] py-8 sm:py-10 md:py-12 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Sliders Container */}
      <div className="relative w-full">
        {/* Top Slider - Moving Left */}
        <div className="relative h-[280px] sm:h-[360px] md:h-[400px] lg:h-[466px] w-full overflow-hidden">
          <InfiniteSlider direction="left">
            {images.map((image, index) => (
              <div
                key={`left-${index}`}
                className="relative shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[389px] h-[280px] sm:h-[360px] md:h-[400px] lg:h-[466px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={389}
                  height={466}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 389px"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>

        {/* Bottom Slider - Moving Right with exact gap (16px) */}
        <div className="relative h-[280px] sm:h-[360px] md:h-[400px] lg:h-[466px] w-full overflow-hidden mt-3 sm:mt-4">
          <InfiniteSlider direction="right">
            {images.map((image, index) => (
              <div
                key={`right-${index}`}
                className="relative shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[389px] h-[280px] sm:h-[360px] md:h-[400px] lg:h-[466px] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={389}
                  height={466}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 389px"
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>

      {/* Fade Overlays - Matching section background */}
      {/* Top Fade */}
      <div 
        className="absolute top-0 left-0 right-0 z-[5] w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[241px]"
        style={{
          background: 'linear-gradient(180deg, rgba(12, 10, 16, 1) 0%, rgba(12, 10, 16, 0) 100%)'
        }}
      />
      
      {/* Bottom Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-[5] w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[313px]"
        style={{
          background: 'linear-gradient(0deg, rgba(12, 10, 16, 1) 0%, rgba(12, 10, 16, 0) 100%)'
        }}
      />

      {/* EXPLORE MENU Button - Absolutely centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-12 sm:h-14 w-auto">
        <Link
          href="/menu"
          className="flex items-center justify-center h-12 sm:h-14 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-[#09090b] text-sm sm:text-base font-medium tracking-[0.1em] capitalize hover:opacity-90 transition-opacity rounded"
          style={{
            backgroundColor: 'rgb(255, 227, 69)',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '24px',
            textAlign: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
            overflow: 'hidden'
          }}
        >
          EXPLORE MENU
        </Link>
      </div>
    </motion.section>
  );
}

