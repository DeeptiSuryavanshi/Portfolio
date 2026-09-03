export type ProjectFilter = 'ALL' | 'AI' | 'WEB' | 'PYTHON' | 'MOBILE' | 'ACADEMIC';
export type ProjectFilterCategory = ProjectFilter;

export interface Project {
  id: string;
  number: string; // e.g. '01', '02'
  projectNumber?: string;
  title: string;
  tagline: string;
  category: 'Python' | 'AI/ML' | 'React' | 'Cloud/IoT' | 'Analytics' | 'Mobile';
  filterCategories: ProjectFilter[];
  filterTags?: string[];
  description: string;
  fullDescription: string;
  longDescription?: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  keyFeatures: string[];
  features?: string[];
  challenges: string[];
  whatILearned: string[];
  learnings?: string[];
  results: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  featured: boolean;
  codeSnippet?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Internship' | 'Hackathon' | 'Job Simulation' | 'Academic Project';
  location: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  highlights: string[];
  badge?: string;
  certificateUrl?: string;
}

export type SkillCategory = 'Programming' | 'Frontend' | 'Backend' | 'Database' | 'AI / ML' | 'Tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  usedIn: string[];
  iconName: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Internship' | 'Hackathons' | 'Projects' | 'Certifications' | 'Technical Learning';
  description: string;
  metrics?: string;
  badge: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  issueDate: string;
  credentialId: string;
  credentialUrl?: string;
  skills: string[];
  icon: string;
  status: 'Verified' | 'Active';
}

export interface GitHubStats {
  totalRepos: number;
  totalCommits: number;
  pullRequests: number;
  streakDays: number;
  longestStreak: number;
  starsReceived: number;
  languages: { name: string; percentage: number; color: string }[];
  pinnedRepos: {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    languageColor: string;
    url: string;
  }[];
  recentActivity: {
    id: string;
    type: string;
    repo: string;
    message: string;
    timeAgo: string;
  }[];
}
