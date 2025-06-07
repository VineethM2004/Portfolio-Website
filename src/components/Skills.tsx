import React from 'react';
import Section from './shared/Section';
import { skills } from '../data/resumeData';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title={skills.title} className="bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {skills.categories.map((category, index) => (
            <div 
              key={category.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;