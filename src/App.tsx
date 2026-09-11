import React, { useState } from 'react';
import { NavSection } from './types';
import { Header } from './components/Header';
import { LeftPanel } from './components/LeftPanel';
import { RetroConsole } from './components/RetroConsole';
import { RightPanel } from './components/RightPanel';
import { SectionModal } from './components/SectionModal';
import { AIAssistantCompanion } from './components/AIAssistantCompanion';
import { BottomNav } from './components/BottomNav';
import { MobileProjectsView } from './components/MobileProjectsView';
import { MobileBlogView } from './components/MobileBlogView';
import { MobileAboutView } from './components/MobileAboutView';
import { MobileContactView } from './components/MobileContactView';
import { soundManager } from './utils/soundEffects';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [modalSection, setModalSection] = useState<NavSection | null>(null);
  const [assistantInput, setAssistantInput] = useState('');
  const [isAssistantLoading, setIsAssistantLoading] = useState(false);

  const handleSelectSection = (section: NavSection) => {
    setActiveSection(section);
  };

  const handleOpenSectionDetail = (section: NavSection) => {
    setActiveSection(section);
    if (section !== 'home') {
      setModalSection(section);
    }
  };

  const handleCloseModal = () => {
    setModalSection(null);
  };

  const handleSendAssistantMessage = async (msg: string) => {
    if (!msg.trim() || isAssistantLoading) return;
    setIsAssistantLoading(true);
    soundManager.playSelect();
    try {
      await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg }),
      });
      soundManager.playNavigate();
    } catch {
      soundManager.playNavigate();
    } finally {
      setIsAssistantLoading(false);
      setAssistantInput('');
    }
  };

  return (
    <div className="min-h-screen bg-tech-grid text-[#10283F] dark:text-[#E0E6ED] dark:bg-[#040D1A] flex flex-col relative overflow-x-hidden selection:bg-[#092A4A] selection:text-[#F4E9D5] dark:selection:bg-[#00E5FF] dark:selection:text-[#040D1A]">
      <Header
        activeSection={activeSection}
        onSelectSection={(sec) => {
          setActiveSection(sec);
          if (sec === 'home') {
            setModalSection(null);
          } else {
            handleOpenSectionDetail(sec);
          }
        }}
      />

      <main className="hidden lg:flex flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex-row items-start justify-between gap-8 sm:gap-10">
        <div className="w-auto flex justify-start order-1">
          <LeftPanel
            onSelectSkill={() => handleOpenSectionDetail('about')}
            onOpenContact={() => handleOpenSectionDetail('contact')}
          />
        </div>

        <div className="flex-1 flex justify-center order-2">
          <RetroConsole
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
            onOpenSectionDetail={handleOpenSectionDetail}
          />
        </div>

        <div className="w-auto flex justify-end order-3">
          <RightPanel
            onOpenProject={() => handleOpenSectionDetail('projects')}
            onExploreSpecialty={() => handleOpenSectionDetail('about')}
          />
        </div>
      </main>

      <main className="flex lg:hidden flex-1 w-full max-w-lg mx-auto px-4 py-4 pb-28 flex-col items-center gap-6">
        {activeSection === 'home' && (
          <div className="w-full flex flex-col items-center gap-6 animate-in fade-in duration-200">
            <div className="w-full flex justify-center">
              <RetroConsole
                activeSection={activeSection}
                onSelectSection={handleSelectSection}
                onOpenSectionDetail={(sec) => {
                  setActiveSection(sec);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>

            <div className="w-full">
              <LeftPanel
                onSelectSkill={() => {
                  setActiveSection('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenContact={() => {
                  setActiveSection('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>

            <div className="w-full">
              <RightPanel
                onOpenProject={() => {
                  setActiveSection('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onExploreSpecialty={() => {
                  setActiveSection('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>

            <div className="w-full py-4 flex items-center justify-center gap-3 font-mono-tech text-[11px] text-[#4B6173] dark:text-[#88A2BF] select-none">
              <span className="text-xs text-[#092A4A]/40 dark:text-[#00E5FF]/40">+</span>
              <div className="w-16 sm:w-28 h-px bg-[#092A4A]/20 dark:bg-[#00E5FF]/20" />
              <span className="tracking-widest font-semibold text-[#665440] dark:text-[#88A2BF]">THE JOURNEY CONTINUES...</span>
              <div className="w-16 sm:w-28 h-px bg-[#092A4A]/20 dark:bg-[#00E5FF]/20" />
              <span className="text-xs text-[#092A4A]/40 dark:text-[#00E5FF]/40">+</span>
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <MobileProjectsView
            onSelectProject={() => {
              setModalSection('projects');
            }}
          />
        )}

        {activeSection === 'blog' && (
          <MobileBlogView
            onSelectArticle={() => {
              setModalSection('blog');
            }}
            assistantInput={assistantInput}
            onAssistantInputChange={setAssistantInput}
            onSendAssistantMessage={handleSendAssistantMessage}
            isAssistantLoading={isAssistantLoading}
          />
        )}

        {activeSection === 'about' && <MobileAboutView />}

        {activeSection === 'contact' && <MobileContactView />}
      </main>

      <SectionModal section={modalSection} onClose={handleCloseModal} />

      <AIAssistantCompanion />

      <BottomNav
        activeSection={activeSection}
        onSelectSection={(sec) => {
          setActiveSection(sec);
          setModalSection(null);
        }}
      />

      <div className="hidden lg:flex w-full max-w-7xl mx-auto py-6 px-4 items-center justify-center gap-3 font-mono-tech text-[11px] text-[#4B6173] dark:text-[#88A2BF] select-none">
        <span className="text-xs text-[#092A4A]/40 dark:text-[#00E5FF]/40">+</span>
        <div className="w-24 sm:w-48 h-px bg-[#092A4A]/20 dark:bg-[#00E5FF]/20" />
        <span className="tracking-widest font-semibold text-[#665440] dark:text-[#88A2BF]">THE JOURNEY CONTINUES...</span>
        <div className="w-24 sm:w-48 h-px bg-[#092A4A]/20 dark:bg-[#00E5FF]/20" />
        <span className="text-xs text-[#092A4A]/40 dark:text-[#00E5FF]/40">+</span>
      </div>
    </div>
  );
}
