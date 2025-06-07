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
      skills: ["C", "Python", "JavaScript", "Java", "XML", "HTML", "CSS"],
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
      period: "March 2025 – Present",
      description: "Currently working as a Full Stack Developer Intern, helping in building a web platform to track company finances and internal operations.",
      responsibilities: [
        "Developing dynamic and responsive front-end interfaces using React.js, ensuring seamless functionality and user experience.",
        "Using MongoDB to securely store user authentication details and confidential company data, integrating it with a full MERN stack backend.",
        "Collaborating directly with the CEO and other team members, following Git-based workflows for efficient code management and project updates.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack"],
    },
  ],
};

export const projects = {
  title: "Projects",
  list: [
    {
      title: "Event-Planner",
      description: "Designed and developed an Event Planner web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) to allow users to create, manage, and track events efficiently. Deployed the application on Vercel, ensuring a responsive design, real-time updates, and an intuitive user interface for enhanced user engagement.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Vercel"],
      link: "https://event-planner-liart.vercel.app/",
      source: "https://github.com/VineethM2004/Event-Planner-.git",
      demo: "https://event-planner-liart.vercel.app/",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
    },
    {
      title: "Chat-Application",
      description: "Built a real-time Chat Application using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS for responsive and modern UI design. Implemented features like user authentication and real-time messaging with seamless frontend-backend communication. Optimized user experience with a clean, fast, and mobile-friendly interface, ensuring smooth interaction across devices.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      link: "https://github.com/VineethM2004/Chat-Application",
      image: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg",
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
      description: "Currently pursuing Information Science Bachelor of Technology. CGPA: 8.77",
      courses: ["Data Structures & Algorithms", "Database Management", "Web Technologies", "Cloud Computing"],
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