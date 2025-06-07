import React, { useState } from 'react';
import Section from './shared/Section';
import { experience } from '../data/resumeData';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <Section id="experience" title={experience.title}>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experience.jobs.map((job, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                expandedJob === index
                  ? 'ring-2 ring-blue-500 shadow-lg'
                  : 'hover:shadow-lg'
              }`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleJob(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {job.company}
                      </p>
                      <div className="flex flex-wrap items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                        <span>{job.location}</span>
                        <span className="mx-2">•</span>
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedJob === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                
                <div
                  className={`mt-4 transition-all duration-300 overflow-hidden ${
                    expandedJob === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {job.description}
                  </p>
                  
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;