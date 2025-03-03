import { FaEye, FaGithub, FaCode } from 'react-icons/fa';

interface ProjectLinksProps {
  url?: string;
  frontendUrl?: string;
  backendUrl?: string;
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ url, frontendUrl, backendUrl }) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors text-lg"
        >
          <FaEye />
        </a>
      )}
      {frontendUrl && (
        <a
          href={frontendUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-lg"
        >
          <FaCode />
        </a>
      )}
      {backendUrl && (
        <a
          href={backendUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-lg"
        >
          <FaGithub />
        </a>
      )}
    </div>
  );
};