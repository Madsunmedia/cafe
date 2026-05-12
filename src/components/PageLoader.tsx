"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black-matte"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-16 h-16 border-4 border-cafe-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-orange-glow/80"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-cafe-300 font-serif tracking-widest uppercase text-sm"
            >
              Brewing...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
