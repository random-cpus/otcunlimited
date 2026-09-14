
import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import type { TranslationSchema } from '../data/translations';

interface CtaSectionProps {
  t: TranslationSchema['cta'];
}

export const CtaSection: React.FC<CtaSectionProps> = ({ t }) => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl text-center space-y-7 relative overflow-hidden">
          
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-sm text-[var(--text-sub)] max-w-xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <a
              href="https://t.me/otcunlimited"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.btnTelegram}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              {t.footerAnonymity}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-500" />
              {t.footerResponse}
            </span>
            <span>•</span>
            <span>{t.footerVolume}</span>
          </div>

        </div>
      </div>
    </section>
  );
};
