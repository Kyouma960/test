// Barrel export for all data files
// Import all data from one place: import { personalData, projectsData } from './data'

export { default as personalData } from './personalData';
export { default as projectsData, getFeaturedProjects, getCompletedProjects } from './projectsData';
export { default as skillsData, getAllSkills, getSkillsByLevel } from './skillsData';
export { default as contactData, getVisibleSocialLinks, isResumeAvailable } from './contactData';
export { default as achievementsData, getFeaturedAchievements, getAchievementsByCategory } from './achievementsData';
export { default as experienceData } from './experienceData';
