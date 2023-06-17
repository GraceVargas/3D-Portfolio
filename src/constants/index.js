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
    bootstrap,
    tailwind,
    asp,
    sass,
    git,
    alot,
    mater_dei,
    job_finder,
    ahorradas,
    generador_claves,
    fixo,
    threejs,
    film_social,
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
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Human Resources",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "ASP",
      icon: asp,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Officenet S.A.",
      icon: alot,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Present",
      points: [
        "Maintain and optimize the front-end of the website alot.com.ar.",
        "Participate in design and architecture definitions.",
        "Classic ASP, SQL Server, Javascript, HTML and CSS.",
        "Use of ClickUp as an agile methodology.",
      ],
    },
    {
      title: "Sr. Analyst of Personnel Administration and Payroll",
      company_name: "Officenet S.A.",
      icon: alot,
      iconBg: "#E6DEDD",
      date: "Apr 2018 - Sept 2022",
      points: [
          "Ensure a correct liquidation of assets and profits - end to end process (300 employees).",
          "Prepare accounting entries and presentation of social security charges and SICORE.",
          "Prepare accounts and financial reports as required.",
          "Administrative management of prepaid medicine and medical insurance, union payments, ART and legal",
      ],
    },
    {
      title: "Human Resources General Analyst",
      company_name: "Mater Dei Sanatorium",
      icon: mater_dei,
      iconBg: "#383E56",
      date: "Jan 2015 - Apr 2018",
      points: [
        "Ensure a correct liquidation of assets and profits - end to end process.",
        "Administrative management of prepaid medicine and medical insurance, union payments, ART and legal",
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
      name: "Conectadas",
      description:
        "Social network where you can search and post movies to recommend, see the posts of the followed friends and leave comments on them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: film_social,
      source_code_link: "https://github.com/GraceVargas/Social-Network",
      deploy_link: "https://gracevargas.github.io/Social-Network/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to create and modify job openings, and also to search available jobs based on their current location, position and seniorities.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: job_finder,
      source_code_link: "https://github.com/GraceVargas/Job-finder",
      deploy_link: "https://gracevargas.github.io/Job-finder/",
    },
    {
      name: "Ahorradas",
      description:
        "Application to manage income and budget, being able to load transactions divided by categories and generating reports automatically.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ahorradas,
      source_code_link: "https://github.com/GraceVargas/Ahorradas",
      deploy_link: "https://gracevargas.github.io/Ahorradas/",
    },
    {
      name: "Paswword generator",
      description:
        "Creates random and secure passwords based on parameters set by you. Parameters include password length, rules and types of character.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: generador_claves,
      source_code_link: "https://github.com/GraceVargas/Generador-de-claves",
      deploy_link: "https://gracevargas.github.io/Generador-de-claves/",
    },
    {
      name: "Fixo Electrónica Service",
      description:
        "Fixo Electrónica is a web page that offers electronic and computer repair service. Including details of services, contact form and google reviews.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fixo,
      source_code_link: "https://github.com/GraceVargas/fixo.pc",
      deploy_link: "https://gracevargas.github.io/fixo.pc/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };