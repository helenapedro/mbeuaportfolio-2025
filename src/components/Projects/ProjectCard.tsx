import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from './Projects';
import { ProjectModal } from './ProjectModal';
import { ProjectTechnologies } from './ProjectTechnologies';
import { ProjectImage } from './ProjectImage';
import { ProjectLinks } from './ProjectLinks';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const closeModal = () => setModalImage(null);

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
            onImageClick={setModalImage}
          />
        ))}
      </div>

      {modalImage && <ProjectModal modalImage={modalImage} closeModal={closeModal} />}
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
    image?: string;
    images?: string[];
    description: string;
  };
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onImageClick: (image: string) => void;
}

const ProjectCard: React.FC<ProjectProps> = ({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onImageClick,
}) => {
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

        <ProjectTechnologies technologies={project.technologies} />

        <ProjectImage
          images={project.images}
          image={project.image}
          title={project.title}
          isHovered={isHovered}
          onImageClick={onImageClick}
        />

        <p className="text-gray-700 text-justify mb-4">
          {project.description.split('\n\n').map((paragraph, index) => (
            <span key={index} className="block mb-2">
              {paragraph}
            </span>
          ))}
        </p>

        <ProjectLinks
          url={project.url}
          frontendUrl={project.frontendUrl}
          backendUrl={project.backendUrl}
        />
      </div>
    </div>
  );
};