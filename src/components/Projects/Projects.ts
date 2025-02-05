const BASE_URL = "https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com";
const GITHUB_LINK = "https://github.com/helenapedro";

export const projects = [
  {
    title: 'Minkanda: Note Taking',
    url: 'https://minkanda.mtcambrosio.com/',
    image: `${BASE_URL}/minkanda.jpg`,
    technologies: [
      'Spring ( Boot, Security, JPA )', 'Nginx', 'Logback', 'Hibernate', 
      'jasypt', 'EhCache', 'HikariCP ', 'React'
    ],
    description: `
      Minkanda is a secure, privacy-focused note-taking web application that prioritizes data confidentiality. 

      It ensures 𝗲𝗻𝗱-𝘁𝗼-𝗲𝗻𝗱 𝗲𝗻𝗰𝗿𝘆𝗽𝘁𝗶𝗼𝗻 for note titles and bodies using 𝗷𝗮𝘀𝘆𝗽𝘁, making all notes inaccessible-even 
      to the developer. By default, notes are private, with an optional feature to make them public.

      I’ve implemented 𝗿𝗮𝘁𝗲 𝗹𝗶𝗺𝗶𝘁𝗶𝗻𝗴 using 𝗡𝗴𝗶𝗻𝘅 to safeguard the backend API from excessive requests. 
      This API allows users to create, update, and delete notes, so protecting these endpoints is crucial. 

      I’ve also enabled 𝗜𝗻-𝗠𝗲𝗺𝗼𝗿𝘆-𝗖𝗮𝗰𝗵𝗶𝗻𝗴 using EhCache to store frequently accessed user notes. 

    `,
    frontendUrl: `${GITHUB_LINK}/minkanda-frontend.git`,
    backendUrl: `${GITHUB_LINK}/notesbackend.git`
  },

  {
    title: 'Resume Feedback',
    url: 'https://resumefeedback.mtcambrosio.com/',
    images: [
      `${BASE_URL}/rfeedback.webp`,
      `${BASE_URL}/feedback_io.webp`
    ],
    description: `
      This is a full-stack TypeScript implementation platform for sharing and receiving resume feedback. 
      


      I used AWS 𝗦𝟯 for document storage and AWS CloudFront for 𝗖𝗗𝗡 integration to improve performance.
    `,
    technologies: ['TypeScript', 'MongoDB', 'Express.js', 'React', 'Node.js', 'Bootstrap'],
    frontendUrl: `${GITHUB_LINK}/feedback-frontend.git`,
    backendUrl: `${GITHUB_LINK}/feedback-backend.git`,
  },

  {
    title: 'GasPump',
    url: 'https://gaspump.mtcambrosio.com/',
    image: `${BASE_URL}/gaspump.jpeg`,
    description: `
      An Interactive web app designed to empowers users to effortlessly explore and analyze gas station insights. 
      


      The tool employs Python-based web scraping techniques to extract real-time data from gas pump operator websites 
      and other relevant sources. This data is processed and stored in a hybrid database system, combining SQL for structured 
      data and MongoDB for unstructured data.
    `,
    technologies: ['Python', 'Flask', 'SQL', 'MongoDB', 'Dash', 'Plotly'],
    frontendUrl: '',
    backendUrl: '',
  },

  // {
  //   title: 'Vuata: A Modern E-Commerce Solution',
  //   url: 'https://vuata.mtcambrosio.com/',
  //   image: `${BASE_URL}/Vuata.webp`,
  //   description: `
  //     Vuata is a cutting-edge e-commerce web app for buying and selling clothes across various conditions.
  //   `,
  //   technologies: ['NodeJS','Express','Supabase','Firebase','TypeScript', 'Vite', 'React', 'Tailwind'],
  //   frontendUrl: '',
  //   backendUrl: '',
  // },

  {
    title: 'Rocket Launch Analytics',
    url: 'https://predictive-analytics-for-rocket-launches.mtcambrosio.com/',
    image: `${BASE_URL}/rocket_launch_img.jpg`,
    description: 'Predictive analytics for SpaceX rocket stage reusability.',
    technologies: ['Python', 'Flask', 'SQL', 'Plotly', 'Machine Learning'],
    frontendCodeLink: '',
    backendUrl: '',
  },

  {
    title: 'Portfolio Web App',
    technologies: ['React', 'Bootstrap', 'Firebase', 'S3', 'CloudFront', 'Amplify'],
    url: 'https://master.d2p23rnvlomq8x.amplifyapp.com/',
    image: `${BASE_URL}/thisisengineering.jpg`,
    description: 'Portfolio web app that showcases a construction engineer\'s skills, and professionally completed projects.',
    /* highlights: [
      'Used Firebase for backend and database',
      'Used AWS S3 for image storage',
      'Used CloudFront for CDN to improve performance',
      'Deployed on AWS Amplify'
    ] */
    frontendUrl: '',
    backendUrl: '',
  },

  {
    title: 'Coding Fun Land',
    url: 'https://codingfunland.mtcambrosio.com/',
    images: [
      `https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/codingfunland_1.webp`,
      `https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/codingfunland_1.webp`
    ],
    description: `
      Since December 2024, I’ve been guiding kids (ages 5–10) into the world of coding through fun, 
      hands-on projects using Python and Dash. Through Coding Fun Land, I’ve mentored 15 young learners, 
      helping them build simple yet engaging apps that spark creativity and problem-solving skills.

      Click the button below to see some of the fun and innovative projects our budding coders have built.
    `,
    technologies: ['Volunteer Work'],
    frontendUrl: '',
    backendUrl: '',
  },
];