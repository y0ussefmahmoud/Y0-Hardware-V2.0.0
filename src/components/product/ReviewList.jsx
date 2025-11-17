/**
 * ReviewList Component - قائمة المراجعات والتقييمات
 * ----------------------------------------------------------------
 * Purpose (الغرض): Displays review statistics, filters, sorting options,
 * pagination, and the add-review form for a given product.
 * Features (المميزات): Rating breakdown, helpful sort, load more button,
 * empty-state encouragement, and bilingual UI texts.
 * Usage (الاستخدام): Rendered inside `ProductDetails.jsx` beneath the specs.
 */
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { FaFilter, FaSortAmountDown, FaPlus, FaStar } from 'react-icons/fa';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import StarRating from '../common/StarRating';
import Button from '../common/Button';
import Card from '../common/Card';

// ReviewsContainer: Adds spacing above the review block
// حاوية المراجعات مع هامش علوي لتمييز القسم
const ReviewsContainer = styled.section`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

// ReviewsHeader: Flex layout for title + filter controls
// رأس القسم يعرض العنوان وأدوات الفلترة في صف واحد
const ReviewsHeader = styled.div`
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

const ReviewsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const ReviewsControls = styled.div`
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

// ReviewsSummary: Gradient-backed card summarizing average + breakdown
// بطاقة ملخص بالألوان المتدرجة لعرض المتوسط وتفاصيل التقييمات
const ReviewsSummary = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}10, ${({ theme }) => theme.colors.secondary}10);
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const OverallRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const RatingNumber = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const RatingStars = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TotalReviews = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

// RatingBreakdown: Column of rows showing percentage per rating
// قسم توزيع النجوم يعرض نسب كل تقييم من 1 إلى 5
const RatingBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  flex: 1;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const RatingLabel = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  min-width: 60px;
`;

// RatingBar: Base track for the animated fill bar
// شريط أساسي يُملأ بنسبة التقييم
const RatingBar = styled.div`
  flex: 1;
  height: 8px;
  background: ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`;

// RatingFill: Animated width representing rating percentage per row
// الشريط المملوء الذي تتغير مساحته حسب النسبة المئوية
const RatingFill = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.warning};
  width: ${({ percentage }) => percentage}%;
  transition: width ${({ theme }) => theme.transitions.normal};
`;

const RatingCount = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.tertiary};
  min-width: 30px;
`;

const AddReviewSection = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const LoadMoreButton = styled(Button)`
  margin: ${({ theme }) => theme.spacing.xl} auto 0;
  display: block;
`;

const NoReviews = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']};
  color: ${({ theme }) => theme.colors.text.secondary};
  
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

/**
 * ReviewList Component
 *
 * @param {number} productId - معرف المنتج المرتبط بالمراجعات
 * @param {Array} reviews - مصفوفة المراجعات المتاحة
 * @param {Function} onAddReview - Callback عند إضافة مراجعة جديدة
 */
const ReviewList = ({ productId, reviews = [], onAddReview }) => {
  // showForm: Toggles the review form visibility
  // حالة إظهار/إخفاء نموذج إضافة المراجعة
  const [showForm, setShowForm] = useState(false);
  // sortBy: Current sorting strategy (newest, helpful, etc.)
  // معيار الترتيب الحالي للمراجعات
  const [sortBy, setSortBy] = useState('newest');
  // filterBy: Selected rating filter (all, 5, 4...)
  // الفلتر المستخدم لعرض تقييم معين
  const [filterBy, setFilterBy] = useState('all');
  // visibleReviews: Pagination counter for "load more" button
  // عدد المراجعات المعروضة حالياً (يزيد بخمس كل مرة)
  const [visibleReviews, setVisibleReviews] = useState(5);

  // reviewStats: memoized calculations for averages + breakdown to avoid re-computation
  // إحصائيات المراجعات: تحسب المتوسط وإجمالي المراجعات وتوزيع النجوم باستخدام useMemo
  const reviewStats = useMemo(() => {
    if (reviews.length === 0) {
      return {
        averageRating: 0,
        totalReviews: 0,
        breakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
      };
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    
    const breakdown = reviews.reduce((acc, review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1;
      return acc;
    }, {});

    return {
      averageRating: Math.round(averageRating * 10) / 10,
      totalReviews: reviews.length,
      breakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0, ...breakdown }
    };
  }, [reviews]);

  // filteredAndSortedReviews: Advanced pipeline (filter by stars → sort by strategy)
  // قائمة المراجعات بعد الفلترة والترتيب حسب الإعدادات الحالية
  const filteredAndSortedReviews = useMemo(() => {
    let filtered = [...reviews];

    // Apply filter
    // تطبيق الفلتر حسب عدد النجوم إن لم يكن "الكل"
    if (filterBy !== 'all') {
      const rating = parseInt(filterBy);
      filtered = filtered.filter(review => review.rating === rating);
    }

    // Apply sort
    // ترتيب النتائج بناءً على القيمة المختارة (الأحدث، الأعلى...)
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        case 'helpful':
          return (b.likes || 0) - (a.likes || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [reviews, sortBy, filterBy]);

  /**
   * handleAddReview - إضافة مراجعة جديدة
   * EN: Calls parent callback, awaits completion (for async persistence),
   * then hides the form.
   * AR: يستدعي الدالة الممررة من الأعلى وينتظر اكتمالها ثم يخفي النموذج.
   */
  const handleAddReview = async (reviewData) => {
    if (onAddReview) {
      await onAddReview(reviewData);
    }
    setShowForm(false);
  };

  /**
   * handleLoadMore - تحميل المزيد
   * EN: Extends visible list by 5 items to create chunked pagination.
   * AR: يزيد عدد المراجعات المعروضة بمقدار خمسة مع كل ضغط.
   */
  const handleLoadMore = () => {
    setVisibleReviews(prev => prev + 5);
  };

  /**
   * getPercentage - حساب النسبة المئوية
   * EN: Safely returns 0 when total is zero to avoid NaN.
   * AR: يعيد صفر إذا كان الإجمالي صفراً لتفادي القسمة على صفر.
   */
  const getPercentage = (count, total) => {
    return total > 0 ? (count / total) * 100 : 0;
  };

  if (reviews.length === 0 && !showForm) {
    return (
      <ReviewsContainer>
        <ReviewsTitle>المراجعات والتقييمات</ReviewsTitle>
        <NoReviews>
          <h3>لا توجد مراجعات بعد</h3>
          <p>كن أول من يراجع هذا المنتج</p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setShowForm(true)}
            style={{ marginTop: '1rem' }}
          >
            <FaPlus />
            إضافة مراجعة
          </Button>
        </NoReviews>
        {showForm && (
          <ReviewForm
            productId={productId}
            onSubmit={handleAddReview}
            onCancel={() => setShowForm(false)}
          />
        )}
      </ReviewsContainer>
    );
  }

  return (
    <ReviewsContainer>
      <ReviewsHeader>
        <ReviewsTitle>
          المراجعات والتقييمات ({reviewStats.totalReviews})
        </ReviewsTitle>
        <ReviewsControls>
          <FilterSelect
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option value="all">جميع التقييمات</option>
            <option value="5">5 نجوم</option>
            <option value="4">4 نجوم</option>
            <option value="3">3 نجوم</option>
            <option value="2">نجمتان</option>
            <option value="1">نجمة واحدة</option>
          </FilterSelect>
          
          <FilterSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">الأحدث</option>
            <option value="oldest">الأقدم</option>
            <option value="highest">أعلى تقييم</option>
            <option value="lowest">أقل تقييم</option>
            <option value="helpful">الأكثر إفادة</option>
          </FilterSelect>
        </ReviewsControls>
      </ReviewsHeader>

      {reviews.length > 0 && (
        <ReviewsSummary>
          <SummaryGrid>
            <OverallRating>
              <RatingNumber>{reviewStats.averageRating}</RatingNumber>
              <RatingStars>
                <StarRating rating={Math.round(reviewStats.averageRating)} />
              </RatingStars>
              <TotalReviews>{reviewStats.totalReviews} تقييم</TotalReviews>
            </OverallRating>

            <RatingBreakdown>
              {[5, 4, 3, 2, 1].map(rating => (
                <RatingRow key={rating}>
                  <RatingLabel>{rating} نجوم</RatingLabel>
                  <RatingBar>
                    <RatingFill 
                      percentage={getPercentage(
                        reviewStats.breakdown[rating], 
                        reviewStats.totalReviews
                      )}
                    />
                  </RatingBar>
                  <RatingCount>{reviewStats.breakdown[rating]}</RatingCount>
                </RatingRow>
              ))}
            </RatingBreakdown>

            <AddReviewSection>
              <Button
                variant="primary"
                onClick={() => setShowForm(!showForm)}
              >
                <FaPlus />
                {showForm ? 'إلغاء' : 'إضافة مراجعة'}
              </Button>
            </AddReviewSection>
          </SummaryGrid>
        </ReviewsSummary>
      )}

      {showForm && (
        <ReviewForm
          productId={productId}
          onSubmit={handleAddReview}
          onCancel={() => setShowForm(false)}
        />
      )}

      <ReviewsList>
        {/* Slice implements simple pagination without mutating the array */}
        {/* القص هنا يحقق ترقيم الصفحات بشكل مبسط دون تغيير البيانات الأصلية */}
        {filteredAndSortedReviews.slice(0, visibleReviews).map((review, index) => (
          <ReviewCard
            key={review.id || index}
            review={review}
            onLike={(reviewId, liked) => {
              // TODO: Implement like functionality with backend API
              // For now, the state is managed locally in ReviewCard
            }}
            onDislike={(reviewId, disliked) => {
              // TODO: Implement dislike functionality with backend API
              // For now, the state is managed locally in ReviewCard
            }}
            onReport={(reviewId) => {
              // TODO: Implement report functionality with backend API
              // Could show a modal for report reasons
            }}
          />
        ))}
      </ReviewsList>

      {filteredAndSortedReviews.length > visibleReviews && (
        <LoadMoreButton
          variant="secondary"
          onClick={handleLoadMore}
        >
          عرض المزيد من المراجعات
        </LoadMoreButton>
      )}
    </ReviewsContainer>
  );
};

export default ReviewList;
