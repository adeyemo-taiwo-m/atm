import { FaSearch, FaPaintBrush, FaCode, FaCheckCircle } from "react-icons/fa";
// React Icons
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiAdobephotoshop,
  SiFramer,
  SiSupabase,
  SiNextdotjs,
} from "react-icons/si";
export const projectsData = [
  {
    title: "NexCity Realty",
    description:
      "Modern real estate platform for browsing, exploring, and managing property listings with a clean and intuitive interface.",
    role: "UI/UX Design & Frontend Development",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    image: "/nexcity.png",
    liveLink: "https://nex-city-reality-dashboard.vercel.app/",
    designLink:
      "https://www.behance.net/gallery/236814175/NextCity-Realty-Dashboard",
  },
  {
    title: "Optopcakes & Tools",
    description:
      "Online bakery platform that lets customers browse products, view details, and place orders easily and conveniently.",
    role: "UI/UX Design & Frontend Development",
    techStack: ["Figma", "React", "Tailwind CSS"],
    image: "/optopcakes.png",
    liveLink: "https://optopcakes.vercel.app/",
    designLink: "https://www.behance.net/gallery/236814881/Optopcakes",
  },
  {
    title: "Weather App",
    description:
      "Responsive weather application displaying real-time conditions, forecasts, and detailed climate information for any location.",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
    image: "/weather.jpg",
    liveLink: "https://weather-app-fm30-eta.vercel.app/",
    designLink: "",
  },
  {
    title: "Kanour Digital Systems",
    description:
      "Enterprise showcase platform highlighting expertise in workflow automation, custom applications, and fintech digital solutions.",
    role: "Frontend Developer / UI Engineer",
    techStack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    image: "/kanour.png",
    liveLink: "https://kanour.com",
    designLink: "",
  },
  {
    title: "Delite02 Logistics",
    description:
      "Modern logistics platform offering fast delivery, same-day service, interstate shipping, real-time tracking, and POD across Nigeria.",
    role: "Frontend Developer / UI Engineer",
    techStack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    image: "/delite02-logistics.svg",
    liveLink: "https://www.delite02-logistics.com",
    designLink: "",
  },
  {
    title: "NexCity Realty Landing Page",
    description:
      "Clean and modern landing page for real estate services, featuring property showcases and key information.",
    role: "UI/UX Design",
    techStack: ["Figma", "UI/UX Design", "Responsive Design"],
    image: "/nexcity-landing.png",
    liveLink: "https://nextcity-realestate.onrender.com",
    designLink:
      "https://www.behance.net/gallery/238470147/NexCity-Landing-Page",
  },
];

export const steps = [
  {
    icon: <FaSearch className="hover:text-indigo-500 text-neutral-500" />,
    title: "Research & Understanding",
    description:
      "I study the brand, audience, and goals to ensure every decision solves a real problem.",
  },
  {
    icon: <FaPaintBrush className="hover:text-pink-500 text-neutral-500  " />,
    title: "Design & Wireframing",
    description:
      "I create wireframes and prototypes in Figma to visualize the experience before development.",
  },
  {
    icon: <FaCode className="hover:text-green-500 text-neutral-500  " />,
    title: "Development & Implementation",
    description:
      "I bring designs to life using React, Tailwind CSS, and JavaScript with a focus on performance and responsiveness.",
  },
  {
    icon: <FaCheckCircle className="hover:text-yellow-500 text-neutral-500" />,
    title: "Testing & Feedback",
    description:
      "I test across devices, refine interactions, and iterate based on real feedback.",
  },
];

export const testimonials = [
  {
    name: "Michael Thompson",
    text: "I hired him to redesign our company website, and the results exceeded my expectations. The attention to detail in both UI and UX was outstanding!",
  },
  {
    name: "Sophia Martinez",
    text: "Working with Taiwo was seamless. They understood our vision and turned it into a website that’s not only beautiful but highly functional.",
  },
  {
    name: "Daniel Kim",
    text: "From concept to launch, the process was professional and smooth. The design creativity and coding expertise really made our product shine.",
  },
  {
    name: "Olivia Brown",
    text: "Taiwo delivered an amazing responsive design that works perfectly on all devices. Communication was clear, and deadlines were met without stress.",
  },
  {
    name: "Liam Patel",
    text: "I’m really impressed by Taiwo's problem-solving skills and attention to user experience. Our site now feels modern and intuitive thanks to his work.",
  },
];

export const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#000000",
  },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717" },
  { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
  { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF" },
];
