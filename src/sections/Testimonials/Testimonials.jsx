import React from "react";
// eslint-disable-next-line
import { motion, useAnimation } from "framer-motion";
import { testimonials } from "../../assets/data";
import Heading from "../../ui/Heading";

export default function Testimonials() {
  const controls = useAnimation();

  React.useEffect(() => {
    // Start infinite scroll only for laptop and above
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        controls.start({
          x: ["0%", "-50%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        });
      } else {
        controls.stop();
        controls.set({ x: 0 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [controls]);

  // Animation for slide-up appearance
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="testimonials">
      <div className="text-center mb-8">
        <Heading>What our clients say</Heading>
      </div>

      {/* MOBILE & TABLET: Vertical layout */}
      <div className="block lap:hidden space-y-6 px-6">
        {testimonials.slice(0, 3).map((t, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="p-6 bg-[var(--color-white)] rounded-xl border border-[var(--color-neutral-300)] shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-[var(--color-neutral-800)] text-base leading-relaxed">
              “{t.text}”
            </p>
            <p className="mt-4 font-semibold text-[var(--color-neutral-900)] text-right">
              — {t.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* LAPTOP & DESKTOP: Infinite scroll */}
      <div className="hidden lap:block relative overflow-hidden w-full py-8">
        {/* Fading edges for visual depth */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--color-white)] to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--color-white)] to-transparent z-20"></div>

        <motion.div
          className="flex gap-8"
          initial="hidden"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: ["0%", "-50%"],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              },
            })
          }
        >
          {testimonials.concat(testimonials).map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex-shrink-0 max-w-md p-6 bg-[var(--color-white)] rounded-xl border border-[var(--color-neutral-300)] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-[var(--color-neutral-800)] text-base leading-relaxed">
                “{t.text}”
              </p>
              <p className="mt-4 font-semibold text-[var(--color-neutral-900)] text-right">
                — {t.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
