import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Phone,
  ArrowLeft,
  ArrowRight,
  Star,
  Check,
  Truck,
  Plus,
  Minus,
  Layers,
  Award
} from 'lucide-react';
import { PRODUCTS, STORE_WHATSAPP_NUMBER, STORE_PHONE_DISPLAY, TESTIMONIALS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import type { ProductColor } from '../types';

interface ProductDetailPageProps {
  initialColorIndex?: number;
  onBackToHome: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  initialColorIndex = 0,
  onBackToHome
}) => {
  const { t, language, isRTL } = useLanguage();
  const product = PRODUCTS[0];
  const colors = product.colors;

  const [selectedColorIndex, setSelectedColorIndex] = useState(
    initialColorIndex >= 0 && initialColorIndex < colors.length ? initialColorIndex : 0
  );
  const [quantity, setQuantity] = useState(1);

  const selectedColor = colors[selectedColorIndex];
  const currentProductName = language === 'en' ? (product.nameEn || product.name) : product.name;
  const currentCategoryName = language === 'en' ? (product.categoryNameEn || product.categoryName) : product.categoryName;
  const currentShortDesc = language === 'en' ? (product.shortDescriptionEn || product.shortDescription) : product.shortDescription;
  const currentColorName = (c: ProductColor) => (language === 'en' ? (c.nameEn || c.name) : c.name);

  const directWhatsAppOrder = () => {
    const colName = currentColorName(selectedColor);
    const text = encodeURIComponent(
      language === 'en'
        ? `Hello Seliem Leather, I would like to order The Artisan Dopp Kit:\n` +
          `📦 Product: ${currentProductName}\n` +
          `🎨 Color: ${colName}\n` +
          `🔢 Quantity: ${quantity}\n` +
          `📍 Please confirm the exclusive offer and courier inspection details.`
        : `مرحباً سليم للجلود، أود طلب حقيبة The Artisan Dopp Kit:\n` +
          `📦 المنتج: ${currentProductName}\n` +
          `🎨 اللون: ${colName}\n` +
          `🔢 الكمية: ${quantity}\n` +
          `📍 برجاء إفادتي بالعرض الحصري وميعاد التوصيل والمعاينة مع المندوب.`
    );
    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="py-8 sm:py-12 bg-leather-cream text-leather-espresso min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Back Navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-leather-brass/20">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-leather-espresso hover:bg-leather-dark text-leather-sand hover:text-white border border-leather-brass/40 transition-all duration-200 text-xs sm:text-sm font-bold shadow-sm active:scale-95 cursor-pointer"
          >
            <BackArrow className="w-4 h-4 text-leather-brass-light" />
            <span>{t.productShowcase.backToHome}</span>
          </button>

          <div className="text-xs text-leather-dark/70 font-medium">
            <span>{t.productShowcase.productBreadcrumb}</span>
          </div>
        </div>

        {/* Master Product Studio Grid (Mobile Optimized: Image & Order CTA upfront) */}
        <div className="bg-leather-espresso text-leather-cream rounded-3xl border-2 border-leather-brass/40 shadow-2xl overflow-hidden p-5 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Visuals Gallery (7 cols on LG) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Active Image Display */}
              <div className="relative h-72 sm:h-96 md:h-[440px] w-full rounded-2xl overflow-hidden bg-leather-darkest border border-leather-brass/40 shadow-inner group">
                <img
                  key={selectedColor.image}
                  src={selectedColor.image}
                  alt={`${currentProductName} - ${currentColorName(selectedColor)}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-500 ease-out animate-fade-in"
                />

                {/* Subtle Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end z-10">
                  <span className="bg-gradient-to-r from-leather-brass to-leather-brass-light text-leather-darkest text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg">
                    {language === 'en' ? 'Artisan Edition 2026' : 'إصدار حرفي 2026'}
                  </span>
                </div>

                <div className="absolute top-4 left-4 bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t.common.inspectBadge}</span>
                </div>

                {/* Active Color Label Overlay on Image */}
                <div className="absolute bottom-4 right-4 left-4 bg-leather-darkest/90 backdrop-blur-md border border-leather-brass/30 px-4 py-2.5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 rounded-full border border-white/60 shadow"
                      style={{ backgroundColor: selectedColor.code }}
                    />
                    <span className="text-xs sm:text-sm font-bold text-leather-sand">
                      {currentColorName(selectedColor)}
                    </span>
                  </div>
                  <span className="text-[11px] text-leather-honey font-semibold">
                    {language === 'en' ? 'Crazy Horse Full-Grain' : 'جلد بقري Crazy Horse'}
                  </span>
                </div>
              </div>

              {/* 4 Color Thumbnail Switchers */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                {colors.map((c, idx) => {
                  const isSelected = idx === selectedColorIndex;
                  return (
                    <button
                      key={c.code}
                      onClick={() => setSelectedColorIndex(idx)}
                      className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all duration-300 group cursor-pointer ${
                        isSelected
                          ? 'border-leather-brass shadow-lg shadow-leather-brass/20 scale-[1.02]'
                          : 'border-leather-dark/80 hover:border-leather-brass/50 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={c.image}
                        alt={currentColorName(c)}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                      {isSelected && (
                        <div className="absolute inset-0 bg-leather-brass/20 border-2 border-leather-brass rounded-xl flex items-center justify-center">
                          <Check className="w-5 h-5 text-white filter drop-shadow" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Product Specifications & Order Box (5 cols on LG) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Product Title & Subtitle */}
              <div className="space-y-2">
                <span className="text-xs text-leather-honey font-bold tracking-widest uppercase">
                  {currentCategoryName}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-leather-cream font-serif leading-tight">
                  {currentProductName}
                </h1>
                
                {/* Social Proof Rating */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-leather-sand">
                    4.9 / 5.0 (128 {t.common.ratingSuffix})
                  </span>
                </div>
              </div>

              {/* High-Converting Sales Box (NO NUMERICAL PRICE - Best Conversion Copy) */}
              <div className="bg-gradient-to-br from-leather-darkest via-leather-espresso to-leather-darkest border-2 border-leather-brass/40 rounded-2xl p-4 sm:p-5 shadow-xl space-y-2.5">
                <div className="flex items-center gap-2 text-leather-brass-light font-black text-sm sm:text-base">
                  <Sparkles className="w-5 h-5 text-leather-brass animate-pulse flex-shrink-0" />
                  <span>{t.productShowcase.salesOfferTag}</span>
                </div>
                <p className="text-xs sm:text-sm text-leather-sand leading-relaxed">
                  {t.productShowcase.salesOfferDesc}
                </p>
                <div className="pt-1 flex items-center gap-3 text-[11px] text-emerald-400 font-bold">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {language === 'en' ? 'Free Courier Inspection' : 'حق المعاينة الكاملة قبل الدفع'}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {language === 'en' ? 'Express Delivery' : 'شحن سريع لجميع المحافظات'}
                  </span>
                </div>
              </div>

              {/* Color Selection Palette */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-leather-sand">
                    {language === 'en' ? 'Select Your Color:' : 'اختر لون الحقيبة:'}
                  </span>
                  <span className="text-leather-brass-light font-bold">
                    {currentColorName(selectedColor)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {colors.map((c, idx) => {
                    const isSelected = idx === selectedColorIndex;
                    return (
                      <button
                        key={c.code}
                        onClick={() => setSelectedColorIndex(idx)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all text-left rtl:text-right cursor-pointer ${
                          isSelected
                            ? 'bg-leather-dark border-leather-brass text-leather-cream ring-1 ring-leather-brass'
                            : 'bg-leather-darkest/70 border-leather-dark/90 text-leather-parchment/80 hover:bg-leather-dark/60'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-white/40 flex-shrink-0"
                          style={{ backgroundColor: c.code }}
                        />
                        <span className="truncate">{currentColorName(c).split('(')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between bg-leather-dark/60 border border-leather-dark/90 rounded-xl p-2.5">
                <span className="text-xs font-bold text-leather-sand">
                  {language === 'en' ? 'Quantity' : 'الكمية المطلوبة'}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-leather-espresso hover:bg-leather-dark text-leather-cream border border-leather-brass/30 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-bold text-base text-leather-cream w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-leather-espresso hover:bg-leather-dark text-leather-cream border border-leather-brass/30 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Direct Primary Action: WhatsApp Order Button */}
              <button
                type="button"
                onClick={directWhatsAppOrder}
                className="w-full min-h-[52px] px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-950/70 hover:shadow-emerald-900/50 transition-all duration-300 transform active:scale-[0.98] border border-emerald-400/40 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white flex-shrink-0" />
                <span>{t.productShowcase.directWhatsAppBtn}</span>
              </button>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${STORE_PHONE_DISPLAY}`}
                className="w-full min-h-[44px] px-4 rounded-xl bg-leather-dark hover:bg-leather-espresso text-leather-sand hover:text-white border border-leather-brass/40 flex items-center justify-center gap-2 text-xs font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-leather-brass-light" />
                <span>
                  {language === 'en' ? `Call Sales: ${STORE_PHONE_DISPLAY}` : `اتصال مباشر بالورشة: ${STORE_PHONE_DISPLAY}`}
                </span>
              </a>

              {/* Trust Pillars Grid */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px] text-leather-parchment/80">
                <div className="bg-leather-dark/40 border border-leather-dark/60 rounded-xl p-2">
                  <ShieldCheck className="w-4 h-4 text-leather-brass mx-auto mb-1" />
                  <span className="font-bold block text-leather-cream">{t.productShowcase.badge1}</span>
                </div>
                <div className="bg-leather-dark/40 border border-leather-dark/60 rounded-xl p-2">
                  <Truck className="w-4 h-4 text-leather-brass mx-auto mb-1" />
                  <span className="font-bold block text-leather-cream">{t.productShowcase.badge2}</span>
                </div>
                <div className="bg-leather-dark/40 border border-leather-dark/60 rounded-xl p-2">
                  <Award className="w-4 h-4 text-leather-brass mx-auto mb-1" />
                  <span className="font-bold block text-leather-cream">{t.productShowcase.badge3}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* In-Depth Features & Craftsmanship Breakdown */}
        <div className="bg-leather-parchment/30 rounded-3xl border border-leather-brass/30 p-6 sm:p-10 mb-12">
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-leather-cognac">
              <Layers className="w-4 h-4" />
              <span>{language === 'en' ? 'Craftsmanship Deep Dive' : 'تفاصيل الصنعة والمواصفات'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-leather-espresso font-serif">
              {t.productShowcase.fullFeaturesTitle}
            </h2>
            <p className="text-sm text-leather-dark/80">
              {currentShortDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-5 border border-leather-brass/30 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-leather-espresso text-leather-brass-light flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-base text-leather-espresso">
                {language === 'en' ? '100% Genuine Full-Grain Cowhide' : 'جلد بقري طبيعي 100% (Crazy Horse)'}
              </h3>
              <p className="text-xs text-leather-dark/75 leading-relaxed">
                {language === 'en'
                  ? 'Vegetable-tanned full-grain leather that absorbs oils and builds an astonishing vintage patina over the years.'
                  : 'دباغة نباتية بدون مواد صناعية بنمط Crazy Horse الفاخر، يكتسب عتاقة ولمعاناً ساحراً مع الاستخدام.'}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-5 border border-leather-brass/30 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-leather-espresso text-leather-brass-light flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-base text-leather-espresso">
                {language === 'en' ? 'Heavy-Duty Antique Brass Zipper' : 'سحاب نحاسي عريض متين'}
              </h3>
              <p className="text-xs text-leather-dark/75 leading-relaxed">
                {language === 'en'
                  ? 'Rustproof antique brass teeth with a smooth glide across the full length for effortless opening.'
                  : 'سحاب نحاسي مقاوم للصدأ يفتح بسلاسة عبر كامل طول الحقيبة لسهولة الوصول للمقتنيات.'}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-5 border border-leather-brass/30 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-leather-espresso text-leather-brass-light flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-base text-leather-espresso">
                {language === 'en' ? 'Reinforced Leather Side Handle' : 'مقبض يد جانبي جلدي مقوى'}
              </h3>
              <p className="text-xs text-leather-dark/75 leading-relaxed">
                {language === 'en'
                  ? 'Double-stitched genuine leather handle for comfortable carrying and convenient bathroom or travel hanging.'
                  : 'مقبض يد جانبي معزز بخياطة مزدوجة لسهولة الحمل في السفر والتعليق في الحمام أو المكتب.'}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-5 border border-leather-brass/30 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-leather-espresso text-leather-brass-light flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-bold text-base text-leather-espresso">
                {language === 'en' ? 'Generous Volume (25 × 12 × 11 cm)' : 'حجم فسيح ومدروس (25 × 12 × 11 سم)'}
              </h3>
              <p className="text-xs text-leather-dark/75 leading-relaxed">
                {language === 'en'
                  ? 'Perfect dimensions accommodating perfumes, grooming kits, shaving razors, power banks, and smartphones.'
                  : 'أبعاد مثالية تتسع لأدوات الحلاقة، العطور، محفظة الجيب، الهاتف، والشواحن في مكان واحد منظم.'}
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-5 border border-leather-brass/30 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-leather-espresso text-leather-brass-light flex items-center justify-center font-bold">
                5
              </div>
              <h3 className="font-bold text-base text-leather-espresso">
                {language === 'en' ? 'Waxed Saddle Hand-Stitching' : 'خياطة يدوية بخيوط مشمعة معالجة'}
              </h3>
              <p className="text-xs text-leather-dark/75 leading-relaxed">
                {language === 'en'
                  ? 'Heavy bonded waxed thread resistant to fraying, moisture, and wear for generations of rugged use.'
                  : 'خياطة دقيقة بخيوط مشمعة عالية المتانة ومقاومة للماء والاحتكاك لتدوم معك عمراً كاملاً.'}
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-5 border border-leather-brass/30 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-leather-espresso text-leather-brass-light flex items-center justify-center font-bold">
                6
              </div>
              <h3 className="font-bold text-base text-leather-espresso">
                {language === 'en' ? 'Laser Engraving & Personalization' : 'خدمة الحفر الدقيق بالليزر'}
              </h3>
              <p className="text-xs text-leather-dark/75 leading-relaxed">
                {language === 'en'
                  ? 'Custom name or initial engraving available directly upon ordering via WhatsApp for bespoke gifting.'
                  : 'نوفر إمكانية حفر الأسماء والحروف الأولى أو لوجو الشركات للإهداءات الفاخرة عبر واتساب.'}
              </p>
            </div>
          </div>
        </div>

        {/* Courier Inspection Spotlight Banner */}
        <div className="bg-gradient-to-r from-emerald-950 via-leather-darkest to-emerald-950 text-white rounded-3xl border-2 border-emerald-500/40 p-6 sm:p-10 mb-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800/60 border border-emerald-400/50 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-emerald-200">
                {language === 'en' ? 'Full Freedom to Inspect Upon Delivery' : 'حق المعاينة الكاملة قبل دفع أي مليم'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl leading-relaxed">
                {t.productShowcase.inspectionNoticeBox}
              </p>
            </div>
          </div>

          <button
            onClick={directWhatsAppOrder}
            className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-leather-darkest font-black text-xs sm:text-sm shadow-xl transition-all active:scale-95 cursor-pointer"
          >
            {t.productShowcase.orderViaWhatsAppBtn}
          </button>
        </div>

        {/* Verified Customer Reviews */}
        <div className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-leather-espresso font-serif">
              {language === 'en' ? 'Customer Testimonials for This Dopp Kit' : 'تجارب وآراء العملاء مع الحقيبة'}
            </h2>
            <p className="text-xs sm:text-sm text-leather-dark/70">
              {language === 'en'
                ? 'Read real feedback from clients across Egypt who inspected and loved their Dopp Kit.'
                : 'آراء موثقة من عملاء استلموا الحقيبة وفحصوها بأنفسهم مع مندوب الشحن.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-leather-brass/30 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-leather-dark/60 font-medium">{item.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-leather-espresso/90 leading-relaxed font-normal">
                  «{item.comment}»
                </p>
                <div className="pt-2 border-t border-leather-parchment/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-leather-espresso">{item.name}</span>
                  <span className="text-[11px] text-leather-dark/60">{item.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="text-center pt-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-leather-espresso hover:bg-leather-dark text-leather-sand hover:text-white border border-leather-brass/40 font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <BackArrow className="w-4 h-4 text-leather-brass-light" />
            <span>{t.productShowcase.backToHome}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
