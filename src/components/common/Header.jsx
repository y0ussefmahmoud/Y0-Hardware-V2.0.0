import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaMicrochip, FaSearch, FaShoppingCart, FaHeart, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import Button from './Button';
import AISmartSearch from '../ai/AISmartSearch';
import { useNavigate } from 'react-router-dom';
import { createLink, navigateTo } from '../../utils/router';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.background.card};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow.light};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.hover};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;


const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 300px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding-right: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.shadow.colored};
    width: 350px;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 250px;
    
    &:focus {
      width: 300px;
    }
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.sm};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.tertiary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.hover};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.text.inverse};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  padding: 2px 6px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.hover};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.hover};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background.card};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow.medium};
  padding: ${({ theme }) => theme.spacing.lg};
  
  &.open {
    display: block;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.hover};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/shop', label: 'المنتجات' },
    { path: '/about', label: 'من نحن' },
    { path: '/contact', label: 'تواصل معنا' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameter
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo as="a" href={createLink('/')}>
          <FaMicrochip />
          Y0 Hardware
        </Logo>

        <Navigation>
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.path}>
                <NavLink 
                  as="a"
                  href={createLink(item.path)}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Navigation>

        <HeaderActions>
          <AISmartSearch placeholder="ابحث بذكاء... جرب 'أريد جهاز ألعاب بميزانية 20000'" />

          <CartButton as="a" href={createLink('/wishlist')}>
            <FaHeart />
            {wishlistItems.length > 0 && <CartCount>{wishlistItems.length}</CartCount>}
          </CartButton>

          <CartButton as="a" href={createLink('/cart')}>
            <FaShoppingCart />
            {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
          </CartButton>

          <ThemeToggle onClick={toggleTheme} title="تبديل المظهر">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>

          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </HeaderActions>
      </HeaderContent>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavList>
          {navItems.map((item) => (
            <li key={item.path}>
              <MobileNavLink 
                as="a"
                href={createLink(item.path)}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            </li>
          ))}
        </MobileNavList>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
