import React from 'react';
import { Award, Compass, Feather, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CraftsmanshipSection: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [Award, Compass, Feather, Sparkles];

  return (
    <section id="craftsmanship" className="py-20 bg-leather-darkest text-leather-cream border-y border-leather-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-leather-cognac/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leather-espresso border border-leather-brass/30 text-leather-brass-light text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.craftsmanship.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-leather-cream font-serif">
            {t.craftsmanship.title}
          </h2>

          <p className="text-sm sm:text-base text-leather-parchment/80 leading-relaxed">
            {t.craftsmanship.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.craftsmanship.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Award;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-leather-espresso/80 border border-leather-brass/25 hover:border-leather-brass transition-all duration-300 relative group flex flex-col justify-between text-left rtl:text-right"
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

                  <h3 className="text-base font-bold text-leather-cream font-serif mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-leather-parchment/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-leather-dark/60 flex items-center gap-2 text-[11px] text-leather-honey font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-leather-brass" />
                  <span>{t.craftsmanship.strictQuality}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-leather-espresso via-leather-dark to-leather-espresso border border-leather-brass/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left rtl:md:text-right">
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
        </div>

      </div>
    </section>
  );
};
