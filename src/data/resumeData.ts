export interface ProjectResumeItem {
  id: string;
  title: string;
  roleOrContext: string;
  statusBadge: string;
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  keyContributions: string[];
  technologies: string[];
}

export interface EducationResumeItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface AchievementResumeItem {
  title: string;
  organization: string;
  year: string;
  badge: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  headline: string;
  location: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  summary: string;
  cvConfig: {
    hasUploadedPdf: boolean;
    pdfPath: string;
    fileName: string;
    atsPdfPath: string;
    atsFileName: string;
    pendingMessage: string;
  };
  education: EducationResumeItem[];
  skills: SkillCategory[];
  projects: ProjectResumeItem[];
  achievements: AchievementResumeItem[];
  startupExperience?: {
    role: string;
    company: string;
    period: string;
    description: string;
    outcomes: string[];
  };
}

export const RESUME_DATA: ResumeData = {
  name: 'Sneha Maurya',
  headline: 'MCA Student | Product Design · UI/UX · AI · Frontend Development',
  location: 'Nashik, Maharashtra, India',
  email: 'snehamaurya12200@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/sneha-maurya-b842743b0/',
  githubUrl: 'https://github.com/snehamaurya12200-design',

  summary:
    'MCA student focused on product design, UI/UX, and AI-assisted product development. Interested in combining product thinking, user-centered design, and rapid prototyping to create useful digital experiences. Builds and explores projects across interface design, frontend development, and AI-enabled product concepts.',

  cvConfig: {
    hasUploadedPdf: true,
    pdfPath: '/Sneha-Maurya-CV.pdf',
    fileName: 'Sneha-Maurya-CV.pdf',
    atsPdfPath: '/Sneha-Maurya-ATS-Resume.pdf',
    atsFileName: 'Sneha-Maurya-ATS-Resume.pdf',
    pendingMessage:
      'Official CV and ATS Resume PDF documents are ready for instant download!',
  },

  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Sandip Institute of Engineering and Management (SIEM)',
      period: '2024 — Expected 2027',
      location: 'Nashik, Maharashtra, India',
      highlights: [
        'Advanced computer application systems, software architecture & data structures.',
        'Human-Computer Interaction (HCI) methodologies and interaction heuristics.',
        'Active postgraduate candidate currently in progress.',
      ],
    },
    {
      degree: 'Bachelor of Business Administration in Computer Applications (BBA-CA)',
      institution: 'Undergraduate Computer Applications & Business Systems',
      period: 'Graduated Foundations',
      location: 'Maharashtra, India',
      highlights: [
        'Relational database design (SQL), systems analysis, and programming foundations.',
        'Developed foundational mental models for commercial product viability.',
      ],
    },
  ],

  skills: [
    {
      title: 'Product & Design',
      subtitle: 'User Experience, Systems & Visual Polish',
      skills: [
        'UI/UX Design',
        'Product Design',
        'Web Design',
        'User Flows',
        'Interactive Prototyping',
        'Figma Design Systems',
        'Product Thinking',
        'Usability Heuristics (WCAG AA)',
      ],
    },
    {
      title: 'AI & Rapid Prototyping',
      subtitle: 'Multimodal Interfaces & Smart Workflows',
      skills: [
        'AI-Assisted Development',
        'Prompt Engineering',
        'Multimodal API Workflows',
        'Gemini API Integration',
        'AI Product Concepts',
        'Context & Guardrail Structuring',
      ],
    },
    {
      title: 'Frontend Development',
      subtitle: 'Production Web Engineering',
      skills: [
        'HTML5 & Semantic Markup',
        'CSS3 & Modern Layout Math',
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Tailwind CSS',
        'Responsive Web Design',
        'Vercel Deployment',
      ],
    },
    {
      title: 'Programming & Technical Foundations',
      subtitle: 'Core Systems & Computation',
      skills: [
        'Python',
        'C',
        'C++',
        'SQL & Relational Queries',
        'Java (Basic)',
        'Data Structures & Algorithms',
        'Git & GitHub Version Control',
      ],
    },
  ],

  projects: [
    {
      id: 'your-life-in-rec',
      title: 'Your Life, In Receipts',
      roleOrContext: 'WebRush 6-Hour Timed Solo Buildathon',
      statusBadge: 'TOP 5 FINALIST · LIVE APP',
      liveUrl: 'https://yourlifeinrec.vercel.app/',
      description:
        'Experimental frontend application built and deployed solo within a strict 6-hour time limit. Converts abstract Spotify listening habits into a tactile 90s-style thermal cash-register receipt.',
      keyContributions: [
        'Engineered responsive receipt zig-zag tear polygon shaders and print animations.',
        'Built dynamic Spotify listening metric parsing logic into itemized cash register receipts.',
        'Shipped full production deployment to Vercel under live countdown pressure.',
      ],
      technologies: ['React', 'TypeScript', 'CSS Polygon Math', 'Vercel Edge'],
    },
    {
      id: 'the-first-week',
      title: 'The First Week',
      roleOrContext: 'Student Onboarding & Empathy Architecture',
      statusBadge: 'INTERACTIVE WEB CONCEPT',
      liveUrl: 'https://first-week-of-clg.vercel.app/',
      description:
        'An empathetic college orientation web experience that replaces sterile administrative checklists with conversational peer matchmaking and anxiety-reducing roadmap milestones.',
      keyContributions: [
        'Conducted student journey mapping around anxiety triggers in the first 14 days of campus life.',
        'Designed conversational schedule pairing cards with compatibility tags.',
        'Built clickable high-fidelity interactive web prototype.',
      ],
      technologies: ['User Research', 'Information Architecture', 'Figma Wireframing', 'React'],
    },
    {
      id: 'mood-money',
      title: 'Mood Money',
      roleOrContext: 'Behavioral Finance Mobile Concept',
      statusBadge: 'BEHAVIORAL UX CONCEPT',
      liveUrl: 'https://mood-money-hackathon-12.vercel.app/',
      description:
        'Gen Z personal-finance concept designed to counter guilt-inducing spreadsheets with emotional spend-tagging ("deserved a treat", "stress buy", "bored scrolling") and impulse pause loops.',
      keyContributions: [
        'Designed 15-minute checkout pause friction loops to mitigate impulse spending.',
        'Crafted friendly gamified financial health indicators with playful visual feedback.',
        'Published mobile design system with tokenized typography and color palettes.',
      ],
      technologies: ['Behavioral UX', 'Mobile Design', 'Gamification Heuristics'],
    },
    {
      id: 'accessgap',
      title: 'AccessGap',
      roleOrContext: 'Civic Built-Environment Accessibility Platform Spec',
      statusBadge: 'ACTIVE CONCEPT · ARCHITECTURE SPEC',
      description:
        'Auditing platform concept for civic spaces, transit hubs, and schools to catalog physical accessibility barriers and track remediation pipelines.',
      keyContributions: [
        'Operationalized 5-stage barrier workflow: Audit → Score → Prioritize → Fix → Re-audit → Prove improvement.',
        'Designed slope deviation radar cards and WCAG/ADA accessibility criteria dashboards.',
      ],
      technologies: ['Accessibility Auditing', 'Design Tokens', 'SaaS Dashboard'],
    },
    {
      id: 'udyog-mitra',
      title: 'Udyog Mitra',
      roleOrContext: 'Vernacular AI Copilot Concept for Small Businesses',
      statusBadge: 'ACTIVE CONCEPT · VERNACULAR AI',
      description:
        'Hindi-first conversational voice bookkeeping concept designed to empower local Indian shopkeepers (dukaandars) to record and query daily ledgers through natural speech.',
      keyContributions: [
        'Crafted natural Hindi-first voice prompt dialog heuristics and speech confirmation flows.',
        'Structured simplified ledger cards that eliminate accounting jargon for non-tech-native owners.',
      ],
      technologies: ['Multimodal Voice UX', 'Prompt Engineering', 'Vernacular UI'],
    },
  ],

  achievements: [
    {
      title: '1st Runner-Up — NexaForge × Unstop AI Challenge',
      organization: 'NexaForge × Unstop Creative Prompt Challenge 2026',
      year: '2026',
      badge: '1ST RUNNER-UP',
      description:
        'Awarded 1st Runner-Up in the national AI Prompt & Image Generation Challenge organized by NexaForge in partnership with Unstop, recognized for multimodal prompt precision and creative vision.',
    },
    {
      title: 'Top 10 Finalist (6th Place, Score: 96.0/100) — Prompt Run 2026',
      organization: 'Frontend Arena × Unstop',
      year: '2026',
      badge: 'TOP 10 FINALIST (96/100)',
      description:
        'Recognized for engineering excellence and design craftsmanship, placing 6th overall with a 96.0/100 score in competitive frontend hackathon.',
    },
    {
      title: 'Rank #28 — WebRush 2026 6-Hour Frontend Hackathon',
      organization: 'Frontend Arena × Unstop',
      year: '2026',
      badge: 'RANK #28',
      description:
        'Secured Rank #28 in 6-hour frontend hackathon for solo rapid build and live deployment of "Your Life, In Receipts".',
    },
    {
      title: 'National Space Tech Participant — Bharatiya Antariksh Hackathon',
      organization: 'ISRO (Indian Space Research Organisation)',
      year: '2024',
      badge: 'NATIONAL PARTICIPATION',
      description:
        'Participated in national-level space innovation hackathon addressing geospatial visualization and space application problem statements.',
    },
  ],

  startupExperience: {
    role: 'Product Designer (Startup Team Experience)',
    company: 'StuMate',
    period: '2024 — 2025',
    description:
      'Contributed end-to-end UI/UX design to an early-stage student collaboration and academic peer-matching platform.',
    outcomes: [
      'Conducted user research interviews with 28 university students to uncover academic collaboration roadblocks.',
      'Designed responsive student discovery feed, study room scheduling, and peer chat loops in Figma.',
      'Authored the StuMate design system component library, accelerating frontend handoff for the engineering team.',
      'Shipped the MVP that onboarded over 500 active beta students across campus pilot groups.',
    ],
  },
};
