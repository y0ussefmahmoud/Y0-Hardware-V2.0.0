/**
 * AI Service - خدمة الذكاء الاصطناعي
 * --------------------------------------------------------------
 * Purpose (الغرض): الاتصال بمزودي AI (OpenAI, Claude, Gemini) لتوليد الأكواد
 * Features (المميزات):
 * - دعم متعدد لمزودي AI
 * - بناء prompts احترافية
 * - معالجة الاستجابات
 * - استخراج الكود من الاستجابات
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import { API_ENDPOINTS } from '../utils/constants';

/**
 * AI Providers Enum - تعداد مزودي AI
 */
export const AIProviders = {
  OPENAI: 'openai',
  CLAUDE: 'claude',
  GEMINI: 'gemini'
};

/**
 * generateCode - توليد الكود باستخدام AI
 * 
 * @param {string} provider - مزود AI (openai, claude, gemini)
 * @param {string} apiKey - مفتاح API
 * @param {string} prompt - الـ prompt المخصص
 * @param {string} language - لغة البرمجة
 * @param {object} options - خيارات إضافية (comments, readme, tests)
 * @returns {Promise<string>} الكود المولد
 */
export const generateCode = async (provider, apiKey, prompt, language, options = {}) => {
  try {
    let response;

    switch (provider) {
      case AIProviders.OPENAI:
        response = await callOpenAI(apiKey, prompt);
        break;
      case AIProviders.CLAUDE:
        response = await callClaude(apiKey, prompt);
        break;
      case AIProviders.GEMINI:
        response = await callGemini(apiKey, prompt);
        break;
      default:
        throw new Error('مزود AI غير مدعوم');
    }

    // استخراج الكود من الاستجابة
    const code = parseResponse(response, provider);
    return code;
  } catch (error) {
    console.error('خطأ في توليد الكود:', error);
    throw new Error(error.message || 'فشل توليد الكود. يرجى التحقق من API Key والمحاولة مرة أخرى.');
  }
};

/**
 * callOpenAI - استدعاء OpenAI API
 * 
 * @param {string} apiKey - مفتاح OpenAI API
 * @param {string} prompt - الـ prompt
 * @returns {Promise<object>} استجابة API
 */
const callOpenAI = async (apiKey, prompt) => {
  try {
    const response = await fetch(API_ENDPOINTS.OPENAI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'أنت مساعد برمجي خبير. قم بإنشاء كود برمجي نظيف ومنظم بناءً على الطلب. أضف تعليقات توضيحية عند الحاجة.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 4000
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `خطأ OpenAI: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || '';
  } catch (error) {
    if (error.message.includes('401') || error.message.includes('403')) {
      throw new Error('API Key غير صالح. يرجى التحقق من المفتاح والمحاولة مرة أخرى.');
    }
    if (error.message.includes('429')) {
      throw new Error('تم تجاوز الحد المسموح. يرجى المحاولة لاحقاً.');
    }
    throw error;
  }
};

/**
 * callClaude - استدعاء Anthropic Claude API
 * 
 * @param {string} apiKey - مفتاح Claude API
 * @param {string} prompt - الـ prompt
 * @returns {Promise<object>} استجابة API
 */
const callClaude = async (apiKey, prompt) => {
  try {
    const response = await fetch(API_ENDPOINTS.CLAUDE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-opus-20240229',
        max_tokens: 4000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `خطأ Claude: ${response.status}`);
    }

    const data = await response.json();
    return data.content[0]?.text || '';
  } catch (error) {
    if (error.message.includes('401') || error.message.includes('403')) {
      throw new Error('API Key غير صالح. يرجى التحقق من المفتاح والمحاولة مرة أخرى.');
    }
    if (error.message.includes('429')) {
      throw new Error('تم تجاوز الحد المسموح. يرجى المحاولة لاحقاً.');
    }
    throw error;
  }
};

/**
 * callGemini - استدعاء Google Gemini API
 * 
 * @param {string} apiKey - مفتاح Gemini API
 * @param {string} prompt - الـ prompt
 * @returns {Promise<object>} استجابة API
 */
const callGemini = async (apiKey, prompt) => {
  try {
    const url = `${API_ENDPOINTS.GEMINI}?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `خطأ Gemini: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0]?.content?.parts[0]?.text || '';
  } catch (error) {
    if (error.message.includes('401') || error.message.includes('403')) {
      throw new Error('API Key غير صالح. يرجى التحقق من المفتاح والمحاولة مرة أخرى.');
    }
    if (error.message.includes('429')) {
      throw new Error('تم تجاوز الحد المسموح. يرجى المحاولة لاحقاً.');
    }
    throw error;
  }
};

/**
 * buildPrompt - بناء prompt احترافي من المدخلات
 * 
 * @param {string} idea - الفكرة البرمجية
 * @param {string} language - لغة البرمجة
 * @param {object} options - خيارات إضافية
 * @returns {string} الـ prompt المبنى
 */
export const buildPrompt = (idea, language, options = {}) => {
  const { addComments = true, addReadme = false, addTests = false } = options;

  let prompt = `قم بإنشاء كود برمجي ${language !== 'auto' ? `بلغة ${language}` : 'باللغة المناسبة'} للفكرة التالية:\n\n`;
  prompt += `الفكرة: ${idea}\n\n`;

  // إضافة المتطلبات
  prompt += 'المتطلبات:\n';
  prompt += '- كود نظيف ومنظم\n';
  prompt += '- اتباع أفضل الممارسات البرمجية\n';
  
  if (addComments) {
    prompt += '- إضافة تعليقات توضيحية بالعربية والإنجليزية\n';
  }
  
  if (addReadme) {
    prompt += '- إضافة ملف README.md مع شرح المشروع\n';
  }
  
  if (addTests) {
    prompt += '- إضافة unit tests\n';
  }

  prompt += '\nيرجى إنشاء الكود الكامل جاهز للاستخدام.';

  return prompt;
};

/**
 * parseResponse - استخراج الكود من استجابة AI
 * 
 * @param {string} response - استجابة AI
 * @param {string} provider - مزود AI
 * @returns {string} الكود المستخرج
 */
const parseResponse = (response, provider) => {
  if (!response) {
    return '';
  }

  let code = response;

  // إزالة markdown code blocks
  code = code.replace(/```[\w]*\n?/g, '');
  code = code.replace(/```/g, '');

  // إزالة أي نصوص إضافية قبل الكود
  const codeBlockMatch = code.match(/(?:```[\w]*\n?)?([\s\S]*?)(?:```)?/);
  if (codeBlockMatch) {
    code = codeBlockMatch[1];
  }

  // تنظيف الكود
  code = code.trim();

  return code;
};

/**
 * extractFiles - استخراج ملفات متعددة من الاستجابة
 * 
 * @param {string} response - استجابة AI
 * @returns {Array<{name: string, content: string}>} مصفوفة الملفات
 */
export const extractFiles = (response) => {
  const files = [];
  const filePattern = /(?:^|\n)(?:```|`)(?:[\w]+:)?([^\n]+)\n([\s\S]*?)(?:```|`)(?=\n|$)/g;
  
  let match;
  while ((match = filePattern.exec(response)) !== null) {
    const fileName = match[1].trim();
    const fileContent = match[2].trim();
    
    if (fileName && fileContent) {
      files.push({
        name: fileName,
        content: fileContent
      });
    }
  }

  // إذا لم يتم العثور على ملفات متعددة، إرجاع ملف واحد
  if (files.length === 0 && response.trim()) {
    files.push({
      name: 'code.txt',
      content: response.trim()
    });
  }

  return files;
};

