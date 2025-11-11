import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Heading from "../../ui/Heading";
import { projectsData } from "../../assets/data";

export default function Projects() {
  // Variant for project cards (slide up)
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

  return (
    <section
      id="projects"
      className="py-16 px-6 tab:px-12 lap:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <Heading>My Recent Projects</Heading>
        </div>

        <div className="mt-8 grid grid-cols-1 tab:grid-cols-1 lap:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
