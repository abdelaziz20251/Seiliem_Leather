import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

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
  const { t, language, isRTL, formatPrice } = useLanguage();

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

      <div className={`fixed inset-y-0 ${isRTL ? 'left-0' : 'right-0'} max-w-full flex`}>
        <div className="w-screen max-w-md bg-leather-darkest text-leather-cream border-x border-leather-brass/30 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-leather-dark flex items-center justify-between bg-leather-espresso/90 text-left rtl:text-right">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-leather-dark text-leather-brass-light">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-leather-cream font-serif">
                  {t.cartDrawer.title}
                </h2>
                <span className="text-xs text-leather-honey">
                  {cart.length > 0 ? t.cartDrawer.itemsCount(cart.length) : t.cartDrawer.emptyTitle}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-leather-parchment/60 hover:text-red-400 transition-colors p-1"
                  title={t.cartDrawer.clearCart}
                >
                  {t.cartDrawer.clearCart}
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-9 h-9 rounded-full bg-leather-dark hover:bg-leather-espresso text-leather-parchment hover:text-white flex items-center justify-center transition-colors border border-leather-brass/20"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-leather-espresso p-4 border-b border-leather-dark">
            <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
              <span className="text-leather-parchment/90">
                {differenceToFreeShipping === 0
                  ? t.cartDrawer.freeShippingUnlocked
                  : t.cartDrawer.freeShippingAway(differenceToFreeShipping.toLocaleString(language === 'en' ? 'en-US' : 'ar-EG'))}
              </span>
              <span className="font-mono text-leather-brass-light font-bold">
                {freeShippingProgress}%
              </span>
            </div>
            <div className="w-full bg-leather-dark rounded-full h-2 overflow-hidden border border-leather-brass/20">
              <div
                className="bg-gradient-to-r from-leather-cognac to-leather-brass h-full rounded-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-leather-espresso/80 border-2 border-dashed border-leather-brass/30 flex items-center justify-center text-leather-brass">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-leather-cream font-serif">
                    {t.cartDrawer.emptyTitle}
                  </h3>
                  <p className="text-xs text-leather-parchment/60 max-w-xs leading-relaxed">
                    {t.cartDrawer.emptySub}
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-leather-brass text-leather-darkest font-bold text-xs hover:bg-leather-brass-light transition-colors shadow"
                >
                  {t.cartDrawer.startShopping}
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.uniqueKey}
                  className="bg-leather-espresso/90 border border-leather-brass/25 rounded-2xl p-3.5 flex gap-3.5 items-center relative group"
                >
                  {/* Item Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-leather-darkest flex-shrink-0 border border-leather-brass/30">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 min-w-0 space-y-1.5 text-left rtl:text-right">
                    <h4 className="text-xs font-bold text-leather-cream line-clamp-1 font-serif">
                      {language === 'en' ? (item.nameEn || item.name) : item.name}
                    </h4>

                    {/* Color Label */}
                    <div className="flex items-center gap-1.5 text-[11px] text-leather-honey">
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block border border-white/30"
                        style={{ backgroundColor: item.selectedColor.code }}
                      />
                      <span>
                        {language === 'en'
                          ? (item.selectedColor.nameEn || item.selectedColor.name)
                          : item.selectedColor.name}
                      </span>
                    </div>

                    {/* Price and Counter */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1 bg-leather-darkest rounded-lg border border-leather-brass/20 p-1">
                        <button
                          onClick={() => updateQuantity(item.uniqueKey, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-leather-parchment hover:text-white active:scale-95 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-leather-cream font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.uniqueKey, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-leather-parchment hover:text-white active:scale-95 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="font-mono font-bold text-xs text-leather-brass-light">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>

                  {/* Remove Item Button */}
                  <button
                    onClick={() => removeFromCart(item.uniqueKey)}
                    className="absolute top-2.5 ltr:right-2.5 rtl:left-2.5 text-leather-parchment/40 hover:text-red-400 p-1 transition-colors"
                    title="Remove item"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-leather-dark bg-leather-espresso/95 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-leather-parchment/80">
                  <span>{t.cartDrawer.subtotal}</span>
                  <span className="font-mono font-bold">{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex justify-between text-leather-parchment/80">
                  <span>{t.cartDrawer.shipping}</span>
                  <span className="text-emerald-400 font-bold">
                    {totalAmount >= FREE_SHIPPING_THRESHOLD ? (
                      language === 'en' ? 'Free Shipping' : 'شحن مجاني'
                    ) : (
                      t.cartDrawer.shippingNote
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-leather-cream pt-2 border-t border-leather-dark">
                  <span>{t.cartDrawer.total}</span>
                  <span className="font-mono font-black text-leather-brass-light text-base">
                    {formatPrice(totalAmount)}
                  </span>
                </div>
              </div>

              {/* Inspection Guarantee Tag */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-leather-darkest/80 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>{t.common.inspectBadge}</span>
              </div>

              {/* Proceed to Checkout CTA */}
              <button
                onClick={handleProceedToCheckout}
                id="cart-checkout-cta-btn"
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/40 transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-400/40 active:scale-95"
              >
                <span>{t.cartDrawer.checkoutBtn}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
