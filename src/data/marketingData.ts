export interface MarketingCertificate {
  id: string;
  category: 'digital-marketing' | 'social-media' | 'seo-content' | 'analytics' | 'growth';
  categoryLabel: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  badge: string;
  description: string;
  skillsLearned: string[];
  keyTakeaway: string;
  isVerified: boolean;
  certificateUrl?: string;
}

export interface MarketingSideQuestData {
  title: string;
  subtitle: string;
  overview: string;
  whyMarketingMattersForDesign: string;
  certificates: MarketingCertificate[];
}

export const MARKETING_DATA: MarketingSideQuestData = {
  title: 'THE MARKETING SIDE QUEST',
  subtitle: 'Little certificates. Lots of learning. A growing curiosity about how ideas reach people.',
  overview:
    'Great digital products do not exist in a vacuum. Understanding audience psychology, digital acquisition channels, content resonance, and funnel analytics directly strengthens product design decisions.',
  whyMarketingMattersForDesign:
    'Designers who understand marketing build products that people actually discover, understand, and love. It bridges the gap between aesthetic craft and real-world adoption.',
  certificates: [
    {
      id: 'linkedin-digital-marketing-foundations',
      category: 'digital-marketing',
      categoryLabel: 'Digital Marketing Foundations',
      title: 'Digital Marketing Foundations',
      issuer: 'LinkedIn Learning',
      year: '2026',
      credentialId: 'b6993478eb934c31f0ac7dabfbc6a620f06ab0dba7221a72c6677291c7fcd4c7',
      badge: 'VERIFIED CREDENTIAL',
      description:
        'Professional course completed on February 26, 2026 covering digital marketing foundations, customer acquisition loops, funnel analytics, and audience growth strategy.',
      skillsLearned: [
        'Digital Marketing Strategy',
        'Customer Acquisition Channels',
        'Conversion Funnels',
        'Audience Reach & Metrics',
      ],
      keyTakeaway:
        'Understanding how users discover digital products and how funnel heuristics shape interface design.',
      isVerified: true,
      certificateUrl: '/assets/certificates/linkedin-digital-marketing-foundations.pdf',
    },
    {
      id: 'tata-data-visualisation',
      category: 'analytics',
      categoryLabel: 'Data & Insights Visualisation',
      title: 'Data Visualisation: Empowering Business with Effective Insights',
      issuer: 'TATA × Forage',
      year: '2026',
      credentialId: '8ieuRmEFepKtLckPL',
      badge: 'JOB SIMULATION',
      description:
        'Practical virtual simulation for TATA: framing business scenarios, selecting visual encodings, and communicating executive insights and analytics.',
      skillsLearned: [
        'Business Scenario Framing',
        'Visual Chart Design',
        'Executive Communication',
        'Data-Driven Decision Making',
      ],
      keyTakeaway:
        'Bridged data analytics with executive storytelling to ensure visual insights drive real product decisions.',
      isVerified: true,
      certificateUrl: '/assets/certificates/tata-data-visualisation-simulation.pdf',
    },
    {
      id: 'skillup-digital-marketing',
      category: 'digital-marketing',
      categoryLabel: 'Digital Marketing & Growth',
      title: 'SkillUp Digital Marketing Certificate',
      issuer: 'Simplilearn SkillUp',
      year: '2024',
      credentialId: 'SKILLUP-DM-2024-88',
      badge: 'VERIFIED CREDENTIAL',
      description:
        'Foundational curriculum covering customer journey funnels, product positioning, content strategy heuristics, organic search foundations, and audience engagement metrics.',
      skillsLearned: [
        'Digital Product Positioning',
        'Funnel Heuristics & Conversion Loops',
        'User Acquisition Channels',
        'Content & Narrative Strategy',
        'Audience Sentiment & Engagement',
      ],
      keyTakeaway:
        'Learned to view digital interfaces through the lens of user intent, acquisition friction, and clear value communication.',
      isVerified: true,
    },
  ],
};
