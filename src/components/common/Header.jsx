/**
 * Header Component - شريط التنقل الرئيسي للموقع
 * ------------------------------------------------------------------
 * Purpose (الغرض): Provides persistent navigation with smart search,
 * cart/wishlist indicators, and theme toggle across all pages.
 * Highlights (المميزات): Sticky responsive layout, mobile menu,
 * AI-powered search entry point, and GitHub Pages-friendly links.
 * Usage (الاستخدام): Rendered once inside `App.jsx` to wrap every page.
 */
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

// HeaderContainer: Sticky top navigation bar with elevated shadow for depth
// مكون شريط علوي ثابت مع ظلال لتمييزه أثناء التمرير
const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.background.card};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow.light};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all ${({ theme }) => theme.transitions.normal};
`;

// HeaderContent: Centers header content and manages spacing responsively
// حاوية المحتوى التي تضبط المحاذاة والمسافات حسب حجم الشاشة
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

// Logo: Brand lockup with icon + text and accent hover state
// الشعار يجمع الأيقونة والنص مع تأثير لون عند التحويم
const Logo = styled.a`
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

// Navigation: Desktop navigation that hides on medium/small screens
// شريط الروابط الرئيسي الذي يختفي على الشاشات الصغيرة
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

// NavList: Horizontal list without bullets for nav items
// قائمة أفقية بدون نقاط للعناصر
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  list-style: none;
  margin: 0;
  padding: 0;
`;

// NavItem: Wrapper to allow relative positioned indicators if needed
// غلاف يسمح بوضع مؤشرات relative مستقبلاً
const NavItem = styled.li`
  position: relative;
`;

// NavLink: Styled Link with active + hover states for current route
// رابط ملاحي مع حالات مميزة للمسار الحالي والتحويم
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

// HeaderActions: Cluster action buttons (search, wishlist, cart, theme, menu)
// حاوية أزرار الإجراءات (بحث، مفضلة، سلة، مظهر، قائمة)
const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;


// SearchBox: Wraps the inline search input (hidden on very small screens)
// حاوية مربع البحث الذي يختفي على الشاشات الصغيرة جداً
const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

// SearchInput: Rounded search field that expands on focus for better typing
// حقل بحث دائري يتوسع عند التركيز لتحسين تجربة الكتابة
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

// SearchButton: Icon button inside search input to trigger search
// زر أيقوني داخل حقل البحث لتنفيذ العملية
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

// CartButton: Action button used for wishlist/cart icons with hover highlight
// زر للأيقونات (السلة/المفضلة) مع تمييز عند التحويم
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

// CartCount: Floating badge to display current item counts
// شارة عائمة لعرض عدد العناصر الحالي
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

// ThemeToggle: Button to switch between light/dark modes
// زر تبديل المظهر (فاتح/داكن)
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

// MobileMenuButton: Hamburger/close toggle only visible on medium screens down
// زر القائمة (همبرغر/إغلاق) يظهر فقط على الشاشات المتوسطة فأقل
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

// MobileMenu: Slide-down panel for navigation on mobile devices
// قائمة منزلقة لعرض الروابط على الأجهزة المحمولة
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

// MobileNavList: Vertical list with spacing for touch-friendly links
// قائمة عمودية مع مسافات مناسبة للمس
const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

// MobileNavLink: Full-width tappable links with active highlighting
// روابط بعرض كامل قابلة للنقر مع إبراز للمسار الحالي
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
  // Theme context: pulls current mode + toggler for global styling
  // سياق المظهر: يجلب وضع المظهر الحالي وزر التبديل
  const { isDarkMode, toggleTheme } = useTheme();
  // Cart context: provides aggregated cart count for the badge
  // سياق السلة: يوفر إجمالي العناصر لعرضه في الشارة
  const { totalItems } = useCart();
  // Wishlist context: supplies wishlist items for badge count
  // سياق المفضلة: يقدم العناصر الحالية لحساب الشارة
  const { items: wishlistItems } = useWishlist();
  // isMobileMenuOpen: Tracks the visibility of the collapsible mobile nav
  // حالة فتح/إغلاق قائمة الهاتف المحمول
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // searchQuery: Stores the AI search text entered by the user
  // نص البحث الذي يدخله المستخدم
  const [searchQuery, setSearchQuery] = useState('');
  // location: Current router location to determine the active link
  // المسار الحالي لمعرفة الرابط النشط
  const location = useLocation();
  const navigate = useNavigate();

  // navItems: Declarative structure for navigation links + labels
  // مصفوفة الروابط: تحدد المسارات وعناوينها بالعربية
  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/shop', label: 'المنتجات' },
    { path: '/about', label: 'من نحن' },
    { path: '/contact', label: 'تواصل معنا' },
  ];

  /**
   * handleSearch - ينفذ البحث الذكي
   * EN: Navigates to the shop page with the entered query while preventing
   * default form submission to avoid page reloads.
   * AR: ينتقل إلى صفحة المتجر مع تضمين نص البحث في الـ query بدون إعادة تحميل الصفحة.
   */
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Use navigate for client-side routing and keep GitHub Pages compatible links
      // نستخدم navigate للتوجيه الداخلي مع الحفاظ على توافق روابط GitHub Pages
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  /**
   * handleKeyPress - يدعم تنفيذ البحث عند الضغط على Enter
   * EN: Triggers the search flow when the user presses Enter inside the input.
   * AR: يشغّل عملية البحث تلقائياً عند الضغط على زر الإدخال.
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  /**
   * toggleMobileMenu - تبديل حالة قائمة الهاتف
   * EN: Opens or closes the slide-down mobile navigation for small screens.
   * AR: يفتح أو يغلق قائمة التنقل المنسدلة على الهواتف.
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        {/* createLink ensures correct base path for GitHub Pages deployments */}
        {/* createLink يضمن توافق الروابط مع GitHub Pages */}
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
            {/* Badge only renders when wishlist contains items */}
            {/* تظهر الشارة فقط عند وجود عناصر في المفضلة */}
            {wishlistItems.length > 0 && <CartCount>{wishlistItems.length}</CartCount>}
          </CartButton>

          <CartButton as="a" href={createLink('/cart')}>
            <FaShoppingCart />
            {/* Same conditional rendering for cart quantity */}
            {/* نفس منطق الإظهار الشرطي لعدد عناصر السلة */}
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
