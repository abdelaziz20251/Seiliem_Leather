import React from 'react';
import { ShieldCheck, Eye, MessageSquare, Hammer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TrustBadges: React.FC = () => {
  const { t } = useLanguage();

  const icons = [ShieldCheck, Eye, MessageSquare, Hammer];

  return (
    <section className="bg-leather-espresso text-leather-cream py-10 border-b border-leather-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.trustBadges.map((badge, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="group relative p-5 rounded-2xl bg-leather-darkest/70 border border-leather-brass/25 hover:border-leather-brass transition-all duration-300 hover:shadow-xl hover:shadow-leather-brass/5 text-left rtl:text-right"
              >
                <div className="w-12 h-12 rounded-xl bg-leather-espresso border border-leather-brass/30 flex items-center justify-center text-leather-brass-light mb-4 group-hover:scale-110 group-hover:bg-leather-cognac transition-all duration-300">
                  <Icon className="w-6 h-6 text-leather-brass-light" />
                </div>
                <h3 className="text-base font-bold text-leather-cream mb-1 font-serif">
                  {badge.title}
                </h3>
                <p className="text-xs text-leather-parchment/75 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
