import React from 'react';
import { timeline } from '../data/resumeData';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-blue-500 after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2">
          My Professional Journey
        </h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I believe that growth is a continuous journey, shaped by curiosity, dedication, and real-world experience. Here is a brief timeline of my professional development, highlighting key milestones that have defined my path as a developer.
        </p>
        <div className="relative border-l-4 border-blue-500 dark:border-blue-400 ml-4">
          {timeline.map((item, idx) => (
            <div key={idx} className="mb-12 ml-6 relative">
              <div className="absolute -left-7 top-0 w-5 h-5 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow"></div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">{item.date}</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</div>
                <div className="text-gray-700 dark:text-gray-300">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 