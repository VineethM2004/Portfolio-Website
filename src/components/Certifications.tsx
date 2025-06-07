import React from 'react';
import Section from './shared/Section';
import { certifications } from '../data/resumeData';

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title={certifications.title} className="bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.list.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mx-auto mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon size={24} className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
                  <p>{cert.issuer}</p>
                  <p className="mt-1">{cert.date}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Certifications;