import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
import { Award, GraduationCap, Briefcase, Rocket, Wrench, Star } from 'lucide-react';

const journeySteps = [
  {
    year: '2019 – 2021',
    title: 'Foundations Built',
    description: `Completed high school with a strong focus on science and mathematics, laying the groundwork for my career in technology.\n\nActively participated in inter-school competitions and conferences like IMUN, strengthening leadership and communication skills.\n\nWon multiple medals in 100m and 200m sprints, building discipline and perseverance.`,
    icon: GraduationCap,
    color: 'from-green-400 to-blue-500'
  },
  {
    year: '2021 – Present',
    title: 'Bachelor of Engineering in Information Science',
    description: `VidyaVardhaka College of Engineering\n\nSpecialized in Full Stack Development and explored AI/ML as complementary skills.\n\nConsistently maintained strong academic performance alongside practical projects.`,
    icon: GraduationCap,
    color: 'from-blue-400 to-purple-500'
  },
  {
    year: 'Oct 2024 – Nov 2024',
    title: 'IBM SkillsBuild CSRBOX – Data with Machine Learning Intern',
    description: `Successfully completed the "Mastering Data with Machine Learning" program.\n\nBuilt practical understanding of data pipelines, model training, and evaluation.\n\nCollaborated with peers to deliver a working ML model for a real-world scenario.`,
    icon: Briefcase,
    color: 'from-purple-400 to-pink-500'
  },
  {
    year: 'Nov 2024 – Jan 2025',
    title: 'Finlatics – Machine Learning Intern',
    description: `Designed, trained, and evaluated supervised learning models for small datasets.\n\nLearned to communicate technical insights to non-technical stakeholders.\n\nImproved practical Python and data visualization skills.`,
    icon: Briefcase,
    color: 'from-pink-400 to-red-500'
  },
  {
    year: 'April 2025 – Present',
    title: 'Pacific Park Management Inc. – Full Stack Developer Intern',
    description: `Part of a dynamic team developing a finance and records tracking platform.\n\nEnhanced my skills in scalable database design, backend optimization, and frontend responsiveness.\n\nPracticed Agile development and version control with Git.`,
    icon: Briefcase,
    color: 'from-red-400 to-orange-500'
  },
  {
    year: '2022 – 2025',
    title: 'Personal Projects',
    description: `Built and deployed Scholar AI and EcoRoutes website using Netlify and Render.\n\nDeveloped multiple full-stack applications: Task Manager, Event Planner, and Chat Application using the MERN stack.\n\nCurrently designing an innovative 3D Product Showcase Website inspired by Zentry for immersive e-commerce experiences.`,
    icon: Rocket,
    color: 'from-orange-400 to-yellow-500'
  },
  {
    year: '2021 – 2025',
    title: 'Continuous Learning',
    description: `Self-taught GSAP animations, advanced JavaScript, and modern React frameworks.\n\nRegularly contributed to GitHub and practiced daily DSA problem-solving in Python.\n\nPreparing for campus placements with a strong foundation in DSA, aptitude, and real-world project experience.`,
    icon: Wrench,
    color: 'from-yellow-400 to-green-500'
  },
  {
    year: '',
    title: '"Every line of code I write brings me one step closer to meaningful impact."',
    description: '',
    icon: Star,
    color: 'from-blue-400 to-purple-400'
  }
];

const Journey = () => {
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: journeyRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.from('.journey-step', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: 'power2.out'
          });
          gsap.from('.journey-line', {
            scaleY: 0,
            duration: 2,
            ease: 'power2.out',
            delay: 0.5
          });
        }
      });
    }, journeyRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={journeyRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The path that led me to where I am today, from beginner to professional
          </p>
        </motion.div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 transform -translate-x-1/2 journey-line"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative flex md:contents">
                {/* Left side (even index) */}
                {index % 2 === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="journey-step md:col-start-1 md:col-end-2 md:justify-self-end w-full md:w-[90%] z-10"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mr-4`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-2xl font-bold text-blue-400">{step.year}</span>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
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
                    className="journey-step md:col-start-2 md:col-end-3 md:justify-self-start w-full md:w-[90%] z-10"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mr-4`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-2xl font-bold text-blue-400">{step.year}</span>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
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
    </div>
  );
};

export default Journey; 