"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    seats: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Reservation submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full bg-[#0c0a10] py-20 sm:py-30 px-5">
      <motion.div
        className="max-w-[800px] mx-auto flex flex-col gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <h1
          className="text-[#ffedd8] text-[64px] sm:text-[100px] font-normal capitalize text-center leading-[68px] sm:leading-[96px]"
          style={{ 
            fontFamily: 'var(--font-forum), sans-serif',
            letterSpacing: '-0.03em'
          }}
        >
          RESERVE YOUR TABLE
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Row 1: Name and Phone */}
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="flex-1 flex flex-col gap-2.5">
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
            <label className="flex-1 flex flex-col gap-2.5">
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
          </div>

          {/* Row 2: Email and Date */}
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="flex-1 flex flex-col gap-2.5">
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
            <label className="flex-1 flex flex-col gap-2.5">
              <div className="relative h-14">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full h-full px-3 bg-[#09090b] border border-[#e7ecf4] text-[#999] placeholder:text-[#999] focus:border-[#f1c287] focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                />
              </div>
            </label>
          </div>

          {/* Row 3: Time and Seats */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative h-14">
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full h-full px-3 bg-[#09090b] border border-[#e7ecf4] text-[#999] focus:border-[#f1c287] focus:outline-none transition-colors appearance-none"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                <option value="" disabled>
                  Select Time...
                </option>
                <option value="9pm-10pm">9pm-10pm</option>
                <option value="10pm-11pm">10pm-11pm</option>
                <option value="11pm-12pm">11pm-12pm</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M 3.5 6 L 8 10.5 L 12.5 6"
                    stroke="#999"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="transparent"
                  />
                </svg>
              </div>
            </div>
            <label className="flex-1 flex flex-col gap-2.5">
              <div className="relative h-14">
                <input
                  type="number"
                  name="seats"
                  placeholder="Seats"
                  value={formData.seats}
                  onChange={handleChange}
                  className="w-full h-full px-3 bg-[#09090b] border border-[#e7ecf4] text-[#999] placeholder:text-[#999] focus:border-[#f1c287] focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                />
              </div>
            </label>
          </div>

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
              className="w-full sm:w-[240px] h-full bg-[#f1c287] text-[#09090b] font-medium uppercase tracking-[0.1em] hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              RESERVE
            </button>
          </div>
        </form>

        {/* Footer Text */}
        <p
          className="text-[#ffedd8] text-base text-center font-normal"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Reserve by phone, dial{" "}
          <a
            href="tel:+12125551212"
            className="text-[#ffedd8] hover:opacity-80 transition-opacity underline"
          >
            +1 (212) 555-1212
          </a>{" "}
          (or) send an email to{" "}
          <a
            href="mailto:reserve@pizzata.com"
            className="text-[#ffedd8] hover:opacity-80 transition-opacity underline"
          >
            reserve@pizzata.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}


