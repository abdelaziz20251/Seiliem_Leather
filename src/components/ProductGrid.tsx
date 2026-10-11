import React, { useState } from 'react';
import { PRODUCTS, STORE_WHATSAPP_NUMBER } from '../data/products';
import { useCart } from '../context/CartContext';
import {
  Sparkles,
  ShoppingBag,
  MessageCircle,
  Star,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  Check,
  Layers,
  Palette
} from 'lucide-react';
import type { ProductColor } from '../types';

export const ProductGrid: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const product = PRODUCTS[0];
  
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [isAddedFeedback, setIsAddedFeedback] = useState<boolean>(false);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, selectedColor, quantity);
    setIsAddedFeedback(true);
    setTimeout(() => {
      setIsAddedFeedback(false);
      setIsCartOpen(true);
    }, 600);
  };

  const directWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `مرحباً سليم للجلود، أود طلب الحقيبة التالية مباشرة:\n` +
      `📦 ${product.name}\n` +
      `🎨 اللون المختار: ${selectedColor.name}\n` +
      `🔢 الكمية: ${quantity}\n` +
      `💰 الإجمالي: ${(product.price * quantity).toLocaleString('ar-EG')} ج.م\n` +
      `📍 برجاء إفادتي بميعاد التوصيل والمعاينة مع المندوب.`
    );
    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleSelectColorCard = (color: ProductColor) => {
    setSelectedColor(color);
    // Smooth scroll to top of showcase on mobile
    const showcaseElem = document.getElementById('product-showcase');
    if (showcaseElem) {
      showcaseElem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section id="products" className="py-16 lg:py-24 bg-leather-cream text-leather-espresso relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leather-parchment border border-leather-brass/30 text-leather-cognac text-xs sm:text-sm font-bold shadow-sm">
            <Sparkles className="w-4 h-4 text-leather-brass" />
            <span>القطعة الحرفية الأيقونية لعام 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-leather-espresso font-serif">
            حقيبة المستلزمات واليد الفاخرة
          </h2>

          <p className="text-sm sm:text-base text-leather-dark/80 leading-relaxed">
            صُممت بعناية فائقة لتكون رفيقك الدائم في يومك وسفرك. مقتنى كلاسيكي من الجلد الطبيعي البقري 100% بنمط Crazy Horse يجمع بين متانة الحرفة وسحر العتاقة المتجدد.
          </p>
        </div>

        {/* Master Interactive Product Showcase Studio */}
        <div
          id="product-showcase"
          className="bg-leather-espresso text-leather-cream rounded-3xl border-2 border-leather-brass/40 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Visuals Gallery (Right in RTL - 7 Cols on LG) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Active Image Display */}
              <div className="relative h-80 sm:h-[430px] w-full rounded-2xl overflow-hidden bg-leather-darkest border border-leather-brass/40 shadow-inner group">
                <img
                  key={selectedColor.image}
                  src={selectedColor.image}
                  alt={`${product.name} - ${selectedColor.name}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-500 ease-out animate-fade-in"
                />

                {/* Subtle Ambient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Top Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end z-10">
                  <span className="bg-gradient-to-r from-leather-brass to-leather-brass-light text-leather-darkest text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg">
                    {product.badge}
                  </span>
                  {discountPercentage > 0 && (
                    <span className="bg-red-800/95 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      خصم {discountPercentage}%
                    </span>
                  )}
                </div>

                {/* Inspection Guarantee Tag */}
                <div className="absolute top-4 left-4 bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>معاينة حرة قبل الدفع</span>
                </div>

                {/* Color Label Overlay on Image */}
                <div className="absolute bottom-4 right-4 left-4 bg-leather-darkest/85 backdrop-blur-md border border-leather-brass/30 px-4 py-2.5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/50"
                      style={{ backgroundColor: selectedColor.code }}
                    />
                    <span className="text-xs sm:text-sm font-bold text-leather-cream">
                      اللون المعروض: {selectedColor.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-leather-honey font-semibold">
                    جلد طبيعي Crazy Horse
                  </span>
                </div>
              </div>

              {/* 4 Color Thumbnails Selector */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-leather-sand">
                  <span className="font-semibold flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-leather-brass" />
                    اضغط على أي لون للتبديل الفوري للصورة:
                  </span>
                  <span className="text-leather-honey">4 ألوان أصلية</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor.name === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2.5 p-2 rounded-xl text-right transition-all duration-200 border text-xs ${
                          isSelected
                            ? 'bg-leather-darkest border-leather-brass ring-2 ring-leather-brass shadow-lg'
                            : 'bg-leather-espresso/80 border-leather-brass/30 hover:border-leather-brass/70 hover:bg-leather-dark/60 text-leather-parchment'
                        }`}
                      >
                        <img
                          src={color.image}
                          alt={color.name}
                          className="w-11 h-11 rounded-lg object-cover flex-shrink-0 border border-leather-brass/30"
                        />
                        <div className="flex-grow min-w-0">
                          <div className="font-bold text-[11px] sm:text-xs truncate text-leather-cream">
                            {color.name.split(' (')[0]}
                          </div>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block border border-white/40"
                              style={{ backgroundColor: color.code }}
                            />
                            <span className="text-[10px] text-leather-honey">
                              {isSelected ? 'محدد' : 'عرض'}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Product Details & Actions (Left in RTL - 5 Cols on LG) */}
            <div className="lg:col-span-5 space-y-6 text-right">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between border-b border-leather-dark pb-3">
                <span className="text-xs font-bold text-leather-honey bg-leather-darkest px-3 py-1 rounded-full border border-leather-brass/30">
                  {product.categoryName}
                </span>

                <div className="flex items-center gap-1.5 text-leather-brass">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-leather-brass" />
                    ))}
                  </div>
                  <span className="font-bold text-xs text-leather-cream">{product.rating}</span>
                  <span className="text-leather-parchment/70 text-[11px]">({product.reviewsCount} تقييم موثق)</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-leather-cream font-serif leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-leather-parchment/80 mt-2 leading-relaxed font-normal">
                  {product.shortDescription}
                </p>
              </div>

              {/* Price Block */}
              <div className="bg-leather-darkest/90 border border-leather-brass/30 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-leather-sand font-medium">السعر بعد الخصم:</div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-black text-leather-brass-light font-mono">
                      {product.price.toLocaleString('ar-EG')} ج.م
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-leather-parchment/60 line-through font-mono">
                        {product.originalPrice.toLocaleString('ar-EG')} ج.م
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-left">
                  <span className="inline-block bg-emerald-950/80 text-emerald-300 text-xs font-bold px-3 py-1 rounded-lg border border-emerald-500/40">
                    وفر {(product.originalPrice! - product.price).toLocaleString('ar-EG')} ج.م
                  </span>
                  <span className="block text-[10px] text-leather-sand/70 mt-1">
                    شحن لجميع المحافظات
                  </span>
                </div>
              </div>

              {/* Color Swatch Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-leather-sand flex items-center justify-between">
                  <span>اللون المختار للطلب:</span>
                  <span className="text-leather-brass-light font-bold">{selectedColor.name}</span>
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor.name === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                          isSelected
                            ? 'bg-leather-darkest text-leather-brass-light border-2 border-leather-brass shadow-md scale-105'
                            : 'bg-leather-dark/60 text-leather-parchment hover:text-white border border-leather-brass/30'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white/50"
                          style={{ backgroundColor: color.code }}
                        />
                        <span>{color.name.split(' (')[0]}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-leather-brass" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Key Handcrafted Highlights */}
              <div className="bg-leather-dark/40 border border-leather-brass/20 rounded-xl p-3.5 space-y-2 text-xs text-leather-parchment">
                <div className="font-bold text-leather-sand flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-leather-brass" />
                  <span>المواصفات الحرفية للحقيبة:</span>
                </div>
                <ul className="space-y-1.5 text-[11px] sm:text-xs pr-4 list-disc text-leather-parchment/90">
                  <li>جلد بقري طبيعي 100% بنمط Crazy Horse المعتق.</li>
                  <li>سحاب نحاسي عريض متين مع مقبض يد جلدي جانبي مقوى.</li>
                  <li>حجم فسيح (25×12×11 سم) يتسع لأدوات الحلاقة، العطور، والهواتف.</li>
                  <li>خياطة مشمعة يدوية فائقة القوة ومقاومة للاهتراء.</li>
                </ul>
              </div>

              {/* Quantity & Add to Cart Controls */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  {/* Quantity Counter */}
                  <div className="flex items-center bg-leather-darkest border border-leather-brass/40 rounded-xl px-2 py-1 shadow-inner">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-9 h-9 rounded-lg hover:bg-leather-dark text-leather-parchment flex items-center justify-center transition-colors active:scale-95"
                      aria-label="إنقاص الكمية"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-base text-leather-cream font-mono">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-9 h-9 rounded-lg hover:bg-leather-dark text-leather-parchment flex items-center justify-center transition-colors active:scale-95"
                      aria-label="زيادة الكمية"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart CTA */}
                  <button
                    onClick={handleAddToCart}
                    id="add-to-cart-master-btn"
                    className={`flex-grow flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-xl active:scale-95 border ${
                      isAddedFeedback
                        ? 'bg-emerald-600 border-emerald-400 text-white shadow-emerald-900/40'
                        : 'bg-gradient-to-r from-leather-cognac-rich to-leather-cognac hover:from-leather-cognac hover:to-leather-tan text-white border-leather-brass/40 shadow-leather-cognac/30 hover:shadow-leather-brass/20'
                    }`}
                  >
                    {isAddedFeedback ? (
                      <>
                        <Check className="w-5 h-5 text-white" />
                        <span>تمت الإضافة للسلة بنجاح!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        <span>أضف إلى السلة ({((product.price * quantity)).toLocaleString('ar-EG')} ج.م)</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct WhatsApp Order CTA */}
                <button
                  onClick={directWhatsAppOrder}
                  id="direct-whatsapp-order-btn"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-leather-darkest hover:bg-leather-dark text-leather-cream hover:text-white font-bold text-sm border border-leather-brass/40 hover:border-leather-brass transition-all duration-300 shadow-md active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                  <span>طلب فوري مباشر عبر واتساب (معاينة قبل الدفع)</span>
                </button>
              </div>

              {/* Guarantees Strip */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-leather-dark text-center text-[10px] sm:text-[11px] text-leather-sand">
                <div className="p-2 rounded-lg bg-leather-darkest/60 border border-leather-brass/20 flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-leather-brass" />
                  <span>معاينة وفحص 100%</span>
                </div>
                <div className="p-2 rounded-lg bg-leather-darkest/60 border border-leather-brass/20 flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-leather-brass" />
                  <span>شحن سريع للمحافظات</span>
                </div>
                <div className="p-2 rounded-lg bg-leather-darkest/60 border border-leather-brass/20 flex flex-col items-center gap-1">
                  <RotateCcw className="w-4 h-4 text-leather-brass" />
                  <span>ضمان صيانة عام كامل</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Distinct Color Variations Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-leather-espresso font-serif">
              استكشف درجات الألوان الأربعة الفاخرة
            </h3>
            <p className="text-xs sm:text-sm text-leather-dark/75">
              كل لون تم اختياره وصباغته بعناية فائقة ليعكس شخصيتك، والجلد الطبيعي يكتسب بريقاً ساحراً وعتاقة أجمل مع مرور الوقت.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.colors.map((color, index) => {
              const isSelected = selectedColor.name === color.name;
              return (
                <div
                  key={color.name}
                  onClick={() => handleSelectColorCard(color)}
                  className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl cursor-pointer ${
                    isSelected
                      ? 'border-leather-brass ring-2 ring-leather-brass shadow-leather-espresso/20'
                      : 'border-leather-parchment hover:border-leather-brass/60'
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative h-60 w-full overflow-hidden bg-leather-parchment/40">
                    <img
                      src={color.image}
                      alt={color.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Badge */}
                    <div className="absolute top-3 right-3 bg-leather-darkest/85 backdrop-blur-md text-leather-sand text-[10px] font-bold px-2.5 py-1 rounded-full border border-leather-brass/30">
                      خيار #{index + 1}
                    </div>

                    {isSelected && (
                      <div className="absolute top-3 left-3 bg-leather-brass text-leather-darkest text-[11px] font-black px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>محدد الآن</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-3 text-right flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] text-leather-cognac font-bold">
                          جلد Crazy Horse أصلي
                        </span>
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-gray-300 shadow-sm"
                          style={{ backgroundColor: color.code }}
                        />
                      </div>
                      <h4 className="text-sm font-bold text-leather-espresso font-serif group-hover:text-leather-cognac transition-colors">
                        {color.name}
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectColorCard(color);
                      }}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-leather-espresso text-leather-cream border border-leather-brass'
                          : 'bg-leather-parchment/60 hover:bg-leather-espresso hover:text-white text-leather-espresso border border-leather-parchment'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-leather-brass" />
                          <span>اللون النشط في المعاينة</span>
                        </>
                      ) : (
                        <span>اختر هذا اللون للمعاينة والطلب</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-16 bg-gradient-to-r from-leather-parchment via-white to-leather-parchment border border-leather-brass/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-leather-espresso flex items-center justify-center text-leather-brass-light flex-shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-leather-espresso font-serif">
                هل تبحث عن حفر اسم أو إهداء خاص على الحقيبة؟
              </h4>
              <p className="text-xs text-leather-dark/75 mt-0.5">
                نوفر خدمة الحفر الدقيق بالليزر للأسماء والحروف الأولى للشركات والإهداءات الشخصية عبر واتساب.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'مرحباً سليم للجلود، أود الاستفسار عن خدمة حفر الأسماء والإهداءات على حقيبة The Artisan Dopp Kit.'
            )}`}
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
