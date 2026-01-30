/**
 * Footer Component - مكون تذييل الصفحة
 * --------------------------------------------------------------
 * Purpose (الغرض): تذييل الصفحة مع معلومات المطور وروابط التواصل
 * Features (المميزات):
 * - معلومات المطور
 * - روابط التواصل الاجتماعي
 * - حقوق النشر
 * - روابط سريعة
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

/**
 * Footer Component
 * 
 * يعرض تذييل الصفحة مع:
 * - معلومات المطور
 * - روابط التواصل الاجتماعي
 * - حقوق النشر
 * - روابط سريعة للصفحات
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section - قسم عن المشروع */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">عن المشروع</h3>
            <p className="text-sm leading-relaxed">
              Y0 AI Code Generator هو منصة ذكية لتوليد الأكواد والتطبيقات باستخدام الذكاء الاصطناعي.
              حوّل أفكارك إلى أكواد برمجية جاهزة في دقائق.
            </p>
          </div>

          {/* Quick Links Section - قسم الروابط السريعة */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-blue-400 transition-colors inline-block"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm hover:text-blue-400 transition-colors inline-block"
                >
                  مشاريعي
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-blue-400 transition-colors inline-block"
                >
                  عن المشروع
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section - قسم التواصل */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">تواصل معنا</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="https://github.com/y0ussefmahmoud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/y0ussefmahmoud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/y0ussefmahmoud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@y0hardware.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section - قسم حقوق النشر */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Y0ussefMahmoud. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

