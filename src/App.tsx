
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CurrenciesSection } from './components/CurrenciesSection';
import { TrustSection } from './components/TrustSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { TRANSLATIONS } from './data/translations';
import type { LanguageCode } from './data/translations';

export function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('US');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.US;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] font-sans transition-colors duration-300">
      {/* Header with Language Dropdown & Working Theme Toggle */}
      <Navbar
        currentLang={currentLang}
        onLangChange={setCurrentLang}
        t={t.nav}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      
      {/* Hero Section */}
      <HeroSection
        t={t.hero}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      
      {/* Features Section */}
      <FeaturesSection t={t.features} />
      
      {/* 30+ Currencies Section */}
      <CurrenciesSection
        t={t.currencies}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      
      {/* Trust & Industry Leaders Section */}
      <TrustSection t={t.trust} />
      
      {/* Ready to experience seamless OTC? */}
      <CtaSection
        t={t.cta}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      
      {/* Footer */}
      <Footer t={t.footer} />

      {/* Discovery Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        t={t.bookingModal}
      />
    </div>
  );
}

export default App;
