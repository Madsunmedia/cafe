"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-orange-glow font-serif uppercase tracking-[0.3em] text-sm md:text-base mb-6"
        >
          Aesthetic & Pure
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream-white leading-tight mb-8"
        >
          Crafted Coffee.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cafe-200 to-orange-glow">
            Cinematic Experience.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-6"
        >
          <button className="px-8 py-4 bg-orange-glow text-white rounded-full font-medium tracking-wide hover:bg-orange-glow/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(230,126,34,0.3)]">
            Reserve a Table
          </button>
          <button className="px-8 py-4 glass-button font-medium tracking-wide">
            Explore Menu
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cafe-300"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
