import { Achievement } from '../types';

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'ach-internship',
    category: 'Internship',
    title: 'Industry Internship Commendation',
    issuer: 'TESRECO',
    date: '2026',
    badge: 'Industry Practice',
    description:
      'Engineered machine learning pipelines, Python backend services, and automated developer utilities during active industry internship with positive team feedback.',
    metrics: '28% reduction in preprocessing cycle',
  },
  {
    id: 'ach-hackathons',
    category: 'Hackathons',
    title: 'Google GenAI Academy Finalist',
    issuer: 'Google Developers Community',
    date: '2026',
    badge: 'Top 5% Finalist',
    description:
      'Recognized among top nationwide engineering teams for designing an intelligent, generative AI application using the Gemini API with structured prompt workflows.',
    metrics: 'Selected out of hundreds of entries',
  },
  {
    id: 'ach-projects',
    category: 'Projects',
    title: 'Best Distributed Systems Capstone',
    issuer: 'Engineering Faculty Department',
    date: '2025',
    badge: '1st Place Honor',
    description:
      'Awarded first place among final-year capstone presentations for novel simulation and load-balancing algorithm design in IoT Fog Computing.',
    metrics: '34.2% latency reduction over cloud baselines',
  },
  {
    id: 'ach-certifications',
    category: 'Certifications',
    title: 'Academic & Industry Credentials',
    issuer: 'Google, TESRECO & University',
    date: '2025 - 2026',
    badge: '4+ Verified Credentials',
    description:
      'Earned rigorous certifications across Python programming, Generative AI models, distributed systems, and machine learning fundamentals.',
    metrics: '100% verified coursework completion',
  },
  {
    id: 'ach-learning',
    category: 'Technical Learning',
    title: 'Continuous Software Craftsmanship',
    issuer: 'Open Source & Technical Labs',
    date: 'Ongoing',
    badge: 'Lifelong Builder',
    description:
      'Dedicated to regular coding problem solving, exploring cutting-edge AI architectures, modern React interfaces, and building practical software that solves real problems.',
    metrics: 'Active GitHub repository maintenance',
  },
];
