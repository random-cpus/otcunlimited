
export interface CurrencyData {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  ratePerUsdt: number;
  change24h: number;
  region: 'Global' | 'Europe' | 'Asia' | 'Americas' | 'Middle East';
  rails: string[];
  settlementTime: string;
  minTicket: string;
  popular?: boolean;
}

export interface SolutionItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  description: string;
  benefits: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Settlement & Liquidity' | 'Currencies & Rails' | 'Security & Anonymity' | 'Onboarding';
}

export interface BookingFormData {
  businessType: string;
  monthlyVolume: string;
  primaryCurrencies: string[];
  settlementPreference: 'pre-funded' | 'instant' | 'both';
  contactPlatform: 'telegram' | 'signal' | 'email';
  contactHandle: string;
  notes: string;
}
