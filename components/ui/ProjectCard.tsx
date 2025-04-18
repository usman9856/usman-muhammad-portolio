import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import NeumorphicBox from './NeumorphicBox';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}
const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveLink,
  githubLink
}: ProjectCardProps) => {
  return <NeumorphicBox className="overflow-hidden group transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="relative overflow-hidden h-48">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-70"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => <span key={tag} className="bg-[#0a192f] text-blue-400 px-2 py-1 rounded text-xs">
              {tag}
            </span>)}
        </div>
        <div className="flex gap-3">
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <GithubIcon size={20} />
            </a>}
          {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <ExternalLinkIcon size={20} />
            </a>}
        </div>
      </div>
    </NeumorphicBox>;
};
export default ProjectCard;