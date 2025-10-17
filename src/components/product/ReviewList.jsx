import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { FaFilter, FaSortAmountDown, FaPlus, FaStar } from 'react-icons/fa';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import StarRating from '../common/StarRating';
import Button from '../common/Button';
import Card from '../common/Card';

const ReviewsContainer = styled.section`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

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

const RatingBar = styled.div`
  flex: 1;
  height: 8px;
  background: ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`;

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

const ReviewList = ({ productId, reviews = [], onAddReview }) => {
  const [showForm, setShowForm] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [filterBy, setFilterBy] = useState('all');
  const [visibleReviews, setVisibleReviews] = useState(5);

  // Calculate review statistics
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

  // Filter and sort reviews
  const filteredAndSortedReviews = useMemo(() => {
    let filtered = [...reviews];

    // Apply filter
    if (filterBy !== 'all') {
      const rating = parseInt(filterBy);
      filtered = filtered.filter(review => review.rating === rating);
    }

    // Apply sort
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

  const handleAddReview = async (reviewData) => {
    if (onAddReview) {
      await onAddReview(reviewData);
    }
    setShowForm(false);
  };

  const handleLoadMore = () => {
    setVisibleReviews(prev => prev + 5);
  };

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
