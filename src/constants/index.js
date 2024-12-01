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
    nextjs,
    film_social,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Nav_About",
    },
    {
      id: "work",
      title: "Nav_Work",
    },
    {
      id: "contact",
      title: "Nav_Contact",
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
      name: "Next JS",
      icon: nextjs,
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
      name: "Classic ASP",
      icon: asp,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Exp_1_title",
      company_name: "Officenet S.A.",
      icon: alot,
      iconBg: "#E6DEDD",
      date: "Exp_1_date",
      points: [
        "Exp_1_point_1",
        "Exp_1_point_2",
        "Exp_1_point_3",
        "Exp_1_point_4",
        "Exp_1_point_5",
      ],
    },
    {
      title: "Exp_2_title",
      company_name: "Officenet S.A.",
      icon: alot,
      iconBg: "#E6DEDD",
      date: "Exp_2_date",
      points: [
          "Exp_2_point_1",
          "Exp_2_point_2",
          "Exp_2_point_3",
          "Exp_2_point_4",
      ],
    },
    {
      title: "Exp_3_title",
      company_name: "Mater Dei",
      icon: mater_dei,
      iconBg: "#383E56",
      date: "Exp_3_date",
      points: [
        "Exp_3_point_1",
        "Exp_3_point_2",
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
        "Project_1_desc",
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
        "Project_2_desc",
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
        "Project_3_desc",
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
      name: "Password generator",
      description:
        "Project_4_desc",
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
        "Project_5_desc",
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