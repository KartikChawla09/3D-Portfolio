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
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "DSA Enthusiast",
    icon: backend,
  },
  {
    title: "Video Editor",
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
    name: "React JS",
    icon: reactjs,
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
];

const experiences = [
  {
    title: "Technical Interviewer",
    company_name: "Acciojob",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2022 - Sep 2022",
    points: ["Took interviews of 200+ candidates aspiring to join Acciojob."],
  },
  {
    title: "Video Editor",
    company_name: "Crosslinks",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Worked as a core member of social media team of Crosslinks working on their handle crosslinks.nsut",
      "Shot and Edited videos for the Instagram page which have 70k+ views collectively.",
      "Organised our flagship events like Alumni Meet, NSUTThon which saw participation of 2k+ students of the college.",
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
    name: "GPT-3 Clone",
    description: "Made a frontend clone of the GPT3 website using ReactJS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node,js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/KartikChawla09/GPT-3-Clone",
  },
  {
    name: "EdgeLedger Website",
    description:
      "Static website along with Contact Us form and Map using Google Maps to make search functionality viable.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "google-maps-api",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/KartikChawla09/EdgeLedger-Website",
  },
  {
    name: "Hotel Website",
    description:
      "A comprehensive hotel landing page that allows users to see the details of the hotel.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/KartikChawla09/Hotel-Website",
  },
];

export { services, technologies, experiences, testimonials, projects };
