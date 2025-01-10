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
                <h3 className="text-xl font-semibold text-align-center">{project.title}</h3>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <p className="text-gray-700 mb-4">{project.description}</p>

              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {project.highlights.map((highlight, i) => (
                  <li 
                    key={i}
                    className={`transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-70'
                    }`}
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

