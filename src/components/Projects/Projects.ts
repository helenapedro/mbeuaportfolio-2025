export const projects = [
     {
       title: 'Minkanda: Note Taking',
       url: 'https://minkanda.mtcambrosio.com/',
       image: 'https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/minkanda.jpg',
       description: 'Web app that securely creates, manages, and accesses private and public notes.',
       technologies: ['Spring Boot', 'Hibernate', 'React', 'Redux'],
       highlights: [
          'Used React for the UI and Redux for state management',
         'Implemented Spring Security for user authentication and jasypt for sensitive data encryption',
         'Used EhCache for improved load times',
         'Performed CRUD operations with Spring Data JPA and Hibernate',
         'Configured Nginx as reverse proxy with IP-based rate limiting',
         'Integrated Logback for asynchronous logging',
         'Utilized AWS EC2 to host the backend',
         ' Login credentials for testing: (email: test@test.com, password: Test4321)'
       ]
     },

     {
       title: 'Resume Feedback',
       url: 'https://resumefeedback.mtcambrosio.com/',
       image: 'https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/rfeedback.webp',
       description: 'Platform for sharing and receiving resume feedback.',
       technologies: ['MongoDB','Express.js', 'React', 'Node.js'],
       highlights: [
         'Full-stack TypeScript implementation',
         'AWS S3 for document storage',
         'CloudFront CDN integration'
       ]
     },

     {
          title: 'GasPump',
          url: 'https://gaspump.mtcambrosio.com/',
          image: 'https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/gaspump.jpeg',
          description: 'Dynamic data visualization tool for users to explore gas station insights effortlessly.',
          technologies: ['Python', 'Flask', 'WebScraping', 'SQL', 'MongoDB', 'Dash'],
          highlights: [
            'Implemented using Python/Flask, SQL and MongoDB',
            'Designed with Dash and Plotly, enhanced by HTML/CSS',
            'Hosted on Heroku'
          ]
     },

     {
       title: 'Rocket Launch Analytics',
       url: 'https://predictive-analytics-for-rocket-launches.mtcambrosio.com/',
       image: 'https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/rocket_launch_img.jpg',
       description: 'Predictive analytics for SpaceX rocket stage reusability.',
       technologies: ['Python', 'Flask', 'SQL', 'Plotly', 'Machine Learning'],
       highlights: [
         'Built classification models for recovery prediction',
         'Implemented real-time data collection via APIs',
         'Created interactive visualizations with Plotly'
       ]
     },

     {
          title: 'Project Management Web App',
          url: 'https://predictive-analytics-for-rocket-launches.mtcambrosio.com/',
          image: 'https://mbeuaportfolio-media.s3.us-east-2.amazonaws.com/rocket_launch_img.jpg',
          description: 'Portfolio web app that showcases a construction engineer\'s skills, and professionally completed projects.',
          technologies: ['React', 'Bootstrap', 'Firebase'],
          highlights: [
            'Used Firebase for backend and database',
            'Used AWS S3 for image storage',
            'Used CloudFront for CDN to improve performance',
            'Deployed on AWS Amplify'
          ]
     }
];