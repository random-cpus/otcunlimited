
import React from 'react';
import { SUPPORTED_CURRENCIES } from '../data/currencies';
import { Globe, ArrowRight } from 'lucide-react';
import type { TranslationSchema } from '../data/translations';

interface CurrenciesSectionProps {
  t: TranslationSchema['currencies'];
  onOpenBooking: () => void;
}

export const CurrenciesSection: React.FC<CurrenciesSectionProps> = ({ t, onOpenBooking }) => {
  return (
    <section id="currencies" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 text-xs font-semibold border border-purple-500/20">
            <Globe className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm text-[var(--text-muted)]">
            {t.subtitle}
          </p>
        </div>

        {/* Grid of supported currencies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {SUPPORTED_CURRENCIES.map((curr) => (
            <div
              key={curr.code}
              className="glass-panel p-4 rounded-xl hover:border-blue-500/40 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{curr.flag}</span>
                <div>
                  <div className="font-bold text-[var(--text-main)] text-sm">{curr.code}</div>
                  <div className="text-xs text-[var(--text-muted)]">{curr.name}</div>
                </div>
              </div>
              <span className="text-[10px] px-2 py-1 rounded bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-300 border border-blue-500/20 dark:border-cyan-500/20 font-medium">
                {curr.rail}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4 pt-4">
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            {t.moreText}
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline underline-offset-4 cursor-pointer"
          >
            <span>{t.customRailCta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
