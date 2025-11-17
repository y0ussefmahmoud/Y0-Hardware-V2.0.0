/**
 * Wishlist Page - صفحة قائمة المفضلة
 * --------------------------------------------------------------
 * Purpose (الغرض): Displays saved products with filtering, sorting,
 * summary stats, and bulk actions (add all to cart, clear, share).
 * Layout (التخطيط): Grid of product cards alongside gradient summary.
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createLink } from '../utils/router';
import { 
  FaHeart, 
  FaShoppingCart, 
  FaTrash, 
  FaShare,
  FaFilter,
  FaSortAmountDown,
  FaArrowLeft
} from 'react-icons/fa';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { categories } from '../data/products';

const WishlistContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  min-height: calc(100vh - 160px);
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    align-items: stretch;
  }
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin: 0;
  
  svg {
    color: ${({ theme }) => theme.colors.error};
  }
`;

const WishlistControls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FilterSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

// WishlistSummary: Gradient panel showing KPIs (count/value/average)
// بطاقة تلخص عدد العناصر والقيمة والمتوسط بألوان متدرجة
const WishlistSummary = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.error}10, ${({ theme }) => theme.colors.primary}10);
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SummaryNumber = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const SummaryLabel = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

// WishlistGrid: Responsive card grid for wishlist items
// شبكة مرنة لعرض المنتجات المفضلة
const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const WishlistItemCard = styled(Card)`
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px ${({ theme }) => theme.colors.shadow.medium};
  }
`;

const ItemImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ItemBadge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
`;

// ItemActions: Hover-revealed buttons for remove/share actions
// أزرار تظهر عند التحويم لإزالة أو مشاركة المنتج
const ItemActions = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  opacity: 0;
  transform: translateX(-20px);
  transition: all ${({ theme }) => theme.transitions.normal};
  
  ${WishlistItemCard}:hover & {
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
    background: ${({ variant, theme }) => {
      switch (variant) {
        case 'remove': return theme.colors.error;
        case 'share': return theme.colors.info;
        default: return theme.colors.primary;
      }
    }};
    color: ${({ theme }) => theme.colors.text.inverse};
    transform: scale(1.1);
  }
`;

const ItemInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ItemTitle = styled.h3`
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

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
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

const AddedDate = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: block;
`;

// ItemFooter: Holds per-item action buttons with spacing
// قسم الأزرار السفلية لكل عنصر
const ItemFooter = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const EmptyWishlist = styled.div`
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

const BulkActions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const Wishlist = () => {
  const { items, totalItems, clearWishlist, removeItem, getWishlistSummary } = useWishlist();
  const { addItem: addToCart } = useCart();
  const { success, info } = useNotification();
  // sortBy: Controls ordering (newest, price, name)
  // معيار الترتيب الحالي
  const [sortBy, setSortBy] = useState('newest');
  // filterBy: Category filter (all/pc-parts/etc.)
  // الفئة المختارة لتصفية العناصر
  const [filterBy, setFilterBy] = useState('all');

  // summary stats fetched from context helper (totalItems, totalValue, averagePrice)
  // ملخص سريع للقيم المجمعة
  const summary = getWishlistSummary();

  // filteredAndSortedItems: useMemo for filter + sort pipeline
  // قائمة العناصر بعد الفلترة والترتيب للحفاظ على الأداء
  const filteredAndSortedItems = React.useMemo(() => {
    let filtered = [...items];

    // Apply filter
    // تطبيق فلتر الفئة إذا لم تكن "الكل"
    if (filterBy !== 'all') {
      filtered = filtered.filter(item => item.category === filterBy);
    }

    // Apply sort
    // ترتيب العناصر حسب المعيار المحدد مع دعم التاريخ والسعر والاسم
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.addedAt) - new Date(a.addedAt);
        case 'oldest':
          return new Date(a.addedAt) - new Date(b.addedAt);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name, 'ar');
        default:
          return 0;
      }
    });

    return filtered;
  }, [items, sortBy, filterBy]);

  /**
   * handleRemoveItem - إزالة منتج واحد
   * EN: Removes the item then shows informational toast.
   * AR: يحذف المنتج من المفضلة ويعرض إشعاراً بذلك.
   */
  const handleRemoveItem = (productId, productName) => {
    removeItem(productId);
    info(`تم إزالة ${productName} من المفضلة`);
  };

  /**
   * handleAddToCart - إضافة عنصر مفرد للسلة
   * EN: Reuses cart context and confirms with success notification.
   * AR: يستخدم سياق السلة مع إشعار نجاح.
   */
  const handleAddToCart = (product) => {
    addToCart(product);
    success(`تم إضافة ${product.name} إلى السلة`);
  };

  /**
   * handleAddAllToCart - إضافة كل العناصر المعروضة
   * EN: Iterates over filtered view (respecting filters) and adds to cart.
   * AR: يضيف جميع العناصر بعد الفلترة الحالية للسلة دفعة واحدة.
   */
  const handleAddAllToCart = () => {
    filteredAndSortedItems.forEach(item => {
      addToCart(item);
    });
    success(`تم إضافة ${filteredAndSortedItems.length} منتج إلى السلة`);
  };

  /**
   * handleClearWishlist - إفراغ القائمة
   * EN: Clears entire wishlist through context helper then toasts.
   * AR: يمسح كل العناصر ويعرض رسالة.
   */
  const handleClearWishlist = () => {
    clearWishlist();
    info('تم إفراغ قائمة المفضلة');
  };

  /**
   * handleShare - مشاركة منتج
   * EN: Utilizes Web Share API when available or copies fallback URL.
   * AR: يشارك رابط المنتج أو ينسخه في حال عدم دعم API.
   */
  const handleShare = (product) => {
    const url = `${window.location.origin}/product/${product.id}`;
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      success('تم نسخ رابط المنتج');
    }
  };

  /**
   * formatPrice - تنسيق السعر
   */
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ar-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  /**
   * formatDate - تنسيق تاريخ الإضافة
   * EN: Localizes to Arabic short month/day for readability.
   * AR: يظهر التاريخ بتنسيق عربي مختصر.
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (totalItems === 0) {
    return (
      <WishlistContainer>
        <PageTitle>
          <FaHeart />
          قائمة المفضلة
        </PageTitle>
        <EmptyWishlist>
          {/* Empty state encourages exploring shop when nothing saved */}
          {/* حالة فارغة تحفز المستخدم للعودة إلى المتجر */}
          <FaHeart />
          <h2>قائمة المفضلة فارغة</h2>
          <p>لم تقم بإضافة أي منتجات إلى قائمة المفضلة بعد</p>
          <Button as="a" href={createLink('/shop')} variant="primary" size="lg">
            تسوق الآن
            <FaArrowLeft />
          </Button>
        </EmptyWishlist>
      </WishlistContainer>
    );
  }

  return (
    <WishlistContainer>
      <PageHeader>
        <PageTitle>
          <FaHeart />
          قائمة المفضلة ({totalItems} منتج)
        </PageTitle>
        <WishlistControls>
          <FilterSelect
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option value="all">جميع الفئات</option>
            {Object.entries(categories).map(([key, value]) => (
              key !== 'all' && <option key={key} value={key}>{value}</option>
            ))}
          </FilterSelect>
          
          <FilterSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">الأحدث</option>
            <option value="oldest">الأقدم</option>
            <option value="price-low">السعر: من الأقل للأعلى</option>
            <option value="price-high">السعر: من الأعلى للأقل</option>
            <option value="name">الاسم أبجدياً</option>
          </FilterSelect>
        </WishlistControls>
      </PageHeader>

      <WishlistSummary>
        <SummaryGrid>
          <SummaryItem>
            <SummaryNumber>{summary.totalItems}</SummaryNumber>
            <SummaryLabel>منتج في المفضلة</SummaryLabel>
          </SummaryItem>
          <SummaryItem>
            <SummaryNumber>{formatPrice(summary.totalValue)}</SummaryNumber>
            <SummaryLabel>القيمة الإجمالية</SummaryLabel>
          </SummaryItem>
          <SummaryItem>
            <SummaryNumber>{formatPrice(summary.averagePrice)}</SummaryNumber>
            <SummaryLabel>متوسط السعر</SummaryLabel>
          </SummaryItem>
        </SummaryGrid>
      </WishlistSummary>

      {/* Render filtered view rather than original array for consistent UX */}
      {/* استخدام filteredAndSortedItems لضمان احترام الفلاتر والفرز */}
      <WishlistGrid>
        {filteredAndSortedItems.map(item => (
          <WishlistItemCard key={item.id}>
            <ItemImage src={item.image}>
              {item.badge && (
                <ItemBadge>
                  {item.badge === 'new' && 'جديد'}
                  {item.badge === 'sale' && 'تخفيض'}
                  {item.badge === 'bestseller' && 'الأكثر مبيعاً'}
                </ItemBadge>
              )}
              
              <ItemActions>
                <ActionButton
                  variant="remove"
                  onClick={() => handleRemoveItem(item.id, item.name)}
                  title="إزالة من المفضلة"
                >
                  <FaTrash />
                </ActionButton>
                <ActionButton
                  variant="share"
                  onClick={() => handleShare(item)}
                  title="مشاركة"
                >
                  <FaShare />
                </ActionButton>
              </ItemActions>
            </ItemImage>

            <ItemInfo>
              <ItemTitle>{item.name}</ItemTitle>
              <AddedDate>أُضيف في {formatDate(item.addedAt)}</AddedDate>
              
              <ItemPrice>
                <CurrentPrice>{formatPrice(item.price)}</CurrentPrice>
                {item.oldPrice && (
                  <OldPrice>{formatPrice(item.oldPrice)}</OldPrice>
                )}
              </ItemPrice>

              <ItemFooter>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleAddToCart(item)}
                  style={{ flex: 1 }}
                >
                  <FaShoppingCart />
                  إضافة للسلة
                </Button>
                <Button
                  as="a"
                  href={createLink(`/product/${item.id}`)}
                  variant="secondary"
                  size="sm"
                  style={{ flex: 1 }}
                >
                  عرض التفاصيل
                </Button>
              </ItemFooter>
            </ItemInfo>
          </WishlistItemCard>
        ))}
      </WishlistGrid>

      <BulkActions>
        <Button
          variant="primary"
          size="lg"
          onClick={handleAddAllToCart}
        >
          <FaShoppingCart />
          إضافة الكل للسلة
        </Button>
        <Button
          variant="danger"
          size="lg"
          onClick={handleClearWishlist}
        >
          <FaTrash />
          إفراغ المفضلة
        </Button>
      </BulkActions>
    </WishlistContainer>
  );
};

export default Wishlist;
