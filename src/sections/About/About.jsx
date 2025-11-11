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
          src="/profile.png"
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
            I’m a Frontend Developer and UI/UX Designer based in Nigeria. My
            journey started in graphic design, where I learned how visuals
            connect people to brands. Over time, I moved into UI design and
            frontend development to turn those visuals into real, interactive
            products.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Today, I focus on creating clean, responsive, and intuitive web
            experiences — especially for business owners who want to digitize
            their services or improve their customer experience.
          </p>

          <ul className="mt-6 grid grid-cols-1 tab:grid-cols-3 gap-4 text-neutral-800">
            <li>
              <strong>Location</strong> <p>Nigeria</p>
            </li>
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
