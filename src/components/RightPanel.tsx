import React from 'react';
import { Briefcase, Code, Layers, Brain, Sparkles, ChevronRight, ShieldCheck, Cloud, Terminal } from 'lucide-react';
import { JOURNEY_METRICS, SPECIALTIES, CURRENTLY_BUILDING, RECENT_HIGHLIGHTS } from '../data/portfolioData';

interface RightPanelProps {
  onOpenProject?: (projectId: string) => void;
  onExploreSpecialty?: (specialty: string) => void;
}

export const RightPanel: React.FC<RightPanelProps> = () => {
  const getMetricIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase size={16} className="text-[#092A4A] dark:text-[#00E5FF]" />;
      case 'CodeXml':
        return <Code size={16} className="text-[#092A4A] dark:text-[#00E5FF]" />;
      case 'Layers':
        return <Layers size={16} className="text-[#092A4A] dark:text-[#00E5FF]" />;
      case 'Brain':
        return <Brain size={16} className="text-[#092A4A] dark:text-[#00E5FF]" />;
      default:
        return <Sparkles size={16} className="text-[#092A4A] dark:text-[#00E5FF]" />;
    }
  };

  const getHighlightIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal size={14} className="text-[#092A4A] dark:text-[#00E5FF] shrink-0 mt-0.5" />;
      case 1:
        return <Sparkles size={14} className="text-[#D7A93D] shrink-0 mt-0.5" />;
      case 2:
        return <Cloud size={14} className="text-[#123F68] dark:text-[#38BDF8] shrink-0 mt-0.5" />;
      case 3:
      default:
        return <ShieldCheck size={14} className="text-[#3DA66B] dark:text-[#00E676] shrink-0 mt-0.5" />;
    }
  };

  return (
    <aside className="w-full lg:w-[350px] xl:w-[380px] flex flex-col gap-4 sm:gap-5 select-none" id="right-panel">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="text-[#092A4A] dark:text-[#00E5FF] text-xs">❖</span>
          <h3 className="font-display font-bold text-xs tracking-wider uppercase text-[#092A4A] dark:text-[#00E5FF]">
            MY JOURNEY
          </h3>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {JOURNEY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#F4E9D5] dark:bg-[#081B30] p-2 sm:p-2.5 rounded-lg border border-[#C8B79D] dark:border-[#13355A] shadow-2xs flex flex-col items-center justify-between text-center hover:border-[#092A4A]/50 dark:hover:border-[#00E5FF]/60 transition-colors"
            >
              <div className="w-6 h-6 rounded bg-[#EADBC3]/70 dark:bg-[#0A223C] flex items-center justify-center mb-1">
                {getMetricIcon(metric.iconName)}
              </div>
              <span className="font-display font-bold text-lg sm:text-xl text-[#092A4A] dark:text-[#F0F6FC] leading-tight mb-1">
                {metric.value}
              </span>
              <div className="font-mono-tech text-[9px] sm:text-[9.5px] text-[#4B6173] dark:text-[#7C93AE] leading-tight line-clamp-2">
                {metric.label} {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="text-[#092A4A] dark:text-[#00E5FF] text-xs">⚙</span>
          <h3 className="font-display font-bold text-xs tracking-wider uppercase text-[#092A4A] dark:text-[#00E5FF]">
            SPECIALTIES
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {SPECIALTIES.map((item, idx) => (
            <span
              key={idx}
              className="font-mono-tech text-[10.5px] px-2.5 py-1 bg-[#F4E9D5] dark:bg-[#081B30] hover:bg-[#092A4A] text-[#10283F] dark:text-[#88A2BF] hover:text-[#F4E9D5] dark:hover:text-[#00E5FF] rounded-lg border border-[#C8B79D] dark:border-[#13355A] dark:hover:border-[#00E5FF]/60 transition-colors duration-150 shadow-2xs whitespace-nowrap cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div 
        id="currently-building-card"
        className="group bg-[#F4E9D5] dark:bg-[#081B30] hover:bg-[#EADBC3] dark:hover:bg-[#0B2542] p-3 sm:p-3.5 rounded-xl border border-[#C8B79D] dark:border-[#13355A] hover:border-[#092A4A]/50 dark:hover:border-[#00E5FF]/60 shadow-xs flex items-center gap-3 cursor-default transition-all duration-150"
      >
        <div className="w-10 h-10 rounded-lg bg-[#092A4A] dark:bg-[#0A223C] text-[#F4E9D5] dark:text-[#00E5FF] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform border border-transparent dark:border-[#00E5FF]/30">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1 mb-1">
            <span className="text-[9.5px] font-mono-tech text-[#4B6173] dark:text-[#7C93AE] tracking-wider uppercase font-semibold">
              &lt; CURRENTLY BUILDING
            </span>
            <div className="flex items-center gap-1 bg-[#3DA66B]/15 dark:bg-[#064E3B]/40 text-[#257336] dark:text-[#34D399] px-2 py-0.5 rounded-full border border-[#3DA66B]/30 dark:border-[#059669]/50 text-[9.5px] font-mono-tech font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3DA66B] dark:bg-[#00E676] animate-pulse" />
              <span>In Progress</span>
            </div>
          </div>

          <h4 className="font-display font-bold text-sm text-[#092A4A] dark:text-[#F0F6FC] group-hover:text-[#123F68] dark:group-hover:text-[#00E5FF] transition-colors truncate">
            {CURRENTLY_BUILDING.title}
          </h4>

          <p className="font-mono-tech text-[11px] text-[#4B6173] dark:text-[#88A2BF] leading-tight line-clamp-1">
            {CURRENTLY_BUILDING.subtitle}
          </p>
        </div>

        <ChevronRight size={16} className="text-[#092A4A]/50 dark:text-[#00E5FF]/60 group-hover:text-[#092A4A] dark:group-hover:text-[#00E5FF] group-hover:translate-x-0.5 transition-all shrink-0" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="text-[#092A4A] dark:text-[#00E5FF] text-xs">❖</span>
          <h3 className="font-display font-bold text-xs tracking-wider uppercase text-[#092A4A] dark:text-[#00E5FF]">
            RECENT HIGHLIGHTS
          </h3>
        </div>

        <ul className="flex flex-col gap-2">
          {RECENT_HIGHLIGHTS.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs font-mono-tech text-[#10283F] dark:text-[#88A2BF] leading-snug">
              {getHighlightIcon(idx)}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
