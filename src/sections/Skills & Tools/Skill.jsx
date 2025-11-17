import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import Heading from "../../ui/Heading";
import SkillsCard from "./SkillsCard";

import { skills } from "../../assets/data";

export default function Skills() {
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i = 1) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-16 px-6 tab:px-12 lap:px-24 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <Heading className="text-[var(--color-neutral-900)]">
          Skills & Tools
        </Heading>
        <p className="text-[var(--color-neutral-500)] max-w-2xl mx-auto leading-relaxed">
          I build and design digital products that combine creativity with
          performance — tools that feel as good as they look.
        </p>

        {/* Skills Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 lap:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill, i) => (
            <motion.div key={skill.name} custom={i} variants={cardVariant}>
              <SkillsCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
