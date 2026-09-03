import { Experience } from '../types';

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'tesreco-internship',
    role: 'Machine Learning Intern',
    company: 'TESRECO',
    period: '15th June 2026 to 31st July 2026',
    type: 'Internship',
    location: 'Remote, India',
    badge: 'Industry Internship',
    description:
      'Engineered machine learning pipelines, processed training datasets, developed test-driven Python backend modules, and collaborated across technical teams to accelerate feature delivery.',
    responsibilities: [
      'Engineered clean, test-driven Python backends and machine learning data preprocessing pipelines.',
      'Conducted exploratory data analysis, dataset cleansing, and validation for predictive models.',
      'Constructed automated review and testing scripts adhering to clean-code and SOLID principles.',
      'Collaborated closely with senior engineers in agile sprints, daily standups, and codebase reviews.',
    ],
    techStack: ['Python', 'Machine Learning', 'Data Processing', 'Software Development', 'Team Collaboration'],
    highlights: [
      'Streamlined data preprocessing pipelines, reducing feature extraction time by 28%.',
      'Authored reusable Python utilities utilized across active repository branches.',
      'Earned commendation from senior engineering leadership for rigorous code hygiene.',
    ],
    certificateUrl: 'https://tesreco.com/verify',
  },
  {
    id: 'google-genai-academy',
    role: 'AI / Hackathon Experience',
    company: 'GOOGLE GENAI ACADEMY',
    period: '2026',
    type: 'Hackathon',
    location: 'India',
    badge: 'National Innovation Hackathon',
    description:
      'Built an end-to-end intelligent assistive web platform leveraging Google Gemini generative AI models, structured prompt engineering pipelines, and real-time streaming interfaces.',
    responsibilities: [
      'Architected prompt pipelines and few-shot inference chains for multi-modal synthesis.',
      'Built a reactive web application in React and Tailwind with streaming inference responses.',
      'Tackled edge cases and error degradation mechanisms under high API concurrency.',
      'Collaborated intensely in a multi-disciplinary team during rapid sprint milestones.',
    ],
    techStack: ['Generative AI', 'AI Applications', 'Problem Solving', 'Team Collaboration', 'Python', 'React'],
    highlights: [
      'Ranked among top 5% of nationwide participating engineering teams.',
      'Achieved sub-900ms average response latency using streaming token outputs.',
      'Received mentorship and technical recognition from Google developer advocates.',
    ],
  },
  {
    id: 'academic-fog-balancer',
    role: 'Fog Computing Load Balancer',
    company: 'ACADEMIC PROJECT EXPERIENCE',
    period: '2025 - 2026',
    type: 'Academic Project',
    location: 'Engineering Campus',
    badge: 'Systems Capstone',
    description:
      'Engineered and simulated an adaptive Fog Computing Load Balancer for IoT ecosystems, dynamically balancing computing tasks between edge nodes and centralized cloud servers.',
    responsibilities: [
      'Formulated adaptive load-balancing algorithms (Weighted Round Robin & Genetic optimization).',
      'Modeled IoT sensor traffic spikes, transmission delays, and fog edge node queue constraints in Java.',
      'Benchmarked power consumption, packet drop rates, and end-to-end system throughput.',
      'Constructed an interactive React telemetry visualizer to inspect live queue metrics.',
    ],
    techStack: ['Java', 'Fog Computing', 'Cloud Computing', 'IoT', 'Load Balancing', 'React'],
    highlights: [
      'Reduced average network latency by 34.2% compared to traditional centralized cloud baselines.',
      'Awarded 1st Place distinction among capstone engineering projects by faculty committee.',
      'Authored comprehensive technical documentation and system architecture breakdown.',
    ],
  },
];
