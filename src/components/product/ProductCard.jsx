/**
 * ProductCard Component - بطاقة عرض المنتج
 * ----------------------------------------------------------------
 * Purpose (الغرض): Showcases a single product with imagery, pricing,
 * ratings, and quick actions (wishlist/cart) throughout the storefront.
 * Features (المميزات): Hover lift, action buttons, badge system, condition,
 * stock state, and currency formatting tailored for Egypt.
 * Usage (الاستخدام): Consumed in `Home.jsx`, `Shop.jsx`, and related products
 * sections within `ProductDetails.jsx`.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { createLink } from '../../utils/router';
import { FaStar, FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';
import { useWishlist } from '../../context/WishlistContext';
import Button from '../common/Button';
import Card from '../common/Card';

// ProductCardContainer: Hover elevation + shadow to emphasize interactivity
// حاوية البطاقة مع تأثير رفع وظل لبيان أنها قابلة للنقر
const ProductCardContainer = styled(Card)`
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px ${({ theme }) => theme.colors.shadow.medium};
  }
`;

// ProductImage: Maintains aspect ratio with subtle gradient overlay on hover
// صورة المنتج تحافظ على الأبعاد وتضيف تدرجاً لطيفاً عند التحويم
const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
  }
  
  ${ProductCardContainer}:hover &::before {
    opacity: 1;
  }
`;

// ProductBadge: Dynamic badges (new/sale/etc.) with conditional colors
// شارة المنتج تتغير ألوانها بناءً على نوع الشارة (جديد، تخفيض...)
const ProductBadge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  text-transform: uppercase;
  z-index: 2;
  
  ${({ type, theme }) => {
    switch (type) {
      case 'new':
        return css`
          background: ${theme.colors.success};
          color: ${theme.colors.text.inverse};
        `;
      case 'sale':
        return css`
          background: ${theme.colors.error};
          color: ${theme.colors.text.inverse};
        `;
      case 'bestseller':
        return css`
          background: ${theme.colors.warning};
          color: ${theme.colors.text.inverse};
        `;
      default:
        return css`
          background: ${theme.colors.primary};
          color: ${theme.colors.text.inverse};
        `;
    }
  }}
`;

// ProductActions: Hidden action stack that fades/slides in on hover
// مجموعة أزرار تظهر تدريجياً عند تمرير المؤشر
const ProductActions = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  opacity: 0;
  transform: translateX(-20px);
  transition: all ${({ theme }) => theme.transitions.normal};
  z-index: 2;
  
  ${ProductCardContainer}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

// ActionButton: Reusable icon button with scale animation on hover
// زر أيقونة مع حركة تكبير بسيطة لزيادة وضوح التفاعل
const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow.light};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    transform: scale(1.1);
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
  }
`;

// ProductInfo: Wraps textual content with consistent padding
// قسم المعلومات النصية مع حشو موحد
const ProductInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

// ProductTitle: Clamped title to avoid layout shifts for long names
// عنوان المنتج يُقص عند سطرين للحفاظ على التناسق
const ProductTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// ProductDescription: Two-line clamp summary for quick scanning
// وصف مختصر لا يتجاوز سطرين لسرعة القراءة
const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// ProductRating: Horizontal stack for stars + count
// عرض النجوم مع عدد المراجعات في صف واحد
const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled(FaStar)`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ filled, theme }) => 
    filled ? theme.colors.warning : theme.colors.border.secondary
  };
`;

const RatingText = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

// ProductPrice: Aligns current/old price and discount together
// ينسق السعر الحالي مع السعر القديم ونسبة الخصم
const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CurrentPrice = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const OldPrice = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-decoration: line-through;
`;

const Discount = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.error};
  background: ${({ theme }) => theme.colors.error}20;
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const ProductFooter = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

// StockStatus: Color-coded text (green = in stock, red = out of stock)
// حالة المخزون تتلون بالأخضر أو الأحمر حسب التوفر
const StockStatus = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ inStock, theme }) => 
    inStock ? theme.colors.success : theme.colors.error
  };
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

/**
 * ProductCard Component - بطاقة عرض المنتج
 *
 * @param {Object} product - بيانات المنتج
 * @param {number} product.id - معرف المنتج الفريد
 * @param {string} product.name - اسم المنتج
 * @param {string} product.description - وصف موجز
 * @param {string} product.image - رابط الصورة
 * @param {number} product.price - السعر الحالي
 * @param {number} [product.oldPrice] - السعر القديم (اختياري)
 * @param {number} product.rating - التقييم من 1 إلى 5
 * @param {number} product.reviewCount - عدد المراجعات
 * @param {boolean} product.inStock - حالة التوفر
 * @param {string} [product.badge] - نوع الشارة (new/sale/bestseller/used)
 * @param {string} [product.condition] - حالة المنتج المستعمل
 */
const ProductCard = ({ product }) => {
  // Cart context: exposes addItem to push products into the cart
  // سياق السلة لإضافة المنتج مباشرة عند الضغط على الزر
  const { addItem } = useCart();
  const { success, info } = useNotification();
  // Wishlist context: toggleItem flips favorite state, isInWishlist checks status
  // سياق المفضلة: toggleItem لتغيير الحالة و isInWishlist للتحقق من الوجود
  const { toggleItem, isInWishlist } = useWishlist();

  /**
   * handleAddToCart - إضافة المنتج للسلة
   * EN: Prevents default anchor navigation, stops propagation so the card
   * link doesn't open, then adds the product with a success toast.
   * AR: يمنع الانتقال الافتراضي ويفصل الحدث عن البطاقة، ثم يضيف المنتج مع إشعار نجاح.
   */
  const handleAddToCart = (e) => {
    // Prevent navigating to product page when button is clicked
    // منع الانتقال لصفحة المنتج عند الضغط على الزر
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    success(`تم إضافة ${product.name} إلى السلة`);
  };

  /**
   * handleToggleFavorite - تبديل حالة المفضلة
   * EN: Toggles wishlist status and shows contextual notifications for add/remove.
   * AR: يبدّل حالة المنتج في المفضلة مع إظهار إشعارات بالعربية.
   */
  const handleToggleFavorite = (e) => {
    // Same prevention to keep the user on the card grid
    // نفس المنع للحفاظ على البقاء في الشبكة
    e.preventDefault();
    e.stopPropagation();
    const isAdded = toggleItem(product);
    if (isAdded) {
      success(`تم إضافة ${product.name} إلى المفضلة`);
    } else {
      info(`تم إزالة ${product.name} من المفضلة`);
    }
  };

  /**
   * renderStars - عرض النجوم
   * EN: Generates a list of five stars, marking those with index < rating.
   * AR: ينشئ خمسة نجوم ويملأ العدد المطابق لقيمة التقييم.
   */
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} filled={index < rating} />
    ));
  };

  /**
   * calculateDiscount - حساب نسبة الخصم
   * EN: Computes percentage difference between old/new price and rounds it.
   * AR: يحسب فرق السعرين كنسبة مئوية بعد التقريب.
   */
  const calculateDiscount = () => {
    if (!product.oldPrice) return null;
    const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    return discount;
  };

  /**
   * formatPrice - تنسيق السعر
   * EN: Formats numbers into Egyptian Pound (EGP) currency without decimals.
   * AR: ينسق السعر بعملة الجنيه المصري بدون كسور.
   */
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ar-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <ProductCardContainer as="a" href={createLink(`/product/${product.id}`)} hoverable>
      <ProductImage src={product.image}>
        {product.badge && (
          <ProductBadge type={product.badge}>
            {product.badge === 'new' && 'جديد'}
            {product.badge === 'sale' && 'تخفيض'}
            {product.badge === 'bestseller' && 'الأكثر مبيعاً'}
            {product.badge === 'used' && 'مستعمل'}
          </ProductBadge>
        )}
        
        <ProductActions>
          <ActionButton onClick={handleToggleFavorite} title="إضافة للمفضلة">
            {/* Highlight heart when product is already in wishlist */}
            {/* يتم تغيير لون القلب عند كون المنتج في المفضلة */}
            <FaHeart style={{ color: isInWishlist(product.id) ? '#ff4757' : undefined }} />
          </ActionButton>
          <ActionButton as="a" href={createLink(`/product/${product.id}`)} title="عرض التفاصيل">
            <FaEye />
          </ActionButton>
        </ProductActions>
      </ProductImage>

      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        
        <ProductRating>
          {renderStars(product.rating)}
          <RatingText>({product.reviewCount})</RatingText>
        </ProductRating>

        {product.condition && (
          <StockStatus inStock={true} style={{ color: '#f39c12' }}>
            الحالة: {product.condition === 'excellent' ? 'ممتازة' : 
                    product.condition === 'like-new' ? 'مثل الجديد' :
                    product.condition === 'good' ? 'جيدة' : 'مقبولة'}
          </StockStatus>
        )}

        <StockStatus inStock={product.inStock}>
          {product.inStock ? 'متوفر' : 'غير متوفر'}
        </StockStatus>

        <ProductPrice>
          <CurrentPrice>{formatPrice(product.price)}</CurrentPrice>
          {product.oldPrice && (
            <>
              <OldPrice>{formatPrice(product.oldPrice)}</OldPrice>
              <Discount>-{calculateDiscount()}%</Discount>
            </>
          )}
        </ProductPrice>
      </ProductInfo>

      <ProductFooter>
        <Button
          variant="primary"
          size="sm"
          fullWidth
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <FaShoppingCart />
          إضافة للسلة
        </Button>
      </ProductFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
