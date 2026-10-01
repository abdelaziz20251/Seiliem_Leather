import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STORE_WHATSAPP_NUMBER, STORE_PHONE_DISPLAY } from '../data/products';
import { useCart } from '../context/CartContext';

export const FloatingWhatsApp: React.FC = () => {
  const { cart } = useCart();
  const directWhatsAppLink = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'مرحباً سليم للجلود، أرغب في الاستفسار أو إتمام طلب عبر واتساب.'
  )}`;

  const bottomClass = cart.length > 0 ? 'bottom-20 md:bottom-6' : 'bottom-6';

  return (
    <div className={`fixed right-4 sm:right-6 z-40 flex items-center gap-2 group transition-all duration-300 ${bottomClass}`}>
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block bg-leather-darkest/95 text-leather-sand text-xs font-bold py-1.5 px-3.5 rounded-full border border-leather-brass/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        تحدث معنا مباشرة: {STORE_PHONE_DISPLAY}
      </span>

      {/* Pulsing Floating Button */}
      <a
        href={directWhatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 transform group-hover:scale-110 transition-all duration-300 border-2 border-white/30"
        title={`تواصل معنا عبر واتساب: ${STORE_PHONE_DISPLAY}`}
        aria-label="تواصل عبر واتساب"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
