/**
 * Y0 AI Code Generator - المكون الرئيسي للتطبيق
 * --------------------------------------------------------------
 * Purpose (الغرض): إعداد البنية الأساسية للتطبيق بالكامل
 * 
 * البنية:
 * - BrowserRouter: للتنقل بين الصفحات
 * - ThemeProvider: لإدارة الثيم (الوضع الليلي/النهاري) في كل التطبيق
 * - ProjectProvider: لإدارة المشاريع والحالة العامة
 * - Header: شريط التنقل العلوي
 * - Main: المحتوى الرئيسي مع الصفحات
 * - Footer: التذييل السفلي
 * 
 * التخطيط:
 * - flex flex-col min-h-screen: يضمن أن التطبيق يأخذ ارتفاع الشاشة كاملاً
 * - flex-1 على main: يجعل المحتوى يتمدد ويدفع Footer للأسفل
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProjectProvider } from './context/ProjectContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

/**
 * Main App Component - المكون الرئيسي
 * 
 * يعرض التطبيق الكامل مع جميع Providers والتنقل.
 * 
 * التسلسل الهرمي للمكونات يضمن توفر Context بشكل صحيح:
 * 1. ThemeProvider - إدارة الثيم والوضع الليلي/النهاري
 *    يوفر theme state و toggleTheme function لجميع المكونات
 * 2. ProjectProvider - إدارة حالة المشاريع
 *    يوفر projects, currentProject, isGenerating, generateProject, saveProject, etc.
 * 3. BrowserRouter - التنقل والتوجيه بين الصفحات
 * 4. Header - شريط التنقل العلوي مع قائمة التنقل وزر تبديل الثيم
 * 5. Main - المحتوى الرئيسي مع Routes للصفحات
 * 6. Footer - التذييل السفلي مع معلومات المشروع وروابط التواصل
 */
function App() {
  return (
    <BrowserRouter>
      {/* ThemeProvider: يوفر theme state (dark/light) لجميع المكونات */}
      <ThemeProvider>
        {/* ProjectProvider: يوفر project management state (projects, currentProject, isGenerating) لجميع المكونات */}
        <ProjectProvider>
          {/* Container: div رئيسي مع flexbox layout لضمان أن Footer دائماً في الأسفل */}
          <div className="app-container flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header: شريط التنقل العلوي - sticky في الأعلى */}
            <Header />
            
            {/* Main: المحتوى الرئيسي - flex-1 يجعله يتمدد ويدفع Footer للأسفل */}
            <main className="flex-1 container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            
            {/* Footer: التذييل السفلي - دائماً في الأسفل بفضل flex layout */}
            <Footer />
          </div>
        </ProjectProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
