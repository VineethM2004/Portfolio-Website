import React, { useEffect, useRef } from 'react';
import Section from './shared/Section';
import { education } from '../data/resumeData';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Education: React.FC = () => {
  const eduRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: eduRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.from('.edu-step', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: 'power2.out'
          });
          gsap.from('.edu-line', {
            scaleY: 0,
            duration: 2,
            ease: 'power2.out',
            delay: 0.5
          });
        }
      });
    }, eduRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="education" title={education.title}>
      <div ref={eduRef} className="max-w-5xl mx-auto py-12">
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 transform -translate-x-1/2 edu-line"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
            {education.degrees.map((edu, index) => (
              <div key={index} className="relative flex md:contents">
                {/* Left side (even index) */}
                {index % 2 === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="edu-step md:col-start-1 md:col-end-2 md:justify-self-end w-full md:w-[90%] z-10"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-2xl font-bold text-blue-400">{edu.period}</span>
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          {edu.cgpa && (
                            <div className="text-blue-400 font-semibold text-sm mt-1">CGPA: {edu.cgpa}</div>
                          )}
                        </div>
                      </div>
                      <p className="text-blue-300 font-medium mb-1">{edu.institution} — {edu.location}</p>
                      <p className="text-gray-300 leading-relaxed mb-2">{edu.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
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
                  </motion.div>
                ) : (
                  <div className="md:col-start-1 md:col-end-2"></div>
                )}
                {/* Timeline dot */}
                <div className="absolute left-1/2 md:left-1/2 top-8 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-gray-900 z-20 transform -translate-x-1/2"></div>
                {/* Right side (odd index) */}
                {index % 2 !== 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="edu-step md:col-start-2 md:col-end-3 md:justify-self-start w-full md:w-[90%] z-10"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-2xl font-bold text-blue-400">{edu.period}</span>
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          {edu.cgpa && (
                            <div className="text-blue-400 font-semibold text-sm mt-1">CGPA: {edu.cgpa}</div>
                          )}
                        </div>
                      </div>
                      <p className="text-blue-300 font-medium mb-1">{edu.institution} — {edu.location}</p>
                      <p className="text-gray-300 leading-relaxed mb-2">{edu.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
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
                  </motion.div>
                ) : (
                  <div className="md:col-start-2 md:col-end-3"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;