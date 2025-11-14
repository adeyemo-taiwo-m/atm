import { send } from "@emailjs/browser";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import MovingLogo from "../../ui/MovingLogo";

export default function Booking() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const serviceID = "service_64tm6lw";
    const templateID = "template_orihvyt";
    const publicKey = "PR4BYMprY_gY4sfDB";

    send(serviceID, templateID, data, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Booking submitted! We'll get back to you soon.");
        reset();
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("Failed to send booking. Please try again later.");
      });
  };

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
      id="booking"
      className="flex justify-center py-20 px-6 tab:px-12 lap:px-24 overflow-hidden"
    >
      <MovingLogo>
        <motion.div
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="w-full max-w-6xl bg-[var(--color-white)] rounded-3xl p-10 shadow-lg border border-[var(--color-neutral-200)]"
        >
          <div className="text-center">
            <Heading className="text-3xl md:text-4xl font-bold text-[var(--color-neutral-900)] mb-4">
              Book a Service
            </Heading>
          </div>
          <p className="text-[var(--color-neutral-700)] text-lg mb-8 text-center leading-relaxed">
            Fill in the form below and I’ll get back to you to discuss your
            project.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  className={`w-full px-4 py-3 rounded-xl border placeholder-[var(--color-neutral-500)] focus:outline-none focus:ring-2 ${
                    errors.fullName
                      ? "border-[var(--color-error)] focus:ring-[var(--color-error-active)]"
                      : "border-[var(--color-neutral-300)] focus:ring-[var(--color-neutral-200)]"
                  } text-[var(--color-neutral-900)] bg-[var(--color-white)]`}
                />
                {errors.fullName && (
                  <p className="text-[var(--color-error)] text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-xl border placeholder-[var(--color-neutral-500)] focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-[var(--color-error)] focus:ring-[var(--color-error-active)]"
                      : "border-[var(--color-neutral-300)] focus:ring-[var(--color-neutral-200)]"
                  } text-[var(--color-neutral-900)] bg-[var(--color-white)]`}
                />
                {errors.email && (
                  <p className="text-[var(--color-error)] text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="w-full">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                  className={`w-full px-4 py-3 rounded-xl border placeholder-[var(--color-neutral-500)] focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-[var(--color-error)] focus:ring-[var(--color-error-active)]"
                      : "border-[var(--color-neutral-300)] focus:ring-[var(--color-neutral-200)]"
                  } text-[var(--color-neutral-900)] bg-[var(--color-white)]`}
                />
                {errors.phone && (
                  <p className="text-[var(--color-error)] text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Service */}
              <div className="w-full">
                <select
                  {...register("service", {
                    required: "Please select a service",
                  })}
                  className={`w-full px-4 py-3 rounded-xl border placeholder-[var(--color-neutral-500)] focus:outline-none focus:ring-2 ${
                    errors.service
                      ? "border-[var(--color-error)] focus:ring-[var(--color-error-active)]"
                      : "border-[var(--color-neutral-300)] focus:ring-[var(--color-neutral-200)]"
                  } text-[var(--color-neutral-900)] bg-[var(--color-white)]`}
                >
                  <option value="" disabled>
                    Select Service Type
                  </option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="consultation">Consultation</option>
                </select>
                {errors.service && (
                  <p className="text-[var(--color-error)] text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full">
              <textarea
                placeholder="Project Details"
                rows={5}
                {...register("projectDetails", {
                  required: "Project Details are required",
                })}
                className={`w-full px-4 py-3 rounded-xl border placeholder-[var(--color-neutral-500)] focus:outline-none focus:ring-2 ${
                  errors.projectDetails
                    ? "border-[var(--color-error)] focus:ring-[var(--color-error-active)]"
                    : "border-[var(--color-neutral-300)] focus:ring-[var(--color-neutral-200)]"
                } text-[var(--color-neutral-900)] bg-[var(--color-white)]`}
              />
              {errors.projectDetails && (
                <p className="text-[var(--color-error)] text-sm mt-1">
                  {errors.projectDetails.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Submit Booking
            </Button>
          </form>
        </motion.div>
      </MovingLogo>
    </section>
  );
}
