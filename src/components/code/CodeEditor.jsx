/**
 * CodeEditor Component - مكون محرر الأكواد
 * --------------------------------------------------------------
 * Purpose (الغرض): عرض وتعديل الكود المولد من AI مع تمييز الأكواد
 * Features (المميزات):
 * - عرض الكود مع syntax highlighting
 * - إمكانية التعديل
 * - نسخ الكود
 * - تحميل الكود كملف
 * - دعم الثيمات (dark/light)
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-csharp';
import { FiCopy, FiDownload, FiCheck } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

/**
 * CodeEditor Component
 * 
 * @param {string} code - الكود المراد عرضه
 * @param {string} language - لغة البرمجة (js, python, java, etc.)
 * @param {function} onChange - callback عند تعديل الكود
 * @param {boolean} readOnly - للقراءة فقط أم قابل للتعديل
 */
const CodeEditor = ({ 
  code = '', 
  language = 'javascript', 
  onChange = null,
  readOnly = false 
}) => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  /**
   * getLanguageForPrism - تحويل لغة البرمجة إلى معرف Prism
   */
  const getLanguageForPrism = (lang) => {
    const langMap = {
      'react': 'jsx',
      'vue': 'javascript',
      'python': 'python',
      'java': 'java',
      'nodejs': 'javascript',
      'php': 'php',
      'go': 'go',
      'rust': 'rust',
      'unity': 'csharp',
      'auto': 'javascript'
    };
    return langMap[lang] || 'javascript';
  };

  /**
   * handleCopy - نسخ الكود للحافظة
   */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('فشل نسخ الكود:', err);
    }
  };

  /**
   * handleDownload - تحميل الكود كملف
   */
  const handleDownload = () => {
    const extensionMap = {
      'react': 'jsx',
      'vue': 'vue',
      'python': 'py',
      'java': 'java',
      'nodejs': 'js',
      'php': 'php',
      'go': 'go',
      'rust': 'rs',
      'unity': 'cs',
      'auto': 'js'
    };
    
    const extension = extensionMap[language] || 'txt';
    const filename = `code.${extension}`;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const prismLanguage = getLanguageForPrism(language);
  const editorTheme = theme === 'dark' ? 'prism-tomorrow' : 'prism';

  return (
    <div className="w-full">
      {/* Toolbar - شريط الأدوات */}
      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-t-lg px-4 py-2">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {language.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <button
            onClick={handleCopy}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            title="نسخ الكود"
          >
            {copied ? (
              <FiCheck className="w-4 h-4 text-green-600" />
            ) : (
              <FiCopy className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={handleDownload}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            title="تحميل الكود"
          >
            <FiDownload className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor - المحرر */}
      <div className="border border-gray-200 dark:border-gray-700 border-t-0 rounded-b-lg overflow-hidden">
        <Editor
          value={code}
          onValueChange={onChange || (() => {})}
          highlight={(code) => highlight(code, languages[prismLanguage], prismLanguage)}
          padding={16}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            backgroundColor: theme === 'dark' ? '#2d2d2d' : '#ffffff',
            color: theme === 'dark' ? '#f8f8f2' : '#333333',
            minHeight: '300px',
            maxHeight: '600px',
            overflow: 'auto'
          }}
          readOnly={readOnly}
          className={`code-editor ${editorTheme}`}
        />
      </div>
    </div>
  );
};

export default CodeEditor;

