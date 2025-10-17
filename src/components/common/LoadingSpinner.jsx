import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xl};
  
  ${({ fullScreen }) => fullScreen && `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.background.primary}dd;
    backdrop-filter: blur(4px);
    z-index: 9999;
  `}
`;

const Spinner = styled.div`
  width: ${({ size }) => {
    switch (size) {
      case 'small': return '20px';
      case 'large': return '60px';
      default: return '40px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small': return '20px';
      case 'large': return '60px';
      default: return '40px';
    }
  }};
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'dots':
        return `
          display: flex;
          gap: 4px;
          
          &::before,
          &::after,
          & {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${theme.colors.primary};
            animation: ${bounce} 1.4s ease-in-out infinite both;
          }
          
          &::before {
            animation-delay: -0.32s;
          }
          
          &::after {
            animation-delay: -0.16s;
          }
        `;
      
      case 'pulse':
        return `
          border-radius: 50%;
          background: ${theme.colors.primary};
          animation: ${pulse} 1.5s ease-in-out infinite;
        `;
      
      default: // spinner
        return `
          border: 3px solid ${theme.colors.border.light};
          border-top: 3px solid ${theme.colors.primary};
          border-radius: 50%;
          animation: ${spin} 1s linear infinite;
        `;
    }
  }}
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  margin: 0;
  text-align: center;
`;

const DotsSpinner = styled.div`
  display: flex;
  gap: 4px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  animation: ${bounce} 1.4s ease-in-out infinite both;
  animation-delay: ${({ delay }) => delay}s;
`;

const LoadingSpinner = ({ 
  size = 'medium', 
  variant = 'spinner', 
  text = 'جاري التحميل...', 
  fullScreen = false,
  showText = true 
}) => {
  if (variant === 'dots') {
    return (
      <SpinnerContainer fullScreen={fullScreen}>
        <DotsSpinner>
          <Dot delay={-0.32} />
          <Dot delay={-0.16} />
          <Dot delay={0} />
        </DotsSpinner>
        {showText && <LoadingText>{text}</LoadingText>}
      </SpinnerContainer>
    );
  }

  return (
    <SpinnerContainer fullScreen={fullScreen}>
      <Spinner size={size} variant={variant} />
      {showText && <LoadingText>{text}</LoadingText>}
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
