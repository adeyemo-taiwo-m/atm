import React, { useState, useRef } from "react";
import Button from "../../ui/Button";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const badgeColors = {
    design: "bg-violet-100 text-violet-700 border-violet-200",
    development: "bg-blue-100 text-blue-700 border-blue-200",
    all: "bg-gradient-to-r from-violet-100 to-blue-100 text-violet-800 border-violet-200"
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative rounded-[32px] overflow-hidden bg-white border border-[var(--color-neutral-200)] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
      style={{ perspective: "1000px" }}
    >
      {/* Role Badge */}
      <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm ${badgeColors[project.mode]}`}>
        {project.mode === 'all' ? 'Design + Dev' : project.mode}
      </div>

      {/* Image & Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <p className="text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {project.impact}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-2xl text-[var(--color-dark)] font-bold mb-3 group-hover:text-violet-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-neutral-500 leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] text-[var(--color-neutral-600)] text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.mode === 'design' || project.mode === 'all' ? (
            <Button
              variant={project.mode === 'design' ? "primary" : "secondary"}
              className="flex-1 min-w-[120px]"
              onClick={() => project.designLink && window.open(project.designLink, "_blank")}
            >
              View Design
            </Button>
          ) : null}

          {project.mode === 'development' || project.mode === 'all' ? (
            <Button
              variant="primary"
              className="flex-1 min-w-[120px]"
              onClick={() => project.liveLink && window.open(project.liveLink, "_blank")}
            >
              View Live
            </Button>
          ) : null}
          
          {project.mode === 'development' && (
            <Button
              variant="secondary"
              className="flex-1 min-w-[120px]"
              onClick={() => window.open(project.liveLink, "_blank")} // Placeholder for code link
            >
              View Code
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
