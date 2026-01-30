/**
 * Constants - الثوابت المستخدمة في التطبيق
 * --------------------------------------------------------------
 * Purpose (الغرض): تعريف جميع الثوابت المستخدمة في التطبيق
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

/**
 * AI Providers - مزودو الذكاء الاصطناعي
 */
export const AI_PROVIDERS = [
  { 
    id: 'openai', 
    name: 'OpenAI (GPT-4)', 
    icon: '🤖', 
    apiUrl: 'https://api.openai.com/v1/chat/completions' 
  },
  { 
    id: 'claude', 
    name: 'Anthropic Claude', 
    icon: '🧠', 
    apiUrl: 'https://api.anthropic.com/v1/messages' 
  },
  { 
    id: 'gemini', 
    name: 'Google Gemini', 
    icon: '✨', 
    apiUrl: 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent' 
  }
];

/**
 * Programming Languages - لغات البرمجة المدعومة
 */
export const LANGUAGES = [
  { id: 'auto', name: 'تلقائي', icon: '🎯', extension: 'txt' },
  { id: 'react', name: 'React', icon: '⚛️', extension: 'jsx' },
  { id: 'vue', name: 'Vue.js', icon: '💚', extension: 'vue' },
  { id: 'python', name: 'Python', icon: '🐍', extension: 'py' },
  { id: 'java', name: 'Java', icon: '☕', extension: 'java' },
  { id: 'nodejs', name: 'Node.js', icon: '🟢', extension: 'js' },
  { id: 'php', name: 'PHP', icon: '🐘', extension: 'php' },
  { id: 'go', name: 'Go', icon: '🔵', extension: 'go' },
  { id: 'rust', name: 'Rust', icon: '🦀', extension: 'rs' },
  { id: 'unity', name: 'Unity (C#)', icon: '🎮', extension: 'cs' }
];

/**
 * API Endpoints - نقاط نهاية APIs
 */
export const API_ENDPOINTS = {
  OPENAI: 'https://api.openai.com/v1/chat/completions',
  CLAUDE: 'https://api.anthropic.com/v1/messages',
  GEMINI: 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent'
};

/**
 * LocalStorage Keys - مفاتيح localStorage
 */
export const STORAGE_KEYS = {
  PROJECTS: 'y0_ai_projects',
  API_KEYS: 'y0_ai_api_keys',
  THEME: 'y0_ai_theme',
  SETTINGS: 'y0_ai_settings'
};

/**
 * Default Settings - الإعدادات الافتراضية
 */
export const DEFAULT_SETTINGS = {
  provider: 'openai',
  language: 'auto',
  addComments: true,
  addReadme: true,
  addTests: false
};

