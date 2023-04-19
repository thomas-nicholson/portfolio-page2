import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, imageUrl, technologies, githubUrl, liveUrl }:ProjectCardProps) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-2">
          <span className="text-gray-600">Technologies: </span>
          <span>{technologies.join(', ')}</span>
        </div>
        <div className="mt-4 flex justify-evenly">
          <a href={githubUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            <FiGithub className="text-2xl" />
          </a>
          {liveUrl && (
            <a href={liveUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="text-2xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
