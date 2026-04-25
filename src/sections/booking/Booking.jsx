import React, { useEffect } from "react";
import { send } from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import MovingLogo from "../../ui/MovingLogo";
import { useMode } from "../../contexts/ModeContext";
import { FaCheckCircle, FaShieldAlt, FaGlobe } from "react-icons/fa";

export default function Booking() {
  const { mode } = useMode();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (mode === 'design') {
      setValue('service', 'UI/UX Design');
    } else if (mode === 'development') {
      setValue('service', 'Website Development');
    }
  }, [mode, setValue]);

  const onSubmit = (data) => {
    const serviceID = "service_64tm6lw";
    const templateID = "template_orihvyt";
    const publicKey = "PR4BYMprY_gY4sfDB";

    send(serviceID, templateID, data, publicKey)
      .then(() => {
        alert("Booking submitted! I'll get back to you within 24 hours.");
        reset();
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("Failed to send booking. Please try again later.");
      });
  };

  const content = {
    design: {
      headline: "Let's bring your vision to life",
      sub: "I take on a limited number of design projects each quarter. Let's talk about yours.",
      badge: "Taking design projects"
    },
    development: {
      headline: "Ready to build something great?",
      sub: "From MVPs to production apps — let's scope your project and start building.",
      badge: "Available for dev projects"
    },
    all: {
      headline: "Work with me",
      sub: "Whether you need a high-fidelity design or a production-ready application, I'm here to help.",
      badge: "Available for projects"
    }
  };

  const activeContent = content[mode] || content.all;

  const trustSignals = [
    { icon: <FaCheckCircle />, text: "Response within 24hrs" },
    { icon: <FaShieldAlt />, text: "NDA available on request" },
    { icon: <FaGlobe />, text: "Based in Nigeria, available globally" },
  ];

  return (
    <section id="booking" className="py-24 px-6 tab:px-12 lap:px-24 bg-[var(--color-neutral-50)]">
      <div className="max-w-6xl mx-auto">
        <MovingLogo>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[48px] p-8 tab:p-16 shadow-2xl border border-[var(--color-neutral-200)] relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/5 to-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

            <div className="flex flex-col lap:flex-row gap-16">
              {/* Left Column: Info */}
              <div className="flex-1 space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                        {activeContent.badge}
                      </span>
                    </div>
                    <Heading className="text-4xl tab:text-5xl mb-6 leading-tight">
                      {activeContent.headline}
                    </Heading>
                    <p className="text-xl text-neutral-500 leading-relaxed">
                      {activeContent.sub}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="grid grid-cols-1 tab:grid-cols-3 gap-6 pt-8">
                  {trustSignals.map((signal, i) => (
                    <div key={i} className="flex flex-col items-center lap:items-start text-center lap:text-left gap-3 p-4 bg-[var(--color-neutral-50)] rounded-2xl border border-[var(--color-neutral-100)]">
                      <span className="text-violet-500 text-xl">{signal.icon}</span>
                      <span className="text-xs font-bold text-[var(--color-dark)] uppercase tracking-wider">{signal.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="flex-1">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName", { required: true })}
                    className="w-full px-6 py-4 rounded-2xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)] focus:bg-white focus:ring-2 focus:ring-violet-500 transition-all outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                    className="w-full px-6 py-4 rounded-2xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)] focus:bg-white focus:ring-2 focus:ring-violet-500 transition-all outline-none"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      {...register("service", { required: true })}
                      className="w-full px-6 py-4 rounded-2xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)] focus:bg-white outline-none appearance-none cursor-pointer"
                    >
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Design">Mobile App Design</option>
                      <option value="Full Product">Full Product</option>
                      <option value="Other">Other</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Budget Range"
                      {...register("budget")}
                      className="w-full px-6 py-4 rounded-2xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)] focus:bg-white focus:ring-2 focus:ring-violet-500 transition-all outline-none"
                    />
                  </div>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    {...register("projectDetails", { required: true })}
                    className="w-full px-6 py-4 rounded-2xl border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)] focus:bg-white focus:ring-2 focus:ring-violet-500 transition-all outline-none"
                  />
                  <Button type="submit" className="w-full py-4 text-lg">
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </MovingLogo>
      </div>
    </section>
  );
}
