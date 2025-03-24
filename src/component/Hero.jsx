"use client";
import React from "react";
import { motion } from "framer-motion";


import image1 from "../images/G.png";
import image2 from "../images/a.png";
import image3 from "../images/Expedia-Symbol 1.png";
import image4 from "../images/r.png";
import image5 from "../images/G.png";
import image6 from "../images/a.png";

// Stagger container for animations
export const staggerContainer = (staggerChildren = 0.2, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Image positions and sources
const images = [
  { src: image1, className: "top-1/4 right-0 translate-x-1/2" },
  { src: image2, className: "top-1/2 right-0 translate-x-1/2" },
  { src: image3, className: "bottom-1/4 right-0 translate-x-1/2" },
  { src: image4, className: "bottom-1/4 left-0 -translate-x-1/2" },
  { src: image5, className: "bottom-1/2 left-0 -translate-x-1/2" },
  { src: image6, className: "top-1/4 left-0 -translate-x-1/2" }
];

const Hero = () => {
  return (
    <section className="bg-white overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        variants={staggerContainer(0.3, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="relative max-w-3xl mx-auto">
          <div className="relative aspect-square flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-teal-400/20"></div>
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8"
              variants={textVariants}
            >
              <motion.h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" variants={textVariants}>
                Maximize your rental revenue with <span className="text-teal-600">mr.alfred</span>
              </motion.h1>
              <motion.p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base" variants={textVariants}>
                OBT-Integrated Vacation Rental Management Software
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4" variants={textVariants}>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base">
                  Start Free Trial <span className="ml-1 sm:ml-2">→</span>
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base">
                  Chat with us
                </button>
              </motion.div>

              <motion.p className="text-xs sm:text-sm text-gray-500" variants={textVariants}>
                Try mr.alfred for free forever.
                <br />
                No credit card required.
              </motion.p>
            </motion.div>

            {/* Floating Images */}
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute hidden sm:block ${image.className}`}
                variants={textVariants}
              >
                <div className="rounded-full overflow-hidden h-12 w-12 shadow-md">
                  <img src={images.src} alt={`Floating ${index}`} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
