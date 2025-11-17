/**
 * Button Component - زر قابل لإعادة الاستخدام
 * --------------------------------------------------------------
 * Purpose (الغرض): Shared CTA with variants, sizes, loading state,
 * and full-width option used across the application.
 */
import React from 'react';
import styled, { css, keyframes } from 'styled-components';

// spin animation: subtle rotation for loading indicator
// حركة دوران بسيطة لمؤشر التحميل
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// LoadingSpinner: inline spinner rendered before button text in loading mode
// مؤشر تحميل يظهر قبل نص الزر عند تفعيل loading
const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

// buttonVariants: Theme-aware palette for each variant (primary/secondary/etc.)
// أنماط الألوان لكل نوع زر (أساسي، ثانوي، نجاح، خطر، شبح)
const buttonVariants = {
  primary: css`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    color: ${({ theme }) => theme.colors.text.inverse};
    border: none;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px ${({ theme }) => theme.colors.shadow.colored};
    }

    &:active {
      transform: translateY(0);
    }
  `,
  
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text.inverse};
      transform: translateY(-2px);
    }
  `,
  
  success: css`
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.text.inverse};
    border: none;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.success};
      filter: brightness(1.1);
      transform: translateY(-2px);
    }
  `,
  
  danger: css`
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.text.inverse};
    border: none;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.error};
      filter: brightness(1.1);
      transform: translateY(-2px);
    }
  `,
  
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    border: none;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.background.hover};
    }
  `,
};

// buttonSizes: Padding + font sizing presets for sm/md/lg
// أحجام الزر الافتراضية من حيث الحشو وحجم الخط
const buttonSizes = {
  sm: css`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  `,
  
  md: css`
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.fonts.sizes.base};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  `,
  
  lg: css`
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  `,
};

// StyledButton: Base styles + variant/size composability
// المكون الأساسي الذي يجمع الأنماط العامة مع الأنواع والأحجام
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  text-align: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
  /* Apply variant styles */
  ${({ variant }) => buttonVariants[variant] || buttonVariants.primary}
  
  /* Apply size styles */
  ${({ size }) => buttonSizes[size] || buttonSizes.md}
  
  /* Full width */
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Loading state - hides children and shows pseudo spinner */
  /* حالة التحميل: تخفي المحتوى وتعرض مؤشر دوران */
  ${({ loading }) => loading && css`
    cursor: not-allowed;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    & > * {
      opacity: 0;
    }
  `}
  
  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none !important;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

/**
 * Button Component - زر قابل لإعادة الاستخدام
 * 
 * @param {React.ReactNode} children - محتوى الزر (نص/أيقونات)
 * @param {string} [variant='primary'] - نوع الزر (primary/secondary/success/danger/ghost)
 * @param {string} [size='md'] - حجم الزر (sm/md/lg)
 * @param {boolean} [fullWidth=false] - هل يمتد الزر بعرض الحاوية
 * @param {boolean} [disabled=false] - تعطيل الزر
 * @param {boolean} [loading=false] - عرض حالة التحميل
 * @param {Function} [onClick] - دالة النقر
 * @param {string} [type='button'] - نوع الزر (button/submit/reset)
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className,
  ...props 
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      className={className}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </StyledButton>
  );
};

export default Button;
