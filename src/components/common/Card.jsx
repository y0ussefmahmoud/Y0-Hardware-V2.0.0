import React from 'react';
import styled, { css } from 'styled-components';

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

const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  
  ${({ noBorder }) => noBorder && css`
    border-bottom: none;
  `}
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CardSubtitle = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0 0 0;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  
  ${({ noPadding }) => noPadding && css`
    padding: 0;
  `}
`;

const CardFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.secondary};
  
  ${({ noBorder }) => noBorder && css`
    border-top: none;
    background: transparent;
  `}
`;

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

// Compound components
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
