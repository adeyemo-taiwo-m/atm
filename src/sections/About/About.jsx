import React from "react";
import { motion } from "framer-motion";
import Button from "../../ui/Button";

/**
 * About Section - Editorial Redesign
 */

export default function About() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const stats = [
    { value: "2+", label: "Years experience" },
    { value: "10+", label: "Projects shipped" },
    { value: "5★", label: "Client rating" },
  ];

  const tags = [
    { label: "UI/UX Design", accented: true },
    { label: "Frontend Dev", accented: true },
    { label: "React & Next.js", accented: false },
    { label: "Figma", accented: false },
    { label: "Tailwind CSS", accented: false },
    { label: "Nigeria · Remote", accented: false },
  ];

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-24 px-6 tab:px-12 lap:px-24 bg-white"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex flex-col lap:flex-row gap-12 lap:gap-20">
          {/* ==== LEFT COLUMN (55%) ==== */}
          <div className="flex-[1.2] space-y-6">
            {/* Label + Accent Line */}
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-neutral-400)] font-bold">
                About me
              </span>
              <div className="w-8 h-[2px] bg-violet-600" />
            </motion.div>

            {/* Heading */}
            <motion.h2 
              variants={itemVariants}
              className="text-4xl tab:text-[42px] leading-[1.1] font-stylish font-extrabold text-[var(--color-dark)]"
            >
              Design Engineer. <br />
              <span className="text-violet-600">I craft interfaces</span> that ship.
            </motion.h2>

            {/* Body */}
            <motion.p 
              variants={itemVariants}
              className="text-lg tab:text-xl text-[var(--color-neutral-600)] leading-relaxed max-w-2xl"
            >
              I'm Taiwo — I bridge the gap between design and code. From pixel-perfect UI in Figma 
              to production-ready React apps, I build digital products that look good and work even better.
            </motion.p>
          </div>

          {/* ==== RIGHT COLUMN (45%) ==== */}
          <div className="flex-1 space-y-10">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="bg-white border border-[var(--color-neutral-100)] rounded-[10px] p-[14px_16px] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-[22px] font-bold text-[var(--color-dark)] leading-tight">{stat.value}</div>
                  <div className="text-[11px] text-[var(--color-neutral-500)] font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tags Row */}
            <motion.div 
              variants={itemVariants} 
              transition={{ delay: 0.54 }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`
                    text-[12px] px-[13px] py-[5px] rounded-[20px] border font-medium transition-all
                    ${tag.accented 
                      ? "bg-violet-50 border-violet-200 text-violet-700" 
                      : "bg-white border-[var(--color-neutral-200)] text-[var(--color-neutral-500)]"
                    }
                  `}
                >
                  {tag.label}
                </span>
              ))}
            </motion.div>

            {/* Buttons Row */}
            <motion.div 
              variants={itemVariants}
              transition={{ delay: 0.62 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                onClick={() => window.open("/Adeyemo Taiwo M Resume.pdf", "_blank")}
                className="bg-violet-600 !text-white !rounded-full !px-8 !py-4 hover:bg-violet-700 shadow-lg shadow-violet-200 transition-all border-none normal-case font-semibold"
              >
                Download resume
              </Button>
              <Button
                variant="secondary"
                onClick={scrollToProjects}
                className="!rounded-full !px-8 !py-4 border-[var(--color-neutral-200)] text-[var(--color-neutral-500)] hover:bg-neutral-50 transition-all normal-case font-semibold"
              >
                View projects
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
