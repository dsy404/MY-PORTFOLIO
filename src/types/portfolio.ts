export interface Project {
  id: string;
  title: string;
  tagline: string;
  focusArea: string;
  category: 'AI / EdTech' | 'Creative Web / NLP';
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
