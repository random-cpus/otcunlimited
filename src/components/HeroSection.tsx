
import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Zap, Activity, Clock, Shield } from 'lucide-react';
import { ThreeGlobeHero } from './ThreeGlobeHero';
import type { TranslationSchema } from '../data/translations';

interface HeroSectionProps {
  t: TranslationSchema['hero'];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ t }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
        
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-slate-900/90 border border-blue-500/20 dark:border-cyan-500/30 text-xs font-semibold text-blue-600 dark:text-cyan-300 shadow-sm">
          <Shield className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
          <span>{t.badgeTop}</span>
        </div>

        {/* TCI PRESENTS Sub-headline */}
        <div className="text-xs uppercase tracking-[0.25em] font-extrabold text-[var(--text-muted)]">
          {t.badgePresents}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-main)] tracking-tight leading-[1.1] max-w-5xl mx-auto">
          {t.titleStart} <span className="text-gradient-cyan-purple">{t.titleHighlight}</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[var(--text-sub)] max-w-3xl mx-auto leading-relaxed font-normal">
          {t.description}
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center pt-2">
          <a
            href="https://t.me/otcunlimited"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.ctaTelegram}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* 3D Visual Centerpiece */}
        <div className="pt-2 max-w-2xl mx-auto relative overflow-visible">
          <ThreeGlobeHero />
        </div>

        {/* 4 Core Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-panel rounded-2xl max-w-4xl mx-auto text-left">
          <div className="p-3 border-r border-[var(--border-color)] last:border-none">
            <div className="flex items-center gap-2 text-blue-500 dark:text-cyan-400 mb-1">
              <Activity className="w-4 h-4" />
              <span className="text-[11px] uppercase font-bold text-[var(--text-muted)]">{t.statVolume}</span>
            </div>
            <div className="text-2xl font-bold font-mono text-[var(--text-main)]">$30B+</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">{t.statVolumeDesc}</div>
          </div>

          <div className="p-3 border-r border-[var(--border-color)] last:border-none">
            <div className="flex items-center gap-2 text-purple-500 dark:text-purple-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-[11px] uppercase font-bold text-[var(--text-muted)]">{t.statCurrencies}</span>
            </div>
            <div className="text-2xl font-bold font-mono text-[var(--text-main)]">30+</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">{t.statCurrenciesDesc}</div>
          </div>

          <div className="p-3 border-r border-[var(--border-color)] last:border-none">
            <div className="flex items-center gap-2 text-emerald-500 dark:text-emerald-400 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-[11px] uppercase font-bold text-[var(--text-muted)]">{t.statSpeed}</span>
            </div>
            <div className="text-2xl font-bold font-mono text-[var(--text-main)]">&lt; 3 mins</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">{t.statSpeedDesc}</div>
          </div>

          <div className="p-3">
            <div className="flex items-center gap-2 text-blue-500 dark:text-cyan-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] uppercase font-bold text-[var(--text-muted)]">{t.statSla}</span>
            </div>
            <div className="text-2xl font-bold font-mono text-[var(--text-main)]">24h</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">{t.statSlaDesc}</div>
          </div>
        </div>

      </div>
    </section>
  );
};
