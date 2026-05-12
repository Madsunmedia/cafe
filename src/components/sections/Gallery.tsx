"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  { 
    title: "The Extraction", 
    tag: "Aero-Roast",
    size: "md:col-span-2 md:row-span-2", 
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Barista Mastery", 
    tag: "Craft",
    size: "md:col-span-1 md:row-span-1", 
    url: "https://images.unsplash.com/photo-1510707577719-5d6815a0533a?q=80&w=1974&auto=format&fit=crop" 
  },
  { 
    title: "Atmosphere", 
    tag: "Sanctuary",
    size: "md:col-span-1 md:row-span-2", 
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Signature Bean", 
    tag: "Single Origin",
    size: "md:col-span-1 md:row-span-1", 
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop" 
  },
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="relative w-full py-60 px-6 md:px-12 bg-black-matte z-10 overflow-hidden">
      {/* Cinematic background glow */}
      <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-gold-accent/5 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-6xl md:text-[6rem] font-serif text-cream-white leading-none tracking-tighter">
              Visual <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-accent to-orange-glow font-light">Essence.</span>
            </h2>
          </motion.div>
          <div className="flex flex-col items-end">
            <div className="text-[11px] uppercase tracking-[0.5em] text-cafe-400 font-bold mb-4">The Portfolio</div>
            <div className="w-24 h-[1px] bg-gold-accent/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-[1000px] md:h-[900px]">
          {images.map((img, i) => {
            const y = useTransform(scrollYProgress, [0, 1], [0, (i + 1) * -80]);
            
            return (
              <motion.div
                key={i}
                style={{ y }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`${img.size} rounded-[48px] relative group overflow-hidden border border-white/10 cursor-pointer shadow-2xl perspective-1000`}
              >
                {/* Image Component with Parallax */}
                <motion.div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${img.url})` }}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-matte/90 via-black-matte/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gold-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Content Reveal */}
                <div className="absolute inset-0 flex flex-col justify-end p-12 z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="transform translate-z-20"
                  >
                    <div className="inline-block px-3 py-1 rounded-full border border-gold-accent/30 bg-gold-accent/10 text-[9px] uppercase tracking-widest text-gold-accent font-bold mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-4 group-hover:translate-y-0">
                      {img.tag}
                    </div>
                    <h4 className="text-3xl md:text-4xl font-serif text-cream-white opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 translate-y-4 group-hover:translate-y-0">
                      {img.title}
                    </h4>
                  </motion.div>
                </div>

                {/* Animated corner accent */}
                <div className="absolute top-10 right-10 w-12 h-12 border-t border-r border-white/20 rounded-tr-3xl group-hover:w-20 group-hover:h-20 group-hover:border-gold-accent transition-all duration-700" />
                
                {/* View Icon Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-700 z-20 pointer-events-none">
                  <div className="w-24 h-24 rounded-full bg-cream-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-cream-white font-bold">Discover</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
