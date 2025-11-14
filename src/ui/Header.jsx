import React, { useState, useEffect } from "react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";
import useDarkMode from "../hooks/useDarkMode";
import { FiMoon, FiSun } from "react-icons/fi";

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

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="tab:mx-8 mx-4 lap:mx-12 desk:mx-20">
      <header
        className={`w-9/10 fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 border-b border-[var(--color-neutral-200)] ${
          isSticky
            ? "max-w-[var(--breakpoint-desk)] backdrop-blur-md bg-[var(--color-white)]/70 shadow-sm rounded-full"
            : "max-w-[var(--breakpoint-desk)] bg-transparent"
        }`}
      >
        <div className="px-4 sm:px-6 lap:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-semibold text-[var(--color-dark)]"
          >
            <span className="inline-block">adeyemo</span>
            <span className="inline-block text-[var(--color-neutral-700)]">
              .tm
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lap:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[var(--color-neutral-700)] py-2 px-3 hover:bg-[var(--color-neutral-200)] hover:rounded-full"
                onClick={(e) => handleScrollTo(e, l.href)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-1 lap:space-x-3">
            {/* Moon icon */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="p-2 rounded-md cursor-pointer hover:bg-[var(--color-neutral-200)]"
            >
              {isDarkMode ? (
                <FiSun className="h-5 w-5 text-[var(--color-dark)]" />
              ) : (
                <FiMoon className="h-5 w-5 text-[var(--color-dark)]" />
              )}
            </button>

            {/* Chat Button */}
            <Button
              variant="whatsappLight"
              className="hidden lap:flex items-center"
              onClick={() =>
                window.open("https://wa.me/2347012425718", "_blank")
              }
            >
              <FaWhatsapp className="mr-2 text-green-500" />
              Chat Me
            </Button>

            {/* Mobile menu button */}
            <button
              className="lap:hidden p-2 rounded-md hover:bg-[var(--color-neutral-200)]"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((s) => !s)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer text-[var(--color-dark)]"
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

        {/* Mobile Menu SLIDE DOWN */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="lap:hidden overflow-hidden border-t border-[var(--color-neutral-300)] bg-[var(--color-white)] backdrop-blur-md rounded-b-2xl shadow-[0_6px_12px_-4px_rgba(0,0,0,0.06)]"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block border-t border-[var(--color-neutral-200)] text-base font-medium text-[var(--color-neutral-700)] px-2 py-2 rounded-md hover:bg-[var(--color-neutral-100)]"
                    onClick={(e) => handleScrollTo(e, l.href)}
                  >
                    {l.label}
                  </a>
                ))}

                <Button
                  variant="whatsappLight"
                  className="items-center"
                  onClick={() =>
                    window.open("https://wa.me/2347012425718", "_blank")
                  }
                >
                  <FaWhatsapp className="mr-2 text-green-500" />
                  Chat Me
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
