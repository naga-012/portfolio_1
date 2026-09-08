export type ZoneId = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

export interface StatItem {
  id: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
  description: string;
  icon?: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  tagline: string;
  color: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDesc: string;
  category: 'AI / ML' | 'Full Stack' | 'Data & Analytics' | '3D Web';
  accentColor: string;
  metrics: {
    highlight: string;
    label: string;
  }[];
  problem: string;
  approach: string;
  result: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
    patientLive?: string;
    doctorLive?: string;
  };
  image?: string;
  featured: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  status?: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  highlights: string[];
}

export interface ResumeOption {
  id: 'ai-dev' | 'data-analyst';
  title: string;
  filename: string;
  summary: string;
  highlights: string[];
}

export interface PortfolioData {
  identity: {
    name: string;
    title: string;
    tagline: string;
    status: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    bio: string;
  };
  stats: StatItem[];
  education: EducationItem;
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  resumes: ResumeOption[];
}
