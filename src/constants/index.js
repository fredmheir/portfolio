import {
    fullstack,
    languages,
    databases,
    graphics,
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
    deloitte,
    desjardins,
    matrox,
    shopify,
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
      title: "C++, Java, Ruby, Python",
      icon: languages,
    },
    {
      title: "Video & Graphics Developer",
      icon: graphics,
    },
    {
      title: "Full Stack Web Developement",
      icon: fullstack,
    },
    {
      title: "Databases",
      icon: databases,
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
      title: "Developer",
      company_name: "Matrox",
      icon: matrox,
      iconBg: "#e6e9ed",
      date: "March 2023 - Present",
      tools: ["C++, Bash, Ubuntu"],
      points: [
        "Built features and fixed bugs in the video codec using C++",
        "Enhanced productivity by writing Bash scripts to automate repetitive tasks"
      ],
    },
    {
      title: "Developer Intern",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#e6e9ed",
      date: "May 2022 - August 2022",
      tools: ["Ruby, Rails, MiniTest, GraphQL, JavaScript, Jest, React, HTML, CSS, MySQL, Bootstrap"],
      points: [
        "Built features across several repositories with Ruby, JavaScript and GraphQL",
        "Updated millions of merchants’ data rows through backfills on MySQL database",
        "Developed banners displayed to merchants on their admin page, using Ruby & Rails",
        "Upgraded and secured a deprecated internal tooling pages used frequently by my team and others, using Ruby ERB, Rails, HTML, CSS and Bootstrap"
      ],
    },
    {
      title: "Developer Intern",
      company_name: "Desjardins",
      icon: desjardins,
      iconBg: "#e6e9ed",
      date: "May 2021 - August 2021",
      tools: ["Java, Spring, Python, Postman, PostgreSQL, Docker"],
      points: [
        "Collaborated in the design and development of a mobile application from scratch with goal to help young adults become financially autonomous",
        "Built Java RESTful APIs, allowing data transfer between the application services, using Spring framework and PostgreSQL database",
        "Implemented login and API request authentication using Auth0",
        "Designed the backend architecture using PlantUML diagrams",
        "Presented our project in front of 300+ employees as well as Desjardins’ CEO"
      ],
    },
    {
      title: "Senior & Staff Accountant",
      company_name: "Desjardins",
      icon: deloitte,
      iconBg: "#e6e9ed",
      date: "Jan 2018 - August 2020",
      tools: ["CPA"],
      points: [
        "Showcased autonomy and communication skills by coordinating mandates with clients",
        "Supervised and mentored the juniors and summer interns on my teams"
      ],
    },
  ];
  
  const testimonials = [
  ];
  
  const projects = [
  ];
  
  export { services, technologies, experiences, testimonials, projects };