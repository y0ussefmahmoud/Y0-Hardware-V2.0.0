import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

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

const RatingText = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

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
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleStarClick = (starRating) => {
    if (!interactive) return;
    
    setSelectedRating(starRating);
    if (onChange) {
      onChange(starRating);
    }
  };

  const handleStarHover = (starRating) => {
    if (!interactive) return;
    setHoveredRating(starRating);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setHoveredRating(0);
  };

  const displayRating = interactive ? selectedRating : rating;
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
        aria-label={`${starNumber} نجمة${starNumber > 1 ? '' : ''}`}
      >
        <Star
          filled={isFilled}
          hovered={isHovered}
          size={size}
        />
      </StarButton>
    );
  });

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
