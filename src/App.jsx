import React from "react";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills & Tools/Skill";
import Projects from "./sections/Projects/Projects";
import Process from "./sections/Approach/Process";
import Testimonials from "./sections/Testimonials/Testimonials";
import Contact from "./sections/Contact section/Contact";
import Header from "./ui/Header";
import LightRays from "./ui/LightRays";
import RippleGrid from "./ui/LightRays";

function App() {
  return (
    <>
      {/* <div
        className=" w-screen"
        style={{
          width: "100%",
          height: "700px",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#9999ff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div> */}

      <div className="px-4 relative  tab:px-8 lap:px-12 desk:px-20">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}

export default App;
