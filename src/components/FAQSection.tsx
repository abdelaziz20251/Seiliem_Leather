import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 bg-leather-espresso text-leather-cream border-t border-leather-dark relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & BLUF Summary for Conversational LLM Retrieval */}
        <header className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-leather-dark border border-leather-brass/30 text-leather-sand text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-leather-brass" />
            <span>{t.faqs.tag}</span>
          </div>

          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-black text-leather-cream font-serif">
            {t.faqs.title}
          </h2>

          <p className="text-xs sm:text-sm text-leather-parchment/70 max-w-xl mx-auto">
            {t.faqs.subtitle}
          </p>

          {/* Answer-First (BLUF) Overview Card */}
          <div className="bg-leather-darkest/90 border border-leather-brass/35 rounded-2xl p-4 sm:p-5 text-left rtl:text-right mt-6 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-bold text-leather-brass-light mb-1">
              <ShieldCheck className="w-4 h-4 text-leather-brass flex-shrink-0" />
              <span>{language === 'en' ? 'Quick Policies Snapshot (Answer-First Summary)' : 'الخلاصة المباشرة لسياسات الشراء والفحص'}</span>
            </div>
            <p className="text-xs sm:text-sm text-leather-parchment/80 leading-relaxed font-normal">
              {language === 'en'
                ? 'All Seliem Leather orders include 100% free courier inspection before paying, 24-48h expedited delivery across Egypt, a 14-day hassle-free return window, and a 1-year artisan warranty on stitching and antique brass zippers.'
                : 'تتيح سليم للجلود حق المعاينة والفحص الكامل لجميع العملاء في مصر مع مندوب الشحن قبل دفع أي مبلغ، مع توصيل سريع خلال 24 إلى 48 ساعة، وضمان استبدال واسترجاع لمدة 14 يوماً، وضمان صيانة حرفي شامل لمدة عام كامل على الجلد الطبيعي 100% والإكسسوارات النحاسية.'}
            </p>
          </div>
        </header>

        {/* Semantic Conversational FAQ Accordions */}
        <div className="space-y-3.5">
          {t.faqs.items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={idx}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="rounded-2xl bg-leather-darkest border border-leather-dark/90 hover:border-leather-brass/40 transition-all duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full p-4 sm:p-5 text-left rtl:text-right flex items-center justify-between gap-4 hover:bg-leather-dark/40 transition-colors cursor-pointer focus:outline-none"
                >
                  <h3
                    itemProp="name"
                    className="text-sm sm:text-base font-bold text-leather-cream font-serif leading-snug"
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`w-7 h-7 rounded-full bg-leather-dark border border-leather-brass/20 flex items-center justify-center text-leather-brass-light flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-leather-cognac' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-leather-parchment/85 leading-relaxed border-t border-leather-dark/60 animate-fade-in text-left rtl:text-right"
                  >
                    <p itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
