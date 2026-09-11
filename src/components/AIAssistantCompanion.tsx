import React, { useState, useEffect, useRef } from 'react';
import { Send, Minimize2, Maximize2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { soundManager } from '../utils/soundEffects';

export const AIAssistantCompanion: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [blinkState, setBlinkState] = useState(false);
  const [mouthMood, setMouthMood] = useState<'happy' | 'talking' | 'idle'>('idle');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-0',
      sender: 'bot',
      text: "Hi! I'm Suraj's AI assistant. Ask me about his work, projects, skills, experience or availability.",
      timestamp: 'NOW',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isMinimized]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkState(true);
      setTimeout(() => setBlinkState(false), 220);
    }, 3600);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text || isLoading) return;

    soundManager.playSelect();
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsLoading(true);
    setMouthMood('talking');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      soundManager.playNavigate();

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.reply || "I'm ready to answer any questions about Suraj's engineering projects!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const fallbackMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: "Suraj is a software engineer passionate about building modern web applications, solving real-world problems and continuously learning new technologies.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
      setMouthMood('happy');
      setTimeout(() => setMouthMood('idle'), 2500);
    }
  };

  return (
    <div 
      className="hidden lg:flex fixed bottom-4 right-4 z-40 select-none flex-col items-end"
      id="companion-ai-container"
    >
      <div className="flex items-end justify-end mb-[-6px] z-20 mr-3">
        <div className="flex flex-col items-center">
          <div className="w-1 h-3.5 bg-[#8E795E] dark:bg-[#00E5FF]/60 rounded-t-full relative flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3DA66B] dark:bg-[#00E5FF] -top-2 absolute shadow-xs animate-pulse" />
          </div>

          <div className="w-14 h-11 bg-[#D6C2A5] dark:bg-[#0A2038] rounded-lg border-2 border-[#BCA689] dark:border-[#13355A] shadow-sm flex items-center justify-center p-1 relative">
            <div className="w-full h-full bg-[#071829] dark:bg-[#040D1A] rounded-sm border border-[#16385B] dark:border-[#13355A] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />

              <div className="flex items-center gap-2 z-10">
                {blinkState ? (
                  <>
                    <div className="w-2.5 h-0.5 bg-[#5FD182] dark:bg-[#00E5FF]" />
                    <div className="w-2.5 h-0.5 bg-[#5FD182] dark:bg-[#00E5FF]" />
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 bg-[#5FD182] dark:bg-[#00E5FF] rounded-xs shadow-[0_0_3px_#00E5FF] flex items-center justify-center">
                      <div className="w-0.5 h-0.5 bg-[#071829] dark:bg-[#040D1A]" />
                    </div>
                    <div className="w-2 h-2 bg-[#5FD182] dark:bg-[#00E5FF] rounded-xs shadow-[0_0_3px_#00E5FF] flex items-center justify-center">
                      <div className="w-0.5 h-0.5 bg-[#071829] dark:bg-[#040D1A]" />
                    </div>
                  </>
                )}
              </div>

              <div className="mt-0.5 z-10">
                {mouthMood === 'talking' ? (
                  <div className="w-2.5 h-0.5 bg-[#5FD182] dark:bg-[#00E5FF] rounded-full animate-pulse" />
                ) : mouthMood === 'happy' ? (
                  <div className="w-3 h-0.5 border-b-2 border-[#5FD182] dark:border-[#00E5FF] rounded-b-full" />
                ) : (
                  <div className="w-2 h-0.5 bg-[#5FD182]/80 dark:bg-[#00E5FF]/80" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={`w-[320px] sm:w-[355px] bg-[#D6C2A5] dark:bg-[#081B30] rounded-2xl border-3 border-[#C8B69A] dark:border-[#13355A] shadow-[0_16px_32px_rgba(20,30,40,0.22)] dark:shadow-[0_16px_32px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-all duration-200 p-2 sm:p-2.5 ${
          isMinimized ? 'h-14' : 'h-[240px] sm:h-[260px]'
        }`}
      >
        <div className="w-full h-full bg-[#071829] dark:bg-[#040D1A] rounded-xl border border-[#16385B] dark:border-[#13355A] flex flex-col overflow-hidden p-2.5 relative shadow-inner">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#16385B]/60 dark:border-[#13355A] mb-2">
            <div className="flex items-center gap-1.5 font-mono-tech text-[11px] font-bold">
              <span className="text-[#F4E9D5] dark:text-[#F0F6FC] tracking-wider">AI ASSISTANT</span>
              <span className="text-[#4B6173] dark:text-[#527092]">•</span>
              <div className="flex items-center gap-1 text-[#5FD182] dark:text-[#00E5FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5FD182] dark:bg-[#00E5FF] animate-pulse" />
                <span className="tracking-wide text-[10px]">ONLINE</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#4B6173] dark:text-[#88A2BF]">
              <button
                onClick={() => setIsMinimized((prev) => !prev)}
                className="hover:text-[#F4E9D5] dark:hover:text-[#00E5FF] transition-colors p-0.5 cursor-pointer"
                title={isMinimized ? "Expand" : "Minimize"}
              >
                {isMinimized ? <Maximize2 size={12} /> : <Minimize2 size={12} />}
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto pr-1 space-y-2 text-xs font-mono-tech">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[92%] px-2.5 py-1.5 rounded-lg leading-relaxed text-[11px] sm:text-xs ${
                        m.sender === 'user'
                          ? 'bg-[#123F68] dark:bg-[#0A2540] text-[#F4E9D5] dark:text-[#F0F6FC] rounded-br-none border border-[#10283F] dark:border-[#00E5FF]/40'
                          : 'bg-[#0B253D] dark:bg-[#081B30] text-[#EADBC3] dark:text-[#88A2BF] rounded-bl-none border border-[#16385B] dark:border-[#13355A]'
                      }`}
                    >
                      <p className="whitespace-pre-line">{m.text}</p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-1.5 text-[11px] font-mono-tech text-[#5FD182] dark:text-[#00E5FF] bg-[#0B253D] dark:bg-[#081B30] p-1.5 rounded border border-[#16385B] dark:border-[#13355A] w-fit">
                    <span className="w-1 h-1 rounded-full bg-[#5FD182] dark:bg-[#00E5FF] animate-bounce" />
                    <span className="w-1 h-1 rounded-full bg-[#5FD182] dark:bg-[#00E5FF] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 h-1 rounded-full bg-[#5FD182] dark:bg-[#00E5FF] animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[10px] ml-1">Thinking...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-1.5 pt-2 border-t border-[#16385B]/50 dark:border-[#13355A]"
              >
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 bg-[#051321] dark:bg-[#040D1A] text-[#F4E9D5] dark:text-[#F0F6FC] font-mono-tech text-[11px] px-2.5 py-1.5 rounded-md border border-[#16385B] dark:border-[#13355A] placeholder-[#4B6173] dark:placeholder-[#527092] focus:outline-none focus:border-[#5FD182] dark:focus:border-[#00E5FF]"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isLoading}
                  className="w-7 h-7 rounded-md bg-[#123F68] dark:bg-[#0A2540] hover:bg-[#5FD182] dark:hover:bg-[#00E5FF] text-[#F4E9D5] dark:text-[#00E5FF] hover:text-[#071829] dark:hover:text-[#040D1A] dark:border dark:border-[#13355A] disabled:opacity-40 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                >
                  <Send size={12} />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
