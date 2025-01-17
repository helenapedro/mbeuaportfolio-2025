const BASE_URL = "https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com";
const GITHUB_LINK = "https://github.com/helenapedro";

export const projects = [
     {
       title: 'Minkanda: Note Taking',
       url: 'https://minkanda.mtcambrosio.com/',
       image: `${BASE_URL}/minkanda.jpg`,
       technologies: [
          'Spring(Boot, Security, JPA)', 'Nginx', 'Logback', 'Hibernate', 
          'jasypt', 'EhCache', 'HikariCP ', 'React'
        ],
       description: `
          Minkanda is a secure note-taking web app built with Spring Boot and React, 
          featuring encrypted storage for note titles and bodies using jasypt. Nginx 
          with IP-based rate limiting safeguards the backend API, while EhCache and HikariCP 
          to enhance performance. 
        `,
        frontendUrl: `${GITHUB_LINK}/minkanda-frontend.git`,
        backendUrl: `${GITHUB_LINK}/notesbackend.git`
     },

     {
       title: 'Resume Feedback',
       url: 'https://resumefeedback.mtcambrosio.com/',
       image: `${BASE_URL}/rfeedback.webp`,
       description: 'This is a full-stack TypeScript implementation platform for sharing and receiving resume feedback. I used AWS S3 for document storage and AWS CloudFront for CDN integration to improve performance.',
       technologies: ['MongoDB','Express.js', 'React', 'Node.js'],
       frontendUrl: `${GITHUB_LINK}/feedback-frontend.git`,
       backendUrl: `${GITHUB_LINK}/feedback-backend.git`,
     },

     {
          title: 'GasPump',
          url: 'https://gaspump.mtcambrosio.com/',
          image: `${BASE_URL}/gaspump.jpeg`,
          description: 'Interactive web app that empowers users to explore and analyze gas station insights effortlessly. The tool leverages web scraping techniques, implemented in Python, to extract real-time data from gas pump operator websites and other relevant sources. This data is then processed and stored in a hybrid database system using SQL for structured data and MongoDB for unstructured data.',
          technologies: ['Python', 'Flask', 'WebScraping', 'SQL', 'MongoDB', 'Dash'],
          frontendUrl: '',
          backendUrl: '',
     },

      {
        title: 'Vuata: A Modern E-Commerce Solution',
        url: 'https://vuata.mtcambrosio.com/',
        image: `${BASE_URL}/Vuata.webp`,
        description: `
          Vuata is a cutting-edge e-commerce web app for buying and selling clothes across various conditions.
        `,
        technologies: ['PostgreSQL','JavaScript','TypeScript', 'Vite', 'React', 'TailwindCSS'],
        frontendUrl: '',
        backendUrl: '',
      },

     {
       title: 'Rocket Launch Analytics',
       url: 'https://predictive-analytics-for-rocket-launches.mtcambrosio.com/',
       image: `${BASE_URL}/rocket_launch_img.jpg`,
       description: 'Predictive analytics for SpaceX rocket stage reusability.',
       technologies: ['Python', 'Flask', 'SQL', 'Plotly', 'Machine Learning'],
       /* highlights: [
         'Built classification models for recovery prediction',
         'Implemented real-time data collection via APIs',
         'Created interactive visualizations with Plotly'
       ] */
        frontendCodeLink: '',
        backendUrl: '',
     },


     {
          title: 'Project Management Web App',
          url: 'https://master.d2p23rnvlomq8x.amplifyapp.com/',
          image: `${BASE_URL}/thisisengineering.jpg`,
          description: 'Portfolio web app that showcases a construction engineer\'s skills, and professionally completed projects.',
          technologies: ['React', 'Bootstrap', 'Firebase'],
          /* highlights: [
            'Used Firebase for backend and database',
            'Used AWS S3 for image storage',
            'Used CloudFront for CDN to improve performance',
            'Deployed on AWS Amplify'
          ] */
          frontendUrl: '',
          backendUrl: '',
     }
];