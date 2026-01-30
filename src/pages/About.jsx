/**
 * About Page - صفحة عن المشروع
 * --------------------------------------------------------------
 * Purpose (الغرض): معلومات عن المشروع والتقنيات المستخدمة
 * Sections (الأقسام): Hero, Description, Technologies, Features, Developer, API Providers, FAQ
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiExternalLink } from 'react-icons/fi';

/**
 * About Component
 * 
 * يعرض صفحة "عن المشروع" مع:
 * - وصف المشروع
 * - التقنيات المستخدمة
 * - المميزات
 * - معلومات المطور
 * - معلومات API Providers
 * - أسئلة شائعة
 */
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - قسم البطل */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            عن Y0 AI Code Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            منصة ذكية لتوليد الأكواد والتطبيقات باستخدام الذكاء الاصطناعي
          </p>
        </section>

        {/* Project Description - وصف المشروع */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ما هو المشروع؟
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Y0 AI Code Generator هو تطبيق ويب متقدم يسمح للمطورين بتحويل أفكارهم البرمجية إلى أكواد جاهزة
            باستخدام قوة الذكاء الاصطناعي. بدلاً من قضاء ساعات في كتابة الكود من الصفر، يمكنك الآن
            وصف فكرتك والحصول على كود برمجي كامل ومنظم في دقائق.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            الأهداف والرؤية
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>تسريع عملية تطوير البرمجيات</li>
            <li>جعل البرمجة أكثر سهولة للمبتدئين</li>
            <li>توفير الوقت والجهد للمطورين المحترفين</li>
            <li>دعم متعدد للغات البرمجة ومزودي AI</li>
          </ul>
        </section>

        {/* Technologies Section - قسم التقنيات */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            التقنيات المستخدمة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'React 18.2.0', icon: '⚛️', description: 'مكتبة JavaScript لبناء واجهات المستخدم' },
              { name: 'Vite 5.0.8', icon: '⚡', description: 'أداة بناء سريعة وحديثة' },
              { name: 'Tailwind CSS 3.4.0', icon: '🎨', description: 'إطار عمل CSS للتصميم السريع' },
              { name: 'React Router v6', icon: '🛣️', description: 'مكتبة التوجيه للصفحات' },
              { name: 'OpenAI API', icon: '🤖', description: 'API لتوليد الأكواد باستخدام GPT-4' },
              { name: 'Claude API', icon: '🧠', description: 'API من Anthropic لتوليد الأكواد' },
              { name: 'Gemini API', icon: '✨', description: 'API من Google لتوليد الأكواد' },
              { name: 'Prism.js', icon: '🌈', description: 'مكتبة تمييز الأكواد' },
              { name: 'JSZip', icon: '📦', description: 'مكتبة توليد ملفات ZIP' }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section - قسم المميزات */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            المميزات الرئيسية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'دعم متعدد لمزودي AI (OpenAI, Claude, Gemini)',
              'دعم 10+ لغة برمجة',
              'محرر أكواد متقدم مع تمييز الأكواد',
              'حفظ المشاريع محلياً',
              'تحميل المشاريع كملفات ZIP',
              'مشاركة المشاريع مع الآخرين',
              'واجهة مستخدم جميلة ومتجاوبة',
              'دعم الوضع الليلي/النهاري',
              'دعم كامل للغة العربية'
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-400">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Developer Section - قسم المطور */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            المطور
          </h2>
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
              ي
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Y0ussefMahmoud
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              مطور برمجيات متخصص في تطوير تطبيقات الويب والذكاء الاصطناعي
            </p>
            <div className="flex justify-center space-x-4 rtl:space-x-reverse">
              <a
                href="https://github.com/y0ussefmahmoud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/y0ussefmahmoud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://twitter.com/y0ussefmahmoud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:info@y0hardware.com"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </section>

        {/* API Providers Section - قسم مزودي API */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            مزودو API المدعومون
          </h2>
          <div className="space-y-6">
            {[
              {
                name: 'OpenAI',
                description: 'مزود AI قوي مع GPT-4 و GPT-3.5',
                link: 'https://platform.openai.com/api-keys',
                features: ['GPT-4', 'GPT-3.5-turbo', 'أداء عالي']
              },
              {
                name: 'Anthropic Claude',
                description: 'مزود AI متقدم من Anthropic',
                link: 'https://console.anthropic.com/settings/keys',
                features: ['Claude 3 Opus', 'أمان عالي', 'أداء ممتاز']
              },
              {
                name: 'Google Gemini',
                description: 'مزود AI من Google',
                link: 'https://makersuite.google.com/app/apikey',
                features: ['Gemini Pro', 'مجاني', 'سهل الاستخدام']
              }
            ].map((provider, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {provider.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {provider.description}
                    </p>
                  </div>
                  <a
                    href={provider.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    احصل على API Key
                    <FiExternalLink className="w-4 h-4 mr-1" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {provider.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section - قسم الأسئلة الشائعة */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            أسئلة شائعة
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'كيف أحصل على API Key؟',
                answer: 'يمكنك الحصول على API Key من الموقع الرسمي لكل مزود. انقر على "احصل على API Key" في قسم مزودي API أعلاه.'
              },
              {
                question: 'هل البيانات آمنة؟',
                answer: 'نعم، جميع البيانات (بما في ذلك API Keys) تُحفظ محلياً في متصفحك فقط. لا يتم إرسال أي بيانات لخوادم خارجية.'
              },
              {
                question: 'ما هي اللغات المدعومة؟',
                answer: 'نحن ندعم React, Vue, Python, Java, Node.js, PHP, Go, Rust, Unity (C#)، ويمكنك اختيار "تلقائي" لاختيار AI اللغة المناسبة.'
              },
              {
                question: 'هل المشروع مجاني؟',
                answer: 'نعم، المشروع مجاني تماماً. لكن استخدام APIs يتطلب API Keys من المزودين (بعضها مجاني وبعضها مدفوع).'
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
