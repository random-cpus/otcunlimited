
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CurrenciesSection } from './components/CurrenciesSection';
import { TrustSection } from './components/TrustSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { TRANSLATIONS } from './data/translations';
import type { LanguageCode } from './data/translations';

export function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('US');

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.US;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] font-sans">
      {/* Header with Language Dropdown & Telegram Action */}
      <Navbar
        currentLang={currentLang}
        onLangChange={setCurrentLang}
        t={t.nav}
      />
      
      {/* Hero Section */}
      <HeroSection t={t.hero} />
      
      {/* Features Section */}
      <FeaturesSection t={t.features} />
      
      {/* 30+ Currencies Section */}
      <CurrenciesSection t={t.currencies} />
      
      {/* Trust & Industry Leaders Section */}
      <TrustSection t={t.trust} />
      
      {/* Ready to experience seamless OTC? */}
      <CtaSection t={t.cta} />
      
      {/* Footer */}
      <Footer t={t.footer} />
    </div>
  );
}

export default App;
