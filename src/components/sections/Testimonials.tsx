"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Elena Rossi",
    role: "Architect",
    text: "The architectural depth of this space is mirrored in the complexity of their brews. Truly a sanctuary for design lovers.",
  },
  {
    name: "Julian Vane",
    role: "Lifestyle Blogger",
    text: "Not just coffee, but a visual masterpiece. Every corner is art-directed to perfection. The cinematic atmosphere is unmatched.",
  },
  {
    name: "Sophia Chen",
    role: "Photographer",
    text: "The lighting here is a dream. It feels like walking into a high-end film set. And the espresso? Best in the city.",
  },
];

export function Testimonials() {
  return (
    <section className="relative w-full py-40 px-6 md:px-12 bg-cafe-900 z-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sm tracking-[0.4em] uppercase text-gold-accent font-bold mb-6">Voices</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-cream-white italic">Guest Experiences</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-12 relative flex flex-col items-center text-center group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cafe-800 rounded-full flex items-center justify-center border border-white/10 group-hover:border-gold-accent transition-colors duration-500">
                <Quote size={16} className="text-gold-accent" />
              </div>
              
              <p className="text-cafe-100 text-lg leading-relaxed mb-10 italic">
                "{t.text}"
              </p>
              
              <div>
                <div className="text-xl font-serif text-cream-white mb-1">{t.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-gold-accent font-bold">{t.role}</div>
              </div>

              {/* Decorative line */}
              <div className="mt-8 w-8 h-[1px] bg-white/10 group-hover:w-16 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
