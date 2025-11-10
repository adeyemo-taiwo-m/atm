import React from "react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 px-6 md:px-12 lg:px-24 bg-neutral-100"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">What Clients & Teammates Say</h2>

        <div className="mt-6 space-y-4 text-neutral-700">
          <blockquote className="p-4 border-l-4">
            “Taiwo has an exceptional eye for detail and always ensures every
            design element aligns with user needs.”
            <footer className="mt-2 text-sm text-neutral-600">
              — Israel, Project Collaborator
            </footer>
          </blockquote>

          <blockquote className="p-4 border-l-4">
            “Working with Taiwo was smooth — he blends creativity and structure
            to deliver functional solutions.”
            <footer className="mt-2 text-sm text-neutral-600">
              — Client, NexCity Realty
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
