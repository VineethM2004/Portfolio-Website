import { BookText, Code, FileSpreadsheet, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const personalInfo = {
  name: "VINEETH PRASAD M",
  title: "Full Stack Developer",
  email: "vineethprasad9@gmail.com",
  phone: "+91 7483699239",
  location: "Mysuru, Karnataka, India",
  bio: "Currently pursuing Information Science Bachelor of Technology at Vidya Vardhaka College of Engineering. Passionate about full stack development, with hands-on experience in MERN stack and a strong foundation in computer science.",
  social: [
    {
      name: "Email",
      url: "mailto:vineethprasad9@gmail.com",
      icon: Mail,
    },
    {
      name: "GitHub",
      url: "https://github.com/VineethM2004",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vineeth-prasad-m-40a4992a3/",
      icon: Linkedin,
    },
  ],
  resume: {
    label: "Resume",
    url: "/resume.pdf",
  },
};

export const aboutMe = {
  title: "About Me",
  description: "Currently working as a Full Stack Developer Intern, helping in building a web platform to track company finances and internal operations at Pacific Park Management,Inc.  Strong in MERN stack, passionate about building scalable and efficient web applications, and always eager to learn new technologies.",
  details: [
    "🎓 Information Science Bachelor of Technology at Vidya Vardhaka College of Engineering (2022 - present)",
    "💼 Full Stack Developer Intern at Pacific Park Management, Inc (March 2025 – Present)",
    "🌱 Continuously learning and growing",
    "🤝 Strong problem-solving and team collaboration skills",
  ],
};

export const skills = {
  title: "SKILLS",
  categories: [
    {
      name: "Languages",
      skills: ["C", "Python", "JavaScript", "XML", "HTML", "CSS"],
    },
    {
      name: "Web Frameworks",
      skills: ["Node.js", "Express.js", "React.js", "TailwindCSS", "GSAP"],
    },
    {
      name: "Data Science Libraries",
      skills: ["Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    },
    {
      name: "Developer Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      name: "Developer Tools",
      skills: ["Git", "GitHub", "Google Cloud Platform (GCP)", "Postman", "Vercel", "Render", "Jenkins", "Docker"],
    },
  ],
};

export const experience = {
  title: "Experience",
  jobs: [
    {
      title: "Full Stack Developer Intern",
      company: "Pacific Park Management, Inc",
      location: "Remote",
      period: "April 2025 – Present",
      description: "Currently working as a Full Stack Developer Intern, helping in building a web platform to track company finances and internal operations.",
      responsibilities: [
        "Developing dynamic and responsive front-end interfaces using React.js, ensuring seamless functionality and user experience.",
        "Using MongoDB to securely store user authentication details and confidential company data, integrating it with a full MERN stack backend.",
        "Collaborating with cross-functional team members and stakeholders, following Git-based workflows for efficient code management and project updates."
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MERN Stack",
        "Cloudinary",
        "JWT Auth",
        "RESTful API",
        "Git",
        "Agile Workflow"
      ],
    },
  ],
};

export const projects = {
  title: "Projects",
  list: [
    {
      title: "ScholarAI — Intelligent Education Matching Platform",
      summary: "AI-powered platform that matches students to universities and scholarships with personalized recommendations and streamlined application tracking.",
      details: [
        "AI-powered matching algorithm considers GPA, test scores, budget, and preferences",
        "Personalized university and scholarship recommendations with detailed explanations",
        "Visual dashboard for tracking application progress and deadlines",
        "Save, compare, and bookmark favorite opportunities for easy decision-making",
        "Secure JWT-based authentication and profile management",
        "Modern, responsive UI with smooth animations (Framer Motion, GSAP)",
        "Built with React 18, TypeScript, Node.js, Express.js, and MongoDB"
      ],
      description:
        "Scholar AI is a comprehensive web application that revolutionizes how students discover and apply to universities and scholarships. Leveraging advanced AI algorithms, the platform analyzes student profiles to provide highly personalized recommendations, making the college application process more accessible, efficient, and successful. Key features include a smart matching algorithm (100-point scoring system), real-time filtering and detailed recommendations, a visual application tracking dashboard with analytics and reminders, a save & compare system for favorites, and secure JWT-based user management. The tech stack includes React 18, TypeScript, Tailwind CSS, Framer Motion, GSAP, React Router, Recharts, Node.js, Express.js, MongoDB (Mongoose), JWT Auth, bcryptjs, and Cloudinary. Scholar AI streamlines the journey from discovery to application, delivering a modern, intuitive user experience and increasing access to global education opportunities.",
      technologies: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        "React Router",
        "Recharts",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Auth",
        "bcryptjs",
        "Cloudinary"
      ],
      demo: "https://scholar-ai.netlify.app",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "EcoRoute — Sustainable Transportation Platform",
      summary: "Comprehensive web app for eco-friendly route planning, carbon tracking, and gamified sustainability goals.",
      details: [
        "Real-time route planning with interactive maps (Leaflet.js)",
        "Multi-modal support: driving, cycling, walking with CO₂ emission calculations",
        "Comprehensive dashboard for carbon footprint analytics and progress tracking",
        "Personalized eco-goals and gamified achievement system",
        "Secure JWT authentication and user profile management",
        "Modern, responsive UI with smooth GSAP animations",
        "Built with React 18, TypeScript, Node.js, Express.js, and MongoDB"
      ],
      description:
        "EcoRoute is a comprehensive web application designed to promote sustainable transportation by optimizing routes for minimal environmental impact. The platform empowers users to plan eco-friendly journeys, track their carbon footprint, and achieve personalized sustainability goals through a gamified, data-driven dashboard. Key features include real-time route planning with interactive maps (Leaflet.js), multi-modal support (driving, cycling, walking) with CO₂ emission calculations, cost and health benefits tracking, and a comprehensive dashboard for carbon footprint analytics. Users can set personalized eco-goals, monitor progress, and celebrate achievements with a gamified system. The platform offers secure JWT authentication, responsive design, and real-time updates, making sustainable travel easy and engaging. Tech stack: React 18, TypeScript, Vite, Tailwind CSS, Shadcn/ui, Leaflet.js, Recharts, GSAP, Node.js, Express.js, MongoDB, JWT Auth, Cloudinary, OpenRouteService API.",
      technologies: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Shadcn/ui",
        "React Router",
        "TanStack Query",
        "Leaflet.js",
        "Recharts",
        "GSAP",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Auth",
        "Cloudinary",
        "OpenRouteService API"
      ],
      demo: "https://eco-routes.netlify.app",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Task Management System — A Full-Stack MERN Application",
      summary: "A comprehensive MERN stack app for creating, organizing, and tracking tasks with secure authentication and real-time management.",
      details: [
        "Secure user registration, login, and JWT authentication",
        "Create, read, update, delete, and archive tasks with real-time filtering",
        "Modern, responsive UI with gradient backgrounds and mobile-first design",
        "User avatar upload and profile management",
        "Bulk task operations and status management (completed/incomplete)",
        "RESTful API architecture with comprehensive error handling",
        "Built with React.js, Node.js, Express.js, MongoDB, Bootstrap, and Cloudinary"
      ],
      description: "A comprehensive task management application built with the MERN stack that allows users to create, organize, and track their tasks efficiently. The application features a modern, responsive design with secure user authentication and real-time task management capabilities.",
      technologies: [
        "React.js 19.0.0",
        "React Router DOM 7.2.0",
        "Bootstrap 5.3.3",
        "React Bootstrap 2.10.9",
        "Axios 1.8.1",
        "React Hot Toast 2.5.2",
        "React Icons 5.5.0",
        "Node.js",
        "Express.js 4.21.2",
        "MongoDB",
        "Mongoose 8.11.0",
        "JWT Auth",
        "bcrypt 5.1.1",
        "Cloudinary 2.5.1",
        "Express FileUpload 1.5.1"
      ],
      demo: "https://github.com/VineethM2004/Task-Manager",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
    },
  ],
};

export const education = {
  title: "Education",
  degrees: [
    {
      degree: "SSLC (10th Grade, CBSE Board)",
      institution: "Podar International School",
      location: "Mysore, Karnataka",
      period: "2019 - 2020",
      description: "Completed secondary school education (CBSE Board) with distinction.\nPercentage: 83%",
      courses: ["General Curriculum"],
    },
    {
      degree: "Pre-University Course (PUC) in Science (PCMC)",
      institution: "LEARNERS PU COLLEGE ",
      location: "Mysore, Karnataka",
      period: "2020 - 2022",
      description: "Completed Pre-University Course with a focus on Physics, Chemistry, Mathematics, and Computer Science (PCMC).\nPercentage: 81%",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
    {
      degree: "Information Science Bachelor of Technology",
      institution: "Vidya Vardhaka College of Engineering",
      location: "Mysore, Karnataka",
      period: "2022 - present",
      description: "Currently pursuing Information Science Bachelor of Technology.",
      cgpa:"8.75",
      courses: ["Data Structures & Algorithms", "Database Management", "Web Technologies"],
    },
  ],
};

export const certifications = {
  title: "Certifications",
  list: [
    {
      name: "IBM SkillsBuild Mastering Data with Machine Learning Internship with CSRBOX",
      issuer: "CSRBOX",
      date: "October 2024 to 5th November 2024",
      link: "https://drive.google.com/file/d/14gfF-iqZ51zT23jR1iH_mubFNqWaxlpV/view?usp=sharing",
      icon: Code,
    },
    {
      name: "Introduction to MongoDB (For Students)",
      issuer: "MongoDB University",
      date: "2025",
      link: "https://learn.mongodb.com/dashboard",
      icon: FileSpreadsheet,
    },
    {
      name: "Developing Back-End Apps with Node.js and Express",
      issuer: "IBM (via Coursera)",
      date: "Nov 20, 2024",
      link: "https://coursera.org/verify/GOFWARMIJ9CY",
      icon: Code,
    },
    {
      name: "Introduction to HTML, CSS, & JavaScript",
      issuer: "IBM (via Coursera)",
      date: "Sep 15, 2024",
      link: "https://coursera.org/verify/8566T55ORA1V",
      icon: Code,
    },
    {
      name: "Finlatics Machine Learning Program",
      issuer: "Finlatics",
      date: "04-11-2024 to 28-01-2025",
      description: "This is to certify that Vineeth Prasad M has successfully gained proficiency in Machine Learning during the Finlatics Machine Learning program. The duration of the program was from 04-11-2024 to 28-01-2025.",
      link: "/finlatics.pdf",
      lor: "/finlatics lor.pdf",
      icon: Code,
    },
  ],
};

export const contact = {
  title: "Contact Me",
  description: "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
  email: {
    label: "Email",
    value: "vineethprasad9@gmail.com",
    icon: Mail,
  },
  phone: {
    label: "Phone",
    value: "+91 7483699239",
    icon: Phone,
  },
  location: {
    label: "Location",
    value: "Mysuru, Karnataka, India",
    icon: MapPin,
  },
};

export const timeline = [
  {
    date: "October 2024",
    title: "Started Learning Coding",
    description: "Embarked on my programming journey by mastering Python and foundational Data Structures & Algorithms. This phase ignited my passion for problem-solving and laid the groundwork for my future in software development."
  },
  {
    date: "December 2024",
    title: "Discovered Full Stack Development",
    description: "Transitioned into the world of Full Stack Development, where I immersed myself in the MERN stack. I began building dynamic web applications, and developed a strong understanding of both frontend and backend technologies."
  },
  {
    date: "March 2025",
    title: "Full Stack Developer Intern",
    description: "Joined Pacific Park Management, Inc. as a Full Stack Developer Intern. Here, I apply my MERN stack expertise to real-world projects, collaborate with talented professionals, and continue to grow as a developer by tackling new challenges every day."
  }
];