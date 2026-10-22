import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

// Generate 1: ATS-Friendly Resume PDF
export function generateAtsResumePdf(): Buffer {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;
  let y = 45;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // Header - Name
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(20, 20, 20);
  doc.text('SNEHA MAURYA', margin, y);
  y += 18;

  // Headline
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text('MCA Student | Product Design · UI/UX · AI Prototyping · Frontend Development', margin, y);
  y += 15;

  // Contact info
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(70, 70, 70);
  const contactLine = 'Nashik, Maharashtra, India  |  snehamaurya12200@gmail.com  |  LinkedIn: sneha-maurya  |  GitHub: snehamaurya12200-design';
  doc.text(contactLine, margin, y);
  y += 14;

  const addSectionHeader = (title: string) => {
    checkPageBreak(30);
    y += 8;
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(20, 20, 20);
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.75);
    doc.line(margin, y, margin + contentWidth, y);
    y += 12;
  };

  // SUMMARY
  addSectionHeader('Professional Summary');
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  const summaryText = 'MCA student focused on product design, UI/UX, and AI-assisted product development. Combines product thinking, user-centered design, and rapid prototyping to create accessible, tactile digital experiences. Builds and explores projects across interface design, frontend development, and AI-enabled product concepts.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 11.5 + 4;

  // EDUCATION
  addSectionHeader('Education');
  // Edu 1
  checkPageBreak(40);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Master of Computer Applications (MCA)', margin, y);
  doc.setFont('Helvetica', 'normal');
  doc.text('2024 — Expected 2027', margin + contentWidth, y, { align: 'right' });
  y += 12;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text('Sandip Institute of Engineering and Management (SIEM) · Nashik, Maharashtra, India', margin, y);
  y += 11;
  const eduPoints = [
    'Specializing in software architecture, advanced computing systems, and Human-Computer Interaction (HCI).',
    'Active postgraduate candidate currently in progress.',
  ];
  eduPoints.forEach((p) => {
    checkPageBreak(12);
    doc.text(`•  ${p}`, margin + 8, y);
    y += 11;
  });
  y += 3;

  // Edu 2
  checkPageBreak(35);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Bachelor of Business Administration in Computer Applications (BBA-CA)', margin, y);
  doc.setFont('Helvetica', 'normal');
  doc.text('Graduated Foundations', margin + contentWidth, y, { align: 'right' });
  y += 12;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text('Undergraduate Computer Applications & Business Systems · Maharashtra, India', margin, y);
  y += 11;
  doc.text('•  Core training in relational databases (SQL), systems analysis, and product viability models.', margin + 8, y);
  y += 14;

  // SKILLS & COMPETENCIES
  addSectionHeader('Skills & Competencies');
  const skillCategories = [
    { title: 'Product & UI/UX Design', skills: 'UI/UX Design, Product Design, Web Design, Figma Design Systems, User Flows, Wireframing, Usability Heuristics (WCAG AA)' },
    { title: 'AI & Rapid Prototyping', skills: 'AI-Assisted UI Code, Prompt Engineering, Multimodal Workflows, Gemini API Integration, Context Guardrails' },
    { title: 'Frontend Development', skills: 'React, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design, Vercel Deployment' },
    { title: 'Programming & Systems', skills: 'Python, C, C++, SQL, Relational Queries, Java (Basic), Data Structures & Algorithms, Git / GitHub' },
  ];
  skillCategories.forEach((sc) => {
    checkPageBreak(18);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 30);
    doc.text(`•  ${sc.title}: `, margin, y);
    const prefixWidth = doc.getTextWidth(`•  ${sc.title}: `);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    const skillLines = doc.splitTextToSize(sc.skills, contentWidth - prefixWidth);
    doc.text(skillLines, margin + prefixWidth, y);
    y += Math.max(12, skillLines.length * 11);
  });
  y += 4;

  // SELECTED PROJECTS
  addSectionHeader('Selected Projects');
  const projects = [
    {
      title: 'Your Life, In Receipts',
      context: 'WebRush 6-Hour Solo Buildathon | Live: https://yourlifeinrec.vercel.app/',
      badge: 'Top 5 Finalist · Live Shipped App',
      desc: 'Built and deployed an experimental frontend application solo under a strict 6-hour sprint. Converts Spotify streaming metrics into tactile thermal cash-register receipts with barcode generation and polygon tears.',
      tech: 'React, TypeScript, CSS Polygon Math, Vercel Edge',
    },
    {
      title: 'The First Week',
      context: 'Student Onboarding Experience | Live: https://first-week-of-clg.vercel.app/',
      badge: 'Interactive Web Concept',
      desc: 'Empathetic college orientation web app replacing sterile checklists with conversational schedule matchmaking and anxiety-reducing roadmap milestones. Designed clickable prototype.',
      tech: 'User Research, Information Architecture, Figma, React',
    },
    {
      title: 'Mood Money',
      context: 'Behavioral Finance Mobile Concept | Live: https://mood-money-hackathon-12.vercel.app/',
      badge: 'Behavioral UX Concept',
      desc: 'Gen Z personal-finance concept designed to mitigate impulse purchases through 15-minute checkout pause friction loops and emotional spend-tagging.',
      tech: 'Behavioral UX, Mobile Design, Gamification Heuristics',
    },
    {
      title: 'AccessGap & Udyog Mitra',
      context: 'Civic Accessibility Platform & Vernacular AI Copilot',
      badge: 'Active Architecture Specs',
      desc: 'Engineered civic accessibility audit workflow (Audit → Score → Fix → Prove) and Hindi-first voice bookkeeping dialog heuristics for local shopkeepers.',
      tech: 'Multimodal Voice UX, WCAG Auditing, Design Tokens',
    },
  ];

  projects.forEach((proj) => {
    checkPageBreak(45);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text(`1.  ${proj.title}`, margin, y);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 100, 100);
    doc.text(`[${proj.badge}]`, margin + contentWidth, y, { align: 'right' });
    y += 11;

    doc.setFont('Helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    doc.text(proj.context, margin + 12, y);
    y += 10;

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(40, 40, 40);
    const descLines = doc.splitTextToSize(proj.desc, contentWidth - 12);
    doc.text(descLines, margin + 12, y);
    y += descLines.length * 10.5;

    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    doc.text(`Technologies: ${proj.tech}`, margin + 12, y);
    y += 14;
  });

  // STARTUP EXPERIENCE
  addSectionHeader('Startup Experience');
  checkPageBreak(50);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Product Designer — StuMate MVP', margin, y);
  doc.setFont('Helvetica', 'normal');
  doc.text('2024 — 2025', margin + contentWidth, y, { align: 'right' });
  y += 11;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  const startupPoints = [
    'Conducted user research interviews with 28 university students to uncover academic collaboration roadblocks.',
    'Designed responsive discovery feeds, study room scheduling, and peer chat loops in Figma.',
    'Authored StuMate design system component library, accelerating frontend handoff for engineers.',
    'Shipped MVP that onboarded over 500 active beta students across campus pilot groups.',
  ];
  startupPoints.forEach((sp) => {
    checkPageBreak(12);
    doc.text(`•  ${sp}`, margin + 8, y);
    y += 11;
  });
  y += 4;

  // HONORS & ACHIEVEMENTS
  addSectionHeader('Honors & Achievements');
  const achievements = [
    { title: '1st Runner-Up — NexaForge × Unstop AI Prompt Challenge (2026)', desc: 'National AI prompt and generation challenge recognized for multimodal precision and creative direction.' },
    { title: 'Top 10 Finalist (6th Place, Score: 96.0/100) — Prompt Run 2026', desc: 'Recognized by Frontend Arena × Unstop for frontend engineering and UI craftsmanship.' },
    { title: 'Rank #28 — WebRush 2026 6-Hour Frontend Hackathon', desc: 'Solo rapid build and live deployment of "Your Life, In Receipts" out of 140+ teams.' },
    { title: 'National Space Tech Participant — ISRO Bharatiya Antariksh Hackathon (2024)', desc: 'National space tech hackathon addressing geospatial visualization problem statements.' },
  ];
  achievements.forEach((ach) => {
    checkPageBreak(24);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 30);
    doc.text(`★  ${ach.title}`, margin, y);
    y += 10;
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    const achLines = doc.splitTextToSize(ach.desc, contentWidth - 14);
    doc.text(achLines, margin + 14, y);
    y += achLines.length * 10 + 4;
  });

  return Buffer.from(doc.output('arraybuffer'));
}

// Generate 2: Designed / Visual CV PDF
export function generateDesignedCvPdf(): Buffer {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 36;
  const contentWidth = pageWidth - margin * 2;
  let y = 36;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      drawPageBorder();
    }
  };

  const drawPageBorder = () => {
    // Subtle warm border
    doc.setDrawColor(232, 220, 201); // #E8DCC9
    doc.setLineWidth(1);
    doc.rect(margin - 8, margin - 8, contentWidth + 16, pageHeight - margin * 2 + 16);
  };

  drawPageBorder();

  // Header Banner Card with Cherry Butter styling
  doc.setFillColor(255, 249, 239); // Warm cream #FFF9EF
  doc.roundedRect(margin, y, contentWidth, 80, 8, 8, 'F');
  doc.setDrawColor(232, 220, 201);
  doc.setLineWidth(1.2);
  doc.roundedRect(margin, y, contentWidth, 80, 8, 8, 'S');

  // Red Accent Tab
  doc.setFillColor(181, 45, 58); // Cherry #B52D3A
  doc.roundedRect(margin + 12, y + 10, 110, 16, 4, 4, 'F');
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text('THE SNEHA DOSSIER', margin + 18, y + 21);

  // Yellow Badge
  doc.setFillColor(246, 231, 168); // Butter #F6E7A8
  doc.roundedRect(margin + 128, y + 10, 120, 16, 4, 4, 'F');
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(112, 38, 50); // Burgundy #702632
  doc.text('MCA · 2027 CANDIDATE', margin + 134, y + 21);

  // Main Name
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(37, 35, 33); // #252321
  doc.text('Sneha Maurya', margin + 12, y + 48);

  // Subtitle
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(112, 38, 50);
  doc.text('Product Design · UI/UX · AI Prototyping · Frontend Development', margin + 12, y + 62);

  // Contact Strip on right side of header
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(98, 90, 83); // #625A53
  const rightX = margin + contentWidth - 12;
  doc.text('Nashik, Maharashtra, India', rightX, y + 20, { align: 'right' });
  doc.text('snehamaurya12200@gmail.com', rightX, y + 34, { align: 'right' });
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(181, 45, 58);
  doc.textWithLink('linkedin.com/in/sneha-maurya-b842743b0', rightX, y + 48, { url: 'https://www.linkedin.com/in/sneha-maurya-b842743b0/', align: 'right' });
  doc.textWithLink('github.com/snehamaurya12200-design', rightX, y + 62, { url: 'https://github.com/snehamaurya12200-design', align: 'right' });

  y += 92;

  // Professional Summary Quote Card
  doc.setFillColor(255, 253, 249);
  doc.roundedRect(margin, y, contentWidth, 36, 6, 6, 'F');
  doc.setDrawColor(246, 231, 168);
  doc.setLineWidth(1);
  doc.roundedRect(margin, y, contentWidth, 36, 6, 6, 'S');

  doc.setFont('Helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(98, 90, 83);
  const summary = '“MCA student focused on product design, UI/UX, and AI-assisted product development. Combines product thinking, user-centered heuristics, and rapid prototyping to craft intuitive, tactile digital experiences.”';
  const sumLines = doc.splitTextToSize(summary, contentWidth - 20);
  doc.text(sumLines, margin + 10, y + 14);
  y += 44;

  const addDossierHeader = (title: string, icon: string = '■') => {
    checkPageBreak(30);
    doc.setFillColor(181, 45, 58);
    doc.circle(margin + 5, y + 6, 3, 'F');
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(112, 38, 50);
    doc.text(title.toUpperCase(), margin + 14, y + 9);
    doc.setDrawColor(232, 220, 201);
    doc.setLineWidth(1);
    doc.line(margin + 14 + doc.getTextWidth(title.toUpperCase()) + 8, y + 6, margin + contentWidth, y + 6);
    y += 18;
  };

  // EDUCATION
  addDossierHeader('Education');
  // Degree 1
  doc.setFillColor(255, 249, 239);
  doc.roundedRect(margin, y, contentWidth, 34, 4, 4, 'F');
  doc.setDrawColor(181, 45, 58);
  doc.setLineWidth(2.5);
  doc.line(margin, y, margin, y + 34); // Red left accent border

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(37, 35, 33);
  doc.text('Master of Computer Applications (MCA) — SIEM', margin + 8, y + 12);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(181, 45, 58);
  doc.text('2024 — Expected 2027', margin + contentWidth - 8, y + 12, { align: 'right' });

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(98, 90, 83);
  doc.text('Sandip Institute of Engineering and Management · Software Architecture, Advanced Systems, HCI', margin + 8, y + 25);
  y += 40;

  // Degree 2
  doc.setFillColor(255, 249, 239);
  doc.roundedRect(margin, y, contentWidth, 34, 4, 4, 'F');
  doc.setDrawColor(181, 45, 58);
  doc.setLineWidth(2.5);
  doc.line(margin, y, margin, y + 34);

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(37, 35, 33);
  doc.text('Bachelor of Business Administration in Computer Applications (BBA-CA)', margin + 8, y + 12);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(181, 45, 58);
  doc.text('Graduated Foundations', margin + contentWidth - 8, y + 12, { align: 'right' });

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(98, 90, 83);
  doc.text('Core training in relational databases (SQL queries), business software logic, and systems viability.', margin + 8, y + 25);
  y += 42;

  // CATEGORIZED SKILLS
  addDossierHeader('Categorized Skills & Tooling');
  const skillsList = [
    { cat: 'PRODUCT & DESIGN', items: 'UI/UX Design · Product Thinking · Figma Design Systems · Wireframing · User Flows · Heuristics' },
    { cat: 'AI & PROTOTYPING', items: 'AI-Assisted Development · Prompt Engineering · Multimodal APIs · Gemini Integration · Prototyping' },
    { cat: 'FRONTEND CODE', items: 'React · TypeScript · JavaScript (ES6+) · Tailwind CSS · HTML5 / Modern CSS · Vercel Deployment' },
    { cat: 'FOUNDATIONS', items: 'Python · C · C++ · SQL & Relational DBs · Java (Basic) · Data Structures · Git & GitHub' },
  ];

  skillsList.forEach((s) => {
    checkPageBreak(22);
    doc.setFillColor(255, 253, 249);
    doc.roundedRect(margin, y, contentWidth, 20, 3, 3, 'F');
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(112, 38, 50);
    doc.text(s.cat, margin + 6, y + 13);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.text(s.items, margin + 115, y + 13);
    y += 24;
  });
  y += 4;

  // SELECTED PROJECTS
  addDossierHeader('Selected Projects & Code');
  const projItems = [
    {
      title: 'Your Life, In Receipts',
      badge: 'TOP 5 FINALIST · LIVE APP',
      role: 'WebRush 6-Hour Solo Buildathon',
      url: 'https://yourlifeinrec.vercel.app/',
      desc: 'Experimental frontend built solo under a 6-hour sprint. Converts Spotify streaming metrics into tactile thermal cash-register receipts with barcode generation and polygon tears.',
      tech: 'React · TypeScript · CSS Shaders · Vercel',
    },
    {
      title: 'The First Week',
      badge: 'INTERACTIVE PROTOTYPE',
      role: 'Student Onboarding & Empathy Architecture',
      url: 'https://first-week-of-clg.vercel.app/',
      desc: 'Orientation platform that replaces sterile checklists with conversational schedule matchmaking and anxiety-reducing roadmap milestones.',
      tech: 'User Research · Figma · Architecture · React',
    },
    {
      title: 'Mood Money',
      badge: 'BEHAVIORAL UX CONCEPT',
      role: 'Behavioral Finance Mobile Concept',
      url: 'https://mood-money-hackathon-12.vercel.app/',
      desc: 'Gen Z personal-finance app designed to mitigate impulse purchases through 15-minute checkout pause friction loops and emotional spend-tagging.',
      tech: 'Behavioral UX · Mobile Design · Gamification',
    },
  ];

  projItems.forEach((p) => {
    checkPageBreak(50);
    doc.setFillColor(255, 249, 239);
    doc.roundedRect(margin, y, contentWidth, 48, 4, 4, 'F');
    doc.setDrawColor(232, 220, 201);
    doc.setLineWidth(0.8);
    doc.roundedRect(margin, y, contentWidth, 48, 4, 4, 'S');

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(37, 35, 33);
    doc.text(p.title, margin + 8, y + 12);

    doc.setFillColor(246, 231, 168);
    const badgeW = doc.getTextWidth(p.badge) + 8;
    doc.roundedRect(margin + contentWidth - badgeW - 8, y + 4, badgeW, 12, 2, 2, 'F');
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(112, 38, 50);
    doc.text(p.badge, margin + contentWidth - badgeW - 4, y + 12.5);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(181, 45, 58);
    doc.text(p.role, margin + 8, y + 23);

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(98, 90, 83);
    const pLines = doc.splitTextToSize(p.desc, contentWidth - 16);
    doc.text(pLines, margin + 8, y + 33);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(181, 45, 58);
    doc.textWithLink('Launch Live App ↗', margin + contentWidth - 8, y + 43, { url: p.url, align: 'right' });

    y += 54;
  });

  // STARTUP EXPERIENCE & ACHIEVEMENTS
  addDossierHeader('Startup Experience & Honors');
  checkPageBreak(52);
  doc.setFillColor(255, 253, 249);
  doc.roundedRect(margin, y, contentWidth, 50, 4, 4, 'F');
  doc.setDrawColor(232, 220, 201);
  doc.roundedRect(margin, y, contentWidth, 50, 4, 4, 'S');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(37, 35, 33);
  doc.text('Product Designer — StuMate MVP (Startup Team)', margin + 8, y + 12);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(181, 45, 58);
  doc.text('2024 — 2025', margin + contentWidth - 8, y + 12, { align: 'right' });

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(98, 90, 83);
  const stLines = [
    '• Interviewed 28 students to identify collaboration pain points; authored Figma design system component library.',
    '• Shipped MVP onboarding 500+ active beta students across campus pilot groups.',
  ];
  stLines.forEach((l, lIdx) => {
    doc.text(l, margin + 8, y + 24 + lIdx * 11);
  });
  y += 56;

  // Achievements
  const achs = [
    '1st Runner-Up — NexaForge × Unstop AI Prompt Challenge 2026',
    'Top 10 Finalist (6th Place, Score 96.0/100) — Prompt Run 2026 Hackathon',
    'Rank #28 — WebRush 2026 6-Hour Timed Solo Frontend Hackathon',
    'National Space Tech Participant — ISRO Bharatiya Antariksh Hackathon 2024',
  ];
  achs.forEach((a) => {
    checkPageBreak(14);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(181, 45, 58);
    doc.text('★', margin + 6, y + 7);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(37, 35, 33);
    doc.text(a, margin + 18, y + 7);
    y += 14;
  });

  return Buffer.from(doc.output('arraybuffer'));
}

// Generate files in public directory
try {
  const atsBuf = generateAtsResumePdf();
  fs.writeFileSync(path.join(process.cwd(), 'public/Sneha-Maurya-ATS-Resume.pdf'), atsBuf);
  console.log('Successfully generated public/Sneha-Maurya-ATS-Resume.pdf (size:', atsBuf.length, 'bytes)');

  const visualBuf = generateDesignedCvPdf();
  fs.writeFileSync(path.join(process.cwd(), 'public/Sneha-Maurya-CV.pdf'), visualBuf);
  console.log('Successfully generated public/Sneha-Maurya-CV.pdf (size:', visualBuf.length, 'bytes)');
} catch (e) {
  console.error('Generation error:', e);
}
