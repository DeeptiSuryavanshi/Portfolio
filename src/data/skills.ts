import { SkillItem, SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  'Programming',
  'Frontend',
  'Backend',
  'Database',
  'AI / ML',
  'Tools',
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'Programming',
    iconName: 'Terminal',
    description: 'Object-oriented architecture, AST parsing, asynchronous FastAPI backends, and data processing.',
    usedIn: [
      'TESRECO Internship',
      'ML Projects',
      'GitHub PR Review Tool',
      'FeelMate Emotion Support Backend',
      'Automation Scripts',
    ],
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Programming',
    iconName: 'Code',
    description: 'Asynchronous event loops, DOM manipulation, functional paradigms, and modern ES module workflows.',
    usedIn: [
      'Interactive Portfolio Website',
      'React Web Applications',
      'Interactive Dashboards',
      'Full-Stack Node.js Projects',
    ],
  },
  {
    name: 'Java',
    category: 'Programming',
    iconName: 'Cpu',
    description: 'Object-oriented programming, concurrency, multithreading, and distributed simulation systems.',
    usedIn: [
      'Fog Computing Load Balancer',
      'iFogSim & CloudSim Modeling',
      'Academic Systems Engineering',
      'Data Structures & Algorithms',
    ],
  },
  {
    name: 'C++',
    category: 'Programming',
    iconName: 'Binary',
    description: 'Algorithmic problem solving, Standard Template Library (STL), memory management, and competitive programming.',
    usedIn: [
      'Algorithmic Problem Solving',
      'Data Structures Practice (LeetCode/HackerRank)',
      'Systems Programming Foundations',
    ],
  },
  {
    name: 'C',
    category: 'Programming',
    iconName: 'Layers',
    description: 'Low-level systems programming, pointers, manual memory allocation, and operating systems concepts.',
    usedIn: [
      'Operating Systems Lab',
      'Pointers & Memory Management',
      'Computer Architecture Projects',
    ],
  },

  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    iconName: 'Atom',
    description: 'Modern component architecture, custom hooks, reactive state machines, and performant UI rendering.',
    usedIn: [
      'Interactive Developer Portfolio',
      'Fog Balancer Web Dashboard',
      'Google GenAI Hackathon Platform',
      'Production Client Interfaces',
    ],
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    iconName: 'Palette',
    description: 'Utility-first styling, design token systems, responsive fluid layouts, and bespoke editorial palettes.',
    usedIn: [
      'Editorial Portfolio Design',
      'Component Design Systems',
      'Responsive Mobile Interfaces',
      'Glass & Blur Layouts',
    ],
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    iconName: 'FileCode',
    description: 'Semantic markup, accessible WCAG standards, SEO optimization, and structured metadata.',
    usedIn: [
      'Semantic Web Architecture',
      'Accessible Forms & Dialogs',
      'SEO & Structured JSON-LD Data',
    ],
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    iconName: 'Sparkles',
    description: 'Modern CSS Grid, Flexbox, custom keyframe animations, smooth scrolling, and micro-interactions.',
    usedIn: [
      'Smooth Marquee Animations',
      'Editorial Typography Styling',
      'Subtle Hover Parallax Effects',
      'Mobile Responsive Breakpoints',
    ],
  },

  // Backend
  {
    name: 'FastAPI',
    category: 'Backend',
    iconName: 'Zap',
    description: 'High-performance Python async REST APIs, Pydantic type validation, and OpenAPI documentation.',
    usedIn: [
      'FeelMate Emotion AI Microservice',
      'GitHub PR Review Webhook Server',
      'Real-Time Inference Gateways',
    ],
  },
  {
    name: 'Node.js',
    category: 'Backend',
    iconName: 'Server',
    description: 'Event-driven server runtime, RESTful API architecture, package management, and backend scripting.',
    usedIn: [
      'Server-Side Web Services',
      'REST API Middleware',
      'Full-Stack Developer Tooling',
    ],
  },
  {
    name: 'Express',
    category: 'Backend',
    iconName: 'Workflow',
    description: 'Middleware composition, route security, error handling pipelines, and JSON payload handling.',
    usedIn: [
      'Backend Route Handlers',
      'Authentication Middleware',
      'API Request Routing & Validation',
    ],
  },

  // Database
  {
    name: 'Firebase',
    category: 'Database',
    iconName: 'Flame',
    description: 'Cloud Firestore NoSQL, Firebase Authentication, cloud messaging, and real-time synchronization.',
    usedIn: [
      'eMaternal Vaccination Record App',
      'Real-Time Cloud Synchronization',
      'User Authentication & Push Alerts',
    ],
  },
  {
    name: 'MongoDB',
    category: 'Database',
    iconName: 'HardDrive',
    description: 'Document-oriented database, flexible schema modeling, indexing, and aggregation pipelines.',
    usedIn: [
      'Full-Stack Application Data Stores',
      'User Feedback Collection',
      'Unstructured Document Storage',
    ],
  },
  {
    name: 'MySQL',
    category: 'Database',
    iconName: 'Database',
    description: 'Relational schema design, complex multi-table joins, query indexing, and ACID transaction integrity.',
    usedIn: [
      'Academic Database Systems Project',
      'Relational Data Modeling',
      'Structured Business Reporting Queries',
    ],
  },

  // AI / ML
  {
    name: 'Machine Learning',
    category: 'AI / ML',
    iconName: 'BrainCircuit',
    description: 'Data preprocessing, supervised model training, evaluation metrics, and predictive inference.',
    usedIn: [
      'TESRECO ML Internship',
      'Predictive Classification Models',
      'Feature Engineering Pipelines',
    ],
  },
  {
    name: 'Generative AI',
    category: 'AI / ML',
    iconName: 'Sparkles',
    description: 'LLM application architecture, multimodal synthesis, streaming token pipelines, and AI agent flows.',
    usedIn: [
      'Google GenAI Academy Hackathon',
      'AI Decision Intelligence Project',
      'Automated PR Summary Generation',
    ],
  },
  {
    name: 'Hugging Face',
    category: 'AI / ML',
    iconName: 'Bot',
    description: 'Transformers pipeline integration, pre-trained model inference, and emotion/sentiment classification.',
    usedIn: [
      'FeelMate Emotion Support Application',
      'Text Classification Pipelines',
      'NLP Sentiment Analysis',
    ],
  },
  {
    name: 'Prompt Engineering',
    category: 'AI / ML',
    iconName: 'Wand2',
    description: 'Few-shot system prompt design, strict JSON schema output enforcement, and reasoning chains.',
    usedIn: [
      'Google GenAI Academy Competition',
      'Structured Decision Extraction',
      'AI-Powered Code Review Heuristics',
    ],
  },

  // Tools
  {
    name: 'Git',
    category: 'Tools',
    iconName: 'GitBranch',
    description: 'Distributed version control, branch management, rebasing, merge conflict resolution, and commits.',
    usedIn: [
      'Daily Project Version Control',
      'Team Branching Workflows',
      'Open Source Contributions',
    ],
  },
  {
    name: 'GitHub',
    category: 'Tools',
    iconName: 'Github',
    description: 'Repository hosting, pull requests, issue tracking, project boards, and collaborative code reviews.',
    usedIn: [
      'GitHub PR Review Tool Ingestion',
      'Open Source Project Repositories',
      'TESRECO Code Review Workflows',
    ],
  },
  {
    name: 'VS Code',
    category: 'Tools',
    iconName: 'Monitor',
    description: 'Primary IDE, debugging configurations, linting integrations, and rapid prototyping workflows.',
    usedIn: [
      'Full-Stack Software Development',
      'Python & TypeScript Debugging',
      'Extensions & Workspace Configurations',
    ],
  },
  {
    name: 'Vite',
    category: 'Tools',
    iconName: 'FastForward',
    description: 'Next-generation frontend tooling, lightning-fast HMR, Rollup bundling, and optimized asset delivery.',
    usedIn: [
      'High-Performance Portfolio Build',
      'React App Prototyping',
      'Production Bundle Optimization',
    ],
  },
];
