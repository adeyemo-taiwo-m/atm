import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const AvailabilityBadge = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/80 backdrop-blur-md border border-[var(--color-neutral-200)] p-3 pl-4 rounded-2xl shadow-xl"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-[var(--color-dark)] whitespace-nowrap">
            Currently available
          </span>
        </div>
        <a 
          href="#contact" 
          className="text-xs font-bold uppercase tracking-wider text-[var(--color-neutral-500)] hover:text-[var(--color-dark)] transition-colors ml-2"
        >
          Book Now
        </a>
        <button 
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors"
        >
          <FaTimes className="text-[var(--color-neutral-400)] text-xs" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default AvailabilityBadge;
