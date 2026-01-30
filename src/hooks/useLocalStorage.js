/**
 * useLocalStorage Hook - Custom Hook لإدارة localStorage
 * --------------------------------------------------------------
 * Purpose (الغرض): إدارة localStorage مع React state
 * Features (المميزات):
 * - قراءة القيمة من localStorage عند التحميل
 * - حفظ تلقائي عند التغيير
 * - معالجة الأخطاء (JSON parse errors)
 * - دعم القيم الافتراضية
 * - تحديث تلقائي عند تغيير localStorage من tab آخر
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import { useState, useEffect } from 'react';

/**
 * useLocalStorage - Custom Hook لإدارة localStorage
 * 
 * @param {string} key - مفتاح localStorage
 * @param {*} initialValue - القيمة الافتراضية
 * @returns {Array} [storedValue, setValue] - القيمة المخزنة ودالة التحديث
 * 
 * @example
 * const [projects, setProjects] = useLocalStorage('projects', []);
 */
const useLocalStorage = (key, initialValue) => {
  // State لتخزين القيمة
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // محاولة قراءة القيمة من localStorage
      const item = window.localStorage.getItem(key);
      
      // إذا كانت القيمة موجودة، تحليلها وإرجاعها
      if (item) {
        return JSON.parse(item);
      }
      
      // إذا لم تكن موجودة، إرجاع القيمة الافتراضية
      return initialValue;
    } catch (error) {
      // في حالة حدوث خطأ، إرجاع القيمة الافتراضية
      console.error(`خطأ في قراءة ${key} من localStorage:`, error);
      return initialValue;
    }
  });

  /**
   * setValue - دالة لتحديث القيمة
   * 
   * @param {*} value - القيمة الجديدة أو دالة تحديث
   */
  const setValue = (value) => {
    try {
      // السماح للقيمة أن تكون دالة (مثل useState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // حفظ في state
      setStoredValue(valueToStore);
      
      // حفظ في localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // في حالة حدوث خطأ، طباعة رسالة خطأ
      console.error(`خطأ في حفظ ${key} في localStorage:`, error);
    }
  };

  /**
   * useEffect - الاستماع لتغييرات localStorage من tabs أخرى
   */
  useEffect(() => {
    const handleStorageChange = (e) => {
      // التحقق من أن التغيير في نفس المفتاح
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error(`خطأ في تحليل ${key} من storage event:`, error);
        }
      }
    };

    // إضافة مستمع للـ storage event
    window.addEventListener('storage', handleStorageChange);

    // تنظيف المستمع عند إلغاء التثبيت
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
};

export default useLocalStorage;

