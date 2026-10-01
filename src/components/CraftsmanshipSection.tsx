import React from 'react';
import { Award, Compass, Sparkles, Feather } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const steps = [
    {
      icon: Award,
      title: 'انتقاء الجلد الطبيعي الكامل (Full-Grain)',
      description:
        'نختار الطبقة السطحية العلوية للجلد الطبيعي، وهي الأقوى والأغلى، حيث تحتفظ بمساماتها الطبيعية وتزداد بريقاً وجمالاً (Patina) بمرور السنين بدلاً من أن تتشقق.'
    },
    {
      icon: Compass,
      title: 'الدباغة النباتية الصديقة للبيئة',
      description:
        'تتم دباغة جلودنا بخلاصات نباتية ولحاء الأشجار الطبيعي بعيداً عن الكيماويات الضارة، مما يمنح الجلد رائحته الأصلية الذكية وملمسه الدافئ الفاخر.'
    },
    {
      icon: Feather,
      title: 'الخياطة اليدوية بخيوط مشمعة',
      description:
        'تُثقب القطع يدوياً بدقة متناهية وتُحاك بنمط السراجة المزدوجة بخيوط بوليستر مشمعة تقاوم أعتى قوى الشد، وتضمن عدم انفراط أي غرزة طوال عمر المنتج.'
    },
    {
      icon: Sparkles,
      title: 'صقل الحواف بشمع العسل الطبيعي',
      description:
        'تمر حواف كل قطعة بعدة مراحل من السنفرة والتنعيم ثم تُطلى بشمع العسل العضوي وتُصقل بقطع الخشب الصلب لتصل إلى ملمس ناعم كالحرير يقاوم الرطوبة.'
    }
  ];

  return (
    <section id="craftsmanship" className="py-20 bg-leather-darkest text-leather-cream border-y border-leather-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-leather-cognac/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leather-espresso border border-leather-brass/30 text-leather-brass-light text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>حرفة تتوارثها الأجيال</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-leather-cream font-serif">
            أسرار الصنعة والجلد الطبيعي الأصيل
          </h2>

          <p className="text-sm sm:text-base text-leather-parchment/80 leading-relaxed">
            في ورشتنا، لا نؤمن بالإنتاج التجاري السريع؛ كل قطعة من سليم للجلود هي عمل فني فريد يستغرق ساعات من التركيز والإتقان اليدوي لنقدم لك رفيقاً يدوم مدى الحياة.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-leather-espresso/80 border border-leather-brass/25 hover:border-leather-brass transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-leather-dark flex items-center justify-center text-leather-brass-light group-hover:bg-leather-cognac transition-colors border border-leather-brass/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xl font-black text-leather-brass/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-leather-cream font-serif mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-leather-parchment/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-leather-dark/60 flex items-center gap-2 text-[11px] text-leather-honey font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-leather-brass" />
                  <span>معايير جودة صارمة</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-leather-espresso via-leather-dark to-leather-espresso border border-leather-brass/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-leather-brass-light font-serif">
              ضمان سليم الذهبي: افحص بنفسك قبل أن تدفع
            </h4>
            <p className="text-xs text-leather-parchment/80">
              يحق لك إجراء اختبار رائحة الجلد واختبار الملمس مع مندوب التوصيل للتأكد من أصالة الجلد الطبيعي بنسبة 100%.
            </p>
          </div>

          <a
            href="#products"
            className="px-6 py-3 rounded-xl bg-leather-brass hover:bg-leather-brass-light text-leather-darkest font-bold text-xs shadow-md transition-colors whitespace-nowrap"
          >
            تصفح المنتجات المعتمدة
          </a>
        </div>

      </div>
    </section>
  );
};
