import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-16 scroll-mt-20 ${className} ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } transition-all duration-700 ease-out`}
    >
      <h2 className="text-3xl font-bold mb-8 text-center relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-blue-500 after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;