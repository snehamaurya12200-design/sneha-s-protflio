import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation.tsx';
import { Hero } from './components/Hero.tsx';
import { Marquee } from './components/Marquee.tsx';
import { Projects, ProjectDetail } from './components/Projects.tsx';
import { ProjectDetailModal } from './components/ProjectDetailModal.tsx';
import { Arsenal } from './components/Arsenal.tsx';
import { Certificates } from './components/Certificates.tsx';
import { LittleMilestones } from './components/LittleMilestones.tsx';
import { About } from './components/About.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { YapModal } from './components/YapModal.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { BackgroundAura, BackgroundTheme } from './components/BackgroundAura.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { AuraModal } from './components/AuraModal.tsx';
import { PickupLinesModal } from './components/PickupLinesModal.tsx';
import { PROJECTS_DATA } from './data/projectsData.ts';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isYapOpen, setIsYapOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAuraOpen, setIsAuraOpen] = useState(false);
  const [isPickupLinesOpen, setIsPickupLinesOpen] = useState(false);
  const [auraMode, setAuraMode] = useState<'vibrant' | 'soft'>('vibrant');

  // Background atmosphere theme based on user uploaded images
  const [bgMode, setBgMode] = useState<BackgroundTheme>(() => {
    try {
      const saved = localStorage.getItem('alittleworld_bg') as BackgroundTheme;
      if (saved && ['soft-aura', 'sparkle-rose', 'burgundy-studio'].includes(saved)) {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'soft-aura';
  });

  const handleToggleBgMode = () => {
    setBgMode((prev) => {
      const next: BackgroundTheme =
        prev === 'soft-aura'
          ? 'sparkle-rose'
          : prev === 'sparkle-rose'
          ? 'burgundy-studio'
          : 'soft-aura';
      try {
        localStorage.setItem('alittleworld_bg', next);
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleSelectBgMode = (mode: BackgroundTheme) => {
    setBgMode(mode);
    try {
      localStorage.setItem('alittleworld_bg', mode);
    } catch {
      // ignore
    }
  };

  // URL synchronization for direct project links & browser back / forward buttons
  useEffect(() => {
    const handleUrlSync = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const projectIdFromQuery = searchParams.get('project');
      const hashMatch = window.location.hash.match(/#project\/(.+)/);
      const targetId = projectIdFromQuery || (hashMatch ? hashMatch[1] : null);

      if (targetId) {
        const found = PROJECTS_DATA.find((p) => p.id === targetId);
        if (found) {
          setSelectedProject(found);
          return;
        }
      }
      setSelectedProject(null);
    };

    handleUrlSync();
    window.addEventListener('popstate', handleUrlSync);
    window.addEventListener('hashchange', handleUrlSync);
    return () => {
      window.removeEventListener('popstate', handleUrlSync);
      window.removeEventListener('hashchange', handleUrlSync);
    };
  }, []);

  const handleSelectProject = (proj: ProjectDetail) => {
    setSelectedProject(proj);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('project', proj.id);
    window.history.pushState({ projectId: proj.id }, '', newUrl.toString());
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete('project');
    window.history.pushState({}, '', newUrl.pathname + '#work');
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Intersection observer to track which section is in view for floating nav
  useEffect(() => {
    if (selectedProject) return; // Don't track section when in detail view

    const handleScroll = () => {
      const sections = ['hero', 'work', 'skills', 'certificates', 'milestones', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  const handleNavigateSection = (sectionId: string) => {
    if (selectedProject) {
      setSelectedProject(null);
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('project');
      window.history.pushState({}, '', newUrl.pathname + '#' + sectionId);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreWork = () => {
    handleNavigateSection('work');
  };

  const handleOpenContact = () => {
    handleNavigateSection('contact');
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-transparent text-[#252321] selection:bg-[#F6E7A8] selection:text-[#E52B45] relative">
      
      {/* Refined Custom Cursor in Raspberry Pink #C24366 & Rose Pink glow */}
      <CustomCursor />

      {/* Atmospheric Background with User-Uploaded Aura Images */}
      <BackgroundAura
        opacity={auraMode === 'vibrant' ? 1 : 0.8}
        bgMode={bgMode}
      />

      {/* Floating Translucent Glass Navigation */}
      <Navigation
        activeSection={selectedProject ? 'work' : activeSection}
        onOpenContact={handleOpenContact}
        onNavigateSection={handleNavigateSection}
        auraMode={auraMode}
        onToggleAura={() => setAuraMode((m) => (m === 'vibrant' ? 'soft' : 'vibrant'))}
        onOpenAura={() => setIsAuraOpen(true)}
        onOpenPickupLines={() => setIsPickupLinesOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        bgMode={bgMode}
        onToggleBgMode={handleToggleBgMode}
      />

      {/* Main Portfolio Feed — Stays rendered in the background */}
      <Hero
        onExploreWork={handleExploreWork}
        onOpenYap={() => setIsYapOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenPickupLines={() => setIsPickupLinesOpen(true)}
      />

      {/* Marquee Section Divider */}
      <Marquee />

      {/* Art-Directed "IDEAS THAT LEFT THE GROUP CHAT" Section */}
      <Projects
        onSelectProject={handleSelectProject}
      />

      {/* Arsenal / Skills Section with Solid White Tiles */}
      <Arsenal />

      {/* Dedicated Certificates Section */}
      <Certificates />

      {/* Little Milestones Section (Experience & Achievements) */}
      <LittleMilestones />

      {/* About / Lore Section */}
      <About />

      {/* Contact Section with Warped Checkerboard Graphic */}
      <Contact
        onOpenYap={() => setIsYapOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Dedicated Project Detail Pop-up Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleBackToProjects}
        onSelectProject={handleSelectProject}
      />

      {/* Footer with Live IST Clock */}
      <Footer />

      {/* Interactive Modals */}
      <YapModal
        isOpen={isYapOpen}
        onClose={() => setIsYapOpen(false)}
      />

      <div id="resume-modal-portal">
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>

      <AuraModal
        isOpen={isAuraOpen}
        onClose={() => setIsAuraOpen(false)}
        auraMode={auraMode}
        onToggleAuraMode={() => setAuraMode((m) => (m === 'vibrant' ? 'soft' : 'vibrant'))}
        bgMode={bgMode}
        onSelectBgMode={handleSelectBgMode}
      />

      <PickupLinesModal
        isOpen={isPickupLinesOpen}
        onClose={() => setIsPickupLinesOpen(false)}
      />
    </div>
  );
}
