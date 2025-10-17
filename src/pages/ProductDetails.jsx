import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  FaStar, 
  FaHeart, 
  FaShoppingCart, 
  FaShare, 
  FaArrowLeft,
  FaPlus,
  FaMinus,
  FaCheck,
  FaTruck,
  FaShieldAlt,
  FaUndo
} from 'react-icons/fa';
import { productsDatabase, reviewsDatabase } from '../data/products';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import { useWishlist } from '../context/WishlistContext';
import { ProductSEO } from '../components/common/SEO';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import ProductCard from '../components/product/ProductCard';
import ReviewList from '../components/product/ReviewList';

const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  min-height: calc(100vh - 160px);
`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  
  a {
    color: ${({ theme }) => theme.colors.text.link};
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.text.linkHover};
    }
  }
  
  span {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const MainImage = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow.medium};
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 300px;
  }
`;

const ImageBadge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ type, theme }) => {
    switch (type) {
      case 'new': return theme.colors.success;
      case 'sale': return theme.colors.error;
      case 'bestseller': return theme.colors.warning;
      default: return theme.colors.primary;
    }
  }};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ProductTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled(FaStar)`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ filled, theme }) => 
    filled ? theme.colors.warning : theme.colors.border.secondary
  };
`;

const RatingText = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const CurrentPrice = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const OldPrice = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-decoration: line-through;
`;

const Discount = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.error};
  background: ${({ theme }) => theme.colors.error}20;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const StockStatus = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ inStock, theme }) => 
    inStock ? theme.colors.success + '20' : theme.colors.error + '20'
  };
  color: ${({ inStock, theme }) => 
    inStock ? theme.colors.success : theme.colors.error
  };
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
`;

const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const QuantityLabel = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
`;

const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({ theme }) => theme.colors.background.hover};
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantityDisplay = styled.span`
  min-width: 60px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const SecondaryActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const IconButton = styled.button`
  width: 48px;
  height: 48px;
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
  
  span {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const SpecificationsCard = styled(Card)`
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const SpecTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SpecTable = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`;

const SpecLabel = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const SpecValue = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
`;

const RelatedProducts = styled.section`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const UsedProductInfo = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.warning}10, ${({ theme }) => theme.colors.info}10);
  border-left: 4px solid ${({ theme }) => theme.colors.warning};
  
  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
  
  strong {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.fonts.weights.medium};
  }
  
  span {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { success, info } = useNotification();
  const { toggleItem, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState(reviewsDatabase[parseInt(id)] || []);

  const product = productsDatabase.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (!product) {
      navigate('/shop');
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const relatedProducts = productsDatabase
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    success(`تم إضافة ${quantity} من ${product.name} إلى السلة`);
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const toggleWishlist = () => {
    const isAdded = toggleItem(product);
    if (isAdded) {
      success('تم إضافة المنتج إلى المفضلة');
    } else {
      info('تم إزالة المنتج من المفضلة');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      success('تم نسخ رابط المنتج');
    }
  };

  const handleAddReview = async (reviewData) => {
    // Add new review to the list
    const newReview = {
      ...reviewData,
      id: Date.now(),
    };
    setReviews(prev => [newReview, ...prev]);
    
    // TODO: In production, send this review to backend API
    // Example: await api.post('/reviews', newReview);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} filled={index < rating} />
    ));
  };

  const calculateDiscount = () => {
    if (!product.oldPrice) return null;
    return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ar-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getBadgeText = (badge) => {
    switch (badge) {
      case 'new': return 'جديد';
      case 'sale': return 'تخفيض';
      case 'bestseller': return 'الأكثر مبيعاً';
      default: return badge;
    }
  };

  return (
    <>
      <ProductSEO product={product} />
      <ProductContainer>
      <Breadcrumb>
        <Link to="/">الرئيسية</Link>
        <span>/</span>
        <Link to="/shop">المنتجات</Link>
        <span>/</span>
        <span>{product.name}</span>
      </Breadcrumb>

      <ProductLayout>
        <ImageSection>
          <MainImage src={product.image}>
            {product.badge && (
              <ImageBadge type={product.badge}>
                {getBadgeText(product.badge)}
              </ImageBadge>
            )}
          </MainImage>
        </ImageSection>

        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          
          <ProductRating>
            <Stars>{renderStars(product.rating)}</Stars>
            <RatingText>({product.reviewCount} تقييم)</RatingText>
          </ProductRating>

          <ProductPrice>
            <CurrentPrice>{formatPrice(product.price)}</CurrentPrice>
            {product.oldPrice && (
              <>
                <OldPrice>{formatPrice(product.oldPrice)}</OldPrice>
                <Discount>-{calculateDiscount()}%</Discount>
              </>
            )}
          </ProductPrice>

          <StockStatus inStock={product.inStock}>
            <FaCheck />
            {product.inStock ? 'متوفر في المخزن' : 'غير متوفر'}
          </StockStatus>

          <ProductDescription>{product.description}</ProductDescription>

          <QuantitySelector>
            <QuantityLabel>الكمية:</QuantityLabel>
            <QuantityControls>
              <QuantityButton 
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <FaMinus />
              </QuantityButton>
              <QuantityDisplay>{quantity}</QuantityDisplay>
              <QuantityButton onClick={() => handleQuantityChange(1)}>
                <FaPlus />
              </QuantityButton>
            </QuantityControls>
          </QuantitySelector>

          <ActionButtons>
            <Button
              variant="primary"
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              style={{ flex: 1 }}
            >
              <FaShoppingCart />
              إضافة للسلة ({formatPrice(product.price * quantity)})
            </Button>
            
            <SecondaryActions>
              <IconButton onClick={toggleWishlist} title="إضافة للمفضلة">
                <FaHeart style={{ color: isInWishlist(product.id) ? '#ff4757' : undefined }} />
              </IconButton>
              <IconButton onClick={handleShare} title="مشاركة">
                <FaShare />
              </IconButton>
            </SecondaryActions>
          </ActionButtons>

          <Features>
            <Feature>
              <FaTruck />
              <span>شحن مجاني للطلبات أكثر من 500 جنيه</span>
            </Feature>
            <Feature>
              <FaShieldAlt />
              <span>{product.warranty || 'ضمان لمدة سنتين'}</span>
            </Feature>
            <Feature>
              <FaUndo />
              <span>إرجاع مجاني خلال 14 يوم</span>
            </Feature>
          </Features>

          {product.condition && (
            <UsedProductInfo>
              <h3>معلومات المنتج المستعمل</h3>
              <InfoRow>
                <strong>الحالة:</strong> 
                <span>{product.condition === 'excellent' ? 'ممتازة' : 
                      product.condition === 'like-new' ? 'مثل الجديد' :
                      product.condition === 'good' ? 'جيدة' : 'مقبولة'}</span>
              </InfoRow>
              {product.usageTime && (
                <InfoRow>
                  <strong>فترة الاستخدام:</strong> 
                  <span>{product.usageTime}</span>
                </InfoRow>
              )}
              <InfoRow>
                <strong>الضمان:</strong> 
                <span>{product.warranty}</span>
              </InfoRow>
            </UsedProductInfo>
          )}
        </ProductInfo>
      </ProductLayout>

      <SpecificationsCard>
        <SpecTitle>المواصفات التقنية</SpecTitle>
        <SpecTable>
          {Object.entries(product.specifications).map(([key, value]) => (
            <SpecRow key={key}>
              <SpecLabel>{key}</SpecLabel>
              <SpecValue>{value}</SpecValue>
            </SpecRow>
          ))}
        </SpecTable>
      </SpecificationsCard>

      {relatedProducts.length > 0 && (
        <RelatedProducts>
          <SectionTitle>منتجات ذات صلة</SectionTitle>
          <ProductsGrid>
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </ProductsGrid>
        </RelatedProducts>
      )}

      <ReviewList
        productId={product.id}
        reviews={reviews}
        onAddReview={handleAddReview}
      />
    </ProductContainer>
    </>
  );
};

export default ProductDetails;
