import React, { useState } from 'react';
import { MapPin, Github, Linkedin, Globe, Mail, X } from 'lucide-react';
import { PERSONAL_INFO, TECH_STACK } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { soundManager } from '../utils/soundEffects';

interface LeftPanelProps {
  onSelectSkill?: (skillId: string) => void;
  onOpenContact?: () => void;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({ onOpenContact }) => {
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

  const activeSkill = TECH_STACK.find(t => t.id === activeSkillId);

  return (
    <aside className="w-full lg:w-[350px] xl:w-[380px] flex flex-col gap-5 select-none relative p-3.5 sm:p-4 rounded-xl border border-dashed border-[#092A4A]/20 dark:border-[#13355A] bg-[#EADBC3]/20 dark:bg-[#06172A]/40" id="left-panel">
      <span className="absolute -top-1.5 -left-1.5 text-xs font-mono-tech text-[#092A4A]/50 dark:text-[#00E5FF]/80 select-none">┌</span>
      <span className="absolute -top-1.5 -right-1.5 text-xs font-mono-tech text-[#092A4A]/50 dark:text-[#00E5FF]/80 select-none">┐</span>
      <span className="absolute -bottom-1.5 -left-1.5 text-xs font-mono-tech text-[#092A4A]/50 dark:text-[#00E5FF]/80 select-none">└</span>
      <span className="absolute -bottom-1.5 -right-1.5 text-xs font-mono-tech text-[#092A4A]/50 dark:text-[#00E5FF]/80 select-none">┘</span>

      <div className="flex flex-col relative">
        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#092A4A]/10 dark:bg-[#082038] border border-transparent dark:border-[#00E5FF]/40 text-[#092A4A] dark:text-[#00E5FF] font-mono-tech text-[11px] font-semibold tracking-wider mb-2 w-fit">
          <span>&lt;</span>
          <span>SOFTWARE ENGINEER</span>
          <span>&gt;</span>
        </div>

        <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#092A4A] dark:text-[#F0F6FC] tracking-tight leading-tight mb-2">
          {PERSONAL_INFO.name}
        </h1>

        <h2 className="font-mono-tech font-bold text-xs sm:text-sm text-[#10283F] dark:text-[#D1E0EE] leading-snug mb-2">
          {PERSONAL_INFO.tagline}
        </h2>

        <p className="font-mono-tech text-xs text-[#4B6173] dark:text-[#88A2BF] leading-relaxed mb-4">
          {PERSONAL_INFO.bio}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="flex items-center gap-2 bg-[#F4E9D5] dark:bg-[#081B30] p-2 rounded-lg border border-[#C8B79D] dark:border-[#13355A]">
            <MapPin size={15} className="text-[#092A4A] dark:text-[#00E5FF] shrink-0" />
            <div className="flex flex-col">
              <span className="text-[9.5px] font-mono-tech text-[#4B6173] dark:text-[#7C93AE] uppercase tracking-wider">Location</span>
              <span className="text-xs font-mono-tech font-semibold text-[#10283F] dark:text-[#F0F6FC]">India</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#F4E9D5] dark:bg-[#081B30] p-2 rounded-lg border border-[#C8B79D] dark:border-[#13355A]">
            <span className="relative flex h-2.5 w-2.5 shrink-0 ml-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DA66B] dark:bg-[#00E676] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3DA66B] dark:bg-[#00E676]" />
            </span>
            <div className="flex flex-col">
              <span className="text-[9.5px] font-mono-tech text-[#4B6173] dark:text-[#7C93AE] uppercase tracking-wider">Availability</span>
              <span className="text-[10.5px] font-mono-tech font-semibold text-[#10283F] dark:text-[#F0F6FC] leading-tight">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="text-[#092A4A] dark:text-[#00E5FF] text-xs">❖</span>
          <h3 className="font-display font-bold text-xs tracking-wider uppercase text-[#092A4A] dark:text-[#00E5FF]">
            CONNECT WITH ME
          </h3>
        </div>

        <div className="grid grid-cols-4 gap-2.5">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playNavigate()}
            id="social-github-btn"
            title="GitHub Profile"
            className="flex items-center justify-center h-10 rounded-lg bg-[#092A4A] dark:bg-[#081B30] hover:bg-[#123F68] dark:hover:bg-[#0B2542] text-[#F4E9D5] dark:text-[#88A2BF] dark:hover:text-[#00E5FF] transition-all duration-150 shadow-xs hover:scale-105 active:scale-95 border border-[#061B30] dark:border-[#13355A] dark:hover:border-[#00E5FF]"
          >
            <Github size={18} />
          </a>

          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playNavigate()}
            id="social-linkedin-btn"
            title="LinkedIn Profile"
            className="flex items-center justify-center h-10 rounded-lg bg-[#092A4A] dark:bg-[#081B30] hover:bg-[#123F68] dark:hover:bg-[#0B2542] text-[#F4E9D5] dark:text-[#88A2BF] dark:hover:text-[#00E5FF] transition-all duration-150 shadow-xs hover:scale-105 active:scale-95 border border-[#061B30] dark:border-[#13355A] dark:hover:border-[#00E5FF]"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={PERSONAL_INFO.socials.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playNavigate()}
            id="social-x-btn"
            title="Portfolio Website"
            className="flex items-center justify-center h-10 rounded-lg bg-[#092A4A] dark:bg-[#081B30] hover:bg-[#123F68] dark:hover:bg-[#0B2542] text-[#F4E9D5] dark:text-[#88A2BF] dark:hover:text-[#00E5FF] transition-all duration-150 shadow-xs hover:scale-105 active:scale-95 border border-[#061B30] dark:border-[#13355A] dark:hover:border-[#00E5FF]"
          >
            <Globe size={18} />
          </a>

          <button
            onClick={() => {
              soundManager.playSelect();
              onOpenContact?.();
            }}
            id="social-email-btn"
            title="Send Email / Contact"
            className="flex items-center justify-center h-10 rounded-lg bg-[#092A4A] dark:bg-[#081B30] hover:bg-[#123F68] dark:hover:bg-[#0B2542] text-[#F4E9D5] dark:text-[#88A2BF] dark:hover:text-[#00E5FF] transition-all duration-150 shadow-xs hover:scale-105 active:scale-95 border border-[#061B30] dark:border-[#13355A] dark:hover:border-[#00E5FF] cursor-pointer"
          >
            <Mail size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="text-[#092A4A] dark:text-[#00E5FF] text-xs">❖</span>
          <h3 className="font-display font-bold text-xs tracking-wider uppercase text-[#092A4A] dark:text-[#00E5FF]">
            TECH STACK
          </h3>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.id}
              onClick={() => {
                soundManager.playNavigate();
                setActiveSkillId(activeSkillId === tech.id ? null : tech.id);
              }}
              title={tech.description}
              className={`group flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-lg border transition-all duration-150 cursor-pointer shadow-2xs hover:shadow-xs hover:-translate-y-0.5 text-center ${
                activeSkillId === tech.id
                  ? 'bg-[#EADBC3] dark:bg-[#0B2542] border-[#092A4A] dark:border-[#00E5FF] shadow-inner'
                  : 'bg-[#F4E9D5] dark:bg-[#081B30] hover:bg-[#EADBC3] dark:hover:bg-[#0B2542] border-[#C8B79D] dark:border-[#13355A] dark:hover:border-[#00E5FF]/60'
              }`}
            >
              <div className="w-7 h-7 flex items-center justify-center mb-1">
                <TechIcon name={tech.iconKey} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-mono-tech font-semibold text-[10.5px] sm:text-[11px] text-[#092A4A] dark:text-[#D1E0EE] truncate w-full">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {activeSkill && (
          <div className="mt-3 bg-[#EADBC3]/70 dark:bg-[#081B30] p-3 rounded-lg border border-[#092A4A]/20 dark:border-[#00E5FF]/40 relative animate-in fade-in slide-in-from-top-2 duration-200">
            <button 
              onClick={() => setActiveSkillId(null)}
              className="absolute top-2 right-2 text-[#092A4A]/50 dark:text-[#7C93AE] hover:text-[#092A4A] dark:hover:text-[#00E5FF] cursor-pointer"
            >
              <X size={14} />
            </button>
            <div className="flex items-center gap-2 mb-1.5">
              <TechIcon name={activeSkill.iconKey} className="w-4 h-4" />
              <span className="font-mono-tech font-bold text-xs text-[#092A4A] dark:text-[#00E5FF] uppercase">
                {activeSkill.name} Skills
              </span>
            </div>
            <p className="font-mono-tech text-[11.5px] text-[#10283F] dark:text-[#D1E0EE] leading-relaxed pr-4">
              {activeSkill.description}
            </p>
          </div>
        )}
      </div>

      <div className="flex items-end justify-between pt-2">
        <svg className="w-24 h-11 pixelated text-[#092A4A]/65 dark:text-[#00E5FF]/60" viewBox="0 0 64 24" fill="currentColor">
          <polygon points="12,4 20,16 4,16" opacity="0.4" />
          <polygon points="34,2 48,20 20,20" opacity="0.6" />
          <polygon points="52,6 62,20 42,20" opacity="0.5" />
          <rect x="0" y="20" width="64" height="4" fill="currentColor" opacity="0.8" />
          <rect x="18" y="3" width="3" height="3" fill="currentColor" opacity="0.9" />
          <rect x="33" y="2" width="4" height="3" fill="currentColor" opacity="0.9" />
        </svg>

        <div className="flex items-center gap-1 text-[11px] font-mono-tech text-[#4B6173] dark:text-[#7C93AE]">
          <span className="dark:text-[#00E5FF]">+</span>
          <span className="tracking-wider">Code / Build / Grow →</span>
        </div>
      </div>
    </aside>
  );
};
