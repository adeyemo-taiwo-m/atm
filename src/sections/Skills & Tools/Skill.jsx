import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import Heading from "../../ui/Heading";
import SkillsCard from "./SkillsCard";

// React Icons
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiAdobephotoshop,
  SiPostman,
  SiFramer,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
    { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF" },
  ];

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
          className="grid grid-cols-2 sm:grid-cols-3 lap:grid-cols-4 gap-6 place-items-center"
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
