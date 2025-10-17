import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCamera, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { useNotification } from '../../context/NotificationContext';
import StarRating from '../common/StarRating';
import Button from '../common/Button';
import Card from '../common/Card';

const FormContainer = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FormTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormLabel = styled.label`
  display: block;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
`;

const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: ${({ theme }) => theme.spacing.xs};
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.shadow.colored};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-family: inherit;
  resize: vertical;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.shadow.colored};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

const RatingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const RatingLabel = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const RatingDescription = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
`;

const ImageUploadSection = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}10;
  }
  
  &.dragover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}20;
  }
`;

const UploadIcon = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const UploadText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ImagePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const PreviewImage = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.text.inverse};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    transform: scale(1.1);
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FormActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const CharacterCount = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  color: ${({ limit, theme }) => 
    limit < 50 ? theme.colors.error : theme.colors.text.tertiary
  };
  text-align: right;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const ReviewForm = ({ productId, onSubmit, onCancel }) => {
  const { success, error } = useNotification();
  const [formData, setFormData] = useState({
    rating: 0,
    title: '',
    comment: '',
    images: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const maxCommentLength = 1000;
  const maxImages = 5;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleImageUpload = (files) => {
    const newImages = Array.from(files).slice(0, maxImages - formData.images.length);
    
    newImages.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFormData(prev => ({
            ...prev,
            images: [...prev.images, {
              file,
              url: e.target.result,
              id: Date.now() + Math.random()
            }]
          }));
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleFileInputChange = (e) => {
    handleImageUpload(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleImageUpload(e.dataTransfer.files);
  };

  const removeImage = (imageId) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter(img => img.id !== imageId)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.rating === 0) {
      error('يرجى إضافة تقييم للمنتج');
      return;
    }
    
    if (!formData.comment.trim()) {
      error('يرجى كتابة تعليق على المنتج');
      return;
    }

    setIsSubmitting(true);

    try {
      const reviewData = {
        productId,
        rating: formData.rating,
        title: formData.title.trim(),
        comment: formData.comment.trim(),
        images: formData.images.map(img => img.url),
        date: new Date().toISOString(),
        user: {
          name: 'المستخدم الحالي', // TODO: Get from auth context
          avatar: null
        },
        verified: false, // TODO: Check if user purchased the product
        likes: 0,
        dislikes: 0
      };

      if (onSubmit) {
        await onSubmit(reviewData);
      }

      success('تم إضافة مراجعتك بنجاح!');
      
      // Reset form
      setFormData({
        rating: 0,
        title: '',
        comment: '',
        images: []
      });
      
    } catch (err) {
      error('حدث خطأ أثناء إضافة المراجعة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getRatingDescription = (rating) => {
    switch (rating) {
      case 1: return 'سيء جداً';
      case 2: return 'سيء';
      case 3: return 'متوسط';
      case 4: return 'جيد';
      case 5: return 'ممتاز';
      default: return 'اختر تقييمك';
    }
  };

  return (
    <FormContainer>
      <FormTitle>إضافة مراجعة</FormTitle>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>
            التقييم <RequiredMark>*</RequiredMark>
          </FormLabel>
          <RatingSection>
            <RatingLabel>ما رأيك في هذا المنتج؟</RatingLabel>
            <StarRating
              rating={formData.rating}
              interactive
              size="large"
              onChange={handleRatingChange}
            />
            <RatingDescription>{getRatingDescription(formData.rating)}</RatingDescription>
          </RatingSection>
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="title">عنوان المراجعة</FormLabel>
          <FormInput
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="مثال: منتج رائع وجودة ممتازة"
            maxLength="100"
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="comment">
            تعليقك <RequiredMark>*</RequiredMark>
          </FormLabel>
          <FormTextarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            placeholder="شاركنا تجربتك مع هذا المنتج..."
            maxLength={maxCommentLength}
            required
          />
          <CharacterCount limit={maxCommentLength - formData.comment.length}>
            {formData.comment.length}/{maxCommentLength}
          </CharacterCount>
        </FormGroup>

        <FormGroup>
          <FormLabel>صور المنتج (اختياري)</FormLabel>
          <ImageUploadSection
            className={dragOver ? 'dragover' : ''}
            onClick={() => document.getElementById('imageInput').click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <UploadIcon>
              <FaCamera />
            </UploadIcon>
            <UploadText>
              <strong>اضغط لاختيار الصور</strong> أو اسحب الصور هنا
              <br />
              <small>حد أقصى {maxImages} صور، PNG أو JPG</small>
            </UploadText>
          </ImageUploadSection>
          
          <HiddenFileInput
            id="imageInput"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileInputChange}
          />

          {formData.images.length > 0 && (
            <ImagePreview>
              {formData.images.map(image => (
                <PreviewImage key={image.id}>
                  <img src={image.url} alt="معاينة" />
                  <RemoveImageButton
                    type="button"
                    onClick={() => removeImage(image.id)}
                  >
                    <FaTimes />
                  </RemoveImageButton>
                </PreviewImage>
              ))}
            </ImagePreview>
          )}
        </FormGroup>

        <FormActions>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmitting}
            disabled={isSubmitting || formData.rating === 0}
          >
            <FaPaperPlane />
            {isSubmitting ? 'جاري الإرسال...' : 'نشر المراجعة'}
          </Button>
          
          {onCancel && (
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              إلغاء
            </Button>
          )}
        </FormActions>
      </form>
    </FormContainer>
  );
};

export default ReviewForm;
