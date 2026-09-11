import React from 'react';
import { BookOpen, Send } from 'lucide-react';
import { Article } from '../types';
import { ARTICLES } from '../data/portfolioData';
import { soundManager } from '../utils/soundEffects';

interface MobileBlogViewProps {
  onSelectArticle: (article: Article) => void;
  assistantInput: string;
  onAssistantInputChange: (val: string) => void;
  onSendAssistantMessage: (msg: string) => void;
  isAssistantLoading: boolean;
}

export const MobileBlogView: React.FC<MobileBlogViewProps> = ({
  onSelectArticle,
  assistantInput,
  onAssistantInputChange,
  onSendAssistantMessage,
  isAssistantLoading,
}) => {
  const getThumbnailGraphic = (index: number) => {
    switch (index % 4) {
      case 0:
        return (
          <svg className="w-10 h-10 text-[#5FD182] dark:text-[#00E5FF]" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="30" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
            <line x1="18" y1="16" x2="12" y2="24" stroke="currentColor" strokeWidth="1.5" />
            <line x1="22" y1="16" x2="28" y2="24" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case 1:
        return (
          <svg className="w-10 h-10 text-[#6EB5F7] dark:text-[#38BDF8]" viewBox="0 0 40 40" fill="none">
            <rect x="6" y="8" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="11" r="1" fill="currentColor" />
            <circle cx="14" cy="11" r="1" fill="currentColor" />
            <circle cx="18" cy="11" r="1" fill="currentColor" />
            <path d="M12 21L16 23L12 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 2:
        return (
          <svg className="w-10 h-10 text-[#D7A93D]" viewBox="0 0 40 40" fill="none">
            <rect x="8" y="8" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="22" y="8" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="15" y="24" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <line x1="13" y1="16" x2="17" y2="24" stroke="currentColor" strokeWidth="1.5" />
            <line x1="27" y1="16" x2="23" y2="24" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case 3:
      default:
        return (
          <svg className="w-10 h-10 text-[#E0E6ED] dark:text-[#00E5FF]" viewBox="0 0 40 40" fill="none">
            <path d="M20 6L32 14V26L20 34L8 26V14L20 6Z" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="4" fill="currentColor" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-5 select-none animate-in fade-in duration-200">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#092A4A] dark:bg-[#0A223C] flex items-center justify-center text-[#F4E9D5] dark:text-[#00E5FF] border border-transparent dark:border-[#00E5FF]/40">
            <BookOpen size={16} />
          </div>
          <h2 className="font-display font-bold text-2xl text-[#092A4A] dark:text-[#F0F6FC] tracking-tight">
            BLOG / ARTICLES
          </h2>
        </div>
        <p className="font-mono-tech text-xs text-[#4B6173] dark:text-[#88A2BF]">
          Thoughts, learnings and technical deep-dives.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {ARTICLES.map((art, idx) => (
          <div
            key={art.id}
            onClick={() => {
              soundManager.playSelect();
              onSelectArticle(art);
            }}
            className="group relative bg-[#EADBC3]/40 dark:bg-[#081B30] p-3.5 sm:p-4 rounded-xl border border-[#C8B79D] dark:border-[#13355A] hover:border-[#092A4A]/50 dark:hover:border-[#00E5FF]/60 transition-all cursor-pointer flex items-center gap-3.5 shadow-xs"
          >
            <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-lg bg-[#071829] dark:bg-[#051121] border border-[#16385B] dark:border-[#163B66] shrink-0 flex items-center justify-center relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
              {getThumbnailGraphic(idx)}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-sm sm:text-base text-[#092A4A] dark:text-[#F0F6FC] group-hover:text-[#123F68] dark:group-hover:text-[#00E5FF] transition-colors leading-snug mb-1">
                {art.title}
              </h3>

              <div className="font-mono-tech text-[10.5px] text-[#4B6173] dark:text-[#88A2BF] mb-2 flex items-center gap-1.5">
                <span>{art.date}</span>
                <span>•</span>
                <span className="text-[#092A4A] dark:text-[#00E5FF] font-semibold">{art.category}</span>
              </div>

              {art.tags && art.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {art.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono-tech text-[9.5px] px-2 py-0.5 rounded bg-[#F4E9D5] dark:bg-[#051121] text-[#092A4A] dark:text-[#C5D8EC] border border-[#C8B79D] dark:border-[#13355A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-2 pt-5">
        <div className="absolute top-0 right-4 z-20">
          <div className="flex flex-col items-center">
            <div className="w-1 h-3 bg-[#8E795E] dark:bg-[#163B66] rounded-t-full relative flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#3DA66B] dark:bg-[#00E5FF] -top-1.5 absolute shadow-xs animate-pulse" />
            </div>
            <div className="w-12 h-9 bg-[#D6C2A5] dark:bg-[#0A223C] rounded-lg border-2 border-[#BCA689] dark:border-[#163B66] shadow-sm flex items-center justify-center p-0.5">
              <div className="w-full h-full bg-[#071829] dark:bg-[#051121] rounded-xs border border-[#16385B] dark:border-[#13355A] flex flex-col items-center justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#5FD182] dark:bg-[#00E5FF] rounded-xs shadow-[0_0_2px_#00E5FF]" />
                  <div className="w-1.5 h-1.5 bg-[#5FD182] dark:bg-[#00E5FF] rounded-xs shadow-[0_0_2px_#00E5FF]" />
                </div>
                <div className="w-2 h-0.5 bg-[#5FD182]/80 dark:bg-[#00E5FF]/80 mt-0.5" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#D6C2A5] dark:bg-[#081B30] rounded-2xl border-3 border-[#C8B69A] dark:border-[#163B66] p-2 sm:p-2.5 shadow-md">
          <div className="w-full bg-[#071829] dark:bg-[#051121] rounded-xl border border-[#16385B] dark:border-[#13355A] p-3 flex flex-col gap-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#16385B]/60 dark:border-[#13355A]">
              <div className="flex items-center gap-1.5 font-mono-tech text-[11px] font-bold">
                <span className="text-[#F4E9D5] dark:text-[#F0F6FC] tracking-wider">AI ASSISTANT</span>
                <span className="text-[#4B6173] dark:text-[#7C93AE]">•</span>
                <div className="flex items-center gap-1 text-[#5FD182] dark:text-[#00E676]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5FD182] dark:bg-[#00E676] animate-pulse" />
                  <span className="tracking-wide text-[10px]">ONLINE</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0B253D] dark:bg-[#0A223C] text-[#EADBC3] dark:text-[#C5D8EC] p-2.5 rounded-lg border border-[#16385B] dark:border-[#13355A] font-mono-tech text-[11.5px] leading-relaxed">
              Hi! I'm Suraj's AI assistant. Ask me about his work, projects, skills, experience or availability.
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (assistantInput.trim()) {
                  onSendAssistantMessage(assistantInput);
                }
              }}
              className="flex items-center gap-1.5 pt-1"
            >
              <input
                type="text"
                value={assistantInput}
                onChange={(e) => onAssistantInputChange(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-[#051321] dark:bg-[#040D1A] text-[#F4E9D5] dark:text-[#F0F6FC] font-mono-tech text-xs px-3 py-2 rounded-md border border-[#16385B] dark:border-[#13355A] placeholder-[#4B6173] dark:placeholder-[#4F7094] focus:outline-none focus:border-[#5FD182] dark:focus:border-[#00E5FF]"
              />
              <button
                type="submit"
                disabled={!assistantInput.trim() || isAssistantLoading}
                className="w-8 h-8 rounded-md bg-[#123F68] dark:bg-[#00E5FF] hover:bg-[#5FD182] text-[#F4E9D5] dark:text-[#040D1A] hover:text-[#071829] disabled:opacity-40 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              >
                <Send size={13} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
