import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

export default function Hero() {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-32 pb-20 flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Background/Decoration if needed - kept clean for now */}

      <div className="relative w-full max-w-[1400px] mx-auto px-4 tab:px-6 lap:px-8 flex flex-col items-center text-center z-10">
        {/* Top Text Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex items-center justify-center gap-4 mb-8"
        >
          <span className="font-serif italic text-2xl tab:text-6xl lap:text-7xl text-[var(--color-dark)] font-light">
            I&apos;m a
          </span>
        </motion.div>

        {/* Massive Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-0 text-[14vw] tab:text-[18vw] leading-[0.8] font-black tracking-tighter flex flex-col items-center"
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
          className="absolute top-[10%] tab:top-[12%] lap:top-[8%] left-1/2 -translate-x-1/2 z-10 w-[200px] tab:w-[400px]  h-auto pointer-events-none"
        >
          <img
            src="/profile.svg"
            alt="Taiwo Adeyemo"
            className="w-full h-full object-cover object-top drop-shadow-2xl opacity-100 hover:grayscale-0 transition-all duration-500 mask-image-b-transparent"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 90%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* Floating Context Pills/Text - Adjusted positioning logic if needed, but absolute works relative to container */}
        {/* Left Side Info */}
        {/* <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="hidden tab:block absolute left-4 lap:left-10 top-[40%] text-left"
        >
          <div className="h-[2px] w-12 bg-[var(--color-dark)] mb-4"></div>
          <p className="text-xl tab:text-2xl font-serif italic text-[var(--color-dark)]">
            Frontend
            <br />
            Developer
          </p>
        </motion.div>

        {/* Right Side Info */}
        {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
          className="hidden tab:block absolute right-4 lap:right-10 top-[40%] text-right"
        >
          <div className="h-[2px] w-12 bg-[var(--color-dark)] mb-4 ml-auto"></div>
          <p className="text-xl tab:text-2xl font-serif italic text-[var(--color-dark)]">
            UI/UX
            <br />
            Designer
          </p>
        </motion.div> */}

        {/* Bottom Area - Gradient Shape */}
        {/* About Content Box */}
        <div
          id="about"
          className="relative w-full z-20 rounded-t-[50px] tab:rounded-t-[80px] px-6 py-16 tab:py-24 mt-48 tab:mt-60"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-neutral-900), var(--color-black))",
            // boxShadow: "0 -20px 50px rgba(0,0,0,0.5)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <Heading className="!text-white mb-4">About Me</Heading>

            <p className="text-neutral-300 leading-relaxed text-xl tab:text-xl mb-6">
              Hi! I’m Taiwo, a Frontend Developer & UI/UX Designer. I create{" "}
              <strong className="text-white">
                clean, responsive, and intuitive web experiences
              </strong>{" "}
              that help businesses engage users and grow.
            </p>

            <p className="text-neutral-300 leading-relaxed text-xl tab:text-xl mb-12">
              I specialize in turning ideas into{" "}
              <strong className="text-white">
                beautiful, high-performing digital products
              </strong>{" "}
              — from thoughtful UI/UX design to fast, modern web development.
            </p>

            <div className="grid grid-cols-1 tab:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <strong className="block text-white text-xl mb-2">Focus</strong>
                <p className="text-neutral-400">
                  Frontend Development & UI Design
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <strong className="block text-white text-xl mb-2">Goal</strong>
                <p className="text-neutral-400">
                  Build impactful digital products for businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Pills Cluster */}
      <div className="hidden lap:flex absolute bottom-10 left-0 w-full justify-center items-end gap-4 z-40 pointer-events-none opacity-0 tab:opacity-100">
        <div className="bg-white px-6 py-2 rounded-full shadow-lg text-[var(--color-dark)] font-serif italic transform -rotate-6">
          Product Design
        </div>
        <div className="bg-white px-6 py-2 rounded-full shadow-lg text-[var(--color-dark)] font-bold mb-8">
          Websites
        </div>
        <div className="bg-white px-6 py-2 rounded-full shadow-lg text-[var(--color-dark)] font-serif transform rotate-3">
          Mobile Apps
        </div>
      </div>
    </section>
  );
}
