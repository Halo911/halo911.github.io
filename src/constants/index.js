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
  java,
  jira,
  motion,
  mui,
  nextjs,
  python,
  sass,
  springboot,
  paramountcommerce,
  guardiananalytics,
  recommind,
  menupalace,
  figmaclone,
  mernblog,
  devcamperapi,
  threedportfolio,
  tracalories,
  flixxmovies,
  animevault,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'works',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'MERN Developer',
    icon: web,
  },
  {
    title: 'Full-Stack Developer',
    icon: creator,
  },
  {
    title: 'Java Developer',
    icon: backend,
  },
  {
    title: 'JavaScript Developer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'jira',
    icon: jira,
  },
  {
    name: 'motion',
    icon: motion,
  },
  {
    name: 'mui',
    icon: mui,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'sass',
    icon: sass,
  },
  {
    name: 'springboot',
    icon: springboot,
  },
];

const experiences = [
  {
    title: 'Senior Java Developer',
    company_name: 'Paramount Commerce',
    icon: paramountcommerce,
    iconBg: '#FFFFFF',
    date: 'Sep 2020 - Present',
    points: [
      'Design and development of microservices with Domain Driven Design principles using the Spring Boot framework, ensuring scalability, and improving overall system reliability.',
      'Designed and implemented RESTful APIs using the latest version of Spring Boot, facilitating seamless communication between the front-end and back-end components.',
      'Developed and optimized database queries using Hibernate, improving the efficiency of data retrieval and analysis.',
      'Developed and maintained Java-based applications, focusing on both front-end and back-end components.',
      'Collaborated with cross-functional teams to deliver feature-rich applications, ensuring adherence to coding standards and best practices.',
      'Implemented authentication and authorization mechanisms, leveraging Spring Security for secure user access and data protection.',
      'Integrated CI/CD pipelines, automating testing and deployment processes to achieve faster and more reliable releases.',
      'Utilized containerization technologies such as Docker for efficient deployment and scalability, minimizing downtime and improving system reliability.',
      'Worked closely with database administrators to design and optimize database schemas, enhancing data retrieval and storage efficiency.',
      'Stayed current with emerging technologies and industry trends, incorporating relevant tools and frameworks to continually improve the development stack.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'AJC & Associates Inc',
    icon: null,
    iconBg: '#ffffff',
    date: 'Sep 2017 - Sep 2020',
    points: [
      'Developed responsive and mobile-friendly web applications, with modern JavaScript frameworks such as React, Angular, or Vue.js, ensuring a seamless user experience across various devices and screen sizes.',
      ,
      'Ensured cross-browser compatibility by rigorously testing and debugging code to deliver consistent performance across popular browsers.',
      'Collaborated closely with UX/UI designers to translate design prototypes into functional and visually appealing interfaces, prioritizing a user-centric design approach.',
      'Utilized version control systems like Git for collaborative development, working closely with back-end developers and other team members to integrate front-end components seamlessly into the overall system.',
    ],
  },
  {
    title: 'Professional Service Engineer',
    company_name: 'Guardian Analytics',
    icon: guardiananalytics,
    iconBg: '#ffffff',
    date: 'Feb 2015 - Aug 2017',
    points: [
      'Work with scripting languages, such as Perl, Awk, Bash, and Python, in order to support data analysis and model deployment',
      'Execute Perl and Python scripts and monitor the results to ensure for successful deployment of clients model.',
      'Work with Algorithm Scientist and model developer to resolve problems and clear the way for successful implementation of clients model.',
      'Working collaboratively with technical and non-technical teams (e.g., Engineering, Sales, and Network Operations)',
      'Manage multiple projects end-to-end',
    ],
  },
  {
    title: 'Java Developer',
    company_name: 'Recommind Inc',
    icon: recommind,
    iconBg: '#ffffff',
    date: 'Sep 2012 - Dec 2014',
    points: [
      'Develop a variety of data connectors to communicate with a variety of data sources (Google Drive, Google Mail, Bloomberg, etc.)',
      'Work with various APIs / web services ( SharePoint, Google Drive, OpenText, etc.)',
      'Write unit testing cases with TestNG',
      'Work with Spring framework to create RESTful API',
    ],
  },
  {
    title: 'Web Designer/Developer',
    company_name: 'MenuPalace.com',
    icon: menupalace,
    iconBg: '#ffffff',
    date: 'May 2007 - Aug 2012',
    points: [
      'Create websites in PHP with OOP development',
      'Design and create backend with MySQL and PHP',
      'Design and create frontend with HTML, CSS, and jQuery',
      'Design and create static/animated Flash banners',
      'Integrate custom design into Macromedia Flash',
    ],
  },
  {
    title: 'E-Commerce Programmer',
    company_name: 'Global Connexxions',
    icon: null,
    iconBg: '#ffffff',
    date: 'Apr 1999 - Apr 2007',
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Figma Clone',
    description:
      'Use Liveblocks to demonstrate some real-world features of live collaborations that may apply to any application. Features include Multi Cursors, Cursor Chat, and Reactions, Active Users, Comment Bubbles, Freeform Drawing, Undo/Redo, History, Keyboard Actions, etc.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Liveblocks',
        color: 'blue-text-gradient',
      },
      {
        name: 'Fabric.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Shadcn',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'blue-text-gradient',
      },
    ],
    image: figmaclone,
    source_code_link: 'https://github.com/Halo911/figma_clone',
    demo_link: 'https://figma-clone-hyju.onrender.com/',
  },
  {
    name: 'MERN Blog',
    description:
      'A full stack MERN blog project that demonstrates CRUD operations in managing property listings using MongoDB. Featuring advanced authentication using JSON Web Tokens (JWT), and seamlessly integrate Google OAuth for a smooth login experience, advanced search functionality that allow user to filter listings by title, apply sorting options, and efficiently limit search results.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'BcryptJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Json Webtoken',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongoose',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux Toolkit',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'blue-text-gradient',
      },
      {
        name: 'Flowbite React',
        color: 'blue-text-gradient',
      },
    ],
    image: mernblog,
    source_code_link: 'https://github.com/Halo911/mern-blog',
    demo_link: 'https://mern-blog-w6je.onrender.com/',
  },
  {
    name: 'DevCamper Api',
    description:
      'A comprehensive backend API that interacts with MongoDB not only provides CRUD Restful API operations, but also implements authentication, roles and permissions, password reset tokens, email functionality, etc.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongoose',
        color: 'blue-text-gradient',
      },
      {
        name: 'Express',
        color: 'blue-text-gradient',
      },
      {
        name: 'Bcryptjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Json Webtoken',
        color: 'blue-text-gradient',
      },
      {
        name: 'XSS-Lean',
        color: 'blue-text-gradient',
      },
      {
        name: 'Cors',
        color: 'blue-text-gradient',
      },
    ],
    image: devcamperapi,
    source_code_link: 'https://github.com/Halo911/devcamper-api',
    demo_link: 'https://devcamper-api-t2qg.onrender.com/#Bootcamps',
  },
  {
    name: '3D Portfolio',
    description:
      'A cool 3D website brings a fun user experience with interactive navigation to a portfolio site.Using "react-three-fiber", a react renderer for Threejs, multiple 3D three.js elements are rendered and interact with the user in the same canvas, allows endless fun and possibilities to websites developments.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Three.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Email.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'React Icons',
        color: 'blue-text-gradient',
      },
      {
        name: 'Vertical Timeline',
        color: 'blue-text-gradient',
      },
    ],
    image: threedportfolio,
    source_code_link: 'https://github.com/Halo911/3d_portfolio',
    demo_link: 'https://threed-portfolio-eijv.onrender.com/',
  },
  {
    name: 'Calories Tracker',
    description:
      'A simple calories tracking system build with Vanilla Javascript, Bootstrap and Fontawesome. This app allows user to not only do CRUD operations but also to filter items and track their daily meals and workouts, and persist data in local storage. This site is designed responsively for various devices.',
    tags: [
      {
        name: 'Vanilla Javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Fontawesome',
        color: 'blue-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'blue-text-gradient',
      },
    ],
    image: tracalories,
    source_code_link: 'https://github.com/Halo911/tracalories-webpack',
    demo_link: 'https://tracalories-webpack.onrender.com/',
  },
  {
    name: 'Flixx Movies',
    description:
      'A simple movies information showcase site build with Vanilla Javascript, Swiper and Fontawesome. This site fetches data from TheMovieDB API to display movies and TV shows informations. It has functionalities like search, custom alert, and pagination, etc. This site is designed responsively for various devices.',
    tags: [
      {
        name: 'Vanilla Javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Fontawesome',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swiper.js',
        color: 'blue-text-gradient',
      },
    ],
    image: flixxmovies,
    source_code_link: 'https://github.com/Halo911/flixx-app',
    demo_link: 'https://flixx-app-ge6z.onrender.com/',
  },
  {
    name: 'Anime Vault',
    description:
      'A NextJS server side app built with server actions, infinite scroll & Framer Motion animations. By using server actions, less client side code is shipped, offloading the burden of processing client data, which then pages will load faster and respond better, and favored for search engines. This will improve overall user experiences. This site is designed responsively for various devices.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Framer Motion',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'blue-text-gradient',
      },
    ],
    image: animevault,
    source_code_link: 'https://github.com/Halo911/anime_vault',
    demo_link: 'https://anime-vault.onrender.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
