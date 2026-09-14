
import React from 'react';
import { Zap, Eye, ShieldCheck, Headphones, Clock, Lock } from 'lucide-react';
import type { TranslationSchema } from '../data/translations';

interface FeaturesSectionProps {
  t: TranslationSchema['features'];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ t }) => {
  const icons = [Zap, Eye, ShieldCheck, Headphones, Clock, Lock];

  return (
    <section id="features" className="py-20 relative bg-black/2 dark:bg-[#070b16]/70 border-y border-[var(--border-color)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="text-xs uppercase font-extrabold text-blue-600 dark:text-cyan-400 tracking-widest">{t.badge}</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm text-[var(--text-muted)]">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="glass-panel p-7 rounded-2xl hover:border-blue-500/40 transition-all group space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-cyan-500/20 border border-blue-500/20 dark:border-cyan-500/30 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
