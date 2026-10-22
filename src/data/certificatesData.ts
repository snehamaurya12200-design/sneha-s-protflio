export interface CertificateItem {
  id: string;
  category: 'awards' | 'hackathons' | 'courses' | 'simulations';
  categories: Array<'awards' | 'hackathons' | 'courses' | 'simulations'>;
  title: string;
  issuer: string;
  recipientName: string;
  issueDate: string;
  year: string;
  badge: string;
  badgeType: 'winner' | 'national' | 'verified';
  accentTheme: 'butter' | 'blush' | 'cream' | 'mint' | 'kraft';
  tapePattern: 'cherry-stripes' | 'butter-gingham' | 'dots' | 'burgundy-solid';
  tapePosition: 'top-center' | 'top-left' | 'top-right' | 'angled';
  tiltDeg: number;
  description: string;
  keyTakeaway: string;
  tags: string[];
  assetType: 'image' | 'pdf' | 'docket';
  imageUrl?: string;
  pdfUrl?: string;
  details: {
    scope: string;
    skillsDemonstrated: string[];
    verificationMethod: string;
    credentialId?: string;
    userVerificationCode?: string;
    verificationUrl?: string;
  };
}

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'nexaforge-1st-runner-up',
    category: 'awards',
    categories: ['awards', 'hackathons'],
    title: '1st Runner-Up — AI Prompt & Image Generation Challenge',
    issuer: 'Unstop × NexaForge',
    recipientName: 'Sneha Maurya',
    issueDate: 'October 15, 2026',
    year: '2026',
    badge: '1ST RUNNER UP · NATIONAL PRIZE',
    badgeType: 'winner',
    accentTheme: 'butter',
    tapePattern: 'cherry-stripes',
    tapePosition: 'top-center',
    tiltDeg: -1.2,
    assetType: 'image',
    imageUrl: '/assets/certificates/nexaforge-1st-runner-up.png',
    description:
      'Awarded 1st Runner-Up in the national AI Prompt & Image Generation Challenge organized by NexaForge in partnership with Unstop. Recognized for creativity, innovation, and standout multimodal prompt engineering.',
    keyTakeaway:
      'Clinched 1st Runner-Up nationally for multimodal prompt structuring, precision compositional control, and expressive AI art direction.',
    tags: ['1st Runner-Up', 'Prompt Engineering', 'Unstop × NexaForge', 'Multimodal AI', 'Certified Winner'],
    details: {
      scope:
        'National AI competition organized by NexaForge in partnership with Unstop and media partner @code.with.joydip. Evaluated on creativity, innovation, prompt precision, and visual output.',
      skillsDemonstrated: [
        'Multimodal Prompt Engineering',
        'Image Generation Heuristics',
        'Creative Art Direction',
        'Compositional Guidance',
        'Rapid Iterative Refinement',
      ],
      verificationMethod:
        'Official Certificate of Achievement bearing the NexaForge Certified official seal, signed by Joydip Dey (Founder), Debjit Das (Co-Founder), and Dev Prakash Sahu (Media Director).',
      credentialId: 'NEXAFORGE-CERTIFIED-2026',
      verificationUrl: 'https://unstop.com',
    },
  },
  {
    id: 'prompt-run-finalist',
    category: 'awards',
    categories: ['awards', 'hackathons'],
    title: 'Top 10 Finalist (6th Place) — Prompt Run 2026',
    issuer: 'Frontend Arena × Unstop',
    recipientName: 'Sneha Maurya',
    issueDate: 'October 12, 2026',
    year: '2026',
    badge: 'TOP 10 FINALIST · 6TH PLACE (96/100)',
    badgeType: 'winner',
    accentTheme: 'blush',
    tapePattern: 'butter-gingham',
    tapePosition: 'top-right',
    tiltDeg: 1.1,
    assetType: 'image',
    imageUrl: '/assets/certificates/prompt-run-2026-finalist.png',
    description:
      'Certificate of Finalist in recognition of remarkable engineering excellence, exceptional design craftsmanship, and ranking among the authoritative Top 10 finalists with a score of 96.0/100.',
    keyTakeaway:
      'Scored 96.0/100 to secure 6th place overall in Frontend Arena competitive hackathon evaluating design craftsmanship and code execution.',
    tags: ['Top 10 Finalist', 'Score 96.0/100', 'Prompt Run', 'Frontend Arena', 'Engineering Craft'],
    details: {
      scope:
        'Competitive hackathon organized by Frontend Arena in partnership with Unstop. Evaluated on UI craft, responsive code, and engineering implementation speed.',
      skillsDemonstrated: [
        'Engineering Excellence',
        'Design Craftsmanship',
        'Rapid Frontend Prototyping',
        'Performance & UI Polish',
        'Competitive Problem Solving',
      ],
      verificationMethod:
        'Official Certificate of Finalist bearing Credential ID FA-YNXU427K with scannable QR verification code.',
      credentialId: 'FA-YNXU427K',
      verificationUrl: 'https://unstop.com',
    },
  },
  {
    id: 'webrush-excellence',
    category: 'hackathons',
    categories: ['hackathons', 'awards'],
    title: 'Certificate of Excellence (Rank #28) — WebRush 2026',
    issuer: 'Frontend Arena × Unstop',
    recipientName: 'Sneha Maurya',
    issueDate: 'September 20, 2026',
    year: '2026',
    badge: 'RANK #28 · 6-HOUR SPRINT',
    badgeType: 'winner',
    accentTheme: 'mint',
    tapePattern: 'dots',
    tapePosition: 'top-left',
    tiltDeg: -0.9,
    assetType: 'image',
    imageUrl: '/assets/certificates/webrush-2026-rank28.jpg',
    description:
      'Awarded for securing Rank #28 in WEB RUSH 2026, a 6-hour frontend development hackathon organized by Frontend Arena. Recognized for creativity, technical skills, and rapid prototype completion.',
    keyTakeaway:
      'Coded and shipped the receipt-style streaming interface "Your Life, In Receipts" solo within a strict 6-hour sprint countdown.',
    tags: ['Rank #28', 'WebRush 2026', '6-Hour Sprint', 'Solo Hackathon', 'Live Shipped App'],
    details: {
      scope:
        'Intense 6-hour competitive frontend hackathon sprint organized by Frontend Arena and hosted on Unstop.',
      skillsDemonstrated: [
        'Solo Sprint Execution',
        'React & TypeScript Architecture',
        'CSS Polygon Cut Math',
        'Vercel Deployment Pipeline',
        'Creative Interactive Design',
      ],
      verificationMethod:
        'Official Certificate of Excellence bearing Credential ID FA-RQRNHG72 with scannable QR verification code.',
      credentialId: 'FA-RQRNHG72',
      verificationUrl: 'https://unstop.com',
    },
  },
  {
    id: 'google-cloud-genai-studio',
    category: 'courses',
    categories: ['courses'],
    title: 'Introduction to Generative AI Studio',
    issuer: 'Google Cloud × Simplilearn SkillUp',
    recipientName: 'Sneha Maurya',
    issueDate: 'March 4, 2026',
    year: '2026',
    badge: 'VERIFIED CREDENTIAL',
    badgeType: 'verified',
    accentTheme: 'cream',
    tapePattern: 'burgundy-solid',
    tapePosition: 'angled',
    tiltDeg: 1.2,
    assetType: 'pdf',
    imageUrl: '/assets/certificates/google-cloud-generative-ai-studio.png',
    pdfUrl: '/assets/certificates/google-cloud-generative-ai-studio.pdf',
    description:
      'Declaration of Completion for the Google Cloud Generative AI Studio curriculum, mastering multimodal prompt engineering, foundation models, and responsible AI system architecture.',
    keyTakeaway:
      'Foundational mastery in Google Cloud Generative AI Studio, multimodal prompts, and context engineering.',
    tags: ['Google Cloud', 'Generative AI Studio', 'Multimodal AI', 'Prompt Crafting', 'Simplilearn'],
    details: {
      scope:
        'Comprehensive coursework covering Generative AI Studio powered by Google Cloud, transformer basics, temperature tuning, and ethical AI development.',
      skillsDemonstrated: [
        'Multimodal Prompt Structuring',
        'Context Engineering',
        'System Instructions & Grounding',
        'Responsible AI Guidelines',
      ],
      verificationMethod:
        'Declaration of Completion verified on Simplilearn portal, signed by CEO Krishna Kumar. Certificate Code: 9919895.',
      credentialId: '9919895',
      verificationUrl: 'https://www.simplilearn.com/skillup-free-online-courses',
    },
  },
  {
    id: 'datacom-software-simulation',
    category: 'simulations',
    categories: ['simulations', 'courses'],
    title: 'Software Development Job Simulation',
    issuer: 'DATACOM × Forage',
    recipientName: 'Sneha Maurya',
    issueDate: 'April 27th, 2026',
    year: '2026',
    badge: 'PRACTICAL JOB SIMULATION',
    badgeType: 'verified',
    accentTheme: 'kraft',
    tapePattern: 'butter-gingham',
    tapePosition: 'top-center',
    tiltDeg: -1.3,
    assetType: 'pdf',
    imageUrl: '/assets/certificates/datacom-software-development-simulation.png',
    pdfUrl: '/assets/certificates/datacom-software-development-simulation.pdf',
    description:
      'Completed virtual engineering job simulation for DATACOM, delivering practical tasks in software review, identifying architectural root causes, and implementing verified bug fixes.',
    keyTakeaway:
      'Real-world simulation of enterprise software development workflows: code reviews, bug isolation, and fixing system issues.',
    tags: ['DATACOM', 'Forage Simulation', 'Software Review', 'Root Cause Analysis', 'Bug Fixing'],
    details: {
      scope:
        'Practical job simulation tasks completed over April 2026, evaluated by DATACOM engineering leadership via Forage.',
      skillsDemonstrated: [
        'Software Code Review',
        'Identifying Root Causes',
        'System Debugging & Bug Fixing',
        'Enterprise Engineering Standards',
      ],
      verificationMethod:
        'Verified by Forage. Enrolment Verification Code: aZYEbvbDZFXP4qnTJ | User Verification Code: Mvyppv98AqfpzMZXg. Signed by Co-Founder Tom Brunskill.',
      credentialId: 'aZYEbvbDZFXP4qnTJ',
      userVerificationCode: 'Mvyppv98AqfpzMZXg',
      verificationUrl: 'https://www.theforage.com',
    },
  },
  {
    id: 'tata-data-visualisation',
    category: 'simulations',
    categories: ['simulations', 'courses'],
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'TATA × Forage',
    recipientName: 'Sneha Maurya',
    issueDate: 'April 27th, 2026',
    year: '2026',
    badge: 'PRACTICAL JOB SIMULATION',
    badgeType: 'verified',
    accentTheme: 'butter',
    tapePattern: 'cherry-stripes',
    tapePosition: 'top-right',
    tiltDeg: 1.4,
    assetType: 'pdf',
    imageUrl: '/assets/certificates/tata-data-visualisation-simulation.png',
    pdfUrl: '/assets/certificates/tata-data-visualisation-simulation.pdf',
    description:
      'Completed practical enterprise data visualisation simulation for TATA: framing business scenarios, selecting the most effective visual representations, and communicating executive insights and analytics.',
    keyTakeaway:
      'Bridged raw data analytics with compelling executive visual storytelling and actionable business dashboards.',
    tags: ['TATA', 'Data Visualisation', 'Business Analytics', 'Executive Insights', 'Forage'],
    details: {
      scope:
        'Practical job simulation tasks completed over April 2026 for TATA group business analytics scenarios via Forage.',
      skillsDemonstrated: [
        'Framing the Business Scenario',
        'Choosing the Right Visuals & Charts',
        'Creating Effective Visual Storytelling',
        'Communicating Strategic Insights',
      ],
      verificationMethod:
        'Verified by Forage. Enrolment Verification Code: 8ieuRmEFepKtLckPL | User Verification Code: Mvyppv98AqfpzMZXg. Signed by Co-Founder Tom Brunskill.',
      credentialId: '8ieuRmEFepKtLckPL',
      userVerificationCode: 'Mvyppv98AqfpzMZXg',
      verificationUrl: 'https://www.theforage.com',
    },
  },
  {
    id: 'linkedin-digital-marketing',
    category: 'courses',
    categories: ['courses'],
    title: 'Digital Marketing Foundations',
    issuer: 'LinkedIn Learning',
    recipientName: 'Sneha Maurya',
    issueDate: 'February 26, 2026',
    year: '2026',
    badge: 'PROFESSIONAL SKILLS',
    badgeType: 'verified',
    accentTheme: 'blush',
    tapePattern: 'dots',
    tapePosition: 'top-left',
    tiltDeg: -0.7,
    assetType: 'pdf',
    imageUrl: '/assets/certificates/linkedin-digital-marketing-foundations.png',
    pdfUrl: '/assets/certificates/linkedin-digital-marketing-foundations.pdf',
    description:
      'Course completed on February 26, 2026 (2 hours 9 minutes) covering essential digital marketing fundamentals, user acquisition channels, and audience growth strategy.',
    keyTakeaway:
      'Understanding user acquisition loops, digital marketing channels, and customer journey funnels to design higher-converting product experiences.',
    tags: ['LinkedIn Learning', 'Digital Marketing', 'Growth Strategy', 'Audience Psychology'],
    details: {
      scope:
        'Professional learning path completed on LinkedIn Learning under Head of Learning Content Strategy Shea Hanson.',
      skillsDemonstrated: [
        'Digital Marketing Foundations',
        'User Acquisition Channels',
        'Funnel Optimization',
        'Audience Targeting & Reach',
      ],
      verificationMethod:
        'Official LinkedIn Learning Certificate of Completion with Certificate ID b6993478eb934c31f0ac7dabfbc6a620f06ab0dba7221a72c6677291c7fcd4c7.',
      credentialId: 'b6993478eb934c31f0ac7dabfbc6a620f06ab0dba7221a72c6677291c7fcd4c7',
      verificationUrl: 'https://www.linkedin.com/learning/certificates/b6993478eb934c31f0ac7dabfbc6a620f06ab0dba7221a72c6677291c7fcd4c7',
    },
  },
  {
    id: 'linkedin-java-microservices',
    category: 'courses',
    categories: ['courses'],
    title: 'Java Microservices: From Design to Deployment',
    issuer: 'LinkedIn Learning',
    recipientName: 'Sneha Maurya',
    issueDate: 'February 26, 2026',
    year: '2026',
    badge: 'BACKEND ARCHITECTURE',
    badgeType: 'verified',
    accentTheme: 'mint',
    tapePattern: 'cherry-stripes',
    tapePosition: 'angled',
    tiltDeg: 1.0,
    assetType: 'pdf',
    imageUrl: '/assets/certificates/linkedin-java-microservices.png',
    pdfUrl: '/assets/certificates/linkedin-java-microservices.pdf',
    description:
      'Course completed on February 26, 2026 (1 hour 19 minutes) exploring modern microservices architecture in Java, software design patterns, and deployment pipelines.',
    keyTakeaway:
      'Architectural understanding of modular microservices, decoupled service design, and production deployment considerations.',
    tags: ['Java', 'Software Design', 'Microservices', 'Distributed Systems', 'LinkedIn Learning'],
    details: {
      scope:
        'In-depth software engineering course on LinkedIn Learning covering service boundary definitions, API gateways, and deployment patterns.',
      skillsDemonstrated: [
        'Java Software Design',
        'Microservices Architecture',
        'Service Boundaries & APIs',
        'Deployment Engineering',
      ],
      verificationMethod:
        'Official LinkedIn Learning Certificate of Completion with Certificate ID 655e155d1b7db939f337ed55fa3435dfbd90c440ff75a5f09ccd40ab93d4db86.',
      credentialId: '655e155d1b7db939f337ed55fa3435dfbd90c440ff75a5f09ccd40ab93d4db86',
      verificationUrl: 'https://www.linkedin.com/learning/certificates/655e155d1b7db939f337ed55fa3435dfbd90c440ff75a5f09ccd40ab93d4db86',
    },
  },
  {
    id: 'linkedin-wordpress-essential',
    category: 'courses',
    categories: ['courses'],
    title: 'WordPress Essential Training',
    issuer: 'LinkedIn Learning',
    recipientName: 'Sneha Maurya',
    issueDate: 'March 05, 2026',
    year: '2026',
    badge: 'WEB DEVELOPMENT',
    badgeType: 'verified',
    accentTheme: 'kraft',
    tapePattern: 'butter-gingham',
    tapePosition: 'top-center',
    tiltDeg: -1.1,
    assetType: 'pdf',
    imageUrl: '/assets/certificates/linkedin-wordpress-essential-training.png',
    pdfUrl: '/assets/certificates/linkedin-wordpress-essential-training.pdf',
    description:
      'Course completed on March 05, 2026 (2 hours 4 minutes) focused on back-end web development, WordPress core architecture, CMS data modeling, and theme structures.',
    keyTakeaway:
      'Hands-on grasp of CMS architecture, custom template hierarchies, and modular back-end web development.',
    tags: ['WordPress', 'Back-End Web Dev', 'CMS Architecture', 'Theme Development', 'LinkedIn Learning'],
    details: {
      scope:
        'Comprehensive professional web development course on LinkedIn Learning under Head of Learning Content Strategy Shea Hanson.',
      skillsDemonstrated: [
        'Back-End Web Development',
        'WordPress Theme Architecture',
        'CMS Data Modeling',
        'Dynamic Content Hierarchies',
      ],
      verificationMethod:
        'Official LinkedIn Learning Certificate of Completion with Certificate ID 2693a80f5e90704d019fb883f758f831911377cf209709db3292f8fe3bfee4a9.',
      credentialId: '2693a80f5e90704d019fb883f758f831911377cf209709db3292f8fe3bfee4a9',
      verificationUrl: 'https://www.linkedin.com/learning/certificates/2693a80f5e90704d019fb883f758f831911377cf209709db3292f8fe3bfee4a9',
    },
  },
  {
    id: 'isro-bah',
    category: 'hackathons',
    categories: ['hackathons'],
    title: 'Bharatiya Antariksh Hackathon',
    issuer: 'ISRO (Indian Space Research Organisation)',
    recipientName: 'Sneha Maurya',
    issueDate: 'August 2024',
    year: '2024',
    badge: 'NATIONAL PARTICIPATION',
    badgeType: 'national',
    accentTheme: 'cream',
    tapePattern: 'burgundy-solid',
    tapePosition: 'top-right',
    tiltDeg: 1.1,
    assetType: 'docket',
    description:
      'National-level space innovation hackathon solving geospatial and satellite application problem statements with code, data visualization, and analytical design.',
    keyTakeaway: 'Tackled national space & geospatial problem statements evaluated by ISRO senior scientists.',
    tags: ['ISRO Hackathon', 'Space Tech', 'Geospatial Systems', 'National Participation'],
    details: {
      scope: 'National competition evaluated by senior scientists and engineers across space research centers.',
      skillsDemonstrated: [
        'Geospatial Workflow Analysis',
        'Problem Formulation',
        'System Architecture',
        'Complex Information Hierarchy',
      ],
      verificationMethod: 'Official national participant credential and technical submission docket.',
      credentialId: 'ISRO-BAH-2024-NAT',
    },
  },
  {
    id: 'cert-ux',
    category: 'courses',
    categories: ['courses'],
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google Career Certificates',
    recipientName: 'Sneha Maurya',
    issueDate: '2024',
    year: '2024',
    badge: 'PROFESSIONAL CREDENTIAL',
    badgeType: 'verified',
    accentTheme: 'butter',
    tapePattern: 'cherry-stripes',
    tapePosition: 'top-left',
    tiltDeg: -1.4,
    assetType: 'docket',
    description:
      'Rigorous curriculum in user-centered design, user interviews, persona synthesis, wireframing, and Nielsen Norman usability heuristics.',
    keyTakeaway: 'User-centered problem framing, empathy mapping, and usability testing before writing code.',
    tags: ['UX Heuristics', 'User Research', 'Affinity Mapping', 'Design Systems', 'Google'],
    details: {
      scope: 'Comprehensive professional training in foundational UX methodologies, research ethics, and accessibility.',
      skillsDemonstrated: [
        'User Research & Empathy Mapping',
        'Persona Synthesis',
        'Nielsen Norman Usability Heuristics',
        'Interactive Wireframing',
        'WCAG Accessibility Principles',
      ],
      verificationMethod: 'Verified Coursera / Google Career Certificate record.',
      credentialId: 'GOOG-UX-2024-FOUNDATION',
    },
  },
  {
    id: 'cert-responsive',
    category: 'courses',
    categories: ['courses'],
    title: 'Responsive Web Design Certification',
    issuer: 'Developer Curriculum Verification',
    recipientName: 'Sneha Maurya',
    issueDate: '2024',
    year: '2024',
    badge: 'TECHNICAL CREDENTIAL',
    badgeType: 'verified',
    accentTheme: 'mint',
    tapePattern: 'butter-gingham',
    tapePosition: 'top-right',
    tiltDeg: 0.9,
    assetType: 'docket',
    description:
      'Complete mastery in modern semantic HTML5, CSS layout engines (Flexbox & CSS Grid math), media queries, and responsive accessibility.',
    keyTakeaway: 'Handcrafted responsive layouts with fluid typography and zero automated layout shifts.',
    tags: ['Flexbox & Grid', 'Semantic HTML5', 'Fluid Typography', 'Accessibility'],
    details: {
      scope: 'Rigorous 300-hour curriculum focused on building responsive, accessible web layouts from scratch.',
      skillsDemonstrated: [
        'CSS Grid & Flexbox Alignment Math',
        'Fluid Typography Scaling',
        'WCAG AA Color Contrast Compliance',
        'Semantic Landmark Structuring',
      ],
      verificationMethod: 'Verified curriculum completion and project portfolio inspection.',
      credentialId: 'RWD-DEV-CERT-2024',
    },
  },
];
