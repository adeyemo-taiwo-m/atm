import React from "react";
import { FaPhoneAlt, FaDownload } from "react-icons/fa";
import Button from "../ui/Button";
// eslint-disable-next-line
import { motion } from "framer-motion";

export default function DownloadSection() {
  // Variant for slide-up
  const slideUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section className="w-full flex justify-center px-4 py-20">
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="w-full max-w-6xl mx-auto bg-white border border-neutral-200 rounded-3xl shadow-md p-8  items-center text-center  space-y-6  tab:justify-between md:text-left tab:p-12 transition-all duration-300 hover:shadow-lg"
      >
        {/* Text Section */}
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 tab:text-3xl">
            Download my CV
          </h2>
          <p className="mt-2 text-neutral-700 text-base tab:text-lg leading-relaxed">
            Grab a copy of my latest resume. The file includes my experience,
            projects, and skills.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col lap:flex-row  justify-center items-center gap-4">
          {/* Primary Button for Download */}
          <Button
            variant="primary"
            className="w-full lap:w-auto"
            onClick={() => window.open("/taiwo-resume.docx", "_blank")}
          >
            <FaDownload /> Download CV
          </Button>

          {/* Secondary Button for Call */}
          <Button
            variant="secondary"
            className="w-full lap:w-auto"
            onClick={() => (window.location.href = "tel:+2347012425718")}
          >
            <FaPhoneAlt /> Book a Call
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
