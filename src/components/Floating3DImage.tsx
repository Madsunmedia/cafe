"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Thermometer, Gauge, Zap, Play } from "lucide-react";

export function Floating3DImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const springX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 150;
    const yPct = (mouseY / height - 0.5) * 150;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1500px",
        transformStyle: "preserve-3d"
      }}
      className="relative w-full max-w-2xl aspect-[1.1] flex items-center justify-center cursor-pointer group"
    >
      {/* Cinematic Depth Glow */}
      <div className="absolute inset-0 bg-gold-accent/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Card Container */}
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full h-full rounded-[48px] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.9)] bg-black-matte"
      >
        {/* Background Atmosphere Image */}
        <div className="absolute inset-0 z-0 opacity-50 grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000">
           <Image 
             src="/perfect-pour.png"
             alt="The Perfect Pour"
             fill
             className="object-cover transition-transform duration-[4s] ease-out group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/30 to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-r from-black-matte/80 via-black-matte/10 to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 h-full w-full p-12 flex flex-col justify-between transform translate-z-30">
          
          {/* Top Label */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.6, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-gold-accent" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold-accent font-bold">The Craft</span>
            </motion.div>
            <h3 className="text-6xl md:text-7xl font-serif text-cream-white leading-[1.1] mb-6 tracking-tight">
              The Perfect <br />
              <span className="italic text-gold-accent font-light">Pour</span>
            </h3>
            <p className="text-cafe-100/50 text-sm max-w-[280px] leading-relaxed font-light italic border-l border-gold-accent/20 pl-6 py-2">
              Precision-crafted for balance, <br />aroma, and flavor.
            </p>
          </div>

          {/* Feature Icons Stack */}
          <div className="flex gap-4 mb-12">
             {[Thermometer, Gauge, Zap].map((Icon, i) => (
               <motion.div 
                key={i} 
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(201, 152, 82, 0.1)' }}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent transition-colors"
               >
                 <Icon size={20} />
               </motion.div>
             ))}
          </div>

          {/* WATCH THE POUR Button - Focal Point */}
          <div className="flex items-center gap-6 group/btn">
             <div className="relative">
                {/* Pulse Effect */}
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gold-accent/50 rounded-full blur-md"
                />
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-cream-white group-hover/btn:bg-gold-accent group-hover/btn:border-gold-accent group-hover/btn:text-black transition-all duration-700 shadow-[0_0_30px_rgba(201,152,82,0.2)]">
                  <Play size={20} fill="currentColor" className="translate-x-0.5" />
                </div>
             </div>
             <div className="flex flex-col">
               <span className="text-[10px] uppercase tracking-[0.5em] text-cream-white font-bold mb-1">Watch the Pour</span>
               <div className="w-12 h-[1px] bg-gradient-to-r from-gold-accent to-transparent" />
             </div>
          </div>

          {/* Floating Stats Panel (Subtle Glassmorphism) */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 space-y-6">
             {[
               { val: "93°C", label: "HEAT" },
               { val: "16G/S", label: "FLOW" },
               { val: "OPTML", label: "EXTRC" }
             ].map((s, i) => (
               <motion.div 
                 key={i}
                 initial={{ x: 30, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.8 + i * 0.2 }}
                 whileHover={{ x: -10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                 className="glass-panel p-5 flex flex-col items-center justify-center min-w-[90px] border-gold-accent/10 hover:border-gold-accent/30 transition-all duration-500"
               >
                 <span className="text-lg font-serif text-cream-white leading-none mb-1.5">{s.val}</span>
                 <span className="text-[7px] uppercase tracking-[0.2em] text-cafe-400 font-bold">{s.label}</span>
               </motion.div>
             ))}
          </div>

          {/* Decorative Technical Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 500 500">
             <motion.path 
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, delay: 1 }}
               d="M380 180 L300 240 M380 260 L320 270 M380 340 L310 320" 
               stroke="currentColor" 
               className="text-gold-accent" 
               strokeWidth="1" 
               fill="none" 
             />
          </svg>

        </div>
      </motion.div>

      {/* Floating Ambient Dust Particles */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, (i % 2 === 0 ? 20 : -20), 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-gold-accent/40 rounded-full blur-[1px]"
            style={{
              top: `${10 + i * 18}%`,
              left: `${i % 2 === 0 ? -10 : 110}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
