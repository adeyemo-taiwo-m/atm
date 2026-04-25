import { FaSearch, FaPaintBrush, FaCode, FaCheckCircle, FaRocket, FaMap, FaLayerGroup, FaPencilRuler, FaUsersCog, FaTools, FaLink } from "react-icons/fa";
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
    mode: "all",
    impact: "Streamlined property discovery with an intuitive dashboard."
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
    mode: "all",
    impact: "Full e-commerce flow for a Lagos bakery."
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
    mode: "development",
    impact: "Real-time weather data integration with seamless UX."
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
    mode: "development",
    impact: "High-performance enterprise solution for fintech automation."
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
    mode: "development",
    impact: "Real-time logistics tracking across Nigeria."
  },
  {
    title: "NexCity Realty Landing Page",
    description:
      "Clean and modern landing page for real estate services, featuring property showcases and key information.",
    role: "UI/UX Design & Frontend Development",
    techStack: ["Figma", "UI/UX Design", "HTML", "CSS"],
    image: "/nexcity-landing.png",
    liveLink: "https://nextcity-realestate.onrender.com",
    designLink:
      "https://www.behance.net/gallery/238470147/NexCity-Landing-Page",
    mode: "design",
    impact: "Reduced bounce rate for real estate listings."
  },
  {
    title: "CampusKobo - Student Finance App",
    description:
      "A personal finance app that helps university students track expenses, manage budgets and hit savings goals in under 5 seconds a day.",
    role: "UI/UX Design",
    techStack: ["Figma", "UI/UX Design", "Responsive Design"],
    image: "/campus-kobo.png.png",
    designLink:
      "https://www.behance.net/gallery/247651931/CampusKobo-Mobile-App",
    mode: "design",
    impact: "Simplified financial tracking for university students."
  },
];

export const designSteps = [
  {
    icon: <FaSearch />,
    title: "Discovery & Research",
    description: "I study the users, brand, and competitive landscape before touching Figma.",
  },
  {
    icon: <FaMap />,
    title: "Information Architecture",
    description: "I map out user journeys and define the content hierarchy.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Wireframing",
    description: "Lo-fi sketches in Figma to lock in layout and flow before visual design.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Visual Design",
    description: "High-fidelity UI with a defined design system — colors, type, spacing, components.",
  },
  {
    icon: <FaUsersCog />,
    title: "Handoff & Iteration",
    description: "Annotated specs delivered to developers. I stay involved through QA.",
  },
];

export const devSteps = [
  {
    icon: <FaSearch />,
    title: "Requirement Analysis",
    description: "I break down the spec into components, data flow, and edge cases.",
  },
  {
    icon: <FaTools />,
    title: "Architecture Planning",
    description: "I define the folder structure, state management approach, and API contracts.",
  },
  {
    icon: <FaCode />,
    title: "Component Development",
    description: "I build reusable, accessible components with Tailwind and React.",
  },
  {
    icon: <FaLink />,
    title: "Integration & Testing",
    description: "APIs wired in, cross-browser tested, Lighthouse performance checked.",
  },
  {
    icon: <FaRocket />,
    title: "Deployment & Handover",
    description: "Deployed on Vercel/Netlify with documentation and handover notes.",
  },
];

export const testimonials = [
  {
    name: "Michael Thompson",
    text: "I hired him to redesign our company website, and the results exceeded my expectations. The attention to detail in both UI and UX was outstanding!",
    mode: "design"
  },
  {
    name: "Sophia Martinez",
    text: "Working with Taiwo was seamless. They understood our vision and turned it into a website that’s not only beautiful but highly functional.",
    mode: "all"
  },
  {
    name: "Daniel Kim",
    text: "From concept to launch, the process was professional and smooth. The design creativity and coding expertise really made our product shine.",
    mode: "all"
  },
  {
    name: "Olivia Brown",
    text: "Taiwo delivered an amazing responsive design that works perfectly on all devices. Communication was clear, and deadlines were met without stress.",
    mode: "development"
  },
  {
    name: "Liam Patel",
    text: "I’m really impressed by Taiwo's problem-solving skills and attention to user experience. Our site now feels modern and intuitive thanks to his work.",
    mode: "development"
  },
];

export const skillGroups = [
  {
    label: "Design Tools",
    skills: [
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
    ]
  },
  {
    label: "Core Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    ]
  },
  {
    label: "Frameworks",
    skills: [
      { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF" },
    ]
  },
  {
    label: "Backend & Tools",
    skills: [
      { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
      { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    ]
  }
];
