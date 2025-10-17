import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Simple analytics hook for tracking page views and user interactions
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    trackPageView(location.pathname);
  }, [location]);

  const trackPageView = (path) => {
    // In production, you would send this to your analytics service
    // For now, we'll just log it
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Page View:', path);
    }
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
      });
    }
    
    // Store in localStorage for demo purposes
    const analytics = JSON.parse(localStorage.getItem('y0-hardware-analytics') || '{}');
    analytics.pageViews = analytics.pageViews || {};
    analytics.pageViews[path] = (analytics.pageViews[path] || 0) + 1;
    analytics.lastVisit = new Date().toISOString();
    localStorage.setItem('y0-hardware-analytics', JSON.stringify(analytics));
  };

  const trackEvent = (category, action, label = '', value = 0) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Event:', { category, action, label, value });
    }
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
    
    // Store in localStorage for demo purposes
    const analytics = JSON.parse(localStorage.getItem('y0-hardware-analytics') || '{}');
    analytics.events = analytics.events || [];
    analytics.events.push({
      category,
      action,
      label,
      value,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('y0-hardware-analytics', JSON.stringify(analytics));
  };

  const trackPurchase = (transactionId, items, totalValue) => {
    trackEvent('ecommerce', 'purchase', transactionId, totalValue);
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: totalValue,
        currency: 'EGP',
        items: items.map(item => ({
          item_id: item.id,
          item_name: item.name,
          category: item.category,
          quantity: item.quantity,
          price: item.price
        }))
      });
    }
  };

  const trackAddToCart = (product) => {
    trackEvent('ecommerce', 'add_to_cart', product.name, product.price);
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'add_to_cart', {
        currency: 'EGP',
        value: product.price,
        items: [{
          item_id: product.id,
          item_name: product.name,
          category: product.category,
          price: product.price
        }]
      });
    }
  };

  const trackSearch = (searchTerm, resultsCount = 0) => {
    trackEvent('search', 'search', searchTerm, resultsCount);
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'search', {
        search_term: searchTerm,
        results_count: resultsCount
      });
    }
  };

  const trackProductView = (product) => {
    trackEvent('ecommerce', 'view_item', product.name, product.price);
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'view_item', {
        currency: 'EGP',
        value: product.price,
        items: [{
          item_id: product.id,
          item_name: product.name,
          category: product.category,
          price: product.price
        }]
      });
    }
  };

  return {
    trackEvent,
    trackPurchase,
    trackAddToCart,
    trackSearch,
    trackProductView
  };
};

// Performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals (simplified version without external library)
    if ('PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (process.env.NODE_ENV === 'development') {
            console.log('📊 LCP:', lastEntry.startTime + 'ms');
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.log('LCP monitoring not supported');
      }

      // Monitor First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            if (process.env.NODE_ENV === 'development') {
              console.log('📊 FID:', entry.processingStart - entry.startTime + 'ms');
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.log('FID monitoring not supported');
      }
    }

    // Monitor loading performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      if (process.env.NODE_ENV === 'development') {
        console.log('⚡ Load Time:', loadTime + 'ms');
      }
      
      // Track slow loading
      if (loadTime > 3000) {
        console.warn('🐌 Slow loading detected:', loadTime + 'ms');
      }
    });

    // Monitor errors
    window.addEventListener('error', (event) => {
      console.error('💥 JavaScript Error:', event.error);
      
      // In production, send to error tracking service
      if (process.env.NODE_ENV === 'production') {
        // Example: Sentry, LogRocket, etc.
      }
    });

    // Monitor unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      console.error('💥 Unhandled Promise Rejection:', event.reason);
    });
  }, []);
};

// User behavior tracking
export const useUserBehavior = () => {
  useEffect(() => {
    let startTime = Date.now();
    let isActive = true;
    let totalTimeSpent = 0;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActive = false;
        totalTimeSpent += Date.now() - startTime;
      } else {
        isActive = true;
        startTime = Date.now();
      }
    };

    const handleBeforeUnload = () => {
      if (isActive) {
        totalTimeSpent += Date.now() - startTime;
      }
      
      // Store session data
      const sessionData = {
        timeSpent: totalTimeSpent,
        endTime: new Date().toISOString(),
        page: window.location.pathname
      };
      
      localStorage.setItem('y0-hardware-session', JSON.stringify(sessionData));
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};

// Analytics component that initializes all tracking
const Analytics = () => {
  useAnalytics();
  usePerformanceMonitoring();
  useUserBehavior();
  
  return null; // This component doesn't render anything
};

export default Analytics;
