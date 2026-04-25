import React from "react";
import clsx from "clsx";

/**
 * InternalFlow
 * Adds a subtle flowing light animation INSIDE the element.
 * If the element is white, the flow should be dark.
 * If the element is dark, the flow should be light.
 */

const InternalFlow = ({
  as: Component = "div",
  className = "",
  color = "rgba(255,255,255,0.2)", // default light flow
  speed = "8s",
  children,
  ...rest
}) => {
  return (
    <Component
      className={clsx(
        "relative inline-block overflow-hidden rounded-2xl group isolate",
        className
      )}
      {...rest}
    >
      {/* ✨ Internal Flow Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent 25%, ${color} 50%, transparent 75%)`,
          backgroundSize: '200% 200%',
          animation: `flow ${speed} linear infinite`,
        }}
      />
      
      <style jsx>{`
        @keyframes flow {
          0% { background-position: 200% 0%; }
          100% { background-position: -200% 0%; }
        }
      `}</style>

      {/* 🟣 Content */}
      <div className="relative z-10">{children}</div>
    </Component>
  );
};

export default InternalFlow;
