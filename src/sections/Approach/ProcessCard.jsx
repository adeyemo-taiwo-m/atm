import React from "react";

function ProcessCard({ idx, step }) {
  return (
    <div
      key={idx}
      className="relative p-6 w-full h-full  bg-neutral-100 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-1 group"
    >
      {/* Monochrome animated border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-neutral-100  to-neutral-300 opacity-30  transition-all duration-500 group-hover:opacity-100 pointer-events-none "></div>

      <div className="relative space-y-2 z-10">
        <div className="flex gap-4">
          <div className="text-5xl  text-neutral-500 mb-4">{step.icon}</div>
          <h3 className="text-xl  text-neutral-900 font-semibold mb-2">
            {step.title}
          </h3>
        </div>
        <p className="text-neutral-700 ">{step.description}</p>
      </div>
    </div>
  );
}

export default ProcessCard;
