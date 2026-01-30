/**
 * ThemeContext - Context لإدارة الثيم (الوضع الليلي/النهاري)
 * --------------------------------------------------------------
 * Purpose (الغرض): إدارة حالة الثيم في التطبيق مع حفظ التفضيلات
 * Features (المميزات):
 * - تبديل بين light/dark mode
 * - حفظ التفضيل في localStorage
 * - الاستماع لتفضيلات النظام
 * - تطبيق الثيم على Tailwind CSS
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import React, { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/constants';

/**
 * ThemeContext - Context للثيم
 */
const ThemeContext = createContext();

/**
 * useTheme - Custom Hook للوصول إلى ThemeContext
 * 
 * @returns {object} { theme, toggleTheme, setTheme }
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme يجب استخدامه داخل ThemeProvider');
  }
  return context;
};

/**
 * ThemeProvider - Provider لإدارة الثيم
 * 
 * يستخدم useLocalStorage hook لحفظ تفضيلات الثيم في localStorage
 * ويطبق الثيم على document.documentElement لإضافة/إزالة class 'dark'
 * 
 * @param {object} props - Props المكون
 * @param {React.ReactNode} props.children - المكونات الفرعية
 */
export const ThemeProvider = ({ children }) => {
  // قراءة تفضيلات النظام للحصول على القيمة الافتراضية
  // useLocalStorage سيتحقق من localStorage أولاً، وإذا لم يجد قيمة سيستخدم هذه القيمة
  const getInitialTheme = () => {
    // قراءة تفضيلات النظام
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  };

  // استخدام useLocalStorage hook لحفظ وإدارة تفضيلات الثيم
  // إذا كان هناك ثيم محفوظ في localStorage، سيستخدمه
  // إذا لم يكن هناك ثيم محفوظ، سيستخدم القيمة الافتراضية من getInitialTheme()
  const [theme, setThemeState] = useLocalStorage(STORAGE_KEYS.THEME, getInitialTheme());

  /**
   * setTheme - تعيين ثيم محدد
   * 
   * يحدث الثيم ويطبق التغيير على HTML element
   * useLocalStorage يقوم بحفظ التفضيل تلقائياً
   * 
   * @param {string} newTheme - الثيم الجديد ('light' أو 'dark')
   */
  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  /**
   * toggleTheme - تبديل بين light/dark
   */
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  /**
   * applyTheme - تطبيق الثيم على HTML element
   * 
   * @param {string} themeToApply - الثيم المراد تطبيقه
   */
  const applyTheme = (themeToApply) => {
    const root = document.documentElement;
    
    if (themeToApply === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  /**
   * useEffect - تطبيق الثيم عند التحميل والتغيير
   */
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  /**
   * useEffect - الاستماع لتغييرات تفضيلات النظام
   * يطبق تفضيلات النظام فقط إذا لم يكن هناك ثيم محفوظ في localStorage
   */
  useEffect(() => {
    // التحقق من وجود ثيم محفوظ بشكل صريح
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    
    // إذا لم يكن هناك ثيم محفوظ بشكل صريح، الاستماع لتغييرات النظام
    if (!savedTheme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e) => {
        // التحقق مرة أخرى من عدم وجود ثيم محفوظ قبل التطبيق
        if (!localStorage.getItem(STORAGE_KEYS.THEME)) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // تشغيل مرة واحدة فقط عند التحميل

  const value = {
    theme,
    toggleTheme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
