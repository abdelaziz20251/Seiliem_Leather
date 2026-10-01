import React from 'react';
import { ArrowLeft, Shield, Sparkles, Award, CheckCircle2, MessageCircle } from 'lucide-react';
import { STORE_WHATSAPP_NUMBER } from '../data/products';

export const Hero: React.FC = () => {
  const directWhatsAppLink = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'مرحباً سليم للجلود، أرغب في الاطلاع على العروض الخاصة بالحقائب والمحافظ الجلدية.'
  )}`;

  return (
    <section id="hero" className="relative overflow-hidden bg-leather-darkest text-leather-cream py-16 lg:py-24 border-b border-leather-dark">
      {/* Background Ambience & Warm Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-leather-cognac/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-leather-brass/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#DDA15E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            
            {/* Handcrafted Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-leather-espresso/90 border border-leather-brass/40 shadow-inner">
              <Sparkles className="w-4 h-4 text-leather-brass-light" />
              <span className="text-xs sm:text-sm font-semibold text-leather-sand tracking-wide">
                حرفة يدوية مصرية أصيلة • جلد طبيعي 100% بدون أي مواد صناعية
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-leather-cream tracking-tight leading-[1.25] font-serif">
              فخامة الجلد الطبيعي
              <span className="block mt-2 bg-gradient-to-l from-leather-brass-light via-leather-honey to-leather-sand bg-clip-text text-transparent">
                صُنعت لتبقى معك أجيالاً
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-leather-parchment/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              ننتقي في <strong className="text-leather-brass font-bold">سليم للجلود</strong> أعلى طبقات الجلد البقري المدبوغ نباتياً (Full-Grain) لنقدم حقائب، محافظ، وإكسسوارات تجمع بين قوة التحمل والأناقة الكلاسيكية الخالدة مع حق <span className="underline decoration-leather-brass underline-offset-4 font-semibold text-leather-cream">المعاينة والفحص قبل الاستلام</span>.
            </p>

            {/* Core Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-leather-dark/60 border border-leather-dark/90 rounded-xl p-3 text-right">
                <CheckCircle2 className="w-5 h-5 text-leather-brass flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-leather-cream">جلد بقري 100%</div>
                  <div className="text-[11px] text-leather-parchment/70">مدبوغ نباتياً بالكامل</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-leather-dark/60 border border-leather-dark/90 rounded-xl p-3 text-right">
                <Shield className="w-5 h-5 text-leather-brass flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-leather-cream">معاينة قبل الدفع</div>
                  <div className="text-[11px] text-leather-parchment/70">افحص طلبك مع المندوب</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-leather-dark/60 border border-leather-dark/90 rounded-xl p-3 text-right">
                <Award className="w-5 h-5 text-leather-brass flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-leather-cream">ضمان حقيقي لمدة عام</div>
                  <div className="text-[11px] text-leather-parchment/70">على الخياطة والإكسسوار</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#products"
                id="hero-shop-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-leather-cognac-rich to-leather-cognac hover:from-leather-cognac hover:to-leather-tan text-white font-bold text-base shadow-xl shadow-leather-cognac/30 hover:shadow-leather-brass/20 transition-all duration-300 transform hover:-translate-y-0.5 border border-leather-brass/30"
              >
                <span>تسوق التشكيلة الآن</span>
                <ArrowLeft className="w-5 h-5" />
              </a>

              <a
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-leather-espresso/90 hover:bg-leather-dark text-leather-parchment hover:text-white font-semibold text-base border border-leather-brass/40 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                <span>طلب مباشر عبر واتساب</span>
              </a>
            </div>

          </div>

          {/* Hero Visual Card / Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-leather-brass/30 via-leather-cognac/20 to-transparent blur-sm" />
              
              {/* Product Showcase Container */}
              <div className="relative rounded-2xl overflow-hidden bg-leather-espresso border-2 border-leather-brass/40 shadow-2xl shadow-black/80">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85"
                    alt="حقيبة ساعي البريد الكلاسيكية من سليم للجلود"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-leather-darkest via-transparent to-black/20" />
                  
                  {/* Floating Handcrafted Tag */}
                  <div className="absolute top-4 right-4 bg-leather-darkest/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-leather-brass/50 text-xs font-bold text-leather-brass-light flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-leather-brass" />
                    <span>مجموعة التراث الحرفي 2026</span>
                  </div>

                  {/* Inspection Notice Tag */}
                  <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/50 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>معاينة حرة مع المندوب</span>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-5 bg-gradient-to-b from-leather-espresso to-leather-darkest border-t border-leather-dark flex items-center justify-between">
                  <div>
                    <span className="text-xs text-leather-honey font-medium block">القطعة المميزة هذا الأسبوع</span>
                    <h3 className="text-lg font-bold text-leather-cream font-serif">حقيبة Heritage Messenger</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-leather-brass-light font-black text-lg">1,850 ج.م</span>
                      <span className="text-xs text-leather-parchment/60 line-through">2,200 ج.م</span>
                    </div>
                  </div>

                  <a
                    href="#products"
                    className="px-4 py-2.5 bg-leather-brass text-leather-darkest font-bold text-xs rounded-lg hover:bg-leather-brass-light transition-colors shadow-md"
                  >
                    استعراض الألوان
                  </a>
                </div>
              </div>

              {/* Little Floating Social Proof Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-leather-darkest/95 backdrop-blur-md border border-leather-brass/40 rounded-xl p-3.5 shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-leather-cognac flex items-center justify-center font-bold text-leather-brass-light text-sm shadow">
                  ★ 4.9
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-leather-cream">+1,200 عميل راضٍ في مصر</div>
                  <div className="text-[10px] text-leather-parchment/70">تقييمات ممتازة وموثقة</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
