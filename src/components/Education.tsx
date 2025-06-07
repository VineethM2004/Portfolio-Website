import React from 'react';
import Section from './shared/Section';
import { education } from '../data/resumeData';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title={education.title}>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {education.degrees.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                    <span>{edu.location}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.period}</span>
                  </div>
                  
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
                  
                  <h4 className="font-medium text-gray-900 dark:text-white mt-4 mb-2">
                    Key Courses:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-sm"
                      >
                        {course}
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

export default Education;