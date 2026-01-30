/**
 * IdeaForm Component - نموذج إدخال الفكرة البرمجية
 * --------------------------------------------------------------
 * Purpose (الغرض): نموذج لإدخال الفكرة واختيار AI Provider واللغة
 * Features (المميزات):
 * - اختيار AI Provider (OpenAI, Claude, Gemini)
 * - إدخال API Key
 * - إدخال الفكرة البرمجية
 * - اختيار لغة البرمجة
 * - خيارات إضافية (تعليقات، README، tests)
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { FiEye, FiEyeOff, FiExternalLink } from 'react-icons/fi';
import { AI_PROVIDERS, LANGUAGES, STORAGE_KEYS } from '../../utils/constants';
import { useProject } from '../../context/ProjectContext';

/**
 * IdeaForm Component
 * 
 * يعرض نموذج إدخال كامل مع:
 * - اختيار AI Provider
 * - حقل API Key مع إظهار/إخفاء
 * - textarea للفكرة
 * - اختيار اللغة
 * - خيارات إضافية
 * - زر التوليد
 */
const IdeaForm = ({ onGenerate }) => {
  const { isGenerating } = useProject();
  
  // State Management - إدارة الحالة
  const [selectedProvider, setSelectedProvider] = useState('openai');
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [idea, setIdea] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('auto');
  const [addComments, setAddComments] = useState(true);
  const [addReadme, setAddReadme] = useState(true);
  const [addTests, setAddTests] = useState(false);
  const [errors, setErrors] = useState({});

  /**
   * loadSavedApiKey - تحميل API Key المحفوظ من localStorage
   */
  useEffect(() => {
    const savedKeys = JSON.parse(localStorage.getItem(STORAGE_KEYS.API_KEYS) || '{}');
    if (savedKeys[selectedProvider]) {
      setApiKey(savedKeys[selectedProvider]);
    }
  }, [selectedProvider]);

  /**
   * validateForm - التحقق من صحة النموذج
   */
  const validateForm = () => {
    const newErrors = {};

    if (!apiKey.trim()) {
      newErrors.apiKey = 'يجب إدخال API Key';
    }

    if (!idea.trim() || idea.trim().length < 20) {
      newErrors.idea = 'يجب إدخال فكرة برمجية (20 حرف على الأقل)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * handleSubmit - معالجة إرسال النموذج
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // حفظ API Key في localStorage
    const savedKeys = JSON.parse(localStorage.getItem(STORAGE_KEYS.API_KEYS) || '{}');
    savedKeys[selectedProvider] = apiKey;
    localStorage.setItem(STORAGE_KEYS.API_KEYS, JSON.stringify(savedKeys));

    // إعداد الخيارات
    const options = {
      addComments,
      addReadme,
      addTests
    };

    // استدعاء callback التوليد
    if (onGenerate) {
      onGenerate({
        idea: idea.trim(),
        language: selectedLanguage,
        provider: selectedProvider,
        apiKey,
        options
      });
    }
  };

  /**
   * getProviderApiKeyUrl - الحصول على رابط API Key للمزود المحدد
   */
  const getProviderApiKeyUrl = (provider) => {
    const urls = {
      openai: 'https://platform.openai.com/api-keys',
      claude: 'https://console.anthropic.com/settings/keys',
      gemini: 'https://makersuite.google.com/app/apikey'
    };
    return urls[provider] || '#';
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
        {/* AI Provider Selector - اختيار مزود AI */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            اختر مزود الذكاء الاصطناعي
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AI_PROVIDERS.map((provider) => (
              <button
                key={provider.id}
                type="button"
                onClick={() => setSelectedProvider(provider.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedProvider === provider.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <div className="text-2xl mb-2">{provider.icon}</div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {provider.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* API Key Input - حقل API Key */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            API Key
            <a
              href={getProviderApiKeyUrl(selectedProvider)}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              احصل على API Key
              <FiExternalLink className="w-3 h-3 mr-1" />
            </a>
          </label>
          <div className="relative">
            <input
              type={showApiKey ? 'text' : 'password'}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="أدخل API Key الخاص بك"
              className={`w-full px-4 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.apiKey
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
            />
            <button
              type="button"
              onClick={() => setShowApiKey(!showApiKey)}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {showApiKey ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
            </button>
          </div>
          {errors.apiKey && (
            <p className="mt-1 text-sm text-red-600">{errors.apiKey}</p>
          )}
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            ⚠️ يتم حفظ API Key محلياً في متصفحك فقط. لا يتم إرساله لأي خادم خارجي.
          </p>
        </div>

        {/* Idea Textarea - حقل الفكرة */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            فكرتك البرمجية
          </label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="اكتب فكرتك البرمجية هنا... مثال: أريد تطبيق todo list بـ React"
            rows={6}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.idea
                ? 'border-red-500'
                : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none`}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.idea && (
              <p className="text-sm text-red-600">{errors.idea}</p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
              {idea.length} / 20 حرف (الحد الأدنى)
            </p>
          </div>
        </div>

        {/* Language Selector - اختيار اللغة */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            لغة البرمجة
          </label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.icon} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Additional Options - خيارات إضافية */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            خيارات إضافية
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={addComments}
                onChange={(e) => setAddComments(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="mr-2 text-sm text-gray-700 dark:text-gray-300">
                إضافة تعليقات توضيحية
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={addReadme}
                onChange={(e) => setAddReadme(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="mr-2 text-sm text-gray-700 dark:text-gray-300">
                إضافة ملف README
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={addTests}
                onChange={(e) => setAddTests(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="mr-2 text-sm text-gray-700 dark:text-gray-300">
                إضافة unit tests
              </span>
            </label>
          </div>
        </div>

        {/* Submit Button - زر التوليد */}
        <button
          type="submit"
          disabled={isGenerating}
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>جاري التوليد...</span>
            </>
          ) : (
            <>
              <span>🚀</span>
              <span>توليد الكود</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default IdeaForm;

