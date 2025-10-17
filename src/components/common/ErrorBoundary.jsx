import React from 'react';
import styled from 'styled-components';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';
import Button from './Button';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  margin: ${({ theme }) => theme.spacing.xl};
`;

const ErrorIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.error}20;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
    color: ${({ theme }) => theme.colors.error};
  }
`;

const ErrorTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 500px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

const ErrorDetails = styled.details`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  max-width: 600px;
  width: 100%;
  
  summary {
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fonts.weights.medium};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    
    &:hover {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;

const ErrorStack = styled.pre`
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  color: ${({ theme }) => theme.colors.text.tertiary};
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    
    // Here you could also log the error to an error reporting service
    // logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      const { fallback: Fallback } = this.props;
      
      // If a custom fallback component is provided, use it
      if (Fallback) {
        return (
          <Fallback 
            error={this.state.error}
            errorInfo={this.state.errorInfo}
            onRetry={this.handleRetry}
            onGoHome={this.handleGoHome}
          />
        );
      }

      // Default error UI
      return (
        <ErrorContainer>
          <ErrorIcon>
            <FaExclamationTriangle />
          </ErrorIcon>
          
          <ErrorTitle>عذراً، حدث خطأ غير متوقع</ErrorTitle>
          
          <ErrorMessage>
            نعتذر عن هذا الإزعاج. حدث خطأ تقني أثناء تحميل هذه الصفحة. 
            يرجى المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية.
          </ErrorMessage>

          <ActionButtons>
            <Button variant="primary" onClick={this.handleRetry}>
              <FaRedo />
              المحاولة مرة أخرى
            </Button>
            <Button variant="secondary" onClick={this.handleGoHome}>
              <FaHome />
              العودة للرئيسية
            </Button>
          </ActionButtons>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <ErrorDetails>
              <summary>تفاصيل الخطأ (للمطورين)</summary>
              <ErrorStack>
                {this.state.error.toString()}
                {this.state.errorInfo.componentStack}
              </ErrorStack>
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
