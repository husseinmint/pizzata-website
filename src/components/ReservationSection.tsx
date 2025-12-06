"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    seats: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <motion.section 
      className="relative min-h-screen w-full flex items-center justify-center bg-[#0c0a10] py-[120px] px-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="w-full max-w-[800px] mx-auto flex flex-col items-center gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Title */}
        <motion.div 
          className="text-center w-full"
          variants={itemVariants}
        >
          <h1 className="text-[#ffedd8] text-[64px] md:text-[100px] leading-[96px] tracking-[-0.03em] font-forum capitalize">
            RESERVE YOUR TABLE
          </h1>
        </motion.div>

        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="w-full flex flex-col gap-5"
          variants={containerVariants}
        >
          {/* First Row - Name and Phone */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <label className="flex-1">
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-14 px-3 bg-[rgb(9,9,11)] border border-[#2c2a27] text-[rgb(153,153,153)] placeholder-[rgb(153,153,153)] focus:outline-none focus:border-[#f1c287] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, letterSpacing: '0em', lineHeight: '1.2em' }}
                required
              />
            </label>
            <label className="flex-1">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-14 px-3 bg-[rgb(9,9,11)] border border-[#2c2a27] text-[rgb(153,153,153)] placeholder-[rgb(153,153,153)] focus:outline-none focus:border-[#f1c287] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, letterSpacing: '0em', lineHeight: '1.2em' }}
                required
              />
            </label>
          </motion.div>

          {/* Second Row - Email and Date */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <label className="flex-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-14 px-3 bg-[rgb(9,9,11)] border border-[#2c2a27] text-[rgb(153,153,153)] placeholder-[rgb(153,153,153)] focus:outline-none focus:border-[#f1c287] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, letterSpacing: '0em', lineHeight: '1.2em' }}
                required
              />
            </label>
            <label className="flex-1 relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full h-14 px-3 bg-[rgb(9,9,11)] border border-[#2c2a27] text-[rgb(153,153,153)] focus:outline-none focus:border-[#f1c287] transition-colors [color-scheme:dark]"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, letterSpacing: '0em', lineHeight: '1.2em' }}
                required
              />
            </label>
          </motion.div>

          {/* Third Row - Time and Seats */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <div className="flex-1 relative">
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full h-14 px-3 pr-10 bg-[rgb(9,9,11)] border border-[#2c2a27] text-[rgb(153,153,153)] focus:outline-none focus:border-[#f1c287] transition-colors appearance-none cursor-pointer"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 400, letterSpacing: '0em', lineHeight: '1.2em' }}
                required
              >
                <option value="" disabled className="bg-[rgb(9,9,11)] text-[rgb(153,153,153)]">
                  Select Time...
                </option>
                <option value="9pm-10pm" className="bg-[rgb(9,9,11)] text-[rgb(153,153,153)]">9pm-10pm</option>
                <option value="10pm-11pm" className="bg-[rgb(9,9,11)] text-[rgb(153,153,153)]">10pm-11pm</option>
                <option value="11pm-12pm" className="bg-[rgb(9,9,11)] text-[rgb(153,153,153)]">11pm-12pm</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgb(153,153,153)] pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 16 16"
              >
                <path d="M 3.5 6 L 8 10.5 L 12.5 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <label className="flex-1">
              <input
                type="number"
                name="seats"
                placeholder="Seats"
                value={formData.seats}
                onChange={handleChange}
                min="1"
                className="w-full h-14 px-3 bg-[rgb(9,9,11)] border border-[#2c2a27] text-[rgb(153,153,153)] placeholder-[rgb(153,153,153)] focus:outline-none focus:border-[#f1c287] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, letterSpacing: '0em', lineHeight: '1.2em' }}
                required
              />
            </label>
          </motion.div>

          {/* Fourth Row - Message */}
          <motion.label 
            className="w-full"
            variants={itemVariants}
          >
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full min-h-[150px] px-3 py-3 bg-[rgb(9,9,11)] border border-[#2c2a27] text-[rgb(153,153,153)] placeholder-[rgb(153,153,153)] focus:outline-none focus:border-[#f1c287] transition-colors resize-y"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, letterSpacing: '0em', lineHeight: '1.2em' }}
            />
          </motion.label>

          {/* Reserve Button */}
          <motion.button
            type="submit"
            className="w-full h-14 bg-[rgb(241,194,135)] text-[#09090b] text-base font-medium tracking-[0.1em] uppercase hover:opacity-90 transition-opacity flex items-center justify-center"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '24px' }}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            RESERVE
          </motion.button>
        </motion.form>

        {/* Footer Contact Information */}
        <motion.div 
          className="text-center w-full"
          variants={itemVariants}
        >
          <p 
            className="text-[#73747d] text-sm sm:text-base leading-6"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, letterSpacing: '0.01em', lineHeight: '24px' }}
          >
            Reserve by phone, dial{" "}
            <a 
              href="tel:+12125551212" 
              className="text-[#ffedd8] hover:text-[rgba(255,237,216,0.6)] transition-colors"
              style={{ textDecoration: 'none' }}
            >
              +1 (212) 555-1212
            </a>{" "}
            (or) send an email to{" "}
            <a 
              href="mailto:reserve@pizzata.io" 
              className="text-[#ffedd8] hover:text-[rgba(255,237,216,0.6)] transition-colors"
              style={{ textDecoration: 'none' }}
            >
              reserve@pizzata.io
            </a>
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

