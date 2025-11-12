import React, { useState, useEffect } from "react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  // Smooth scroll handler
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false); // close mobile menu if open
  };

  return (
    <div className="tab:mx-8 mx-4 lap:mx-12 desk:mx-20">
      <header
        className={`w-9/10 fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isSticky
            ? "max-w-[var(--breakpoint-desk)] backdrop-blur-md bg-white/70 shadow-sm rounded-full"
            : "max-w-[var(--breakpoint-desk)] bg-transparent"
        }`}
      >
        <div className="px-4 sm:px-6 lap:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-semibold text-black">
            <span className="inline-block">adeyemo</span>
            <span className="inline-block text-black/70">.tm</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lap:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-black/70 py-2 px-3 hover:bg-black/3 hover:rounded-full hover:py-2 hover:px-3"
                onClick={(e) => handleScrollTo(e, l.href)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            {/* Moon icon */}
            <button
              aria-label="Toggle theme"
              className="p-2 rounded-md cursor-pointer hover:bg-black/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            </button>

            {/* Book a Call */}
            <Button
              variant="whatsappLight"
              className="hidden  lap:flex items-center"
              onClick={() =>
                window.open("https://wa.me/2347012425718", "_blank")
              }
            >
              <FaWhatsapp className="mr-2 text-green-500" />
              Chat Me
            </Button>

            {/* Mobile menu button */}
            <button
              className="lap:hidden p-2 rounded-md hover:bg-black/5"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((s) => !s)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lap:hidden border-t border-black/10 bg-white/90 backdrop-blur-md rounded-b-2xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-base font-medium text-black/80 px-2 py-2 rounded-md hover:bg-black/5"
                  onClick={(e) => handleScrollTo(e, l.href)}
                >
                  {l.label}
                </a>
              ))}

              <Button
                variant="whatsappLight"
                className="  items-center"
                onClick={() =>
                  window.open("https://wa.me/2347012425718", "_blank")
                }
              >
                <FaWhatsapp className="mr-2 text-green-500" />
                Chat Me
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
