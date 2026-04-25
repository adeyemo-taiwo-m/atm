import React from "react";
import HeroText from "../sections/Hero/HeroText";

function Heading({ children, className }) {
  return (
    <HeroText
      tag="h2"
      className={`text-3xl lap:text-left ${className} tab:text-3xl lap:text-4xl text-[var(--color-dark)] font-extrabold text-center font-stylish`}
    >
      {children}
    </HeroText>
  );
}

export default Heading;
