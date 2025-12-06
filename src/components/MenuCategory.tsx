"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategoryProps {
  title: string;
  subtitle: string;
  items: MenuItem[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export function MenuCategory({
  title,
  subtitle,
  items,
  image,
  imageAlt,
  reverse = false,
}: MenuCategoryProps) {
  return (
    <section
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className="scroll-mt-24"
    >
      <motion.div
        className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-stretch lg:items-stretch`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-full rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            quality={90}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-8 flex flex-col justify-center">
          {/* Header */}
          <div className="space-y-2">
            <p
              className="text-[#f1c287] text-sm sm:text-base font-normal tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {subtitle}
            </p>
            <h2
              className="text-[#ffedd8] text-3xl sm:text-4xl md:text-5xl font-normal"
              style={{ fontFamily: 'var(--font-forum), sans-serif' }}
            >
              {title}
            </h2>
          </div>

          {/* Menu Items */}
          <div className="space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row sm:items-start gap-4 pb-6 border-b border-[#e7ecf4]/20 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      className="text-[#ffedd8] text-lg sm:text-xl font-normal"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-[#ffedd8] text-lg sm:text-xl font-normal flex-shrink-0"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {item.price}
                    </p>
                  </div>
                  <p
                    className="text-[#ffedd8]/80 text-sm sm:text-base leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

