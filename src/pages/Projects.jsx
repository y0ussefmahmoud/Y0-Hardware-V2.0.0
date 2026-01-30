/**
 * Projects Page - صفحة المشاريع
 * --------------------------------------------------------------
 * Purpose (الغرض): عرض المشاريع المحفوظة مع إمكانية البحث والفلترة
 * Features (المميزات):
 * - عرض جميع المشاريع المحفوظة
 * - البحث والفلترة
 * - فتح وتعديل وحذف المشاريع
 * - تحميل ومشاركة المشاريع
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiTrash2, FiDownload, FiShare2, FiEdit, FiEye } from 'react-icons/fi';
import { useProject } from '../context/ProjectContext';
import { generateZip } from '../utils/zipGenerator';
import { LANGUAGES, AI_PROVIDERS } from '../utils/constants';

/**
 * Projects Component
 * 
 * يعرض صفحة المشاريع مع:
 * - قائمة المشاريع
 * - البحث والفلترة
 * - أزرار الإجراءات
 */
const Projects = () => {
  const { projects, deleteProject, shareProject, loadProject } = useProject();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [filterProvider, setFilterProvider] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  /**
   * filteredAndSortedProjects - فلترة وترتيب المشاريع
   */
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = [...projects];

    // البحث بالاسم
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.idea.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // فلترة حسب اللغة
    if (filterLanguage !== 'all') {
      filtered = filtered.filter(project => project.language === filterLanguage);
    }

    // فلترة حسب المزود
    if (filterProvider !== 'all') {
      filtered = filtered.filter(project => project.provider === filterProvider);
    }

    // الترتيب
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'name':
          return a.name.localeCompare(b.name, 'ar');
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchQuery, filterLanguage, filterProvider, sortBy]);

  /**
   * handleDelete - معالجة حذف مشروع
   */
  const handleDelete = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      deleteProject(id);
    }
  };

  /**
   * handleDownload - معالجة تحميل مشروع كـ ZIP
   */
  const handleDownload = async (project) => {
    try {
      await generateZip(project);
    } catch (error) {
      alert('فشل تحميل المشروع: ' + error.message);
    }
  };

  /**
   * handleShare - معالجة مشاركة مشروع
   */
  const handleShare = (id) => {
    try {
      const shareUrl = shareProject(id);
      alert('تم نسخ رابط المشاركة!');
    } catch (error) {
      alert('فشل مشاركة المشروع: ' + error.message);
    }
  };

  /**
   * getLanguageIcon - الحصول على أيقونة اللغة
   */
  const getLanguageIcon = (languageId) => {
    const language = LANGUAGES.find(l => l.id === languageId);
    return language?.icon || '📄';
  };

  /**
   * getProviderIcon - الحصول على أيقونة المزود
   */
  const getProviderIcon = (providerId) => {
    const provider = AI_PROVIDERS.find(p => p.id === providerId);
    return provider?.icon || '🤖';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - رأس الصفحة */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              مشاريعي 📁
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {projects.length} مشروع محفوظ
            </p>
          </div>
          <Link
            to="/"
            className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center justify-center"
          >
            مشروع جديد
          </Link>
        </div>

        {/* Filters & Search - البحث والفلترة */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search - البحث */}
            <div className="relative">
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث في المشاريع..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Language Filter - فلترة اللغة */}
            <select
              value={filterLanguage}
              onChange={(e) => setFilterLanguage(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">جميع اللغات</option>
              {LANGUAGES.filter(l => l.id !== 'auto').map(lang => (
                <option key={lang.id} value={lang.id}>
                  {lang.icon} {lang.name}
                </option>
              ))}
            </select>

            {/* Provider Filter - فلترة المزود */}
            <select
              value={filterProvider}
              onChange={(e) => setFilterProvider(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">جميع المزودين</option>
              {AI_PROVIDERS.map(provider => (
                <option key={provider.id} value={provider.id}>
                  {provider.icon} {provider.name}
                </option>
              ))}
            </select>

            {/* Sort - الترتيب */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="newest">الأحدث</option>
              <option value="oldest">الأقدم</option>
              <option value="name">حسب الاسم</option>
            </select>
          </div>
        </div>

        {/* Projects Grid - شبكة المشاريع */}
        {filteredAndSortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProjects.map(project => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {/* Project Header - رأس المشروع */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.idea}
                  </p>
                </div>

                {/* Project Info - معلومات المشروع */}
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4 text-sm">
                  <span className="flex items-center text-gray-600 dark:text-gray-400">
                    {getLanguageIcon(project.language)} {LANGUAGES.find(l => l.id === project.language)?.name || project.language}
                  </span>
                  <span className="flex items-center text-gray-600 dark:text-gray-400">
                    {getProviderIcon(project.provider)}
                  </span>
                </div>

                {/* Code Preview - معاينة الكود */}
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 mb-4">
                  <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-hidden line-clamp-3">
                    {project.code.substring(0, 150)}...
                  </pre>
                </div>

                {/* Date - التاريخ */}
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                  {new Date(project.createdAt).toLocaleDateString('ar-EG')}
                </p>

                {/* Actions - الإجراءات */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => loadProject(project.id)}
                    className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center space-x-1 rtl:space-x-reverse"
                  >
                    <FiEye className="w-4 h-4" />
                    <span>فتح</span>
                  </button>
                  <button
                    onClick={() => handleDownload(project)}
                    className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
                    title="تحميل ZIP"
                  >
                    <FiDownload className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleShare(project.id)}
                    className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
                    title="مشاركة"
                  >
                    <FiShare2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
                    title="حذف"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State - حالة فارغة */
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              لا توجد مشاريع
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {searchQuery || filterLanguage !== 'all' || filterProvider !== 'all'
                ? 'لم يتم العثور على مشاريع تطابق البحث'
                : 'ابدأ بإنشاء مشروعك الأول'}
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              ابدأ مشروعك الأول
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

