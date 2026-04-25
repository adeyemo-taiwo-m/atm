import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "../../ui/Heading";
import { skillGroups } from "../../assets/data";
import { useMode } from "../../contexts/ModeContext";

export default function Skills() {
  const { mode } = useMode();

  const isRelevant = (groupLabel) => {
    if (mode === 'all') return true;
    if (mode === 'design') {
      return groupLabel === "Design Tools" || groupLabel === "Core Frontend";
    }
    if (mode === 'development') {
      return groupLabel !== "Design Tools";
    }
    return true;
  };

  return (
    <section
      id="skills"
      className="py-16 px-6 tab:px-12 lap:px-24 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <Heading className="text-[var(--color-neutral-900)]">
            Skills & Tools
          </Heading>
          <p className="text-[var(--color-neutral-500)] max-w-2xl mx-auto leading-relaxed">
            A curated set of tools and technologies I use to bring ideas to life,
            prioritizing performance, aesthetics, and clean architecture.
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 tab:grid-cols-2 lap:grid-cols-4 gap-12 text-left">
          {skillGroups.map((group, groupIdx) => (
            <AnimatePresence key={group.label}>
              {isRelevant(group.label) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0.15, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: groupIdx * 0.1 }}
                  className="space-y-4"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-neutral-400)]">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-2 bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] rounded-full group cursor-default transition-colors hover:bg-white hover:shadow-sm"
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full" 
                          style={{ backgroundColor: skill.color }}
                        />
                        <span className="text-neutral-500 group-hover:text-[var(--color-dark)] transition-colors">
                          {skill.icon}
                        </span>
                        <span className="text-sm font-medium text-[var(--color-neutral-700)] group-hover:text-[var(--color-dark)]">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
}
