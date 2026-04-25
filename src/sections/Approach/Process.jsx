import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { designSteps, devSteps } from "../../assets/data";
import Heading from "../../ui/Heading";
import { useMode } from "../../contexts/ModeContext";

export default function Process() {
  const { mode } = useMode();
  const [activeTab, setActiveTab] = useState("design");

  const displayMode = mode === 'all' ? activeTab : mode;
  const steps = displayMode === 'design' ? designSteps : devSteps;

  return (
    <section
      id="process"
      className="py-24 px-6 tab:px-12 lap:px-24 overflow-hidden bg-white"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Heading>How I Work</Heading>
          <p className="text-[var(--color-neutral-500)] max-w-2xl mx-auto">
            My process is rooted in clarity, collaboration, and a relentless 
            focus on the final user experience.
          </p>
        </div>

        {/* Tab Switcher for 'All' mode */}
        {mode === 'all' && (
          <div className="flex justify-center">
            <div className="flex p-1 bg-[var(--color-neutral-100)] rounded-2xl border border-[var(--color-neutral-200)] shadow-sm">
              {['design', 'dev'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300
                    ${activeTab === tab ? 'bg-white text-[var(--color-dark)] shadow-md' : 'text-neutral-400 hover:text-neutral-600'}
                  `}
                >
                  {tab === 'design' ? 'Design Process' : 'Dev Process'}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Steps Visualization */}
        <div className="relative mt-20">
          {/* Desktop Connecting Line */}
          <div className="hidden lap:block absolute top-10 left-10 right-10 h-0.5 bg-[var(--color-neutral-100)] z-0" />
          
          <div className="grid grid-cols-1 lap:grid-cols-5 gap-12 relative z-10">
            <AnimatePresence mode="wait">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center lap:items-start text-center lap:text-left group"
                >
                  <div className="w-20 h-20 rounded-3xl bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] flex items-center justify-center text-2xl text-[var(--color-neutral-400)] mb-6 group-hover:bg-[var(--color-dark)] group-hover:text-white group-hover:border-[var(--color-dark)] group-hover:shadow-xl transition-all duration-500">
                    {step.icon}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[10px] font-black text-[var(--color-dark)] shadow-sm">
                      0{idx + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-dark)] mb-3">{step.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
