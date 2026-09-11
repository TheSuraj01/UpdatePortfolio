import React, { useState } from 'react';
import { FolderCode, Terminal, Globe, Bot, Cpu, ArrowRight, Github } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { soundManager } from '../utils/soundEffects';

interface MobileProjectsViewProps {
  onSelectProject?: (project: Project) => void;
}

export const MobileProjectsView: React.FC<MobileProjectsViewProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'web' | 'ai_ml' | 'automation'>('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai_ml', label: 'AI/ML' },
    { id: 'automation', label: 'Automation' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal size={18} className="text-[#F4E9D5] dark:text-[#00E5FF]" />;
      case 1:
        return <Globe size={18} className="text-[#F4E9D5] dark:text-[#00E5FF]" />;
      case 2:
        return <Bot size={18} className="text-[#F4E9D5] dark:text-[#00E5FF]" />;
      default:
        return <Cpu size={18} className="text-[#F4E9D5] dark:text-[#00E5FF]" />;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-5 select-none animate-in fade-in duration-200">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#092A4A] dark:bg-[#0A223C] flex items-center justify-center text-[#F4E9D5] dark:text-[#00E5FF] border border-transparent dark:border-[#00E5FF]/40">
            <FolderCode size={16} />
          </div>
          <h2 className="font-display font-bold text-2xl text-[#092A4A] dark:text-[#F0F6FC] tracking-tight">
            PROJECTS
          </h2>
        </div>
        <p className="font-mono-tech text-xs text-[#4B6173] dark:text-[#88A2BF]">
          Building real solutions for real problems.
        </p>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {filters.map((tab) => {
          const isActive = selectedFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                soundManager.playNavigate();
                setSelectedFilter(tab.id as any);
              }}
              className={`px-3.5 py-1.5 rounded-full font-mono-tech text-xs transition-all duration-150 cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#092A4A] dark:bg-[#0A2540] text-[#F4E9D5] dark:text-[#00E5FF] border border-transparent dark:border-[#00E5FF]/80 font-bold shadow-xs'
                  : 'bg-[#EADBC3]/70 dark:bg-[#081B30] text-[#4B6173] dark:text-[#88A2BF] border border-[#C8B79D] dark:border-[#13355A] hover:text-[#092A4A] dark:hover:text-[#00E5FF]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        {filteredProjects.map((proj, idx) => (
          <div
            key={proj.id}
            className="relative bg-[#EADBC3]/40 dark:bg-[#081B30] p-4 sm:p-5 rounded-xl border border-[#C8B79D] dark:border-[#13355A] flex flex-col gap-3 shadow-xs hover:border-[#092A4A]/50 dark:hover:border-[#00E5FF]/60 transition-colors"
          >
            <span className="absolute top-2 left-2 text-[9px] font-mono-tech text-[#092A4A]/30 dark:text-[#00E5FF]/50">❖</span>
            <span className="absolute top-2 right-2 text-[9px] font-mono-tech text-[#092A4A]/30 dark:text-[#00E5FF]/50">❖</span>
            <span className="absolute bottom-2 left-2 text-[9px] font-mono-tech text-[#092A4A]/30 dark:text-[#00E5FF]/50">❖</span>
            <span className="absolute bottom-2 right-2 text-[9px] font-mono-tech text-[#092A4A]/30 dark:text-[#00E5FF]/50">❖</span>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#092A4A] dark:bg-[#0A223C] flex items-center justify-center shrink-0 shadow-xs mt-0.5 border border-transparent dark:border-[#00E5FF]/30">
                {getProjectIcon(idx)}
              </div>

              <div className="flex-1 min-w-0">
                <span className="font-mono-tech text-[10px] text-[#092A4A] dark:text-[#00E5FF] font-bold tracking-wider uppercase block">
                  {proj.code}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#092A4A] dark:text-[#F0F6FC] leading-tight">
                  {proj.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pl-1">
              {proj.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-[#F4E9D5] dark:bg-[#051121] text-[#092A4A] dark:text-[#C5D8EC] border border-[#C8B79D] dark:border-[#13355A]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="font-mono-tech text-xs text-[#4B6173] dark:text-[#88A2BF] leading-relaxed pl-1">
              {proj.description}
            </p>

            <div className="pt-2 border-t border-[#092A4A]/10 dark:border-[#13355A] flex items-center justify-between pl-1">
              <button
                onClick={() => {
                  soundManager.playSelect();
                  onSelectProject?.(proj);
                }}
                className="flex items-center gap-1 font-mono-tech text-xs text-[#092A4A] dark:text-[#00E5FF] font-bold hover:underline cursor-pointer group"
              >
                <span>View Project</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playNavigate()}
                  className="p-1.5 rounded bg-[#092A4A] dark:bg-[#0A223C] text-[#F4E9D5] dark:text-[#00E5FF] hover:opacity-90 transition-opacity border border-transparent dark:border-[#13355A]"
                  title="Source Code"
                >
                  <Github size={13} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
