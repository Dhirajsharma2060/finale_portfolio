import { Education, Project, Skill, Certification, SocialLink, ContactInfo, VirtualExperience } from "./types";
import { blogs } from "./blogs"; // Import blogs from the separate file

export const skills: Skill[] = [
  { name: "Python", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "Golang", category: "Programming" },
  { name: "Next.js", category: "Web Technologies" },
  { name: "Node.js", category: "Web Technologies" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "FastAPI", category: "Backend" },
  { name: "Flask", category: "Backend" },
  // { name: "Django", category: "Backend" },
  { name: "NumPy", category: "Machine Learning" },
  { name: "Pandas", category: "Machine Learning" },
  { name: "scikit-learn", category: "Machine Learning" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Vercel", category: "Deployment" },
  { name: "Render", category: "Deployment" }
];

export const projects: Project[] = [
  {
    title: "AsthmaCare Bot",
    description: "AI-powered asthma prediction system using machine learning models",
    technologies: ["Python", "scikit-learn", "Flask","React.js","MongoDB","Vercel","Render"],
    demoUrl: "https://asthama-care.vercel.app/",
    githubUrl: "https://github.com/Dhirajsharma2060/AsthamaCare",
    publicationUrl: "http://doi.org/10.55041/IJSREM37837",
    achievements: [
      "Achieved 92% prediction accuracy",
      "Reduced consultation time by 15%, saving approximately 30 hours monthly for healthcare providers",
      "Implemented Gradient Boosting classification that processes patient data 3x faster than traditional models",
      "Pubished in IJSREM Volume 4 | Issue 2 | March 2025 | Page 1-7 | http://doi.org/10.55041/IJSREM37837",
    ]
  },
  {
    title: "CodePulse ",
    description: "A real-time collaborative coding platform with code execution, video calling, and multi-language support.",
    technologies: ["React", "Node.js", "WebSockets", "WebRTC", "Judge0", "Vercel","Express.js","Render"],
    githubUrl: "https://github.com/Aryanshah13/CodePulse",
    demoUrl: "https://code-pulse-one.vercel.app/", // Uncomment if you'd like to show live demo
    publicationUrl: "http://doi.one/10.1729/Journal.44336",
    achievements: [
      "Built a full-stack application for collaborative coding sessions",
      "Integrated Judge0 API for real-time code execution of 30+ programming languages with 99% accuracy",
      "Implemented WebSockets reducing synchronization delay by 76% compared to HTTP polling",
      "Enabled secure, room-based pair programming and interviews",
      "Optimized WebRTC connections supporting video calls with 40% less bandwidth",
      "Deployed the application on Vercel for global access",
      "Published on International Journal Of Creative Research Thoughts(IJCRT) Volume 13 | Issue 3 | March 2025 | j100-j107 |http://doi.one/10.1729/Journal.44336"
    ]
  },
  
  {
    title: "BazaarWise India",
    description: "A customer segmentation and recommendation system using K-Means clustering, tailored for the Indian market.",
    technologies: ["FastAPI", "Streamlit", "Render.com", "Scikit-learn", "Matplotlib","Render"],
    githubUrl: "https://github.com/Dhirajsharma2060/customer_segmentation",
    demoUrl: "https://bazaarwise.onrender.com",
    achievements: [
      "Implemented K-Means clustering achieving 87% customer segmentation accuracy",
      "Reduced marketing misallocation by 32% through precise customer targeting",
      "Created a dashboard with Streamlit processing 50,000+ customer data points in <3 seconds",
      "Improved recommendation relevance by 41% compared to previous system",
      "Deployed on Render.com with a 250ms average response time",
      "Visualized customer segments increasing marketing team decision speed by 65%"
    ]  
  },
  {
    title: "QRTap",
    description: "Advanced QR Code Generator with customization options",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS","React.js","Vercel"],
    demoUrl: "https://qr-code-generator-beta-ruddy.vercel.app/",
    githubUrl: "https://github.com/Dhirajsharma2060/qr-code-generator",
    achievements:[
      "Custom QR Code Generator in Next for URLs and emails with customizable colors and logos.",
      "Supports PNG and SVG downloads for branding needs.",
      "Validates URLs and emails for professional accuracy.",
      "QR code usage will rise over 80% in five years, with the market growing 16.3% annually, meeting demand for customizable solutions."
    ]
  },
  {
    title: "Online Voting System",
    description: "Developed a voting website with face recognition as authentication",
    technologies: ["FastAPI", "HTML", "CSS", "React.js", "PostgreSQL", "OpenCV"],
    githubUrl: "https://github.com/Dhirajsharma2060/timepasspublic/tree/fix-secrets-issue",
    achievements: [
      "Implemented facial recognition with 75% authentication accuracy and <1.6s verification time",
      "Reduced voter fraud potential by 76% through biometric verification",
      "Utilized FastAPI to handle 100+ requests/second during peak voting periods",
      "Designed responsive UI reducing average voting time by 68% compared to paper ballots",
      "Used PostgreSQL as the database"
    ]
  },
  {
    title: "HTTP Server with File Handling",
    description: "A lightweight multi-threaded HTTP server supporting GET and POST requests, including file uploads and retrieval.",
    technologies: ["Python", "Socket Programming", "Multithreading", "Gzip Compression", "Filesystem Operations"],
    githubUrl: "https://github.com/yourusername/http-server",
    // demoUrl: "N/A" // Update if a live demo is available
    achievements: [
      "Implemented multi-threaded HTTP server handling 1,000+ concurrent connections",
      "Supported GET and POST requests with 95.97% request completion rate",
      "Achieved 65% bandwidth reduction using Gzip compression for file transfers",
      "Reduced file upload times by 20% compared to similar Python-based servers",
      "Implemented comprehensive file operation logging with <5ms overhead"
    ]
  },
  {
    title: "Git Clone Implementation",
    description: "Python-based implementation of core Git functionalities",
    technologies: ["Python", "System Programming"],
    githubUrl: "https://github.com/Dhirajsharma2060/codecrafters-git-python",
    achievements:[
      "Created necessary Git directories and files such as .git, objects, refs, and HEAD.",
      "Implemented functions to read and write Git objects (blobs, trees, commits) using SHA-1 hashes and Zlib compression.",
      "Achieved SHA-1 hash computation speeds within 15% of native Git performance.",
      "Reduced object storage size by 58% through optimized Zlib compression.",
      "Fetched and wrote refs from a remote server, storing them in the local Git directory.",
      "Processed pack files and added object decompression and storage.",
      "Reconstructed the file tree from the fetched objects and wrote files to the local directory.",
      "Implemented a file tree reconstruction algorithm with O(n log n) time complexity."
    ]
  },
  {
    title:"Golang Slot Machine",
    description:"A simple slot machine game implemented in Golang",
    technologies:["Golang"],
    githubUrl:"https://github.com/Dhirajsharma2060/golang_tim_slot_-project",
    achievements:[
      "Built a modular slot machine game in Golang with 300+ lines of clean, maintainable code.",
      "Applied core Go concepts (slices, maps, functions) in an interactive CLI-based project.",
      "Used Go modules for dependency management and reproducible builds.",
      "Refactored code for 30% better readability via utility functions and file separation.",
      "Implemented random game logic for realistic gameplay; ensured 100% correctness in edge cases."
    ]
  },
  {
      title: "Land Registry DApp",
      description: "A decentralized application for secure and transparent land registration using blockchain technology.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "Truffle", "Ganache", "MetaMask"],
      githubUrl: "https://github.com/Dhirajsharma2060/LandRegistry",
      // demoUrl: "N/A" ,// Update if a live demo is available,
      achievements: [
        "Implemented decentralized application reducing property registration time by 94%",
        "Reduced registration costs by 78% compared to traditional methods",
        "Utilized Solidity for smart contract development",
        "Deployed the application on local Ethereum networks using Truffle and Ganache",
        "Integrated Web3.js for interaction with the blockchain",
        "Designed system capable of handling 1000+ property records with consistent gas optimization."
      ]
    },
  // {
  //   title: "Blog App",
  //   description: "Created a blog application with CRUD operations",
  //   technologies: ["Fastapi", "ReactJs", "Render.com", "MongoDB"],
  //   githubUrl: "https://github.com/Dhirajsharma2060/assignment_2",
  //   demoUrl: "https://assignment-2-h43j.onrender.com",

  // }
];

export const education: Education[] = [
  {
    degree: "Bachelor of Engineering (BE) in Computer Engineering",
    institution: "University of Mumbai",
    duration: "2021 - 2025",
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
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_i7cHGBDPkF39SmWCS_1690438177021_completion_certificate.pdf" // Add URL when available
  },
  {
    name: "Accenture UK",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20UK/3xnZEj9kfpoQKW885_Accenture%20UK_i7cHGBDPkF39SmWCS_1692023698326_completion_certificate.pdf" // Add URL when available
  },
  {
    name: "Mastercard (Cybersecurity)",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_i7cHGBDPkF39SmWCS_1690297502020_completion_certificate.pdf" // Add URL when available
  },
  {
    name: "AWS(Solutions Architecture)",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_i7cHGBDPkF39SmWCS_1692024254442_completion_certificate.pdf" // Add URL when available
  }
];

export const certifications: Certification[] = [
  {
    name: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    date: "2024",
    url: "https://www.credly.com/badges/335aaa94-5c45-4f07-8185-42aefe9b8727/linked_in_profile", // Add URL when available
    badgeUrl: "" // Add badge image URL when available
  },
  {
    name:"Google Cloud career readiness Associate Cloud Engineer track",
    issuer: "Google Cloud",
    date: "2024",
    url: "https://drive.google.com/file/d/1A2p_dh0WjtZmpw7vBbE5G4MstY7O4XEv/view?usp=sharing", // Add URL when available
  },
  {
    name: "AWS Academy Graduate - Cloud Introduction",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://www.credly.com/badges/847a0ed8-3313-4a04-90e1-0c5bc6e58bd2/public_url", // Add URL when available
    badgeUrl: "" // Add badge image URL when available
  },
  // {
    // name: "Google Cloud's Career Readiness Associate Cloud Engineer Track",
    // issuer: "Google Cloud",
    // date: "2023",
    // url: "", // Add URL when available
    // badgeUrl: "" // Add badge image URL when available
  // }
  {
    name: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
    date: "2024",
    url: "https://www.credly.com/badges/f8eb5e32-796d-4122-9bd0-0e90799a8027/linked_in_profile",
    badgeUrl: "",
    issuer: ""
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/dhirajsharma2060",
    icon: "linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/Dhirajsharma2060",
    icon: "github"
  },
  {
    platform: "Google Cloud",
    url: "https://www.cloudskillsboost.google/public_profiles/43fb756a-81ed-4de3-a828-2e24c9386137",
    icon: "cloud",
    customIcon: true
  }
];

export const contactInfo: ContactInfo = {
  email: "dhirajsharma2060@gmail.com",
  phone: "+91 9987368137",
  location: "Mumbai, India"
};

export { blogs }; // Export blogs from data.ts