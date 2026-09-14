
import React, { useState } from 'react';
import { X, Calendar, Coins, Building2, Check, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { TranslationSchema } from '../data/translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: TranslationSchema['bookingModal'];
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, t }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<'OTC' | 'PSP'>('OTC');
  const [formData, setFormData] = useState({
    nickname: '',
    telegramUsername: '',
    companyNickname: '',
    preferredTime: ''
  });

  if (!isOpen) return null;

  const handleStep2Next = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Advance to Step 3: Booking Confirmed!
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  const resetAndClose = () => {
    setStep(1);
    setFormData({ nickname: '', telegramUsername: '', companyNickname: '', preferredTime: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md glass-panel bg-[#0b101e] dark:bg-[#0b101e] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden transition-all">
        
        {/* Top Header: [Calendar Icon] Book Appointment & Close Button */}
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              {t.headerTitle}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators (3 pill dots matching screenshot) */}
        <div className="flex justify-center items-center gap-2 py-2">
          <div className={`h-1.5 rounded-full transition-all duration-300 ${
            step >= 1 ? 'w-7 bg-blue-500' : 'w-2.5 bg-slate-700'
          }`} />
          <div className={`h-1.5 rounded-full transition-all duration-300 ${
            step >= 2 ? 'w-7 bg-blue-500' : 'w-2.5 bg-slate-700'
          }`} />
          <div className={`h-1.5 rounded-full transition-all duration-300 ${
            step >= 3 ? 'w-7 bg-blue-500' : 'w-2.5 bg-slate-700'
          }`} />
        </div>

        <div className="pt-2">
          
          {/* STEP 1: What type of business are you? */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="text-center text-xs font-medium text-slate-400">
                {t.step1Question}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Card 1: OTC, Liquidity Provider */}
                <div
                  onClick={() => {
                    setSelectedType('OTC');
                    setStep(2);
                  }}
                  className={`p-5 rounded-2xl border text-center space-y-3 cursor-pointer transition-all duration-200 group ${
                    selectedType === 'OTC'
                      ? 'bg-[#0f172a] border-blue-500/50 shadow-lg shadow-blue-500/10'
                      : 'bg-[#0a0f1d] border-white/5 hover:border-blue-500/30 hover:bg-[#0e1526]'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-500 mx-auto group-hover:scale-110 transition-transform">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {t.card1Title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {t.card1Desc}
                    </p>
                  </div>
                </div>

                {/* Card 2: PSP looking for OTC */}
                <div
                  onClick={() => {
                    setSelectedType('PSP');
                    setStep(2);
                  }}
                  className={`p-5 rounded-2xl border text-center space-y-3 cursor-pointer transition-all duration-200 group ${
                    selectedType === 'PSP'
                      ? 'bg-[#0f172a] border-blue-500/50 shadow-lg shadow-blue-500/10'
                      : 'bg-[#0a0f1d] border-white/5 hover:border-blue-500/30 hover:bg-[#0e1526]'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-500 mx-auto group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {t.card2Title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {t.card2Desc}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* STEP 2: Exact Contact Details Form */}
          {step === 2 && (
            <form onSubmit={handleStep2Next} className="space-y-4 animate-in fade-in duration-150">
              <div className="text-center text-xs font-medium text-slate-400">
                {t.step2Subtitle}
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1 block">
                    {t.nicknameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nickname}
                    onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                    placeholder={t.nicknamePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-white/10 text-white text-xs outline-none focus:border-blue-500 placeholder-slate-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1 block">
                    {t.telegramLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.telegramUsername}
                    onChange={(e) => setFormData({ ...formData, telegramUsername: e.target.value })}
                    placeholder={t.telegramPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-white/10 text-white text-xs outline-none focus:border-blue-500 placeholder-slate-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1 block">
                    {t.companyLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyNickname}
                    onChange={(e) => setFormData({ ...formData, companyNickname: e.target.value })}
                    placeholder={t.companyPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-white/10 text-white text-xs outline-none focus:border-blue-500 placeholder-slate-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1 block">
                    {t.preferredTimeLabel}
                  </label>
                  <input
                    type="datetime-local"
                    required
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-white/10 text-white text-xs outline-none focus:border-blue-500 text-slate-300"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-2.5 rounded-xl bg-[#070b14] hover:bg-slate-900 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer border border-white/10 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t.backBtn}</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#1d4ed8] hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/20 transition-all"
                >
                  <span>{t.nextBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Exact Confirmation Screen (Matching User's Screenshot) */}
          {step === 3 && (
            <div className="text-center py-4 space-y-5 animate-in zoom-in-95 duration-200">
              
              {/* Circular Blue Check Badge */}
              <div className="w-16 h-16 rounded-full bg-[#0e1b38] border-2 border-blue-500/40 flex items-center justify-center text-blue-500 mx-auto shadow-lg shadow-blue-500/10">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {t.confirmedTitle}
                </h3>
                <p className="text-xs text-slate-400">
                  {t.confirmedSubtitle}
                </p>
              </div>

              {/* Inner Telegram Box */}
              <div className="p-4 rounded-2xl bg-[#070b14] border border-white/10 space-y-2 text-left">
                <div className="text-xs text-slate-400 text-center font-normal">
                  {t.telegramBoxText}
                </div>
                <div className="text-center">
                  <a
                    href="https://t.me/otcunlimited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-blue-400" />
                    <span>@otcunlimited</span>
                  </a>
                </div>
              </div>

              {/* Full Width Done Button */}
              <button
                type="button"
                onClick={resetAndClose}
                className="w-full py-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
              >
                {t.doneBtn}
              </button>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
