/**
 * Y0 Hardware v2.0.0 - Main Application Component
 * 
 * This is the root component that sets up the entire application structure:
 * - Theme management (light/dark mode)
 * - Global state management (cart, wishlist, notifications)
 * - Routing configuration
 * - Error boundaries for graceful error handling
 * - Analytics tracking
 * 
 * @author Y0ussefMahmoud
 * @version 2.0.0
 */

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './context/NotificationContext';
import { WishlistProvider } from './context/WishlistContext';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';
import Analytics from './components/common/Analytics';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';

// Styled Components
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

/**
 * Main App Component
 * 
 * Renders the complete application with all providers and routing.
 * The component hierarchy ensures proper context availability:
 * 1. ThemeProvider - Theme and dark mode management
 * 2. CartProvider - Shopping cart state
 * 3. WishlistProvider - Wishlist/favorites state  
 * 4. NotificationProvider - Toast notifications
 * 5. ErrorBoundary - Error handling
 * 6. Router - Navigation and routing
 * 7. Analytics - User behavior tracking
 */
function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <NotificationProvider>
          <ErrorBoundary>
            <GlobalStyles />
            <Router>
              <Analytics />
            <AppContainer>
              <Header />
              <MainContent>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </MainContent>
              <Footer />
            </AppContainer>
            </Router>
          </ErrorBoundary>
          </NotificationProvider>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
