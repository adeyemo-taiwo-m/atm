import { steps } from "../../assets/data";
import Heading from "../../ui/Heading";

export default function Process() {
  return (
    <section id="process" className="py-16 px-6 tab:px-12 lap:px-24 ">
      <div className="max-w-6xl space-y-6 mx-auto">
        <div className="text-center">
          <Heading>My Design & Development Process</Heading>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 tab:grid-cols-2 lap:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 bg-neutral-100 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-1 group"
            >
              {/* Monochrome animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-neutral-100  to-neutral-300 opacity-30  transition-all duration-500 group-hover:opacity-100 pointer-events-none "></div>

              <div className="relative space-y-2 z-10">
                <div className="flex gap-4">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                </div>
                <p className="text-neutral-700 ">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
