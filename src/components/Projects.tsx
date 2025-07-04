import React, { useState } from 'react';
import Section from './shared/Section';
import { projects } from '../data/resumeData';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import Button from './shared/Button';

const DETAILED_PROJECTS = [
  'ScholarAI — Intelligent Education Matching Platform',
  'EcoRoute — Sustainable Transportation Platform',
  'Task Management System — A Full-Stack MERN Application',
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [openDetails, setOpenDetails] = useState<number | null>(null);

  return (
    <Section id="projects" title={projects.title} className="bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.list.map((project, index) => {
            const isDetailed = DETAILED_PROJECTS.includes(project.title);
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform scale-100 hover:scale-110"
                  />
                  {isDetailed && project.summary && (
                    <div className="text-xs italic text-gray-600 dark:text-gray-300 px-4 py-2 bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
                      {project.summary}
                    </div>
                  )}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                      hoveredProject === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {!isDetailed && (
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 items-center mb-2">
                    {project.demo && project.title !== 'Task Management System — A Full-Stack MERN Application' && (
                      <Button
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                        icon={ExternalLink}
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.title === 'Task Management System — A Full-Stack MERN Application' && project.demo && (
                      <Button
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                        icon={Github}
                      >
                        GitHub Repo
                      </Button>
                    )}
                    {isDetailed && (
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        icon={openDetails === index ? ChevronUp : ChevronDown}
                        onClick={() => setOpenDetails(openDetails === index ? null : index)}
                      >
                        {openDetails === index ? 'Hide Details' : 'View Details'}
                      </Button>
                    )}
                  </div>
                  {isDetailed && openDetails === index && (
                    <ul className="mt-4 p-4 bg-gray-100 dark:bg-gray-900/60 rounded-lg text-gray-800 dark:text-gray-200 text-sm animate-fade-in list-disc pl-6 space-y-2">
                      {project.details && project.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Projects;