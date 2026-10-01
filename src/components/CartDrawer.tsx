import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalAmount,
    setIsCheckoutOpen
  } = useCart();

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 1500;
  const differenceToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - totalAmount);
  const freeShippingProgress = Math.min(100, Math.round((totalAmount / FREE_SHIPPING_THRESHOLD) * 100));

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 pr-0 sm:pr-10">
        <div className="w-screen max-w-md bg-leather-darkest text-leather-cream border-r border-leather-brass/30 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-leather-dark flex items-center justify-between bg-leather-espresso/90">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-leather-dark text-leather-brass-light">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-leather-cream font-serif">سلة التسوق</h2>
                <span className="text-xs text-leather-honey">
                  {cart.length > 0 ? `${cart.length} منتجات في السلة` : 'سلتك فارغة'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-leather-parchment/60 hover:text-red-400 transition-colors p-1"
                  title="تفريغ السلة بالكامل"
                >
                  تفريغ
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-lg bg-leather-dark hover:bg-leather-espresso text-leather-cream border border-leather-dark transition-colors"
                aria-label="إغلاق السلة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Free Shipping Banner */}
          {cart.length > 0 && (
            <div className="bg-leather-dark px-5 py-3 border-b border-leather-dark/80">
              <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                {differenceToFreeShipping === 0 ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    🎉 مبروك! حصلت على شحن مجاني لكافة المحافظات
                  </span>
                ) : (
                  <span className="text-leather-parchment/90">
                    أضف منتجات بقيمة <strong className="text-leather-brass-light font-mono">{differenceToFreeShipping.toLocaleString('ar-EG')} ج.م</strong> للحصول على شحن مجاني
                  </span>
                )}
                <span className="text-leather-honey font-mono text-[11px]">{freeShippingProgress}%</span>
              </div>
              <div className="w-full bg-leather-espresso rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-leather-tan to-leather-brass h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-leather-espresso border border-leather-brass/20 flex items-center justify-center text-leather-parchment/40">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-leather-cream font-serif">سلة المشتريات فارغة حالياً</h3>
                <p className="text-xs text-leather-parchment/70 max-w-xs leading-relaxed">
                  تصفح تشكيلتنا الفاخرة من الحقائب والمحافظ والإكسسوارات الجلدية الطبيعية واختر ما يناسب ذوقك.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-leather-brass hover:bg-leather-brass-light text-leather-darkest font-bold text-xs shadow-md transition-colors"
                >
                  استكشف المنتجات الآن
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.uniqueKey}
                  className="p-3.5 rounded-2xl bg-leather-espresso border border-leather-dark flex gap-3 items-center group transition-colors"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 h-18 sm:w-20 sm:h-20 object-cover rounded-xl border border-leather-dark flex-shrink-0"
                  />

                  {/* Meta */}
                  <div className="flex-1 min-w-0 text-right">
                    <h4 className="text-xs sm:text-sm font-bold text-leather-cream truncate font-serif">
                      {item.name}
                    </h4>

                    {/* Color Swatch Badge */}
                    <div className="flex items-center gap-1.5 my-1">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-leather-brass/40 inline-block"
                        style={{ backgroundColor: item.selectedColor.code }}
                      />
                      <span className="text-[11px] text-leather-honey">
                        اللون: {item.selectedColor.name}
                      </span>
                    </div>

                    {/* Unit Price */}
                    <div className="text-xs font-bold text-leather-brass-light font-mono">
                      {item.price.toLocaleString('ar-EG')} ج.م
                    </div>

                    {/* Quantity & Delete Controls (Enlarged for touch comfort) */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-leather-dark/60">
                      <div className="inline-flex items-center rounded-xl bg-leather-dark border border-leather-darkest p-1 gap-1">
                        <button
                          onClick={() => updateQuantity(item.uniqueKey, item.quantity - 1)}
                          className="w-9 h-9 rounded-lg bg-leather-espresso hover:bg-leather-cognac text-leather-cream flex items-center justify-center transition-colors active:scale-90"
                          aria-label="إنقاص الكمية"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-9 text-center text-sm font-bold font-mono text-leather-cream">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.uniqueKey, item.quantity + 1)}
                          className="w-9 h-9 rounded-lg bg-leather-espresso hover:bg-leather-cognac text-leather-cream flex items-center justify-center transition-colors active:scale-90"
                          aria-label="زيادة الكمية"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.uniqueKey)}
                        className="w-10 h-10 rounded-xl bg-leather-dark hover:bg-red-950/60 text-leather-parchment/60 hover:text-red-400 flex items-center justify-center transition-colors border border-transparent hover:border-red-500/30"
                        title="حذف من السلة"
                        aria-label="حذف المنتج"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Bar */}
          {cart.length > 0 && (
            <div className="p-5 bg-leather-espresso/95 border-t border-leather-dark space-y-4">
              
              {/* Trust Tag */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-leather-parchment/80 bg-leather-dark/60 py-1.5 px-3 rounded-lg border border-leather-dark">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>دفع عند الاستلام بعد المعاينة والفحص الكامل</span>
              </div>

              {/* Subtotal & Total */}
              <div className="space-y-1.5 text-xs text-leather-parchment/90">
                <div className="flex justify-between">
                  <span>المجموع الفرعي:</span>
                  <span className="font-mono font-bold text-leather-cream">
                    {totalAmount.toLocaleString('ar-EG')} ج.م
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>مصاريف الشحن:</span>
                  <span className="font-mono font-bold text-leather-sand">
                    {totalAmount >= FREE_SHIPPING_THRESHOLD ? 'مجاناً' : 'تحدد حسب المحافظة (شحن رمزي)'}
                  </span>
                </div>
                <div className="pt-2 border-t border-leather-dark flex justify-between items-baseline text-sm">
                  <span className="font-bold text-leather-cream">الإجمالي التقريبي:</span>
                  <span className="text-xl font-black text-leather-brass-light font-mono">
                    {totalAmount.toLocaleString('ar-EG')} ج.م
                  </span>
                </div>
              </div>

              {/* Checkout Trigger CTA */}
              <button
                id="cart-checkout-btn"
                onClick={handleProceedToCheckout}
                className="w-full min-h-[54px] h-14 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-base shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-2.5 border border-emerald-400/40 active:scale-[0.98] transition-all"
              >
                <span>متابعة إتمام الطلب (واتساب)</span>
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
