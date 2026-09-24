export interface SkillItem {
  name: string;
  category: string;
  proficiency: 'Expert' | 'Advanced' | 'Proficient';
  experienceYears?: string;
  description: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  skills: string[];
  iconName: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'AI & Data' | 'Problem Solving' | 'Upcoming';
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  metrics?: string;
  architectureHighlights?: string[];
}

export interface ContentPost {
  id: string;
  title: string;
  category: 'AI / ML' | 'Web Dev' | 'DSA' | 'Career';
  readsOrViews: string;
  readTime: string;
  summary: string;
  keyTakeaway: string;
  url?: string;
}

export interface Milestone {
  year: string;
  title: string;
  institution: string;
  description: string;
}
