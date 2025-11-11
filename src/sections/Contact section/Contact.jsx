import React from "react";
import ContactIcons from "./ContactIcons";
import Heading from "../../ui/Heading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center items-center rounded-t-3xl py-4 px-6 tab:px-12 lap:px-24"
      style={{
        background:
          "linear-gradient(to right, var(--color-neutral-400), var(--color-neutral-800))",
      }}
    >
      <div className="w-full backdrop-blur-md p-6 text-center">
        <Heading className="!text-white">Let’s Work Together</Heading>
        <p className="text-gray-200 text-lg mb-10 leading-relaxed">
          Have a project in mind or want to collaborate? I’m always open to
          discussing new ideas or improving existing projects.
        </p>

        {/* Contact Links */}
        <ContactIcons />
      </div>
    </section>
  );
}
