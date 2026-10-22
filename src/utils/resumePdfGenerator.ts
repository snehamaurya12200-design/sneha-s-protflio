import { jsPDF } from 'jspdf';
import { RESUME_DATA } from '../data/resumeData.ts';

/**
 * Client-side and build-safe generator for Sneha Maurya's ATS-Friendly Resume PDF
 */
export function createAtsResumePdf(): jsPDF {
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
  doc.text(RESUME_DATA.name.toUpperCase(), margin, y);
  y += 18;

  // Headline
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(60, 60, 60);
  doc.text(RESUME_DATA.headline, margin, y);
  y += 15;

  // Contact info
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(70, 70, 70);
  const contactLine = `${RESUME_DATA.location}  |  ${RESUME_DATA.email}  |  LinkedIn: sneha-maurya  |  GitHub: snehamaurya12200-design`;
  doc.text(contactLine, margin, y);
  y += 14;

  const addSectionHeader = (title: string) => {
    checkPageBreak(30);
    y += 8;
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(20, 20, 20);
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.75);
    doc.line(margin, y, margin + contentWidth, y);
    y += 12;
  };

  // PROFESSIONAL SUMMARY
  addSectionHeader('Professional Summary');
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  const summaryLines = doc.splitTextToSize(RESUME_DATA.summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 11.5 + 4;

  // EDUCATION
  addSectionHeader('Education');
  RESUME_DATA.education.forEach((edu) => {
    checkPageBreak(38);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text(edu.degree, margin, y);
    doc.setFont('Helvetica', 'normal');
    doc.text(edu.period, margin + contentWidth, y, { align: 'right' });
    y += 12;

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    doc.text(`${edu.institution} · ${edu.location}`, margin, y);
    y += 11;

    edu.highlights.forEach((h) => {
      checkPageBreak(12);
      doc.text(`•  ${h}`, margin + 8, y);
      y += 11;
    });
    y += 4;
  });

  // SKILLS & COMPETENCIES
  addSectionHeader('Skills & Competencies');
  RESUME_DATA.skills.forEach((sc) => {
    checkPageBreak(18);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 30);
    const catLabel = `•  ${sc.title}: `;
    doc.text(catLabel, margin, y);
    const prefixWidth = doc.getTextWidth(catLabel);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    const skillListStr = sc.skills.join(', ');
    const skillLines = doc.splitTextToSize(skillListStr, contentWidth - prefixWidth);
    doc.text(skillLines, margin + prefixWidth, y);
    y += Math.max(12, skillLines.length * 11);
  });
  y += 4;

  // SELECTED PROJECTS
  addSectionHeader('Selected Projects');
  RESUME_DATA.projects.forEach((proj, idx) => {
    checkPageBreak(45);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text(`${idx + 1}.  ${proj.title}`, margin, y);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 100, 100);
    doc.text(`[${proj.statusBadge}]`, margin + contentWidth, y, { align: 'right' });
    y += 11;

    doc.setFont('Helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    const contextStr = proj.liveUrl ? `${proj.roleOrContext} | Live: ${proj.liveUrl}` : proj.roleOrContext;
    doc.text(contextStr, margin + 12, y);
    y += 10;

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(40, 40, 40);
    const descLines = doc.splitTextToSize(proj.description, contentWidth - 12);
    doc.text(descLines, margin + 12, y);
    y += descLines.length * 10.5;

    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    doc.text(`Technologies: ${proj.technologies.join(', ')}`, margin + 12, y);
    y += 14;
  });

  // STARTUP EXPERIENCE
  if (RESUME_DATA.startupExperience) {
    addSectionHeader('Startup Experience');
    checkPageBreak(48);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text(`${RESUME_DATA.startupExperience.role} — ${RESUME_DATA.startupExperience.company}`, margin, y);
    doc.setFont('Helvetica', 'normal');
    doc.text(RESUME_DATA.startupExperience.period, margin + contentWidth, y, { align: 'right' });
    y += 11;

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(50, 50, 50);
    RESUME_DATA.startupExperience.outcomes.forEach((sp) => {
      checkPageBreak(12);
      doc.text(`•  ${sp}`, margin + 8, y);
      y += 11;
    });
    y += 4;
  }

  // HONORS & ACHIEVEMENTS
  addSectionHeader('Honors & Achievements');
  RESUME_DATA.achievements.forEach((ach) => {
    checkPageBreak(24);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 30);
    doc.text(`★  ${ach.title} (${ach.year})`, margin, y);
    y += 10;
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    const achLines = doc.splitTextToSize(ach.description, contentWidth - 14);
    doc.text(achLines, margin + 14, y);
    y += achLines.length * 10 + 4;
  });

  return doc;
}

/**
 * Client-side and build-safe generator for Sneha Maurya's Designed / Visual CV PDF
 */
export function createDesignedCvPdf(): jsPDF {
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
  doc.text(RESUME_DATA.name, margin + 12, y + 48);

  // Subtitle
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(112, 38, 50);
  doc.text(RESUME_DATA.headline, margin + 12, y + 62);

  // Contact Strip on right side of header
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(98, 90, 83); // #625A53
  const rightX = margin + contentWidth - 12;
  doc.text(RESUME_DATA.location, rightX, y + 20, { align: 'right' });
  doc.text(RESUME_DATA.email, rightX, y + 34, { align: 'right' });
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(181, 45, 58);
  doc.textWithLink('LinkedIn ↗', rightX, y + 48, { url: RESUME_DATA.linkedinUrl, align: 'right' });
  doc.textWithLink('GitHub ↗', rightX, y + 62, { url: RESUME_DATA.githubUrl, align: 'right' });

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
  const sumLines = doc.splitTextToSize(`“${RESUME_DATA.summary}”`, contentWidth - 20);
  doc.text(sumLines, margin + 10, y + 14);
  y += 44;

  const addDossierHeader = (title: string) => {
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
  RESUME_DATA.education.forEach((edu) => {
    doc.setFillColor(255, 249, 239);
    doc.roundedRect(margin, y, contentWidth, 34, 4, 4, 'F');
    doc.setDrawColor(181, 45, 58);
    doc.setLineWidth(2.5);
    doc.line(margin, y, margin, y + 34);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(37, 35, 33);
    doc.text(edu.degree, margin + 8, y + 12);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(181, 45, 58);
    doc.text(edu.period, margin + contentWidth - 8, y + 12, { align: 'right' });

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(98, 90, 83);
    doc.text(`${edu.institution} · ${edu.highlights[0] || edu.location}`, margin + 8, y + 25);
    y += 40;
  });

  // CATEGORIZED SKILLS
  addDossierHeader('Categorized Skills & Tooling');
  RESUME_DATA.skills.forEach((s) => {
    checkPageBreak(22);
    doc.setFillColor(255, 253, 249);
    doc.roundedRect(margin, y, contentWidth, 20, 3, 3, 'F');
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(112, 38, 50);
    doc.text(s.title.toUpperCase(), margin + 6, y + 13);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    doc.text(s.skills.join(' · '), margin + 125, y + 13);
    y += 24;
  });
  y += 4;

  // SELECTED PROJECTS
  addDossierHeader('Selected Projects & Code');
  RESUME_DATA.projects.slice(0, 4).forEach((p) => {
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
    const badgeW = doc.getTextWidth(p.statusBadge) + 8;
    doc.roundedRect(margin + contentWidth - badgeW - 8, y + 4, badgeW, 12, 2, 2, 'F');
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(112, 38, 50);
    doc.text(p.statusBadge, margin + contentWidth - badgeW - 4, y + 12.5);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(181, 45, 58);
    doc.text(p.roleOrContext, margin + 8, y + 23);

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(98, 90, 83);
    const pLines = doc.splitTextToSize(p.description, contentWidth - 16);
    doc.text(pLines, margin + 8, y + 33);

    if (p.liveUrl) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(181, 45, 58);
      doc.textWithLink('Launch Live App ↗', margin + contentWidth - 8, y + 43, { url: p.liveUrl, align: 'right' });
    }

    y += 54;
  });

  // STARTUP EXPERIENCE & ACHIEVEMENTS
  if (RESUME_DATA.startupExperience) {
    addDossierHeader('Startup Experience & Honors');
    checkPageBreak(52);
    doc.setFillColor(255, 253, 249);
    doc.roundedRect(margin, y, contentWidth, 50, 4, 4, 'F');
    doc.setDrawColor(232, 220, 201);
    doc.roundedRect(margin, y, contentWidth, 50, 4, 4, 'S');

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(37, 35, 33);
    doc.text(`${RESUME_DATA.startupExperience.role} — ${RESUME_DATA.startupExperience.company}`, margin + 8, y + 12);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(181, 45, 58);
    doc.text(RESUME_DATA.startupExperience.period, margin + contentWidth - 8, y + 12, { align: 'right' });

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(98, 90, 83);
    RESUME_DATA.startupExperience.outcomes.slice(0, 2).forEach((l, lIdx) => {
      doc.text(`• ${l}`, margin + 8, y + 24 + lIdx * 11);
    });
    y += 56;
  }

  // Achievements
  RESUME_DATA.achievements.forEach((a) => {
    checkPageBreak(14);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(181, 45, 58);
    doc.text('★', margin + 6, y + 7);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(37, 35, 33);
    doc.text(`${a.title} (${a.year})`, margin + 18, y + 7);
    y += 14;
  });

  return doc;
}
