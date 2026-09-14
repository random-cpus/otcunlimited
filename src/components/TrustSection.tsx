
import React from 'react';
import { ShieldCheck, Building2, Zap, ArrowUpRight } from 'lucide-react';
import type { TranslationSchema } from '../data/translations';

interface TrustSectionProps {
  t: TranslationSchema['trust'];
}

export const TrustSection: React.FC<TrustSectionProps> = ({ t }) => {
  return (
    <section className="py-20 relative bg-black/2 dark:bg-[#060a14] border-y border-[var(--border-color)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-300 text-xs font-semibold border border-blue-500/20 dark:border-cyan-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              {t.title}
            </h2>
            
            <p className="text-sm sm:text-base text-[var(--text-sub)] leading-relaxed">
              {t.subtitle}
            </p>

            <div className="pt-2 space-y-4">
              {t.points.map((p, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 dark:bg-cyan-500/20 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-main)]">{p.title}</h4>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="glass-panel p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-main)]">{t.cardPspTitle}</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {t.cardPspDesc}
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-cyan-500/20 text-blue-600 dark:text-cyan-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-main)]">{t.cardGamingTitle}</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {t.cardGamingDesc}
              </p>
            </div>

            <div className="sm:col-span-2 glass-panel p-6 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-[var(--text-muted)]">{t.slaLabel}</div>
                <div className="text-base font-bold text-[var(--text-main)] mt-0.5">{t.slaValue}</div>
              </div>
              <a
                href="https://t.me/otcunlimited"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>{t.connectBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
