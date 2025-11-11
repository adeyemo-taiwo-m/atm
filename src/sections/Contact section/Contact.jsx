import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import ContactIcons from "./ContactIcons";
import Heading from "../../ui/Heading";

export default function Contact() {
  // Variant for slide-up animation
  const slideUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center rounded-t-3xl py-4 px-6 tab:px-12 lap:px-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, var(--color-neutral-400), var(--color-neutral-800))",
      }}
    >
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="w-full backdrop-blur-md p-6 text-center"
      >
        <Heading className="!text-white">Let’s Work Together</Heading>
        <p className="text-gray-200 text-lg mb-10 leading-relaxed">
          Have a project in mind or want to collaborate? I’m always open to
          discussing new ideas or improving existing projects.
        </p>

        {/* Contact Links */}
        <ContactIcons />
      </motion.div>
    </section>
  );
}
