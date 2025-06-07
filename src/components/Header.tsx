import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/resumeData';
import Button from './shared/Button';
import ThemeToggle from './shared/ThemeToggle';

const Header: React.FC<{ darkMode: boolean; toggleDarkMode: () => void }> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className="relative">
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-gray-900 dark:text-blue-400">
              {personalInfo.name}
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center">
                <Button 
                  href="/resume.pdf" 
                  download 
                  variant="primary" 
                  size="sm" 
                  icon={Download}
                >
                  Resume
                </Button>
                <div className="ml-4">
                  <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-3 rounded-lg px-2 active:bg-blue-50 dark:active:bg-gray-800"
              >
                {item.name}
              </a>
            ))}
            <Button 
              href="/resume.pdf" 
              download 
              variant="primary" 
              icon={Download}
              className="mt-2 w-full"
            >
              Download Resume
            </Button>
            <div className="mt-2 flex justify-center">
              <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-200 mb-4 animate-fade-in-up">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-300">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 animate-fade-in-up animation-delay-600">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-900">
              {personalInfo.bio}
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-1200">
              <Button href="#contact" variant="primary" size="lg">
                Contact Me
              </Button>
              <Button href="#projects" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;