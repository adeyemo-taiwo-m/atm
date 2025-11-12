import React from "react";

function SkillsCard({ skill }) {
  return (
    <div className="group relative flex flex-col items-center justify-center rounded-2xl w-36 h-36 border border-[var(--color-neutral-200)] bg-[var(--color-neutral-100)] transition-all duration-300 hover:scale-105 hover:shadow-lg">
      {/* Icon */}
      <div
        className="text-5xl opacity-70 transition-all duration-300 group-hover:opacity-100"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>

      {/* Name */}
      <p className="mt-3 text-[var(--color-neutral-800)] text-sm font-medium transition-all duration-300 group-hover:text-[var(--color-neutral-900)]">
        {skill.name}
      </p>

      {/* Hover Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}25 0%, transparent 70%)`,
        }}
      ></div>
    </div>
  );
}

export default SkillsCard;
