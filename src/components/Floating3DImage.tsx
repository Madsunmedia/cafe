"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Floating3DImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

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
      initial={{ opacity: 0, scale: 0.8, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d"
      }}
      className="relative w-full max-w-md aspect-square flex items-center justify-center cursor-pointer group"
    >
      {/* Cinematic Glow Behind */}
      <div className="absolute inset-0 bg-orange-glow/10 rounded-full blur-[100px] animate-pulse group-hover:bg-orange-glow/20 transition-colors duration-700" />
      
      {/* 3D Floating Image Plane */}
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full h-full rounded-[60px] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)]"
      >
        <Image
          src="https://images.unsplash.com/photo-1510707577719-5d6815a0533a?q=80&w=1974&auto=format&fit=crop"
          alt="Premium Coffee"
          fill
          className="object-cover transition-transform duration-[2s] group-hover:scale-110"
          priority
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black-matte/60 via-transparent to-white/10 opacity-60" />
        
        {/* Float Animation Wrapper */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-12"
        >
          <div className="transform translate-z-40 text-center">
             <div className="w-20 h-[1px] bg-gold-accent mx-auto mb-6 opacity-60" />
             <h3 className="text-3xl font-serif text-cream-white drop-shadow-2xl">The Perfect Pour</h3>
             <div className="w-12 h-[1px] bg-gold-accent mx-auto mt-4 opacity-40" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements Around */}
      <div className="absolute inset-0 pointer-events-none">
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
            className="absolute w-4 h-6 bg-[#3d2b1f] rounded-full blur-[0.5px] opacity-40 shadow-2xl"
            style={{
              top: `${15 + i * 15}%`,
              left: `${i % 2 === 0 ? -10 : 110}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
