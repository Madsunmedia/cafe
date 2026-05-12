"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-black-matte z-10">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          {/* A large visual element representing the atmosphere. In a real app, this could be a video. */}
          <div className="w-[80vw] h-[80vh] rounded-3xl overflow-hidden relative shadow-[0_0_100px_rgba(230,126,34,0.15)] bg-cafe-800 border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-transparent to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center text-cafe-600 font-serif text-3xl opacity-50">
              [ Cinematic Video/Image Placeholder ]
            </div>
          </div>
        </motion.div>

        <div className="z-10 text-center relative pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-serif text-cream-white mb-6 drop-shadow-2xl mix-blend-difference"
          >
            Immerse<br />Yourself.
          </motion.h2>
        </div>

      </div>
    </section>
  );
}
