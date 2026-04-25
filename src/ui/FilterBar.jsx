import React from 'react';
import { useMode } from '../contexts/ModeContext';
import { FaPenNib, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FilterBar = () => {
  const { mode, setMode } = useMode();

  const filters = [
    { id: 'all', label: 'All', icon: null },
    { id: 'design', label: 'Design', icon: <FaPenNib className="text-sm" /> },
    { id: 'development', label: 'Development', icon: <FaCode className="text-sm" /> },
  ];

  return (
    <div className="sticky top-[64px] z-40 w-full py-4 bg-[var(--color-white)]/70 backdrop-blur-md border-b border-[var(--color-neutral-200)] flex justify-center px-4">
      <div className="flex p-1 bg-[var(--color-neutral-100)] rounded-full border border-[var(--color-neutral-200)] shadow-sm">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setMode(f.id)}
            className={`
              relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${mode === f.id ? 'text-white' : 'text-[var(--color-neutral-600)] hover:text-[var(--color-dark)]'}
            `}
          >
            {mode === f.id && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-[var(--color-neutral-900)] rounded-full z-0"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {f.icon}
              {f.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
