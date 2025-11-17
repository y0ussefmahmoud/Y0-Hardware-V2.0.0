/**
 * Card Component - بطاقة قابلة لإعادة الاستخدام
 * --------------------------------------------------------------
 * Purpose (الغرض): Provide a flexible container with optional hover,
 * padding variants, and compound subcomponents (Header/Body/etc.).
 */
import React from 'react';
import styled, { css } from 'styled-components';

// StyledCard: Base wrapper with border, shadow, and optional hover effect
// الحاوية الأساسية للبطاقة مع ظل وحدود وخيار التفاعل عند التحويم
const StyledCard = styled.div`
  background: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow.light};
  transition: all ${({ theme }) => theme.transitions.normal};
  overflow: hidden;
  
  /* Hover effect */
  ${({ hoverable }) => hoverable && css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px ${({ theme }) => theme.colors.shadow.medium};
      border-color: ${({ theme }) => theme.colors.border.focus};
    }
  `}
  
  /* Padding variants */
  ${({ padding }) => {
    switch (padding) {
      case 'none':
        return css`padding: 0;`;
      case 'sm':
        return css`padding: ${({ theme }) => theme.spacing.md};`;
      case 'lg':
        return css`padding: ${({ theme }) => theme.spacing.xl};`;
      default:
        return css`padding: ${({ theme }) => theme.spacing.lg};`;
    }
  }}
`;

// CardHeader: Optional border separator for header content
// رأس البطاقة مع إمكانية إزالة الحد السفلي
const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  
  ${({ noBorder }) => noBorder && css`
    border-bottom: none;
  `}
`;

// CardTitle: Primary heading style for cards
// عنوان البطاقة بخط واضح
const CardTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

// CardSubtitle: Secondary text under the title
// وصف فرعي يُظهر تفاصيل إضافية
const CardSubtitle = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0 0 0;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

// CardBody: Main content area with optional padding removal
// جسم البطاقة مع خيار إزالة الحشو
const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  
  ${({ noPadding }) => noPadding && css`
    padding: 0;
  `}
`;

// CardFooter: Footer section with subtle background + divider
// تذييل البطاقة بخلفية خفيفة وحد علوي
const CardFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.secondary};
  
  ${({ noBorder }) => noBorder && css`
    border-top: none;
    background: transparent;
  `}
`;

// CardImage: Background-image helper with optional inner rounding
// صورة البطاقة مع دعم جعل الزوايا دائرية داخلياً
const CardImage = styled.div`
  width: 100%;
  height: ${({ height }) => height || '200px'};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  ${({ rounded }) => rounded && css`
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    margin: ${({ theme }) => theme.spacing.md};
    height: calc(${({ height }) => height || '200px'} - ${({ theme }) => theme.spacing.xl});
  `}
`;

/**
 * Card Component
 *
 * @param {React.ReactNode} children - محتوى البطاقة
 * @param {boolean} [hoverable=false] - تفعيل تأثير التحويم
 * @param {string} [padding='md'] - حجم الحشو (none/sm/md/lg)
 * @param {Function} [onClick] - حدث النقر الاختياري
 */
const Card = ({ 
  children, 
  hoverable = false, 
  padding = 'md',
  className,
  onClick,
  ...props 
}) => {
  return (
    <StyledCard
      hoverable={hoverable}
      padding={padding}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

// Compound components pattern: allows usage مثل Card.Header داخل البطاقة
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
