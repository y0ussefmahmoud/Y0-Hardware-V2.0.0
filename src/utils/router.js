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

// Create proper links for GitHub Pages
export const createLink = (path) => {
  if (isGitHubPages()) {
    // For GitHub Pages, use hash routing
    return `#${path}`;
  }
  // For local development, use normal paths
  return path;
};

// Navigate programmatically
export const navigateTo = (path) => {
  if (isGitHubPages()) {
    window.location.hash = path;
  } else {
    window.history.pushState({}, '', path);
  }
};
