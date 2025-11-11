import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { steps } from "../../assets/data";
import Heading from "../../ui/Heading";
import ProcessCard from "./ProcessCard";

export default function Process() {
  // Variant for process cards (slide up)
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // stagger cards
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="process"
      className="py-16 px-6 tab:px-12 lap:px-24 overflow-hidden"
    >
      <div className="max-w-6xl space-y-6 mx-auto">
        <div className="text-center">
          <Heading>My Design & Development Process</Heading>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 tab:grid-cols-2 lap:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <ProcessCard step={step} idx={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
