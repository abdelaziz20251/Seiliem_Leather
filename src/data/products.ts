import type { Product } from '../types';

// بيانات التواصل والواتساب المعتمدة
export const STORE_WHATSAPP_NUMBER = '201113338412'; // الرقم الدولي لرابط واتساب
export const STORE_PHONE_DISPLAY = '01113338412'; // العرض المحلي في الموقع
export const STORE_PHONE_INTL = '+20 11 13338412'; // العرض الدولي الكامل

// روابط صفحات السوشيال ميديا الرسمية
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/selim.leather', // ضع رابط انستجرام الخاص بك هنا
  facebook: 'https://facebook.com/selim.leather', // ضع رابط فيسبوك الخاص بك هنا
  tiktok: 'https://tiktok.com/@selimleather', // ضع رابط تيك توك الخاص بك هنا
  whatsapp: `https://wa.me/${STORE_WHATSAPP_NUMBER}`
};

export const PRODUCTS: Product[] = [
  {
    id: 'bag-heritage-messenger',
    name: 'حقيبة ساعي البريد الكلاسيكية (Heritage Messenger)',
    category: 'bags',
    categoryName: 'شنط جلد',
    price: 1850,
    originalPrice: 2200,
    shortDescription: 'حقيبة كتف فسيحة مصنوعة يدوياً من جلد بقري طبيعي 100% مع بطانة متينة وحزام قابل للتعديل تتسع لحاسوب محمول حتى 15 بوصة.',
    details: [
      'جلد بقري طبيعي 100% مدبوغ نباتياً (Full-Grain Leather)',
      'جيب مخصص ومبطن للابتوب حتى مقاس 15.6 بوصة',
      'إكسسوارات نحاسية أصلية مقاومة للصدأ والتآكل',
      'حزام كتف جلد مبطن مريح قابل للإطالة والتعديل',
      'خياطة يدوية بخيوط شمعية فائقة المتانة',
      'الأبعاد: 40 سم عرض × 30 سم ارتفاع × 10 سم عمق'
    ],
    featured: true,
    badge: 'الأكثر مبيعاً',
    rating: 4.9,
    reviewsCount: 48,
    colors: [
      {
        name: 'هافان / جملي كلاسيك',
        code: '#C68642',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'بني شوكولاتة داكن',
        code: '#3E2723',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'أسود فحمي فاخر',
        code: '#1A1A1A',
        image: 'https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'bag-crossbody-executive',
    name: 'شنطة كروس تنفيذية (Executive Crossbody)',
    category: 'bags',
    categoryName: 'شنط جلد',
    price: 1350,
    originalPrice: 1600,
    shortDescription: 'تصميم مدمج وعملي للنشاطات اليومية والمشاوير الرسمية، مصممة لحمل الهاتف، المحفظة، المفاتيح، والتابلت بأناقة فائقة.',
    details: [
      'جلد طبيعي خام ملمس ناعم مقاوم للخدوش',
      'سحابات معدنية YKK يابانية متينة جداً',
      '3 جيوب خارجية بسحاب + جيب داخلي سري',
      'حزام كتف قماش كانفاس معزز بجلد طبيعي',
      'الأبعاد: 24 سم ارتفاع × 20 سم عرض × 7 سم عمق'
    ],
    featured: true,
    badge: 'تصميم حصري',
    rating: 4.8,
    reviewsCount: 32,
    colors: [
      {
        name: 'بني كونياك دافئ',
        code: '#6F3819',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'أسود ملكي مطفي',
        code: '#212121',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'هافان فاتح',
        code: '#D4A373',
        image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'bag-weekend-duffle',
    name: 'حقيبة سفر وعطلات أسبوعية (Voyage Duffle)',
    category: 'bags',
    categoryName: 'شنط جلد',
    price: 2600,
    originalPrice: 3100,
    shortDescription: 'حقيبة سفر فاخرة تتسع لملابس عطلة نهاية الأسبوع أو الجيم، تجمع بين قوة التحمل الميكانيكي وجمال الجلد الطبيعي المعتق.',
    details: [
      'جلد طبيعي عالي السماكة (Full Pull-up Cowhide)',
      'مقصورة داخلية ضخمة مع جيوب تنظيم متعددة',
      'قاعدة مزودة بمسامير نحاسية لحماية الجلد عند وضعه على الأرض',
      'مقابض حمل جلدية مزدوجة معززة بمسامير كبس يدوية',
      'الأبعاد: 52 سم طول × 28 سم ارتفاع × 26 سم عمق'
    ],
    featured: false,
    badge: 'جلد فاخر',
    rating: 5.0,
    reviewsCount: 19,
    colors: [
      {
        name: 'بني إسبريسو معتق',
        code: '#2A1C14',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'جملي تان غني',
        code: '#B87333',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'wallet-bifold-artisan',
    name: 'محفظة جيب كلاسيكية ثنائية الطي (Artisan Bifold)',
    category: 'wallets',
    categoryName: 'محافظ جلد',
    price: 490,
    originalPrice: 620,
    shortDescription: 'محفظة نحيفة وخفيفة الوزن في الجيب، تتسع لما يصل إلى 8 بطاقات مع جيب نقود ورقية كامل دون أن تنتفخ.',
    details: [
      'جلد بقري طبيعي مستورد مشذب يدوياً بالكامل',
      'بطانة بتقنية حماية RFID ضد سرقة البيانات والبطاقات اللاسلكية',
      '8 فتحات للبطاقات البنكية والبطاقة الشخصية',
      'جيبان مخفيان تحت البطاقات للإيصالات',
      'حواف ملساء مصقولة يدوياً بشمع العسل الطبيعي',
      'الأبعاد (مغلقة): 11 سم × 9 سم × 1.2 سم سمك'
    ],
    featured: true,
    badge: 'حماية RFID',
    rating: 4.9,
    reviewsCount: 76,
    colors: [
      {
        name: 'بني شوكولاتة',
        code: '#3E2723',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'هافان كاميل أصلي',
        code: '#C68642',
        image: 'https://images.unsplash.com/photo-1606503829068-d0694e9cb72b?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'أسود كربوني',
        code: '#181818',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'wallet-minimalist-cardholder',
    name: 'محفظة كروت ونقود سريعة (Slim Cardholder & Money Clip)',
    category: 'wallets',
    categoryName: 'محافظ جلد',
    price: 360,
    originalPrice: 450,
    shortDescription: 'الخيار الأفضل للباحثين عن البساطة والخفة. تتسع لـ 6 بطاقات ومزودة بمشبك معدني نحاسي فاخر للنقود الورقية.',
    details: [
      'جلد طبيعي Crazy Horse يكتسب طابعاً عتيقاً ساحراً مع الاستخدام',
      'مشبك نقود معدني زنبركي نحاسي فائق القوة',
      'سُمك لا يتعدى 0.7 سم فارغة لتناسب الجيب الأمامي براحة تامة',
      'فتحة سريعة بالأعلى للبطاقة الأكثر استخداماً',
      'أبعاد مدمجة: 10.5 سم × 7.5 سم'
    ],
    featured: false,
    badge: 'تصميم فائق النحافة',
    rating: 4.7,
    reviewsCount: 54,
    colors: [
      {
        name: 'جملي معتق (Crazy Horse)',
        code: '#B87333',
        image: 'https://images.unsplash.com/photo-1606503829068-d0694e9cb72b?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'بني كونياك غامق',
        code: '#4A2C18',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'أخضر زيتي ملكي',
        code: '#2E3A2F',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'wallet-long-passport',
    name: 'محفظة السفر وجواز السفر الطويلة (Long Travel Clutch)',
    category: 'wallets',
    categoryName: 'محافظ جلد',
    price: 780,
    originalPrice: 950,
    shortDescription: 'محفظة طويلة تتسع لجواز السفر، تذاكر الطيران، 12 كارت، الهاتف المحمول، والنقود بدون طي. إغلاق بزر كبس نحاسي آمن.',
    details: [
      'جلد طبيعي فاخر مختوم بختم سليم الأصلي',
      'جيب مخصص لجواز السفر أو الدفتر الشيكات',
      '12 فتحة كروت بنكية + جيب نقود بسحاب داخلي',
      'تتسع للهواتف الذكية بحجم حتى 6.7 بوصة',
      'الأبعاد: 19 سم × 10.5 سم'
    ],
    featured: false,
    badge: 'مثالية للسفر',
    rating: 4.9,
    reviewsCount: 23,
    colors: [
      {
        name: 'بني إسبريسو',
        code: '#2B1D14',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'هافان طبيعي',
        code: '#C68642',
        image: 'https://images.unsplash.com/photo-1606503829068-d0694e9cb72b?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'bracelet-braided-brass',
    name: 'إسوارة جلد طبيعي مجدولة مع قفل نحاسي (Braided Cuff)',
    category: 'bracelets',
    categoryName: 'إكسسوارات وأساور',
    price: 240,
    originalPrice: 320,
    shortDescription: 'إسوارة رجالية ونسائية راقية مصنوعة من جدائل الجلد الطبيعي الفاخر، مزودة بقفل مغناطيسي نحاسي مطلي غير قابل للصدأ.',
    details: [
      'جدائل جلد بقري أصلي 100% مقاوم للماء والعرق',
      'قفل مغناطيسي متين من الفولاذ المقاوم للصدأ المطلي بالنحاس العتيق',
      'ملمس ناعم لا يسبب أي تحسس للبشرة',
      'تصلح للارتداء اليومي الفردي أو مع ساعة اليد',
      'المقاس: متوفر بمقاس مرن 20 سم و 21.5 سم'
    ],
    featured: true,
    badge: 'لمسة فخامة',
    rating: 4.9,
    reviewsCount: 65,
    colors: [
      {
        name: 'بني معتق وقفل برونزي',
        code: '#6F3819',
        image: 'https://images.unsplash.com/photo-1611591475155-426c045b4c61?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'أسود ملكي وقفل فضي داكن',
        code: '#1F1F1F',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'تان فاتح وقفل ذهبي مطفي',
        code: '#C68642',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'bracelet-wrap-artisan',
    name: 'إسوارة لولبية مزدوجة محفورة يدوياً (Double Wrap)',
    category: 'bracelets',
    categoryName: 'إكسسوارات وأساور',
    price: 210,
    originalPrice: 280,
    shortDescription: 'سوار مزدوج يلتف مرتين حول المعصم مع إبزيم تعديل كلاسيكي دقيق ونقش زخرفي هادئ مستوحى من التراث الحرفي.',
    details: [
      'قطعة واحدة متصلة من جلد التان النباتي الطبيعي',
      'إبزيم معدني مصبوب مع 5 فتحات لضبط المقاس بدقة',
      'تكتسب لوناً أعمق وبريقاً ساحراً مع مرور الشهور',
      'مقاومة فائقة للقطع والتمدد'
    ],
    featured: false,
    badge: 'طبيعي 100%',
    rating: 4.8,
    reviewsCount: 41,
    colors: [
      {
        name: 'هافان دافئ',
        code: '#C68642',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'بني شوكولاتة داكن',
        code: '#3E2723',
        image: 'https://images.unsplash.com/photo-1611591475155-426c045b4c61?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'م. أحمد الشناوي',
    city: 'القاهرة - التجمع الخامس',
    rating: 5,
    comment: 'استلمت حقيبة Heritage Messenger من يومين. بجد خامة الجلد الطبيعي ممتازة ورائحة الجلد الأصلي تفوح منها! المعاينة قبل الاستلام شجعتني جداً، شكراً لفريق سليم على الاحترافية.',
    productName: 'حقيبة ساعي البريد الكلاسيكية',
    date: 'منذ 3 أيام'
  },
  {
    id: 2,
    name: 'د. سارة المنشاوي',
    city: 'الإسكندرية - سموحة',
    rating: 5,
    comment: 'المحفظة ثنائية الطي خرافية، تقفيل الخياطة يدوي ونظيف جداً بدون أي غلطة. طلبتها عبر واتساب ووصلتني في أقل من 48 ساعة.',
    productName: 'محفظة جيب كلاسيكية Artisan',
    date: 'منذ أسبوع'
  },
  {
    id: 3,
    name: 'كريم الباز',
    city: 'الجيزة - الدقي',
    rating: 5,
    comment: 'اشتريت الإسوارة المجدولة مع محفظة كروت. الإكسسوارات النحاسية أصلية وثقيلة والجلد طري ومريح في الإيد. هطلب شنطة السفر قريباً بكل تأكيد.',
    productName: 'إسوارة جلد طبيعي مجدولة',
    date: 'منذ أسبوعين'
  }
];

export const FAQS = [
  {
    question: 'هل يمكنني معاينة وفحص المنتجات والتأكد من الجلد قبل الدفع؟',
    answer: 'نعم بكل تأكيد! نحن نثق بنسبة 100% في جودة منتجاتنا، لذلك يحق لك فتح الشحنة ومعاينة المنتج بالكامل مع مندوب الشحن قبل سداد أي مبلغ، وفي حال عدم إعجابك يمكنك رفض الاستلام فوراً دون أي تعقيد.'
  },
  {
    question: 'ما هو نوع الجلد المستخدم في صناعة منتجات سليم؟',
    answer: 'جميع منتجاتنا مصنعة حصرياً من جلود بقري طبيعية 100% مدبوغة نباتياً (Full-Grain & Top-Grain). لا نستخدم أي جلود صناعية أو مخلوطة (PU/Faux Leather) نهائياً.'
  },
  {
    question: 'كم تستغرق مدة الشحن والتوصيل للمحافظات؟',
    answer: 'يتم تجهيز الطلب والشحن خلال 24 ساعة. يستغرق التوصيل في القاهرة والجيزة من 24 إلى 48 ساعة، ولباقي محافظات الجمهورية من 2 إلى 4 أيام عمل كحد أقصى.'
  },
  {
    question: 'ما هي سياسة الاستبدال والاسترجاع؟',
    answer: 'نوفر ضمان استبدال واسترجاع مجاني لمدة 14 يوماً من تاريخ الاستلام في حال وجود أي عيب مصنعي، مع ضمان صيانة لمدة عام كامل على الخياطة والإكسسوارات النحاسية.'
  }
];
