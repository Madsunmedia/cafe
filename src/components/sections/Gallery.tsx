"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
    title: "Signature Blend", 
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
    <section ref={containerRef} className="relative w-full py-48 px-6 md:px-12 bg-black-matte z-10 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-gold-accent/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-8xl font-serif text-cream-white leading-none tracking-tighter">
              Visual <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-accent to-orange-glow font-light">Essence.</span>
            </h2>
          </motion.div>
          <div className="flex flex-col items-end">
            <div className="text-[10px] uppercase tracking-[0.4em] text-cafe-400 font-bold mb-2">The Portfolio</div>
            <div className="w-16 h-[1px] bg-gold-accent/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-[800px] md:h-[700px]">
          {images.map((img, i) => {
            const y = useTransform(scrollYProgress, [0, 1], [0, (i + 1) * -40]);
            
            return (
              <motion.div
                key={i}
                style={{ y }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`${img.size} rounded-[32px] relative group overflow-hidden border border-white/5 cursor-pointer shadow-xl`}
              >
                <div className="absolute inset-0 z-0 transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                  <Image 
                    src={img.url}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black-matte/90 via-black-matte/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                  <div className="inline-block px-2 py-0.5 rounded-full border border-gold-accent/30 bg-gold-accent/10 text-[8px] uppercase tracking-widest text-gold-accent font-bold mb-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                    {img.tag}
                  </div>
                  <h4 className="text-2xl font-serif text-cream-white opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-2 group-hover:translate-y-0">
                    {img.title}
                  </h4>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-700 z-20 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-cream-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center">
                    <span className="text-[8px] uppercase tracking-[0.3em] text-cream-white font-bold">Discover</span>
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
