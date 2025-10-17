// ===== Theme Configuration =====
export const lightTheme = {
  // Primary Colors
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#2ed573',
    warning: '#ffa502',
    error: '#ff4757',
    success: '#2ed573',
    info: '#3742fa',
    
    // Background Colors
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      tertiary: '#e9ecef',
      card: '#ffffff',
      modal: '#ffffff',
      hover: '#f1f3f4',
      active: '#e8eaed',
    },
    
    // Text Colors
    text: {
      primary: '#333333',
      secondary: '#666666',
      tertiary: '#888888',
      muted: '#999999',
      disabled: '#cccccc',
      inverse: '#ffffff',
      link: '#667eea',
      linkHover: '#5a6fd8',
    },
    
    // Border Colors
    border: {
      primary: '#e9ecef',
      secondary: '#dee2e6',
      light: '#f1f3f4',
      focus: '#667eea',
    },
    
    // Shadow Colors
    shadow: {
      light: 'rgba(0, 0, 0, 0.1)',
      medium: 'rgba(0, 0, 0, 0.15)',
      heavy: 'rgba(0, 0, 0, 0.25)',
      colored: 'rgba(102, 126, 234, 0.2)',
    }
  },
  
  // Typography
  fonts: {
    primary: "'Cairo', sans-serif",
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Transitions
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  }
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: '#7c3aed',
    secondary: '#8b5cf6',
    
    // Background Colors
    background: {
      primary: '#1a1a1a',
      secondary: '#2d2d2d',
      tertiary: '#404040',
      card: '#2d2d2d',
      modal: '#2d2d2d',
      hover: '#404040',
      active: '#525252',
    },
    
    // Text Colors
    text: {
      primary: '#ffffff',
      secondary: '#d1d5db',
      tertiary: '#9ca3af',
      muted: '#6b7280',
      disabled: '#4b5563',
      inverse: '#1a1a1a',
      link: '#8b5cf6',
      linkHover: '#a78bfa',
    },
    
    // Border Colors
    border: {
      primary: '#404040',
      secondary: '#525252',
      light: '#374151',
      focus: '#8b5cf6',
    },
    
    // Shadow Colors
    shadow: {
      light: 'rgba(0, 0, 0, 0.3)',
      medium: 'rgba(0, 0, 0, 0.4)',
      heavy: 'rgba(0, 0, 0, 0.6)',
      colored: 'rgba(139, 92, 246, 0.3)',
    }
  }
};
