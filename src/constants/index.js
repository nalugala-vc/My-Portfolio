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
  laravel,
  python,
  kotlin,
  java,
  php,
  solutech,
  freelance,
  waromasms,
  bitiagency,
  mytumba,
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
    title: "Kotlin Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
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
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Kotlin",
    icon: kotlin,
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
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "SOLUTECH",
    icon: solutech,
    iconBg: "#383E56",
    date: "September 2022",
    points: [
      "Developing and maintaining web applications using laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelancer",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "January 2023",
    points: [
      "Developing and maintaining web and mobile applications",
      "Deploying the developed web and mobile apps.",
      "Designing exceptional user friendly UI components",
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
    name: "Waroma School Management System",
    description:
      "Waroma is a full stack school management system with functionalities for the students, teachers, and course administrators. ",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "Blade",
        color: "pink-text-gradient",
      },
    ],
    image: waromasms,
    source_code_link: "https://github.com/nalugala-vc/waroma-sms",
  },
  {
    name: "Biti Agency",
    description:
      "BitiAgency is a life insurance website that I developed as a freelance project. The website is designed specifically for Kenyans, and it offers a convenient way to purchase life insurance policies online.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: bitiagency,
    source_code_link: "https://github.com/nalugala-vc/BitiAgency",
  },
  {
    name: "Mytumba",
    description:
      "Mytumba is a full-stack ecommerce website that I developed as a freelance project. The website is designed specifically for Kenyans and offers a wide range of products, including clothing, accessories, electronics, and more.",
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
    image: mytumba,
    source_code_link: "https://github.com/nalugala-vc/Mytumba-Ecommerce-Laravel",
  },
];

export { services, technologies, experiences, testimonials, projects };
