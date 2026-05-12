"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Thermometer, Gauge, Zap, Play } from "lucide-react";

export function Floating3DImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const springX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 200;
    const yPct = (mouseY / height - 0.5) * 200;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d"
      }}
      className="relative w-full max-w-2xl aspect-square flex items-center justify-center cursor-pointer group"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Card Container */}
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full h-full rounded-[48px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-black-matte"
      >
        {/* Background Image (Coffee Pour) */}
        <div className="absolute inset-0 z-0 opacity-40">
           <Image 
             src="/perfect-pour.png"
             alt="Perfect Pour Background"
             fill
             className="object-cover transition-transform duration-[3s] group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-tr from-black-matte via-black-matte/20 to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 h-full w-full p-10 flex flex-col justify-between transform translate-z-20">
          
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-4 opacity-60">
              <div className="w-8 h-[1px] bg-gold-accent" />
              <span className="text-[8px] uppercase tracking-[0.4em] text-gold-accent font-bold">Art & Science</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-serif text-cream-white leading-tight mb-4">
              The Perfect <br />
              <span className="italic text-gold-accent font-light">Pour</span>
            </h3>
            <p className="text-cafe-100/60 text-xs max-w-[240px] leading-relaxed font-light">
              Precision-crafted for balance, aroma, and flavor.
            </p>
          </div>

          {/* Feature List (Icons only for compact view) */}
          <div className="flex gap-4 mb-10">
             {[Thermometer, Gauge, Zap].map((Icon, i) => (
               <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent">
                 <Icon size={16} />
               </div>
             ))}
          </div>

          {/* Stats Badges (Floating on right) */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-4">
             {[
               { val: "93°C", label: "HEAT" },
               { val: "16G/S", label: "FLOW" },
               { val: "OPTML", label: "EXTRC" }
             ].map((s, i) => (
               <motion.div 
                 key={i}
                 initial={{ x: 20, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.5 + i * 0.2 }}
                 className="glass-panel p-4 flex flex-col items-center justify-center min-w-[80px] bg-white/[0.03]"
               >
                 <span className="text-sm font-serif text-cream-white leading-none mb-1">{s.val}</span>
                 <span className="text-[7px] uppercase tracking-widest text-cafe-400 font-bold">{s.label}</span>
               </motion.div>
             ))}
          </div>

          {/* Interaction */}
          <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
             <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream-white group-hover:bg-gold-accent group-hover:border-gold-accent group-hover:text-black transition-all">
               <Play size={14} fill="currentColor" />
             </div>
             <span className="text-[8px] uppercase tracking-[0.3em] text-cream-white font-bold">Watch the Pour</span>
          </div>

          {/* Decorative Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 400">
             <path d="M300 150 L220 200 M300 220 L250 230 M300 290 L240 260" stroke="currentColor" className="text-gold-accent" strokeWidth="1" fill="none" />
          </svg>

        </div>
      </motion.div>

      {/* Floating Beans */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 15 : -15), 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-3 h-5 bg-[#3d2b1f] rounded-full blur-[0.5px] opacity-30 shadow-2xl"
            style={{
              top: `${20 + i * 20}%`,
              left: `${i % 2 === 0 ? -15 : 105}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
