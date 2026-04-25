import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Heading from "../../ui/Heading";
import { projectsData } from "../../assets/data";
import { useMode } from "../../contexts/ModeContext";

export default function Projects() {
  const { mode } = useMode();

  const headings = {
    all: "My Recent Projects",
    design: "Design Work & Case Studies",
    development: "Built & Shipped"
  };

  const filteredProjects = projectsData.filter(p => 
    mode === 'all' || p.mode === mode || p.mode === 'all'
  );

  return (
    <section
      id="projects"
      className="py-24 px-6 tab:px-12 lap:px-24 overflow-hidden bg-[var(--color-neutral-50)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Heading className="mb-4">{headings[mode]}</Heading>
              <p className="text-[var(--color-neutral-500)] max-w-xl mx-auto">
                A selection of my latest work across design and engineering,
                focused on solving real-world problems.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 tab:grid-cols-2 desk:grid-cols-3 gap-8 lap:gap-12">
          <AnimatePresence>
            {projectsData.map((project, idx) => {
              const isVisible = mode === 'all' || project.mode === mode || project.mode === 'all';
              
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0.15,
                    scale: isVisible ? 1 : 0.95,
                    translateY: isVisible ? 0 : 20
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  data-mode={project.mode}
                  className={!isVisible ? 'pointer-events-none' : ''}
                >
                  <ProjectCard project={project} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
