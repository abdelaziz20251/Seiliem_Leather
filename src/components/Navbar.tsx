import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, ShieldCheck, Sparkles, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { STORE_WHATSAPP_NUMBER, STORE_PHONE_DISPLAY } from '../data/products';

interface NavbarProps {
  currentView?: 'landing' | 'product';
  onNavigate?: (view: 'landing' | 'product') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView = 'landing', onNavigate }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const { t, language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directWhatsAppLink = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    language === 'en'
      ? 'Hello Seliem Leather, I would like to inquire about The Artisan Dopp Kit and current offers.'
      : 'مرحباً سليم للجلود، أود الاستفسار عن التشكيلة المتوفرة وعروض اليوم.'
  )}`;

  const handleNavClick = (view: 'landing' | 'product', hashTarget?: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(view);
    }
    if (hashTarget) {
      setTimeout(() => {
        const el = document.querySelector(hashTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-leather-darkest/95 backdrop-blur-md border-b border-leather-dark/60 text-leather-cream transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-gradient-to-r from-leather-espresso via-leather-dark to-leather-espresso text-leather-sand text-xs py-2 px-4 border-b border-leather-brass/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-center text-[11px] sm:text-xs font-medium">
          <div className="hidden sm:flex items-center gap-1.5 text-leather-brass">
            <ShieldCheck className="w-4 h-4 text-leather-brass" />
            <span>{t.common.inspectNotice}</span>
          </div>
          <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0">
            <Sparkles className="w-3.5 h-3.5 text-leather-brass-light animate-pulse" />
            <span>{t.navbar.announcement}</span>
          </div>
          <div className="hidden md:block text-leather-parchment/80 font-mono text-[11px]">
            {t.navbar.salesWhatsApp} {STORE_PHONE_DISPLAY}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('landing', '#hero')}
              className="flex items-center gap-3 group text-left rtl:text-right cursor-pointer focus:outline-none"
              aria-label="Seliem Leather Home"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-leather-espresso/90 border border-leather-brass/40 flex items-center justify-center shadow-lg shadow-black/50 p-1 group-hover:border-leather-brass group-hover:shadow-leather-brass/20 transition-all duration-300 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Seliem Leather Official Logo"
                  className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-leather-cream font-serif group-hover:text-leather-brass-light transition-colors">
                  SELIEM LEATHER
                </span>
                <span className="text-[10px] text-leather-honey tracking-widest uppercase -mt-1 font-semibold">
                  {t.common.brandSub}
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            <button
              onClick={() => handleNavClick('landing', '#hero')}
              className={`transition-colors cursor-pointer ${
                currentView === 'landing'
                  ? 'text-leather-brass-light font-bold'
                  : 'text-leather-parchment/90 hover:text-leather-brass-light'
              }`}
            >
              {t.navbar.home}
            </button>
            <button
              onClick={() => handleNavClick('product')}
              className={`transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentView === 'product'
                  ? 'text-leather-brass-light font-bold'
                  : 'text-leather-parchment/90 hover:text-leather-brass-light'
              }`}
            >
              <span>{t.navbar.doppKit}</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-leather-brass/20 text-leather-brass-light border border-leather-brass/40">
                {language === 'en' ? 'Product Page' : 'صفحة المنتج'}
              </span>
            </button>
            <button
              onClick={() => handleNavClick('landing', '#craftsmanship')}
              className="text-leather-parchment/90 hover:text-leather-brass-light transition-colors cursor-pointer"
            >
              {t.navbar.craftsmanship}
            </button>
            <button
              onClick={() => handleNavClick('landing', '#testimonials')}
              className="text-leather-parchment/90 hover:text-leather-brass-light transition-colors cursor-pointer"
            >
              {t.navbar.reviews}
            </button>
            <button
              onClick={() => handleNavClick('landing', '#faqs')}
              className="text-leather-parchment/90 hover:text-leather-brass-light transition-colors cursor-pointer"
            >
              {t.navbar.faqs}
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Language Switcher Button (Desktop & Mobile) */}
            <button
              onClick={toggleLanguage}
              id="lang-switcher-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-leather-espresso hover:bg-leather-dark border border-leather-brass/40 hover:border-leather-brass text-leather-sand hover:text-white transition-all duration-200 text-xs font-bold active:scale-95 shadow-sm"
              title={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-leather-brass-light" />
              <span className="tracking-wide">
                {t.navbar.switchLangText}
              </span>
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-200"
              title={t.navbar.directOrder}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.navbar.directOrder}</span>
            </a>

            {/* Cart Trigger Button (44px Touch Target) */}
            <button
              id="cart-trigger-btn"
              onClick={() => setIsCartOpen(true)}
              className="relative w-11 h-11 rounded-2xl bg-leather-dark hover:bg-leather-espresso text-leather-cream border border-leather-brass/40 hover:border-leather-brass flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-leather-brass shadow-sm active:scale-95"
              aria-label={t.navbar.cartTitle}
            >
              <ShoppingBag className="w-5 h-5 text-leather-brass-light" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-leather-darkest font-black text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button (44px Touch Target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 rounded-2xl bg-leather-dark/60 text-leather-cream hover:bg-leather-dark border border-leather-dark flex items-center justify-center active:scale-95"
              aria-label={t.navbar.menuTitle}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-leather-darkest border-b border-leather-dark/80 px-4 pt-3 pb-5 space-y-3 animate-fade-in text-left rtl:text-right">
          <div className="flex items-center justify-between pb-2 border-b border-leather-dark/60">
            <span className="text-xs text-leather-sand font-bold">{t.navbar.menuTitle}</span>
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-leather-espresso border border-leather-brass/40 text-xs font-bold text-leather-brass-light"
            >
              <Globe className="w-3.5 h-3.5 text-leather-brass" />
              <span>{t.navbar.switchLangText}</span>
            </button>
          </div>

          <button
            onClick={() => handleNavClick('landing', '#hero')}
            className="w-full text-left rtl:text-right py-2 text-sm text-leather-cream hover:text-leather-brass"
          >
            {t.navbar.home}
          </button>
          <button
            onClick={() => handleNavClick('product')}
            className="w-full text-left rtl:text-right py-2 text-sm text-leather-brass-light font-bold flex items-center justify-between"
          >
            <span>{t.navbar.doppKit}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-leather-brass/20 text-leather-brass border border-leather-brass/40">
              {language === 'en' ? 'Product Page' : 'صفحة المنتج'}
            </span>
          </button>
          <button
            onClick={() => handleNavClick('landing', '#craftsmanship')}
            className="w-full text-left rtl:text-right py-2 text-sm text-leather-cream hover:text-leather-brass"
          >
            {t.navbar.craftsmanship}
          </button>
          <button
            onClick={() => handleNavClick('landing', '#testimonials')}
            className="w-full text-left rtl:text-right py-2 text-sm text-leather-cream hover:text-leather-brass"
          >
            {t.navbar.reviews}
          </button>
          <button
            onClick={() => handleNavClick('landing', '#faqs')}
            className="w-full text-left rtl:text-right py-2 text-sm text-leather-cream hover:text-leather-brass"
          >
            {t.navbar.faqs}
          </button>
          <div className="pt-2">
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-2.5 rounded-lg font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.navbar.directOrder}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
