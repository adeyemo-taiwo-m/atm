import React from "react";
import HeroText from "./HeroText"; // make sure this file exists
import Button from "../../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-20 px-6 md:px-12 lg:px-24 mt-20 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <HeroText
          className={"text-3xl tab:text-4xl lap:text-6xl font-bold text-center"}
        >
          Turning Ideas into Functional,
        </HeroText>
        <HeroText
          className={
            "text-3xl  tab:text-4xl lap:text-6xl font-bold text-center"
          }
        >
          User-Friendly Web Experiences
        </HeroText>

        <HeroText
          text={""}
          className="mt-4 text-lg md:text-xl text-neutral-700"
          duration={0.00000005}
        >
          I’m Taiwo Adeyemo — a Frontend Developer and UI Designer passionate
          about building digital solutions that help businesses grow.
        </HeroText>

        <div className="mt-8 flex justify-center gap-4">
          <Button variant="secondary">View My Work</Button>
          <Button>Let’s Collaborate</Button>
        </div>
      </div>
    </section>
  );
}
