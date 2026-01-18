import { ExperienceItem, Project, SkillCategory, TechStackItem } from './models';

export const TECH_STACK: TechStackItem[] = [
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Spring Boot',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  },
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  { name: 'Git', icon: 'https://api.iconify.design/logos:git-icon.svg' },
  { name: 'PostgreSQL', icon: 'https://api.iconify.design/logos:postgresql.svg' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Backend Development',
    icon: 'dns',
    style: {
      iconBg: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      badgeBg: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    },
    items: [
      {
        name: 'Java',
        percentage: 90,
        description: 'Robust enterprise-grade application development.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'Spring Boot',
        percentage: 85,
        description: 'Microservices and rapid application framework.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      },
      {
        name: 'Node.js',
        percentage: 75,
        description: 'Asynchronous event-driven JavaScript runtime.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Python',
        percentage: 70,
        description: 'Versatile language for automation and logic.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
    ],
  },
  {
    title: 'Frontend Development',
    icon: 'web',
    style: {
      iconBg: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
    },
    items: [
      {
        name: 'Angular',
        percentage: 90,
        description: 'Powerful component-based web framework.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      },
      {
        name: 'React',
        percentage: 80,
        description: 'Declarative library for user interfaces.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'TypeScript',
        percentage: 85,
        description: 'Statically typed superset of JavaScript.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'JavaScript',
        percentage: 90,
        description: 'The core language of modern web.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    style: {
      iconBg: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
      badgeBg: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    },
    items: [
      {
        name: 'MySQL',
        percentage: 85,
        description: 'Reliable relational database system.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'PostgreSQL',
        percentage: 80,
        description: 'Advanced object-relational database.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MongoDB',
        percentage: 75,
        description: 'Flexible NoSQL document database.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'construction',
    style: {
      iconBg: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
      badgeBg: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
    },
    items: [
      {
        name: 'Git',
        percentage: 95,
        description: 'Version control for tracking code.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'Firebase',
        percentage: 90,
        description: 'Backend platform for web & mobile.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'MusicApp',
    description:
      'Developed a full-stack music streaming platform that allows users to stream music, manage playlists, and upload songs. Features a personalized listening experience with a responsive UI.',
    tags: ['ReactJs', 'NodeJs', 'Firebase', 'MongoDB'],
    icon: 'headphones',
    links: {
      github: 'https://github.com/matin676/music-app',
      demo: 'https://apnaplayer.netlify.app/',
    },
    style: {
      iconBg: 'bg-gradient-to-br from-blue-600 to-blue-400 shadow-blue-500/25',
      buttonBg: 'bg-primary hover:bg-primary-dark shadow-primary/25',
      titleHover: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
      text: 'text-blue-600 dark:text-blue-400',
    },
  },
  {
    title: 'Personal Portfolio',
    description:
      'Designed and built a responsive personal portfolio to showcase skills and projects. Implemented modern animations and a clean UI to highlight professional experience.',
    tags: ['ReactJs', 'CSS', 'EmailJs'],
    icon: 'person',
    links: {
      github: 'https://github.com/matin676/Myportfolio',
      demo: 'https://matinimam.netlify.app/',
    },
    style: {
      iconBg: 'bg-gradient-to-br from-violet-600 to-violet-400 shadow-violet-500/25',
      buttonBg: 'bg-accent hover:bg-accent-dark shadow-accent/25',
      titleHover: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
      text: 'text-violet-600 dark:text-violet-400',
    },
  },
  {
    title: 'Hangman Game',
    description:
      'Developed a responsive hangman game using React and Gemini AI. Implemented modern animations and a clean UI to highlight professional experience.',
    tags: ['ReactJs', 'CSS', 'Gemini AI'],
    icon: 'gamepad',
    links: {
      github: 'https://github.com/matin676/Hangman-Game',
      demo: 'https://hangman77.netlify.app/',
    },
    style: {
      iconBg: 'bg-gradient-to-br from-emerald-600 to-emerald-400 shadow-emerald-500/25',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25',
      titleHover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
      text: 'text-emerald-600 dark:text-emerald-400',
    },
  },
  {
    title: 'Employee Management System',
    description:
      'A comprehensive enterprise solution for managing organizational workflows, including employee records, attendance, and payroll. Features robust role-based access control and data isolation for secure management.',
    tags: ['NextJs', 'Prisma', 'MySQL', 'TypeScript'],
    icon: 'admin_panel_settings',
    links: {
      github: 'https://github.com/matin676/Employee_managment_system',
    },
    style: {
      iconBg: 'bg-gradient-to-br from-orange-600 to-orange-400 shadow-orange-500/25',
      buttonBg: 'bg-orange-600 hover:bg-orange-700 shadow-orange-600/25',
      titleHover: 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
      text: 'text-orange-600 dark:text-orange-400',
    },
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Developer',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Jan 2025 — Present',
    isCurrent: true,
    description: [
      'Developed and maintained RESTful APIs for a critical enterprise application using Java, Spring, and Spring Boot, focusing on stability and high availability.',
      'Implemented and enhanced user interface components using Angular, ensuring responsiveness and an intuitive design.',
      'Managed relational database performance in PostgreSQL, inclusive of complex query optimization.',
    ],
    tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
    icon: 'code',
    alignment: 'right',
  },
  {
    role: 'GDSC Cloud Jam Facilitator',
    company: 'Google Developer Student Club',
    period: '2023 — 24',
    isCurrent: false,
    description: [
      'Guided numerous cloud enthusiasts in completing their labs while gaining valuable knowledge and hands-on experience in cloud technologies.',
    ],
    tags: ['Cloud Computing', 'Google Cloud', 'Mentorship'],
    icon: 'cloud',
    alignment: 'left',
  },
  {
    role: 'GDSC Design Team Lead',
    company: 'Google Developer Student Club',
    period: '2022 — 23',
    isCurrent: false,
    description: [
      'Managed a team of designers, leading design projects from concept to final delivery. Successfully executed over 80+ designs.',
    ],
    tags: ['Design', 'Leadership', 'Team Management'],
    icon: 'brush',
    alignment: 'right',
  },
];
