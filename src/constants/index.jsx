import { FaShopify, FaWordpress } from "react-icons/fa";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "react-icons/ri";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Harry Sunkanmi",
  role: "Full Stack Developer",
  subheading:
    "With 4 years of full-stack development experience, I build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
};

export const PROJECTS = [

  {
    id: 1,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["React", "Node.js", "MongoDB", "Postman", "Express", "TailwindCss"],
    imgSrc: project6,
    link: "https://fullstack-course-sellingapp.vercel.app",
  },

  {
    id: 2,
    title: "Blog Platform",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Typescript", "Astro" , "Sanity",  "Next.js" ,"PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://skharry-astroblog.netlify.app",
  },

  {
    id: 3,
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, and an integrated payment gateway.",
    techStack: ["Html", "Css", "Javascript"],
    imgSrc: project1,
    link: "https://skharryshopping-website.netlify.app",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Shopify",
    icon: <FaShopify className="text-green-600" />,
  },
  {
    name: "WordPress",
    icon: <FaWordpress className="text-blue-600" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Full Stack Developer",
    company: "NTECH.",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    yearRange: "2022 - 2023",
    role: "Frontend Developer",
    company: "NTECH",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Industrial Mathematics",
    institution: "Federal University of Technology",
    duration: "2020 - 2024",
    description:
      "Graduated with honors in Mathematics, focusing on algorithms, algebras, and statictics.",
  },
  {
    id: 2,
    degree: "Embedded Systems",
    institution: "ITD Canada",
    duration: "2023 - 2024",
    description:
      "Focused on advanced software engineering concepts, Backend development system design, and AI technologies. Completed a series of backend applications using Node.js Csharp, Express and MongoDB.",
  },
  {
    id: 3,
    degree: "Certified React Developer",
    institution: "Udacity Nanodegree",
    duration: "2024",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with Harry was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
