import React from 'react';
import { ShieldCheck, Eye, MessageSquare, Hammer } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'جلد طبيعي 100% معتمد',
      description: 'جلود بقري طبيعية مدبوغة نباتياً خالية من أي بلاستيك أو جلود مقلدة مع اختبار الحرق الطبيعي.'
    },
    {
      icon: Eye,
      title: 'معاينة وفحص قبل الاستلام',
      description: 'افتح الطرد وافحص جودة الجلد والتقفيل مع المندوب قبل دفع جنيه واحد، وثقتك هي أولويتنا.'
    },
    {
      icon: MessageSquare,
      title: 'طلب مباشر وتأكيد واتساب',
      description: 'أتمم طلبك بكبسة زر واحدة عبر واتساب بدون بطاقات بنكية، مع متابعة شخصية خطوة بخطوة.'
    },
    {
      icon: Hammer,
      title: 'صناعة يدوية تدوم أجيالاً',
      description: 'قص يدوي دقيق وخياطة متينة بخيوط مشمعة وإكسسوارات نحاسية أصلية مقاومة للصدأ.'
    }
  ];

  return (
    <section className="bg-leather-espresso text-leather-cream py-10 border-b border-leather-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="group relative p-5 rounded-2xl bg-leather-darkest/70 border border-leather-brass/25 hover:border-leather-brass transition-all duration-300 hover:shadow-xl hover:shadow-leather-brass/5"
              >
                <div className="w-12 h-12 rounded-xl bg-leather-espresso border border-leather-brass/30 flex items-center justify-center text-leather-brass-light mb-4 group-hover:scale-110 group-hover:bg-leather-cognac transition-all duration-300">
                  <Icon className="w-6 h-6 text-leather-brass-light" />
                </div>
                <h3 className="text-base font-bold text-leather-cream mb-1 font-serif">
                  {badge.title}
                </h3>
                <p className="text-xs text-leather-parchment/75 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
