"use client";

import { motion } from "framer-motion";
import { Coffee, Droplet, Wind, Sparkle } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

const menuItems = [
  {
    title: "Signature Espresso",
    description: "Double shot of our finest Arabica beans, extracted perfectly with a rich, velvety crema.",
    price: "$5.50",
    icon: Coffee,
    tag: "Classic"
  },
  {
    title: "Velvet Latte",
    description: "Silky steamed milk poured over rich espresso with subtle notes of organic Madagascar vanilla.",
    price: "$6.00",
    icon: Droplet,
    tag: "Popular"
  },
  {
    title: "Aero Brew",
    description: "Smooth, clean cup brewed with precision air pressure to highlight delicate floral notes.",
    price: "$7.00",
    icon: Wind,
    tag: "Crafted"
  },
];

export function Menu() {
  return (
    <section className="relative w-full py-40 px-6 md:px-12 bg-black-matte z-10 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-glow/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-accent/20 bg-gold-accent/5 mb-6">
              <Sparkle size={12} className="text-gold-accent" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-accent font-semibold">The Selection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-cream-white mb-6 leading-tight">
              Curated <br />
              <span className="italic text-cafe-300">Selection</span>
            </h2>
            <p className="text-cafe-200 text-lg leading-relaxed font-light">
              Experience the finest single-origin beans, expertly roasted and brewed to perfection. 
              Each cup is a journey through the world's most prestigious coffee regions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="text-right">
              <div className="text-gold-accent font-serif text-4xl mb-2 italic">100%</div>
              <div className="text-cafe-400 text-[10px] uppercase tracking-widest">Ethically Sourced Arabica</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel group relative flex flex-col p-10 h-full border-white/5 hover:border-gold-accent/20 transition-colors duration-500"
            >
              <div className="absolute top-6 right-8">
                <span className="text-[10px] uppercase tracking-widest text-cafe-400 font-medium opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.tag}
                </span>
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8 text-gold-accent group-hover:text-orange-glow transition-colors duration-500 shadow-inner">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl font-serif text-cream-white mb-4 group-hover:text-gold-accent transition-colors duration-500">{item.title}</h3>
              <p className="text-cafe-200/70 mb-10 leading-relaxed font-light flex-grow italic">
                "{item.description}"
              </p>
              
              <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-cafe-500 mb-1">Price</span>
                  <span className="text-2xl font-serif text-cream-white">{item.price}</span>
                </div>
                <MagneticButton className="px-6 py-3 border-white/10 hover:border-orange-glow/30">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-cream-white">Order Now</span>
                </MagneticButton>
              </div>

              {/* Animated corner accent */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-transparent group-hover:border-b-gold-accent/20 group-hover:border-r-gold-accent/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
