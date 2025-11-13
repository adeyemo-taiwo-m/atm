import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import Heading from "../../ui/Heading";

export default function About() {
  // Motion variants for left and right sides
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="py-16 px-6 tab:px-12 lap:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lap:flex-row gap-20 items-center">
        {/* ==== IMAGE SIDE ==== */}
        <motion.img
          src="/profile.webp"
          alt="Adeyemo Taiwo"
          className="object-cover h-120 rounded-[54px] shadow-lg transform transition-all duration-500 ease-out hover:rotate-2 hover:scale-[1.03]"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.5 }}
        />

        {/* ==== TEXT SIDE ==== */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.5 }}
        >
          <Heading>About Me</Heading>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Hi! I’m Taiwo, a Frontend Developer and UI/UX Designer. I help
            businesses and brands{" "}
            <strong>
              create clean, responsive, and intuitive web experiences
            </strong>{" "}
            that engage users and drive results. My work ensures your digital
            presence is professional, accessible, and easy to navigate.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            I specialize in{" "}
            <strong>turning ideas into interactive digital products</strong>—
            from designing user-friendly interfaces to developing functional,
            high-performing web applications. Whether you want to digitize your
            services, improve your customer experience, or grow your online
            presence, I provide solutions that make your business stand out.
          </p>

          <ul className="mt-6 grid grid-cols-1 tab:grid-cols-3 gap-4 text-neutral-800">
          
            <li>
              <strong>Focus</strong> <p>Frontend Development & UI Design</p>
            </li>
            <li>
              <strong>Goal</strong>{" "}
              <p>Build impactful digital products for businesses</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
