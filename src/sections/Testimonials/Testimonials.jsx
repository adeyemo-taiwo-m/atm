import React from "react";
import { motion, useAnimation } from "framer-motion";
import { testimonials } from "../../assets/data";
import Heading from "../../ui/Heading";

export default function Testimonials() {
  const controls = useAnimation();

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        controls.start({
          x: ["0%", "-50%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
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

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const Badge = ({ mode }) => {
    const styles = {
      design: "bg-violet-50 text-violet-600 border-violet-100",
      development: "bg-blue-50 text-blue-600 border-blue-100",
      all: "bg-gradient-to-r from-violet-50 to-blue-50 text-violet-700 border-violet-100"
    };
    const labels = {
      design: "Design",
      development: "Dev",
      all: "Design + Dev"
    };
    return (
      <span className={`text-[9px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-md border ml-2 ${styles[mode]}`}>
        {labels[mode]}
      </span>
    );
  };

  return (
    <section id="testimonials" className="py-24 overflow-hidden bg-white">
      <div className="text-center mb-16">
        <Heading>Client Stories</Heading>
        <p className="text-neutral-500 max-w-xl mx-auto mt-4">
          Trusted by founders and companies globally to deliver exceptional 
          digital experiences.
        </p>
      </div>

      <div className="relative overflow-hidden w-full py-4">
        {/* Infinite scroll for all devices for a more premium feel, 
            but using different layouts if needed. Let's stick to infinite for all but slower on mobile */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20"></div>

        <motion.div
          className="flex gap-8 px-8"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: ["0%", "-50%"],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              },
            })
          }
        >
          {testimonials.concat(testimonials).map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-shrink-0 w-[350px] tab:w-[450px] p-8 bg-white rounded-[32px] border border-[var(--color-neutral-100)] shadow-sm hover:shadow-xl hover:border-violet-100 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <p className="text-[var(--color-neutral-800)] text-lg leading-relaxed font-serif italic mb-8">
                  “{t.text}”
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-neutral-100)] flex items-center justify-center font-bold text-[var(--color-dark)] text-xs">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[var(--color-dark)] text-sm flex items-center">
                        {t.name}
                        <Badge mode={t.mode} />
                      </p>
                      <p className="text-xs text-neutral-400">Verified Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
