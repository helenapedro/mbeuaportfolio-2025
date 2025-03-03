import { X } from 'react-feather';

interface ProjectModalProps {
  modalImage: string;
  closeModal: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ modalImage, closeModal }) => {
  return (
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
  );
};