// Skills and technologies
// UPDATE THIS FILE to add new skills as you learn them

export const skillsData = {
  // Frontend technologies
  frontend: [
    {
      name: "HTML",
      level: "intermediate",
      icon: "html" // Will add icons later
    },
    {
      name: "CSS",
      level: "intermediate",
      icon: "css"
    },
    {
      name: "JavaScript",
      level: "intermediate",
      icon: "javascript"
    },
    {
      name: "TypeScript",
      level: "learning",
      icon: "typescript"
    },
    {
      name: "React",
      level: "learning",
      icon: "react"
    }
  ],
  
  // Backend technologies
  backend: [
    {
      name: "Python",
      level: "intermediate",
      icon: "python"
    }
    // Add more as you learn: Node.js, Express, Django, etc.
  ],
  
  // Databases (add when you learn them)
  databases: [
    // Example structure:
    // {
    //   name: "MongoDB",
    //   level: "beginner",
    //   icon: "mongodb"
    // }
  ],
  
  // Tools and platforms
  tools: [
    {
      name: "Git",
      level: "beginner",
      icon: "git"
    },
    {
      name: "VS Code",
      level: "intermediate",
      icon: "vscode"
    },
    {
      name: "GitHub",
      level: "beginner",
      icon: "github"
    }
    // Add more: Figma, Postman, Docker, etc.
  ],
  
  // Currently learning (appears in About section)
  learning: [
    "React Fundamentals",
    "Modern JavaScript (ES6+)",
    "Web Development Best Practices",
    "System Design Basics",
    "Problem Solving & Algorithms"
  ],
  
  // Interested in learning (future goals)
  interests: [
    "Full Stack Development",
    "DevOps & CI/CD",
    "Cloud Technologies (AWS/Azure)",
    "Mobile Development",
    "Machine Learning Basics"
  ]
};

// Skill levels explanation
export const skillLevels = {
  beginner: "Just started learning, familiar with basics",
  learning: "Actively learning, building projects",
  intermediate: "Comfortable using, can build projects independently",
  advanced: "Deep knowledge, can teach others",
  expert: "Mastery level, extensive production experience"
};

// Helper functions
export const getAllSkills = () => {
  return [
    ...skillsData.frontend,
    ...skillsData.backend,
    ...skillsData.databases,
    ...skillsData.tools
  ];
};

export const getSkillsByLevel = (level) => {
  return getAllSkills().filter(skill => skill.level === level);
};

export const getSkillCount = () => {
  return getAllSkills().length;
};

export default skillsData;
