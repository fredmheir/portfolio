import {
    fullstack,
    languages,
    databases,
    graphics,
    javascript,
    reactjs,
    git,
    cpp,
    java,
    linux,
    mysql,
    postgresql,
    ruby,
    docker,
    deloitte,
    desjardins,
    matrox,
    shopify,
    inventorytracker,
    positivenews,
    wiki,
    search,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "tech",
      title: "Technologies",
    },
  ];
  
  const services = [
    {
      title: "Video & Graphics Software Development",
      icon: languages,
    },
    {
      title: "Full Stack Software Development",
      icon: graphics,
    },
    {
      title: "Computer Science Degree",
      icon: fullstack,
    },
    {
      title: "CPA",
      icon: databases,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Ruby",
      icon: ruby,
    },
    {
      name: "Java",
      icon: java,
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
      name: "git",
      icon: git,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Linux",
      icon: linux,
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
      company_name: "Deloitte",
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
    {
      name: "Inventory Tracker",
      description:
        "Inventory tracking web service that provides the following information for each item stored in the inventory: name, quantity, and cost.",
      tags: [
        {
          name: "java",
          color: "text-white",
        },
        {
          name: "javascript",
          color: "text-white",
        },
        {
          name: "postgresql",
          color: "text-white",
        },
      ],
      image: inventorytracker,
      source_code_link: "https://github.com/fredmheir/inventorytracker",
    },
    {
      name: "Positive News",
      description:
        "Web application displaying positive news, developped as part of McHacks Hackathon.",
      tags: [
        {
          name: "python",
          color: "text-white",
        },
        {
          name: "javascript",
          color: "text-white",
        },
        {
          name: "flask",
          color: "text-white",
        },
      ],
      image: positivenews,
      source_code_link: "https://github.com/lucmaxwell/McHacks-2021",
    },
    {
      name: "Wiki",
      description:
        "A Wikipedia-like encyclopedia, where users can create and edit articles using Markdown syntax",
      tags: [
        {
          name: "python",
          color: "text-white",
        },
        {
          name: "html",
          color: "text-white",
        },
        {
          name: "css",
          color: "text-white",
        },
      ],
      image: wiki,
      source_code_link: "https://github.com/fredmheir/wiki",
    },
    {
      name: "Search",
      description:
        "Search is a front-end for Google Search, Google Image Search, and Google Advanced Search. Its intent is to reproduce Google Search functionalities.",
      tags: [
        {
          name: "html",
          color: "text-white",
        },
        {
          name: "css",
          color: "text-white",
        },
        {
          name: "VSCode",
          color: "text-white",
        },
      ],
      image: search,
      source_code_link: "https://github.com/fredmheir/search",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };