import React from 'react';
import { X, ShieldCheck, FileText, Lock, CheckCircle2, AlertTriangle } from 'lucide-react';

export type LegalDocType = 'terms' | 'privacy' | 'aml' | 'verification' | null;

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ docType, onClose }) => {
  if (!docType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col glass-panel bg-[#0b101e] border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#070b14]/80">
          <div className="flex items-center gap-2.5">
            {docType === 'terms' && <FileText className="w-5 h-5 text-blue-400" />}
            {docType === 'privacy' && <Lock className="w-5 h-5 text-purple-400" />}
            {docType === 'aml' && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
            {docType === 'verification' && <CheckCircle2 className="w-5 h-5 text-cyan-400" />}
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {docType === 'terms' && 'Institutional Terms of Service'}
              {docType === 'privacy' && 'Enterprise Privacy & Data Protection'}
              {docType === 'aml' && 'AML / CFT & Sanctions Compliance Framework'}
              {docType === 'verification' && 'Official Domain & Security Verification'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          {docType === 'terms' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs">
                <strong>B2B Institutional Notice:</strong> Services rendered via otcunlimited.io are strictly designed for verified corporate counterparties, Payment Service Providers (PSPs), and licensed gaming operators. No retail consumer services or public investment deposits are offered or accepted.
              </div>

              <h4 className="text-white font-bold text-sm">1. Bilateral Over-The-Counter (OTC) Trading</h4>
              <p>
                OTC Unlimited acts as a principal trading counterparty for institutional digital asset liquidity. All settlements and order executions are executed on a bilateral, bespoke basis pursuant to verified Master OTC Agreements and institutional onboarding terms.
              </p>

              <h4 className="text-white font-bold text-sm">2. Counterparty Eligibility & KYB Onboarding</h4>
              <p>
                Participation is strictly contingent upon successful completion of our Know-Your-Business (KYB) underwriting, corporate identity verification, beneficial ownership validation, and ongoing sanctions/AML screening.
              </p>

              <h4 className="text-white font-bold text-sm">3. Settlement & Clearing Mechanisms</h4>
              <p>
                Liquidity provision and fiat/crypto conversions are settled through dedicated institutional rails, local payment rails, or multi-signature smart contract escrow mechanisms. Quotations provided by our trading desk reflect real-time firm or indicative pricing agreed upon prior to execution.
              </p>

              <h4 className="text-white font-bold text-sm">4. Risk & Regulatory Disclosures</h4>
              <p>
                Digital asset transactions involve market and settlement volatility. Corporate counterparties confirm they possess the requisite financial sophistication, legal capacity, and corporate authorizations in their respective jurisdictions.
              </p>
            </div>
          )}

          {docType === 'privacy' && (
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm">1. Enterprise Data Handling & Confidentiality</h4>
              <p>
                OTC Unlimited maintains strict confidentiality regarding all counterparty transaction details, trading volumes, and operational data. Counterparty information is encrypted at rest and in transit using industry-standard TLS 1.3 and AES-256 protocols.
              </p>

              <h4 className="text-white font-bold text-sm">2. Regulatory Information Collection</h4>
              <p>
                To comply with global Anti-Money Laundering (AML) and Counter-Terrorist Financing (CFT) mandates, we collect and securely maintain corporate registry documentation, constitutional documents, authorized signatory identification, and source-of-funds verification.
              </p>

              <h4 className="text-white font-bold text-sm">3. Non-Disclosure & Third-Party Sharing</h4>
              <p>
                Counterparty data is never sold, leased, or distributed to non-affiliated commercial third parties. Disclosures are made exclusively to authorized banking partners and regulatory authorities where legally compelled by binding court orders or statutory reporting requirements.
              </p>
            </div>
          )}

          {docType === 'aml' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs">
                <strong>Zero-Tolerance AML/CFT Commitment:</strong> OTC Unlimited enforces rigorous transaction monitoring and adherence to FATF (Financial Action Task Force) standards and the Travel Rule.
              </div>

              <h4 className="text-white font-bold text-sm">1. Risk-Based Customer Due Diligence (CDD)</h4>
              <p>
                Every institutional counterparty undergoes comprehensive Know-Your-Business (KYB) underwriting before any trading or settlement facility is activated. This includes verifying corporate registration, Ultimate Beneficial Owners (UBOs holding &gt;10%), and executive management.
              </p>

              <h4 className="text-white font-bold text-sm">2. Global Sanctions & PEP Screening</h4>
              <p>
                All counterparties, directors, and associated wallet addresses are continuously screened against international sanctions databases (including OFAC, EU, UN, UK HMT) and Politically Exposed Persons (PEP) lists. Transactions originating from or routed to sanctioned jurisdictions or high-risk mixers are strictly blocked.
              </p>

              <h4 className="text-white font-bold text-sm">3. On-Chain Forensics & Wallet Provenance</h4>
              <p>
                All digital asset deposits and withdrawal addresses are analyzed via automated blockchain intelligence tools to identify and mitigate exposure to darknet markets, ransomware, sanctioned entities, or stolen liquidity.
              </p>
            </div>
          )}

          {docType === 'verification' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 shrink-0 text-cyan-400 mt-0.5" />
                <div>
                  <strong>Official Domain Notice:</strong> The sole authorized domain for our institutional trading desk is <strong>https://www.otcunlimited.io/</strong>. Always verify the domain name in your browser's address bar.
                </div>
              </div>

              <h4 className="text-white font-bold text-sm">Authorized Channels</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span><strong>Official Website:</strong> <a href="https://www.otcunlimited.io" className="text-cyan-400 underline">https://www.otcunlimited.io</a></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span><strong>Official Desk Telegram:</strong> <a href="https://t.me/otcunlimited" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">@otcunlimited</a></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span><strong>Trading Desk Inquiries:</strong> desk@otcunlimited.io</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span><strong>Compliance & KYB:</strong> compliance@otcunlimited.io</span>
                </li>
              </ul>

              <h4 className="text-white font-bold text-sm">Anti-Impersonation & Phishing Warning</h4>
              <p>
                OTC Unlimited will never direct-message you from unverified accounts requesting retail crypto transfers or proposing high-yield returns. If in doubt, contact our verified desk directly at <a href="mailto:compliance@otcunlimited.io" className="text-blue-400 underline">compliance@otcunlimited.io</a>.
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-[#070b14]/80 flex items-center justify-between text-xs text-slate-400">
          <div>OTC Unlimited by TCI • Institutional Governance</div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
