import React from "react";
import clsx from "clsx";

/**
 * StarBorder (Glow-only version, restored position)
 * Adds subtle glowing light animation along the edges — no border line.
 */

const StarBorder = ({
  as: Component = "div",
  className = "",
  color = "#d1d1d1", // bright gray glow
  speed = "5s",
  thickness = 2,
  children,
  ...rest
}) => {
  return (
    <Component
      className={clsx(
        "relative inline-block overflow-hidden rounded-2xl group",
        className
      )}
      {...rest}
    >
      {/* ✨ Bottom Moving Glow (restored position) */}
      <div
        className="absolute bottom-[-12px] right-[-250%] w-[300%] h-[50%] opacity-70 rounded-full animate-star-movement-bottom pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 20%)`,
          animationDuration: speed,
          filter: `drop-shadow(0 0 25px ${color})`,
        }}
      />

      {/* ✨ Top Moving Glow (restored position) */}
      <div
        className="absolute top-[-12px] left-[-250%] w-[300%] h-[50%] opacity-70 rounded-full animate-star-movement-top pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 20%)`,
          animationDuration: speed,
          filter: `drop-shadow(0 0 25px ${color})`,
        }}
      />

      {/* 🟣 Content */}
      <div className="relative z-10">{children}</div>
    </Component>
  );
};

export default StarBorder;
