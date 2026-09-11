import React from 'react';
import { Home, User, FolderCode, BookOpen, Mail } from 'lucide-react';
import { NavSection } from '../types';
import { soundManager } from '../utils/soundEffects';

interface BottomNavProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onSelectSection }) => {
  const items: { id: NavSection; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'projects', label: 'Projects', icon: <FolderCode size={18} /> },
    { id: 'blog', label: 'Blog', icon: <BookOpen size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <div 
      id="mobile-bottom-nav"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#F4E9D5]/95 dark:bg-[#051121]/95 backdrop-blur-md border-t border-[#092A4A]/20 dark:border-[#13355A] px-2 pt-1.5 pb-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] select-none"
    >
      <nav className="flex items-center justify-around max-w-lg mx-auto">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                soundManager.playNavigate();
                onSelectSection(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'text-[#092A4A] dark:text-[#00E5FF]'
                  : 'text-[#627588] dark:text-[#7C93AE] hover:text-[#092A4A] dark:hover:text-[#00E5FF]'
              }`}
            >
              <div className={`transition-transform ${isActive ? 'scale-110' : ''}`}>
                {item.icon}
              </div>
              <span className={`text-[10.5px] font-mono-tech mt-1 tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
              <div
                className={`h-0.5 rounded-full transition-all duration-200 mt-0.5 ${
                  isActive ? 'w-5 bg-[#092A4A] dark:bg-[#00E5FF]' : 'w-0 bg-transparent'
                }`}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
};
