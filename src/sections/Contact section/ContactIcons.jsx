import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const socialLinks = [
  { href: "mailto:youremail@gmail.com", icon: <FaEnvelope size={28} /> },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: <FaLinkedin size={28} />,
  },
  { href: "https://github.com/yourusername", icon: <FaGithub size={28} /> },
  {
    href: "https://instagram.com/yourusername",
    icon: <FaInstagram size={28} />,
  },
  { href: "https://twitter.com/yourusername", icon: <FaTwitter size={28} /> }, // X
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
