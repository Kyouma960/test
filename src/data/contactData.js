// Contact information and social links
// ADD YOUR ACTUAL LINKS HERE when ready

export const contactData = {
  // Email
  email: {
    address: "mehedihaque.ed@gmail.com", // Add your email: "your.email@example.com"
    subject: "Let's Connect!", // Default email subject
    display: true // Toggle to show/hide email
  },

  // Social media links
  social: [
    {
      id: "github",
      platform: "GitHub",
      url: "https://github.com/anik7afk", // UPDATE THIS
      username: "@anik7afk",
      icon: "github",
      display: true // Toggle to show/hide
    },
    {
      id: "linkedin",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/mehedi-haque-4aa6a3369",
      username: "Mehedi Haque",
      icon: "linkedin",
      display: true // Set to true when you add your link
    },
    {
      id: "twitter",
      platform: "X",
      url: "https://x.com/anik_afk",
      username: "@anik_afk",
      icon: "twitter",
      display: true
    },
    {
      id: "instagram",
      platform: "Instagram",
      url: "https://www.instagram.com/anik_afk",
      username: "@anik_afk",
      icon: "instagram",
      display: true
    },
    {
      id: "vsco",
      platform: "VSCO",
      url: "https://vsco.co/yourusername",
      username: "@yourusername",
      icon: "vsco",
      display: false
    },
    {
      id: "whatsapp",
      platform: "WhatsApp",
      url: "https://wa.me/yourphonenumber",
      username: "WhatsApp",
      icon: "whatsapp",
      display: false
    },
    // Add more platforms as needed:
    // {
    //   id: "codepen",
    //   platform: "CodePen",
    //   url: "https://codepen.io/yourusername",
    //   username: "@yourusername",
    //   icon: "codepen",
    //   display: false
    // }
  ],

  // Resume/CV
  resume: {
    available: false, // Set to true when you have a resume
    url: "/assets/resume/Mehedi_Haque_Resume.pdf", // Path to resume PDF
    filename: "Mehedi_Haque_Resume.pdf", // Filename for download
    lastUpdated: "" // Date resume was last updated (e.g., "January 2026")
  },

  // Contact preferences
  preferences: {
    bestWayToContact: "email", // email, github, linkedin
    responseTime: "24-48 hours",
    openToFreelance: false,
    openToFullTime: false,
    openToCollaboration: true
  }
};

// Helper functions
export const getVisibleSocialLinks = () => {
  return contactData.social.filter(link => link.display);
};

export const getSocialLinkByPlatform = (platform) => {
  return contactData.social.find(
    link => link.platform.toLowerCase() === platform.toLowerCase()
  );
};

export const isResumeAvailable = () => {
  return contactData.resume.available;
};

export default contactData;
