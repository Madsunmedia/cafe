"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative w-full py-32 px-4 md:px-12 bg-cafe-900 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Images Parallax */}
        <div className="w-full md:w-1/2 relative h-[600px]">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 left-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            <div className="w-full h-full bg-cafe-800 relative">
              {/* Fallback pattern / Placeholder for image */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-glow via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-cafe-500 font-serif text-2xl">
                Pouring Art
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="w-full h-full bg-cafe-700 relative">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cafe-300 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-cafe-400 font-serif text-2xl">
                Roasting Magic
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm tracking-[0.3em] uppercase text-orange-glow mb-4 font-medium">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-cream-white mb-8 leading-tight">
              A symphony of <br />
              <span className="italic text-cafe-300">flavor and design.</span>
            </h3>
            <p className="text-cafe-100 text-lg mb-6 leading-relaxed">
              Founded on the principle that coffee is not just a drink, but a multisensory experience. 
              We meticulously source the top 1% of beans globally, roasting them locally to bring out 
              their most delicate and complex profiles.
            </p>
            <p className="text-cafe-200 text-lg mb-10 leading-relaxed">
              Our space is designed to pause time. A sanctuary where modern aesthetics meet 
              the timeless comfort of a warm cup.
            </p>

            <div className="flex gap-12 border-t border-white/10 pt-8">
              <div>
                <div className="text-4xl font-serif text-orange-glow mb-2">15+</div>
                <div className="text-sm uppercase tracking-wider text-cafe-300">Single Origins</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-orange-glow mb-2">24h</div>
                <div className="text-sm uppercase tracking-wider text-cafe-300">Cold Brew Process</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
