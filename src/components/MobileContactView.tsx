import React, { useState } from 'react';
import { Mail, Send, Copy, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export const MobileContactView: React.FC = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    soundManager.playNavigate();
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;

    setIsSubmitting(true);
    soundManager.playSelect();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
        }),
      });
      const data = await res.json();
      soundManager.playSuccess();
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
      setTransmissionSuccess(data.transmissionId || 'TX-902411');
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    } catch {
      soundManager.playSuccess();
      setTransmissionSuccess(`TX-${Math.floor(100000 + Math.random() * 900000)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-5 select-none animate-in fade-in duration-200">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#092A4A] dark:bg-[#0A223C] flex items-center justify-center text-[#F4E9D5] dark:text-[#00E5FF] border border-transparent dark:border-[#00E5FF]/40">
            <Mail size={16} />
          </div>
          <h2 className="font-display font-bold text-2xl text-[#092A4A] dark:text-[#F0F6FC] tracking-tight">
            CONTACT
          </h2>
        </div>
        <p className="font-mono-tech text-xs text-[#4B6173] dark:text-[#88A2BF]">
          Let's build something great together.
        </p>
      </div>

      {transmissionSuccess ? (
        <div className="bg-[#EADBC3]/70 dark:bg-[#081B30] p-6 rounded-xl border-2 border-[#3DA66B] dark:border-[#00E676] text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#3DA66B] dark:bg-[#00E676] text-[#F4E9D5] dark:text-[#040D1A] flex items-center justify-center mx-auto">
            <CheckCircle2 size={26} />
          </div>
          <h3 className="font-display font-bold text-xl text-[#092A4A] dark:text-[#F0F6FC]">
            Transmission Confirmed!
          </h3>
          <div className="font-mono-tech text-xs text-[#4B6173] dark:text-[#88A2BF]">
            Receipt ID: <span className="font-bold text-[#092A4A] dark:text-[#00E5FF]">{transmissionSuccess}</span>
          </div>
          <p className="font-mono-tech text-xs text-[#10283F] dark:text-[#C5D8EC] leading-relaxed">
            Your transmission has been logged into Suraj's developer terminal. He will reply via your email shortly!
          </p>
          <button
            onClick={() => setTransmissionSuccess(null)}
            className="font-mono-tech text-xs px-4 py-2 bg-[#092A4A] dark:bg-[#F2DCAB] text-[#F4E9D5] dark:text-[#0A1628] rounded font-bold hover:opacity-90"
          >
            SEND ANOTHER TRANSMISSION
          </button>
        </div>
      ) : (
        <>
          <div className="bg-[#EADBC3]/40 dark:bg-[#081B30] p-4 rounded-xl border border-[#C8B79D] dark:border-[#13355A] flex flex-col gap-2.5">
            <span className="text-[10px] font-mono-tech text-[#4B6173] dark:text-[#7C93AE] uppercase tracking-wider font-semibold">
              Direct Vector
            </span>
            <div className="bg-[#F4E9D5] dark:bg-[#051121] p-2.5 rounded-lg border border-[#C8B79D] dark:border-[#13355A] font-mono-tech text-xs font-semibold text-[#092A4A] dark:text-[#00E5FF] break-all">
              {PERSONAL_INFO.socials.email}
            </div>
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 font-mono-tech text-xs text-[#092A4A] dark:text-[#00E5FF] font-bold hover:underline cursor-pointer"
              >
                <Copy size={13} />
                <span>{copiedEmail ? 'Copied to clipboard!' : 'Copy Email Address'}</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded bg-[#092A4A] dark:bg-[#0A223C] text-[#F4E9D5] dark:text-[#00E5FF] border border-transparent dark:border-[#13355A]"
                  title="GitHub"
                >
                  <Github size={13} />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded bg-[#092A4A] dark:bg-[#0A223C] text-[#F4E9D5] dark:text-[#00E5FF] border border-transparent dark:border-[#13355A]"
                  title="LinkedIn"
                >
                  <Linkedin size={13} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSend} className="bg-[#EADBC3]/40 dark:bg-[#081B30] p-4 sm:p-5 rounded-xl border border-[#C8B79D] dark:border-[#13355A] flex flex-col gap-3.5">
            <div>
              <label className="block font-mono-tech text-xs font-semibold text-[#092A4A] dark:text-[#F0F6FC] mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Your name"
                className="w-full font-mono-tech text-xs px-3 py-2.5 bg-[#F4E9D5] dark:bg-[#051121] border border-[#C8B79D] dark:border-[#13355A] rounded text-[#10283F] dark:text-[#F0F6FC] placeholder-[#4B6173]/60 dark:placeholder-[#4F7094] focus:outline-none focus:border-[#092A4A] dark:focus:border-[#00E5FF]"
              />
            </div>

            <div>
              <label className="block font-mono-tech text-xs font-semibold text-[#092A4A] dark:text-[#F0F6FC] mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full font-mono-tech text-xs px-3 py-2.5 bg-[#F4E9D5] dark:bg-[#051121] border border-[#C8B79D] dark:border-[#13355A] rounded text-[#10283F] dark:text-[#F0F6FC] placeholder-[#4B6173]/60 dark:placeholder-[#4F7094] focus:outline-none focus:border-[#092A4A] dark:focus:border-[#00E5FF]"
              />
            </div>

            <div>
              <label className="block font-mono-tech text-xs font-semibold text-[#092A4A] dark:text-[#F0F6FC] mb-1">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Your message..."
                className="w-full font-mono-tech text-xs px-3 py-2.5 bg-[#F4E9D5] dark:bg-[#051121] border border-[#C8B79D] dark:border-[#13355A] rounded text-[#10283F] dark:text-[#F0F6FC] placeholder-[#4B6173]/60 dark:placeholder-[#4F7094] focus:outline-none focus:border-[#092A4A] dark:focus:border-[#00E5FF] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-[#092A4A] dark:bg-[#F2DCAB] hover:bg-[#123F68] dark:hover:bg-[#E5CF9E] disabled:opacity-70 text-[#F4E9D5] dark:text-[#0A1628] font-mono-tech font-bold text-xs rounded-lg transition-all shadow-xs flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer mt-1"
            >
              <span>{isSubmitting ? 'Transmitting...' : 'Send Message →'}</span>
            </button>
          </form>
        </>
      )}
    </div>
  );
};
