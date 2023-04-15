import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "Delivery to any point",
    icon: web,
  },
  {
    title: "Excellent quality",
    icon: mobile,
  },
  {
    title: "Super fast delivery",
    icon: backend,
  },
  {
    title: "Many happy customers",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Stage 1",
    company_name: "Material preparation",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Cumque, mollitia porro temporibus quasi et sint incidunt.",
      "adipisci praesentium doloribus dolor enim ex accusantium at nihil nostrum!",
      "Delectus suscipit voluptate maiores.",
    ],
  },
  {
    title: "Stage 2",
    company_name: "Preparation of equipment",
    icon: tesla,
    iconBg: "#383E56",
    date: "",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Cumque, mollitia porro temporibus quasi et sint incidunt.",
      "adipisci praesentium doloribus dolor enim ex accusantium at nihil nostrum!",
      "Delectus suscipit voluptate maiores.",
    ],
  },
  {
    title: "Stage 3",
    company_name: "Start of production",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Cumque, mollitia porro temporibus quasi et sint incidunt.",
      "adipisci praesentium doloribus dolor enim ex accusantium at nihil nostrum!",
      "Delectus suscipit voluptate maiores.",
    ],
  },
  {
    title: "Stage 4",
    company_name: "Finishing touches",
    icon: meta,
    iconBg: "#383E56",
    date: "",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Cumque, mollitia porro temporibus quasi et sint incidunt.",
      "adipisci praesentium doloribus dolor enim ex accusantium at nihil nostrum!",
      "Delectus suscipit voluptate maiores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jacket",
    description:
      "350 and 800 nmtons",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "/",
  },
  {
    name: "Sockets",
    description:
      "350 and 800 nmtons",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "/",
  },
  {
    name: "Epee",
    description:
      "Handle and fencing pistol ( epee handle )",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "/",
  },
];

export { services, technologies, experiences, testimonials, projects };
