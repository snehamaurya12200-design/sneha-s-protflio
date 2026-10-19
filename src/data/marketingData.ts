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
