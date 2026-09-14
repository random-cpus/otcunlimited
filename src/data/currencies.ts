
export interface MinimalCurrency {
  code: string;
  name: string;
  flag: string;
  rail: string;
}

export const SUPPORTED_CURRENCIES: MinimalCurrency[] = [
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳', rail: 'UPI / IMPS' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', rail: 'SEPA Instant' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', rail: 'Interac e-Transfer' },
  { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷', rail: 'PIX 24/7' },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', rail: 'Central Bank IPP' },
  { code: 'TRY', name: 'Turkish Lira', flag: '🇹🇷', rail: 'FAST 24/7' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', rail: 'Faster Payments' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', rail: 'PayNow' },
  { code: 'THB', name: 'Thai Baht', flag: '🇹🇭', rail: 'PromptPay' },
  { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽', rail: 'SPEI' },
  { code: 'PHP', name: 'Philippine Peso', flag: '🇵🇭', rail: 'InstaPay' },
  { code: 'VND', name: 'Vietnamese Dong', flag: '🇻🇳', rail: 'Napas 247' }
];
