// Achievements, certifications, awards, and milestones
// ADD YOUR ACHIEVEMENTS HERE as you accomplish them

export const achievementsData = [
  // Example achievement structure (uncomment and fill when you have achievements):
  /*
  {
    id: "achievement-1",
    title: "AWS Certified Developer",
    description: "Achieved AWS Certified Developer - Associate certification",
    date: "2026-01",
    category: "certification", // certification, award, milestone, education
    
    // Optional fields
    issuer: "Amazon Web Services",
    credentialId: "ABC123XYZ",
    credentialUrl: "https://aws.amazon.com/verification/ABC123XYZ",
    image: "/src/assets/images/achievements/aws-cert.jpg",
    skills: ["AWS", "Cloud Computing", "DevOps"],
    
    // Display settings
    featured: true,
    displayOnResume: true
  },
  */
  
  /*
  {
    id: "achievement-2",
    title: "Hackathon Winner",
    description: "First place in XYZ Hackathon for building an innovative solution",
    date: "2025-12",
    category: "award",
    
    issuer: "XYZ Organization",
    image: "/src/assets/images/achievements/hackathon.jpg",
    projectLink: "https://github.com/yourusername/hackathon-project",
    
    featured: true,
    displayOnResume: true
  },
  */
  
  /*
  {
    id: "achievement-3",
    title: "100 GitHub Contributions",
    description: "Reached milestone of 100 contributions in a single year",
    date: "2025-11",
    category: "milestone",
    
    image: "/src/assets/images/achievements/github-100.jpg",
    featured: false,
    displayOnResume: false
  },
  */
];

// Achievement categories
export const achievementCategories = {
  certification: {
    label: "Certifications",
    description: "Professional certifications and technical qualifications",
    icon: "certificate"
  },
  award: {
    label: "Awards",
    description: "Competition wins, hackathons, and recognition",
    icon: "trophy"
  },
  milestone: {
    label: "Milestones",
    description: "Personal achievements and project milestones",
    icon: "flag"
  },
  education: {
    label: "Education",
    description: "Formal education and completed courses",
    icon: "graduation-cap"
  }
};

// Helper functions
export const getFeaturedAchievements = () => {
  return achievementsData.filter(achievement => achievement.featured);
};

export const getAchievementsByCategory = (category) => {
  return achievementsData.filter(achievement => achievement.category === category);
};

export const getResumeAchievements = () => {
  return achievementsData.filter(achievement => achievement.displayOnResume);
};

export const getAchievementsByYear = (year) => {
  return achievementsData.filter(achievement => {
    const achievementYear = new Date(achievement.date).getFullYear();
    return achievementYear === year;
  });
};

export const getTotalAchievements = () => {
  return achievementsData.length;
};

export default achievementsData;
