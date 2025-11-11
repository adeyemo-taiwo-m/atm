import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

function MovingLogo({ children }) {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Background moving text */}
      <motion.div
        className="absolute top-1/2 left-0 text-[10rem] font-bold text-transparent bg-clip-text 
                   bg-gradient-to-r from-[var(--color-neutral-400)] to-[var(--color-neutral-800)] opacity-20"
        style={{ transform: "translateY(-50%)" }}
        animate={{ x: ["-50%", "100%", "-50%"] }} // move left -> right -> left
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        adeyemo.tm
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        {children}{" "}
      </div>
    </div>
  );
}

export default MovingLogo;
