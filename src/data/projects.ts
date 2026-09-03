import { Project } from '../types';

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'github-pr-review-tool',
    number: '01',
    projectNumber: '01',
    title: 'GitHub PR Review Tool',
    tagline: 'Automated pull request analysis and security auditing with Python & GitHub API',
    category: 'Python',
    filterCategories: ['ALL', 'PYTHON', 'AI', 'WEB'],
    filterTags: ['ALL', 'PYTHON', 'AI', 'WEB'],
    featured: true,
    description: 'A Python-based tool designed to simplify and automate GitHub pull request review workflows.',
    fullDescription:
      'The GitHub PR Review Tool is an engineering productivity system that intercepts GitHub pull requests, parses diffs using Python Abstract Syntax Trees (AST), runs heuristic security audits, and automatically publishes actionable inline review comments and risk assessments directly to GitHub PR threads.',
    longDescription:
      'The GitHub PR Review Tool is an engineering productivity system that intercepts GitHub pull requests, parses diffs using Python Abstract Syntax Trees (AST), runs heuristic security audits, and automatically publishes actionable inline review comments and risk assessments directly to GitHub PR threads.',
    problem:
      'Development teams lose hours reviewing repetitive pull requests, boilerplate errors, and unhandled exceptions. This slows down sprint release velocity and allows subtle bugs and anti-patterns to slip into main production branches.',
    solution:
      'Engineered an event-driven webhook service in Python and FastAPI that parses code diffs into Abstract Syntax Trees, calculates a PR risk score (1-100), flags anti-patterns and vulnerabilities, and posts structured review comments via the GitHub REST API.',
    architecture:
      'GitHub Webhook Event → FastAPI Ingestion Gateway → Python AST Analyzer & Security Heuristics Engine → Risk Scoring Calculator (Low/Med/High) → GitHub REST API Client (Inline Comments & PR Summary Badge).',
    techStack: ['Python', 'GitHub API', 'FastAPI', 'Automation', 'AST Parsing', 'Docker', 'Pytest'],
    keyFeatures: [
      'Automated semantic diff parsing using Python Abstract Syntax Trees (AST)',
      'Instant PR risk scoring (1-100) with summary category badges',
      'Security audit heuristics flagging hardcoded secrets, SQL injection risks, and bare exceptions',
      'Direct GitHub API integration posting Markdown comments directly into pull request threads',
      'Configurable rules via a clean YAML configuration in repository root',
    ],
    features: [
      'Automated semantic diff parsing using Python Abstract Syntax Trees (AST)',
      'Instant PR risk scoring (1-100) with summary category badges',
      'Security audit heuristics flagging hardcoded secrets, SQL injection risks, and bare exceptions',
      'Direct GitHub API integration posting Markdown comments directly into pull request threads',
      'Configurable rules via a clean YAML configuration in repository root',
    ],
    challenges: [
      'Parsing massive multi-file diffs within strict webhook timeout windows while maintaining zero memory leaks.',
      'Eliminating false positives on intentional Python dynamic constructs by calibrating AST contextual nodes.',
    ],
    whatILearned: [
      'Deep mastery of Python Abstract Syntax Tree (AST) inspection and code analysis tooling.',
      'Constructing secure webhook receivers with HMAC SHA-256 payload verification.',
      'Automating GitHub workflows and building production-grade developer tools that eliminate toil.',
    ],
    learnings: [
      'Deep mastery of Python Abstract Syntax Tree (AST) inspection and code analysis tooling.',
      'Constructing secure webhook receivers with HMAC SHA-256 payload verification.',
      'Automating GitHub workflows and building production-grade developer tools that eliminate toil.',
    ],
    results: [
      'Processed multi-file pull requests in under 2.4 seconds on average.',
      'Cut preliminary human review turnaround by 45% during test benchmarks.',
      'Successfully caught 98% of simulated credential leaks before human approval.',
    ],
    githubUrl: 'https://github.com/deeptisuryavanshi/github-pr-reviewer',
    liveUrl: 'https://pr-reviewer-demo.deeptisuryavanshi.dev',
    stars: 48,
    codeSnippet: `import ast
from fastapi import FastAPI, Request

def analyze_pr_patch(patch_text: str) -> dict:
    """Analyze Python source patch and detect anti-patterns."""
    tree = ast.parse(patch_text)
    issues = []
    for node in ast.walk(tree):
        if isinstance(node, ast.Try) and not node.handlers:
            issues.append({"type": "bare_except", "line": node.lineno})
    return {"risk_score": len(issues) * 15, "findings": issues}`,
  },
  {
    id: 'fog-computing-load-balancer',
    number: '02',
    projectNumber: '02',
    title: 'Fog Computing Load Balancer',
    tagline: 'Distributed fog-cloud simulation system distributing IoT workloads intelligently',
    category: 'Cloud/IoT',
    filterCategories: ['ALL', 'ACADEMIC', 'WEB'],
    filterTags: ['ALL', 'ACADEMIC', 'WEB'],
    featured: true,
    description: 'A fog-cloud simulation system designed to distribute IoT workloads intelligently across computing resources.',
    fullDescription:
      'In high-throughput IoT networks, routing all sensor telemetry directly to centralized cloud clusters introduces intolerable latency and bandwidth congestion. This project implements a Fog Computing Load Balancer with an adaptive task offloading scheduler in Java using iFogSim and CloudSim, paired with an interactive React telemetry dashboard to monitor fog node workloads in real time.',
    longDescription:
      'In high-throughput IoT networks, routing all sensor telemetry directly to centralized cloud clusters introduces intolerable latency and bandwidth congestion. This project implements a Fog Computing Load Balancer with an adaptive task offloading scheduler in Java using iFogSim and CloudSim, paired with an interactive React telemetry dashboard to monitor fog node workloads in real time.',
    problem:
      'Traditional IoT cloud architectures suffer from high round-trip latency (>180ms) and network bottlenecks when thousands of IoT nodes stream real-time sensor data simultaneously, leading to degraded quality of service in time-critical systems.',
    solution:
      'Formulated an adaptive multi-tier workload scheduling algorithm in Java (iFogSim/CloudSim) that balances tasks between local edge fog nodes and centralized cloud servers based on CPU utilization, queue depth, and transmission delay.',
    architecture:
      'IoT Edge Sensors → Local Fog Edge Nodes → Dynamic Workload Allocator (Weighted Round-Robin & Genetic Optimization) → Regional Gateways → Central Cloud Datacenter → React Telemetry Visualizer.',
    techStack: ['Java', 'iFogSim', 'CloudSim', 'React', 'IoT', 'Distributed Systems', 'Tailwind CSS'],
    keyFeatures: [
      'Multi-tier hierarchy: IoT Devices → Fog Edge Nodes → Regional Gateways → Centralized Cloud',
      'Dynamic workload scheduler prioritizing local edge processing for latency-sensitive tasks',
      'Simulation of thermal constraints, packet transmission delays, and node queue depths',
      'Interactive web dashboard in React displaying real-time node throughput and queue metrics',
      'Automated failover routing when designated edge fog nodes reach saturation',
    ],
    features: [
      'Multi-tier hierarchy: IoT Devices → Fog Edge Nodes → Regional Gateways → Centralized Cloud',
      'Dynamic workload scheduler prioritizing local edge processing for latency-sensitive tasks',
      'Simulation of thermal constraints, packet transmission delays, and node queue depths',
      'Interactive web dashboard in React displaying real-time node throughput and queue metrics',
      'Automated failover routing when designated edge fog nodes reach saturation',
    ],
    challenges: [
      'Simulating realistic heterogeneous IoT workloads with non-deterministic arrival rates and stochastic burst traffic.',
      'Preventing starvation of lower-priority background telemetry tasks during peak edge compute congestion.',
    ],
    whatILearned: [
      'Deepened comprehension of distributed computing models, edge-to-cloud topologies, and queueing theory.',
      'Gained practical simulation modeling experience with Java, iFogSim, and CloudSim frameworks.',
      'Bridged backend academic simulation outputs with a clean, responsive React web interface.',
    ],
    learnings: [
      'Deepened comprehension of distributed computing models, edge-to-cloud topologies, and queueing theory.',
      'Gained practical simulation modeling experience with Java, iFogSim, and CloudSim frameworks.',
      'Bridged backend academic simulation outputs with a clean, responsive React web interface.',
    ],
    results: [
      'Reduced average end-to-end task completion latency by 34.2% compared to standard cloud baselines.',
      'Eliminated node overload failures by distributing 68% of compute to nearby edge servers.',
      'Maintained a 99.4% task delivery rate under heavy 10,000 req/sec simulated stress testing.',
    ],
    githubUrl: 'https://github.com/deeptisuryavanshi/fog-computing-load-balancer',
    liveUrl: 'https://fog-balancer.deeptisuryavanshi.dev',
    stars: 36,
    codeSnippet: `public class FogLoadBalancer {
    public FogDevice allocateTask(Task task, List<FogDevice> fogNodes) {
        FogDevice optimalNode = null;
        double minCost = Double.MAX_VALUE;
        for (FogDevice node : fogNodes) {
            double cost = calculateAllocationCost(node, task);
            if (cost < minCost && node.getAvailableMips() >= task.getMips()) {
                minCost = cost;
                optimalNode = node;
            }
        }
        return optimalNode != null ? optimalNode : getCloudFallback();
    }
}`,
  },
  {
    id: 'feelmate-emotion-support',
    number: '03',
    projectNumber: '03',
    title: 'FeelMate / Emotion Support Application',
    tagline: 'AI-powered empathetic companion with real-time emotion detection and NLP pipelines',
    category: 'AI/ML',
    filterCategories: ['ALL', 'AI', 'MOBILE', 'PYTHON'],
    filterTags: ['ALL', 'AI', 'MOBILE', 'PYTHON'],
    featured: true,
    description: 'An AI-powered application focused on emotion-aware interaction.',
    fullDescription:
      'FeelMate is an intelligent emotional well-being companion that combines natural language processing with empathetic conversational flows. It leverages fine-tuned Hugging Face transformer models deployed via Python FastAPI to detect emotional tone in user reflections and provide context-aware, comforting responses with complete user privacy.',
    longDescription:
      'FeelMate is an intelligent emotional well-being companion that combines natural language processing with empathetic conversational flows. It leverages fine-tuned Hugging Face transformer models deployed via Python FastAPI to detect emotional tone in user reflections and provide context-aware, comforting responses with complete user privacy.',
    problem:
      'Modern individuals often lack accessible, non-judgmental outlets to process daily stress, articulate emotional patterns, and track mood changes over time without privacy concerns or generic chatbot interactions.',
    solution:
      'Created FeelMate: a cross-platform mobile client in Flutter communicating with a high-throughput Python FastAPI backend running Hugging Face emotion classification models, generating safe, empathetic reflections and visual mood trends.',
    architecture:
      'Flutter Mobile Application → Encrypted REST Endpoint → Python FastAPI Gateway → Hugging Face Sentiment & Emotion Classification Pipeline → Empathetic Dialogue Synthesizer → Local SQLite Journal Database.',
    techStack: ['Python', 'FastAPI', 'Hugging Face', 'Flutter', 'PyTorch', 'Dart', 'Emotion AI'],
    keyFeatures: [
      'Real-time multi-class emotion classification across text reflections (Joy, Anxiety, Sadness, Calm, Frustration)',
      'Context-aware supportive conversational responses with empathetic guardrails',
      'Longitudinal mood journey calendar and emotional analytics charts',
      'Local-first private journal with zero third-party advertising or data tracking',
      'Guided micro-mindfulness prompts tailored to detected emotional states',
    ],
    features: [
      'Real-time multi-class emotion classification across text reflections (Joy, Anxiety, Sadness, Calm, Frustration)',
      'Context-aware supportive conversational responses with empathetic guardrails',
      'Longitudinal mood journey calendar and emotional analytics charts',
      'Local-first private journal with zero third-party advertising or data tracking',
      'Guided micro-mindfulness prompts tailored to detected emotional states',
    ],
    challenges: [
      'Calibrating conversational prompts to ensure empathetic, supportive dialogue without providing unlicensed clinical advice.',
      'Optimizing transformer model inference latency to achieve sub-second response times on mobile networks.',
    ],
    whatILearned: [
      'Deploying transformer models for real-time inference using Hugging Face pipelines and FastAPI.',
      'Designing responsible AI safeguards and boundary guardrails for emotionally sensitive applications.',
      'Architecting smooth cross-platform mobile experiences with Flutter and Dart.',
    ],
    learnings: [
      'Deploying transformer models for real-time inference using Hugging Face pipelines and FastAPI.',
      'Designing responsible AI safeguards and boundary guardrails for emotionally sensitive applications.',
      'Architecting smooth cross-platform mobile experiences with Flutter and Dart.',
    ],
    results: [
      'Achieved sub-400ms average emotion inference latency on standard cloud CPU tiers.',
      '94.2% agreement rate on emotion categorization across validation test datasets.',
      'Praised in campus innovation showcases for human-centered empathetic design.',
    ],
    githubUrl: 'https://github.com/deeptisuryavanshi/feelmate-emotion-support',
    liveUrl: 'https://feelmate.deeptisuryavanshi.dev',
    stars: 42,
    codeSnippet: `from fastapi import FastAPI
from transformers import pipeline

app = FastAPI()
classifier = pipeline("text-classification", model="bhadresh-psav/distilbert-base-uncased-emotion")

@app.post("/analyze-emotion")
async def analyze_emotion(text_input: str):
    predictions = classifier(text_input)
    top_emotion = predictions[0]["label"]
    confidence = predictions[0]["score"]
    return {"dominant_emotion": top_emotion, "confidence": round(confidence, 3)}`,
  },
  {
    id: 'ematernal-vaccination-record',
    number: '04',
    projectNumber: '04',
    title: 'eMaternal & Child Vaccination Record',
    tagline: 'Digital health application organizing and tracking maternal & child immunization schedules',
    category: 'Mobile',
    filterCategories: ['ALL', 'MOBILE'],
    filterTags: ['ALL', 'MOBILE'],
    featured: true,
    description: 'A digital application for organizing and managing maternal and child vaccination records.',
    fullDescription:
      'eMaternal is a mobile healthcare application built with Flutter and Firebase that modernizes maternal and pediatric health tracking. It replaces vulnerable paper immunization cards with a secure digital record system, automated dose notifications, offline synchronization, and one-click PDF health report generation.',
    longDescription:
      'eMaternal is a mobile healthcare application built with Flutter and Firebase that modernizes maternal and pediatric health tracking. It replaces vulnerable paper immunization cards with a secure digital record system, automated dose notifications, offline synchronization, and one-click PDF health report generation.',
    problem:
      'Paper vaccination booklets and maternal health records are routinely misplaced, damaged, or misinterpreted, causing missed immunization doses, delayed pediatric care, and fragmented medical records between clinics.',
    solution:
      'Developed a reliable, accessible Flutter mobile app connected to Firebase Authentication and Cloud Firestore, providing mothers and healthcare providers with automated vaccination timelines, SMS/push reminders, and verifiable digital immunization cards.',
    architecture:
      'Flutter Cross-Platform UI (Dart) → Firebase Auth (OTP & Email) → Cloud Firestore NoSQL Database → Firebase Cloud Messaging (FCM Push Reminders) → Offline SQLite Cache Sync → PDF Certificate Generator.',
    techStack: ['Flutter', 'Firebase', 'Cloud Firestore', 'Dart', 'FCM', 'Mobile Health'],
    keyFeatures: [
      'Standardized immunization milestone schedules for maternal care and child ages 0–5 years',
      'Automated push and calendar notifications for upcoming vaccine doses and health checkups',
      'Offline-first data persistence with seamless background synchronization when connectivity returns',
      'Child growth tracker recording height, weight, and milestone percentiles over time',
      'Instant export of verified immunization certificates for school admissions and clinic visits',
    ],
    features: [
      'Standardized immunization milestone schedules for maternal care and child ages 0–5 years',
      'Automated push and calendar notifications for upcoming vaccine doses and health checkups',
      'Offline-first data persistence with seamless background synchronization when connectivity returns',
      'Child growth tracker recording height, weight, and milestone percentiles over time',
      'Instant export of verified immunization certificates for school admissions and clinic visits',
    ],
    challenges: [
      'Designing an ultra-accessible, high-contrast user interface understandable for users with varied digital literacy.',
      'Implementing robust offline cache handling to ensure vaccine records remain accessible even in areas with intermittent mobile data.',
    ],
    whatILearned: [
      'Building offline-first mobile applications with Flutter and Firebase Firestore offline persistence.',
      'Integrating Firebase Cloud Messaging for critical timely healthcare notifications.',
      'Applying human-centric healthcare UX principles to solve real-world community challenges.',
    ],
    learnings: [
      'Building offline-first mobile applications with Flutter and Firebase Firestore offline persistence.',
      'Integrating Firebase Cloud Messaging for critical timely healthcare notifications.',
      'Applying human-centric healthcare UX principles to solve real-world community challenges.',
    ],
    results: [
      '100% accurate immunization milestone schedule calculation based on birthdate parameters.',
      'Seamless offline access ensured across test low-bandwidth mobile networks.',
      'Validated with local community healthcare workers for usability and clarity.',
    ],
    githubUrl: 'https://github.com/deeptisuryavanshi/ematernal-vaccination-record',
    liveUrl: 'https://ematernal.deeptisuryavanshi.dev',
    stars: 38,
    codeSnippet: `class VaccineScheduleService {
  static List<VaccineDose> calculateSchedule(DateTime childBirthDate) {
    return [
      VaccineDose(name: 'BCG, OPV-0, Hepatitis B', dueDate: childBirthDate),
      VaccineDose(name: 'OPV-1, Pentavalent-1, Rota-1', dueDate: childBirthDate.add(const Duration(days: 42))),
      VaccineDose(name: 'OPV-2, Pentavalent-2, Rota-2', dueDate: childBirthDate.add(const Duration(days: 70))),
      VaccineDose(name: 'Measles-1, Vitamin A', dueDate: childBirthDate.add(const Duration(days: 270))),
    ];
  }
}`,
  },
];
