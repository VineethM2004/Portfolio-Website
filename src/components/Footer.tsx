import React from 'react';
import { personalInfo } from '../data/resumeData';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-blue-400">{personalInfo.name.split(' ')[0]}</span>
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </h3>
            <p className="mt-2 text-gray-400">{personalInfo.title}</p>
          </div>
          
          <div className="flex space-x-6">
            {personalInfo.social.map((platform) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={platform.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;