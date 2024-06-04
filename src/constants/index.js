import {
    mobile,
    backend,
    frontops,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Front Ops",
      icon: frontops,
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
      title: "Windows Desctop Developer",
      company_name: "Mera",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2011 - Feb 2014",
      points: [
        "Sustaining and developing a windows based IP telephony client application.",
        "Working in a big enterprise project.",
        "Bugfix",
        "Implementation of the new features",
        "Working in 2 weeks sprints, with daily standups and weekly management report meetings.",
        "Our application was a part of the big environment, consisting of many client and server-side applications, services, and teams supporting\\developing them. So this work included a big amount of communication and interaction with colleagues from these teams.",
        "Working in a distributed international team, with headquarters in Canada.",
      ],
    },
    {
      title: ".NET Full Stack Developer",
      company_name: "Return On Intelligence",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2014 - Dec 2014",
      points: [
        "Full circle agile development of asp.net-based internal corporate web service.",
        "Working according to the scrum framework, participating in its ceremonies (planning, daily standups, sprint retrospective)",
        "Working in 2 weeks sprints",
        "Doing a wide range of full-stack tasks, from gathering requirements and planning to passing acceptance criteria review and deploying code to working environments",
        "Working in an international distributed team, with a headquarters in the U.S.A."
      ],
    },
    {
      title: ".NET Full Stack Developer",
      company_name: "Taxcom",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2015 - Feb 2016",
      points: [
        "Developing and sustaining b2b asp.net-based web platform.",
        "Working in a small team, fully owning its part of the platform.",
        "Working in an agile environment partially using a scrum framework.",
        "Implementing a new functionality according to business requirements.",
        "Fixing bugs.",
        "Writing unit tests covering new functionality.",
        "Working both with front-end and back-end tasks.",
        "Showcasing implemented functionality on the intercompany demos."
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Artezio",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Feb 2016 - May 2018",
      points: [
        "Full cycle development of a series of b2c web applications.",
        "Working in a small team, sometimes being the only person on the front-end side.",
        "Choosing initial front-end framework and architecture.",
        "Making HTML layouts according to the design or written requirements.",
        "Writing a client-side business logic.",
        "Writing client-side unit tests.",
        "Sustaining already released applications.",
        "Have been working with a variety of client-side frameworks and technologies, such as (jQuery, Knockout, AngularJS, Angular 2+, and React).",
        "Participating in the company's experimental internal projects in the roles of Node.js back-end developer, and Mobile React-Native developer"
      ],
    },
    {
      title: "Senior Front End Developer",
      company_name: "Spiral Scout",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jun 2018 - Oct 2020",
      points: [
        "Development of the b2b web application.",
        "Working in the big front-end team, doing a wide range of front-end tasks.",
        "Implementing new features.",
        "Analysing production crash reports and fixing bugs based on this information.",
        "Writing unit tests.",
        "Development of new components in the storybook so other developers could use them.",
        "Helping colleagues from the back-end team with Node.JS related tasks/issues.",
        "Working using the Scrum framework, with standard ceremonies but also with additional meetings for example weekly architecture meetings where we discussed topics such as technical debt, choosing technologies for the new features, revisiting current app architecture, and ways to improve it",
        "Working in a big U.S.A-based startup, being a part of an international distributed agile team.",
      ],
    },
    {
      title: "Java-Script Senior Full Stack Developer",
      company_name: "Airofit",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "NOV 2020 – Jul 2023",
      points: [
        "Working as a full-stack developer in a small agile team, doing a wide range of tasks on all levels on the application stack and at all stages of the development cycle",
        "Developing react-native based, mobile applications.",
        "Developing react/Next.js web applications.",
        "Developing node.js web api.",
        "Setting up and supporting dev-ops pipelines.",
        "Setting up and supporting azure dev-ops infrastructure. Setting up dev and prod environments",
        "Analyzing firebase crash reports and fixing bugs based on this information.",
        "Deploying web applications to dev/prod environments.",
        "Publish mobile applications in the Google Play and App Store.",
        "Working on all stages of the development process, from the initial design and architecture to deploying the app to production and supporting it there.",
        "Communication with other company departments such as marketing, sales, and support."
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };