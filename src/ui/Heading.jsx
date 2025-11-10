import React from "react";
import HeroText from "../sections/Hero/HeroText";

function Heading({ children }) {
  return (
    <HeroText
      className={
        "text-3xl lap:text-left  tab:text-3xl lap:text-4xl  text-neutral-800 font-bold text-center"
      }
    >
      {children}
    </HeroText>
  );
}

export default Heading;
