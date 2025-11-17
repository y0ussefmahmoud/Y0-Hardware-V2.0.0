/**
 * Home Page - الصفحة الرئيسية
 * --------------------------------------------------------------
 * Purpose (الغرض): Act as the landing experience with hero, features,
 * curated product rows, categories, and AI sections for discovery.
 * Sections (الأقسام): Hero, Features, Best Sellers, Featured Products,
 * Used Products, Categories, AI Recommendations, AI Chatbot.
 * SEO: Injects meta tags through `HomeSEO`.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeSEO } from '../components/common/SEO';
import styled from 'styled-components';
import { FaArrowLeft, FaShippingFast, FaShieldAlt, FaHeadset, FaTrophy } from 'react-icons/fa';
import { productsDatabase } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/common/Button';
import AIRecommendations from '../components/ai/AIRecommendations';
import AIChatbot from '../components/ai/AIChatbot';
import Card from '../components/common/Card';
import { createLink } from '../utils/router';

const HomeContainer = styled.div`
  min-height: calc(100vh - 160px);
`;

// HeroSection: Gradient backdrop with generous padding for the hero
// قسم البطل مع خلفية متدرجة ومساحات واسعة
const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary}20 0%,
    ${({ theme }) => theme.colors.secondary}20 100%
  );
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

// HeroContent: Two-column grid collapsing to single column on mobile
// محتوى البطل يستخدم شبكتين تتحول إلى عمود واحد على الشاشات الصغيرة
const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['5xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  }
`;

const HeroSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

// HeroButtons: Flex wrapper that stacks buttons vertically on phones
// حاوية أزرار تتكدس عمودياً على الهواتف
const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

// HeroImage: Placeholder Unsplash image until CMS/gallery integration
// صورة خلفية مؤقتة من Unsplash لحين ربطها بوسائط حقيقية
const HeroImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=400&fit=crop');
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: 0 20px 40px ${({ theme }) => theme.colors.shadow.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 300px;
  }
`;

// Section: Shared wrapper for each content block (max-width + padding)
// غلاف مشترك لكل قسم بمساحة داخلية وعرض ثابت
const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

// FeaturesGrid: Auto-fit layout for service highlights
// شبكة تلقائية لعرض مميزات الخدمة
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const FeatureCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

// FeatureIcon: Circular gradient backdrop to host each icon
// أيقونة داخل دائرة متدرجة تضيف جاذبية بصرية
const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ViewAllButton = styled.div`
  text-align: center;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const CategoryCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px ${({ theme }) => theme.colors.shadow.medium};
  }
`;

const CategoryIcon = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CategoryDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
`;

const Home = () => {
  // featuredProducts: Highlight newly tagged items (badge === 'new') limited to 4
  // المنتجات المميزة: يتم اختيار أول أربعة عناصر بعلامة "جديد"
  const featuredProducts = productsDatabase.filter(product => product.badge === 'new').slice(0, 4);
  // bestSellers: Filters for bestseller badge to showcase top-performing SKUs
  // الأكثر مبيعاً: المنتجات ذات شارة 'bestseller'
  const bestSellers = productsDatabase.filter(product => product.badge === 'bestseller').slice(0, 4);
  // saleProducts: Captures products with an oldPrice to spotlight discounts
  // منتجات التخفيضات: أي عنصر لديه سعر قديم، مما يدل على وجود خصم
  const saleProducts = productsDatabase.filter(product => product.oldPrice).slice(0, 4);
  // usedProducts: Focus on refurbished/used inventory (category === 'used')
  // منتجات مستعملة: فلترة الفئة 'used' وإظهار أربعة فقط
  const usedProducts = productsDatabase.filter(product => product.category === 'used').slice(0, 4);

  // features array: Defines service benefits (icon, title, description)
  // مصفوفة المزايا تحتوي على رمز وعنوان ووصف لكل ميزة
  const features = [
    {
      icon: <FaShippingFast />,
      title: 'شحن سريع',
      description: 'توصيل مجاني للطلبات فوق 1000 جنيه في جميع أنحاء مصر'
    },
    {
      icon: <FaShieldAlt />,
      title: 'ضمان شامل',
      description: 'ضمان على جميع المنتجات مع خدمة ما بعد البيع'
    },
    {
      icon: <FaHeadset />,
      title: 'دعم فني',
      description: 'فريق دعم فني متخصص متاح 24/7 لمساعدتك'
    },
    {
      icon: <FaTrophy />,
      title: 'جودة عالية',
      description: 'منتجات أصلية من أفضل الماركات العالمية'
    }
  ];

  // categories array: Maps category cards to router links with emojis for now
  // مصفوفة الفئات: تحدد كل فئة ورابطها باستخدام createLink لاحقاً
  const categories = [
    {
      title: 'قطع الكمبيوتر',
      description: 'معالجات، كروت شاشة، ذاكرة',
      icon: '💻',
      link: '/shop?category=pc-parts'
    },
    {
      title: 'اللابتوب',
      description: 'أجهزة للألعاب والعمل',
      icon: '💻',
      link: '/shop?category=laptops'
    },
    {
      title: 'الاكسسوارات',
      description: 'لوحات مفاتيح، فئران، سماعات',
      icon: '⌨️',
      link: '/shop?category=accessories'
    }
  ];

  return (
    <>
      <HomeSEO />
      <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle>أحدث قطع الكمبيوتر</HeroTitle>
            <HeroSubtitle>بأفضل الأسعار في السوق</HeroSubtitle>
            <HeroDescription>
              اكتشف مجموعتنا الواسعة من قطع الكمبيوتر عالية الجودة واللابتوب والاكسسوارات. 
              نوفر لك أحدث التقنيات بأسعار تنافسية مع ضمان شامل وخدمة عملاء متميزة.
            </HeroDescription>
            <HeroButtons>
              {/* createLink ensures correct base path for static hosting */}
              {/* createLink يضمن سلامة الروابط مع الاستضافة الثابتة */}
              <Button as="a" href={createLink('/shop')} variant="primary" size="lg">
                تسوق الآن
                <FaArrowLeft />
              </Button>
              <Button as="a" href={createLink('/shop?deals=true')} variant="secondary" size="lg">
                العروض الخاصة
              </Button>
            </HeroButtons>
          </HeroText>
          <HeroImage />
        </HeroContent>
      </HeroSection>

      {/* Features Section */}
      <Section>
        <SectionTitle>لماذا تختار Y0 Hardware؟</SectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>

      {/* Best Sellers Section */}
      <Section>
        <SectionTitle>الأكثر مبيعاً</SectionTitle>
        <ProductsGrid>
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </Section>

      {/* Featured Products Section */}
      <Section>
        <SectionTitle>المنتجات المميزة</SectionTitle>
        <ProductsGrid>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
        <ViewAllButton>
          <Button as="a" href={createLink('/shop')} variant="primary" size="lg">
            عرض جميع المنتجات
            <FaArrowLeft />
          </Button>
        </ViewAllButton>
      </Section>

      {/* Used Products Section */}
      <Section>
        <SectionTitle>منتجات مستعملة بحالة ممتازة</SectionTitle>
        <SectionDescription>
          منتجات مستعملة مفحوصة ومضمونة بأسعار مناسبة - وفر حتى 50%
        </SectionDescription>
        <ProductsGrid>
          {usedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
        <ViewAllButton>
          <Button as="a" href={createLink('/shop?category=used')} variant="secondary" size="lg">
            عرض جميع المنتجات المستعملة
            <FaArrowLeft />
          </Button>
        </ViewAllButton>
      </Section>

      {/* Categories Section */}
      <Section>
        <SectionTitle>تسوق حسب الفئة</SectionTitle>
        <CategoriesGrid>
          {categories.map((category, index) => (
            <CategoryCard key={index} as="a" href={createLink(category.link)} hoverable>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
              <CategoryDescription>{category.description}</CategoryDescription>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </Section>

      {/* AI Recommendations Section - Integrates ML-powered product suggestions */}
      {/* قسم التوصيات المدعوم بالذكاء الاصطناعي */}
      <AIRecommendations />

      {/* AI Chatbot - Conversational helper for quick support */}
      {/* روبوت المحادثة لتقديم الدعم الفوري */}
      <AIChatbot />
    </HomeContainer>
    </>
  );
};

export default Home;
