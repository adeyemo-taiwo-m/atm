import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";

const socialLinks = [
  { href: "mailto:adyemotaiwom999@gmail.com", icon: <FaEnvelope size={28} /> },
  {
    href: "https://www.linkedin.com/in/adeyemo-taiwo-m-035425284/",
    icon: <FaLinkedin size={28} />,
  },
  { href: "https://github.com/adeyemo-taiwo-m", icon: <FaGithub size={28} /> },
  {
    href: "https://instagram.com/atmdesigns.dev",
    icon: <FaInstagram size={28} />,
  },
  { href: "https://x.com/atmdesigns_dev", icon: <SiX size={28} /> },
];

export default function ContactIcons() {
  return (
    <div className="flex justify-center  mb-12 text-gray-200">
      {socialLinks.map((s, i) => (
        <a
          key={i}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
        >
          <div className="hover:scale-110 transition-transform duration-300 text-white">
            {s.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
