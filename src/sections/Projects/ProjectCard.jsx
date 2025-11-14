import React from "react";
import Button from "../../ui/Button"; // adjust the path as needed

function ProjectCard({ project, idx }) {
  console.log(project);
  return (
    <article
      key={idx}
      className="rounded-xl overflow-hidden shadow-lg border border-neutral-200 bg-white transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover filter grayscale md:filter hover:filter-none transition-all duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">
        <div>
          <h3 className="text-xl text-neutral-900 font-semibold">
            {project.title}
          </h3>
          <p className="mt-2 text-neutral-700">{project.description}</p>
          <p className="mt-2 text-sm text-neutral-600">
            <strong>Role:</strong> {project.role}
          </p>

          {/* Tech stack boxes */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-md bg-gradient-to-r from-neutral-200 to-neutral-400 text-neutral-800 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          {project?.liveLink && (
            <Button
              variant="small"
              onClick={() => window.open(project?.liveLink, "_blank")}
            >
              View Live
            </Button>
          )}
          {project?.designLink && (
            <Button
              variant="secondarySmall"
              onClick={() => window.open(project?.designLink, "_blank")}
            >
              View Design
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
