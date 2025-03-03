import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

interface ProjectImageProps {
  images?: string[];
  image?: string;
  title: string;
  isHovered: boolean;
  onImageClick: (image: string) => void;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  images = [],
  image,
  title,
  isHovered,
  onImageClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="relative overflow-hidden mb-4">
      {images.length > 0 ? (
        <div className="relative">
          <img
            src={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            className={`w-full h-60 object-cover transition-transform duration-700 cursor-pointer ${
              isHovered ? 'scale-110' : ''
            }`}
            onClick={() => onImageClick(images[currentImageIndex])}
          />
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
        image && (
          <img
            src={image}
            alt={title}
            className={`w-full h-48 object-cover transition-transform duration-700 cursor-pointer ${
              isHovered ? 'scale-110' : ''
            }`}
            onClick={() => onImageClick(image)}
          />
        )
      )}
    </div>
  );
};