import React from "react";
import ProjectCard from "./ProjectCard";
import Heading from "../../ui/Heading";
import { projectsData } from "../../assets/data";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 tab:px-12 lap:px-24">
      <div className="max-w-6xl mx-auto">
        <Heading>My Recent Projects</Heading>

        <div className="mt-8 grid grid-cols-1 tab:grid-cols-1 lap:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
