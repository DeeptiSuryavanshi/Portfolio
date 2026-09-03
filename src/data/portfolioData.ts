import { GitHubStats } from '../types';
import { FEATURED_PROJECTS } from './projects';
import { SKILLS_DATA, SKILL_CATEGORIES } from './skills';
import { EXPERIENCES_DATA } from './experience';
import { CERTIFICATIONS_DATA } from './certifications';
import { ACHIEVEMENTS_DATA } from './achievements';

export {
  FEATURED_PROJECTS,
  SKILLS_DATA,
  SKILL_CATEGORIES,
  EXPERIENCES_DATA,
  CERTIFICATIONS_DATA,
  ACHIEVEMENTS_DATA,
};

// Backwards-compatible aliases for legacy imports
export const EXPERIENCES = EXPERIENCES_DATA;
export const SKILLS = SKILLS_DATA;

export const RESUME_DATA = {
  education: {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    institution: 'Malwa Institute Of Technology',
    period: '2023 — 2027',
    coursework: 'Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Distributed Computing.',
  },
  summary: 'Computer Science student and software developer building reliable applications with Python, JavaScript, AI models and modern web architectures. Experienced in machine learning data pipelines, automated code reviews, and distributed systems.',
};

export const PERSONAL_INFO = {
  name: 'Deepti Suryavanshi',
  title: 'Software Developer & AI Enthusiast',
  tagline: 'Building practical software solutions with Python, JavaScript, AI and modern web technologies.',
  email: 'deeptisuryavanshi23@gmail.com',
  location: 'India',
  github: 'https://github.com/deeptisuryavanshi',
  linkedin: 'https://www.linkedin.com/in/deepti-suryavanshi-00ba012b9/',
  availableForHire: true,
  statusMessage: 'Open to internship & software development opportunities',
  typingRoles: [
    'Python Developer',
    'AI Enthusiast',
    'Web Developer',
    'Problem Solver',
  ],
  bioStatement: 'Curious by nature.\nBuilder by choice.',
  bioParagraph1:
    'I am a Computer Science student passionate about building practical software solutions with Python, JavaScript, AI and modern web technologies. My technical journey is fueled by a drive to turn complex conceptual problems into clean, high-performance, and maintainable software.',
  bioParagraph2:
    'From engineering machine learning data pipelines and automating code reviews during my internship at TESRECO, to building generative AI applications in the Google GenAI Academy Hackathon and designing distributed edge load balancers, I believe in continuous learning through hands-on building.',
  currentlyExploring: 'AI × Software Development',
};

export const COUNTER_STATS = [
  { label: 'Projects Built', value: 15, suffix: '+', id: 'stat-projects' },
  { label: 'Internship Experience', value: 1, suffix: '', id: 'stat-internships' },
  { label: 'Hackathons', value: 4, suffix: '+', id: 'stat-hackathons' },
  { label: 'Certifications', value: 4, suffix: '+', id: 'stat-certs' },
];

export const GITHUB_STATS: GitHubStats = {
  totalRepos: 18,
  totalCommits: 840,
  pullRequests: 62,
  streakDays: 48,
  longestStreak: 72,
  starsReceived: 164,
  languages: [
    { name: 'Python', percentage: 48, color: '#3572A5' },
    { name: 'TypeScript/JavaScript', percentage: 28, color: '#F7DF1E' },
    { name: 'Java', percentage: 14, color: '#B07219' },
    { name: 'Dart / Flutter', percentage: 10, color: '#00B4AB' },
  ],
  pinnedRepos: [
    {
      name: 'github-pr-reviewer',
      description: 'Python tool automating GitHub pull request review workflows using Abstract Syntax Trees.',
      stars: 48,
      forks: 14,
      language: 'Python',
      languageColor: '#3572A5',
      url: 'https://github.com/deeptisuryavanshi/github-pr-reviewer',
    },
    {
      name: 'fog-computing-load-balancer',
      description: 'Distributed simulation system balancing IoT workloads intelligently across fog and cloud resources.',
      stars: 36,
      forks: 9,
      language: 'Java',
      languageColor: '#B07219',
      url: 'https://github.com/deeptisuryavanshi/fog-computing-load-balancer',
    },
    {
      name: 'feelmate-emotion-support',
      description: 'AI-powered emotional well-being companion using Flutter and Hugging Face NLP transformers.',
      stars: 42,
      forks: 11,
      language: 'Python',
      languageColor: '#3572A5',
      url: 'https://github.com/deeptisuryavanshi/feelmate-emotion-support',
    },
    {
      name: 'ematernal-vaccination-record',
      description: 'Digital Flutter & Firebase mobile app organizing and tracking maternal and child vaccination timelines.',
      stars: 38,
      forks: 8,
      language: 'Dart',
      languageColor: '#00B4AB',
      url: 'https://github.com/deeptisuryavanshi/ematernal-vaccination-record',
    },
  ],
  recentActivity: [
    {
      id: 'act-1',
      type: 'PushEvent',
      repo: 'github-pr-reviewer',
      message: 'feat: add AST security heuristic checks for hardcoded tokens',
      timeAgo: '2 days ago',
    },
    {
      id: 'act-2',
      type: 'PullRequestEvent',
      repo: 'fog-computing-load-balancer',
      message: 'perf: optimize dynamic workload scheduling cost matrix',
      timeAgo: '5 days ago',
    },
    {
      id: 'act-3',
      type: 'PushEvent',
      repo: 'feelmate-emotion-support',
      message: 'refactor: streamline Hugging Face pipeline inference caching',
      timeAgo: '1 week ago',
    },
    {
      id: 'act-4',
      type: 'CreateEvent',
      repo: 'ematernal-vaccination-record',
      message: 'init: configure offline Firestore persistence and calendar alerts',
      timeAgo: '2 weeks ago',
    },
  ],
};
