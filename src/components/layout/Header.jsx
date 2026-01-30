/**
 * Header Component - مكون رأس الصفحة
 * --------------------------------------------------------------
 * Purpose (الغرض): شريط التنقل الرئيسي للتطبيق مع دعم الوضع الليلي/النهاري
 * Features (المميزات):
 * - شعار المشروع
 * - قائمة تنقل (الرئيسية، مشاريعي، عن المشروع)
 * - زر تبديل الوضع الليلي/النهاري
 * - تصميم متجاوب مع hamburger menu للموبايل
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

/**
 * Header Component
 * 
 * يعرض شريط التنقل الرئيسي مع:
 * - شعار المشروع (Y0 AI Code Generator 🤖)
 * - روابط التنقل مع active state
 * - زر تبديل الثيم
 * - قائمة متجاوبة للموبايل
 */
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * toggleMobileMenu - تبديل حالة قائمة الموبايل
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * closeMobileMenu - إغلاق قائمة الموبايل
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - قسم الشعار */}
          <div className="flex items-center">
            <NavLink 
              to="/" 
              className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={closeMobileMenu}
            >
              <span>🤖</span>
              <span>Y0 AI Code Generator</span>
            </NavLink>
          </div>

          {/* Desktop Navigation - التنقل على سطح المكتب */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
            >
              الرئيسية
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
            >
              مشاريعي
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
            >
              عن المشروع
            </NavLink>

            {/* Theme Toggle Button - زر تبديل الثيم */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="تبديل الوضع الليلي/النهاري"
            >
              {theme === 'dark' ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button - زر قائمة الموبايل */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="تبديل الوضع الليلي/النهاري"
            >
              {theme === 'dark' ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="فتح/إغلاق القائمة"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - قائمة التنقل للموبايل */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`
                }
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="/projects"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`
                }
              >
                مشاريعي
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`
                }
              >
                عن المشروع
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

