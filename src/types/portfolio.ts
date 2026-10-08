export interface Project {
  id: string;
  title: string;
  tagline: string;
  focusArea: string;
  category: 'AI / EdTech' | 'Creative Web / NLP' | 'Machine Learning / Healthcare';
  summary: string;
  problem: string;
  idea: string;
  coreQuote?: string;
  targetAudience?: string[];
  features: string[];
  techStack: string[];
  developmentHighlights: string[];
  outcome: string;
  githubUrl: string;
  demoUrl?: string;
  accentColor: string;
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'AI / ML' | 'Database' | 'DevOps & Tools' | 'Soft Skills';
  description: string;
  snippet?: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Open Source' | 'Hackathon' | 'Campus Leadership';
  description: string;
  keyContributions: string[];
  technologies: string[];
  link?: string;
}

export interface HackathonItem {
  id: string;
  title: string;
  organizer: string;
  date: string;
  category: string;
  summary: string;
  learnings: string[];
  skillsApplied: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'AI & Machine Learning' | 'Cloud & Global Hackathons' | 'Open Source & Web' | 'Academic & Specialization';
  credentialId?: string;
  image?: string;
  description: string;
  skills: string[];
  verificationUrl?: string;
  status: 'Verified' | 'Completed' | 'Honors';
  badgeColor?: 'purple' | 'pink' | 'amber' | 'emerald';
  imageUrl?: string;
  instructorOrSignatory?: string;
  rank?: string;
  platform?: string;
}

export interface ResumeData {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  objective: string;
  education: {
    institution: string;
    expectedGraduation: string;
    degree: string;
    cgpa: string;
    standing: string;
  };
  technicalSkills: {
    category: string;
    skills: string[];
  }[];
  projects: {
    title: string;
    techStack: string;
    githubUrl: string;
    highlights: string[];
  }[];
  trainingPrograms: {
    title: string;
    institution: string;
    period: string;
    highlights: string[];
  }[];
  openSource: {
    program: string;
    contributions: string[];
  }[];
  certifications: {
    name: string;
    date: string;
  }[];
}
