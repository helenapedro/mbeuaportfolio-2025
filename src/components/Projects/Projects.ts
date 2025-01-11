export const projects = [
     {
       title: 'Minkanda: Note Taking',
       url: 'https://minkanda.mtcambrosio.com/',
       image: 'https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/minkanda.jpg',
       technologies: [
          'Spring(Boot, Security, JPA)', 'Nginx', 'Logback', 'Hibernate', 
          'jasypt', 'EhCache', 'HikariCP ', 'React'
        ],
       description: `
          Minkanda is a secure note-taking web app built with Spring Boot and React, 
          featuring encrypted storage for note titles and bodies using jasypt. Nginx 
          with IP-based rate limiting safeguards the backend API, while EhCache and HikariCP 
          enhance performance. 
        `,
     },

     {
       title: 'Resume Feedback',
       url: 'https://resumefeedback.mtcambrosio.com/',
       image: 'https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/rfeedback.webp',
       description: 'Platform for sharing and receiving resume feedback.',
       technologies: ['MongoDB','Express.js', 'React', 'Node.js'],
       /* highlights: [
         'Full-stack TypeScript implementation',
         'AWS S3 for document storage',
         'CloudFront CDN integration'
       ] */
     },

     {
          title: 'GasPump',
          url: 'https://gaspump.mtcambrosio.com/',
          image: 'https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/gaspump.jpeg',
          description: 'Dynamic data visualization tool for users to explore gas station insights effortlessly.',
          technologies: ['Python', 'Flask', 'WebScraping', 'SQL', 'MongoDB', 'Dash'],
          /* highlights: [
            'Implemented using Python/Flask, SQL and MongoDB',
            'Designed with Dash and Plotly, enhanced by HTML/CSS',
            'Hosted on Heroku'
          ] */
     },

      {
        title: 'Vuata',
        url: 'https://vuata.netlify.app/',
        image: 'https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/Vuata.webp',
        description: '',
        technologies: ['Vite', 'JavaScript', 'React', 'TypeScript', 'PostgreSQL'],
        /* highlights: [
          'Built classification models for recovery prediction',
          'Implemented real-time data collection via APIs',
          'Created interactive visualizations with Plotly'
        ] */
      },

     {
       title: 'Rocket Launch Analytics',
       url: 'https://predictive-analytics-for-rocket-launches.mtcambrosio.com/',
       image: 'https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/rocket_launch_img.jpg',
       description: 'Predictive analytics for SpaceX rocket stage reusability.',
       technologies: ['Python', 'Flask', 'SQL', 'Plotly', 'Machine Learning'],
       /* highlights: [
         'Built classification models for recovery prediction',
         'Implemented real-time data collection via APIs',
         'Created interactive visualizations with Plotly'
       ] */
     },


     {
          title: 'Project Management Web App',
          url: 'https://master.d2p23rnvlomq8x.amplifyapp.com/',
          image: 'https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/thisisengineering.jpg',
          description: 'Portfolio web app that showcases a construction engineer\'s skills, and professionally completed projects.',
          technologies: ['React', 'Bootstrap', 'Firebase'],
          /* highlights: [
            'Used Firebase for backend and database',
            'Used AWS S3 for image storage',
            'Used CloudFront for CDN to improve performance',
            'Deployed on AWS Amplify'
          ] */
     }
];