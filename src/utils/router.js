/**
 * Router utilities for GitHub Pages compatibility
 */

// Check if we're running on GitHub Pages
export const isGitHubPages = () => {
  return window.location.hostname === 'y0ussefmahmoud.github.io';
};

// Get the correct base path
export const getBasePath = () => {
  return isGitHubPages() ? '/Y0-Hardware-V2.0.0' : '';
};

// Create proper links for GitHub Pages with full path
export const createLink = (path) => {
  if (isGitHubPages()) {
    // For GitHub Pages, use full path with hash routing
    return `/Y0-Hardware-V2.0.0/#${path}`;
  }
  // For local development, use hash routing
  return `#${path}`;
};

// Create absolute URL for GitHub Pages
export const createAbsoluteLink = (path) => {
  if (isGitHubPages()) {
    return `https://y0ussefmahmoud.github.io/Y0-Hardware-V2.0.0/#${path}`;
  }
  return `${window.location.origin}/#${path}`;
};

// Navigate programmatically
export const navigateTo = (path) => {
  if (isGitHubPages()) {
    window.location.href = `/Y0-Hardware-V2.0.0/#${path}`;
  } else {
    window.location.hash = path;
  }
};
