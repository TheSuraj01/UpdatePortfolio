import React from 'react';
import { User } from 'lucide-react';
import { PERSONAL_INFO, JOURNEY_METRICS, EXPERIENCES, EDUCATION_INFO } from '../data/portfolioData';

export const MobileAboutView: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-5 select-none animate-in fade-in duration-200">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-[#092A4A] dark:bg-[#0A223C] flex items-center justify-center text-[#F4E9D5] dark:text-[#00E5FF] border border-transparent dark:border-[#00E5FF]/40">
          <User size={16} />
        </div>
        <h2 className="font-display font-bold text-2xl text-[#092A4A] dark:text-[#F0F6FC] tracking-tight">
          ABOUT ME
        </h2>
      </div>

      <div className="bg-[#EADBC3]/40 dark:bg-[#081B30] p-4 rounded-xl border border-[#C8B79D] dark:border-[#13355A] flex items-start gap-4 shadow-xs">
        <div className="w-16 h-16 rounded-lg bg-[#092A4A] dark:bg-[#0A223C] border border-transparent dark:border-[#00E5FF]/40 p-1 flex items-center justify-center shrink-0 shadow-sm">
          <svg className="w-12 h-12 pixelated" viewBox="0 0 16 16" fill="none">
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
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-mono-tech text-xs text-[#4B6173] dark:text-[#88A2BF] leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-[#092A4A] dark:text-[#00E5FF] text-xs">❖</span>
          <h3 className="font-display font-bold text-xs tracking-wider uppercase text-[#092A4A] dark:text-[#00E5FF]">
            MY JOURNEY
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {JOURNEY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#EADBC3]/40 dark:bg-[#081B30] p-3.5 rounded-xl border border-[#C8B79D] dark:border-[#13355A] flex flex-col items-center justify-center text-center shadow-xs"
            >
              <span className="font-display font-bold text-xl sm:text-2xl text-[#092A4A] dark:text-[#F0F6FC] leading-tight mb-1">
                {metric.value}
              </span>
              <div className="font-mono-tech text-[10.5px] text-[#4B6173] dark:text-[#88A2BF]">
                {metric.label} {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-[#092A4A] dark:text-[#00E5FF] text-xs">❖</span>
          <h3 className="font-display font-bold text-xs tracking-wider uppercase text-[#092A4A] dark:text-[#00E5FF]">
            CORE ENGINEERING PILLARS
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          <div className="bg-[#EADBC3]/40 dark:bg-[#081B30] p-3.5 rounded-xl border border-[#C8B79D] dark:border-[#13355A]">
            <div className="font-display font-bold text-sm text-[#092A4A] dark:text-[#F0F6FC] mb-1 flex items-center gap-2">
              <span className="text-[#D7A93D]">01 //</span> Scalability First
            </div>
            <p className="font-mono-tech text-xs text-[#4B6173] dark:text-[#88A2BF] leading-relaxed">
              Architecting resilient services with microservices, Redis caching layers, and asynchronous task queues.
            </p>
          </div>

          <div className="bg-[#EADBC3]/40 dark:bg-[#081B30] p-3.5 rounded-xl border border-[#C8B79D] dark:border-[#13355A]">
            <div className="font-display font-bold text-sm text-[#092A4A] dark:text-[#F0F6FC] mb-1 flex items-center gap-2">
              <span className="text-[#3DA66B] dark:text-[#00E676]">02 //</span> Tactile Interfaces
            </div>
            <p className="font-mono-tech text-xs text-[#4B6173] dark:text-[#88A2BF] leading-relaxed">
              Crafting memorable frontends that bridge interactive physical aesthetics with modern responsive web standards.
            </p>
          </div>

          <div className="bg-[#EADBC3]/40 dark:bg-[#081B30] p-3.5 rounded-xl border border-[#C8B79D] dark:border-[#13355A]">
            <div className="font-display font-bold text-sm text-[#092A4A] dark:text-[#F0F6FC] mb-1 flex items-center gap-2">
              <span className="text-[#092A4A] dark:text-[#00E5FF]">03 //</span> Autonomous AI
            </div>
            <p className="font-mono-tech text-xs text-[#4B6173] dark:text-[#88A2BF] leading-relaxed">
              Integrating cyclical agent graphs, vector search retrieval, and LLM orchestration to automate complex workflows.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#EADBC3]/40 dark:bg-[#081B30] p-4 rounded-xl border border-[#C8B79D] dark:border-[#13355A] flex flex-col gap-3">
        <h3 className="font-display font-bold text-base text-[#092A4A] dark:text-[#F0F6FC]">
          Experience & Internships
        </h3>
        <div className="flex flex-col gap-3 font-mono-tech text-xs">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="flex flex-col gap-1 border-b border-[#092A4A]/10 dark:border-[#13355A] pb-3 last:border-b-0 last:pb-0">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-[#092A4A] dark:text-[#F0F6FC]">
                  {exp.role}
                </span>
                <span className="text-[10px] text-[#092A4A] dark:text-[#00E5FF] bg-[#F4E9D5] dark:bg-[#051121] px-2 py-0.5 rounded border border-[#C8B79D] dark:border-[#13355A]">
                  {exp.period}
                </span>
              </div>
              <span className="text-[#123F68] dark:text-[#38BDF8] text-[11px] font-medium">
                {exp.company}
              </span>
              <p className="text-[#4B6173] dark:text-[#88A2BF] leading-relaxed mt-0.5">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#EADBC3]/40 dark:bg-[#081B30] p-4 rounded-xl border border-[#C8B79D] dark:border-[#13355A] flex flex-col gap-2">
        <h3 className="font-display font-bold text-base text-[#092A4A] dark:text-[#F0F6FC]">
          Education & Certifications
        </h3>
        <div className="font-mono-tech text-xs text-[#092A4A] dark:text-[#00E5FF] font-semibold">
          {EDUCATION_INFO.institution}
        </div>
        <div className="font-mono-tech text-[11px] text-[#4B6173] dark:text-[#88A2BF]">
          {EDUCATION_INFO.degree}
        </div>
        <ul className="mt-2 space-y-1.5 font-mono-tech text-[11px]">
          {EDUCATION_INFO.certifications.map((cert, idx) => (
            <li key={idx} className="flex items-start gap-1.5 text-[#10283F] dark:text-[#C5D8EC]">
              <span className="text-[#3DA66B] dark:text-[#00E676] font-bold">✓</span>
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
