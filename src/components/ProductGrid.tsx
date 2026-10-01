import React, { useState } from 'react';
import { PRODUCTS, STORE_WHATSAPP_NUMBER } from '../data/products';
import { ProductCard } from './ProductCard';
import { Sparkles, Layers } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'جميع المنتجات', count: PRODUCTS.length },
    { id: 'bags', label: 'شنط جلد طبيعي', count: PRODUCTS.filter((p) => p.category === 'bags').length },
    { id: 'wallets', label: 'محافظ جلدية', count: PRODUCTS.filter((p) => p.category === 'wallets').length },
    { id: 'bracelets', label: 'إكسسوارات وأساور', count: PRODUCTS.filter((p) => p.category === 'bracelets').length },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory);

  return (
    <section id="products" className="py-16 lg:py-24 bg-leather-cream text-leather-espresso relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-leather-parchment border border-leather-brass/30 text-leather-cognac text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-leather-brass" />
            <span>تشكيلة حصرية مصنوعة يدوياً</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-leather-espresso font-serif">
            روائع المصنوعات الجلدية
          </h2>

          <p className="text-sm sm:text-base text-leather-dark/75 leading-relaxed">
            استكشف مجموعتنا الفاخرة من الجلد الطبيعي الأصلي 100%. كل قطعة تم قصها وخياطتها بعناية لتعكس شخصيتك الراقية وتتحمل الاستخدام الشاق لسنوات.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 min-h-[44px] sm:min-h-[40px] rounded-full text-xs sm:text-sm font-bold transition-all duration-300 active:scale-95 touch-manipulation ${
                  isActive
                    ? 'bg-leather-espresso text-leather-cream shadow-lg shadow-leather-espresso/20 scale-105 border border-leather-brass'
                    : 'bg-white text-leather-dark/80 hover:bg-leather-parchment border border-leather-parchment hover:border-leather-brass/40'
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    isActive ? 'bg-leather-brass text-leather-darkest' : 'bg-leather-parchment text-leather-dark'
                  }`}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-16 bg-gradient-to-r from-leather-parchment via-white to-leather-parchment border border-leather-brass/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-leather-espresso flex items-center justify-center text-leather-brass-light flex-shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-leather-espresso font-serif">
                هل تبحث عن تصميم خاص أو إهداء مميز باسمك؟
              </h4>
              <p className="text-xs text-leather-dark/75 mt-0.5">
                نوفر خدمة الحفر بالليزر والأسماء المخصصة للشركات والإهداءات الشخصية عبر واتساب.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%AD%D9%81%D8%B1%20%D9%88%D8%A7%D9%84%D8%AA%D8%AE%D8%B5%D9%8A%D8%B5%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-leather-espresso hover:bg-leather-dark text-leather-cream text-xs font-bold transition-colors border border-leather-brass/40 shadow"
          >
            تحدث مع الحِرفي في واتساب
          </a>
        </div>

      </div>
    </section>
  );
};
