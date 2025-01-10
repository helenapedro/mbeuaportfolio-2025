import { Code2, Server, Database, Cloud, GitBranch, Brain } from 'lucide-react';

const mainSkills = [
  { name: 'Java / Spring Boot', years: 3 },
  { name: 'Node.js / Express.js', years: 4 },
  { name: 'JavaScript / Typescript', years: 4 },
  { name: 'React / Redux', years: 3 },
  { name: 'MySQL', years: 4 },
  { name: 'MongoDB', years: 4 },
];

const skillCategories = [
  { name: 'Backend', icon: <Server /> },
  { name: 'Frontend', icon: <Code2 /> },
  { name: 'Database', icon: <Database /> },
  { name: 'Cloud', icon: <Cloud /> },
  { name: 'Version Control', icon: <GitBranch /> },
  { name: 'AI/ML', icon: <Brain /> },
];

// Manual mapping of skills to categories
const categorizedSkills = {
  Backend: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'Flask', 'Microservices'],
  Frontend: ['JavaScript', 'Typescript', 'React', 'Redux', 'Bootstrap'],
  Database: ['MySQL', 'MongoDB', 'Sequelize', 'Firebase'],
  Cloud: ['AWS', 'NGINX'],
  'Version Control': ['Git'],
  'AI/ML': ['Data Science', 'Plotly', 'Python', 'Mocha'],
};

export function Skills() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

      {/* Primary Skills Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Primary Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mainSkills.map((skill) => (
            <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-600">{skill.years} years</span>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(skill.years / 4) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Additional Skills Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Additional Skills by Category</h3>
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <div className="flex items-center mb-2">
                <div className="text-blue-600">{category.icon}</div>
                <h4 className="ml-2 font-semibold">{category.name}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {(categorizedSkills[category.name as keyof typeof categorizedSkills] || []).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
