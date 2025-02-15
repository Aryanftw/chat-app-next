'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
      }}
      transition={{
        type: 'spring',
        stiffness: 600,
        damping: 30,
      }}
    >
      <div
        className="w-4 h-4 rounded-full backdrop-blur-md bg-blue-400/20 border border-blue-500/40 shadow-lg"
        style={{
          boxShadow: '0 4px 20px rgba(0, 153, 255, 0.4)', // Softer blue glow
        }}
      ></div>
    </motion.div>
  );
}
