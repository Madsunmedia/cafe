"use client";

import { motion } from "framer-motion";
import { useRef, useState, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden group rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-orange-glow/30 hover:shadow-[0_0_20px_rgba(219,106,20,0.2)]",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
      
      {/* Liquid hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-glow/0 via-orange-glow/10 to-orange-glow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%] ease-in-out" style={{ transitionDuration: '1s' }} />
    </motion.button>
  );
}
