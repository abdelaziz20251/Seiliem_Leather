import React from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const NotificationToast: React.FC = () => {
  const { toastMessage, setIsCartOpen } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-in-right max-w-sm">
      <div className="bg-leather-darkest border border-leather-brass/60 rounded-2xl p-4 shadow-2xl shadow-black/80 flex items-center gap-3 text-right">
        <div className="w-10 h-10 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold text-leather-cream">إشعار السلة</div>
          <p className="text-[11px] text-leather-parchment/80 truncate">{toastMessage}</p>
        </div>
        <button
          onClick={() => setIsCartOpen(true)}
          className="px-3 py-1.5 rounded-lg bg-leather-brass text-leather-darkest font-bold text-[11px] hover:bg-leather-brass-light transition-colors whitespace-nowrap flex items-center gap-1 shadow"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>السلة</span>
        </button>
      </div>
    </div>
  );
};
