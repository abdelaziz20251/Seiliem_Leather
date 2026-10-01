# سليم للجلود الطبيعية | Selim Leather 🛍️✨

تطبيق ويب تجارة إلكترونية فاخر ومتكامل للواجهة الأمامية (100% Frontend-Only) مخصص للمصنوعات والمنتجات الجلدية الطبيعية البقرية 100% اليدوية (شنط، محافظ، وأساور جلدية).

المشروع مبني بأحدث التقنيات ومُهيأ بالكامل للنشر الفوري التلقائي على منصة **Vercel** بدون أي إعدادات معقدة (Zero-Config)، ومربوط بالمستودع الرسمي على GitHub.

---

## 🌟 المزايا الرئيسية (Core Features)

1. **تصميم فاخر وعالي التباين (Luxury High-End UI/UX):**
   - ألوان دافئة ومستوحاة من ألوان الجلد الطبيعي المعتق: إسبريسو داكن (`#1F150F`)، كونياك دافئ (`#6F3819`)، هافان وتان غني (`#C68642`)، مع لمسات نحاسية وذهبية مطفية (`#C5A059`).
   - دعم كامل للغة العربية والاتجاه من اليمين إلى اليسار (`dir="rtl"`) مع خط **Cairo** الحديث من Google Fonts.
   - تأثيرات تفاعلية ناعمة (Micro-interactions, Hover scales, Glassmorphism).

2. **محدد الألوان والصور التفاعلي (Interactive Color & Image Selector):**
   - تبديل فوري وديناميكي لصورة المنتج بمجرد النقر على أي عينة لون (Color Swatch) سواء داخل بطاقة المنتج أو نافذة المعاينة السريعة.
   - ربط دقيق للون المختار بسلة التسوق وبالرسالة الصادرة إلى واتساب.

3. **سلة مشتريات دائمة (Persistent Shopping Cart Drawer):**
   - سلة جانبية تفاعلية مدعومة بـ `LocalStorage` للاحتفاظ بالمنتجات عند تحديث الصفحة أو إغلاق المتصفح.
   - شريط تقدم ذكي لحساب قيمة الشحن المجاني (أكثر من 1500 ج.م).
   - التحكم الكامل في زيادة أو إنقاص الكمية، وحذف العناصر مع احتساب فوري للمجموع (EGP).

4. **نموذج إتمام الطلب ومولد رسائل واتساب (WhatsApp Order Generator):**
   - نافذة دفع منبثقة مصممة خصيصاً للشحن في مصر (الاسم، الهاتف المصري، هاتف بديل، اختيار المحافظة، العنوان التفصيلي، والملاحظات).
   - ميزة المعاينة والفحص قبل الاستلام والدفع عند الباب.
   - توليد رسالة واتساب منسقة ومُرمزة بدقة (URL Encoded) تُرسل مباشرة إلى رقم الإدارة عبر الرابط الرسمي:
     ```text
     🛍️ طلب جديد من Selim Leather
     --------------------------------
     👤 اسم العميل: [Name]
     📞 الهاتف: [Phone]
     📍 العنوان: [City - Address]
     --------------------------------
     📦 المنتجات المطلوبة:
     - [Product 1] | اللون: [Color] | الكمية: [Qty] | السعر: [Price] EGP
     - [Product 2] | اللون: [Color] | الكمية: [Qty] | السعر: [Price] EGP
     --------------------------------
     💰 الإجمالي: [Total] جنيه مصري
     📝 ملاحظات: [Notes]
     ```

5. **أقسام متكاملة لزيادة المبيعات وبناء الثقة:**
   - شارات الثقة (جلد طبيعي 100%، معاينة قبل الدفع، شحن لكافة المحافظات، ضمان لمدة عام).
   - حكاية الحرفة اليدوية (الدباغة النباتية، الخياطة المشمعة، وصقل شمع العسل).
   - تقييمات موثقة لعملاء حقيقيين في محافظات مصر.
   - قسم الأسئلة الشائعة بنظام الأكورديون التفاعلي (FAQ).

---

## 🛠️ البنية التقنية (Tech Stack)

- **Framework:** React 19 + TypeScript + Vite 8
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Icons:** Lucide React
- **Fonts:** Google Font (Cairo)
- **State Management:** React Context API + LocalStorage Persistence
- **Hosting / Deployment:** Vercel (Static Zero-Config)

---

## 📁 هيكل المجلدات (Folder Structure)

```text
Selim_Leather/
├── public/
│   └── favicon.svg              # أيقونة المتجر الجلدية
├── src/
│   ├── components/
│   │   ├── CartDrawer.tsx       # سلة التسوق الجانبية
│   │   ├── CheckoutModal.tsx    # نموذج الشحن ومولد رسالة واتساب
│   │   ├── CraftsmanshipSection.tsx # قسم أسرار الصناعة اليدوية
│   │   ├── FAQSection.tsx       # الأسئلة الشائعة وسياسة المعاينة
│   │   ├── Footer.tsx           # تذييل الصفحة الفاخر
│   │   ├── Hero.tsx             # القسم الترحيبي الرئيسي
│   │   ├── Navbar.tsx           # شريط الإعلانات والتنقل العلوي
│   │   ├── NotificationToast.tsx# إشعار إضافة المنتجات للسلة
│   │   ├── ProductCard.tsx      # بطاقة المنتج ومحدد الألوان التفاعلي
│   │   ├── ProductGrid.tsx      # شبكة المنتجات وتصنيفات الفلترة
│   │   ├── ProductQuickView.tsx # نافذة المعاينة السريعة
│   │   └── TrustBadges.tsx      # شارات الضمان والجلد الطبيعي
│   ├── context/
│   │   └── CartContext.tsx      # إدارة حالة السلة والتخزين المحلي
│   ├── data/
│   │   └── products.ts          # بيانات المنتجات والمواصفات والألوان
│   ├── types/
│   │   └── index.ts             # تعريفات TypeScript
│   ├── App.tsx                  # المكون الرئيسي
│   ├── index.css                # أنماط Tailwind والتنسيقات الفاخرة
│   └── main.tsx                 # نقطة الدخول للتطبيق
├── .gitignore                   # ملف استثناءات Git الشامل
├── index.html                   # صفحة HTML مهيأة لـ RTL والـ SEO
├── package.json                 # الاعتماديات وأوامر التشغيل
├── postcss.config.js            # إعدادات معالج CSS
├── tailwind.config.js           # لوحة ألوان الجلد والأبعاد
├── tsconfig.json                # إعدادات TypeScript
└── vite.config.ts               # إعدادات مجمع Vite
```

---

## 🚀 التشغيل محلياً (Local Development)

1. تثبيت الاعتماديات:
   ```bash
   npm install
   ```

2. تشغيل خادم التطوير المحلي:
   ```bash
   npm run dev
   ```

3. بناء نسخة الإنتاج والتحقق من سلامة الأكواد:
   ```bash
   npm run build
   ```

---

## 📦 أوامر Git لرفع المشروع على المستودع (GitHub Push)

المستودع المستهدف:
`https://github.com/abdelaziz20251/Seiliem_Leather.git`

نفّذ الأوامر التالية بالترتيب في موجه الأوامر (Terminal / PowerShell):

```bash
# 1. تهيئة مستودع Git في حال لم يتم تهيئته:
git init

# 2. تحديد الفرع الافتراضي كـ main:
git branch -M main

# 3. ربط المستودع البعيد:
git remote remove origin 2> $null
git remote add origin https://github.com/abdelaziz20251/Seiliem_Leather.git

# 4. إضافة وتجهيز جميع الملفات للرفع:
git add .

# 5. عمل الـ Commit الأول:
git commit -m "feat: complete Selim Leather production MVP e-commerce app with whatsapp order dispatch"

# 6. رفع الأكواد مباشرة إلى GitHub (مع فرض التحديث إذا لزم الأمر):
git push -u origin main
```

> **ملاحظة:** إذا كان المستودع على GitHub يحتوي بالفعل على ملفات أولية (مثل License أو README أولي)، يمكنك استخدام:
> ```bash
> git push -u origin main --force
> ```

---

## 🌐 النشر على منصة Vercel (Zero-Config Deployment)

1. توجه إلى [Vercel Dashboard](https://vercel.com/new).
2. اختر **Import Git Repository** وحدد مستودع: `abdelaziz20251/Seiliem_Leather`.
3. سيتعرف Vercel تلقائياً على إعدادات المشروع:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. اضغط على زر **Deploy**.
5. سيتم بناء الموقع ونشره في أقل من دقيقة مع رابط مباشر وشهادة SSL مجانية وتحديث تلقائي عند كل Push جديد.
