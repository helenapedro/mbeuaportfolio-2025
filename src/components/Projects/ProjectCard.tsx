import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from './Projects';
import { ChevronLeft, ChevronRight, X } from 'react-feather';

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

      {/* Modal for image */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <img
              src={modalImage}
              alt="Modal"
              className="max-w-full max-h-screen"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = project.images || [];

  const handleNextImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

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

        {/* technologies */}
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
          {images.length > 0 ? (
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className={`w-full h-60 object-cover transition-transform duration-700 cursor-pointer ${
                  isHovered ? 'scale-110' : ''
                }`}
                onClick={() => onImageClick(images[currentImageIndex])}
              />
              {/* Navigation Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          ) : (
            project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-48 object-cover transition-transform duration-700 cursor-pointer ${
                  isHovered ? 'scale-110' : ''
                }`}
                onClick={() => onImageClick(project.image!)}
              />
            )
          )}
        </div>

        <p className="text-gray-700 text-justify mb-4">
          {project.description.split('\n\n').map((paragraph, index) => (
            <span key={index} className="block mb-2">
              {paragraph}
            </span>
          ))}
        </p>

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
              Backend Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
