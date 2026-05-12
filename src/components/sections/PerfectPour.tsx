"use client";

import { motion } from "framer-motion";
import { Thermometer, Droplet, Heart, Play, Gauge, Zap } from "lucide-react";
import Image from "next/image";

export function PerfectPour() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-black-matte z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/9] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-cafe-900 group"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/perfect-pour.png"
              alt="The Perfect Pour"
              fill
              className="object-cover opacity-80 transition-transform duration-[3s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black-matte via-black-matte/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black-matte/60 via-transparent to-transparent" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 h-full w-full p-12 md:p-20 flex flex-col justify-between">
            
            {/* Top Header */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold-accent font-bold">Art & Science</span>
                <div className="w-12 h-[1px] bg-gold-accent/40" />
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl font-serif text-cream-white mb-8 leading-none">
                The Perfect <br />
                <span className="italic text-gold-accent font-light">Pour</span>
              </h2>
              
              <p className="text-cafe-100/80 text-xl max-w-md leading-relaxed font-light mb-12">
                Every drop is precision-crafted for balance, aroma, and flavor. Our baristas combine 
                technique with passion to deliver the perfect cup, every time.
              </p>

              {/* Feature List */}
              <div className="space-y-8">
                {[
                  { icon: Thermometer, title: "PERFECT TEMPERATURE", desc: "Maintaining the ideal heat for rich aroma." },
                  { icon: Droplet, title: "PRECISE FLOW", desc: "Controlled pour for balanced flavor extraction." },
                  { icon: Heart, title: "BEAUTIFUL FINISH", desc: "Crafted with care for that signature café experience." }
                ].map((f, i) => (
                  <motion.div 
                    key={f.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (i * 0.2) }}
                    className="flex items-start gap-6 group/item"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent group-hover/item:bg-gold-accent group-hover/item:text-black transition-all duration-500">
                      <f.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-[11px] uppercase tracking-widest text-cream-white font-bold mb-1">{f.title}</h4>
                      <p className="text-xs text-cafe-300 font-light">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Interaction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-4 cursor-pointer group/btn"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-cream-white group-hover/btn:border-gold-accent group-hover/btn:bg-gold-accent group-hover/btn:text-black transition-all duration-500">
                <Play size={16} fill="currentColor" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-cream-white font-bold">Watch the Pour</span>
            </motion.div>

            {/* Right Side Stats (Floating Glass Badges) */}
            <div className="absolute right-12 md:right-20 top-1/2 -translate-y-1/2 space-y-8 hidden md:block">
              {[
                { label: "93°C", sub: "IDEAL HEAT", icon: Thermometer },
                { label: "16G/S", sub: "POUR RATE", icon: Gauge },
                { label: "BALANCED", sub: "EXTRACTION", icon: Zap }
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + (i * 0.3) }}
                  className="glass-panel p-6 flex items-center gap-6 min-w-[200px] hover:border-gold-accent/30 transition-colors"
                >
                  <div className="text-gold-accent">
                    <s.icon size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-serif text-cream-white leading-none mb-1">{s.label}</span>
                    <span className="text-[9px] uppercase tracking-widest text-cafe-400 font-bold">{s.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Indicators (Lines) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden md:block" viewBox="0 0 1000 600">
               <motion.path 
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 transition={{ duration: 2, delay: 1.5 }}
                 d="M800 200 L600 300 M800 350 L650 380 M800 500 L680 420" 
                 stroke="currentColor" 
                 strokeWidth="1" 
                 className="text-gold-accent"
                 fill="none"
               />
            </svg>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
