"use client";

import { motion } from "framer-motion";
import { Coffee, Music, Sofa, Heart, Play, MapPin, Lightbulb } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/MagneticButton";

const features = [
  { icon: Coffee, title: "Aroma", desc: "Rich, Inviting Aromas" },
  { icon: Music, title: "Ambience", desc: "Curated Music & Sounds" },
  { icon: Sofa, title: "Comfort", desc: "Cozy Seating Spaces" },
  { icon: Heart, title: "Connection", desc: "Great Coffee, Better Moments" },
];

const markers = [
  { top: "15%", left: "15%", label: "Curated Ambience", desc: "Thoughtfully designed to calm your mind.", icon: Music },
  { top: "35%", left: "75%", label: "Warm Lighting", desc: "Soft lights for a cozy and relaxing vibe.", icon: Lightbulb },
  { top: "60%", left: "30%", label: "Comfort Zones", desc: "Relax, unwind and feel at home.", icon: Sofa },
  { top: "75%", left: "70%", label: "Signature Coffee", desc: "Crafted with passion, served with heart.", icon: Coffee },
];

export function Experience() {
  return (
    <section className="relative w-full py-40 px-6 md:px-12 bg-black-matte z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel p-8 md:p-16 relative overflow-hidden border-white/10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-[10px] uppercase tracking-[0.4em] text-gold-accent font-bold mb-8">
                  Step Into Our World
                </div>
                
                <h2 className="text-7xl md:text-8xl font-serif text-cream-white mb-10 leading-none tracking-tighter">
                  Immerse <br />
                  <span className="italic text-gold-accent font-light">Yourself.</span>
                </h2>
                
                <p className="text-cafe-100/70 text-lg leading-relaxed font-light mb-12 max-w-md">
                  More than a café, it's a sensory journey. From the aroma of freshly ground beans 
                  to the warmth of every detail, every moment is designed to inspire and relax.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                  {features.map((f, i) => (
                    <motion.div 
                      key={f.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex flex-col items-start"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent mb-4">
                        <f.icon size={20} />
                      </div>
                      <h4 className="text-[10px] uppercase tracking-widest text-cream-white font-bold mb-1">{f.title}</h4>
                      <p className="text-[9px] text-cafe-400 font-medium tracking-wide uppercase">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <MagneticButton className="px-10 py-5 bg-gold-accent/5 border-gold-accent/20 group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-cream-white group-hover:bg-gold-accent group-hover:border-gold-accent group-hover:text-black transition-all">
                      <Play size={12} fill="currentColor" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-cream-white font-bold">Experience the Atmosphere</span>
                  </div>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right Visual Space */}
            <div className="lg:col-span-7 relative h-[600px] md:h-[700px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
                alt="Cafe Atmosphere"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-matte/60 via-transparent to-transparent" />

              {/* Interactive Markers */}
              {markers.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.2 }}
                  style={{ top: m.top, left: m.left }}
                  className="absolute group/marker z-20"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-black-matte/80 border border-gold-accent/50 flex items-center justify-center text-gold-accent backdrop-blur-md cursor-pointer hover:bg-gold-accent hover:text-black transition-all duration-500 shadow-2xl">
                      <m.icon size={16} />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-4 glass-panel opacity-0 translate-y-2 group-hover/marker:opacity-100 group-hover/marker:translate-y-0 transition-all duration-500 pointer-events-none border-gold-accent/20">
                      <h4 className="text-[10px] uppercase tracking-widest text-gold-accent font-bold mb-1">{m.label}</h4>
                      <p className="text-[9px] text-cafe-100 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Foreground Coffee Focus */}
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 pointer-events-none">
                <div className="relative w-full h-full">
                  {/* Subtle steam effect here if needed */}
                </div>
              </div>
            </div>

          </div>

          {/* Background Decorative Element */}
          <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-gold-accent/5 rounded-full blur-[150px] pointer-events-none" />
        </div>

        {/* Carousel Indicators Mockup */}
        <div className="mt-16 flex items-center justify-center gap-12">
          <button className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-cafe-400 hover:text-gold-accent hover:border-gold-accent/30 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <div className="flex gap-3">
             {[1,2,3,4].map(i => (
               <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 2 ? 'bg-gold-accent w-4' : 'bg-cafe-700'} transition-all`} />
             ))}
          </div>
          <button className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-cafe-400 hover:text-gold-accent hover:border-gold-accent/30 transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
