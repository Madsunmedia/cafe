"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative w-full h-[200vh] bg-black-matte z-10">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Background Visual Layer */}
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0 z-0 flex items-center justify-center p-6 md:p-20"
        >
          <div className="w-full h-full rounded-[40px] overflow-hidden relative shadow-[0_0_100px_rgba(219,106,20,0.1)] bg-cafe-800 border border-white/5">
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_rgba(201,152,82,0.15),_transparent)] z-10" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-cafe-700/30 font-serif p-12 text-center uppercase tracking-[2em] select-none">
              Atmosphere & Aesthetic
            </div>

            {/* Simulated Depth Elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-accent/10 rounded-full blur-[100px]" 
            />
          </div>
        </motion.div>

        {/* Foreground Content */}
        <div className="z-20 text-center relative pointer-events-none px-6">
          <motion.div style={{ y: yText }}>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[10vw] font-serif text-cream-white leading-none tracking-tighter mix-blend-difference drop-shadow-2xl"
            >
              Immerse <br />
              <span className="italic text-gold-accent font-light">Yourself.</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 max-w-lg mx-auto"
            >
              <p className="text-cafe-300 text-lg uppercase tracking-[0.4em] font-medium">The Sensory Journey</p>
              <div className="w-16 h-[2px] bg-gold-accent mx-auto mt-6" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
