import React from "react";
// eslint-disable-next-line
import { motion, useAnimation } from "framer-motion";
import { testimonials } from "../../assets/data";
import Heading from "../../ui/Heading";

export default function Testimonials() {
  const controls = useAnimation();

  React.useEffect(() => {
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
  }, [controls]);

  return (
    <>
      <div className="text-center">
        <Heading>What our client say</Heading>
      </div>
      <div className="relative overflow-hidden w-full py-8">
        {/* Left and Right fade overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-20"></div>

        <motion.div
          className="flex gap-8"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => {
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
          }}
        >
          {testimonials.concat(testimonials).map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0  max-w-md p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-800 text-base leading-relaxed break-words">
                “{t.text}”
              </p>
              <p className="mt-4 font-semibold text-gray-900 text-right">
                — {t.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
