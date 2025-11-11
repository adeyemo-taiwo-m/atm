import { FaSearch, FaPaintBrush, FaCode, FaCheckCircle } from "react-icons/fa";

export const projectsData = [
  {
    title: "NexCity Realty",
    description:
      "A modern real estate web app for exploring and managing property listings.",
    role: "UI/UX Design & Frontend Development",
    techStack: ["React", "Javascript", "Tailwind CSS"],
    image: "/nexcity.png",
    liveLink: "https://nexcity-demo.com",
    designLink: "https://www.behance.net/nexcity",
  },
  {
    title: "Optopcakes & Tools",
    description:
      "A web app for managing and ordering bakery items, making it easier for customers to explore products and place orders online.",
    role: "UI/UX Design & Frontend Development",
    techStack: ["Figma", "React", "Tailwind CSS"],
    image: "/optopcakes.png",
    liveLink: "https://optopcakes-demo.com", // replace with your actual live link
    designLink: "https://www.behance.net/optopcakes", // replace with actual Behance link
  },
  {
    title: "NexCity Realty Landing Page",
    description:
      "A modern, responsive landing page for a real estate platform showcasing property listings and services.",
    role: "UI/UX Design",
    techStack: ["Figma", "UI/UX Design", "Responsive Design"],
    image: "/nexcity-landing.png", // make sure this image exists in your /public/projects folder
    liveLink: "https://nexcity-demo.com",
    designLink: "https://www.behance.net/nexcity-landing",
  },
  {
    title: "Weather App",
    description:
      "A responsive web app that shows real-time weather updates, forecasts, and climate details for any location.",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
    image: "/weather.jpg", // make sure this image exists in your project folder
    liveLink: "https://weather-app-demo.com", // replace with your actual live link
    designLink: "https://www.behance.net/weatherapp", // replace with your actual Behance link
  },
];

export const steps = [
  {
    icon: (
      <FaSearch className="hover:text-indigo-500 text-neutral-500 w-10 h-10" />
    ),
    title: "Research & Understanding",
    description:
      "I study the brand, audience, and goals to ensure every decision solves a real problem.",
  },
  {
    icon: (
      <FaPaintBrush className="hover:text-pink-500 text-neutral-500 w-10 h-10" />
    ),
    title: "Design & Wireframing",
    description:
      "I create wireframes and prototypes in Figma to visualize the experience before development.",
  },
  {
    icon: (
      <FaCode className="hover:text-green-500 text-neutral-500  w-10 h-10" />
    ),
    title: "Development & Implementation",
    description:
      "I bring designs to life using React, Tailwind CSS, and JavaScript with a focus on performance and responsiveness.",
  },
  {
    icon: (
      <FaCheckCircle className="hover:text-yellow-500 text-neutral-500 w-10 h-10" />
    ),
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
