import { TechStackItem, Project, Article, JourneyMetric } from '../types';

export const PERSONAL_INFO = {
  name: 'Suraj Kumar Yadav',
  role: 'Software Engineer',
  tagline: 'Building scalable full-stack systems and AI-powered applications.',
  bio: "Results-driven Software Engineer with 1+ year of hands-on industry experience designing, developing, and deploying scalable full-stack systems and AI-powered applications in production environments. Demonstrated expertise in building distributed, secure, and high-performance software solutions.",
  location: 'Bhubaneswar, Odisha, India',
  availability: 'Seeking opportunities at Google Payments',
  education: 'KIIT Deemed University — B.Tech in CSE (CGPA: 8.35/10.0)',
  experienceYears: '1+',
  projectsCount: '10+',
  stacksCount: '15+',
  learningMindset: '100%',
  socials: {
    github: 'https://github.com/Thesuraj01',
    linkedin: 'https://linkedin.com/in/surajyadav01',
    portfolio: 'https://surajkumaryadavin.vercel.app',
    email: 'thesuraj396@gmail.com',
  },
};

export const TECH_STACK: TechStackItem[] = [
  {
    id: 'python',
    name: 'Languages',
    category: 'backend',
    iconKey: 'python',
    proficiency: 95,
    description: 'Python, JavaScript (ES6+), TypeScript, Java, C, C++, SQL',
  },
  {
    id: 'frontend',
    name: 'Frontend',
    category: 'frontend',
    iconKey: 'react',
    proficiency: 92,
    description: 'React.js, Vue.js 3, Next.js, Vite, TailwindCSS, HTML5, CSS3, Three.js, Zustand',
  },
  {
    id: 'backend',
    name: 'Backend',
    category: 'backend',
    iconKey: 'nodejs',
    proficiency: 90,
    description: 'Node.js, Express.js, FastAPI, RESTful APIs, WebSockets, Server-Sent Events (SSE)',
  },
  {
    id: 'ai_ml',
    name: 'AI / ML',
    category: 'backend',
    iconKey: 'brain',
    proficiency: 88,
    description: 'LangGraph, LiteLLM, RAG (BM25/TF-IDF/Vector), TensorFlow, PyTorch, Scikit-Learn, FAISS, Pydantic',
  },
  {
    id: 'database',
    name: 'Databases',
    category: 'database',
    iconKey: 'postgresql',
    proficiency: 86,
    description: 'MongoDB, PostgreSQL, Redis, MongoDB Atlas (Vector Search), Pinecone, TimescaleDB',
  },
  {
    id: 'cloud_devops',
    name: 'Cloud & DevOps',
    category: 'devops',
    iconKey: 'docker',
    proficiency: 85,
    description: 'Docker, Docker Compose, Google Kubernetes Engine (GKE), AWS (Bedrock, EKS), CI/CD',
  },
  {
    id: 'security',
    name: 'Security',
    category: 'backend',
    iconKey: 'security',
    proficiency: 84,
    description: 'OAuth 2.0, JWT, Role-Based Access Control (RBAC), Token Encryption, SSO',
  },
  {
    id: 'tools',
    name: 'Tools',
    category: 'frontend',
    iconKey: 'tools',
    proficiency: 85,
    description: 'Git, GitHub, Chrome Extension API (MV3), Groq, Google Maps API, Kafka, Celery',
  },
];

export const JOURNEY_METRICS: JourneyMetric[] = [
  {
    value: '1+',
    label: 'Years',
    sublabel: 'Experience',
    iconName: 'Briefcase',
  },
  {
    value: '10+',
    label: 'Projects',
    sublabel: 'Completed',
    iconName: 'CodeXml',
  },
  {
    value: '5+',
    label: 'Tech',
    sublabel: 'Stacks',
    iconName: 'Layers',
  },
  {
    value: '100%',
    label: 'Learning',
    sublabel: 'Mindset',
    iconName: 'Brain',
  },
];

export const SPECIALTIES: string[] = [
  'Agentic AI Systems',
  'Full Stack Development',
  'Distributed Systems',
  'System Design',
  'RAG & Vector Search',
  'Chrome Extensions',
  'Database Migrations',
  'Cloud Infrastructure',
];

export const RECENT_HIGHLIGHTS = [
  'Architected V-Assure ScriptGen Extension using FastAPI & Groq',
  'Engineered DB-Compare, a high-performance DB validation platform',
  'Led a production-grade Agentic-RAG system achieving sub-45ms cache-hit latency',
  'Built Aiden, an Emotionally Intelligent AI Companion with persistent memory',
];

export const CURRENTLY_BUILDING = {
  title: 'DocRAG',
  subtitle: 'Smart document retrieval system using RAG and AI-powered search.',
  status: 'Active Development',
  tech: ['Python', 'FastAPI', 'LangGraph', 'MongoDB', 'Redis']
};

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    code: 'PROJECT 001',
    title: 'AI Script Generator',
    subtitle: 'Veeva Vault Scripting & LLM Automation',
    description: 'An AI-powered tool to generate Veeva Vault scripts using LangGraph and LLMs.',
    techStack: ['React', 'Python', 'LangGraph'],
    category: 'ai_ml',
    features: [
      'Automated script generation for Veeva Vault using LangGraph workflows',
      'Integration with stateful LLM chains for validation and verification',
      'Direct export and testing pipeline reducing manual setup time by 75%',
    ],
    metrics: '75% Faster Scripting',
    githubUrl: 'https://github.com/Thesuraj01',
    demoUrl: 'https://github.com/Thesuraj01',
    badge: 'LLM Agents',
    level: 'LV 01',
  },
  {
    id: 'proj-2',
    code: 'PROJECT 002',
    title: 'Browser Extension Tool',
    subtitle: 'Smart Script Generation & Automation',
    description: 'A smart browser extension for script generation and automation with Veeva Vault.',
    techStack: ['JavaScript', 'Python', 'Chrome APIs'],
    category: 'automation',
    features: [
      'Manifest V3 Chrome extension architecture with background service workers',
      'Contextual DOM inspector and automatic test script generation',
      'Secure token storage and direct cloud synchronization',
    ],
    metrics: 'Instant In-Browser Execution',
    githubUrl: 'https://github.com/Thesuraj01',
    demoUrl: 'https://github.com/Thesuraj01',
    badge: 'Extensions',
    level: 'LV 02',
  },
  {
    id: 'proj-3',
    code: 'PROJECT 003',
    title: 'Chatbot Platform',
    subtitle: 'Multi-Agent RAG & Vector Search',
    description: 'Multi-agent chatbot platform with RAG and vector search.',
    techStack: ['Python', 'FastAPI', 'LangChain'],
    category: 'ai_ml',
    features: [
      'Multi-agent chatbot architecture powered by LangChain and FastAPI',
      'Hybrid semantic vector retrieval using FAISS and MongoDB Atlas',
      'Real-time streaming token delivery with sub-45ms first-token latency',
    ],
    metrics: 'Sub-45ms Latency',
    githubUrl: 'https://github.com/Thesuraj01',
    level: 'LV 03',
  },
  {
    id: 'proj-4',
    code: 'PROJECT 004',
    title: 'AI Quantitative Stock System',
    subtitle: 'Institutional-grade Predictive Analytics',
    description: 'Predictive analytics platform aggregating 100+ technical indicators with an ML ensemble forecasting engine.',
    techStack: ['Python', 'FastAPI', 'PyTorch', 'Kafka', 'Redis'],
    category: 'web',
    features: [
      'Multi-factor confluence intelligence engine',
      'Real-time event-driven streaming via Kafka + Redis Streams',
      'Backtesting infrastructure and explainable AI reasoning',
    ],
    metrics: 'Sub-100ms Latency',
    githubUrl: 'https://github.com/Thesuraj01',
    level: 'LV 04',
  },
  {
    id: 'proj-5',
    code: 'PROJECT 005',
    title: 'ZipIgnore',
    subtitle: 'Automated Python Project Packaging Utility',
    description: 'A Python-based CLI utility published on PyPI that simplifies project packaging by automatically excluding non-essential files.',
    techStack: ['Python', 'CLI', 'PyPI', 'Automation'],
    category: 'automation',
    features: [
      'Automated exclusion of unwanted files and folders to reduce archive size',
      'Consistent packaging across development teams',
      'Improved security by preventing accidental inclusion of secrets',
    ],
    metrics: 'Published Open Source Tool',
    githubUrl: 'https://pypi.org/project/ZipIgnore/',
    demoUrl: 'https://pypi.org/project/ZipIgnore/',
    badge: 'DevTools',
    level: 'LV 05',
  },
];

export const EXPERIENCES = [
  {
    role: 'Software Engineer',
    company: 'Spotline, Inc. | Bhubaneswar',
    period: 'May 2025 – Present',
    description: 'Architected V-Assure ScriptGen Extension, engineered DB-Compare for high-performance DB validation, led a production-grade Agentic-RAG system with LangGraph & MongoDB Atlas, and contributed to a MS Teams AI Knowledge Bot.',
  },
  {
    role: 'Salesforce Development Intern',
    company: 'SmartInternz (Virtual)',
    period: 'May 2024 – Jun 2024',
    description: 'Developed Apex triggers and automated workflows on Salesforce CRM, reducing manual intervention by 30% and optimizing business process automation.',
  },
];

export const EDUCATION_INFO = {
  institution: 'KIIT Deemed University',
  degree: 'Bachelor of Technology — Computer Science & Engineering (CGPA: 8.35 / 10.0)',
  certifications: [
    'AWS Academy Graduate — Introduction to Cloud Foundations',
    'Cognite Game v4.5 — Certified (Cognite)',
  ],
  extracurricular: [
    'Led 3 end-to-end production systems at Spotline Inc. within the first year as an SE',
    'National Service Scheme (NSS) | General Volunteer (2022 – Present)',
  ],
};

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    code: '01',
    title: 'Building Scalable AI Agents with LangGraph',
    category: 'AI/ML',
    date: 'Apr 12, 2025',
    readTime: '5 min read',
    tags: ['LangGraph', 'LLM', 'Python'],
    summary: 'A deep dive into cyclical agent architectures, state graphs, and fault-tolerant tool calling for production AI agents.',
    content: `Building production AI agents requires moving beyond linear prompt chains. LangGraph allows developers to create cyclical, stateful agent architectures with explicit control flow, conditional checkpoints, and persistent memory.

In this article, we examine how to structure agent state graphs, handle human-in-the-loop verification, and orchestrate multiple specialized subagents with sub-second decision loops.`,
    link: 'https://linkedin.com/in/surajyadav01',
  },
  {
    id: 'art-2',
    code: '02',
    title: 'Browser Automation with Playwright',
    category: 'Automation',
    date: 'Mar 28, 2025',
    readTime: '4 min read',
    tags: ['Playwright', 'Python', 'Web'],
    summary: 'Techniques for bulletproof web scraping, automated testing, and synthetic user workflows at scale.',
    content: `Modern web automation demands resilience against dynamic hydration, shadow DOMs, and anti-bot obstacles. Playwright provides native auto-waiting, network interception, and multi-browser context isolation.

We explore architectural patterns for running concurrent Playwright browser workers with Redis queue scheduling and structured error recoveries.`,
    link: 'https://linkedin.com/in/surajyadav01',
  },
  {
    id: 'art-3',
    code: '03',
    title: 'System Design for Scalable Web Applications',
    category: 'Architecture',
    date: 'Mar 15, 2025',
    readTime: '6 min read',
    tags: ['System Design', 'Scalable', 'Backend'],
    summary: 'Designing resilient distributed backends with caching layers, message queues, and horizontal partitioning.',
    content: `Scalability is not just about raw compute—it is about decoupled state, intelligent caching boundaries, and idempotent background operations.

From distributed locks in Redis to asynchronous stream pipelines in Apache Kafka, this deep dive breaks down battle-tested architectures for handling high-concurrency workloads without downtime.`,
    link: 'https://linkedin.com/in/surajyadav01',
  },
  {
    id: 'art-4',
    code: '04',
    title: 'The Future of AI in Software Development',
    category: 'Technology',
    date: 'Feb 28, 2025',
    readTime: '4 min read',
    tags: ['AI', 'LLM', 'Development'],
    summary: 'Exploring how autonomous agents, reasoning models, and AI pair programming are reshaping modern software engineering.',
    content: `AI in software development is evolving from simple code completions to autonomous agentic pair programmers capable of reading entire codebases, running tests, and executing targeted refactoring.

Here we analyze the paradigm shift from manual coding to specification-driven architecture, where developer velocity is amplified through multi-agent orchestration.`,
    link: 'https://linkedin.com/in/surajyadav01',
  },
  {
    id: 'art-5',
    code: '05',
    title: 'Traveling: The Best Way to Learn About Life',
    category: 'Life & Experiences',
    date: 'Published',
    readTime: '4 min read',
    tags: ['Life', 'Travel', 'Mindset'],
    summary: 'A deep dive into how traveling exposes us to new cultures, challenges our perspectives, and serves as the greatest teacher in life.',
    content: `Traveling is more than just a leisure activity; it is a profound journey of self-discovery and education. When we step outside our comfort zones and immerse ourselves in unfamiliar environments, we open our minds to new ways of thinking and living.

Every destination offers a unique classroom. From understanding the historical context of ancient ruins to navigating the bustling streets of a foreign city, travel teaches us adaptability, empathy, and resilience.`,
    link: 'https://www.linkedin.com/pulse/traveling-best-way-learn-life-suraj-kumar-yadav-sy4hc',
  },
];
