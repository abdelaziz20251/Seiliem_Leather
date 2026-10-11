export type Language = 'en' | 'ar';

export const EGYPT_GOVERNORATES_BILINGUAL = [
  { ar: 'القاهرة', en: 'Cairo' },
  { ar: 'الجيزة', en: 'Giza' },
  { ar: 'الإسكندرية', en: 'Alexandria' },
  { ar: 'القليوبية', en: 'Qalyubia' },
  { ar: 'الدقهلية', en: 'Dakahlia' },
  { ar: 'الشرقية', en: 'Sharqia' },
  { ar: 'الغربية', en: 'Gharbia' },
  { ar: 'المنوفية', en: 'Monufia' },
  { ar: 'البحيرة', en: 'Beheira' },
  { ar: 'كفر الشيخ', en: 'Kafr El Sheikh' },
  { ar: 'دمياط', en: 'Damietta' },
  { ar: 'بورسعيد', en: 'Port Said' },
  { ar: 'الإسماعيلية', en: 'Ismailia' },
  { ar: 'السويس', en: 'Suez' },
  { ar: 'الفيوم', en: 'Fayoum' },
  { ar: 'بني سويف', en: 'Beni Suef' },
  { ar: 'المنيا', en: 'Minya' },
  { ar: 'أسيوط', en: 'Asyut' },
  { ar: 'سوهاج', en: 'Sohag' },
  { ar: 'قنا', en: 'Qena' },
  { ar: 'الأقصر', en: 'Luxor' },
  { ar: 'أسوان', en: 'Aswan' },
  { ar: 'البحر الأحمر', en: 'Red Sea' },
  { ar: 'مطروح', en: 'Matrouh' },
  { ar: 'محافظة أخرى', en: 'Other Governorate' }
];

export const TRANSLATIONS = {
  en: {
    common: {
      brandName: 'SELIM LEATHER',
      brandSub: 'Handcrafted Genuine Leather',
      currency: 'EGP',
      inspectBadge: 'Free Inspection with Courier',
      inspectNotice: 'Inspect & examine 100% genuine leather before paying',
      viewDetails: 'View Details',
      addToCart: 'Add to Cart',
      addedToCart: 'Added to Cart Successfully!',
      directWhatsAppOrder: 'Direct Order via WhatsApp',
      fastDelivery: 'Fast Nationwide Delivery Across Egypt',
      warranty: '1-Year Full Warranty',
      ratingSuffix: 'Verified Reviews',
      save: 'Save',
      limitedStock: 'Limited Handcrafted Batch',
      egp: 'EGP'
    },
    navbar: {
      announcement: '100% Genuine Vegetable-Tanned Cowhide • Free Inspection Before Payment • Nationwide Shipping Across Egypt',
      salesWhatsApp: 'Sales WhatsApp:',
      home: 'Home',
      doppKit: 'The Dopp Kit',
      craftsmanship: 'Our Craft',
      reviews: 'Client Reviews',
      faqs: 'FAQs',
      switchLangText: 'العربية',
      switchLangCode: 'ar',
      directOrder: 'Direct Order',
      cartTitle: 'Shopping Cart',
      menuTitle: 'Main Menu'
    },
    hero: {
      badge: 'Authentic Egyptian Craftsmanship • 100% Pure Full-Grain Cowhide • Zero Synthetic Materials',
      headlineMain: 'The Luxury of Aged Full-Grain Leather',
      headlineSub: 'The Artisan Dopp Kit Edition',
      description: 'At Selim Leather, we handcraft our signature masterpiece from the finest 100% full-grain Crazy Horse cowhide. Your distinguished everyday companion for grooming kits, personal tech, and travel—with full freedom to inspect before paying.',
      trustPillars: [
        { title: '100% Pure Cowhide', sub: 'Aged Crazy Horse Finish' },
        { title: 'Inspect Before Paying', sub: 'Examine with the courier' },
        { title: '1-Year Full Warranty', sub: 'On stitching & brass hardware' }
      ],
      ctaShop: 'Explore The Dopp Kit & Colors',
      ctaWhatsApp: 'Direct Order via WhatsApp',
      showcaseTag: 'Exclusive 2026 Edition • 4 Colors',
      showcaseWeekly: 'Iconic Artisan Masterpiece',
      showcaseName: 'The Artisan Dopp Kit',
      browseColors: 'Browse Colors',
      socialProofScore: '★ 4.9',
      socialProofText: '1,200+ Satisfied Clients in Egypt',
      socialProofSub: 'Excellence Guaranteed'
    },
    trustBadges: [
      {
        title: '100% Certified Genuine Leather',
        description: 'Vegetable-tanned full-grain cowhide free from plastics or bonded substitutes, passing the flame and grain test with flying colors.'
      },
      {
        title: 'Free Inspection Before Payment',
        description: 'Open the parcel and verify leather texture, smell, and stitching with the courier before paying a single pound.'
      },
      {
        title: 'Instant WhatsApp Order Confirmation',
        description: 'Finalize your order in one click through WhatsApp with personal step-by-step courier tracking.'
      },
      {
        title: 'Handcrafted to Last Generations',
        description: 'Precision hand-cut, reinforced saddle stitching with waxed threads, and solid rustproof antique brass hardware.'
      }
    ],
    productShowcase: {
      tag: 'The Iconic Artisan Masterpiece of 2026',
      title: 'The Artisan Leather Dopp Kit',
      subtitle: 'Engineered with meticulous care to be your lifelong companion at home and abroad. Handcrafted from 100% pure Crazy Horse cowhide that deepens in vintage beauty and rich patina over the years.',
      selectedColorLabel: 'Selected Color:',
      genuineTag: 'Genuine Crazy Horse Cowhide',
      switchPrompt: 'Click any color swatch below for an instant live photo preview:',
      colorsCount: '4 Signature Shades',
      selected: 'Selected',
      preview: 'Preview',
      afterDiscount: 'Special Price:',
      freeShippingNotice: 'Nationwide Shipping Across Egypt',
      chooseColorForOrder: 'Choose Color for Order:',
      specsTitle: 'Mastercrafted Specifications:',
      specs: [
        '100% full-grain vegetable-tanned Crazy Horse cowhide that develops an exquisite vintage patina with time.',
        'Heavy-duty antique brass zipper with smooth full-length opening for easy reach.',
        'Spacious volume (approx. 25 × 12 × 11 cm) accommodating grooming kits, perfumes, phones, and chargers.',
        'Reinforced genuine leather side handle for effortless daily carrying and bathroom hanging.',
        'Heavy-duty hand-stitched seams using bonded waxed threads resistant to moisture and wear.'
      ],
      addToCartBtn: (price: number) => `Add to Cart (${price.toLocaleString('en-US')} EGP)`,
      addedBtn: 'Added to Cart Successfully!',
      directWhatsAppBtn: 'Order Directly via WhatsApp (Free Inspection)',
      badge1: '100% Free Inspection',
      badge2: 'Fast Delivery',
      badge3: '1-Year Full Warranty',
      colorsGridTitle: 'Explore the 4 Signature Leather Shades',
      colorsGridSub: 'Each shade is uniquely tanned to express distinct character, aging with timeless sophistication.',
      colorCardBadge: (idx: number) => `Shade #${idx + 1}`,
      selectedNow: 'Selected',
      activeInPreview: 'Active in Live Preview',
      selectThisColor: 'Select This Color for Preview & Order',
      engravingTitle: 'Looking for Custom Laser Name Engraving or Corporate Gifting?',
      engravingSub: 'We offer precision laser engraving for names, initials, and corporate logos directly via WhatsApp.',
      talkToArtisan: 'Chat with the Artisan on WhatsApp'
    },
    craftsmanship: {
      tag: 'A Heritage Passed Across Generations',
      title: 'The Craftsmanship & Secrets of Genuine Leather',
      subtitle: 'In our atelier, we reject rapid commercial mass-production. Every piece from Selim Leather is a unique work of art requiring hours of focused precision to deliver a lifelong companion.',
      steps: [
        {
          title: 'Full-Grain Top Layer Selection',
          description: 'We exclusively select the uppermost layer of cowhide—the strongest and most prestigious. It preserves natural pores and develops a rich patina over the years rather than cracking.'
        },
        {
          title: 'Eco-Friendly Vegetable Tanning',
          description: 'Our leathers are steeped in natural tree barks and plant extracts free from harsh toxic chemicals, granting the leather its earthy aroma and luxurious warm hand-feel.'
        },
        {
          title: 'Saddle Stitching with Waxed Threads',
          description: 'Pieces are meticulously hand-punched and sewn using high-tensile waxed polyester threads, ensuring no stitch unravels throughout the lifetime of the bag.'
        },
        {
          title: 'Beeswax Edge Burnishing',
          description: 'Every raw edge undergoes progressive sanding, coated with organic Egyptian beeswax, and burnished with hardwood slickers for a smooth, moisture-sealed touch.'
        }
      ],
      strictQuality: 'Strict Quality Standards',
      goldenGuaranteeTitle: "Selim's Golden Guarantee: Inspect with Your Own Hands Before Paying",
      goldenGuaranteeSub: 'You are warmly invited to perform the genuine leather aroma and grain test with the courier before paying.'
    },
    testimonials: {
      tag: 'Verified Client Experiences',
      title: 'What Our Clients Say About Selim',
      subtitle: 'Trusted by more than 1,200 satisfied patrons across Egypt. Their reviews are our badge of honor.',
      verifiedBuyer: 'Verified Buyer',
      reviews: [
        {
          id: 1,
          name: 'Eng. Ahmed El-Shennawy',
          city: 'Cairo - New Cairo',
          comment: 'Received the Vintage Brown Dopp Kit two days ago. The Crazy Horse leather quality is unbelievable, the side handle is super sturdy, and the brass zipper operates like butter. Free inspection on delivery gave me total confidence.',
          productName: 'The Artisan Leather Dopp Kit',
          date: '3 days ago'
        },
        {
          id: 2,
          name: 'Dr. Sarah El-Menshawy',
          city: 'Alexandria - Smouha',
          comment: 'Ordered the Olive Green as a gift for my husband. In reality, the color is even richer than in the photos! Perfect size for toiletries and travel, and the hand-stitching is spotless.',
          productName: 'The Artisan Leather Dopp Kit',
          date: '1 week ago'
        },
        {
          id: 3,
          name: 'Kareem El-Baz',
          city: 'Giza - Dokki',
          comment: 'Bought the Classic Tan shade and took it on my recent trip; it held all my grooming essentials, perfumes, and chargers in perfect order. The solid brass zipper is heavy-duty and the leather smells magnificent.',
          productName: 'The Artisan Leather Dopp Kit',
          date: '2 weeks ago'
        }
      ]
    },
    faqs: {
      tag: 'Clear Answers for Your Peace of Mind',
      title: 'Frequently Asked Questions & Purchasing Policy',
      subtitle: 'Everything you need to know about inspection, leather grades, shipping times, and warranty before confirming your order.',
      items: [
        {
          question: 'Can I inspect and verify the leather before paying the courier?',
          answer: 'Absolutely yes! We have 100% confidence in our craftsmanship. You have the full right to open the package and inspect the leather texture, aroma, and zippers with the courier before paying a single pound. If not completely delighted, you may reject delivery on the spot with zero hassle.'
        },
        {
          question: 'What type of leather is used in Selim products?',
          answer: 'All our products are crafted exclusively from 100% pure vegetable-tanned full-grain cowhide (Full-Grain & Top-Grain Crazy Horse). We strictly never use faux leather, bonded leather, or PU materials.'
        },
        {
          question: 'How long does shipping take to Egyptian governorates?',
          answer: 'Orders are prepared within 24 hours. Delivery takes 24 to 48 hours for Cairo and Giza, and 2 to 4 business days for all other Egyptian governorates.'
        },
        {
          question: 'What is your exchange, return, and warranty policy?',
          answer: 'We provide a 14-day hassle-free replacement or return guarantee for any manufacturing defects, paired with a full 1-year warranty on stitching and solid brass hardware.'
        }
      ]
    },
    footer: {
      brandDesc: 'An authentic Egyptian luxury brand dedicated to handcrafted 100% genuine full-grain leather goods. We unite heritage vegetable tanning with reinforced hand-stitching to ensure your pieces endure for decades.',
      followUs: 'Connect With Our Official Pages:',
      quickLinksTitle: 'The Artisan Dopp Kit',
      customerCareTitle: 'Customer Care',
      inspectPolicy: 'Inspection Before Payment Policy',
      exchangePolicy: '14-Day Free Exchange & Returns',
      leatherCare: 'Leather Care & Conditioning Guide',
      corporateInquiries: 'Corporate Gifting & Laser Engraving',
      calloutText: 'Customer Support WhatsApp:',
      copyright: 'All rights reserved. Handcrafted in Egypt.'
    },
    cartDrawer: {
      title: 'Shopping Cart',
      itemsCount: (n: number) => `${n} item${n === 1 ? '' : 's'} in cart`,
      emptyTitle: 'Your cart is currently empty',
      emptySub: 'Discover our handcrafted Artisan Dopp Kit and treat yourself to authentic Egyptian luxury.',
      startShopping: 'Explore The Collection',
      freeShippingUnlocked: '🎉 Congratulations! You have unlocked Free Shipping!',
      freeShippingAway: (amt: string) => `Add ${amt} EGP more to enjoy Free Shipping!`,
      clearCart: 'Clear',
      orderSummary: 'Order Summary',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      shippingNote: 'Calculated upon courier inspection',
      total: 'Total',
      checkoutBtn: 'Proceed to WhatsApp Checkout',
      each: 'each'
    },
    checkoutModal: {
      title: 'Complete Order & Delivery Info',
      subtitle: 'Cash on delivery after full unboxing & inspection with the courier',
      stepSummary: 'Order Summary',
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'e.g. Mostafa Mahmoud',
      phoneLabel: 'Mobile Number *',
      phonePlaceholder: 'e.g. 01012345678',
      altPhoneLabel: 'Alternative Phone (Optional)',
      altPhonePlaceholder: 'e.g. 01198765432',
      govLabel: 'Governorate *',
      addressLabel: 'Detailed Delivery Address *',
      addressPlaceholder: 'Area, Street name, Building number, Apartment',
      notesLabel: 'Order Notes / Preferred Delivery Time (Optional)',
      notesPlaceholder: 'e.g. Deliver after 5 PM, or laser engrave initials...',
      freeInspectionBadge: 'Free inspection guaranteed with the courier before paying',
      submitBtn: 'Send Order via WhatsApp',
      sendingBtn: 'Preparing Your Order...',
      successTitle: 'Order Formulated Successfully!',
      successSub: 'Redirecting you to WhatsApp to send your order details directly to our workshop...',
      openWhatsAppBtn: 'Open WhatsApp Now',
      errors: {
        nameRequired: 'Please enter your full name for the shipping bill.',
        phoneRequired: 'Phone number is required for the courier.',
        phoneInvalid: 'Please enter a valid Egyptian mobile number (e.g. 01012345678).',
        addressRequired: 'Please provide detailed delivery address.'
      },
      waHeader: '🛍️ New Order from Selim Leather',
      waClient: '👤 Customer Name:',
      waPhone: '📞 Phone:',
      waAddress: '📍 Address:',
      waProducts: '📦 Ordered Products:',
      waColor: 'Color:',
      waQty: 'Qty:',
      waPrice: 'Price:',
      waTotal: '💰 Total:',
      waNotes: '📝 Notes:',
      waNoNotes: 'No additional notes',
      waAltPhone: '(Alt Phone: '
    },
    socialPopup: {
      badge: 'Selim Leather Community',
      title: 'Welcome to Our Atelier!',
      description: 'Follow our official social channels to see behind-the-scenes leathercraft, raw hide workshops, and exclusive seasonal drops ✨',
      dontShowAgain: "Don't show this message again",
      exploreBtn: 'Explore The Store',
      follow: 'Follow',
      like: 'Like',
      workshopVideos: 'Watch Videos',
      liveChat: 'Live Chat'
    },
    colorSelector: {
      selectedColor: 'Selected Color:',
      availableColors: (n: number) => `(${n} available shades)`,
      selectColorAria: (name: string) => `Select color ${name}`
    },
    quickView: {
      closeModal: 'Close modal',
      freeInspection: 'Free inspection upon delivery',
      reviewsCount: (n: number) => `(${n} reviews)`,
      egpText: 'EGP',
      craftSpecs: 'Handcrafted Specifications:',
      quantityLabel: 'Quantity:',
      addToCart: 'Add to Shopping Cart',
      addedToCart: 'Added to Cart!',
      directWhatsApp: 'Instant WhatsApp Order',
      decreaseQty: 'Decrease quantity',
      increaseQty: 'Increase quantity',
      waGreeting: 'Hello Selim Leather, I would like to order this item directly:\n',
      waItem: '📦 Product:',
      waColor: '🎨 Color:',
      waQty: '🔢 Quantity:',
      waPrice: '💰 Total Price:'
    },
    floatingDock: {
      ariaLabel: 'Floating social media links',
      facebook: 'Facebook',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      whatsapp: 'WhatsApp'
    },
    stickyMobile: {
      total: 'Total',
      totalItems: (n: number) => `Total (${n} items):`,
      checkout: 'Checkout (WhatsApp)',
      cartAria: 'View shopping cart'
    },
    notificationToast: {
      title: 'Cart Notification',
      cartBtn: 'Cart'
    }
  },
  ar: {
    common: {
      brandName: 'سليم للجلود الطبيعية',
      brandSub: 'سليم للمصنوعات الجلدية الطبيعية',
      currency: 'ج.م',
      inspectBadge: 'معاينة وفحص قبل الاستلام',
      inspectNotice: 'معاينة وفحص الشحنة قبل الاستلام والدفع 100%',
      viewDetails: 'معاينة التفاصيل',
      addToCart: 'أضف إلى السلة',
      addedToCart: 'تمت الإضافة للسلة بنجاح!',
      directWhatsAppOrder: 'طلب مباشر عبر واتساب',
      fastDelivery: 'شحن سريع لكافة محافظات مصر',
      warranty: 'ضمان حقيقي لمدة عام',
      ratingSuffix: 'تقييم موثق',
      save: 'وفر',
      limitedStock: 'إصدار حرفي محدود',
      egp: 'جنيه مصري'
    },
    navbar: {
      announcement: 'جلد طبيعي بقري فاخر مدبوغ نباتياً • معاينة وفحص الشحنة قبل الاستلام والدفع 100% • شحن لجميع محافظات مصر',
      salesWhatsApp: 'واتساب المبيعات:',
      home: 'الرئيسية',
      doppKit: 'تفاصيل الحقيبة والألوان',
      craftsmanship: 'حرفتنا اليدوية',
      reviews: 'آراء العملاء',
      faqs: 'الأسئلة الشائعة',
      switchLangText: 'English',
      switchLangCode: 'en',
      directOrder: 'طلب مباشر',
      cartTitle: 'سلة التسوق',
      menuTitle: 'القائمة الرئيسية'
    },
    hero: {
      badge: 'حرفة يدوية مصرية أصيلة • جلد طبيعي 100% بدون أي مواد صناعية',
      headlineMain: 'فخامة الجلد الطبيعي المعتق',
      headlineSub: 'حقيبة اليد والمستلزمات «Artisan Dopp Kit»',
      description: 'نصنع في سليم للجلود تحفتنا الحرفية من أرقى طبقات الجلد البقري الطبيعي 100% بنمط Crazy Horse الفاخر. رفيقك اليومي الأنيق لتنظيم أدوات الحلاقة، العطور، والهواتف مع سحاب نحاسي متين وحق المعاينة والفحص قبل الاستلام.',
      trustPillars: [
        { title: 'جلد بقري طبيعي 100%', sub: 'تشطيب Crazy Horse الفاخر' },
        { title: 'معاينة قبل الدفع', sub: 'افحص طلبك مع المندوب' },
        { title: 'ضمان حقيقي لمدة عام', sub: 'على الخياطة والإكسسوار' }
      ],
      ctaShop: 'اكتشف تفاصيل الحقيبة والألوان',
      ctaWhatsApp: 'طلب مباشر عبر واتساب',
      showcaseTag: 'إصدار حصري 2026 • 4 ألوان',
      showcaseWeekly: 'الإصدار الحرفي الأيقوني',
      showcaseName: 'The Artisan Dopp Kit',
      browseColors: 'استعراض الألوان',
      socialProofScore: '★ 4.9',
      socialProofText: '+1,200 عميل راضٍ في مصر',
      socialProofSub: 'تقييمات ممتازة وموثقة'
    },
    trustBadges: [
      {
        title: 'جلد طبيعي 100% معتمد',
        description: 'جلود بقري طبيعية مدبوغة نباتياً خالية من أي بلاستيك أو جلود مقلدة مع اختبار الحرق الطبيعي.'
      },
      {
        title: 'معاينة وفحص قبل الاستلام',
        description: 'افتح الطرد وافحص جودة الجلد والتقفيل مع المندوب قبل دفع جنيه واحد، وثقتك هي أولويتنا.'
      },
      {
        title: 'طلب مباشر وتأكيد واتساب',
        description: 'أتمم طلبك بكبسة زر واحدة عبر واتساب بدون بطاقات بنكية، مع متابعة شخصية خطوة بخطوة.'
      },
      {
        title: 'صناعة يدوية تدوم أجيالاً',
        description: 'قص يدوي دقيق وخياطة متينة بخيوط مشمعة وإكسسوارات نحاسية أصلية مقاومة للصدأ.'
      }
    ],
    productShowcase: {
      tag: 'القطعة الحرفية الأيقونية لعام 2026',
      title: 'حقيبة المستلزمات واليد الفاخرة',
      subtitle: 'صُممت بعناية فائقة لتكون رفيقك الدائم في يومك وسفرك. مقتنى كلاسيكي من الجلد الطبيعي البقري 100% بنمط Crazy Horse يجمع بين متانة الحرفة وسحر العتاقة المتجدد.',
      selectedColorLabel: 'اللون المعروض:',
      genuineTag: 'جلد طبيعي Crazy Horse',
      switchPrompt: 'اضغط على أي لون للتبديل الفوري للصورة:',
      colorsCount: '4 ألوان أصلية',
      selected: 'محدد',
      preview: 'عرض',
      afterDiscount: 'السعر بعد الخصم:',
      freeShippingNotice: 'شحن لجميع المحافظات',
      chooseColorForOrder: 'اللون المختار للطلب:',
      specsTitle: 'المواصفات الحرفية للحقيبة:',
      specs: [
        'جلد بقري طبيعي 100% بنمط Crazy Horse المعتق.',
        'سحاب نحاسي عريض متين مع مقبض يد جلدي جانبي مقوى.',
        'حجم فسيح (25×12×11 سم) يتسع لأدوات الحلاقة، العطور، والهواتف.',
        'لسان سحب جانبي مع حلقة نحاسية لسهولة وسلاسة الفتح.',
        'خياطة مشمعة يدوية فائقة القوة ومقاومة للاهتراء.'
      ],
      addToCartBtn: (price: number) => `أضف إلى السلة (${price.toLocaleString('ar-EG')} ج.م)`,
      addedBtn: 'تمت الإضافة للسلة بنجاح!',
      directWhatsAppBtn: 'طلب فوري مباشر عبر واتساب (معاينة قبل الدفع)',
      badge1: 'معاينة وفحص 100%',
      badge2: 'شحن سريع للمحافظات',
      badge3: 'ضمان صيانة عام كامل',
      colorsGridTitle: 'استكشف درجات الألوان الأربعة الفاخرة',
      colorsGridSub: 'كل لون تم اختياره وصباغته بعناية فائقة ليعكس شخصيتك، والجلد الطبيعي يكتسب بريقاً ساحراً وعتاقة أجمل مع مرور الوقت.',
      colorCardBadge: (idx: number) => `خيار #${idx + 1}`,
      selectedNow: 'محدد الآن',
      activeInPreview: 'اللون النشط في المعاينة',
      selectThisColor: 'اختر هذا اللون للمعاينة والطلب',
      engravingTitle: 'هل تبحث عن حفر اسم أو إهداء خاص على الحقيبة؟',
      engravingSub: 'نوفر خدمة الحفر الدقيق بالليزر للأسماء والحروف الأولى للشركات والإهداءات الشخصية عبر واتساب.',
      talkToArtisan: 'تحدث مع الحِرفي في واتساب'
    },
    craftsmanship: {
      tag: 'حرفة تتوارثها الأجيال',
      title: 'أسرار الصنعة والجلد الطبيعي الأصيل',
      subtitle: 'في ورشتنا، لا نؤمن بالإنتاج التجاري السريع؛ كل قطعة من سليم للجلود هي عمل فني فريد يستغرق ساعات من التركيز والإتقان اليدوي لنقدم لك رفيقاً يدوم مدى الحياة.',
      steps: [
        {
          title: 'انتقاء الجلد الطبيعي الكامل (Full-Grain)',
          description: 'نختار الطبقة السطحية العلوية للجلد الطبيعي، وهي الأقوى والأغلى، حيث تحتفظ بمساماتها الطبيعية وتزداد بريقاً وجمالاً (Patina) بمرور السنين بدلاً من أن تتشقق.'
        },
        {
          title: 'الدباغة النباتية الصديقة للبيئة',
          description: 'تتم دباغة جلودنا بخلاصات نباتية ولحاء الأشجار الطبيعي بعيداً عن الكيماويات الضارة، مما يمنح الجلد رائحته الأصلية الذكية وملمسه الدافئ الفاخر.'
        },
        {
          title: 'الخياطة اليدوية بخيوط مشمعة',
          description: 'تُثقب القطع يدوياً بدقة متناهية وتُحاك بنمط السراجة المزدوجة بخيوط بوليستر مشمعة تقاوم أعتى قوى الشد، وتضمن عدم انفراط أي غرزة طوال عمر المنتج.'
        },
        {
          title: 'صقل الحواف بشمع العسل الطبيعي',
          description: 'تمر حواف كل قطعة بعدة مراحل من السنفرة والتنعيم ثم تُطلى بشمع العسل العضوي وتُصقل بقطع الخشب الصلب لتصل إلى ملمس ناعم كالحرير يقاوم الرطوبة.'
        }
      ],
      strictQuality: 'معايير جودة صارمة',
      goldenGuaranteeTitle: 'ضمان سليم الذهبي: افحص بنفسك قبل أن تدفع',
      goldenGuaranteeSub: 'يحق لك إجراء اختبار رائحة الجلد واختبار الملمس مع مندوب التوصيل للتأكد من أصالة الجلد الطبيعي بنسبة 100%.'
    },
    testimonials: {
      tag: 'تجارب حقيقية موثقة',
      title: 'ماذا يقول عملاؤنا عن جودة سليم؟',
      subtitle: 'فخورون بثقة أكثر من 1,200 عميل في كافة محافظات مصر، وآراؤهم هي وسام شرف على صدورنا.',
      verifiedBuyer: 'مشتري موثق',
      reviews: [
        {
          id: 1,
          name: 'م. أحمد الشناوي',
          city: 'القاهرة - التجمع الخامس',
          comment: 'استلمت حقيبة اليد بلون البني المعتق (Vintage Brown) من يومين. بجد خامة الجلد الطبيعي Crazy Horse خرافية والمقبض قوي جداً والسحاب نحاسي ناعم. المعاينة قبل الاستلام شجعتني ومبسوط جداً بالتجربة.',
          productName: 'حقيبة اليد والمستلزمات «The Artisan Dopp Kit»',
          date: 'منذ 3 أيام'
        },
        {
          id: 2,
          name: 'د. سارة المنشاوي',
          city: 'الإسكندرية - سموحة',
          comment: 'طلبت اللون الأخضر الزيتي الملكي كهدية لزوجي، اللون في الحقيقة أجمل بكتير وفخم جداً! حجم الشنطة ممتاز للمستلزمات الشخصية والسفر، وتقفيل الخياطة يدوي ونظيف بدون غلطة.',
          productName: 'حقيبة اليد والمستلزمات «The Artisan Dopp Kit»',
          date: 'منذ أسبوع'
        },
        {
          id: 3,
          name: 'كريم الباز',
          city: 'الجيزة - الدقي',
          comment: 'اشتريت لون الهافان الجملي واستخدمتها في سفريتي الأخيرة؛ شالت كل أدوات الحلاقة والعطور والشواحن بشكل منظم وأنيق. السحاب النحاسي خامته ثقيلة والجلد ريحته أصيلة. تسلم إيديكم.',
          productName: 'حقيبة اليد والمستلزمات «The Artisan Dopp Kit»',
          date: 'منذ أسبوعين'
        }
      ]
    },
    faqs: {
      tag: 'إجابات واضحة لراحتك',
      title: 'الأسئلة الشائعة وسياسة الشراء',
      subtitle: 'كل ما تحتاج لمعرفته حول المعاينة، نوع الجلد، الشحن، والضمان قبل تأكيد طلبك.',
      items: [
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
      ]
    },
    footer: {
      brandDesc: 'براند مصري متخصص في تصميم وتصنيع المصنوعات الجلدية الطبيعية 100% يدوياً بحرفية عالية. نجمع بين أصالة الدباغة النباتية ودقة الخياطة اليدوية لتدوم مقتنياتك لعقود.',
      followUs: 'تواصل وتابع صفحاتنا الرسمية:',
      quickLinksTitle: 'حقيبة The Artisan Dopp Kit',
      customerCareTitle: 'خدمة العملاء',
      inspectPolicy: 'سياسة المعاينة قبل الدفع',
      exchangePolicy: 'الاستبدال والاسترجاع (14 يوم)',
      leatherCare: 'دليل العناية بالجلد الطبيعي',
      corporateInquiries: 'طلبات الشركات والحفر المخصص',
      calloutText: 'تواصل مع خدمة العملاء:',
      copyright: 'جميع الحقوق محفوظة. صُنع يدوياً في مصر.'
    },
    cartDrawer: {
      title: 'سلة التسوق',
      itemsCount: (n: number) => `${n} منتجات في السلة`,
      emptyTitle: 'سلتك فارغة حالياً',
      emptySub: 'استكشف حقيبة المستلزمات اليدوية واقتنِ قطعة فريدة تدوم معك.',
      startShopping: 'تصفح التشكيلة',
      freeShippingUnlocked: '🎉 تهانينا! حصلت على شحن مجاني!',
      freeShippingAway: (amt: string) => `أضف ${amt} ج.م إضافية للحصول على شحن مجاني!`,
      clearCart: 'تفريغ',
      orderSummary: 'ملخص الطلب',
      subtotal: 'المجموع الفرعي',
      shipping: 'الشحن',
      shippingNote: 'يُحتسب عند المعاينة مع المندوب',
      total: 'الإجمالي النهائي',
      checkoutBtn: 'متابعة إتمام الطلب (واتساب)',
      each: 'للقطعة'
    },
    checkoutModal: {
      title: 'إتمام الطلب وتأكيد الشحن',
      subtitle: 'الدفع عند الاستلام بعد المعاينة والفحص الكامل مع المندوب',
      stepSummary: 'ملخص الطلب',
      fullNameLabel: 'الاسم بالكامل *',
      fullNamePlaceholder: 'مثال: مصطفى محمود',
      phoneLabel: 'رقم الهاتف المحمول *',
      phonePlaceholder: 'مثال: 01012345678',
      altPhoneLabel: 'رقم هاتف بديل (اختياري)',
      altPhonePlaceholder: 'مثال: 01198765432',
      govLabel: 'المحافظة *',
      addressLabel: 'العنوان بالتفصيل *',
      addressPlaceholder: 'المنطقة، اسم الشارع، رقم العمارة، الشقة',
      notesLabel: 'ملاحظات الطلب أو موعد التسليم المفضل (اختياري)',
      notesPlaceholder: 'مثال: التسليم بعد الساعة 5 مساءً أو حفر اسم مخصص...',
      freeInspectionBadge: 'معاينة وفحص مجاني مع المندوب قبل دفع أي جنيه',
      submitBtn: 'إرسال الطلب عبر واتساب',
      sendingBtn: 'جاري تجهيز الطلب...',
      successTitle: 'تم تجهيز الطلب بنجاح!',
      successSub: 'جاري نقلك إلى واتساب لإرسال تفاصيل طلبك مباشرة للإدارة...',
      openWhatsAppBtn: 'فتح واتساب الآن',
      errors: {
        nameRequired: 'يرجى كتابة الاسم بالكامل لتسجيل البوليصة',
        phoneRequired: 'رقم الهاتف مطلوب لتواصل مندوب الشحن',
        phoneInvalid: 'يرجى إدخال رقم هاتف مصري صحيح (مثال: 01012345678)',
        addressRequired: 'يرجى إدخال العنوان بالتفصيل (المنطقة، الشارع، العمارة)'
      },
      waHeader: '🛍️ طلب جديد من Selim Leather',
      waClient: '👤 اسم العميل:',
      waPhone: '📞 الهاتف:',
      waAddress: '📍 العنوان:',
      waProducts: '📦 المنتجات المطلوبة:',
      waColor: 'اللون:',
      waQty: 'الكمية:',
      waPrice: 'السعر:',
      waTotal: '💰 الإجمالي:',
      waNotes: '📝 ملاحظات:',
      waNoNotes: 'لا توجد ملاحظات إضافية',
      waAltPhone: ' (هاتف بديل: '
    },
    socialPopup: {
      badge: 'مجتمع سليم للجلود الطبيعية',
      title: 'يسعدنا انضمامك إلى عائلتنا!',
      description: 'تابعنا على منصات التواصل الاجتماعي لتكون أول من يشاهد أحدث تشكيلاتنا الجلدية اليدوية، كواليس الورشة، وعروضنا الحصرية ✨',
      dontShowAgain: 'عدم إظهار هذه الرسالة مرة أخرى',
      exploreBtn: 'تصفح تشكيلة المتجر الآن',
      follow: 'متابعة',
      like: 'إعجاب',
      workshopVideos: 'فيديوهات الورشة',
      liveChat: 'محادثة فورية'
    },
    colorSelector: {
      selectedColor: 'اللون المختار:',
      availableColors: (n: number) => `(${n} ألوان متوفرة)`,
      selectColorAria: (name: string) => `اختيار اللون ${name}`
    },
    quickView: {
      closeModal: 'إغلاق النافذة',
      freeInspection: 'معاينة حرة قبل استلام الشحنة',
      reviewsCount: (n: number) => `(${n} تقييم)`,
      egpText: 'جنيه مصري',
      craftSpecs: 'مواصفات الحرفة اليدوية:',
      quantityLabel: 'الكمية:',
      addToCart: 'إضافة إلى سلة التسوق',
      addedToCart: 'تمت الإضافة للسلة!',
      directWhatsApp: 'طلب فوري بالواتساب',
      decreaseQty: 'إنقاص الكمية',
      increaseQty: 'زيادة الكمية',
      waGreeting: 'مرحباً سليم للجلود، أود طلب المنتج التالي مباشرة:\n',
      waItem: '📦 المنتج:',
      waColor: '🎨 اللون:',
      waQty: '🔢 الكمية:',
      waPrice: '💰 الإجمالي:'
    },
    floatingDock: {
      ariaLabel: 'قنوات التواصل الاجتماعي العائمة',
      facebook: 'فيسبوك',
      instagram: 'انستجرام',
      tiktok: 'تيك توك',
      whatsapp: 'واتساب'
    },
    stickyMobile: {
      total: 'الإجمالي',
      totalItems: (n: number) => `الإجمالي (${n} قطع):`,
      checkout: 'إتمام الطلب (واتساب)',
      cartAria: 'عرض سلة التسوق'
    },
    notificationToast: {
      title: 'إشعار السلة',
      cartBtn: 'السلة'
    }
  }
};
