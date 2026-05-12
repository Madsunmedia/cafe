"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={containerRef} className="relative w-full py-48 px-6 md:px-12 bg-cafe-900 z-10 overflow-hidden">
      {/* Background Text Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter">
        Heritage & Craft
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
        
        {/* Images Parallax Side */}
        <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 left-0 w-3/4 h-[400px] rounded-3xl overflow-hidden shadow-2xl z-20 border border-white/5"
          >
            <div className="w-full h-full bg-cafe-800 relative group overflow-hidden">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-accent/40 via-transparent to-transparent group-hover:scale-110 transition-transform duration-[2s]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="text-gold-accent font-serif text-6xl mb-4 italic">01</div>
                <h4 className="text-2xl font-serif text-cream-white mb-2 uppercase tracking-widest">The Art of Pour</h4>
                <div className="w-12 h-[1px] bg-gold-accent/50" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: y2, rotate: rotate }}
            className="absolute bottom-0 right-0 w-2/3 h-[350px] rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/5"
          >
            <div className="w-full h-full bg-cafe-700 relative group overflow-hidden">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-glow/40 via-transparent to-transparent group-hover:scale-110 transition-transform duration-[2s]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="text-orange-glow font-serif text-6xl mb-4 italic">02</div>
                <h4 className="text-2xl font-serif text-cream-white mb-2 uppercase tracking-widest">Master Roasting</h4>
                <div className="w-12 h-[1px] bg-orange-glow/50" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gold-accent" />
              <h2 className="text-sm tracking-[0.4em] uppercase text-gold-accent font-bold">Our Heritage</h2>
            </div>

            <h3 className="text-5xl md:text-7xl font-serif text-cream-white mb-10 leading-[1.1]">
              A symphony of <br />
              <span className="italic text-cafe-300 relative">
                flavor and design.
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-2 left-0 h-[2px] bg-gold-accent/20"
                />
              </span>
            </h3>

            <p className="text-cafe-100 text-xl mb-8 leading-relaxed font-light">
              Founded on the principle that coffee is not just a drink, but a multisensory experience. 
              We meticulously source the top 1% of beans globally, roasting them in small batches 
              to preserve the integrity of their terroir.
            </p>

            <p className="text-cafe-200/80 text-lg mb-12 leading-relaxed font-light italic border-l-2 border-gold-accent/30 pl-8">
              "Our space is designed to pause time. A sanctuary where modern architecture meets 
              the timeless comfort of a perfect extraction."
            </p>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <div>
                <div className="text-5xl font-serif text-gold-accent mb-3">15+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-cafe-400 font-bold">Single Origin Beans</div>
              </div>
              <div>
                <div className="text-5xl font-serif text-gold-accent mb-3">24h</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-cafe-400 font-bold">Cold Brew Maturity</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
