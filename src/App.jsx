import React, { useEffect } from "react";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills & Tools/Skill";
import Projects from "./sections/Projects/Projects";
import Process from "./sections/Approach/Process";
import Testimonials from "./sections/Testimonials/Testimonials";
import Contact from "./sections/Contact section/Contact";
import Header from "./ui/Header";

import Booking from "./sections/booking/Booking";
function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "hero") {
              document.title = "Adeyemo Taiwo M";
            } else {
              document.title = "Creative Developer";
            }
          }
        });
      },
      { threshold: 0.5 } // section is 50% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <>
        <div className="px-4 relative  tab:px-8 lap:px-12 desk:px-20">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Process />
          <Testimonials />
          <Booking />
        </div>
        <Contact />
      </>
    </>
  );
}

export default App;
