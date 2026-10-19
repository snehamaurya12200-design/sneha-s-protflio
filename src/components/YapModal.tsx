import React, { useState } from 'react';
import { X, CheckCircle, Briefcase, Coffee, Sparkles, Send } from 'lucide-react';

interface YapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const YapModal: React.FC<YapModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState<'internship' | 'critique' | 'coffee'>('internship');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-[fadeIn_0.2s_ease-out]">
      <div
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl border-2 border-[#E8DCC9] paper-note-shadow p-6 sm:p-8 text-[#252321] paper-sketchbook"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Washi Tape */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F6E7A8] washi-torn-h text-[10px] font-mono font-bold text-[#702632] shadow-xs select-none">
          SCRAPBOOK ENTRY // CHAT
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FFF9EF] border border-[#E8DCC9] flex items-center justify-center text-[#625A53] hover:text-[#B52D3A] hover:border-[#B52D3A] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {sent ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#F6E7A8] border-2 border-[#E4C868] text-[#B52D3A] flex items-center justify-center mb-4 shadow-sm">
              <CheckCircle className="w-8 h-8 text-[#B52D3A]" />
            </div>
            <h3 className="font-lobster text-3xl font-bold text-[#252321] mb-2">Message Dispatched!</h3>
            <p className="text-[#625A53] text-sm max-w-xs font-mono">
              I&apos;ll get back to you before my next Figma auto-layout re-alignment batch.
            </p>
          </div>
        ) : (
          <>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-[#F6E7A8] text-[#702632] border border-[#E4C868] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B52D3A]" />
              <span>THE PERSONAL WORLD</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-lobster font-bold tracking-normal text-[#B52D3A] mb-2">
              THE LORE DROP 🎀
            </h3>

            {/* Authentic personality & workflow note */}
            <div className="p-4 rounded-2xl bg-[#FFF9EF] border border-[#E8DCC9] mb-5 text-xs sm:text-sm text-[#252321] leading-relaxed shadow-inner">
              <p className="font-sans italic mb-2 text-[#625A53]">
                &ldquo;Master of Computer Applications student at Sandip Institute of Engineering and Management. Obsessed with micro-interactions, tactile aesthetics, and bridging generative AI pipelines with Figma design systems. Less yapping, more shipping — receipts always included.&rdquo;
              </p>
              <div className="font-mono text-[11px] text-[#702632] font-semibold flex items-center justify-between pt-2 border-t border-[#E8DCC9]">
                <span>Sneha Maurya · Nashik, India</span>
                <span className="text-[#B52D3A] font-bold">2027 Grad · Open for Internships</span>
              </div>
            </div>

            <p className="font-sans text-[#625A53] text-xs sm:text-sm mb-4 leading-relaxed font-normal">
              Have an open design role or internship? Want to critique a prototype? Drop a quick note below:
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Topic Picker */}
              <div>
                <label className="block font-mono text-xs font-bold text-[#702632] uppercase mb-1.5">
                  What&apos;s the vibe?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTopic('internship')}
                    className={`p-2.5 rounded-xl border text-left font-mono text-xs font-bold flex flex-col gap-1 transition-all cursor-pointer ${
                      topic === 'internship'
                        ? 'bg-[#F6E7A8] text-[#702632] border-[#B52D3A] shadow-xs'
                        : 'bg-white text-[#625A53] border-[#E8DCC9] hover:bg-[#F6E7A8]/40'
                    }`}
                  >
                    <Briefcase className="w-4 h-4 text-[#B52D3A]" />
                    <span>Role / Intern</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTopic('critique')}
                    className={`p-2.5 rounded-xl border text-left font-mono text-xs font-bold flex flex-col gap-1 transition-all cursor-pointer ${
                      topic === 'critique'
                        ? 'bg-[#F6E7A8] text-[#702632] border-[#B52D3A] shadow-xs'
                        : 'bg-white text-[#625A53] border-[#E8DCC9] hover:bg-[#F6E7A8]/40'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-[#B52D3A]" />
                    <span>Design Critique</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTopic('coffee')}
                    className={`p-2.5 rounded-xl border text-left font-mono text-xs font-bold flex flex-col gap-1 transition-all cursor-pointer ${
                      topic === 'coffee'
                        ? 'bg-[#F6E7A8] text-[#702632] border-[#B52D3A] shadow-xs'
                        : 'bg-white text-[#625A53] border-[#E8DCC9] hover:bg-[#F6E7A8]/40'
                    }`}
                  >
                    <Coffee className="w-4 h-4 text-[#B52D3A]" />
                    <span>Chai / Coffee</span>
                  </button>
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[11px] text-[#625A53] font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jordan (Design Lead)"
                    className="w-full px-3 py-2 text-xs font-sans rounded-xl bg-white border border-[#E8DCC9] text-[#252321] placeholder-[#625A53]/50 focus:outline-none focus:border-[#B52D3A]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-[#625A53] font-semibold mb-1">
                    Email / Handle
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan@company.design"
                    className="w-full px-3 py-2 text-xs font-sans rounded-xl bg-white border border-[#E8DCC9] text-[#252321] placeholder-[#625A53]/50 focus:outline-none focus:border-[#B52D3A]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-[11px] text-[#625A53] font-semibold mb-1">
                  Message / Opportunity
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hey Sneha, loved your receipts project and..."
                  className="w-full px-3 py-2 text-xs font-sans rounded-xl bg-white border border-[#E8DCC9] text-[#252321] placeholder-[#625A53]/50 focus:outline-none focus:border-[#B52D3A] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-xl cherry-btn text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>DISPATCH MESSAGE ↗</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
