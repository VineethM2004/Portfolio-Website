import React, { useState, useRef } from 'react';
import Section from './shared/Section';
import { aboutMe, personalInfo } from '../data/resumeData';

const About: React.FC = () => {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  let popupTimeout: ReturnType<typeof setTimeout> | null = null;

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Open mail client as usual
    // Show popup
    setShowEmailPopup(true);
    if (popupTimeout) clearTimeout(popupTimeout);
    popupTimeout = setTimeout(() => setShowEmailPopup(false), 3000);
  };

  // Hide popup when clicking outside
  React.useEffect(() => {
    if (!showEmailPopup) return;
    const handleClick = () => setShowEmailPopup(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [showEmailPopup]);

  return (
    <Section id="about" title={aboutMe.title}>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6 leading-relaxed">
              {aboutMe.description}
            </p>
            
            <ul className="space-y-3">
              {aboutMe.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-lg">{detail}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 flex flex-wrap gap-4 relative">
              {personalInfo.social.map((platform) => {
                const Icon = platform.icon;
                if (platform.name === 'Email') {
                  return (
                    <a
                      key={platform.name}
                      href={platform.url}
                      onClick={e => { e.stopPropagation(); handleEmailClick(e); }}
                      className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 relative"
                    >
                      <Icon size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium">{platform.name}</span>
                      {showEmailPopup && (
                        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-4 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded shadow-lg border border-gray-200 dark:border-gray-700 z-50 whitespace-nowrap animate-fade-in-up">
                          {personalInfo.email}
                        </span>
                      )}
                    </a>
                  );
                }
                return (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Icon size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium">{platform.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/image.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;