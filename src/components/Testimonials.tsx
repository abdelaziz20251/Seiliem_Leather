import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-leather-cream text-leather-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-leather-cognac tracking-wider uppercase">
            تجارب حقيقية موثقة
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-leather-espresso font-serif">
            ماذا يقول عملاؤنا عن جودة سليم؟
          </h2>
          <p className="text-xs sm:text-sm text-leather-dark/70">
            فخورون بثقة أكثر من 1,200 عميل في كافة محافظات مصر، وآراؤهم هي وسام شرف على صدورنا.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-leather-parchment shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-leather-tan/20 mb-3" />
                
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-leather-brass mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-leather-dark/85 leading-relaxed mb-6 font-normal">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-leather-parchment flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-leather-espresso font-serif">
                    {item.name}
                  </h4>
                  <span className="text-[11px] text-leather-dark/60 block">
                    {item.city}
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full border border-emerald-200">
                  <CheckCircle className="w-3 h-3" />
                  <span>مشتري موثق</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
