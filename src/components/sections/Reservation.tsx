"use client";

import { motion } from "framer-motion";

export function Reservation() {
  return (
    <section className="relative w-full py-32 px-4 md:px-12 bg-cafe-900 z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-3xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-glow/20 blur-[100px] pointer-events-none" />

        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-cream-white mb-4">Reserve Your Experience</h2>
          <p className="text-cafe-300 font-sans">Secure your table for an unforgettable cinematic coffee journey.</p>
        </div>

        <form className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-xs uppercase tracking-widest text-cafe-300 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-cream-white focus:outline-none focus:border-orange-glow/50 focus:bg-black/40 transition-all placeholder:text-white/20"
                placeholder="John Doe"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs uppercase tracking-widest text-cafe-300 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-cream-white focus:outline-none focus:border-orange-glow/50 focus:bg-black/40 transition-all placeholder:text-white/20"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-xs uppercase tracking-widest text-cafe-300 mb-2">Date</label>
              <input 
                type="date" 
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-cream-white focus:outline-none focus:border-orange-glow/50 focus:bg-black/40 transition-all text-white/80"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs uppercase tracking-widest text-cafe-300 mb-2">Guests</label>
              <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-cream-white focus:outline-none focus:border-orange-glow/50 focus:bg-black/40 transition-all appearance-none">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People</option>
              </select>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 py-4 bg-gradient-to-r from-cafe-500 to-cafe-700 hover:from-orange-glow hover:to-cafe-600 text-white rounded-xl font-medium tracking-wide transition-all shadow-[0_0_20px_rgba(230,126,34,0.2)] hover:shadow-[0_0_30px_rgba(230,126,34,0.4)]"
            type="button"
          >
            Confirm Reservation
          </motion.button>
        </form>
      </div>
    </section>
  );
}
