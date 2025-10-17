import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset & Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.primary};
    direction: rtl;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  h1 { font-size: ${({ theme }) => theme.fonts.sizes['4xl']}; }
  h2 { font-size: ${({ theme }) => theme.fonts.sizes['3xl']}; }
  h3 { font-size: ${({ theme }) => theme.fonts.sizes['2xl']}; }
  h4 { font-size: ${({ theme }) => theme.fonts.sizes.xl}; }
  h5 { font-size: ${({ theme }) => theme.fonts.sizes.lg}; }
  h6 { font-size: ${({ theme }) => theme.fonts.sizes.base}; }

  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.text.link};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.text.linkHover};
    }
  }

  /* Lists */
  ul, ol {
    list-style: none;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Buttons */
  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    transition: all ${({ theme }) => theme.transitions.fast};

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.border.focus};
      outline-offset: 2px;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  /* Form Elements */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: 0.75rem;
    transition: border-color ${({ theme }) => theme.transitions.fast};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.border.focus};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.shadow.colored};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.muted};
    }
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.full};

    &:hover {
      background: ${({ theme }) => theme.colors.text.tertiary};
    }
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 0 ${({ theme }) => theme.spacing.lg};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding: 0 ${({ theme }) => theme.spacing.xl};
    }
  }

  /* Utility Classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  /* Animation Classes */
  .fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }

  .slide-up {
    animation: slideUp 0.5s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Loading Animation */
  .loading-spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.colors.border.light};
    border-radius: 50%;
    border-top-color: ${({ theme }) => theme.colors.primary};
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
