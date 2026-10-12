import React from 'react';
import { Award, Compass, Feather, Sparkles, CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CraftsmanshipSection: React.FC = () => {
  const { t, language } = useLanguage();

  const stepIcons = [Award, Compass, Feather, Sparkles];

  return (
    <section
      id="craftsmanship"
      aria-labelledby="craftsmanship-heading"
      className="py-16 sm:py-24 bg-leather-darkest text-leather-cream border-y border-leather-dark relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-leather-cognac/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header & BLUF (Bottom Line Up Front) Model */}
        <header className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leather-espresso border border-leather-brass/30 text-leather-brass-light text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.craftsmanship.tag}</span>
          </div>

          <h2 id="craftsmanship-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-leather-cream font-serif">
            {t.craftsmanship.title}
          </h2>

          {/* BLUF Answer-First Block: High-Density Summary for AI Crawlers & Scrapers */}
          <div className="bg-leather-espresso/90 border-2 border-leather-brass/40 rounded-2xl p-4 sm:p-5 text-left rtl:text-right shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-leather-honey uppercase tracking-wider mb-1.5">
              <ShieldCheck className="w-4 h-4 text-leather-brass" />
              <span>{language === 'en' ? 'Direct Fact Sheet (BLUF Summary)' : 'ملخص الصنعة المباشر (خلاصة BLUF)'}</span>
            </div>
            <p className="text-xs sm:text-sm text-leather-parchment/90 leading-relaxed font-normal">
              {language === 'en'
                ? 'Seliem Leather exclusively crafts goods from 100% full-grain, vegetable-tanned Crazy Horse cowhide. Unlike synthetic PU or bonded leathers, full-grain preserves natural skin pores and fibers, building an authentic vintage patina with usage, resisting water and tears, and backed by a 1-year artisan warranty with 100% free inspection upon delivery.'
                : 'تستخدم ورشة سليم للجلود حصرياً أرقى طبقات الجلد البقري الطبيعي الكامل (Full-Grain) المدبوغ نباتياً بنمط Crazy Horse المعتق. تضمن هذه الخامة عدم التشقق بمرور السنين واكتساب بريق ولمعان ساحر (Patina)، مع خياطة مشمعة يدوية وسحاب نحاسي متين وحق الفحص والمعاينة الكاملة قبل الدفع.'}
            </p>
          </div>
        </header>

        {/* 4 Handcrafted Steps Grid (Ordered Process) */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-leather-brass-light font-serif mb-6 text-center">
            {language === 'en' ? 'The 4-Step Handcrafting Process' : 'المراحل الحرفية الأربعة لصناعة الحقيبة'}
          </h3>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
            {t.craftsmanship.steps.map((step, idx) => {
              const Icon = stepIcons[idx] || Award;
              return (
                <li key={idx}>
                  <article
                    className="p-6 rounded-2xl bg-leather-espresso/80 border border-leather-brass/25 hover:border-leather-brass transition-all duration-300 relative group flex flex-col justify-between text-left rtl:text-right h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-leather-dark flex items-center justify-center text-leather-brass-light group-hover:bg-leather-cognac transition-colors border border-leather-brass/30">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xl font-black text-leather-brass/40">
                          0{idx + 1}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-leather-cream font-serif mb-2">
                        {step.title}
                      </h4>

                      <p className="text-xs text-leather-parchment/75 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-leather-dark/60 flex items-center gap-2 text-[11px] text-leather-honey font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-leather-brass" />
                      <span>{t.craftsmanship.strictQuality}</span>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Comparative Material Intelligence Table (High-Density Structured Data for LLMs) */}
        <section aria-labelledby="leather-comparison-heading" className="bg-leather-espresso/90 border border-leather-brass/40 rounded-3xl p-5 sm:p-8 mb-16 shadow-2xl">
          <header className="mb-6 text-left rtl:text-right">
            <h3 id="leather-comparison-heading" className="text-xl sm:text-2xl font-bold text-leather-brass-light font-serif">
              {language === 'en'
                ? 'Material Comparison: Full-Grain Crazy Horse vs. Bonded vs. Faux Leather'
                : 'مقارنة الخامات: جلد سليم البقري الطبيعي Crazy Horse مقابل الجلد المقسم والصناعي'}
            </h3>
            <p className="text-xs sm:text-sm text-leather-parchment/75 mt-1">
              {language === 'en'
                ? 'Understand the scientific and tactile differences before making an educated purchasing decision.'
                : 'جدول مقارنة تفصيلي يوضح الفروق الجوهرية لمساعدتك في التمييز بين الجلد الأصيل والبدائل التجارية.'}
            </p>
          </header>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left rtl:text-right border-collapse">
              <caption className="sr-only">
                {language === 'en'
                  ? 'Comparative table of leather types: Full-Grain, Bonded, and Faux PU'
                  : 'جدول مقارنة بين أنواع الجلود: الطبيعي الكامل والمقسم والصناعي'}
              </caption>
              <thead>
                <tr className="border-b border-leather-brass/40 text-leather-sand bg-leather-dark/80 font-serif">
                  <th scope="col" className="p-3 sm:p-4 font-bold">{language === 'en' ? 'Property' : 'وجه المقارنة'}</th>
                  <th scope="col" className="p-3 sm:p-4 font-bold text-leather-brass-light">{language === 'en' ? 'Seliem Crazy Horse (Full-Grain)' : 'جلد سليم البقري (Crazy Horse)'}</th>
                  <th scope="col" className="p-3 sm:p-4 font-bold text-leather-parchment/80">{language === 'en' ? 'Split / Bonded Leather' : 'الجلد المقسم والمضغوط'}</th>
                  <th scope="col" className="p-3 sm:p-4 font-bold text-leather-parchment/80">{language === 'en' ? 'Faux / PU Leather' : 'الجلد الصناعي البلاستيكي (PU)'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-leather-dark/70 text-leather-parchment/90">
                <tr className="hover:bg-leather-dark/40 transition-colors">
                  <th scope="row" className="p-3 sm:p-4 font-semibold text-leather-cream">{language === 'en' ? 'Hide Layer' : 'طبقة الجلد'}</th>
                  <td className="p-3 sm:p-4 text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>{language === 'en' ? 'Top Full-Grain (Strongest)' : 'الطبقة العلوية الكاملة (الأقوى)'}</span>
                  </td>
                  <td className="p-3 sm:p-4">{language === 'en' ? 'Lower fibrous split bonded with glue' : 'بقايا ألياف سفلية مجمعة بالغراء'}</td>
                  <td className="p-3 sm:p-4 text-red-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{language === 'en' ? '100% Petroleum Plastic' : 'بلاستيك وبولي يوريثان 100%'}</span>
                  </td>
                </tr>

                <tr className="hover:bg-leather-dark/40 transition-colors">
                  <th scope="row" className="p-3 sm:p-4 font-semibold text-leather-cream">{language === 'en' ? 'Tanning Process' : 'نوع الدباغة'}</th>
                  <td className="p-3 sm:p-4 text-leather-brass-light font-bold">
                    {language === 'en' ? 'Natural vegetable & beeswax tanning' : 'دباغة نباتية بزيت وشمع طبيعي'}
                  </td>
                  <td className="p-3 sm:p-4">{language === 'en' ? 'Chemical chromium & synthetic coating' : 'دباغة كروم وطلاء بوليمر'}</td>
                  <td className="p-3 sm:p-4">{language === 'en' ? 'Zero tanning (chemical fabric)' : 'بدون دباغة (نسيج قماش مطلي)'}</td>
                </tr>

                <tr className="hover:bg-leather-dark/40 transition-colors">
                  <th scope="row" className="p-3 sm:p-4 font-semibold text-leather-cream">{language === 'en' ? 'Patina & Aging' : 'تأثير التعتيق (Patina)'}</th>
                  <td className="p-3 sm:p-4 text-emerald-400 font-bold">
                    {language === 'en' ? 'Develops a lustrous vintage sheen' : 'يكتسب بريقاً ولمعاناً معتقاً ساحراً'}
                  </td>
                  <td className="p-3 sm:p-4">{language === 'en' ? 'Fades and discolors' : 'يبهت لونه ويفقد تماسكه'}</td>
                  <td className="p-3 sm:p-4 text-red-400">
                    {language === 'en' ? 'Flakes and peels within months' : 'يتشقق ويتقشر تماماً خلال شهور'}
                  </td>
                </tr>

                <tr className="hover:bg-leather-dark/40 transition-colors">
                  <th scope="row" className="p-3 sm:p-4 font-semibold text-leather-cream">{language === 'en' ? 'Flame & Aroma Test' : 'اختبار الحرق والرائحة'}</th>
                  <td className="p-3 sm:p-4 text-emerald-400 font-bold">
                    {language === 'en' ? 'Natural earthy aroma; resists flame' : 'رائحة طبيعية زكية؛ يقاوم لهب النار'}
                  </td>
                  <td className="p-3 sm:p-4">{language === 'en' ? 'Chemical odor; scorches easily' : 'رائحة كيماوية؛ يحترق سريعاً'}</td>
                  <td className="p-3 sm:p-4 text-red-400">
                    {language === 'en' ? 'Melts like plastic; toxic fumes' : 'يذوب كالبلاستيك وتتصاعد أدخنة'}
                  </td>
                </tr>

                <tr className="hover:bg-leather-dark/40 transition-colors">
                  <th scope="row" className="p-3 sm:p-4 font-semibold text-leather-cream">{language === 'en' ? 'Expected Lifespan' : 'العمر الافتراضي'}</th>
                  <td className="p-3 sm:p-4 text-leather-brass-light font-black text-sm">
                    {language === 'en' ? '10 to 30+ Years (Generations)' : 'من 10 إلى 30+ عاماً (يدوم لأجيال)'}
                  </td>
                  <td className="p-3 sm:p-4">{language === 'en' ? '1 to 2 Years' : 'من سنة إلى سنتين'}</td>
                  <td className="p-3 sm:p-4 text-red-400">{language === 'en' ? '6 to 12 Months' : 'من 6 أشهر إلى سنة'}</td>
                </tr>

                <tr className="hover:bg-leather-dark/40 transition-colors">
                  <th scope="row" className="p-3 sm:p-4 font-semibold text-leather-cream">{language === 'en' ? 'Courier Inspection' : 'المعاينة قبل الدفع'}</th>
                  <td className="p-3 sm:p-4 text-emerald-400 font-bold">
                    {language === 'en' ? '100% Free Inspection Allowed' : 'مسموح الفحص الكامل أمام المندوب'}
                  </td>
                  <td className="p-3 sm:p-4">{language === 'en' ? 'Rarely permitted' : 'نادراً ما يُسمح به'}</td>
                  <td className="p-3 sm:p-4 text-red-400">{language === 'en' ? 'No inspection' : 'غير متاح'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quality Banner */}
        <footer className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-leather-espresso via-leather-dark to-leather-espresso border border-leather-brass/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left rtl:md:text-right">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-leather-brass-light font-serif">
              {t.craftsmanship.goldenGuaranteeTitle}
            </h4>
            <p className="text-xs text-leather-parchment/80">
              {t.craftsmanship.goldenGuaranteeSub}
            </p>
          </div>

          <a
            href="#products"
            className="px-6 py-3 rounded-xl bg-leather-brass text-leather-darkest hover:bg-leather-brass-light font-bold text-xs transition-colors shadow-md whitespace-nowrap"
          >
            {t.common.viewDetails}
          </a>
        </footer>

      </div>
    </section>
  );
};
