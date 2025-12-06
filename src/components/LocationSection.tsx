"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <motion.section 
      className="relative w-full bg-[#0c0a10] py-8 sm:py-10 md:py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex flex-col px-5 sm:px-8 md:px-10 lg:px-32">
        {/* Image on Top */}
        <div className="w-full aspect-square sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-square rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden mb-6 sm:mb-8 md:mb-10">
          <Image
            src="https://framerusercontent.com/images/mo5YJTuN4Uex3kCicCo4Alyuuuw.jpg?scale-down-to=2048"
            alt="Restaurant location"
            width={800}
            height={800}
            className="w-full h-full object-cover"
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
          />
        </div>

        {/* Text Content Below */}
        <div className="w-full flex flex-col gap-6 sm:gap-8">
          {/* Location Label */}
          <div>
            <h3 className="text-[#FFEED9] text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em]">
              Location
            </h3>
          </div>

          {/* Address and Info */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Address */}
            <div>
              <h4 className="text-[#FFEED9] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[110%] tracking-[-0.03em] font-forum mb-4 sm:mb-6">
                Magasinsgatan 25
                <br />
                Göteborg
              </h4>
              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFEED9] text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em] underline hover:opacity-60 transition-opacity"
              >
                Get directions
              </Link>
            </div>

            {/* Opening Hours */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFEED9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-5 h-5"
                >
                  <path d="M12 6v6h6" stroke="currentColor" />
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" />
                </svg>
                <p className="text-[#FFEED9] text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em]">
                  Monday to Saturday
                </p>
              </div>
              <div className="flex items-center gap-1.5 ml-7 sm:ml-8">
                <div className="w-5 h-5 flex-shrink-0" />
                <p className="text-[#FFEED9] text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em]">
                  11:00 - 23:00
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-1.5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFEED9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 w-5 h-5"
              >
                <path d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479z" stroke="currentColor" />
              </svg>
              <Link
                href="tel:0311234567"
                className="text-[#FFEED9] text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em] hover:opacity-60 transition-opacity"
              >
                031 - 123 45 67
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

