import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, ShieldCheck, MessageCircle, Star, Sparkles, Check, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { ProductColor } from '../types';
import { STORE_WHATSAPP_NUMBER } from '../data/products';
import { ColorSelector } from './ColorSelector';

export const ProductQuickView: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, setIsCartOpen } = useCart();
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedColor(quickViewProduct.colors[0]);
      setQuantity(1);
      setIsAddedFeedback(false);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct || !selectedColor) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedColor, quantity);
    setIsAddedFeedback(true);
    setTimeout(() => {
      setIsAddedFeedback(false);
      setQuickViewProduct(null);
      setIsCartOpen(true);
    }, 600);
  };

  const directWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `مرحباً سليم للجلود، أود طلب المنتج التالي مباشرة:\n` +
      `📦 ${quickViewProduct.name}\n` +
      `🎨 اللون: ${selectedColor.name}\n` +
      `🔢 الكمية: ${quantity}\n` +
      `💰 السعر: ${(quickViewProduct.price * quantity).toLocaleString('ar-EG')} ج.م`
    );
    window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-leather-darkest border-2 border-leather-brass/40 rounded-3xl overflow-hidden shadow-2xl text-leather-cream text-right my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (Large Touch Target 44px) */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 left-4 z-20 w-11 h-11 rounded-full bg-leather-espresso/90 hover:bg-leather-dark text-leather-parchment hover:text-white border border-leather-brass/40 flex items-center justify-center shadow-lg transition-transform active:scale-95"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Product Image Section */}
          <div className="relative h-72 sm:h-96 md:h-full min-h-[300px] bg-black/60 overflow-hidden">
            <img
              key={selectedColor.image}
              src={selectedColor.image}
              alt={`${quickViewProduct.name} - ${selectedColor.name}`}
              className="w-full h-full object-cover object-center transition-all duration-300 animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-leather-darkest/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 right-4 bg-leather-darkest/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-leather-brass/40 text-xs font-bold text-leather-sand flex items-center gap-1.5 shadow-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>معاينة حرة قبل استلام الشحنة</span>
            </div>
          </div>

          {/* Product Information Section */}
          <div className="p-5 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-leather-honey uppercase tracking-wider">
                  {quickViewProduct.categoryName}
                </span>
                <div className="flex items-center gap-1 text-leather-brass text-xs">
                  <Star className="w-4 h-4 fill-current text-leather-brass" />
                  <span className="font-bold text-xs text-leather-cream">{quickViewProduct.rating}</span>
                  <span className="text-leather-parchment/60">({quickViewProduct.reviewsCount} تقييم)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-leather-cream font-serif leading-snug">
                {quickViewProduct.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-black text-leather-brass-light font-mono">
                  {quickViewProduct.price.toLocaleString('ar-EG')}
                </span>
                <span className="text-sm font-bold text-leather-parchment/80">جنيه مصري</span>
                {quickViewProduct.originalPrice && (
                  <span className="text-xs sm:text-sm text-leather-parchment/50 line-through">
                    {quickViewProduct.originalPrice.toLocaleString('ar-EG')} ج.م
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-leather-parchment/80 leading-relaxed">
                {quickViewProduct.shortDescription}
              </p>

              {/* Large Touch-Friendly Color Selector */}
              <div className="pt-2 border-t border-leather-dark">
                <ColorSelector
                  colors={quickViewProduct.colors}
                  selectedColor={selectedColor}
                  onSelectColor={setSelectedColor}
                  size="lg"
                />
              </div>

              {/* Handcrafted Specifications List */}
              <div className="space-y-2 pt-2 border-t border-leather-dark">
                <span className="text-xs font-bold text-leather-sand flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-leather-brass" />
                  <span>مواصفات الحرفة اليدوية:</span>
                </span>
                <ul className="space-y-1.5 text-xs text-leather-parchment/75">
                  {quickViewProduct.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-leather-brass font-bold mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4 pt-4 border-t border-leather-dark">
              {/* Quantity Selector with 44px Touch Targets */}
              <div className="flex items-center justify-between gap-4 bg-leather-espresso/70 p-3 rounded-2xl border border-leather-dark">
                <span className="text-xs font-bold text-leather-parchment/90">الكمية:</span>
                
                <div className="inline-flex items-center rounded-xl bg-leather-dark border border-leather-darkest p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 rounded-lg bg-leather-espresso hover:bg-leather-cognac text-leather-cream flex items-center justify-center transition-colors active:scale-90"
                    aria-label="إنقاص الكمية"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-base font-mono text-leather-cream">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 rounded-lg bg-leather-espresso hover:bg-leather-cognac text-leather-cream flex items-center justify-center transition-colors active:scale-90"
                    aria-label="زيادة الكمية"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="font-mono text-base font-black text-leather-brass-light">
                  {(quickViewProduct.price * quantity).toLocaleString('ar-EG')} ج.م
                </div>
              </div>

              {/* Action Buttons (Full Width on Mobile, Min 48px Height) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`w-full min-h-[50px] h-13 py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg active:scale-[0.98] ${
                    isAddedFeedback
                      ? 'bg-emerald-700 text-white'
                      : 'bg-gradient-to-r from-leather-cognac-rich via-leather-cognac to-leather-tan text-white border border-leather-brass/40 hover:shadow-leather-brass/30'
                  }`}
                >
                  {isAddedFeedback ? (
                    <>
                      <Check className="w-5 h-5 stroke-[3]" />
                      <span>تمت الإضافة للسلة!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>إضافة إلى سلة التسوق</span>
                    </>
                  )}
                </button>

                <button
                  onClick={directWhatsAppOrder}
                  className="w-full min-h-[50px] h-13 py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-950 to-emerald-900 hover:from-emerald-900 hover:to-emerald-800 text-emerald-100 border border-emerald-500/40 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
                  <span>طلب فوري بالواتساب</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
