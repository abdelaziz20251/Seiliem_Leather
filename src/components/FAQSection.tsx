import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faqs" className="py-20 bg-leather-espresso text-leather-cream border-t border-leather-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-leather-dark border border-leather-brass/30 text-leather-sand text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-leather-brass" />
            <span>إجابات واضحة لراحتك</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-leather-cream font-serif">
            الأسئلة الشائعة وسياسة الشراء
          </h2>

          <p className="text-xs sm:text-sm text-leather-parchment/70">
            كل ما تحتاج لمعرفته حول المعاينة، نوع الجلد، الشحن، والضمان قبل تأكيد طلبك.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-leather-darkest border border-leather-dark overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 hover:bg-leather-dark/40 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-leather-cream font-serif">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-leather-dark border border-leather-brass/20 flex items-center justify-center text-leather-brass-light flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-leather-cognac' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-leather-parchment/80 leading-relaxed border-t border-leather-dark/60 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
