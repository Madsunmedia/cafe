"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax offsets
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  // 3D Tilt State for the main image
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX((y - centerY) / 20);
    setRotateY((centerX - x) / 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const springConfig = { stiffness: 150, damping: 20 };
  const dx = useSpring(rotateY, springConfig);
  const dy = useSpring(rotateX, springConfig);

  return (
    <section ref={containerRef} className="relative w-full py-60 px-6 md:px-12 bg-cafe-900 z-10 overflow-hidden">
      {/* Background Text Overlay */}
      <motion.div 
        style={{ x: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif text-white/[0.01] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter"
      >
        Heritage
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
        
        {/* Images Parallax Side */}
        <div className="w-full lg:w-1/2 relative h-[700px] flex items-center justify-center perspective-1000">
          <motion.div 
            style={{ 
              y: y1,
              rotateX: dy,
              rotateY: dx,
              transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute top-0 left-0 w-[85%] h-[450px] rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] z-20 border border-white/10"
          >
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative group overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),_rgba(201,152,82,0.3),_transparent)] transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center transform translate-z-20">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="text-gold-accent font-serif text-8xl mb-4 italic opacity-80"
                >
                  01
                </motion.div>
                <h4 className="text-3xl font-serif text-cream-white mb-2 uppercase tracking-[0.3em]">The Extraction</h4>
                <div className="w-16 h-[2px] bg-gold-accent/50" />
              </div>

              {/* Floating coffee beans (simulated with CSS particles) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -100, 0],
                      x: [0, Math.sin(i) * 50, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-4 h-6 bg-[#2d1f19] rounded-full blur-[1px] opacity-40"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${80 - i * 10}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-0 right-0 w-[70%] h-[380px] rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)] z-10 border border-white/5"
          >
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="text-orange-glow font-serif text-7xl mb-4 italic opacity-70">02</div>
                <h4 className="text-2xl font-serif text-cream-white mb-2 uppercase tracking-[0.2em]">Craft Roasting</h4>
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
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-[1px] bg-gold-accent" />
              <h2 className="text-xs tracking-[0.5em] uppercase text-gold-accent font-bold">World-Class Mastery</h2>
            </div>

            <h3 className="text-6xl md:text-8xl font-serif text-cream-white mb-12 leading-[1.05] tracking-tight">
              Symphony <br />
              <span className="italic text-cafe-300 font-light pr-4">in every</span>
              <span className="relative">
                drop.
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "110%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="absolute -bottom-2 -left-[5%] h-[3px] bg-gradient-to-r from-gold-accent to-transparent"
                />
              </span>
            </h3>

            <p className="text-cafe-100 text-2xl mb-10 leading-relaxed font-light">
              We don't just serve coffee; we curate cinematic sensory journeys. Each bean is hand-selected 
              from the top 1% of high-altitude harvests, specifically chosen for its unique storytelling profile.
            </p>

            <p className="text-cafe-200/80 text-xl mb-16 leading-relaxed font-light italic border-l-[3px] border-gold-accent/40 pl-10 py-2">
              "An immersive sanctuary where light, shadow, and aroma converge to create an 
              unforgettable modern ritual."
            </p>

            <div className="grid grid-cols-2 gap-16 pt-16 border-t border-white/10">
              <div className="group cursor-default">
                <div className="text-6xl font-serif text-gold-accent mb-4 group-hover:scale-110 group-hover:text-orange-glow transition-all duration-500 origin-left">15+</div>
                <div className="text-xs uppercase tracking-[0.3em] text-cafe-400 font-bold group-hover:text-cafe-200 transition-colors">Bespoke Origins</div>
              </div>
              <div className="group cursor-default">
                <div className="text-6xl font-serif text-gold-accent mb-4 group-hover:scale-110 group-hover:text-orange-glow transition-all duration-500 origin-left">24h</div>
                <div className="text-xs uppercase tracking-[0.3em] text-cafe-400 font-bold group-hover:text-cafe-200 transition-colors">Aero-Roast Precision</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
