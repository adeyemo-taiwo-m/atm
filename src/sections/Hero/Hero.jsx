import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import HeroText from "./HeroText";
import Button from "../../ui/Button";

export default function Hero() {
  // Variants for texts with bounce ("rubber") effect
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: i * 0.3,
      },
    }),
  };

  // Variant for buttons
  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: 1.2, // after texts
      },
    },
  };

  // Scroll into sections
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // smooth scrolling
        block: "start", // scroll so section aligns at top
      });
    }
  }

  return (
    <section
      id="hero"
      className="py-20 px-6 md:px-12 lg:px-24 mt-20 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="visible">
          <motion.div custom={0} variants={textVariants}>
            <HeroText className="text-3xl tab:text-5xl lap:text-7xl font-bold text-center">
              Turning Ideas into Functional, User-Friendly Web Experiences
            </HeroText>
          </motion.div>

          <motion.div custom={2} variants={textVariants}>
            <HeroText
              text={""}
              className="mt-4 text-lg tab:text-xl text-neutral-700"
              duration={0.00000005}
            >
              I’m Taiwo Adeyemo — a Frontend Developer and UI Designer
              passionate about building digital solutions that help businesses
              grow.
            </HeroText>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center gap-4"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button
              variant="secondary"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button onClick={() => scrollToSection("booking")}>
              Let’s Collaborate
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
