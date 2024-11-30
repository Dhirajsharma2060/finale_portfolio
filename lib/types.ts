export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  achievements?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
  badgeUrl?: string;
}

export interface VirtualExperience {
  name: string;
  url?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location?: string;
}