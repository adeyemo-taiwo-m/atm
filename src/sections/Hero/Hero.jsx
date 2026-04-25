import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-32 pb-20 flex flex-col items-center justify-start overflow-hidden"
    >
      <div className="relative w-full max-w-[1400px] mx-auto px-4 tab:px-6 lap:px-8 flex flex-col items-center text-center z-10">
        {/* Top Text Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex items-center justify-center gap-4 mb-8"
        >
          <span className="font-stylish italic text-xl tab:text-4xl lap:text-5xl text-[var(--color-dark)] font-light">
            I&apos;m a
          </span>
        </motion.div>

        {/* Massive Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-0 text-[14vw] tab:text-[18vw] leading-[0.8] font-black tracking-tighter flex flex-col items-center font-stylish"
        >
          <span
            className="gradient-text"
            style={{ backgroundImage: "var(--gradient-neutral)" }}
          >
            DESIGN
          </span>
          <span
            className="gradient-text"
            style={{ backgroundImage: "var(--gradient-neutral)" }}
          >
            ENGINEER
          </span>
        </motion.h1>

        {/* Central Image - Positioned to look like it's popping out */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-[12%] tab:top-[15%] lap:top-[10%] left-1/2 -translate-x-1/2 z-10 w-[280px] tab:w-[480px] aspect-[4/5] rounded-[40px] tab:rounded-[60px] border border-white/20 bg-white/5 backdrop-blur-sm shadow-2xl flex items-end justify-center group"
        >
          <img
            src="/profile.svg"
            alt="Taiwo Adeyemo"
            className="w-[110%] max-w-none h-auto object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-2xl translate-y-[10%]"
          />
        </motion.div>
      </div>

      {/* Floating Pills Cluster */}
      <div className="hidden lap:flex absolute bottom-10 left-0 w-full justify-center items-end gap-4 z-40 pointer-events-none opacity-0 tab:opacity-100">
        <div className="bg-white px-6 py-2 rounded-full shadow-lg text-[var(--color-dark)] font-stylish italic transform -rotate-6">
          Product Design
        </div>
        <div className="bg-white px-6 py-2 rounded-full shadow-lg text-[var(--color-dark)] font-bold mb-8">
          Website Development
        </div>
        <div className="bg-white px-6 py-2 rounded-full shadow-lg text-[var(--color-dark)] font-stylish transform rotate-3">
          Mobile Apps
        </div>
      </div>
    </section>
  );
}
