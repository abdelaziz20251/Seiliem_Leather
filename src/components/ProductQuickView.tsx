import React, { useState, useEffect } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, MessageCircle, Star, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { ProductColor } from '../types';
import { STORE_WHATSAPP_NUMBER } from '../data/products';

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-leather-darkest border border-leather-brass/40 rounded-3xl overflow-hidden shadow-2xl text-leather-cream text-right my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-leather-espresso/90 hover:bg-leather-dark text-leather-parchment hover:text-white border border-leather-brass/30 transition-colors"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Product Image Section */}
          <div className="relative h-80 md:h-full min-h-[350px] bg-black/50 overflow-hidden">
            <img
              src={selectedColor.image}
              alt={`${quickViewProduct.name} - ${selectedColor.name}`}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-leather-darkest/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 right-4 bg-leather-darkest/90 px-3 py-1.5 rounded-lg border border-leather-brass/30 text-xs font-semibold text-leather-sand flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-leather-brass" />
              <span>معاينة حرة قبل استلام الشحنة</span>
            </div>
          </div>

          {/* Product Information Section */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-leather-honey uppercase tracking-wider">
                  {quickViewProduct.categoryName}
                </span>
                <div className="flex items-center gap-1 text-leather-brass text-xs">
                  <Star className="w-4 h-4 fill-current text-leather-brass" />
                  <span className="font-bold text-leather-cream">{quickViewProduct.rating}</span>
                  <span className="text-leather-parchment/60">({quickViewProduct.reviewsCount} تقييم)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-leather-cream font-serif">
                {quickViewProduct.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-black text-leather-brass-light font-mono">
                  {quickViewProduct.price.toLocaleString('ar-EG')}
                </span>
                <span className="text-sm font-bold text-leather-parchment/70">جنيه مصري</span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-leather-parchment/40 line-through">
                    {quickViewProduct.originalPrice.toLocaleString('ar-EG')} ج.م
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-leather-parchment/80 leading-relaxed">
                {quickViewProduct.shortDescription}
              </p>

              {/* Color Selector */}
              <div className="space-y-2 pt-2 border-t border-leather-dark">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-leather-parchment/90">
                    اللون المحدد: <strong className="text-leather-brass-light">{selectedColor.name}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  {quickViewProduct.colors.map((color, idx) => {
                    const isSelected = selectedColor.name === color.name;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`relative w-9 h-9 rounded-full transition-all duration-200 border-2 ${
                          isSelected
                            ? 'border-leather-brass ring-2 ring-leather-brass/50 scale-110'
                            : 'border-leather-dark hover:scale-105 opacity-80'
                        }`}
                        style={{ backgroundColor: color.code }}
                        title={color.name}
                      >
                        {isSelected && (
                          <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow">
                            <Check className="w-4 h-4 stroke-[3]" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Handcrafted Specifications List */}
              <div className="space-y-2 pt-2 border-t border-leather-dark">
                <span className="text-xs font-bold text-leather-honey flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-leather-brass" />
                  <span>مواصفات الحرفة اليدوية:</span>
                </span>
                <ul className="space-y-1.5 text-xs text-leather-parchment/75">
                  {quickViewProduct.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-leather-brass mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4 pt-4 border-t border-leather-dark">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-leather-parchment/80">الكمية:</span>
                <div className="inline-flex items-center rounded-xl bg-leather-espresso border border-leather-dark p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-lg bg-leather-dark hover:bg-leather-cognac text-leather-cream flex items-center justify-center font-bold text-sm transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm font-mono">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-lg bg-leather-dark hover:bg-leather-cognac text-leather-cream flex items-center justify-center font-bold text-sm transition-colors"
                  >
                    +
                  </button>
                </div>
                <div className="mr-auto text-left font-mono text-sm font-bold text-leather-brass-light">
                  {(quickViewProduct.price * quantity).toLocaleString('ar-EG')} ج.م
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                    isAddedFeedback
                      ? 'bg-emerald-700 text-white'
                      : 'bg-gradient-to-r from-leather-cognac-rich to-leather-cognac hover:from-leather-cognac hover:to-leather-tan text-white border border-leather-brass/40'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isAddedFeedback ? 'تمت الإضافة للسلة!' : 'إضافة إلى سلة التسوق'}</span>
                </button>

                <button
                  onClick={directWhatsAppOrder}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-600/40 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>طلب مباشر بالواتساب</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
