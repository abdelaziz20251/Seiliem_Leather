import React from 'react';
import { MessageCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../data/products';

export const FloatingSocialDock: React.FC = () => {
  const items = [
    {
      id: 'facebook',
      name: 'فيسبوك',
      href: SOCIAL_LINKS.facebook,
      bg: 'bg-[#1877F2] hover:bg-[#166fe5]',
      shadow: 'hover:shadow-blue-600/40',
      icon: <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
    },
    {
      id: 'instagram',
      name: 'انستجرام',
      href: SOCIAL_LINKS.instagram,
      bg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95',
      shadow: 'hover:shadow-pink-600/40',
      icon: <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]" />
    },
    {
      id: 'tiktok',
      name: 'تيك توك',
      href: SOCIAL_LINKS.tiktok,
      bg: 'bg-black hover:bg-zinc-900 border border-cyan-400/40',
      shadow: 'hover:shadow-cyan-500/30',
      icon: <TikTokIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
    },
    {
      id: 'whatsapp',
      name: 'واتساب',
      href: SOCIAL_LINKS.whatsapp,
      bg: 'bg-[#25D366] hover:bg-[#20ba59]',
      shadow: 'hover:shadow-emerald-600/40',
      icon: <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white stroke-none" />
    }
  ];

  return (
    <aside
      aria-label="قنوات التواصل الاجتماعي العائمة"
      className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center select-none"
    >
      <div className="bg-leather-darkest/95 backdrop-blur-md border border-leather-brass/40 shadow-2xl shadow-black/80 p-1.5 sm:p-2 rounded-2xl flex flex-col items-center gap-2 sm:gap-2.5">
        
        {/* Subtle decorative dot/indicator */}
        <span className="w-1.5 h-1.5 rounded-full bg-leather-brass-light animate-pulse mb-0.5" />

        {items.map((item) => (
          <div key={item.id} className="relative group flex items-center">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-active:scale-95 shadow-md ${item.bg} ${item.shadow}`}
            >
              {item.icon}
            </a>

            {/* Tooltip on hover (slides out smoothly to the right) */}
            <div className="hidden sm:block absolute left-full ml-3 px-3 py-1.5 bg-leather-darkest/95 text-leather-sand border border-leather-brass/40 rounded-xl text-xs font-bold whitespace-nowrap shadow-xl opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none z-50">
              {item.name}
            </div>
          </div>
        ))}

      </div>
    </aside>
  );
};
