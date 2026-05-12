"use client";

import { motion } from "framer-motion";

const images = [
  { title: "The Roast", size: "col-span-2 row-span-2", color: "bg-cafe-800" },
  { title: "Barista Hands", size: "col-span-1 row-span-1", color: "bg-cafe-700" },
  { title: "Atmosphere", size: "col-span-1 row-span-2", color: "bg-cafe-600" },
  { title: "Signature Blend", size: "col-span-1 row-span-1", color: "bg-cafe-500" },
];

export function Gallery() {
  return (
    <section className="relative w-full py-40 px-6 md:px-12 bg-black-matte z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-serif text-cream-white italic">
            Visual <span className="text-gold-accent not-italic font-sans font-bold">Essence</span>
          </h2>
          <div className="text-sm uppercase tracking-[0.4em] text-cafe-400 font-medium">Captured Moments</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${img.size} ${img.color} rounded-[32px] relative group overflow-hidden border border-white/5 cursor-pointer`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Image Placeholder pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-accent/40 via-transparent to-transparent group-hover:scale-110 transition-transform duration-[2s]" />
              
              <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <div className="text-xs uppercase tracking-[0.3em] text-gold-accent mb-2">Moment {i + 1}</div>
                <h4 className="text-2xl font-serif text-cream-white">{img.title}</h4>
              </div>

              {/* View Button Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-500 z-20">
                <div className="w-20 h-20 rounded-full bg-cream-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xs uppercase tracking-widest text-cream-white">
                  View
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
