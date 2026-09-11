import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { NavSection } from '../types';
import { soundManager } from '../utils/soundEffects';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onSelectSection }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    soundManager.initFromStorage();
    setIsMuted(soundManager.isMuted());
    
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    }
  }, []);

  const handleToggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundManager.playSelect();
    }
  };

  const handleToggleTheme = () => {
    soundManager.playSelect();
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-5 border-b border-[#092A4A]/10 dark:border-[#13355A] select-none relative z-30">
      <div className="flex items-center justify-between">
        <div 
          onClick={() => {
            soundManager.playSelect();
            onSelectSection('home');
          }}
          className="flex items-center gap-3 cursor-pointer group"
          id="header-brand"
        >
          <div className="w-10 h-10 rounded-sm bg-[#092A4A] dark:bg-[#081B30] p-1 flex items-center justify-center shadow-sm border border-[#061B30] dark:border-[#13355A] relative overflow-hidden transition-transform group-hover:scale-105 shrink-0">
            <svg className="w-8 h-8 pixelated" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="2" width="8" height="3" fill="#10283F" />
              <rect x="3" y="3" width="2" height="4" fill="#10283F" />
              <rect x="11" y="3" width="2" height="4" fill="#10283F" />
              <rect x="5" y="4" width="6" height="5" fill="#F2E4CC" />
              <rect x="6" y="6" width="1" height="2" fill="#092A4A" />
              <rect x="9" y="6" width="1" height="2" fill="#092A4A" />
              <rect x="5" y="6" width="3" height="1" fill="#D7A93D" opacity="0.9" />
              <rect x="8" y="6" width="3" height="1" fill="#D7A93D" opacity="0.9" />
              <rect x="7.5" y="6" width="1" height="1" fill="#D7A93D" />
              <rect x="4" y="9" width="8" height="6" fill="#092A4A" />
              <rect x="6" y="9" width="4" height="3" fill="currentColor" />
              <rect x="4" y="9" width="1.5" height="5" fill="#C85C57" />
              <rect x="10.5" y="9" width="1.5" height="5" fill="#C85C57" />
            </svg>
            <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg sm:text-xl text-[#092A4A] dark:text-[#F0F6FC] tracking-tight">
                Suraj Yadav
              </span>
            </div>
            <span className="font-mono-tech text-xs text-[#4B6173] dark:text-[#7C93AE] tracking-wide block">
              Software Engineer
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2" id="header-nav-container">
          <span className="text-xs font-mono-tech text-[#092A4A]/40 dark:text-[#00E5FF]/40 select-none">{'{'}</span>
          <nav className="flex items-center gap-1 sm:gap-2 px-1 py-1 select-none" id="header-nav">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => {
                    soundManager.playNavigate();
                    onSelectSection(item.id);
                  }}
                  className={`font-mono-tech text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'border-b-2 border-[#092A4A] dark:border-[#00E5FF] text-[#092A4A] dark:text-[#00E5FF] font-bold'
                      : 'text-[#4B6173] dark:text-[#7C93AE] hover:text-[#092A4A] dark:hover:text-[#00E5FF]'
                  }`}
                >
                  {isActive ? `[ ${item.label} ]` : item.label}
                </button>
              );
            })}
          </nav>
          <span className="text-xs font-mono-tech text-[#092A4A]/40 dark:text-[#00E5FF]/40 select-none">{'}'}</span>
        </div>

        <div className="hidden lg:flex items-center gap-3" id="header-controls">
          <div className="flex items-center gap-1 text-right font-mono-tech text-[10px] text-[#4B6173] dark:text-[#7C93AE] leading-tight select-none">
            <span className="text-xs text-[#092A4A]/50 dark:text-[#00E5FF]/50">&gt;</span>
            <div className="flex flex-col">
              <span className="text-[#092A4A] dark:text-[#00E5FF] font-bold tracking-widest">BUILDING SOLUTIONS</span>
              <span className="tracking-wider text-[9.5px]">ONE LINE AT A TIME</span>
            </div>
          </div>

          <button
            id="sound-toggle-btn"
            onClick={handleToggleSound}
            title={isMuted ? 'Sound is MUTED (Click to unmute)' : 'Sound is ON (Click to mute)'}
            className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all cursor-pointer ${
              isMuted
                ? 'bg-[#EADBC3] dark:bg-[#081B30] text-[#4B6173] dark:text-[#7C93AE] border-[#C8B79D] dark:border-[#13355A]'
                : 'bg-[#092A4A] dark:bg-[#0B2542] text-[#F4E9D5] dark:text-[#00E5FF] border-[#061B30] dark:border-[#00E5FF]/40 shadow-xs'
            }`}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-[#6FAF75] dark:text-[#00E5FF]" />}
          </button>

          <button
            id="theme-toggle-btn"
            onClick={handleToggleTheme}
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            className="w-8 h-8 flex items-center justify-center text-[#092A4A] dark:text-[#00E5FF] hover:bg-[#092A4A]/10 dark:hover:bg-[#00E5FF]/10 rounded-full transition-colors cursor-pointer"
          >
            {isDark ? (
              <svg className="w-5 h-5 pixelated" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1.5C4.4 1.5 1.5 4.4 1.5 8s2.9 6.5 6.5 6.5c3.2 0 5.8-2.3 6.4-5.3-.2 0-.3.1-.5.1-3 0-5.5-2.5-5.5-5.5 0-.3 0-.5.1-.8-.8-.6-1.9-1-3-1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 pixelated" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="7.25" y="1" width="1.5" height="2" rx="0.5" />
                <rect x="7.25" y="13" width="1.5" height="2" rx="0.5" />
                <rect x="1" y="7.25" width="2" height="1.5" rx="0.5" />
                <rect x="13" y="7.25" width="2" height="1.5" rx="0.5" />
                <rect x="2.8" y="2.8" width="1.5" height="1.5" rx="0.5" transform="rotate(45 3.5 3.5)" />
                <rect x="11.8" y="11.8" width="1.5" height="1.5" rx="0.5" transform="rotate(45 12.5 12.5)" />
                <rect x="2.8" y="11.8" width="1.5" height="1.5" rx="0.5" transform="rotate(-45 3.5 12.5)" />
                <rect x="11.8" y="2.8" width="1.5" height="1.5" rx="0.5" transform="rotate(-45 12.5 3.5)" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => {
              soundManager.playSelect();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            className="w-9 h-9 rounded-lg bg-[#EADBC3]/70 dark:bg-[#081B30] border border-[#C8B79D] dark:border-[#13355A] flex items-center justify-center text-[#092A4A] dark:text-[#00E5FF] cursor-pointer"
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 bg-[#EADBC3] dark:bg-[#061527] rounded-xl border border-[#C8B79D] dark:border-[#13355A] shadow-lg animate-in slide-in-from-top-2 duration-150 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-[#092A4A]/10 dark:border-[#13355A] pb-3">
            <span className="font-mono-tech text-xs text-[#4B6173] dark:text-[#7C93AE]">
              Controls & Settings
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleSound}
                className="px-2.5 py-1 rounded bg-[#F4E9D5] dark:bg-[#081B30] border border-[#C8B79D] dark:border-[#13355A] text-xs font-mono-tech flex items-center gap-1.5 text-[#092A4A] dark:text-[#00E5FF]"
              >
                {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} className="text-[#3DA66B] dark:text-[#00E5FF]" />}
                <span>{isMuted ? 'Muted' : 'Audio On'}</span>
              </button>

              <button
                onClick={handleToggleTheme}
                className="px-2.5 py-1 rounded bg-[#F4E9D5] dark:bg-[#081B30] border border-[#C8B79D] dark:border-[#13355A] text-xs font-mono-tech text-[#092A4A] dark:text-[#00E5FF]"
              >
                {isDark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono-tech pt-1">
            <div className="flex items-center gap-1 text-[10px] text-[#4B6173] dark:text-[#7C93AE]">
              <span>&gt; BUILDING SOLUTIONS ONE LINE AT A TIME</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded bg-[#092A4A] dark:bg-[#081B30] text-[#F4E9D5] dark:text-[#00E5FF] border border-transparent dark:border-[#13355A]"
              >
                <Github size={13} />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded bg-[#092A4A] dark:bg-[#081B30] text-[#F4E9D5] dark:text-[#00E5FF] border border-transparent dark:border-[#13355A]"
              >
                <Linkedin size={13} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="p-1.5 rounded bg-[#092A4A] dark:bg-[#081B30] text-[#F4E9D5] dark:text-[#00E5FF] border border-transparent dark:border-[#13355A]"
              >
                <Mail size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
