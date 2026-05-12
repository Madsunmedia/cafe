"use client";

import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Coffee, Droplet, Wind, Sparkle } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { useState } from "react";

const menuItems = [
  {
    title: "Signature Espresso",
    description: "Double shot of our finest Arabica beans, extracted perfectly with a rich, velvety crema.",
    price: "$5.50",
    icon: Coffee,
    tag: "Classic",
    image: "https://images.unsplash.com/photo-1510707577719-5d6815a0533a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Velvet Latte",
    description: "Silky steamed milk poured over rich espresso with subtle notes of organic Madagascar vanilla.",
    price: "$6.00",
    icon: Droplet,
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1536939459926-301728717817?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Aero Brew",
    description: "Smooth, clean cup brewed with precision air pressure to highlight delicate floral notes.",
    price: "$7.00",
    icon: Wind,
    tag: "Crafted",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
  },
];

function MenuCard({ item, index }: { item: typeof menuItems[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX: springX, 
        rotateY: springY, 
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
      className="group relative flex flex-col h-[600px] rounded-[40px] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl transition-all duration-500 hover:border-gold-accent/30"
    >
      {/* Background Image with Parallax & Steam */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-matte via-black-matte/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />
        
        {/* Steam Particles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -120],
                opacity: [0, 0.4, 0],
                x: [0, (Math.random() - 0.5) * 40],
                scale: [0.5, 2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute bottom-[40%] left-[50%] w-12 h-20 bg-white/10 blur-[20px] rounded-full"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col h-full p-10 transform translate-z-30">
        <div className="flex justify-between items-start mb-auto">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent group-hover:scale-110 transition-transform duration-500 shadow-xl">
            <item.icon size={32} strokeWidth={1.5} />
          </div>
          <span className="px-4 py-1.5 rounded-full border border-gold-accent/30 bg-gold-accent/10 text-[10px] uppercase tracking-[0.2em] text-gold-accent font-bold">
            {item.tag}
          </span>
        </div>
        
        <h3 className="text-4xl font-serif text-cream-white mb-4 group-hover:text-gold-accent transition-colors duration-500 drop-shadow-lg">
          {item.title}
        </h3>
        <p className="text-cafe-100/80 mb-10 leading-relaxed font-light italic">
          "{item.description}"
        </p>
        
        <div className="pt-8 border-t border-white/10 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-cafe-400 mb-1">Price</span>
            <span className="text-3xl font-serif text-cream-white tracking-tight">{item.price}</span>
          </div>
          <MagneticButton className="px-8 py-4 border-gold-accent/20 bg-gold-accent/5 hover:bg-gold-accent/10">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-cream-white">Order Now</span>
          </MagneticButton>
        </div>
      </div>

      {/* Lighting Glint Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out" />
    </motion.div>
  );
}

export function Menu() {
  return (
    <section className="relative w-full py-60 px-6 md:px-12 bg-black-matte z-10 overflow-hidden">
      {/* Dynamic light glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-glow/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cafe-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-gold-accent/20 bg-gold-accent/5 mb-8">
              <Sparkle size={14} className="text-gold-accent animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-accent font-bold">The Signature Selection</span>
            </div>
            <h2 className="text-6xl md:text-[5.5rem] font-serif text-cream-white mb-10 leading-[0.95] tracking-tighter">
              Curated <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cafe-300 to-gold-accent">Selection</span>
            </h2>
            <p className="text-cafe-200 text-2xl leading-relaxed font-light max-w-xl">
              Experience the finest single-origin beans, expertly roasted and brewed to perfection. 
              Each cup tells a cinematic story of terroir and craft.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block border-l border-white/10 pl-16 py-4"
          >
            <div className="text-left">
              <div className="text-gold-accent font-serif text-7xl mb-4 italic leading-none">100%</div>
              <div className="text-cafe-400 text-xs uppercase tracking-[0.4em] font-bold">Artisan Sourced</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {menuItems.map((item, index) => (
            <MenuCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
