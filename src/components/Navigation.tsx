import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, BookOpen } from 'lucide-react';
import type { BackgroundTheme } from './BackgroundAura.tsx';

interface NavigationProps {
  activeSection: string;
  onNavigateSection?: (id: string) => void;
  onOpenResume?: () => void;
  onReturnToIntro?: () => void;
  onOpenContact?: () => void;
  auraMode?: 'vibrant' | 'soft';
  onToggleAura?: () => void;
  onOpenAura?: () => void;
  onOpenPickupLines?: () => void;
  bgMode?: BackgroundTheme;
  onToggleBgMode?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigateSection,
  onOpenResume,
  onReturnToIntro,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Honors' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
      setMobileMenuOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none ${
        isScrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark with tactile cherry dot */}
        <div className="flex items-center gap-2 pointer-events-auto shrink-0">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-2 group whitespace-nowrap px-3 py-1.5 rounded-full bg-[#FFFDF9]/90 border border-[#E8DCC9] shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#B52D3A]" />
            <span className="font-lobster text-lg sm:text-xl font-bold text-[#252321] group-hover:text-[#B52D3A] transition-colors">
              Cherry Butter Studio
            </span>
            <span className="hidden md:inline-block font-sans text-xs font-semibold text-[#625A53]/75">
              — Sneha Maurya
            </span>
          </a>
        </div>

        {/* Zone 2: Clean 5 Single-Line Nav Links on Warm Paper Capsule */}
        <nav className="hidden lg:flex pointer-events-auto px-3.5 py-1.5 rounded-full items-center gap-1 transition-all duration-300 bg-[#FFFDF9]/95 border border-[#E8DCC9] shadow-[0_4px_16px_rgba(37,35,33,0.06)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#B52D3A] font-bold bg-[#F6E7A8] border border-[#E4C868] shadow-xs'
                    : 'text-[#625A53] hover:text-[#252321] hover:bg-[#F6E7A8]/40'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Resume + Sketchbook Intro Switch) */}
        <div className="flex items-center gap-2.5 pointer-events-auto shrink-0">
          
          {/* Sketchbook Page 1 Shortcut if provided */}
          {onReturnToIntro && (
            <button
              onClick={onReturnToIntro}
              title="Return to Sketchbook Intro"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs font-semibold bg-[#F6E7A8] hover:bg-[#ebd582] text-[#702632] border border-[#E4C868] shadow-xs transition-all cursor-pointer whitespace-nowrap"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#B52D3A]" />
              <span className="hidden sm:inline">Sketchbook</span>
            </button>
          )}

          {/* Resume Action */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              title="View Resume / CV"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-sans text-xs font-bold cherry-btn shadow-xs transition-all cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 min-w-[36px] rounded-full flex items-center justify-center shadow-xs transition-all duration-200 cursor-pointer bg-[#FFFDF9] hover:bg-[#F6E7A8] text-[#252321] border border-[#E8DCC9]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-[#B52D3A]" />
            ) : (
              <Menu className="w-4 h-4 text-[#252321]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-[#252321]/30 z-30 lg:hidden pointer-events-auto animate-[fadeIn_0.15s_ease-out]"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-40 lg:hidden pointer-events-auto mt-2 max-w-sm mx-auto rounded-2xl bg-[#FFFDF9] border border-[#E8DCC9] paper-note-shadow p-4 transition-all">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-sans font-semibold transition-colors cursor-pointer min-h-[44px] ${
                      isActive
                        ? 'bg-[#F6E7A8] text-[#B52D3A] font-bold border border-[#E4C868]'
                        : 'text-[#625A53] hover:bg-[#F6E7A8]/30 hover:text-[#252321]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#B52D3A]" />
                    )}
                  </button>
                );
              })}

              <div className="border-t border-[#E8DCC9] pt-2 mt-1 flex flex-col gap-2">
                {onReturnToIntro && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onReturnToIntro();
                    }}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#F6E7A8]/60 text-[#702632] hover:bg-[#F6E7A8]"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#B52D3A]" />
                      <span>Back to Sketchbook Intro</span>
                    </span>
                    <span>↗</span>
                  </button>
                )}

                {onOpenResume && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-sans font-bold cherry-btn"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>View Resume / CV</span>
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/20">
                      PDF
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
