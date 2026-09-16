
import React, { useState } from 'react';
import { Globe, MessageCircle, Menu, X, Check } from 'lucide-react';
import type { LanguageCode, TranslationSchema } from '../data/translations';

interface NavbarProps {
  currentLang: LanguageCode;
  onLangChange: (lang: LanguageCode) => void;
  t: TranslationSchema['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLangChange,
  t
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages: { code: LanguageCode; label: string }[] = [
    { code: 'US', label: 'English' },
    { code: 'RU', label: 'Русский' },
    { code: 'IN', label: 'हिन्दी' },
    { code: 'CN', label: '中文' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--header-bg)] backdrop-blur-xl border-b border-[var(--border-color)] py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="OTC UNLIMITED BY TCI"
            className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.03]"
          />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-[var(--text-sub)] hover:text-blue-500 dark:hover:text-white transition-colors font-medium"
          >
            {t.features}
          </a>
          <a
            href="#currencies"
            className="text-sm text-[var(--text-sub)] hover:text-blue-500 dark:hover:text-white transition-colors font-medium"
          >
            {t.currencies}
          </a>
          <a
            href="#contact"
            className="text-sm text-[var(--text-sub)] hover:text-blue-500 dark:hover:text-white transition-colors font-medium"
          >
            {t.contact}
          </a>
        </nav>

        {/* Right: Language Pill, Theme Toggle, Book Button */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Language Selector Dropdown Pill */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--btn-sec-bg)] border border-[var(--btn-sec-border)] text-xs font-semibold text-[var(--text-main)] hover:border-blue-500/40 transition-all cursor-pointer shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>{currentLang}</span>
            </button>

            {langDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangDropdownOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-40 bg-[var(--header-bg)] border border-[var(--border-color)] rounded-2xl shadow-2xl py-1.5 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150 backdrop-blur-2xl">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onLangChange(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        currentLang === l.code
                          ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold'
                          : 'text-[var(--text-sub)] hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[11px] text-[var(--text-muted)]">{l.code}</span>
                        <span>{l.label}</span>
                      </div>
                      {currentLang === l.code && <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Blue Telegram Pill Button */}
          <a
            href="https://t.me/otcunlimited"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>

        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="https://t.me/otcunlimited"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2563eb] text-white text-xs font-bold cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[var(--btn-sec-bg)] border border-[var(--btn-sec-border)] text-[var(--text-main)] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[var(--header-bg)] backdrop-blur-2xl border-b border-[var(--border-color)] px-6 py-4 space-y-4 animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[var(--text-sub)] hover:text-blue-500 py-1"
            >
              {t.features}
            </a>
            <a
              href="#currencies"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[var(--text-sub)] hover:text-blue-500 py-1"
            >
              {t.currencies}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[var(--text-sub)] hover:text-blue-500 py-1"
            >
              {t.contact}
            </a>
          </div>

          <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between">
            <span className="text-xs text-[var(--text-muted)]">Language:</span>
            <div className="flex gap-1.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onLangChange(l.code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                    currentLang === l.code
                      ? 'bg-blue-600 text-white'
                      : 'bg-[var(--btn-sec-bg)] text-[var(--text-sub)] border border-[var(--border-color)]'
                  }`}
                >
                  {l.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
