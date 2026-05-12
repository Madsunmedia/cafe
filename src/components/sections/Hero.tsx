"use client";

import { motion } from "framer-motion";
import { ChevronDown, Volume2, VolumeX, Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative w-full h-[100svh] overflow-hidden flex flex-col pointer-events-auto">
      
      {/* Navbar (Glassmorphism) */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 pointer-events-auto"
      >
        <div className="text-xl font-serif text-cream-white tracking-widest uppercase">
          Cinematic
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm uppercase tracking-widest text-cafe-100">
          <span className="hover:text-orange-glow transition-colors cursor-pointer">Menu</span>
          <span className="hover:text-orange-glow transition-colors cursor-pointer">Story</span>
          <span className="hover:text-orange-glow transition-colors cursor-pointer">Experience</span>
        </div>
        <button className="md:hidden text-cream-white p-2">
          <Menu size={24} />
        </button>
      </motion.nav>

      {/* Social Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-40"
      >
        <div className="w-[1px] h-16 bg-white/20 mx-auto" />
        <span className="text-xs text-cafe-300 uppercase tracking-[0.3em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Instagram
        </span>
        <span className="text-xs text-cafe-300 uppercase tracking-[0.3em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Twitter
        </span>
        <div className="w-[1px] h-16 bg-white/20 mx-auto" />
      </motion.div>

      {/* Main Asymmetrical Layout */}
      <div className="flex-1 w-full flex flex-col md:flex-row relative z-10 px-6 md:px-24 pt-24 md:pt-0 pointer-events-none">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-5/12 h-full flex flex-col justify-center pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-glow animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-cafe-100 font-medium">Open Until Midnight</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium text-cream-white leading-[1.1] mb-8">
              Crafted Coffee. <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-accent to-cafe-200">
                Cinematic Experience.
              </span>
            </h1>

            <p className="text-cafe-100/80 text-xl max-w-md mb-12 font-sans font-light leading-relaxed">
              Where Coffee Meets Cinema.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <MagneticButton className="px-8 py-4 bg-white/5 border-orange-glow/30 flex items-center justify-center gap-3">
                <span className="text-sm font-medium uppercase tracking-wider text-cream-white">Reserve a Table</span>
                <ArrowRight size={16} className="text-orange-glow" />
              </MagneticButton>
              <MagneticButton className="px-8 py-4 flex items-center justify-center">
                <span className="text-sm font-medium uppercase tracking-wider text-cafe-100">Explore Signature Menu</span>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Empty space for the 3D scene (Canvas is absolute and positioned behind) */}
        <div className="w-full md:w-7/12 h-full relative pointer-events-none hidden md:block">
           {/* Mini floating review card overlay */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1, delay: 1.5 }}
             className="absolute bottom-32 right-12 glass-panel p-5 max-w-[240px] pointer-events-auto shadow-2xl"
           >
             <div className="flex gap-1 text-gold-accent mb-2">
               ★★★★★
             </div>
             <p className="text-xs text-cafe-100 italic">&quot;The most visually stunning cafe I&apos;ve ever visited. The espresso is just as good.&quot;</p>
             <p className="text-[10px] text-cafe-300 mt-2 uppercase tracking-wider">&mdash; Vogue Magazine</p>
           </motion.div>
        </div>

      </div>

      {/* Bottom Controls */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 w-full flex justify-between items-center px-6 md:px-12 z-40 pointer-events-auto"
      >
        {/* Sound Toggle */}
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-cafe-300 hover:text-orange-glow hover:border-orange-glow/30 transition-all group"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-3 text-cafe-300 cursor-pointer group absolute left-1/2 -translate-x-1/2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium group-hover:text-orange-glow transition-colors">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={18} className="group-hover:text-orange-glow transition-colors" />
          </motion.div>
        </div>
        
        {/* Empty div for flex balance if needed, or something else */}
        <div className="w-12 h-12" />
      </motion.div>

    </section>
  );
}
