/**
 * Home Page - الصفحة الرئيسية
 * --------------------------------------------------------------
 * Purpose (الغرض): واجهة كاملة لتوليد الأكواد باستخدام AI
 * Sections (الأقسام): Hero, IdeaForm, Code Display, Features, How It Works
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IdeaForm from '../components/forms/IdeaForm';
import CodeEditor from '../components/code/CodeEditor';
import { useProject } from '../context/ProjectContext';
import { generateZip } from '../utils/zipGenerator';
import { FiDownload, FiCopy, FiShare2, FiSave, FiCheck } from 'react-icons/fi';

/**
 * Home Component
 * 
 * يعرض الصفحة الرئيسية مع:
 * - Hero Section
 * - IdeaForm
 * - Code Display
 * - Features
 * - How It Works
 */
const Home = () => {
  const { currentProject, generateProject, saveProject, shareProject, isGenerating } = useProject();
  const [copied, setCopied] = useState(false);

  /**
   * handleGenerate - معالجة توليد الكود
   */
  const handleGenerate = async (formData) => {
    try {
      await generateProject(
        formData.idea,
        formData.language,
        formData.provider,
        formData.apiKey,
        formData.options
      );
    } catch (error) {
      alert('خطأ في توليد الكود: ' + error.message);
    }
  };

  /**
   * handleSave - معالجة حفظ المشروع
   */
  const handleSave = () => {
    if (currentProject) {
      saveProject(currentProject);
      alert('تم حفظ المشروع بنجاح!');
    }
  };

  /**
   * handleDownload - معالجة تحميل المشروع كـ ZIP
   */
  const handleDownload = async () => {
    if (currentProject) {
      try {
        await generateZip(currentProject);
      } catch (error) {
        alert('فشل تحميل المشروع: ' + error.message);
      }
    }
  };

  /**
   * handleShare - معالجة مشاركة المشروع
   */
  const handleShare = () => {
    if (currentProject) {
      try {
        shareProject(currentProject.id);
        alert('تم نسخ رابط المشاركة!');
      } catch (error) {
        alert('فشل مشاركة المشروع: ' + error.message);
      }
    }
  };

  /**
   * handleCopy - نسخ الكود للحافظة
   */
  const handleCopy = async () => {
    if (currentProject?.code) {
      try {
        await navigator.clipboard.writeText(currentProject.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        alert('فشل نسخ الكود');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - قسم البطل */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              حوّل أفكارك إلى أكواد برمجية 🚀
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              منصة ذكية لتوليد الأكواد والتطبيقات باستخدام الذكاء الاصطناعي
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-2xl">
              <span>⚛️ React</span>
              <span>💚 Vue</span>
              <span>🐍 Python</span>
              <span>☕ Java</span>
              <span>🟢 Node.js</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - المحتوى الرئيسي */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - IdeaForm - العمود الأيسر */}
          <div>
            <IdeaForm onGenerate={handleGenerate} />
          </div>

          {/* Right Column - Code Display - العمود الأيمن */}
          <div>
            {currentProject ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                {/* Project Info - معلومات المشروع */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {currentProject.name}
                  </h2>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-400">
                    <span>📅 {new Date(currentProject.createdAt).toLocaleDateString('ar-EG')}</span>
                    <span>🔧 {currentProject.language}</span>
                    <span>🤖 {currentProject.provider}</span>
                  </div>
                </div>

                {/* Code Editor - محرر الأكواد */}
                <div className="mb-4">
                  <CodeEditor
                    code={currentProject.code}
                    language={currentProject.language}
                    onChange={(code) => {
                      saveProject({ ...currentProject, code });
                    }}
                  />
                </div>

                {/* Actions - الإجراءات */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleSave}
                    className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
                  >
                    <FiSave className="w-4 h-4" />
                    <span>حفظ المشروع</span>
                  </button>
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    title="نسخ الكود"
                  >
                    {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                    title="تحميل ZIP"
                  >
                    <FiDownload className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleShare}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                    title="مشاركة"
                  >
                    <FiShare2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  ابدأ بإنشاء مشروعك
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  أدخل فكرتك البرمجية في النموذج واختر اللغة و AI Provider
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Features Section - قسم المميزات */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            المميزات الرئيسية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🤖',
                title: 'دعم متعدد لـ AI',
                description: 'OpenAI, Claude, Gemini'
              },
              {
                icon: '🌐',
                title: 'لغات برمجة متنوعة',
                description: 'React, Vue, Python, Java, وغيرها'
              },
              {
                icon: '✏️',
                title: 'محرر أكواد متقدم',
                description: 'تمييز الأكواد وتعديل مباشر'
              },
              {
                icon: '📦',
                title: 'تحميل ومشاركة',
                description: 'حمل ZIP أو شارك المشروع'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works Section - قسم كيفية العمل */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            كيف يعمل؟
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              { step: 1, title: 'اختر AI Provider', description: 'اختر مزود AI وأدخل API Key' },
              { step: 2, title: 'اكتب فكرتك', description: 'صِف الفكرة البرمجية التي تريدها' },
              { step: 3, title: 'اختر اللغة', description: 'اختر لغة البرمجة أو اتركها تلقائية' },
              { step: 4, title: 'اضغط توليد', description: 'انتظر قليلاً وسيتم توليد الكود' },
              { step: 5, title: 'عدل وحمل', description: 'عدل الكود واحفظه أو حمله كـ ZIP' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start mb-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="mr-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
