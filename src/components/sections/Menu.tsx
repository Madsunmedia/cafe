"use client";

import { motion } from "framer-motion";
import { Coffee, Droplet, Wind } from "lucide-react";

const menuItems = [
  {
    title: "Signature Espresso",
    description: "Double shot of our finest Arabica beans, extracted perfectly.",
    price: "$5.50",
    icon: Coffee,
  },
  {
    title: "Velvet Latte",
    description: "Silky steamed milk poured over rich espresso with subtle notes of vanilla.",
    price: "$6.00",
    icon: Droplet,
  },
  {
    title: "Aero Brew",
    description: "Smooth, clean cup brewed with precision air pressure.",
    price: "$7.00",
    icon: Wind,
  },
];

export function Menu() {
  return (
    <section className="relative w-full py-32 px-4 md:px-12 bg-black-matte z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-cream-white mb-4">
            Curated Selection
          </h2>
          <p className="text-cafe-300 max-w-2xl mx-auto font-sans text-lg">
            Experience the finest single-origin beans, expertly roasted and brewed to perfection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-panel p-8 group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-full bg-cafe-800 flex items-center justify-center mb-6 text-orange-glow shadow-[0_0_15px_rgba(230,126,34,0.2)]">
                <item.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-serif text-cream-white mb-3">{item.title}</h3>
              <p className="text-cafe-200 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex justify-between items-end">
                <span className="text-xl font-medium text-orange-glow">{item.price}</span>
                <button className="text-sm uppercase tracking-wider text-cafe-100 hover:text-white transition-colors">
                  Order Now →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
