/**
 * ReviewCard Component - بطاقة المراجعة
 * --------------------------------------------------------------
 * Purpose (الغرض): Presents individual user reviews with rating, text,
 * media, verification badge, and interactive actions.
 * Usage (الاستخدام): Rendered by `ReviewList` for each review entry.
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaThumbsUp, FaThumbsDown, FaFlag, FaUser } from 'react-icons/fa';
import StarRating from '../common/StarRating';
import Card from '../common/Card';

// ReviewContainer: Card wrapper with hover shadow emphasis
// حاوية المراجعة مع ظل متزايد عند التحويم
const ReviewContainer = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadow.medium};
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

// UserAvatar: Gradient circle showing initials by default
// صورة رمزية بخلفية متدرجة تظهر الأحرف الأولى افتراضياً
const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.inverse};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const UserName = styled.h4`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const ReviewDate = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ReviewTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  line-height: 1.4;
`;

const ReviewText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  white-space: pre-wrap;
`;

// ReviewImages: Flexible row of thumbnail previews
// صف مرن لصور المراجعة المصغرة
const ReviewImages = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

const ReviewImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);
  }
`;

// ReviewFooter: Separates action buttons with border + spacing
// تذييل يحتوي على أزرار التفاعل مع حد علوي
const ReviewFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const ReviewActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

// ActionButton: Styled toggle for helpful/unhelpful actions
// زر مخصص لأزرار مفيد/غير مفيد
const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ active, theme }) => 
    active ? theme.colors.primary + '20' : theme.colors.background.card
  };
  color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.text.secondary
  };
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary}20;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
  }
`;

const ReportButton = styled(ActionButton)`
  color: ${({ theme }) => theme.colors.text.tertiary};
  
  &:hover {
    background: ${({ theme }) => theme.colors.error}20;
    color: ${({ theme }) => theme.colors.error};
    border-color: ${({ theme }) => theme.colors.error};
  }
`;

// VerifiedBadge: Custom badge with pseudo checkmark for verified buyers
// شارة المشتري الموثق مع علامة تحقق مخصصة
const VerifiedBadge = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  color: ${({ theme }) => theme.colors.success};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  
  &::before {
    content: '✓';
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.text.inverse};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
  }
`;

/**
 * @param {Object} review - بيانات المراجعة
 * @param {Function} [onLike] - Callback عند تفعيل زر مفيد
 * @param {Function} [onDislike] - Callback عند تفعيل زر غير مفيد
 * @param {Function} [onReport] - Callback عند الإبلاغ
 */
const ReviewCard = ({ review, onLike, onDislike, onReport }) => {
  // liked/disliked: Local UI state until backend integration
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(review.likes || 0);
  const [dislikeCount, setDislikeCount] = useState(review.dislikes || 0);

  /**
   * handleLike - يدير منطق زر مفيد
   * EN: Toggles like, ensures dislike is cleared, updates counters, notifies parent.
   */
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikeCount(prev => prev + 1);
      if (disliked) {
        setDisliked(false);
        setDislikeCount(prev => prev - 1);
      }
    }
    if (onLike) onLike(review.id, !liked);
  };

  /**
   * handleDislike - يدير زر غير مفيد
   * EN: Mirrors handleLike but for dislikes, keeping states mutually exclusive.
   */
  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikeCount(prev => prev - 1);
    } else {
      setDisliked(true);
      setDislikeCount(prev => prev + 1);
      if (liked) {
        setLiked(false);
        setLikeCount(prev => prev - 1);
      }
    }
    if (onDislike) onDislike(review.id, !disliked);
  };

  /**
   * handleReport - إرسال إبلاغ للمراجعة
   * EN: Delegates to parent for API/report modal.
   */
  const handleReport = () => {
    if (onReport) onReport(review.id);
  };

  /**
   * formatDate - ينسق تاريخ المراجعة باللغة العربية
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  /**
   * getUserInitials - استخراج الأحرف الأولى للاسم
   */
  const getUserInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <ReviewContainer>
      <ReviewHeader>
        <UserInfo>
          <UserAvatar>
            {review.user.avatar ? (
              <img src={review.user.avatar} alt={review.user.name} />
            ) : (
              getUserInitials(review.user.name)
            )}
          </UserAvatar>
          <UserDetails>
            <UserName>{review.user.name}</UserName>
            <ReviewDate>{formatDate(review.date)}</ReviewDate>
            {review.verified && (
              <VerifiedBadge>مشترٍ موثق</VerifiedBadge>
            )}
          </UserDetails>
        </UserInfo>
        <ReviewRating>
          <StarRating rating={review.rating} size="small" />
        </ReviewRating>
      </ReviewHeader>

      {review.title && <ReviewTitle>{review.title}</ReviewTitle>}
      
      <ReviewText>{review.comment}</ReviewText>

      {review.images && review.images.length > 0 && (
        <ReviewImages>
          {review.images.map((image, index) => (
            <ReviewImage
              key={index}
              src={image}
              alt={`صورة المراجعة ${index + 1}`}
              onClick={() => {
                // Open image in new tab for now
                // TODO: Implement image modal/lightbox in future version
                window.open(image, '_blank');
              }}
            />
          ))}
        </ReviewImages>
      )}

      <ReviewFooter>
        <ReviewActions>
          <ActionButton active={liked} onClick={handleLike}>
            <FaThumbsUp />
            مفيد ({likeCount})
          </ActionButton>
          <ActionButton active={disliked} onClick={handleDislike}>
            <FaThumbsDown />
            غير مفيد ({dislikeCount})
          </ActionButton>
        </ReviewActions>
        
        <ReportButton onClick={handleReport}>
          <FaFlag />
          إبلاغ
        </ReportButton>
      </ReviewFooter>
    </ReviewContainer>
  );
};

export default ReviewCard;
