import React from 'react';
import { MessageCircle, Mail, Shield, CheckCircle2, FileText, Lock, ShieldCheck } from 'lucide-react';
import type { TranslationSchema } from '../data/translations';
import type { LegalDocType } from './LegalModal';

interface FooterProps {
  t: TranslationSchema['footer'];
  onOpenLegal: (doc: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenLegal }) => {
  return (
    <footer className="bg-[#03050a] border-t border-white/5 pt-12 pb-8 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Top Row: Brand Logo, Official Channels & Desk Inquiries */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/5">
          
          <div className="space-y-2">
            <a href="#" className="flex items-center gap-2.5 group">
              <img
                src="/logo.png"
                alt="OTC UNLIMITED BY TCI"
                className="h-8 sm:h-10 md:h-11 w-auto object-contain opacity-95 group-hover:opacity-100 transition-all duration-200 group-hover:scale-[1.03]"
              />
            </a>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Official Institutional Portal: www.otcunlimited.io</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
            <a
              href="https://t.me/otcunlimited"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:text-white hover:bg-blue-600 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Desk: @otcunlimited</span>
            </a>

            <a
              href="mailto:desk@otcunlimited.io"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>desk@otcunlimited.io</span>
            </a>

            <a
              href="mailto:compliance@otcunlimited.io"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-white transition-all"
            >
              <Shield className="w-4 h-4 text-purple-400" />
              <span>compliance@otcunlimited.io</span>
            </a>
          </div>

        </div>

        {/* Middle Row: Institutional Legal Disclaimer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#060913] border border-white/5 space-y-2.5 text-[11px] leading-relaxed text-slate-400">
          <div className="flex items-center gap-2 text-slate-200 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Institutional Governance & Regulatory Disclaimer</span>
          </div>
          <p>
            OTC Unlimited (<strong>otcunlimited.io</strong>) is an institutional digital asset liquidity and OTC clearing desk powered by TCI. All liquidity facilities, bilateral currency conversions, and settlement services are strictly provided on a B2B basis exclusively to verified institutional counterparties, regulated Payment Service Providers (PSPs), and licensed gaming operators under comprehensive KYB (Know-Your-Business) and AML/CFT underwriting.
          </p>
          <p className="text-slate-400">
            <strong>Important Consumer Disclosure:</strong> OTC Unlimited does not accept retail public deposits, offer consumer investment schemes, guarantee retail investment yields, or solicit retail trading funds. All counterparties must enter into bilateral OTC agreements prior to trading execution.
          </p>
        </div>

        {/* Legal Links & Verification */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/5 text-[11px]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-400">
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </button>

            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-purple-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => onOpenLegal('aml')}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AML / CFT Compliance</span>
            </button>

            <button
              onClick={() => onOpenLegal('verification')}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Security & Domain Notice</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} OTC Unlimited by TCI. {t.rights}
          </div>
        </div>

      </div>
    </footer>
  );
};
