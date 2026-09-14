
import React from 'react';
import { MessageCircle } from 'lucide-react';
import type { TranslationSchema } from '../data/translations';

interface FooterProps {
  t: TranslationSchema['footer'];
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-[#03050a] border-t border-white/5 py-10 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="OTC UNLIMITED BY TCI"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain opacity-95 group-hover:opacity-100 transition-all duration-200 group-hover:scale-[1.03]"
            />
          </a>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://t.me/otcunlimited"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>@otcunlimited</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/5 text-[11px]">
          <div>
            {t.tagline}
          </div>
          <div>
            {t.corridors}
          </div>
        </div>

        <div className="text-center text-[10px] text-slate-600 pt-2">
          © {new Date().getFullYear()} OTC Unlimited by TCI. {t.rights}
        </div>

      </div>
    </footer>
  );
};
