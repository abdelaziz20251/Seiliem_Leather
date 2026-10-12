import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  SITE_URL,
  STORE_PHONE_INTL,
  SOCIAL_LINKS,
  PRODUCTS,
  TESTIMONIALS
} from '../data/products';

interface SEOHeadProps {
  currentView: 'landing' | 'product';
}

export const SEOHead: React.FC<SEOHeadProps> = ({ currentView }) => {
  const { language, isRTL } = useLanguage();
  const product = PRODUCTS[0];

  const pageTitle =
    currentView === 'product'
      ? language === 'en'
        ? 'The Artisan Leather Dopp Kit | 100% Genuine Cowhide | Seliem Leather'
        : 'حقيبة اليد والمستلزمات «The Artisan Dopp Kit» | جلد طبيعي 100% | سليم للجلود'
      : language === 'en'
      ? 'Seliem Leather | Handcrafted Genuine Leather Masterpieces in Egypt'
      : 'سليم للجلود الطبيعية | Seliem Leather - حقائب يد ومصنوعات جلدية أصيلة 100%';

  const pageDescription =
    language === 'en'
      ? 'Seliem Leather handcrafts luxury 100% full-grain Crazy Horse cowhide Dopp kits and bags in Egypt. Featuring solid antique brass zippers, reinforced handles, and 100% free courier inspection before payment.'
      : 'سليم للجلود الطبيعية: صناعة يدوية فاخرة لحقائب اليد والمستلزمات من جلد بقري طبيعي 100% Crazy Horse المعتق. سحاب نحاسي عريض، مقبض يد مقوى، وحق الفحص والمعاينة الكاملة قبل الدفع في جميع محافظات مصر.';

  const canonicalUrl =
    currentView === 'product'
      ? `${SITE_URL}/#product`
      : `${SITE_URL}/`;

  const heroImage = `${SITE_URL}/products/vintage-brown.jpeg`;

  // Dynamically update document title, canonical, and primary meta tags
  useEffect(() => {
    document.title = pageTitle;

    // Canonical Tag
    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = canonicalUrl;

    // Helper for meta tags
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let meta = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, key);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMetaTag('name', 'description', pageDescription);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Open Graph
    setMetaTag('property', 'og:type', currentView === 'product' ? 'product' : 'website');
    setMetaTag('property', 'og:site_name', 'Seliem Leather');
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', pageDescription);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', heroImage);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', 'The Artisan Leather Dopp Kit by Seliem Leather');
    setMetaTag('property', 'og:locale', isRTL ? 'ar_EG' : 'en_US');
    setMetaTag('property', 'og:locale:alternate', isRTL ? 'en_US' : 'ar_EG');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', pageDescription);
    setMetaTag('name', 'twitter:image', heroImage);
  }, [pageTitle, pageDescription, canonicalUrl, currentView, heroImage, isRTL]);

  // Comprehensive JSON-LD Graph for Schema.org & LLM Scraping
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Organization Entity
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Seliem Leather',
        alternateName: ['سليم للجلود الطبيعية', 'Seliem Handmade Leather'],
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: `${SITE_URL}/logo.png`,
          contentUrl: `${SITE_URL}/logo.png`,
          caption: 'Seliem Leather Official Brand Logo',
          width: '512',
          height: '512'
        },
        image: {
          '@id': `${SITE_URL}/#logo`
        },
        description:
          'Egyptian artisanal atelier specializing in 100% genuine full-grain vegetable-tanned Crazy Horse cowhide bags, pouches, and luxury accessories.',
        telephone: STORE_PHONE_INTL,
        sameAs: [
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.tiktok,
          SOCIAL_LINKS.whatsapp,
          'https://www.wikidata.org/wiki/Q286' // Wikidata entity for Leather
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: STORE_PHONE_INTL,
            contactType: 'sales and customer service',
            areaServed: 'EG',
            availableLanguage: ['Arabic', 'English']
          }
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Cairo',
          addressRegion: 'Cairo Governorate',
          addressCountry: 'EG'
        }
      },

      // 2. WebSite Entity
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Seliem Leather',
        alternateName: 'سليم للجلود',
        publisher: {
          '@id': `${SITE_URL}/#organization`
        },
        inLanguage: ['ar', 'en']
      },

      // 3. BreadcrumbList Entity
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: language === 'en' ? 'Home' : 'الرئيسية',
            item: `${SITE_URL}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name:
              language === 'en'
                ? 'Handcrafted Leather Dopp Kits'
                : 'حقائب يد ومستلزمات شخصية',
            item: `${SITE_URL}/#products`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name:
              language === 'en'
                ? 'The Artisan Dopp Kit'
                : 'حقيبة The Artisan Dopp Kit',
            item: `${SITE_URL}/#product`
          }
        ]
      },

      // 4. Product Entity
      {
        '@type': 'Product',
        '@id': `${SITE_URL}/#product-artisan-dopp-kit`,
        name:
          language === 'en'
            ? 'The Artisan Leather Dopp Kit'
            : 'حقيبة اليد والمستلزمات الفاخرة «The Artisan Dopp Kit»',
        description:
          language === 'en'
            ? 'A mastercrafted personal dopp kit & travel pouch made from 100% full-grain Crazy Horse cowhide. Designed to organize grooming kits, perfumes, phones, and chargers with a heavy-duty antique brass zipper and reinforced side handle.'
            : 'حقيبة يد ومستلزمات شخصية كلاسيكية مصنوعة يدوياً من جلد بقري طبيعي 100% بتشطيب Crazy Horse المعتق. مصممة لتنظيم أدوات العناية الشخصية، الحلاقة، العطور، والهواتف مع سحاب نحاسي عريض ومقبض يد جانبي متين.',
        sku: 'SLM-ART-DOPP-01',
        mpn: 'SLM-DOPP-2026',
        brand: {
          '@id': `${SITE_URL}/#organization`
        },
        manufacturer: {
          '@id': `${SITE_URL}/#organization`
        },
        category: 'Luggage & Bags > Dopp Kits & Cosmetic Bags',
        material: '100% Full-Grain Vegetable-Tanned Crazy Horse Cowhide',
        color: [
          'Vintage Crazy Horse Brown',
          'Dark Chocolate Espresso',
          'Vintage Olive Green',
          'Classic Camel Tan'
        ],
        image: product.colors.map((c) => `${SITE_URL}${c.image}`),
        offers: {
          '@type': 'Offer',
          url: `${SITE_URL}/#product`,
          priceCurrency: 'EGP',
          price: '890',
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: {
            '@id': `${SITE_URL}/#organization`
          },
          warranty: '1-Year Full Warranty on Stitching & Hardware',
          hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'EG',
            returnPolicyCategory:
              'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 14,
            returnMethod: 'https://schema.org/ReturnByMail',
            returnFees: 'https://schema.org/FreeReturn',
            customerRemorseReturnFees: 'https://schema.org/FreeReturn'
          },
          shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingRate: {
              '@type': 'MonetaryAmount',
              value: '0',
              currency: 'EGP'
            },
            shippingDestination: {
              '@type': 'DefinedRegion',
              addressCountry: 'EG'
            },
            deliveryTime: {
              '@type': 'ShippingDeliveryTime',
              handlingTime: {
                '@type': 'QuantitativeValue',
                minValue: 0,
                maxValue: 1,
                unitCode: 'DAY'
              },
              transitTime: {
                '@type': 'QuantitativeValue',
                minValue: 1,
                maxValue: 3,
                unitCode: 'DAY'
              }
            }
          }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '128',
          bestRating: '5',
          worstRating: '1'
        },
        review: TESTIMONIALS.map((t) => ({
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: t.name
          },
          datePublished: '2026-10-01',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: t.rating.toString(),
            bestRating: '5',
            worstRating: '1'
          },
          reviewBody: t.comment
        }))
      },

      // 5. FAQPage Entity (Crucial for AI Overviews & Google Featured Snippets)
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'هل يمكن فحص ومعاينة الشنطة مع مندوب الشحن قبل دفع ثمنها؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نعم بكل تأكيد. تمنح سليم للجلود حق المعاينة والفحص الكامل 100% مع مندوب الشحن قبل دفع أي مليم. يمكنك فتح الطرد، والتأكد من خامة الجلد الطبيعي ورائحته الأصلية وسلاسة السحاب النحاسي. وإذا لم تنل رضاك التام، يمكنك رفض الاستلام دون أي مصاريف إضافية.'
            }
          },
          {
            '@type': 'Question',
            name: 'ما هي خامة الجلد المستخدمة في حقائب سليم؟ وما هو جلد كريزي هورس (Crazy Horse)؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'جميع منتجات سليم مصنوعة حصرياً من جلد بقري طبيعي 100% من الطبقة السطحية الكاملة (Full-Grain). تشطيب Crazy Horse يتميز بالدباغة النباتية المعالجة بالشمع والزيوت الطبيعية، مما يمنحه متانة استثنائية وبريقاً عتيقاً (Patina) يزداد جمالاً مع مرور السنوات بدلاً من التلف أو التقشر.'
            }
          },
          {
            '@type': 'Question',
            name: 'ما هي أبعاد حقيبة The Artisan Dopp Kit وماذا تتسع؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'أبعاد الحقيبة هي 25 سم طول × 12 سم ارتفاع × 11 سم عرض. صُممت بحجم مثالي فسيح يتسع لمستلزمات الحلاقة الشخصية، العطور، محفظة الجيب، الهواتف الذكية، والشواحن في مكان واحد منظم ومحمي.'
            }
          },
          {
            '@type': 'Question',
            name: 'كم تستغرق مدة الشحن والتوصيل لجميع المحافظات؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'يتم تجهيز الطلب خلال 24 ساعة. يستغرق التوصيل للقاهرة والجيزة من 24 إلى 48 ساعة، وباقي محافظات مصر من 2 إلى 4 أيام عمل كحد أقصى مع المتابعة الشخصية عبر واتساب.'
            }
          },
          {
            '@type': 'Question',
            name: 'ما هي سياسة الاستبدال والضمان لدى سليم للجلود؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نوفر ضمان استبدال واسترجاع لمدة 14 يوماً ضد عيوب الصناعة، بالإضافة إلى ضمان صيانة حرفي شامل لمدة عام كامل على الخياطة اليدوية والإكسسوارات النحاسية المقاومة للصدأ.'
            }
          }
        ]
      },

      // 6. HowTo Craftsmanship Entity (Generative Extraction for AI Engines)
      {
        '@type': 'HowTo',
        '@id': `${SITE_URL}/#craftsmanship-howto`,
        name:
          language === 'en'
            ? 'How Seliem Leather Handcrafts Full-Grain Leather Goods'
            : 'مراحل صناعة الحقائب الجلدية الطبيعية يدوياً في ورشة سليم للجلود',
        description:
          'A transparent look into our traditional 4-step artisanal leathercraft process ensuring lifelong durability.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name:
              language === 'en'
                ? 'Full-Grain Top Layer Selection'
                : 'انتقاء الجلد البقري الطبيعي الكامل (Full-Grain)',
            text:
              language === 'en'
                ? 'We hand-inspect and select only top-tier full-grain hides preserving natural breathing pores and strength.'
                : 'اختيار أرقى الطبقات السطحية للجلد البقري، الأكثر قوة ومقاومة للتمزق والتي تكتسب عتاقة ساحرة مع الاستخدام.'
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name:
              language === 'en'
                ? 'Eco-Friendly Vegetable Tanning'
                : 'الدباغة النباتية بالزيوت وشمع الأشجار الطبيعي',
            text:
              language === 'en'
                ? 'Hides are steeped in natural barks and natural waxes, preventing toxic chemical wear and developing distinct pull-up patina.'
                : 'معالجة الجلود بخلاصات نباتية ولحاء الأشجار الطبيعية بعيداً عن الكيماويات الضارة، مما يمنح الجلد رائحته العطرية المميزة.'
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name:
              language === 'en'
                ? 'Hand Saddle Stitching with Waxed Threads'
                : 'الخياطة اليدوية المزدوجة بالخيوط المشمعة المعالجة',
            text:
              language === 'en'
                ? 'Seams are hand-punched and sewn with high-strength waxed polyester threads resistant to friction and moisture.'
                : 'خياطة السحاب والأطراف والمقبض بخيوط مشمعة معالجة ومقاومة للاهتراء تضمن بقاء الحقيبة متماسكة لسنوات طويلة.'
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name:
              language === 'en'
                ? 'Beeswax Edge Burnishing & Inspection'
                : 'صقل الحواف بشمع العسل الطبيعي واختبار الجودة',
            text:
              language === 'en'
                ? 'Edges are hand-slicked with organic Egyptian beeswax and every piece is tested before delivery.'
                : 'صقل وتنعيم الحواف الخشنة بشمع العسل المصري الطبيعي لحمايتها من الرطوبة، وفحص جودة السحاب قبل شحنها للعميل.'
          }
        ]
      }
    ]
  };

  return (
    <script
      id="seliem-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph, null, 2) }}
    />
  );
};
