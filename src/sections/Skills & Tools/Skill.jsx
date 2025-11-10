import React from "react";
import SkillsCard from "./SkillsCard";
import Heading from "../../ui/Heading";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 tab:px-12 lap:px-24">
      <div className="max-w-6xl space-y-4 mx-auto text-center">
        <Heading>Skills & Tools</Heading>

        {/* === GRID === */}
        <div className="grid gap-8 sm:grid-cols-2 lap:grid-cols-3">
          <SkillsCard title={"Frontend Development"}>
            {" "}
            <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>HTML5</li>
              <li>CSS3 / Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
            </ul>
          </SkillsCard>
          <SkillsCard title={"UI / UX Design"}>
            {" "}
            <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Design Systems</li>
              <li>Wireframing & Prototyping</li>
            </ul>
          </SkillsCard>
          <SkillsCard title={"Other"}>
            <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Git & GitHub</li>
              <li>Responsive Design</li>
              <li>API Integration</li>
              <li>Performance & Accessibility</li>
            </ul>
          </SkillsCard>
        </div>

        <p className="mt-10 text-neutral-500  max-w-3xl mx-auto leading-relaxed">
          I combine design thinking and development logic to build interfaces
          that don’t just look good — they work smoothly and meet user goals.
        </p>
      </div>
    </section>
  );
}
