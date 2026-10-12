import React, { useState, useEffect } from 'react';
import { X, Sparkles, MessageCircle, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import { SOCIAL_LINKS, STORE_PHONE_DISPLAY } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export const SocialPopup: React.FC = () => {
  const { language, isRTL, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // Check if the user has previously dismissed with 'dontShowAgain'
    const isDismissed = localStorage.getItem('selim_social_popup_dismissed');
    if (!isDismissed) {
      // Appear gracefully after 1.2 seconds of loading the site
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('selim_social_popup_dismissed', 'true');
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const DirectionalArrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={handleClose} />

      <div
        className={`relative w-full max-w-lg bg-gradient-to-b from-leather-espresso via-leather-darkest to-leather-espresso border-2 border-leather-brass/40 rounded-3xl overflow-hidden shadow-2xl text-leather-cream ${isRTL ? 'text-right' : 'text-left'} p-6 sm:p-8 my-8 z-10 transform transition-all duration-300 animate-fade-in`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-leather-brass/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-40 h-40 bg-leather-cognac/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} p-2 rounded-full bg-leather-dark/90 hover:bg-leather-espresso text-leather-parchment/70 hover:text-white border border-leather-brass/30 transition-colors`}
          aria-label={language === 'en' ? 'Close dialog' : 'إغلاق النافذة'}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Emblem & Welcome Header */}
        <div className="text-center space-y-3 mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-leather-espresso/90 border-2 border-leather-brass/50 shadow-xl shadow-black/50 mx-auto p-1.5 overflow-hidden">
            <img src="/logo.png" alt="Seliem Leather" className="w-full h-full object-contain filter drop-shadow" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-leather-dark/80 border border-leather-brass/30 text-leather-sand text-[11px] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-leather-brass" />
            <span>{t.socialPopup.badge}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-leather-cream font-serif">
            {t.socialPopup.title}
          </h3>

          <p className="text-xs sm:text-sm text-leather-parchment/80 leading-relaxed max-w-sm mx-auto">
            {t.socialPopup.description}
          </p>
        </div>

        {/* Social Links Cards */}
        <div className="space-y-3 mb-6">
          {/* Instagram */}
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-2xl bg-leather-dark/80 hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-pink-900/40 border border-leather-dark hover:border-pink-500/50 transition-all duration-300 shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md flex-shrink-0">
                <InstagramIcon className="w-6 h-6 stroke-[2]" />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-xs font-bold text-leather-cream group-hover:text-pink-300 transition-colors">
                  {language === 'en' ? 'Instagram' : 'انستجرام (Instagram)'}
                </div>
                <div className="text-[11px] text-leather-parchment/60 font-mono" dir="ltr">
                  @seliem.leather
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-1 text-xs font-bold text-pink-400 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>
              <span>{t.socialPopup.follow}</span>
              <DirectionalArrow className="w-4 h-4" />
            </div>
          </a>

          {/* Facebook */}
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-2xl bg-leather-dark/80 hover:bg-gradient-to-r hover:from-blue-950/60 hover:to-blue-900/40 border border-leather-dark hover:border-blue-500/50 transition-all duration-300 shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#1877F2] flex items-center justify-center text-white shadow-md flex-shrink-0">
                <FacebookIcon className="w-6 h-6 fill-current" />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-xs font-bold text-leather-cream group-hover:text-blue-300 transition-colors">
                  {language === 'en' ? 'Facebook' : 'فيسبوك (Facebook)'}
                </div>
                <div className="text-[11px] text-leather-parchment/60 font-serif">
                  {language === 'en' ? 'Seliem Leather Official' : 'Seliem Leather - سليم للجلود'}
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-1 text-xs font-bold text-blue-400 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>
              <span>{t.socialPopup.like}</span>
              <DirectionalArrow className="w-4 h-4" />
            </div>
          </a>

          {/* TikTok */}
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-2xl bg-leather-dark/80 hover:bg-gradient-to-r hover:from-black hover:to-cyan-950/40 border border-leather-dark hover:border-cyan-400/50 transition-all duration-300 shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-black border border-white/20 flex items-center justify-center text-white shadow-md flex-shrink-0">
                <TikTokIcon className="w-5 h-5 text-cyan-400" />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-xs font-bold text-leather-cream group-hover:text-cyan-300 transition-colors">
                  {language === 'en' ? 'TikTok' : 'تيك توك (TikTok)'}
                </div>
                <div className="text-[11px] text-leather-parchment/60 font-mono" dir="ltr">
                  @seliem.handmade.leather
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-1 text-xs font-bold text-cyan-400 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>
              <span>{t.socialPopup.workshopVideos}</span>
              <DirectionalArrow className="w-4 h-4" />
            </div>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-2xl bg-leather-dark/80 hover:bg-gradient-to-r hover:from-emerald-950/60 hover:to-emerald-900/40 border border-leather-dark hover:border-emerald-500/50 transition-all duration-300 shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-md flex-shrink-0">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-xs font-bold text-leather-cream group-hover:text-emerald-300 transition-colors">
                  {language === 'en' ? 'WhatsApp Direct' : 'واتساب المباشر (WhatsApp)'}
                </div>
                <div className="text-[11px] text-leather-honey font-mono" dir="ltr">
                  {STORE_PHONE_DISPLAY}
                </div>
              </div>
            </div>
            <div className={`flex items-center gap-1 text-xs font-bold text-[#25D366] ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>
              <span>{t.socialPopup.liveChat}</span>
              <DirectionalArrow className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Bottom Options & CTA */}
        <div className="space-y-4 pt-2 border-t border-leather-dark/60">
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-leather-parchment/70 hover:text-leather-cream select-none">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-4 h-4 rounded border-leather-dark bg-leather-espresso text-leather-brass focus:ring-leather-brass accent-leather-brass cursor-pointer"
              />
              <span>{t.socialPopup.dontShowAgain}</span>
            </label>
          </div>

          <button
            onClick={handleClose}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-leather-cognac-rich to-leather-cognac hover:from-leather-cognac hover:to-leather-tan text-white font-bold text-sm shadow-xl shadow-leather-cognac/30 hover:shadow-leather-brass/20 transition-all duration-300 border border-leather-brass/40 flex items-center justify-center gap-2"
          >
            <span>{t.socialPopup.exploreBtn}</span>
            <Check className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

