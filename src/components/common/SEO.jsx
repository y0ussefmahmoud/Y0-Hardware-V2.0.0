import { useEffect } from 'react';

const SEO = ({
  title = 'Y0 Hardware - متجر قطع الكمبيوتر واللابتوب',
  description = 'متجر Y0 Hardware المتخصص في بيع قطع الكمبيوتر واللابتوب والاكسسوارات بأفضل الأسعار وأعلى جودة في مصر',
  keywords = 'قطع كمبيوتر, لابتوب, اكسسوارات, معالجات, كروت شاشة, ذاكرة عشوائية, مصر',
  image = '/og-image.jpg',
  url = 'https://y0hardware.com',
  type = 'website',
  author = 'Y0 Hardware',
  siteName = 'Y0 Hardware',
  locale = 'ar_EG',
  twitterHandle = '@y0hardware',
  structuredData,
  canonical,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = title.includes('Y0 Hardware') ? title : `${title} | Y0 Hardware`;
  const fullUrl = url.startsWith('http') ? url : `https://y0hardware.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://y0hardware.com${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`);

    // Open Graph meta tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullImage, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', locale, true);

    // Twitter meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImage);
    updateMetaTag('twitter:site', twitterHandle);
    updateMetaTag('twitter:creator', twitterHandle);

    // Canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [fullTitle, description, keywords, author, fullImage, fullUrl, type, siteName, locale, twitterHandle, canonical, structuredData, noindex, nofollow]);

  return null;
};

// Predefined SEO configurations for different page types
export const HomeSEO = () => (
  <SEO
    title="Y0 Hardware - متجر قطع الكمبيوتر واللابتوب الأول في مصر"
    description="اكتشف أحدث قطع الكمبيوتر واللابتوب والاكسسوارات في Y0 Hardware. أفضل الأسعار، جودة عالية، شحن سريع في جميع أنحاء مصر."
    keywords="متجر كمبيوتر, قطع كمبيوتر, لابتوب ألعاب, معالجات Intel, AMD, كروت شاشة NVIDIA, RTX, مصر"
    url="/"
    structuredData={{
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "Y0 Hardware",
      "description": "متجر قطع الكمبيوتر واللابتوب",
      "url": "https://y0hardware.com",
      "telephone": "+201234567890",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "شارع التحرير، وسط البلد",
        "addressLocality": "القاهرة",
        "addressCountry": "مصر"
      }
    }}
  />
);

export const ShopSEO = () => (
  <SEO
    title="متجر المنتجات - Y0 Hardware"
    description="تسوق من مجموعة واسعة من قطع الكمبيوتر واللابتوب والاكسسوارات. معالجات، كروت شاشة، ذاكرة، وأكثر بأفضل الأسعار."
    keywords="تسوق كمبيوتر, معالجات, كروت شاشة, ذاكرة عشوائية, لوحات مفاتيح, فئران ألعاب"
    url="/shop"
  />
);

export const CartSEO = () => (
  <SEO
    title="سلة التسوق - Y0 Hardware"
    description="راجع منتجاتك المختارة وأكمل عملية الشراء بأمان. شحن سريع وضمان شامل على جميع المنتجات."
    url="/cart"
    noindex={true}
  />
);

export const AboutSEO = () => (
  <SEO
    title="من نحن - Y0 Hardware"
    description="تعرف على قصة Y0 Hardware وفريق العمل. أكثر من 5 سنوات من الخبرة في مجال قطع الكمبيوتر والتكنولوجيا في مصر."
    url="/about"
  />
);

export const ContactSEO = () => (
  <SEO
    title="تواصل معنا - Y0 Hardware"
    description="تواصل مع فريق Y0 Hardware للاستفسارات والدعم الفني. خدمة عملاء متاحة 24/7 لمساعدتك في اختيار المنتجات المناسبة."
    url="/contact"
  />
);

export const ProductSEO = ({ product }) => {
  if (!product) return <SEO />;
  
  return (
    <SEO
      title={`${product.name} - Y0 Hardware`}
      description={`${product.description} - متوفر الآن في Y0 Hardware بسعر ${product.price} جنيه مصري. شحن سريع وضمان شامل.`}
      keywords={`${product.name}, ${product.brand}, ${product.category}, قطع كمبيوتر, مصر`}
      image={product.image}
      url={`/product/${product.id}`}
      type="product"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "brand": {
          "@type": "Brand",
          "name": product.brand
        },
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "EGP",
          "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          "seller": {
            "@type": "Organization",
            "name": "Y0 Hardware"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "reviewCount": product.reviewCount
        }
      }}
    />
  );
};

export default SEO;
