"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Music, Sofa, Heart, Play, Lightbulb } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/MagneticButton";
import { useRef } from "react";

const features = [
  { icon: Coffee, title: "Aroma", desc: "Rich, Inviting Aromas" },
  { icon: Music, title: "Ambience", desc: "Curated Music & Sounds" },
  { icon: Sofa, title: "Comfort", desc: "Cozy Seating Spaces" },
  { icon: Heart, title: "Connection", desc: "Great Coffee, Better Moments" },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Cinematic Parallax & Drift
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const blurValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, 10]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full py-60 px-6 md:px-12 bg-black-matte z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          style={{ opacity: textOpacity }}
          className="glass-panel p-8 md:p-16 relative overflow-hidden border-white/10"
        >
          {/* Animated Background Haze */}
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(201,152,82,0.1),_transparent)] z-0"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-[10px] uppercase tracking-[0.5em] text-gold-accent font-bold mb-8">
                  Step Into Our World
                </div>
                
                <h2 className="text-7xl md:text-8xl font-serif text-cream-white mb-10 leading-[0.95] tracking-tighter">
                  Immerse <br />
                  <span className="italic text-gold-accent font-light">Yourself.</span>
                </h2>
                
                <p className="text-cafe-100/70 text-xl leading-relaxed font-light mb-12 max-w-md">
                  More than a café, it's a sensory journey. From the aroma of freshly ground beans 
                  to the warmth of every detail.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-8 mb-16">
                  {features.map((f, i) => (
                    <motion.div 
                      key={f.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex flex-col items-start group/feat"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent mb-5 group-hover/feat:bg-gold-accent group-hover/feat:text-black transition-all duration-500 shadow-xl">
                        <f.icon size={24} />
                      </div>
                      <h4 className="text-[11px] uppercase tracking-[0.2em] text-cream-white font-bold mb-1">{f.title}</h4>
                      <p className="text-[9px] text-cafe-400 font-medium tracking-widest uppercase">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <MagneticButton className="px-12 py-6 bg-gold-accent/5 border-gold-accent/20 group">
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <motion.div 
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-gold-accent/50 rounded-full blur-md"
                      />
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream-white group-hover:bg-gold-accent group-hover:border-gold-accent group-hover:text-black transition-all relative z-10">
                        <Play size={14} fill="currentColor" />
                      </div>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.4em] text-cream-white font-bold">Experience the Atmosphere</span>
                  </div>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right Visual Space (Cinematic Animated Image) */}
            <div className="lg:col-span-7 relative h-[700px] md:h-[800px] rounded-[60px] overflow-hidden border border-white/10 shadow-2xl bg-black">
              
              {/* Main Background Image with Parallax & Drift */}
              <motion.div 
                style={{ 
                  y: imageY, 
                  scale: imageScale,
                  filter: `blur(${blurValue}px)`
                }}
                className="absolute inset-[-100px] z-0"
              >
                <Image 
                  src="/immerse-cafe.jpg"
                  alt="Cafe Atmosphere"
                  fill
                  className="object-cover opacity-90"
                />
              </motion.div>

              {/* Light Flicker Overlays (Hanging Bulbs Simulation) */}
              <motion.div 
                animate={{ opacity: [0.3, 0.5, 0.35, 0.6, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,_rgba(219,106,20,0.15),_transparent)]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black-matte/70 via-transparent to-transparent z-10" />

              {/* Drifting Steam / Dust Particles */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -120],
                      x: [0, (Math.random() - 0.5) * 40],
                      opacity: [0, 0.2, 0],
                    }}
                    transition={{
                      duration: 10 + Math.random() * 5,
                      repeat: Infinity,
                      delay: Math.random() * 5
                    }}
                    className="absolute w-2 h-4 bg-white/5 blur-[10px] rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      bottom: `${Math.random() * 40}%`
                    }}
                  />
                ))}
              </div>

              {/* Interactive Markers with Pulse */}
              {[
                { top: "18%", left: "55%", label: "Artisan Counter", desc: "Where the magic happens.", icon: Coffee },
                { top: "35%", left: "85%", label: "Natural Light", desc: "Golden hour every hour.", icon: Lightbulb },
                { top: "65%", left: "45%", label: "Wicker Comfort", desc: "Handcrafted seating for long talks.", icon: Sofa },
                { top: "78%", left: "75%", label: "Cozy Nooks", desc: "Find your perfect corner.", icon: Heart },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.2 }}
                  style={{ top: m.top, left: m.left }}
                  className="absolute group/marker z-30"
                >
                  <div className="relative">
                    {/* Marker Pulse */}
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute inset-0 bg-gold-accent/40 rounded-full blur-sm"
                    />
                    <div className="w-12 h-12 rounded-full bg-black-matte/80 border border-gold-accent/40 flex items-center justify-center text-gold-accent backdrop-blur-md cursor-pointer hover:bg-gold-accent hover:text-black transition-all duration-700 shadow-2xl relative z-10">
                      <m.icon size={18} />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-56 p-5 glass-panel opacity-0 translate-y-3 group-hover/marker:opacity-100 group-hover/marker:translate-y-0 transition-all duration-700 pointer-events-none border-gold-accent/20 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                      <h4 className="text-[11px] uppercase tracking-widest text-gold-accent font-bold mb-2">{m.label}</h4>
                      <p className="text-[10px] text-cafe-100 font-light leading-relaxed">"{m.desc}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>

          </div>

          {/* Background Decorative Element */}
          <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-gold-accent/5 rounded-full blur-[150px] pointer-events-none" />
        </motion.div>

        {/* Carousel Indicators Mockup */}
        <div className="mt-20 flex items-center justify-center gap-16">
          <motion.button 
            whileHover={{ scale: 1.1, x: -5 }}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-cafe-400 hover:text-gold-accent hover:border-gold-accent/40 transition-all bg-white/[0.02]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </motion.button>
          <div className="flex gap-4">
             {[1,2,3,4].map(i => (
               <motion.div 
                 key={i} 
                 initial={false}
                 animate={{ 
                   width: i === 2 ? 32 : 8,
                   backgroundColor: i === 2 ? "#c99852" : "#2d1f19"
                 }}
                 className="h-2 rounded-full transition-all" 
               />
             ))}
          </div>
          <motion.button 
            whileHover={{ scale: 1.1, x: 5 }}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-cafe-400 hover:text-gold-accent hover:border-gold-accent/40 transition-all bg-white/[0.02]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
