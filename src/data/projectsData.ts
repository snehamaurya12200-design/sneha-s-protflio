export interface ProjectDetail {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  category: string;
  projectType: string;
  role: string;
  timeline: string;
  tags: string[];
  description: string;
  quote?: string;
  genZPunchline?: string;
  hackathonNote?: string;
  statusNote?: string;
  isLive: boolean;
  isConcept?: boolean;
  isStartupExperience?: boolean;
  liveDemoUrl?: string;
  githubUrl?: string;
  presentationUrl?: string;
  hasCaseStudy: boolean;
  isPrioritized?: boolean;
  contribution: string;
  tools: string[];
  problemAndIdea: {
    hook: string;
    problem: string;
    idea: string;
    targetUser: string;
  };
  visualHighlights: {
    title: string;
    badge: string;
    caption: string;
    annotation: string;
    type: 'thermal-receipt' | 'roadmap-timeline' | 'mood-wallet' | 'copilot-architecture' | 'peer-matching' | 'accessibility-audit';
  }[];
  processAndImplementation: {
    approach: string;
    steps: {
      number: string;
      title: string;
      summary: string;
      technologies: string[];
    }[];
    challenges: string;
    takeaway: string;
  };
}

export const PROJECTS_DATA: ProjectDetail[] = [
  // 1. YOUR LIFE, IN RECEIPTS
  {
    id: 'your-life-in-rec',
    isPrioritized: true,
    badge: 'FRONTEND HACKATHON · LIVE PROJECT',
    badgeColor: 'bg-[#F6E7A8] text-[#702632] border-[#B52D3A]/30',
    title: 'Your Life, In Receipts',
    category: 'Interactive Frontend · WebRush 2024',
    projectType: 'Interactive Web Application (6-Hour Solo Hackathon Sprint)',
    role: 'Solo Product Designer & Frontend Developer',
    timeline: '6 Hours (Timed WebRush Sprint 2024)',
    tags: ['WebRush Hackathon', 'Interactive Frontend', 'Experimental UX', 'Top 5 Finalist'],
    description:
      "An experimental frontend application that reimagines life milestones as itemized thermal cash-register receipts with dynamic subtotal calculations, tax, and crinkled paper physics.",
    quote: '“What if our most memorable human experiences were itemized, calculated, and printed out on crinkly thermal receipt paper?”',
    genZPunchline: 'Receipts included. Yes, literal receipts.',
    hackathonNote: 'Designed, coded, and deployed solo during a strict 6-hour hackathon. Placed Top 5 Finalist out of 140+ student builders.',
    statusNote: 'Live & Deployed on Vercel · Open Source on GitHub',
    isLive: true,
    liveDemoUrl: 'https://yourlifeinrec.vercel.app/',
    githubUrl: 'https://github.com/snehamaurya12200-design/your_life_in_rec',
    hasCaseStudy: true,
    contribution: 'End-to-end design and engineering: concept ideation, monospace typographic hierarchy, SVG paper-perforation clip-paths, calculation state machine, and Vercel deployment under strict 6-hour clock pressure.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vercel', 'SVG Math'],
    problemAndIdea: {
      hook: 'When handed the abstract theme "Your Life, In Receipts" at 10:00 AM with a 4:00 PM submission buzzer, the easy route was a boring expense tracker. I chose tactile nostalgia instead.',
      problem:
        'Most hackathon submissions interpret "receipts" as either mundane banking spreadsheets or social media call-out threads. Neither creates emotional resonance or demonstrates thoughtful visual craft.',
      idea:
        'A retro thermal receipt printing experience that models personal milestones—first heartbreak, 3 AM coffee runs, graduating, shipping code—as itemized store receipts with subtotal calculations, tax, barcode generation, and crinkled paper physics.',
      targetUser: 'Young adults and digital natives who appreciate analog nostalgia, internet humor, and emotional product storytelling.',
    },
    visualHighlights: [
      {
        title: 'Thermal Cash Register Paper Spec',
        badge: 'UI ARCHITECTURE',
        caption: 'Monospace typographic hierarchy, dashed perforated dividers, and SVG zig-zag paper cuts.',
        annotation: 'Notice the monospace font stack: Space Mono with strict tabular numbers to ensure perfect column alignment.',
        type: 'thermal-receipt',
      },
      {
        title: 'Itemized Life Milestone Calculator',
        badge: 'INTERACTION DESIGN',
        caption: 'Users select life events, adjust quantities, and watch the receipt live-tally.',
        annotation: 'Dynamic subtotaling with 0ms visual delay and tactile audio-click sensation.',
        type: 'thermal-receipt',
      },
    ],
    processAndImplementation: {
      approach:
        'Six hours leaves zero room for scope creep. I allocated 45 minutes for layout and typography rules in Figma, 4 hours for component architecture and dynamic SVG barcode calculations, and 75 minutes for responsive polish, animations, and deployment.',
      steps: [
        {
          number: '01',
          title: 'Monospace Typography & Serrated Paper Mesh',
          summary:
            'Drafted the thermal paper receipt bounds with authentic zigzag perforated edges using SVG polygon clipping masks and monospace line-item alignment.',
          technologies: ['Figma', 'CSS Polygon Clip-Path', 'Space Mono'],
        },
        {
          number: '02',
          title: 'Dynamic Calculation Engine & Barcode Synthesis',
          summary:
            'Engineered a state machine that tallies line items, computes humorous "life tax", and renders authentic code-128 SVG barcode bars.',
          technologies: ['React State', 'SVG Math', 'Tailwind CSS'],
        },
        {
          number: '03',
          title: 'Mobile Optimization & Vercel Deployment',
          summary:
            'Ensured the receipt view fits naturally on mobile screens for easy screenshotting and sharing, deploying to Vercel with zero build errors before deadline.',
          technologies: ['Vercel CI/CD', 'Responsive Viewport Math'],
        },
      ],
      challenges:
        'Balancing quirky nostalgic maximalism with crisp typography that remains legible at smaller mobile viewport sizes under tight hackathon clock pressure.',
      takeaway:
        'Constraints spark creativity. A focused, highly polished single-screen tactile concept beats an unfinished 10-page SaaS dashboard every single time.',
    },
  },

  // 2. THE FIRST WEEK
  {
    id: 'first-week',
    isPrioritized: true,
    badge: 'UI/UX & AI · PIXELPROMPT WINNER',
    badgeColor: 'bg-[#F6E7A8] text-[#702632] border-[#B52D3A]/30',
    title: 'The First Week',
    category: 'UI/UX · AI-Assisted Development · PixelPrompt',
    projectType: 'Interactive Student Roadmap & Onboarding Experience',
    role: 'Lead UI/UX Designer & Frontend Developer',
    timeline: 'PixelPrompt Hackathon Sprint',
    tags: ['PixelPrompt', 'College Experience', 'Interactive Roadmap', 'AI Prompting', 'Creative Craft Award'],
    description:
      'An interactive five-day college experience exploring the questions, challenges, and discoveries of first-year student life through an empathetic visual roadmap.',
    quote: '“College orientation shouldn’t feel like reading a municipal handbook. It should feel like an older sibling walking you through campus.”',
    genZPunchline: 'Less institutional jargon, more actual survival tips.',
    hackathonNote: 'Awarded Creative Craft Award at PixelPrompt for tactile UI heuristics and empathetic student journey mapping.',
    statusNote: 'Live & Deployed on Vercel · Open Source on GitHub',
    isLive: true,
    liveDemoUrl: 'https://first-week-of-clg.vercel.app/',
    githubUrl: 'https://github.com/snehamaurya12200-design/first_week_of_clg',
    hasCaseStudy: true,
    contribution: 'Formulated the 5-day emotional arc, designed warm sketchbook UI components in Figma, leveraged Google AI Studio for contextual student scenario generation, and built the interactive React roadmap.',
    tools: ['React', 'Figma', 'Google AI Studio', 'Tailwind CSS', 'Vercel', 'Prompt Engineering'],
    problemAndIdea: {
      hook: 'Freshmen orientation portals are famously terrible: 40-page PDF syllabi, buried campus maps, and generic tips that no student reads.',
      problem:
        'New students experience peak cognitive overload during their first days on campus—figuring out 8 AM classroom wings, laundry tokens, mess timings, and finding friends without feeling awkward.',
      idea:
        'An interactive 5-day progressive disclosure roadmap. Each day unlocks realistic dilemmas, actionable campus survival cards, friend-matching prompts, and interactive reflection checks.',
      targetUser: 'First-year undergraduate and graduate students adjusting to university and campus life.',
    },
    visualHighlights: [
      {
        title: '5-Day Progressive Roadmap Journey',
        badge: 'JOURNEY MAPPING',
        caption: 'Day 1 Orientation & Hostel, Day 2 First 8 AM Class, Day 3 Peer Matchmaking, Day 4 Student Clubs, Day 5 Campus Survival Check.',
        annotation: 'Progressive disclosure ensures students focus only on today without being overwhelmed by the entire semester.',
        type: 'roadmap-timeline',
      },
      {
        title: 'Tactile Dilemma Cards & Survival Chips',
        badge: 'UI SYSTEM',
        caption: 'Color-coded tags for chai stalls, laboratory guidelines, and unspoken campus etiquette.',
        annotation: 'Designed with friendly rounded containers, warm typography, and interactive completion toggles.',
        type: 'roadmap-timeline',
      },
    ],
    processAndImplementation: {
      approach:
        'Combined AI prompt engineering in Google AI Studio to synthesize realistic student dilemma scenarios with tactile Figma component tokens.',
      steps: [
        {
          number: '01',
          title: 'Empathy Arc & Persona Synthesis',
          summary:
            'Mapped the 5 emotional phases of a freshman: Disorientation → Lecture Hall Panic → Social Hesitation → Club Exploration → Grounded Confidence.',
          technologies: ['Journey Mapping', 'User Empathy', 'Figma'],
        },
        {
          number: '02',
          title: 'AI Prompt Heuristics & Scenario Generation',
          summary:
            'Used Google AI Studio and Gemini to generate contextual situation branches and actionable advice rather than placeholder lorem ipsum.',
          technologies: ['Google AI Studio', 'Prompt Engineering'],
        },
        {
          number: '03',
          title: 'Interactive React Roadmap Implementation',
          summary:
            'Built custom roadmap state tracking in React with day-by-day filter tabs, celebratory confetti microinteractions, and live Vercel hosting.',
          technologies: ['React', 'Tailwind CSS', 'Vercel'],
        },
      ],
      challenges:
        'Structuring empathetic, authentic microcopy that sounds like a real student rather than corporate administrative literature.',
      takeaway:
        'Software with emotional intelligence resonates deeply. When users feel understood in the first 10 seconds, engagement sky-rockets.',
    },
  },

  // 3. MOOD MONEY
  {
    id: 'mood-money',
    isPrioritized: false,
    badge: 'BEHAVIORAL FINTECH · LIVE PROTOTYPE',
    badgeColor: 'bg-[#F6E7A8] text-[#702632] border-[#B52D3A]/30',
    title: 'Mood Money',
    category: 'Behavioral Fintech · Hackathon Project',
    projectType: 'Behavioral Finance Mobile Experience & Impulse Friction Tool',
    role: 'Product Designer & Frontend Prototyper',
    timeline: 'Hackathon Sprint',
    tags: ['Behavioral Finance', 'Gen Z UX', 'Impulse Friction', 'Emotional Budgeting'],
    description:
      'A personal finance concept exploring how to counter mindless consumerism with emotional spend-tagging and an intentional impulse friction cooldown.',
    quote: '“Money is rarely just math—it’s emotional dopamine. If budgeting apps don’t account for your mood, they don’t work.”',
    genZPunchline: 'Okay, but does that 2 AM haul actually spark joy?',
    hackathonNote: 'Engineered with behavioral economics principles to introduce friction without shame.',
    statusNote: 'Live & Deployed on Vercel',
    isLive: true,
    liveDemoUrl: 'https://mood-money-hackathon-12.vercel.app/',
    hasCaseStudy: true,
    contribution: 'Designed the mobile UI in Figma, developed the emotional spend classification system, and implemented the interactive 15-minute cooldown timer flow in React.',
    tools: ['Figma Mobile UI', 'React', 'Tailwind CSS', 'Behavioral Economics', 'Vercel'],
    problemAndIdea: {
      hook: 'Spreadsheet apps tell you that you spent money on coffee. They don’t tell you that you were stressed over exams when you bought it.',
      problem:
        'Traditional budgeting apps rely on guilt-inducing warning bars and manual category tags that feel like homework. Most young users quickly abandon them.',
      idea:
        'Mood Money pairs transactions with emotional sentiment tags ("deserved a treat", "stress doom-scroll buy", "peer pressure") and introduces an intentional 15-minute cooldown timer before impulsive checkout.',
      targetUser: 'Young adults, students, and digital natives navigating their first independent budgets.',
    },
    visualHighlights: [
      {
        title: 'Emotional Spend-Tagging System',
        badge: 'BEHAVIORAL UX',
        caption: 'Replaced rigid banking categories with emotional drivers like "comfort food", "delulu purchase", and "actually needed it".',
        annotation: 'Presents spending data as self-discovery rather than moral failure.',
        type: 'mood-wallet',
      },
      {
        title: '15-Minute Impulse Cooldown Screen',
        badge: 'FRICTION HEURISTICS',
        caption: 'A gentle pause screen asking: "Will you care about this in 48 hours?" with a soothing countdown ring.',
        annotation: 'Intentional friction designed into the checkout flow to reduce buyer remorse.',
        type: 'mood-wallet',
      },
    ],
    processAndImplementation: {
      approach:
        'Applied behavioral psychology principles (System 1 impulse vs. System 2 deliberate reflection) to personal finance interface mechanics.',
      steps: [
        {
          number: '01',
          title: 'Behavioral Friction Architecture',
          summary:
            'Designed the impulse delay mechanism to interrupt the dopamine shopping loop before payment authorization occurs.',
          technologies: ['Behavioral Heuristics', 'Figma Flow Diagrams'],
        },
        {
          number: '02',
          title: 'Vibe Check Budget Gauges',
          summary:
            'Created friendly, soft-palette energy meters instead of punitive negative-balance banners.',
          technologies: ['Mobile UI', 'Figma Auto-Layout', 'Design Tokens'],
        },
        {
          number: '03',
          title: 'Interactive React Prototype Deployment',
          summary:
            'Coded responsive mobile views in React, testing the impulse timer countdown and emotion tag switcher directly on touch devices.',
          technologies: ['React', 'Tailwind CSS', 'Vercel'],
        },
      ],
      challenges:
        'Designing friction that feels protective rather than annoying or condescending to the user.',
      takeaway:
        'Product design can be an act of care. Software that respects human psychology builds lasting trust.',
    },
  },

  // 4. UDYOG MITRA
  {
    id: 'udyog-mitra',
    isPrioritized: false,
    badge: 'AI PRODUCT CONCEPT · REDROB AI IDEATHON',
    badgeColor: 'bg-[#F6E7A8] text-[#702632] border-[#B52D3A]/30',
    title: 'Udyog Mitra',
    category: 'AI Product Concept · Redrob AI Ideathon',
    projectType: 'AI Business Copilot Concept & SME Product Architecture',
    role: 'Product Concept Lead & UI/UX Architect',
    timeline: 'Redrob AI Ideathon 2025',
    tags: ['AI Business Copilot', 'SME Workflows', 'Product Architecture', 'Vernacular UI', 'Ideathon Spec'],
    description:
      'An AI business copilot concept exploring how small and medium-sized enterprises (SMEs) can access practical AI assistance through an approachable, vernacular product experience.',
    quote: '“AI shouldn’t be locked behind complex enterprise terminology. A Kirana shop owner should be able to ask their business assistant questions in plain Hindi or Marathi.”',
    genZPunchline: 'AI for the real economy, not just Silicon Valley boardrooms.',
    hackathonNote: 'Conceptualized for the Redrob AI Ideathon with end-to-end product architecture and multi-modal prompt schemas.',
    statusNote: 'Product concept and design architecture complete; interactive prototype in development.',
    isLive: false,
    isConcept: true,
    presentationUrl: '#',
    hasCaseStudy: true,
    contribution: 'Led problem framing and product architecture: designed vernacular mobile layouts in Figma, mapped Kirana shopkeeper inventory workflows, and structured Gemini multimodal prompt pipelines for receipt scanning.',
    tools: ['Figma', 'Google AI Studio', 'Gemini Multimodal API', 'Product Architecture', 'User Journey Mapping'],
    problemAndIdea: {
      hook: 'Over 63 million small businesses drive local commerce, yet 98% of AI enterprise copilots are built for English-speaking tech companies with dedicated IT departments.',
      problem:
        'Small enterprise owners face daily friction with inventory stockouts, delayed invoice follow-ups, and localized vendor messaging, but existing enterprise software is overwhelming, expensive, and rigid.',
      idea:
        'Udyog Mitra is a lightweight, mobile-first copilot that speaks conversational vernacular languages, ingests photos of handwritten paper bills, and summarizes daily cash flow in simple, friendly cards.',
      targetUser: 'Small and medium business owners, retailers, wholesale traders, and local shopkeepers.',
    },
    visualHighlights: [
      {
        title: 'Multi-Modal Bill Ingestion & Ledger Parser',
        badge: 'AI ARCHITECTURE',
        caption: 'Snap a picture of a handwritten supplier receipt; Gemini extracts items, GST, and supplier dues automatically.',
        annotation: 'Zero manual data entry needed—built around voice and camera touchpoints.',
        type: 'copilot-architecture',
      },
      {
        title: 'Conversational Business Daily Brief',
        badge: 'DASHBOARD UX',
        caption: 'One-glance morning summary: What arrived today, who needs payment, and which items are running low.',
        annotation: 'Clean card system with large tap targets designed for busy shop environments.',
        type: 'copilot-architecture',
      },
    ],
    processAndImplementation: {
      approach:
        'Mapped real-world shopkeeper workflows in local markets to determine where AI can remove manual friction without disrupting existing trusting vendor relationships.',
      steps: [
        {
          number: '01',
          title: 'SME Operational Blueprinting',
          summary:
            'Mapped daily inventory cycles, paper invoice tracking, and WhatsApp vendor negotiation patterns.',
          technologies: ['Service Blueprinting', 'Workflow Analysis'],
        },
        {
          number: '02',
          title: 'Gemini Multimodal Prompt Structuring',
          summary:
            'Prototyped structured JSON extraction schemas in Google AI Studio to parse handwritten invoices and price lists.',
          technologies: ['Google AI Studio', 'Gemini Multimodal', 'System Instructions'],
        },
        {
          number: '03',
          title: 'Design System for High-Legibility Mobile Displays',
          summary:
            'Built accessible component tokens in Figma with high contrast ratios and bilingual Hindi/English label variants for bright outdoor sunlight.',
          technologies: ['Figma Tokens', 'WCAG AA Contrast', 'Vernacular Typography'],
        },
      ],
      challenges:
        'Designing for varying digital literacy without sacrificing power, ensuring users feel in complete control of every AI recommendation.',
      takeaway:
        'The best AI product design is invisible. When the user gets what they need in two taps, the technology fades and the value shines.',
    },
  },

  // 5. ACCESSGAP
  {
    id: 'accessgap',
    isPrioritized: false,
    badge: 'ACCESSIBILITY PRODUCT CONCEPT',
    badgeColor: 'bg-[#F6E7A8] text-[#702632] border-[#B52D3A]/30',
    title: 'AccessGap',
    category: 'Product Design · Accessibility Auditing Concept',
    projectType: 'Built-Environment Accessibility Auditing Platform Concept',
    role: 'Lead Product Designer',
    timeline: 'Product Concept 2025',
    tags: ['Accessibility Auditing', 'Built Environment', 'Inclusive Design', 'Audit Heuristics', 'Product Concept'],
    description:
      'A built-environment accessibility auditing platform concept structured around an accountability cycle: Audit → Score → Prioritize → Fix → Re-audit → Prove improvement.',
    quote: '“Accessibility in the physical world is often treated as an afterthought checklist. We need software that guides real, measurable improvement.”',
    genZPunchline: 'Closing the gap between building codes and lived reality.',
    statusNote: 'Product concept and audit heuristic workflow specification.',
    isLive: false,
    isConcept: true,
    hasCaseStudy: true,
    contribution: 'Designed the structured auditing workflow, multi-stakeholder assessment matrix, priority scoring heuristic, and proof-of-improvement reporting view in Figma.',
    tools: ['Figma', 'Inclusive Design Heuristics', 'Design Systems', 'WCAG & Physical Accessibility Guidelines'],
    problemAndIdea: {
      hook: 'Public spaces and commercial facilities often claim accessibility compliance on paper, while wheelchair ramps remain blocked and tactile paving terminates into walls.',
      problem:
        'Facility managers lack clear, prioritized action steps to identify and remediate physical accessibility barriers, resulting in delayed repairs and continued exclusion for disabled visitors.',
      idea:
        'AccessGap provides a systematic six-stage lifecycle: Audit physical spaces via structured checklists, Score current barrier severity, Prioritize high-impact fixes, Track remediation, Re-audit, and Generate verified proof of improvement.',
      targetUser: 'Facility managers, campus administrators, municipal planners, and accessibility advocates.',
    },
    visualHighlights: [
      {
        title: 'Six-Stage Improvement Lifecycle',
        badge: 'WORKFLOW UX',
        caption: 'Audit → Score → Prioritize → Fix → Re-audit → Prove improvement.',
        annotation: 'Ensures audits result in verified remediation rather than static PDF reports filed in a drawer.',
        type: 'accessibility-audit',
      },
      {
        title: 'Severity & Impact Matrix',
        badge: 'HEURISTIC SCORING',
        caption: 'Distinguishes immediate safety barriers from minor navigational friction to help teams allocate repair budgets effectively.',
        annotation: 'Clean, unboxed metadata with high-contrast indicator tokens.',
        type: 'accessibility-audit',
      },
    ],
    processAndImplementation: {
      approach:
        'Framed accessibility not as a punitive grading exercise, but as an actionable, progressive improvement roadmap with clear accountability checkpoints.',
      steps: [
        {
          number: '01',
          title: 'Physical Accessibility Workflow Modeling',
          summary:
            'Mapped inspection steps across entrances, ramps, doorways, tactile paths, restrooms, and emergency egress routes.',
          technologies: ['Workflow Mapping', 'Accessibility Standards'],
        },
        {
          number: '02',
          title: 'Priority Heuristic & Scoring Logic',
          summary:
            'Formulated the priority matrix weighting barrier severity by daily foot traffic and vulnerability index.',
          technologies: ['Information Architecture', 'Heuristic Design'],
        },
        {
          number: '03',
          title: 'High-Contrast Verification Interface',
          summary:
            'Crafted a high-contrast audit checklist UI optimized for field tablets and smartphones under varied lighting conditions.',
          technologies: ['Figma Design Tokens', 'WCAG AAA Contrast'],
        },
      ],
      challenges:
        'Structuring complex architectural compliance requirements into concise, actionable tasks that maintenance staff can execute without specialized training.',
      takeaway:
        'True inclusive design bridges intent and execution. When software makes remediation straightforward, spaces become universally welcoming.',
    },
  },

  // 6. STUMATE
  {
    id: 'stumate',
    isPrioritized: false,
    badge: 'STARTUP TEAM CONTRIBUTION',
    badgeColor: 'bg-[#EAE0D0] text-[#702632] border-[#702632]/25',
    title: 'StuMate',
    category: 'Startup Experience · Peer Matching MVP',
    projectType: 'Student Academic Peer Collaboration Platform (0-to-1 MVP)',
    role: 'UI/UX Product Designer (Startup Team Experience)',
    timeline: '2024 – 2025',
    tags: ['Startup Team Experience', 'Peer Collaboration', 'Figma Design Tokens', 'Onboarding Flow', 'Design Systems'],
    description:
      'Product design contribution to an early-stage student peer collaboration platform, focusing on simplifying the onboarding experience from 7 steps to 3 and creating tokenized Figma components for engineering handoff.',
    quote: '“Finding a hackathon partner or study buddy shouldn’t depend on getting lucky in an 800-person chaotic WhatsApp group.”',
    genZPunchline: 'Less awkward networking, more compatible project partners.',
    statusNote: 'Startup team experience (designed 0-to-1 onboarding flow and Figma design system tokens).',
    isLive: false,
    isStartupExperience: true,
    hasCaseStudy: true,
    contribution: 'Audited the initial sign-up flow to reduce steps from 7 to 3, authored responsive Figma design tokens (typography, color, spacing), and created developer-ready specs for the peer discovery card interface.',
    tools: ['Figma', 'Design Systems', 'Flow Diagrams', 'Developer Handoff', 'Component Architecture'],
    problemAndIdea: {
      hook: 'On campus, students with complementary skills often sit in the same building without an easy way to discover teammates for projects and hackathons.',
      problem:
        'Students relied on unorganized college message boards and large group chats where project partner requests were quickly lost. The initial onboarding flow had excessive form fields that created friction.',
      idea:
        'A streamlined academic peer discovery interface where students select their course, primary skill tags, and collaboration availability to discover potential study and project partners.',
      targetUser: 'College and university students looking for study partners, capstone teammates, and hackathon collaborators.',
    },
    visualHighlights: [
      {
        title: 'Simplified 3-Step Onboarding Architecture',
        badge: 'FLOW OPTIMIZATION',
        caption: 'Replaced long profile forms with 3 focused steps: Course & Year → Primary Skills → Collaboration Availability.',
        annotation: 'Reduced form fatigue and allowed students to browse potential partners right away.',
        type: 'peer-matching',
      },
      {
        title: 'Tokenized Figma Component Library',
        badge: 'DESIGN SYSTEMS',
        caption: 'Structured component tokens with auto-layout variables and precise states for engineering handoff.',
        annotation: 'Ensured clean alignment between design intent and frontend implementation.',
        type: 'peer-matching',
      },
    ],
    processAndImplementation: {
      approach:
        'Collaborated with the team to identify drop-off points in the initial onboarding and establish a reusable design system that accelerated developer delivery.',
      steps: [
        {
          number: '01',
          title: 'Onboarding Flow Audit & Friction Identification',
          summary:
            'Audited the 7-step alpha registration flow, eliminating redundant personal detail inputs and consolidating matching preferences into 3 clean screens.',
          technologies: ['Flow Auditing', 'Figma Wireframing'],
        },
        {
          number: '02',
          title: 'Peer Discovery Card Interface Design',
          summary:
            'Designed high-contrast profile cards highlighting complementary skills, timezone/study availability, and project goals.',
          technologies: ['Figma Prototyping', 'Card UI Design'],
        },
        {
          number: '03',
          title: 'Design Token Standardization & Handoff',
          summary:
            'Delivered standardized spacing scales, color roles, and interactive button states for developer handoff.',
          technologies: ['Figma Tokens', 'Design-to-Code Specs'],
        },
      ],
      challenges:
        'Designing a concise profile card that communicates a student’s technical skills and personality without cluttering the screen.',
      takeaway:
        'Working within a multidisciplinary team reinforces that good product design is as much about clear communication and developer empathy as it is about visual craft.',
    },
  },
];
