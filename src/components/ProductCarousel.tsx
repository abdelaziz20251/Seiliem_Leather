import React, { useState, useRef } from 'react';
import {
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Eye,
  Check
} from 'lucide-react';
import { PRODUCTS, STORE_WHATSAPP_NUMBER } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import type { ProductColor } from '../types';

interface ProductCarouselProps {
  onSelectProduct: (colorIndex?: number) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ onSelectProduct }) => {
  const { t, language, isRTL } = useLanguage();
  const product = PRODUCTS[0];
  const colors = product.colors;

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const activeColor = colors[currentIndex];
  const currentColorName = (c: ProductColor) => (language === 'en' ? (c.nameEn || c.name) : c.name);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? colors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === colors.length - 1 ? 0 : prev + 1));
  };

  // Swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isRTL) {
      if (isLeftSwipe) handlePrev();
      if (isRightSwipe) handleNext();
    } else {
      if (isLeftSwipe) handleNext();
      if (isRightSwipe) handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const directWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const colName = currentColorName(activeColor);
    const text = encodeURIComponent(
      language === 'en'
        ? `Hello Seliem Leather, I would like to order The Artisan Dopp Kit in color: ${colName}. Please provide today's exclusive offer and delivery inspection details.`
        : `مرحباً سليم للجلود، أرغب في طلب حقيبة The Artisan Dopp Kit باللون: ${colName}. برجاء إفادتي بالعرض الحصري وتفاصيل المعاينة مع المندوب.`
    );
    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const ArrowForward = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="products" className="py-10 sm:py-16 lg:py-20 bg-leather-cream text-leather-espresso relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-leather-parchment border border-leather-brass/30 text-leather-cognac text-xs sm:text-sm font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-leather-brass" />
            <span>{t.productShowcase.tag}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-leather-espresso font-serif">
            {t.productShowcase.title}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-leather-dark/80 leading-relaxed max-w-xl mx-auto">
            {language === 'en'
              ? 'Browse the 4 iconic vintage shades below. Click any slide to explore the full product specifications & order directly.'
              : 'استعرض درجات الألوان الأربعة الأيقونية في الكاروسيل، واضغط على المنتج للانتقال لصفحة المواصفات الكاملة والطلب.'}
          </p>
        </div>

        {/* Carousel Showcase Card (Engineered for Mobile: No Vertical Overflow) */}
        <div className="max-w-4xl mx-auto">
          <div
            className="group relative bg-leather-espresso text-leather-cream rounded-2xl sm:rounded-3xl border-2 border-leather-brass/40 shadow-2xl overflow-hidden transition-all duration-300"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            
            {/* Visual Canvas */}
            <div
              onClick={() => onSelectProduct(currentIndex)}
              className="relative cursor-pointer select-none bg-leather-darkest"
            >
              {/* Product Image: Responsive Height Tuned to fit in mobile screen */}
              <div className="relative h-60 sm:h-80 md:h-96 w-full overflow-hidden">
                <img
                  key={activeColor.image}
                  src={activeColor.image}
                  alt={`${product.name} - ${currentColorName(activeColor)}`}
                  width={800}
                  height={600}
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-700 ease-out animate-fade-in"
                  loading="eager"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-leather-darkest/95 via-leather-darkest/20 to-black/30 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                  <span className="bg-gradient-to-r from-leather-brass to-leather-brass-light text-leather-darkest text-[11px] sm:text-xs font-black px-3 py-1 rounded-full shadow-md">
                    {language === 'en' ? 'Crazy Horse Leather 100%' : 'جلد طبيعي 100%'}
                  </span>
                </div>

                <div className="absolute top-3 left-3 bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t.common.inspectBadge}</span>
                </div>

                {/* Overlay Hint to Click & Explore */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] pointer-events-none">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-leather-brass text-leather-darkest font-black text-xs sm:text-sm shadow-xl transform scale-95 group-hover:scale-100 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>{language === 'en' ? 'Click to view product page' : 'اضغط لاستعراض صفحة المنتج'}</span>
                  </span>
                </div>

                {/* Prev & Next Carousel Arrows */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    isRTL ? handleNext() : handlePrev();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-leather-darkest/80 hover:bg-leather-espresso text-leather-cream border border-leather-brass/40 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 z-20 cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    isRTL ? handlePrev() : handleNext();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-leather-darkest/80 hover:bg-leather-espresso text-leather-cream border border-leather-brass/40 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 z-20 cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Bottom Meta & Interactive Color Controls (Compact for mobile UX) */}
            <div className="p-4 sm:p-6 bg-gradient-to-b from-leather-espresso to-leather-darkest border-t border-leather-dark space-y-3.5">
              
              {/* Color Name & Swatches Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <div>
                  <span className="text-[11px] text-leather-honey font-semibold tracking-wider uppercase block">
                    {language === 'en' ? `Color ${currentIndex + 1} of ${colors.length}` : `اللون ${currentIndex + 1} من ${colors.length}`}
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-leather-cream font-serif">
                    {currentColorName(activeColor)}
                  </h3>
                </div>

                {/* Color Swatch Dots */}
                <div className="flex items-center gap-2 pt-1 sm:pt-0">
                  {colors.map((c, idx) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center ${
                        idx === currentIndex
                          ? 'ring-2 ring-leather-brass ring-offset-2 ring-offset-leather-espresso scale-110'
                          : 'opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.code }}
                      title={currentColorName(c)}
                      aria-label={currentColorName(c)}
                    >
                      {idx === currentIndex && (
                        <Check className="w-3.5 h-3.5 text-white stroke-[3] filter drop-shadow" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* High-Converting Sales Banner (Replacing Old Price) */}
              <div className="bg-gradient-to-r from-leather-dark/90 to-leather-espresso/90 border border-leather-brass/30 rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-leather-brass-light font-bold">
                  <Sparkles className="w-4 h-4 text-leather-brass flex-shrink-0 animate-pulse" />
                  <span>
                    {language === 'en'
                      ? 'Exclusive Offer Available • Free Inspection Before Payment'
                      : 'العرض الحصري متاح الآن • معاينة مجانية وفحص كامل قبل الدفع'}
                  </span>
                </div>
                <span className="hidden md:inline-block text-[11px] text-emerald-400 font-bold bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                  {language === 'en' ? 'In Stock' : 'متوفر للشحن الفوري'}
                </span>
              </div>

              {/* Action Buttons: Navigate to Product Page or Quick WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {/* Primary: Dedicated Product Page */}
                <button
                  type="button"
                  onClick={() => onSelectProduct(currentIndex)}
                  className="w-full h-11 sm:h-12 px-4 rounded-xl bg-gradient-to-r from-leather-cognac-rich to-leather-cognac hover:from-leather-cognac hover:to-leather-tan text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-leather-cognac/30 hover:shadow-leather-brass/20 transition-all duration-300 transform active:scale-[0.98] border border-leather-brass/40 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>{t.productShowcase.viewProductSpecsBtn}</span>
                  <ArrowForward className="w-4 h-4" />
                </button>

                {/* Secondary: Instant WhatsApp Order */}
                <button
                  type="button"
                  onClick={directWhatsAppOrder}
                  className="w-full h-11 sm:h-12 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/50 text-[#25D366] hover:text-emerald-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.productShowcase.orderViaWhatsAppBtn}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
