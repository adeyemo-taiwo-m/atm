import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import SkillsCard from "./SkillsCard";
import Heading from "../../ui/Heading";

export default function Skills() {
  // Variant for the cards (slide up)
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // stagger each card
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Variant for the paragraph (slide from right)
  const paragraphVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.8, duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-16 px-6 tab:px-12 lap:px-24 overflow-hidden"
    >
      <div className="max-w-6xl space-y-4 mx-auto text-center">
        <Heading>Skills & Tools</Heading>

        {/* === GRID === */}
        <div className="grid gap-8 sm:grid-cols-2 lap:grid-cols-3">
          {["Frontend Development", "UI / UX Design", "Other"].map(
            (title, index) => (
              <motion.div
                key={title}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                <SkillsCard title={title}>
                  {title === "Frontend Development" && (
                    <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
                      <li>HTML5</li>
                      <li>CSS3 / Tailwind CSS</li>
                      <li>JavaScript (ES6+)</li>
                      <li>React.js</li>
                    </ul>
                  )}
                  {title === "UI / UX Design" && (
                    <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
                      <li>Figma</li>
                      <li>Photoshop</li>
                      <li>Design Systems</li>
                      <li>Wireframing & Prototyping</li>
                    </ul>
                  )}
                  {title === "Other" && (
                    <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
                      <li>Git & GitHub</li>
                      <li>Responsive Design</li>
                      <li>API Integration</li>
                      <li>Performance & Accessibility</li>
                    </ul>
                  )}
                </SkillsCard>
              </motion.div>
            )
          )}
        </div>

        {/* Paragraph sliding in from the right */}
        <motion.p
          className="mt-10 text-neutral-500 max-w-3xl mx-auto leading-relaxed"
          variants={paragraphVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          I combine design thinking and development logic to build interfaces
          that don’t just look good — they work smoothly and meet user goals.
        </motion.p>
      </div>
    </section>
  );
}
