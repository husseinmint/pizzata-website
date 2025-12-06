"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full bg-[#0c0a10] py-20 sm:py-30 px-5">
      <motion.div
        className="max-w-[600px] mx-auto flex flex-col gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <h3
          className="text-[#ffedd8] text-[34px] font-normal capitalize text-center"
          style={{ fontFamily: 'var(--font-forum), sans-serif' }}
        >
          GET IN TOUCH
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <label className="flex flex-col gap-2.5">
            <div className="relative h-14">
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-full px-3 bg-[#09090b] border border-[#e7ecf4] text-[#999] placeholder:text-[#999] focus:border-[#f1c287] focus:outline-none transition-colors"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              />
            </div>
          </label>

          {/* Email */}
          <label className="flex flex-col gap-2.5">
            <div className="relative h-14">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-full px-3 bg-[#09090b] border border-[#e7ecf4] text-[#999] placeholder:text-[#999] focus:border-[#f1c287] focus:outline-none transition-colors"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              />
            </div>
          </label>

          {/* Phone */}
          <label className="flex flex-col gap-2.5">
            <div className="relative h-14">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-full px-3 bg-[#09090b] border border-[#e7ecf4] text-[#999] placeholder:text-[#999] focus:border-[#f1c287] focus:outline-none transition-colors"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              />
            </div>
          </label>

          {/* Message */}
          <label className="flex flex-col gap-2.5">
            <div className="relative min-h-[150px]">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-full min-h-[150px] px-3 py-3 bg-[#09090b] border border-[#e7ecf4] text-[#999] placeholder:text-[#999] focus:border-[#f1c287] focus:outline-none transition-colors resize-y"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              />
            </div>
          </label>

          {/* Submit Button */}
          <div className="h-14">
            <button
              type="submit"
              className="w-full h-full bg-[#f1c287] text-[#09090b] font-medium uppercase tracking-[0.1em] hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              SEND
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-10">
          {/* General Inquiries */}
          <div className="flex-1 flex flex-col gap-2">
            <p
              className="text-[#ffedd8] text-base font-normal"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              General Inquiries
            </p>
            <a
              href="mailto:hello@pizzata.com"
              className="text-[#6d7888] text-base font-medium hover:text-[#ffedd8] transition-colors"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              hello@pizzata.com
            </a>
          </div>

          {/* Reservations */}
          <div className="flex-1 flex flex-col gap-2">
            <p
              className="text-[#ffedd8] text-base font-normal"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Reservations
            </p>
            <a
              href="mailto:book@pizzata.com"
              className="text-[#6d7888] text-base font-medium hover:text-[#ffedd8] transition-colors"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              book@pizzata.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex-1 flex flex-col gap-2">
            <p
              className="text-[#ffedd8] text-base font-normal"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Phone
            </p>
            <a
              href="tel:+1234567890"
              className="text-[#6d7888] text-base font-medium hover:text-[#ffedd8] transition-colors"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              +12 345 678 90
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


