import React from 'react';
import { MessageCircle, Phone, MapPin, ShieldCheck, Sparkles, Globe } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import { STORE_WHATSAPP_NUMBER, STORE_PHONE_DISPLAY, STORE_PHONE_INTL, SOCIAL_LINKS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();

  const directWhatsAppLink = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    language === 'en'
      ? 'Hello Selim Leather, I would like to inquire about your handcrafted leather goods.'
      : 'مرحباً سليم للجلود، أود الاستفسار عن تفاصيل منتج لديكم.'
  )}`;

  return (
    <footer className="bg-leather-darkest text-leather-cream border-t border-leather-dark">
      {/* Upper Footer: Brand & Fast Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left rtl:text-right">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-leather-cognac-rich to-leather-espresso border border-leather-brass/40 flex items-center justify-center">
                <span className="font-serif font-black text-xl text-leather-brass-light">S</span>
              </div>
              <div>
                <span className="text-xl font-black text-leather-cream font-serif block">
                  SELIM LEATHER
                </span>
                <span className="text-[10px] text-leather-honey tracking-widest uppercase font-semibold">
                  {t.common.brandSub}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-leather-parchment/75 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            {/* Clear Branded Social Media Row */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold text-leather-sand block">
                {t.footer.followUs}
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Facebook */}
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold shadow-md hover:shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5 border border-white/20 active:scale-95"
                  title="Facebook"
                >
                  <FacebookIcon className="w-4 h-4 fill-white" />
                  <span>{language === 'en' ? 'Facebook' : 'فيسبوك'}</span>
                </a>

                {/* Instagram */}
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white text-xs font-bold shadow-md hover:shadow-pink-600/30 transition-all duration-300 transform hover:-translate-y-0.5 border border-white/20 active:scale-95"
                  title="Instagram"
                >
                  <InstagramIcon className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>{language === 'en' ? 'Instagram' : 'انستجرام'}</span>
                </a>

                {/* TikTok */}
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black hover:bg-zinc-900 text-white text-xs font-bold shadow-md hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-0.5 border border-cyan-400/40 active:scale-95"
                  title="TikTok"
                >
                  <TikTokIcon className="w-4 h-4 text-cyan-400" />
                  <span>{language === 'en' ? 'TikTok' : 'تيك توك'}</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 border border-white/20 active:scale-95"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  <span>{language === 'en' ? 'WhatsApp' : 'واتساب'}</span>
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-1">
              <a
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-900 transition-colors text-xs font-bold"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
                <span>{t.footer.calloutText} {STORE_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Links: Shades */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-leather-sand font-serif border-b border-leather-dark pb-2">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs text-leather-parchment/75">
              <li>
                <a href="#products" className="hover:text-leather-brass-light transition-colors">
                  {language === 'en' ? 'Vintage Crazy Horse Brown' : 'بني عسلي معتق (Vintage Brown)'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-leather-brass-light transition-colors">
                  {language === 'en' ? 'Dark Chocolate Espresso' : 'بني شوكولاتة داكن (Dark Chocolate)'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-leather-brass-light transition-colors">
                  {language === 'en' ? 'Vintage Olive Green' : 'أخضر زيتي ملكي (Olive Green)'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-leather-brass-light transition-colors">
                  {language === 'en' ? 'Classic Camel Tan' : 'هافان جملي دافئ (Classic Tan)'}
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service & Guarantees */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-leather-sand font-serif border-b border-leather-dark pb-2">
              {t.footer.customerCareTitle}
            </h4>
            <ul className="space-y-2 text-xs text-leather-parchment/75">
              <li>
                <a href="#faqs" className="hover:text-leather-brass-light transition-colors">
                  {t.footer.inspectPolicy}
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-leather-brass-light transition-colors">
                  {t.footer.exchangePolicy}
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-leather-brass-light transition-colors">
                  {t.footer.leatherCare}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-leather-brass-light transition-colors">
                  {t.testimonials.title}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-leather-sand font-serif border-b border-leather-dark pb-2">
              {language === 'en' ? 'Atelier & Contact' : 'التواصل والورشة'}
            </h4>
            <ul className="space-y-2.5 text-xs text-leather-parchment/75">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-leather-brass flex-shrink-0 mt-0.5" />
                <span>
                  {language === 'en'
                    ? 'Cairo, Egypt • Fast Nationwide Shipping Across All Governorates'
                    : 'القاهرة - مصر • شحن وتوصيل فوري لجميع المحافظات'}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-leather-brass flex-shrink-0" />
                <span>{STORE_PHONE_INTL}</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  {language === 'en'
                    ? '100% Secure Cash on Delivery After Inspection'
                    : 'دفع آمن عند الاستلام 100% بعد المعاينة'}
                </span>
              </li>
              <li className="pt-2">
                <button
                  onClick={toggleLanguage}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-leather-dark hover:bg-leather-espresso border border-leather-brass/30 text-xs font-bold text-leather-sand hover:text-white transition-all"
                >
                  <Globe className="w-3.5 h-3.5 text-leather-brass" />
                  <span>
                    {language === 'en' ? 'تغيير اللغة إلى العربية' : 'Switch Language to English'}
                  </span>
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-leather-espresso border-t border-leather-dark py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left rtl:sm:text-right text-xs text-leather-parchment/60">
          <div>
            © {new Date().getFullYear()} Selim Leather. {t.footer.copyright}
          </div>
          <div className="flex items-center gap-2 text-leather-parchment/80">
            <span>
              {language === 'en' ? 'Crafted with Passion in Egypt' : 'صُنع بشغف وحرفية يدوية مصرية'}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-leather-brass" />
          </div>
        </div>
      </div>
    </footer>
  );
};
