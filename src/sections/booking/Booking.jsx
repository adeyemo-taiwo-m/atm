import React from "react";
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
    console.log("Booking submitted:", data);
    alert("Booking submitted! We'll get back to you soon.");
    reset();
  };

  return (
    <section
      id="booking"
      className="flex justify-center py-20 px-6 md:px-12 lg:px-24"
    >
      {" "}
      <MovingLogo>
        <div className="w-full max-w-3xl bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
          <div className="text-center">
            <Heading className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book a Service
            </Heading>
          </div>
          <p className="text-gray-600 text-lg mb-8 text-center leading-relaxed">
            Fill in the form below and I’ll get back to you to discuss your
            project.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  className={`w-full px-4 py-3 rounded-xl border placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.fullName
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-200 focus:ring-gray-300"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

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
                  className={`w-full px-4 py-3 rounded-xl border placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-200 focus:ring-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                  className={`w-full px-4 py-3 rounded-xl border placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-200 focus:ring-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <select
                  {...register("service", {
                    required: "Please select a service",
                  })}
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
                    errors.service
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-200 focus:ring-gray-300"
                  }`}
                >
                  <option value="" disabled>
                    Select Service Type
                  </option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="consultation">Consultation</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full">
              <textarea
                placeholder="Project Details"
                rows={5}
                {...register("projectDetails", {
                  required: "Project Details are required",
                })}
                className={`w-full px-4 py-3 rounded-xl border placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.projectDetails
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-200 focus:ring-gray-300"
                }`}
              />
              {errors.projectDetails && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.projectDetails.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Submit Booking
            </Button>
          </form>
        </div>{" "}
      </MovingLogo>
    </section>
  );
}
