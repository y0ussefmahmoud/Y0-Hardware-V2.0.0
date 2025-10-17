import React, { createContext, useContext, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCheck, FaTimes, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

// Create Notification Context
const NotificationContext = createContext();

// Custom hook to use notifications
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

// Animation keyframes
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

// Styled components
const NotificationContainer = styled.div`
  position: fixed;
  top: 100px;
  right: ${({ theme }) => theme.spacing.lg};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 400px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    right: ${({ theme }) => theme.spacing.md};
    left: ${({ theme }) => theme.spacing.md};
    max-width: none;
  }
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ type, theme }) => {
    switch (type) {
      case 'success': return theme.colors.success;
      case 'error': return theme.colors.error;
      case 'warning': return theme.colors.warning;
      case 'info': return theme.colors.info;
      default: return theme.colors.border.primary;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow.medium};
  animation: ${({ isExiting }) => isExiting ? slideOut : slideIn} 0.3s ease-out;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ type, theme }) => {
      switch (type) {
        case 'success': return theme.colors.success;
        case 'error': return theme.colors.error;
        case 'warning': return theme.colors.warning;
        case 'info': return theme.colors.info;
        default: return theme.colors.primary;
      }
    }};
  }
`;

const NotificationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${({ type, theme }) => {
    switch (type) {
      case 'success': return theme.colors.success;
      case 'error': return theme.colors.error;
      case 'warning': return theme.colors.warning;
      case 'info': return theme.colors.info;
      default: return theme.colors.primary;
    }
  }};
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

const NotificationContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const NotificationTitle = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const NotificationMessage = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.4;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.tertiary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.hover};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: ${({ type, theme }) => {
    switch (type) {
      case 'success': return theme.colors.success;
      case 'error': return theme.colors.error;
      case 'warning': return theme.colors.warning;
      case 'info': return theme.colors.info;
      default: return theme.colors.primary;
    }
  }};
  width: ${({ progress }) => progress}%;
  transition: width 0.1s linear;
`;

// Notification component
const Notification = ({ notification, onClose }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'success': return <FaCheck />;
      case 'error': return <FaTimes />;
      case 'warning': return <FaExclamationTriangle />;
      case 'info': return <FaInfoCircle />;
      default: return <FaInfoCircle />;
    }
  };

  const getTitle = (type) => {
    switch (type) {
      case 'success': return 'نجح';
      case 'error': return 'خطأ';
      case 'warning': return 'تحذير';
      case 'info': return 'معلومات';
      default: return 'إشعار';
    }
  };

  return (
    <NotificationItem type={notification.type} isExiting={notification.isExiting}>
      <NotificationIcon type={notification.type}>
        {getIcon(notification.type)}
      </NotificationIcon>
      
      <NotificationContent>
        <NotificationTitle>
          {notification.title || getTitle(notification.type)}
        </NotificationTitle>
        <NotificationMessage>{notification.message}</NotificationMessage>
      </NotificationContent>
      
      <CloseButton onClick={() => onClose(notification.id)}>
        <FaTimes />
      </CloseButton>
      
      {notification.progress !== undefined && (
        <ProgressBar type={notification.type} progress={notification.progress} />
      )}
    </NotificationItem>
  );
};

// Notification Provider Component
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = Date.now() + Math.random();
    const newNotification = {
      id,
      type: 'info',
      duration: 5000,
      ...notification,
    };

    setNotifications(prev => [...prev, newNotification]);

    // Auto remove after duration
    if (newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isExiting: true }
          : notification
      )
    );

    // Remove from DOM after animation
    setTimeout(() => {
      setNotifications(prev => prev.filter(notification => notification.id !== id));
    }, 300);
  }, []);

  const updateNotification = useCallback((id, updates) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, ...updates }
          : notification
      )
    );
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  // Convenience methods
  const success = useCallback((message, options = {}) => {
    return addNotification({
      type: 'success',
      message,
      ...options,
    });
  }, [addNotification]);

  const error = useCallback((message, options = {}) => {
    return addNotification({
      type: 'error',
      message,
      duration: 7000, // Longer duration for errors
      ...options,
    });
  }, [addNotification]);

  const warning = useCallback((message, options = {}) => {
    return addNotification({
      type: 'warning',
      message,
      ...options,
    });
  }, [addNotification]);

  const info = useCallback((message, options = {}) => {
    return addNotification({
      type: 'info',
      message,
      ...options,
    });
  }, [addNotification]);

  const value = {
    notifications,
    addNotification,
    removeNotification,
    updateNotification,
    clearAll,
    success,
    error,
    warning,
    info,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer>
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            notification={notification}
            onClose={removeNotification}
          />
        ))}
      </NotificationContainer>
    </NotificationContext.Provider>
  );
};
