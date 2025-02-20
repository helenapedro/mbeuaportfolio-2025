import { Building2, Calendar } from 'lucide-react';

const workHistory = [
  {
    title: 'Software Engineer',
    company: 'Millennium Atlantic Bank',
    period: 'December 2022 - Present',
    duration: '2 yrs 1 mos',
    description: [
      'Design and implement a backend system for foreign exchange operations using Java and Spring Boot.',
      'Develop and integrate microservices with Internet Banking and Business Process Management systems using REST APIs.',
      'Develop a web application for generating daily reports, used by over 20 agencies nationwide.',
      'Develop API endpoints for client asset listings using Node.js, React, and MongoDB, reducing workload time from 1 hour to 2 minutes.'
    ]
  },
  {
    title: 'Software Engineer (Backend/Data)',
    company: 'AngoApp',
    period: 'September 2022 - December 2022',
    duration: '3 mos',
    description: [
      'Led back-end integration of complex database with 12+ tables and 15+ relationships.',
      'Implemented 7+ indexes in SQL tables, improving query performance by 45%.',
      'Developed stored procedures and views using regex for streamlined data access.',
      'Created integration tests to ensure application functionality.'
    ]
  },
  {
    title: 'Data Science',
    company: 'CasaCon Home Center',
    period: 'October 2021 - September 2022',
    duration: '11 mos',
    description: [
      'Developed Reinforcement Learning model using Deep Q-Network for automated restocking.',
      'Created Python scripts with RESTful APIs for automated purchase orders.',
      'Implemented data validation systems and ETL pipelines.'
    ]
  }
];

export function WorkHistory() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      
      <div className="space-y-8">
        {workHistory.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <div className="flex items-center text-gray-600 mt-1">
                  <Building2 size={16} className="mr-2" />
                  <span>{job.company}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>{job.period}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">{job.duration}</div>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}