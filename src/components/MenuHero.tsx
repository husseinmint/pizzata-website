"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MenuHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#09090b] flex items-center justify-center">
      {/* Background Image Container with Aspect Ratio */}
      <div className="relative w-full aspect-[0.557143/1] sm:aspect-[1.0125/1] md:aspect-[1.34831/1] h-[700px] sm:h-[800px] md:h-auto md:aspect-[1.34831/1]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://framerusercontent.com/images/jljuGXhSCqRqJ435nzzY6sDqfMc.png"
            alt="Menu Background"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>

        {/* Floating Card Images */}
        {/* Top Right Card */}
        <div
          className="absolute top-[25%] sm:top-[39%] md:top-[35%] right-[-48px] sm:right-[-80px] md:right-[-3%] w-[30%] sm:w-[21%] md:w-[21%] h-[160px] sm:h-[350px] md:h-auto aspect-[0.725714/1] rounded-2xl sm:rounded-3xl overflow-hidden z-[5]"
          style={{ transform: 'translateY(-50%) rotate(9deg)' }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src="https://framerusercontent.com/images/aN5MZ7c58dSugIWaxQAFrvi9FI.png"
              alt="Pizza 1"
              fill
              className="object-cover"
              quality={90}
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, (max-width: 1200px) 25vw, 21vw"
            />
          </motion.div>
        </div>

        {/* Top Left Card */}
        <div
          className="absolute top-[89px] sm:top-[149px] md:top-[17%] left-[-56px] sm:left-[-62px] md:left-[-5%] w-[31%] sm:w-[20%] md:w-[20%] h-[160px] sm:h-[325px] md:h-auto aspect-[0.741538/1] rounded-2xl sm:rounded-3xl overflow-hidden z-[5]"
          style={{ transform: 'rotate(-7deg)' }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src="https://framerusercontent.com/images/iZkYbLs7HEU6TzQuK1g8Lc3Hirg.png"
              alt="Pizza 2"
              fill
              className="object-cover"
              quality={90}
              sizes="(max-width: 768px) 30vw, (max-width: 1200px) 25vw, 20vw"
            />
          </motion.div>
        </div>

        {/* Bottom Left Card */}
        <div
          className="absolute bottom-[-7px] sm:bottom-[-47px] md:bottom-[-5%] left-[-46px] sm:left-[-54px] md:left-[-4%] w-[32%] sm:w-[21%] md:w-[21%] h-[161px] sm:h-[325px] md:h-auto aspect-[0.772308/1] rounded-2xl sm:rounded-3xl overflow-hidden z-[5]"
          style={{ transform: 'rotate(10deg)' }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src="https://framerusercontent.com/images/Rrxkm9q9KSK2bxDknklzbIUhjiw.png"
              alt="Pizza 3"
              fill
              className="object-cover"
              quality={90}
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, (max-width: 1200px) 25vw, 21vw"
            />
          </motion.div>
        </div>

        {/* Bottom Right Card */}
        <div
          className="absolute bottom-[8px] sm:bottom-[-64px] md:bottom-[-7%] right-[-30px] sm:right-[-13px] md:right-[-1%] w-[32%] sm:w-[21%] md:w-[21%] h-[161px] sm:h-[325px] md:h-auto aspect-[0.772308/1] rounded-2xl sm:rounded-3xl overflow-hidden z-[5]"
          style={{ transform: 'rotate(-13deg)' }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Image
              src="https://framerusercontent.com/images/DGdfMrb3rUV9EpaBwU9xFoEabLo.png"
              alt="Pizza 4"
              fill
              className="object-cover"
              quality={90}
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, (max-width: 1200px) 25vw, 21vw"
            />
          </motion.div>
        </div>

        {/* Bottom Gradient Overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[98px] sm:h-[200px] md:h-[252px] z-10"
          style={{
            background: "linear-gradient(180deg, rgba(12, 10, 16, 0) 0%, rgb(12, 10, 16) 100%)",
          }}
        />

        {/* Content */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 max-w-[90%] sm:max-w-[600px] mx-auto px-4 sm:px-5 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          {/* Decorative Line with Text */}
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6 w-full">
            <div className="flex-1 h-px bg-[#ffedd8]" />
            <h3
              className="text-[#ffedd8] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[36px] capitalize whitespace-pre flex-shrink-0"
              style={{ fontFamily: 'var(--font-forum), sans-serif' }}
            >
              THE MENU
            </h3>
            <div className="flex-1 h-px bg-[#ffedd8]" />
          </div>

          {/* Main Heading - EXCEPTIONAL FLAVORS */}
          <h1
            className="text-[#ffedd8] text-[64px] sm:text-[64px] md:text-[72px] lg:text-[100px] leading-[68px] sm:leading-[68px] md:leading-[76px] lg:leading-[96px] tracking-[-0.03em] capitalize text-balance"
            style={{ fontFamily: 'var(--font-forum), sans-serif' }}
          >
            EXCEPTIONAL FLAVORS
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
