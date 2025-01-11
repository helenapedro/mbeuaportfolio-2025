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
          <ProjectCard
            key={index}
            project={project}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </section>
  );
}

interface ProjectProps {
  project: {
    title: string;
    url: string;
    frontendUrl?: string;
    backendUrl?: string;
    technologies: string[];
    image: string;
    description: string;
  };
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProjectCard: React.FC<ProjectProps> = ({ project, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`group bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 ${
        isHovered ? '-translate-y-1 shadow-xl' : ''
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900 text-center w-full">{project.title}</h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transform transition-transform hover:scale-110"
          >
            <ExternalLink size={28} />
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

        <div className="relative overflow-hidden mb-4">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-48 object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : ''
            }`}
          />
        </div>

        <p className="text-gray-700 text-justify mb-4">{project.description}</p>

        <div className="flex gap-4 mt-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors whitespace-nowrap text-xs truncate"
            >
              View Project
            </a>
          )}
          {project.frontendUrl && (
            <a
              href={project.frontendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors whitespace-nowrap text-xs truncate"
            >
              Frontend Code
            </a>
          )}
          {project.backendUrl && (
            <a
              href={project.backendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors whitespace-nowrap text-xs truncate"
            >
              View Backend Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
