import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from './Projects/Projects';


export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transform transition-transform hover:scale-110"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                    key={i}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm transform transition-transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <br/>
              <p className="text-gray-700 text-justify mb-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

