import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lap:items-center lap:justify-center pt-32 pb-12 lap:py-0 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative flex flex-col lap:items-center z-10">
        {/* Top Text Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex items-center justify-center gap-4 mb-4"
        >
          <span className="font-stylish italic text-xl tab:text-2xl text-[var(--color-dark)] font-light">
            I&apos;m a
          </span>
        </motion.div>

        {/* Large Text Background - Relative on mobile, takes space */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: ["-10%", "10%"],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.4 },
            scale: { duration: 0.8, delay: 0.4 },
            x: {
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          className="relative z-0 text-[18vw] lap:text-[18vw] leading-[0.8] font-black tracking-tighter flex flex-col items-center font-stylish"
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

        {/* Profile Image Box - Relative on mobile, Absolute on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative lap:absolute lap:top-[68%] lap:left-1/2 lap:-translate-x-1/2 lap:-translate-y-1/2 z-10 w-[280px] tab:w-[400px] lap:w-[480px] aspect-[4/5] rounded-[40px] tab:rounded-[60px] border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden flex items-end justify-center group mt-8 lap:mt-0 mx-auto"
        >
          <img
            src="/profile.png"
            alt="Taiwo Adeyemo"
            className="w-full h-[110%] object-cover object-top transition-all duration-700 group-hover:scale-105 drop-shadow-2xl"
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
