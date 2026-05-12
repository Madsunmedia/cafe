"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Thermometer, Gauge, Zap, Play } from "lucide-react";
import { useRef } from "react";

export function Floating3DImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d"
      }}
      className="relative w-full max-w-2xl aspect-[1.1] flex items-center justify-center cursor-pointer group"
    >
      {/* Background Cinematic Glow */}
      <div className="absolute inset-0 bg-gold-accent/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Card Container */}
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full h-full rounded-[48px] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.9)] bg-black-matte"
      >
        {/* Cinematic Video Background (The Pour) */}
        <div className="absolute inset-0 z-0">
           <video 
             ref={videoRef}
             autoPlay 
             loop 
             muted 
             playsInline
             className="w-full h-full object-cover opacity-60 transition-opacity duration-1000 group-hover:opacity-80"
           >
             <source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-coffee-into-a-cup-32890-large.mp4" type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-gradient-to-tr from-black-matte via-black-matte/30 to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-t from-black-matte/60 via-transparent to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 h-full w-full p-12 flex flex-col justify-between transform translate-z-30">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6 opacity-60">
              <div className="w-8 h-[1px] bg-gold-accent" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold-accent font-bold">The Craft</span>
            </div>
            <h3 className="text-6xl md:text-7xl font-serif text-cream-white leading-tight mb-6">
              The Perfect <br />
              <span className="italic text-gold-accent font-light">Pour</span>
            </h3>
            <p className="text-cafe-100/60 text-sm max-w-[280px] leading-relaxed font-light italic">
              Experience the precision of a master pour.
            </p>
          </motion.div>

          {/* Feature List (Playful interaction) */}
          <div className="flex gap-4 mb-10">
             {[Thermometer, Gauge, Zap].map((Icon, i) => (
               <motion.div 
                key={i}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  backgroundColor: 'rgba(201, 152, 82, 0.2)' 
                }}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent transition-all duration-300"
               >
                 <Icon size={20} />
               </motion.div>
             ))}
          </div>

          {/* WATCH THE POUR - Playful Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-6 group/btn w-fit"
          >
             <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gold-accent/50 rounded-full blur-md"
                />
                <motion.div 
                  className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-cream-white group-hover/btn:bg-gold-accent group-hover/btn:border-gold-accent group-hover/btn:text-black transition-all duration-500 shadow-2xl relative z-10"
                >
                  <Play size={20} fill="currentColor" className="translate-x-0.5" />
                </motion.div>
             </div>
             <div className="flex flex-col">
               <span className="text-[10px] uppercase tracking-[0.5em] text-cream-white font-bold mb-1">Watch the Pour</span>
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 className="h-[1px] bg-gold-accent" 
               />
             </div>
          </motion.div>

          {/* Stats Badges (Floating on right) */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 space-y-6">
             {[
               { val: "93°C", label: "HEAT" },
               { val: "16G/S", label: "FLOW" },
               { val: "OPTML", label: "EXTRC" }
             ].map((s, i) => (
               <motion.div 
                 key={i}
                 initial={{ x: 50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.8 + i * 0.2 }}
                 whileHover={{ x: -15, scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                 className="glass-panel p-5 flex flex-col items-center justify-center min-w-[90px] border-gold-accent/10 hover:border-gold-accent/30 transition-all cursor-default"
               >
                 <span className="text-lg font-serif text-cream-white leading-none mb-1">{s.val}</span>
                 <span className="text-[7px] uppercase tracking-widest text-cafe-400 font-bold">{s.label}</span>
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

      {/* Floating Beans */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 20 : -20), 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-3 h-5 bg-[#3d2b1f] rounded-full blur-[0.5px] opacity-30 shadow-2xl"
            style={{
              top: `${15 + i * 15}%`,
              left: `${i % 2 === 0 ? -15 : 110}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
