import React from 'react';
import { ShoppingBag, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export const StickyMobileCartBar: React.FC = () => {
  const { cart, totalAmount, totalItems, setIsCheckoutOpen, setIsCartOpen } = useCart();
  const { isRTL, t, formatPrice } = useLanguage();

  if (cart.length === 0) return null;

  const DirectionalArrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-leather-darkest/95 backdrop-blur-xl border-t-2 border-leather-brass/50 shadow-[0_-8px_30px_rgba(0,0,0,0.7)] px-4 py-3 pb-safe animate-fade-in">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        
        {/* Cart Summary (Tap to open drawer) */}
        <button
          onClick={() => setIsCartOpen(true)}
          className={`flex items-center gap-2.5 ${isRTL ? 'text-right' : 'text-left'} p-1.5 rounded-xl hover:bg-leather-espresso/80 transition-colors focus:outline-none`}
          aria-label={t.stickyMobile.cartAria}
        >
          <div className="relative w-11 h-11 rounded-xl bg-leather-espresso border border-leather-brass/40 flex items-center justify-center text-leather-brass-light flex-shrink-0 shadow-inner">
            <ShoppingBag className="w-5 h-5 text-leather-brass-light" />
            <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-leather-darkest font-black text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {totalItems}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] text-leather-parchment/80 font-medium">
              {t.stickyMobile.totalItems(totalItems)}
            </span>
            <span className="text-base font-black text-leather-brass-light font-mono leading-tight">
              {formatPrice(totalAmount)}
            </span>
          </div>
        </button>

        {/* Primary Checkout CTA */}
        <button
          id="mobile-sticky-checkout-btn"
          onClick={() => setIsCheckoutOpen(true)}
          className="flex-1 min-h-[48px] h-12 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 active:scale-[0.98] transition-all border border-emerald-400/40"
        >
          <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
          <span className="whitespace-nowrap font-serif tracking-tight">{t.stickyMobile.checkout}</span>
          <DirectionalArrow className="w-4 h-4 flex-shrink-0" />
        </button>

      </div>
    </div>
  );
};

