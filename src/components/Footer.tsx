import React from 'react';
import { MessageCircle, Phone, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import { STORE_WHATSAPP_NUMBER, STORE_PHONE_DISPLAY, STORE_PHONE_INTL, SOCIAL_LINKS } from '../data/products';

export const Footer: React.FC = () => {
  const directWhatsAppLink = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'مرحباً سليم للجلود، أود الاستفسار عن تفاصيل منتج لديكم.'
  )}`;

  return (
    <footer className="bg-leather-darkest text-leather-cream border-t border-leather-dark">
      {/* Upper Footer: Brand & Fast Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
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
                  سليم للمصنوعات الجلدية الطبيعية
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-leather-parchment/75 leading-relaxed max-w-sm">
              براند مصري متخصص في تصميم وتصنيع المصنوعات الجلدية الطبيعية 100% يدوياً بحرفية عالية. نجمع بين أصالة الدباغة النباتية ودقة الخياطة اليدوية لتدوم مقتنياتك لعقود.
            </p>

            {/* Social Media Row */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-leather-dark hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-leather-brass/30 flex items-center justify-center text-leather-cream hover:text-white transition-all duration-300 shadow-sm"
                title="تابعنا على انستجرام"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-leather-dark hover:bg-[#1877F2] border border-leather-brass/30 flex items-center justify-center text-leather-cream hover:text-white transition-all duration-300 shadow-sm"
                title="تابعنا على فيسبوك"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>

              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-leather-dark hover:bg-black border border-leather-brass/30 flex items-center justify-center text-leather-cream hover:text-cyan-400 transition-all duration-300 shadow-sm"
                title="تابعنا على تيك توك"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-leather-dark hover:bg-[#25D366] border border-leather-brass/30 flex items-center justify-center text-leather-cream hover:text-white transition-all duration-300 shadow-sm"
                title="محادثة واتساب مباشرة"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
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
                <span>تواصل مع خدمة العملاء: {STORE_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-leather-sand font-serif border-b border-leather-dark pb-2">
              المجموعات
            </h4>
            <ul className="space-y-2 text-xs text-leather-parchment/75">
              <li>
                <a href="#products" className="hover:text-leather-brass-light transition-colors">
                  شنط جلدية رجالي وحريمي
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-leather-brass-light transition-colors">
                  محافظ جيب وكروت RFID
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-leather-brass-light transition-colors">
                  أساور وإكسسوارات نحاسية
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-leather-brass-light transition-colors">
                  حقائب سفر دافل ويك إند
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service & Guarantees */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-leather-sand font-serif border-b border-leather-dark pb-2">
              خدمة العملاء
            </h4>
            <ul className="space-y-2 text-xs text-leather-parchment/75">
              <li>
                <a href="#faqs" className="hover:text-leather-brass-light transition-colors">
                  سياسة المعاينة قبل الدفع
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-leather-brass-light transition-colors">
                  الاستبدال والاسترجاع (14 يوم)
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-leather-brass-light transition-colors">
                  كيف تعتني بالجلد الطبيعي؟
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-leather-brass-light transition-colors">
                  تجارب وتقييمات العملاء
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-leather-sand font-serif border-b border-leather-dark pb-2">
              التواصل والورشة
            </h4>
            <ul className="space-y-2.5 text-xs text-leather-parchment/75">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-leather-brass flex-shrink-0 mt-0.5" />
                <span>القاهرة - مصر • شحن وتوصيل فوري لجميع المحافظات</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-leather-brass flex-shrink-0" />
                <span dir="ltr">{STORE_PHONE_INTL}</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>دفع آمن عند الاستلام 100%</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-leather-espresso border-t border-leather-dark py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right text-xs text-leather-parchment/60">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} سليم للجلود الطبيعية (Selim Leather).
          </div>
          <div className="flex items-center gap-2 text-leather-parchment/80">
            <span>صُنع بشغف وحرفية يدوية مصرية</span>
            <Sparkles className="w-3.5 h-3.5 text-leather-brass" />
          </div>
        </div>
      </div>
    </footer>
  );
};
