import { Education, Project, Skill, Certification, SocialLink, ContactInfo, VirtualExperience } from "./types";

export const skills: Skill[] = [
  { name: "Python", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "Next.js", category: "Web Technologies" },
  { name: "Node.js", category: "Web Technologies" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "FastAPI", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "NumPy", category: "Machine Learning" },
  { name: "Pandas", category: "Machine Learning" },
  { name: "scikit-learn", category: "Machine Learning" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Vercel", category: "Deployment" },
];

export const projects: Project[] = [
  {
    title: "AsthmaCare Bot",
    description: "AI-powered asthma prediction system using machine learning models",
    technologies: ["Python", "scikit-learn", "Flask"],
    demoUrl: "https://flaskmodel-4.onrender.com/",
    achievements: [
      "92% prediction accuracy",
      "15% reduction in consultation time",
      "Implemented Gradient Boosting classification"
    ]
  },
  {
    title: "QRTap",
    description: "Advanced QR Code Generator with customization options",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://qr-code-generator-beta-ruddy.vercel.app/",
    githubUrl: "https://github.com/Dhirajsharma2060/qr-code-generator"
  },
  {
    title: "Git Clone Implementation",
    description: "Python-based implementation of core Git functionalities",
    technologies: ["Python", "System Programming"],
    githubUrl: "https://github.com/Dhirajsharma2060/codecrafters-git-python"
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor of Engineering (BE) in Computer Engineering",
    institution: "Universal College of Engineering",
    duration: "2021 - Present",
    location: "Mumbai"
  },
  {
    degree: "XIIth (PCM)",
    institution: "Pace Jr Science College",
    duration: "2019 - 2021",
    location: "Mumbai"
  },
  {
    degree: "Xth",
    institution: "St. Francis High School",
    duration: "2019",
    location: "Mumbai"
  }
];

export const virtualExperiences: VirtualExperience[] = [
  {
    name: "Goldman Sachs",
    url: "" // Add URL when available
  },
  {
    name: "Accenture UK",
    url: "" // Add URL when available
  },
  {
    name: "Mastercard (Cybersecurity)",
    url: "" // Add URL when available
  }
];

export const certifications: Certification[] = [
  {
    name: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    date: "2024",
    url: "", // Add URL when available
    badgeUrl: "" // Add badge image URL when available
  },
  {
    name: "AWS Academy Graduate - Cloud Introduction",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "", // Add URL when available
    badgeUrl: "" // Add badge image URL when available
  },
  {
    name: "Google Cloud's Career Readiness Associate Cloud Engineer Track",
    issuer: "Google Cloud",
    date: "2023",
    url: "", // Add URL when available
    badgeUrl: "" // Add badge image URL when available
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/dhiraj-sharma-789381295",
    icon: "linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/Dhirajsharma2060",
    icon: "github"
  }
];

export const contactInfo: ContactInfo = {
  email: "dhirajsharma2060@gmail.com",
  phone: "+91 9987368137",
  location: "Mumbai, India"
};