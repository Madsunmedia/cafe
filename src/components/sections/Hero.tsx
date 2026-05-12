"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { useRef } from "react";

import { Floating3DImage } from "@/components/Floating3DImage";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center pt-24 pb-20 px-6 md:px-12 overflow-hidden bg-black-matte">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black-matte via-black-matte/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black-matte via-black-matte/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-20">
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            style={{ y: y1, opacity }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold-accent/30 bg-gold-accent/5 mb-10">
              <Sparkles size={16} className="text-gold-accent animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-accent">Award Winning Experience</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-serif font-medium text-cream-white leading-[0.9] mb-6 tracking-tighter">
              Crafted <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-accent via-cafe-300 to-orange-glow">
                Coffee.
              </span>
            </h1>

            <p className="text-cafe-100 text-3xl max-w-xl mb-16 font-sans font-light leading-relaxed tracking-widest uppercase">
              Cinematic Ritual.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <MagneticButton className="px-10 py-5 bg-gold-accent/10 border-gold-accent/30 flex items-center justify-center gap-4 group">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cream-white">Reserve a Table</span>
                <ArrowRight size={18} className="text-gold-accent group-hover:translate-x-2 transition-transform" />
              </MagneticButton>
              <MagneticButton className="px-10 py-5 flex items-center justify-center border-white/5 bg-white/[0.02]">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-cafe-100">The Signature Menu</span>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Right Side: 3D Picture Space */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
           <Floating3DImage />
        </div>
      </div>

      {/* Floating Particles/Beans Layer */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-=100", "+=50"],
              x: [null, "+=30", "-=30"],
              opacity: [0, 0.4, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-2 h-3 bg-[#3d2b1f] rounded-full blur-[0.5px]"
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] text-cafe-400 font-bold vertical-text">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold-accent to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
