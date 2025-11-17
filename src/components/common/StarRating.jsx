/**
 * StarRating Component - مكون التقييم بالنجوم
 * --------------------------------------------------------------
 * Purpose (الغرض): Displays read-only or interactive star ratings with
 * optional descriptive text and review counts.
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

// RatingContainer: Aligns stars and text on a single row
// حاوية النجوم والنصوص المصاحبة في صف واحد
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

// StarButton: Handles hover/focus states for interactive ratings
// زر النجمة الذي يتفاعل عند التمرير أو التركيز في الوضع التفاعلي
const StarButton = styled.button`
  background: none;
  border: none;
  cursor: ${({ interactive }) => interactive ? 'pointer' : 'default'};
  padding: 2px;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    transform: ${({ interactive }) => interactive ? 'scale(1.1)' : 'none'};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

// Star icon with dynamic sizing + color change when filled/hovered
// أيقونة النجمة تتغير في الحجم واللون حسب الحالة
const Star = styled(FaStar)`
  font-size: ${({ size }) => {
    switch (size) {
      case 'small': return '14px';
      case 'large': return '24px';
      case 'xlarge': return '32px';
      default: return '18px';
    }
  }};
  color: ${({ filled, theme, hovered }) => {
    if (filled || hovered) {
      return theme.colors.warning;
    }
    return theme.colors.border.secondary;
  }};
  transition: all ${({ theme }) => theme.transitions.fast};
`;

// RatingText: Optional summary text to the right of the stars
// نص اختياري يظهر بجوار النجوم
const RatingText = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

/**
 * @param {number} [rating=0] - التقييم الحالي
 * @param {number} [maxRating=5] - أقصى عدد للنجوم
 * @param {string} [size='medium'] - حجم النجوم (small/medium/large/xlarge)
 * @param {boolean} [interactive=false] - تمكين التعديل من قبل المستخدم
 * @param {boolean} [showText=false] - عرض النص بجانب النجوم
 * @param {number} [reviewCount=0] - عدد المراجعات
 * @param {Function} [onChange] - دالة تستدعى عند تغير التقييم
 */
const StarRating = ({
  rating = 0,
  maxRating = 5,
  size = 'medium',
  interactive = false,
  showText = false,
  reviewCount = 0,
  onChange,
  className
}) => {
  // hoveredRating: Stores preview rating when hovering in interactive mode
  const [hoveredRating, setHoveredRating] = useState(0);
  // selectedRating: Local state mirroring user selection until persisted
  const [selectedRating, setSelectedRating] = useState(rating);

  /**
   * handleStarClick - تحديث التقييم عند النقر
   * EN: Updates state + triggers onChange callback when interactive.
   */
  const handleStarClick = (starRating) => {
    if (!interactive) return;
    
    setSelectedRating(starRating);
    if (onChange) {
      onChange(starRating);
    }
  };

  /**
   * handleStarHover - يعرض معاينة عند تمرير المؤشر
   */
  const handleStarHover = (starRating) => {
    if (!interactive) return;
    setHoveredRating(starRating);
  };

  /**
   * handleMouseLeave - يعيد حالة المعاينة للوضع الافتراضي
   */
  const handleMouseLeave = () => {
    if (!interactive) return;
    setHoveredRating(0);
  };

  // displayRating: Chooses between selected vs provided rating
  const displayRating = interactive ? selectedRating : rating;
  // Generate stars array so we can map to StarButton components
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= displayRating;
    const isHovered = interactive && starNumber <= hoveredRating;

    return (
      <StarButton
        key={starNumber}
        interactive={interactive}
        onClick={() => handleStarClick(starNumber)}
        onMouseEnter={() => handleStarHover(starNumber)}
        type="button"
        aria-label={`${starNumber} نجمة`}
      >
        <Star
          filled={isFilled}
          hovered={isHovered}
          size={size}
        />
      </StarButton>
    );
  });

  /**
   * getRatingText - يبني النص المعروض بجانب النجوم
   * EN: Prefers review count, otherwise shows rating summary or fallback.
   */
  const getRatingText = () => {
    if (reviewCount > 0) {
      return `(${reviewCount} تقييم)`;
    }
    if (displayRating > 0) {
      return `${displayRating} من ${maxRating}`;
    }
    return 'لا توجد تقييمات';
  };

  return (
    <RatingContainer 
      className={className}
      onMouseLeave={handleMouseLeave}
    >
      {stars}
      {showText && <RatingText>{getRatingText()}</RatingText>}
    </RatingContainer>
  );
};

export default StarRating;
