import React, { useState, useEffect } from 'react';
import { MessageCircle, Share2, X } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export const FloatingSocialDock: React.FC = () => {
  const { t, language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-shrink on scroll so icons never obstruct content
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        setIsExpanded(false);
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    {
      id: 'facebook',
      name: t.floatingDock.facebook,
      href: SOCIAL_LINKS.facebook,
      bg: 'bg-[#1877F2] hover:bg-[#166fe5]',
      shadow: 'hover:shadow-blue-600/40',
      icon: <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
    },
    {
      id: 'instagram',
      name: t.floatingDock.instagram,
      href: SOCIAL_LINKS.instagram,
      bg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95',
      shadow: 'hover:shadow-pink-600/40',
      icon: <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]" />
    },
    {
      id: 'tiktok',
      name: t.floatingDock.tiktok,
      href: SOCIAL_LINKS.tiktok,
      bg: 'bg-black hover:bg-zinc-900 border border-cyan-400/40',
      shadow: 'hover:shadow-cyan-500/30',
      icon: <TikTokIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
    },
    {
      id: 'whatsapp',
      name: t.floatingDock.whatsapp,
      href: SOCIAL_LINKS.whatsapp,
      bg: 'bg-[#25D366] hover:bg-[#20ba59]',
      shadow: 'hover:shadow-emerald-600/40',
      icon: <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white stroke-none" />
    }
  ];

  return (
    <aside
      aria-label={t.floatingDock.ariaLabel}
      className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 select-none transition-all duration-300"
    >
      {/* Shrunk Mini Floating Pill */}
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="group relative flex items-center gap-1.5 p-2 sm:p-2.5 rounded-2xl bg-leather-darkest/95 hover:bg-leather-espresso text-leather-sand hover:text-white border border-leather-brass/50 shadow-2xl shadow-black/80 transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-md cursor-pointer focus:outline-none"
          title={language === 'en' ? 'Social Media Links' : 'صفحات ومواقع التواصل'}
          aria-label="Expand Social Dock"
        >
          {/* Subtle pulsating indicator */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-leather-brass-light animate-pulse" />
          
          <Share2 className="w-5 h-5 text-leather-brass-light group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Mini vertical label on hover */}
          <span className="hidden sm:inline-block text-[10px] font-bold tracking-wider text-leather-honey opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 whitespace-nowrap">
            {language === 'en' ? 'Social' : 'تواصل'}
          </span>
        </button>
      ) : (
        /* Expanded Floating Dock */
        <div className="bg-leather-darkest/95 backdrop-blur-md border border-leather-brass/50 shadow-2xl shadow-black/90 p-2 sm:p-2.5 rounded-2xl flex flex-col items-center gap-2 sm:gap-2.5 animate-fade-in transition-all duration-300">
          
          {/* Collapse Button */}
          <button
            onClick={() => setIsExpanded(false)}
            className="w-7 h-7 rounded-lg bg-leather-dark/80 hover:bg-leather-espresso text-leather-sand hover:text-white border border-leather-brass/30 flex items-center justify-center transition-colors cursor-pointer mb-0.5"
            title={language === 'en' ? 'Collapse' : 'تصغير'}
            aria-label="Collapse Social Dock"
          >
            <X className="w-3.5 h-3.5" />
          </button>

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

              {/* Tooltip on hover */}
              <div className="hidden sm:block absolute left-full ml-3 px-3 py-1.5 bg-leather-darkest/95 text-leather-sand border border-leather-brass/40 rounded-xl text-xs font-bold whitespace-nowrap shadow-xl opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none z-50">
                {item.name}
              </div>
            </div>
          ))}

        </div>
      )}
    </aside>
  );
};
