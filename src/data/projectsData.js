// Projects showcase
// ADD YOUR PROJECTS HERE by copying the template structure

export const projectsData = [
  {
    id: "scribeml",
    title: "ScribeML",
    description: "Handwritten Digit & Character Recognition using CNN and Traditional ML.",
    longDescription: "An interactive Streamlit application for recognizing handwritten digits (0-9) and letters (A-Z). It features multiple model implementations including Deep Learning CNNs, Baseline traditional ML models, and Custom CNNs, offering real-time predictions with top-5 confidence scores.",

    // Tech stack
    technologies: [
      "Python",
      "Streamlit",
      "PyTorch",
      "Scikit-learn",
      "CNN"
    ],

    // Key features (optional)
    features: [
      "Digit & Letter Recognition",
      "Multiple Model Architectures (CNN, Baseline, Advanced)",
      "Real-time Prediction",
      "Top-5 Confidence Scores",
      "Interactive Image Upload"
    ],

    // Links
    github: "https://github.com/anik7afk/ScribeML",
    live: "", // Add live demo URL when available

    // Media
    image: "", // Placeholder - needs replacement

    // Metadata
    featured: true, // Pin important projects to top
    year: 2024,
    status: "completed", // completed, in-progress, planned

    // Your role (if team project)
    role: "Solo Developer",

    // Challenges solved (optional)
    challenges: [
      "Implementing and comparing multiple model architectures",
      "Building a user-friendly interface with Streamlit",
      "Optimizing model inference for real-time performance"
    ]
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    description: "A comprehensive console-based system for managing student records.",
    longDescription: "A robust Python-based application designed to streamline the management of student information. It utilizes file handling for data persistence. The system allows for adding, viewing, searching, updating, and deleting student records, as well as grade calculation.",

    // Tech stack
    technologies: [
      "Python",
      "File Handling",
      "CLI"
    ],

    // Key features (optional)
    features: [
      "CRUD Operations for Student Records",
      "Grade Calculation & GPA",
      "File-based Data Persistence",
      "Search Functionality",
      "Input Validation"
    ],

    // Links
    github: "https://github.com/anik7afk/student-management-system",
    live: "",

    // Media
    image: "",

    // Metadata
    featured: true,
    year: 2024,
    status: "completed",

    // Your role (if team project)
    role: "Solo Developer",

    // Challenges solved (optional)
    challenges: [
      "Implementing file handling for persistent storage without a database",
      "Ensuring robust input validation to prevent errors",
      "Structuring the application using MVC pattern for better maintainability"
    ]
  },
  {
    id: "car-rental-system",
    title: "Car Rental System",
    description: "A Python-based application for managing vehicle rentals and customer records.",
    longDescription: "A console-based car rental management system that handles vehicle listings, rental processing, and returns. It features automatic availability checks, customer registration, and revenue tracking, all using text files for data persistence.",

    // Tech stack
    technologies: [
      "Python",
      "File Handling",
      "CLI"
    ],

    // Key features (optional)
    features: [
      "Vehicle Availability Tracking",
      "Rent and Return Processing",
      "Dynamic Revenue Calculation",
      "Customer Management",
      "File-based Database"
    ],

    // Links
    github: "https://github.com/anik7afk/carRental",
    live: "",

    // Media
    image: "",

    // Metadata
    featured: true,
    year: 2024,
    status: "completed",

    // Your role (if team project)
    role: "Solo Developer",

    // Challenges solved (optional)
    challenges: [
      "Managing concurrent rental states using file I/O",
      "Implementing date-based cost calculations",
      "Ensuring data integrity across multiple text files"
    ]
  }
];

// Filter functions for easy access
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

export const getCompletedProjects = () => {
  return projectsData.filter(project => project.status === "completed");
};

export const getProjectsByYear = (year) => {
  return projectsData.filter(project => project.year === year);
};

export default projectsData;
