const BASE_URL = "https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com";
const GITHUB_LINK = "https://github.com/helenapedro";

export const projects = [
  {
    title: 'Minkanda: Note Taking',
    url: 'https://minkanda-note-taking.mtcambrosio.com/',
    image: `${BASE_URL}/minkanda.jpg`,
    technologies: [
      'Spring', 'Nginx', 'Hibernate', 'React/Redux', 'AWS EC2', 'Hostinger'
    ],
    description: `
      Minkanda is a Web app that securely creates, manages, and accesses private and public notes. 

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
    technologies: ['TypeScript', 'React/Redux', 'Node/Express', 'MongoDB', 'AWS S3'],
    description: `
      This is a full-stack TypeScript implementation platform dedicated to helping professionals improve their resumes through community feedback.. 
      


      I used AWS 𝗦𝟯 for document storage and AWS CloudFront for 𝗖𝗗𝗡 integration to improve performance.
    `,
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
    title: 'Rocket Stage Reusability and Launch Analysis',
    url: 'https://predictive-analytics-for-rocket-launches.mtcambrosio.com/',
    image: `${BASE_URL}/rocket_launch_img.jpg`,
    description: `
      This web application predicts rocket stage reusability and analyzes launch 
      locations with interactive visualizations. 
      
      
      


      It dynamically queries SpaceX launch data using SQL, allowing users to explore 
      performance metrics such as payload mass, mission success rates, and landing outcomes.
      The application features interactive maps and charts to visualize launch sites and results. 
      Additionally, it integrates historical launch data scraped from Wikipedia and performs Exploratory 
      Data Analysis (EDA) by fetching data via GET requests from the SpaceX REST API.
    `,
    technologies: ['Python', 'Flask', 'Dash', 'SQL', 'EDA', 'Webscraping', 'REST API', 'Folium'],
    frontendCodeLink: '',
    backendUrl: '',
  },

  {
    title: 'Portfolio Web App',
    technologies: ['React', 'Bootstrap', 'Firebase', 'S3', 'CloudFront', 'Amplify'],
    url: 'https://constructpro.mtcambrosio.com/',
    image: `${BASE_URL}/thisisengineering.jpg`,
    description: 'Portfolio web app that showcases a construction engineer\'s skills, and professionally completed projects.',
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
    technologies: ['Volunteer Work', 'Python', 'Dash'],
    frontendUrl: '',
    backendUrl: '',
  },
];