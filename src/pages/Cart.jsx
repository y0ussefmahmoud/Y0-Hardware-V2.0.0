import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  min-height: calc(100vh - 160px);
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const CartItem = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ItemContent = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ItemImage = styled.div`
  width: 120px;
  height: 120px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ItemName = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CurrentPrice = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.primary};
`;

const OldPrice = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-decoration: line-through;
`;

const ItemStock = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ inStock, theme }) => 
    inStock ? theme.colors.success : theme.colors.error
  };
`;

const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-end;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xs};
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: ${({ theme }) => theme.colors.background.hover};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
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
  min-width: 40px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const RemoveButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm};
  border: none;
  background: ${({ theme }) => theme.colors.error}20;
  color: ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;

const ItemTotal = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CartSummary = styled(Card)`
  height: fit-content;
  position: sticky;
  top: 100px;
`;

const SummaryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SummaryLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
`;

const SummaryValue = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
`;

const TotalRow = styled(SummaryRow)`
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  ${SummaryLabel}, ${SummaryValue} {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CheckoutButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']};
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    font-size: 4rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
  
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const Cart = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ar-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const shippingCost = totalPrice > 1000 ? 0 : 50;
  const finalTotal = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <CartContainer>
        <PageTitle>
          <FaShoppingBag />
          سلة التسوق
        </PageTitle>
        <EmptyCart>
          <FaShoppingBag />
          <h2>سلة التسوق فارغة</h2>
          <p>لم تقم بإضافة أي منتجات إلى سلة التسوق بعد</p>
          <Button as={Link} to="/shop" variant="primary" size="lg">
            تسوق الآن
            <FaArrowLeft />
          </Button>
        </EmptyCart>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <PageTitle>
        <FaShoppingBag />
        سلة التسوق ({totalItems} منتج)
      </PageTitle>

      <CartContent>
        <CartItems>
          {items.map((item) => (
            <CartItem key={item.id}>
              <ItemContent>
                <ItemImage src={item.image} />
                
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>
                    <CurrentPrice>{formatPrice(item.price)}</CurrentPrice>
                    {item.oldPrice && (
                      <OldPrice>{formatPrice(item.oldPrice)}</OldPrice>
                    )}
                  </ItemPrice>
                  <ItemStock inStock={item.inStock}>
                    {item.inStock ? 'متوفر في المخزن' : 'غير متوفر'}
                  </ItemStock>
                </ItemDetails>

                <ItemActions>
                  <QuantityControls>
                    <QuantityButton
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <FaMinus />
                    </QuantityButton>
                    <QuantityDisplay>{item.quantity}</QuantityDisplay>
                    <QuantityButton
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <FaPlus />
                    </QuantityButton>
                  </QuantityControls>
                  
                  <ItemTotal>{formatPrice(calculateItemTotal(item))}</ItemTotal>
                  
                  <RemoveButton
                    onClick={() => removeItem(item.id)}
                    title="إزالة من السلة"
                  >
                    <FaTrash />
                  </RemoveButton>
                </ItemActions>
              </ItemContent>
            </CartItem>
          ))}
        </CartItems>

        <CartSummary>
          <SummaryTitle>ملخص الطلب</SummaryTitle>
          
          <SummaryRow>
            <SummaryLabel>المجموع الفرعي ({totalItems} منتج)</SummaryLabel>
            <SummaryValue>{formatPrice(totalPrice)}</SummaryValue>
          </SummaryRow>
          
          <SummaryRow>
            <SummaryLabel>
              الشحن {totalPrice > 1000 && '(مجاني للطلبات فوق 1000 ج.م)'}
            </SummaryLabel>
            <SummaryValue>
              {shippingCost === 0 ? 'مجاني' : formatPrice(shippingCost)}
            </SummaryValue>
          </SummaryRow>
          
          <TotalRow>
            <SummaryLabel>المجموع الكلي</SummaryLabel>
            <SummaryValue>{formatPrice(finalTotal)}</SummaryValue>
          </TotalRow>
          
          <CheckoutButton variant="primary" size="lg">
            إتمام الطلب
            <FaArrowLeft />
          </CheckoutButton>
          
          <Button
            variant="ghost"
            size="sm"
            fullWidth
            onClick={clearCart}
            style={{ marginTop: '1rem' }}
          >
            إفراغ السلة
          </Button>
        </CartSummary>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
