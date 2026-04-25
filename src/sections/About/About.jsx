import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "../../ui/Heading";
import useDarkMode from "../../hooks/useDarkMode";
import { useMode } from "../../contexts/ModeContext";

export default function About() {
  const { mode, setMode } = useMode();
  const { isDarkMode } = useDarkMode();

  const content = {
    design: {
      lead: "I design interfaces that feel inevitable — where every pixel earns its place. I work from insight to wireframe to polished UI.",
      philosophy: "Design is problem-solving dressed in aesthetics.",
      focus: "UI/UX & Visual Design"
    },
    development: {
      lead: "I build fast, accessible, production-ready web apps using modern React and Next.js. Clean code is a feature, not an afterthought.",
      philosophy: "Performance, responsiveness, and maintainability are non-negotiable.",
      focus: "Frontend Engineering & Architecture"
    },
    all: {
      lead: "Hi! I’m Taiwo, a Design Engineer specializing in turning complex ideas into beautiful, high-performing digital products.",
      philosophy: "Bridging the gap between design and development.",
      focus: "Full-stack Design & Frontend Development"
    }
  };

  const activeContent = mode === 'all' ? content.all : content[mode];

  return (
    <section
      id="about"
      className="py-16 px-6 tab:px-12 lap:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lap:flex-row gap-20 items-center">
        {/* ==== IMAGE SIDE ==== */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-[54px] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
          <img
            src={`/image-${isDarkMode ? "dark" : "light"}.webp`}
            alt="Adeyemo Taiwo"
            className="relative object-cover w-full max-w-[400px] h-[500px] rounded-[54px] shadow-2xl transform transition-all duration-500 ease-out hover:rotate-2 hover:scale-[1.03] grayscale hover:grayscale-0"
          />
        </div>

        {/* ==== TEXT SIDE ==== */}
        <div className="flex-1">
          {/* Mobile Toggle */}
          <div className="lap:hidden flex mb-8 bg-neutral-100 p-1 rounded-xl">
            <button
              onClick={() => setMode('design')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${mode === 'design' ? 'bg-white shadow-sm' : 'text-neutral-400'}`}
            >
              DESIGN FOCUS
            </button>
            <button
              onClick={() => setMode('development')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${mode === 'development' ? 'bg-white shadow-sm' : 'text-neutral-400'}`}
            >
              DEV FOCUS
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Heading className="mb-6">About Me</Heading>
              
              <p className="text-2xl tab:text-3xl font-stylish italic text-[var(--color-dark)] leading-tight mb-8">
                {activeContent.lead}
              </p>

              {mode === 'all' ? (
                <div className="space-y-6">
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    {content.design.lead}
                  </p>
                  <p className="text-neutral-600 leading-relaxed text-lg border-l-2 border-[var(--color-neutral-200)] pl-6">
                    {content.development.lead}
                  </p>
                </div>
              ) : (
                <div className="p-8 bg-[var(--color-neutral-100)] rounded-3xl border border-[var(--color-neutral-200)] shadow-sm">
                  <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold mb-3">Philosophy</p>
                  <p className="text-xl text-[var(--color-dark)] font-medium italic">
                    "{activeContent.philosophy}"
                  </p>
                </div>
              )}

              <div className="mt-10 grid grid-cols-1 tab:grid-cols-2 gap-6">
                <div className="bg-[var(--color-white)] p-6 rounded-2xl border border-[var(--color-neutral-100)] shadow-sm">
                  <strong className="block text-[var(--color-dark)] text-sm uppercase tracking-wider mb-1">Focus</strong>
                  <p className="text-neutral-600">{activeContent.focus}</p>
                </div>
                <div className="bg-[var(--color-white)] p-6 rounded-2xl border border-[var(--color-neutral-100)] shadow-sm">
                  <strong className="block text-[var(--color-dark)] text-sm uppercase tracking-wider mb-1">Goal</strong>
                  <p className="text-neutral-600">Impactful digital products</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
