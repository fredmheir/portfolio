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
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Software Development"
      ],
    },
    {
      title: "Developer Intern",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2022 - August 2022",
      points: [
        "Software development internship"
      ],
    },
  ];
  
  const testimonials = [
  ];
  
  const projects = [
  ];
  
  export { services, technologies, experiences, testimonials, projects };