import React from "react";

export default function Process() {
  return (
    <section id="process" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">
          My Design & Development Process
        </h2>

        <ol className="mt-6 list-decimal list-inside space-y-4 text-neutral-700">
          <li>
            <strong>Research & Understanding</strong>
            <p className="mt-1">
              I begin by studying the brand, audience, and goals to ensure every
              decision solves a real problem.
            </p>
          </li>
          <li>
            <strong>Design & Wireframing</strong>
            <p className="mt-1">
              I create wireframes and prototypes in Figma to visualize the
              experience before development.
            </p>
          </li>
          <li>
            <strong>Development & Implementation</strong>
            <p className="mt-1">
              I bring designs to life using React, Tailwind CSS, and JavaScript
              with a focus on performance and responsiveness.
            </p>
          </li>
          <li>
            <strong>Testing & Feedback</strong>
            <p className="mt-1">
              I test across devices, refine interactions, and iterate based on
              real feedback.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
