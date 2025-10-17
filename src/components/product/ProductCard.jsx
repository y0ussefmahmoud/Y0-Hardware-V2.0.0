import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaStar, FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';
import { useWishlist } from '../../context/WishlistContext';
import Button from '../common/Button';
import Card from '../common/Card';

const ProductCardContainer = styled(Card)`
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px ${({ theme }) => theme.colors.shadow.medium};
  }
`;

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

const ProductInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

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

const StockStatus = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ inStock, theme }) => 
    inStock ? theme.colors.success : theme.colors.error
  };
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const { success, info } = useNotification();
  const { toggleItem, isInWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    success(`تم إضافة ${product.name} إلى السلة`);
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isAdded = toggleItem(product);
    if (isAdded) {
      success(`تم إضافة ${product.name} إلى المفضلة`);
    } else {
      info(`تم إزالة ${product.name} من المفضلة`);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} filled={index < rating} />
    ));
  };

  const calculateDiscount = () => {
    if (!product.oldPrice) return null;
    const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    return discount;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ar-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <ProductCardContainer as={Link} to={`/product/${product.id}`} hoverable>
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
            <FaHeart style={{ color: isInWishlist(product.id) ? '#ff4757' : undefined }} />
          </ActionButton>
          <ActionButton as={Link} to={`/product/${product.id}`} title="عرض التفاصيل">
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
