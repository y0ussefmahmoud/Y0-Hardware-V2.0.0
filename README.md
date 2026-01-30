# Y0 AI Code Generator 🤖

> منصة ذكية لتوليد الأكواد والتطبيقات باستخدام الذكاء الاصطناعي

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://y0ussefmahmoud.github.io/Y0-AI-Code-Generator/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)](https://vitejs.dev/)

## 🚧 Project Status

**Current Phase: Phase 1 - Basic Structure (Completed)**

This project is in active development. The basic React + Vite + Tailwind CSS structure is complete with placeholder pages.

### ✅ Completed:
- ✅ Project setup (React 18.2.0 + Vite 5.0.8 + Tailwind CSS 3.4.0)
- ✅ Basic routing with React Router v6
- ✅ Placeholder pages (Home, Projects, About)
- ✅ Responsive layout foundation
- ✅ Dark mode support (foundation)
- ✅ About page with project information

### 🚧 In Progress (Phase 2 - Core Implementation):
- ⏳ Core components (Header, Footer, CodeEditor, IdeaForm)
- ⏳ AI service integration (OpenAI, Claude, Gemini)
- ⏳ Context providers (Theme, Project management)
- ⏳ Utility functions (ZIP generation, localStorage)
- ⏳ Full page implementations (Home, Projects)
- ⏳ Additional dependencies (jszip, file-saver, prismjs, react-simple-code-editor)

### 📅 Planned (Phase 3 - Enhancements):
- ⏳ UI/UX enhancements and animations
- ⏳ Additional programming languages
- ⏳ Advanced code editor features (Monaco Editor)
- ⏳ User authentication (optional)
- ⏳ Backend for sharing (optional)
- ⏳ Project templates and examples

**🚧 In Progress (Phase 3):**
- ⏳ UI/UX enhancements
- ⏳ Additional programming languages
- ⏳ Performance optimizations

**📅 Planned (Future):**
- ⏳ User authentication (optional)
- ⏳ Backend for sharing (optional)
- ⏳ Advanced code analysis features

## ✨ Planned Features

> **Note:** The following features are planned for Phase 2 and Phase 3 of development. Currently, only the basic project structure is implemented.

### 🎯 Code Generation (Planned - Phase 2)
- **Generate from text ideas** - Write your idea and AI converts it to code
- **Multiple language support** - React, Vue, Python, Java, Node.js, PHP, Go, Rust, Unity
- **Complete projects** - Not just single files, but full project structures

### 🤖 AI Provider Support (Planned - Phase 2)
- **OpenAI** - GPT-4 and GPT-3.5
- **Claude** - From Anthropic
- **Gemini** - From Google

### 🛠️ Development Tools (Planned - Phase 2)
- **Live preview** - View generated code in real-time
- **Advanced code editor** - Edit and improve code directly
- **Download as ZIP** - Download complete project as compressed file
- **Local storage** - Save projects in browser

### 🌐 Additional Features (Planned - Phase 3)
- **Project sharing** - Share your project via unique link
- **Full Arabic interface** - Complete localized experience
- **Responsive design** - Works on all devices (already implemented)
- **Dark mode** - Theme support (foundation implemented)

## 📋 حالة التطوير (Development Status)

### ✅ المرحلة 1: البنية الأساسية (مكتملة)
- ✅ إعداد React + Vite + Tailwind CSS
- ✅ إنشاء البنية الأساسية للمجلدات
- ✅ إعداد Routing والبنية الأساسية
- ✅ صفحات placeholder (Home, Projects, About)
- ✅ صفحة About مع معلومات المشروع

### 🚧 المرحلة 2: الوظائف الرئيسية (قيد التطوير)
- ⏳ مكونات Layout (Header, Footer)
- ⏳ نموذج إدخال الأفكار (IdeaForm)
- ⏳ محرر الأكواد (CodeEditor)
- ⏳ دمج AI APIs (OpenAI, Claude, Gemini)
- ⏳ Context Providers (ThemeContext, ProjectContext)
- ⏳ وظائف التحميل والمشاركة (ZIP Generator)
- ⏳ صفحات كاملة (Home, Projects)

### 📅 المرحلة 3: التحسينات (مخطط لها)
- ⏳ تحسين UI/UX
- ⏳ إضافة المزيد من اللغات
- ⏳ تحسينات الأداء
- ⏳ نظام المستخدمين (اختياري)
- ⏳ Backend للمشاركة (اختياري)

## 🛠️ التقنيات المستخدمة

```json
{
  "Frontend": "React 18.2.0",
  "Router": "React Router v6",
  "Styling": "Tailwind CSS 3.4.0",
  "Build": "Vite 5.0.8",
  "Code Editor": "react-simple-code-editor + Prism.js",
  "ZIP Generation": "JSZip",
  "Icons": "React Icons",
  "Animations": "Framer Motion",
  "Deployment": "GitHub Pages"
}
```

## 🚀 التثبيت والتشغيل

### 1. استنساخ المشروع
```bash
git clone https://github.com/y0ussefmahmoud/Y0-AI-Code-Generator.git
cd Y0-AI-Code-Generator
```

### 2. تثبيت التبعيات
```bash
npm install
```

**ملاحظة:** المشروع يستخدم المكتبات التالية:
- `react-simple-code-editor` - محرر أكواد بسيط
- `prismjs` - تمييز الأكواد
- `jszip` - توليد ملفات ZIP
- `file-saver` - تحميل الملفات

### 3. تشغيل الخادم المحلي
```bash
npm run dev
```

### 4. بناء المشروع للإنتاج
```bash
npm run build
```

## 📖 Current Status

The application is currently in the initial development phase (Phase 1). The basic structure is complete with:
- ✅ Responsive layout with Tailwind CSS
- ✅ Dark mode support (foundation)
- ✅ Routing between pages (Home, Projects, About)
- ✅ About page with project information
- ✅ Placeholder pages for Home and Projects

The main code generation features are planned for Phase 2 of development.

### 🔜 Coming in Phase 2:
1. **AI Provider Selection** - Choose between OpenAI, Claude, or Gemini
2. **API Key Input** - Securely enter your API key
3. **Idea Input Form** - Describe your programming idea
4. **Language Selector** - Choose your preferred programming language
5. **Code Generation** - AI generates code based on your idea
6. **Code Editor** - View and edit generated code with syntax highlighting
7. **Project Management** - Save, load, and manage your projects
8. **Download & Share** - Download projects as ZIP or share via link

### 🚀 Try It Now:
You can run the current version to see the basic structure:
```bash
npm install
npm run dev
```
The app will open at `http://localhost:5173` showing the placeholder pages.

## 📁 Current Project Structure

```
Y0-AI-Code-Generator/
├── public/              # Static files
├── src/
│   ├── pages/          # Application pages
│   │   ├── Home.jsx    # Main page (placeholder)
│   │   ├── Projects.jsx # Projects page (placeholder)
│   │   └── About.jsx   # About page (implemented)
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles with Tailwind
├── package.json
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── README.md
```

### 📋 Planned Structure (Phase 2):
The following directories and files will be added in Phase 2:
- `src/components/` - Reusable UI components (Header, Footer, CodeEditor, IdeaForm)
- `src/services/` - API services (aiService.js for AI provider integration)
- `src/context/` - React Context providers (ThemeContext, ProjectContext)
- `src/utils/` - Utility functions (zipGenerator, constants)
- `src/hooks/` - Custom React hooks (useLocalStorage)

## 🌐 النشر على GitHub Pages

### تلقائياً
```bash
git add .
git commit -m "Update project"
git push origin main
```

### يدوياً
```bash
npm run deploy
```

## 📱 التوافق

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ جميع الأجهزة المحمولة

## 🎯 الأداء

- **Lighthouse Score**: 95+
- **حجم الحزمة**: < 500KB
- **وقت التحميل**: < 3 ثواني

## 🔒 Security and Privacy (Planned)

> **Note:** These security features will be implemented in Phase 2.

### Planned Security Measures:
- **API Key Storage** - Keys will be stored locally in browser (not on server)
- **No Data Collection** - Your code and ideas stay in your browser
- **Secure API Calls** - Direct calls to AI providers (no intermediary)
- **Best Practices** - Guidance on API key management and usage limits

### ⚠️ Important Reminders (for Phase 2):
- Never commit API keys to version control
- Monitor your API usage to avoid unexpected charges
- Each AI provider has different pricing and rate limits

## 🤝 Contributing

We welcome contributions! The project is currently in Phase 1 (basic structure). 

### Current Priority:
Phase 2 implementation - core components and functionality. See the "Project Status" section above for details on what needs to be implemented.

### How to Contribute:
1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Implement your changes with comprehensive Arabic comments
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines:
- Follow the existing code style and patterns
- Use Tailwind CSS for styling
- Include Arabic comments for all major functions and components
- Ensure responsive design (mobile-first)
- Support dark mode using Tailwind's `dark:` variants

## 📝 Notes

- This project is in **active development** (Phase 1 completed, Phase 2 in progress)
- The current version includes only the basic structure and placeholder pages
- Core functionality (AI integration, code generation, project management) is planned for Phase 2
- We welcome suggestions, ideas, and contributions
- To report issues or request features, please open a GitHub Issue
- Check the "Project Status" section above for the latest development progress

---

**🚀 Get Started:** `npm install && npm run dev`

**📋 Current Version:** Phase 1 - Basic Structure

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT

## 👨‍💻 المطور

**Y0ussefMahmoud**
- GitHub: [@y0ussefmahmoud](https://github.com/y0ussefmahmoud)
- Email: info@y0hardware.com

---

**🌐 المعاينة المباشرة**: [y0ussefmahmoud.github.io/Y0-AI-Code-Generator](https://y0ussefmahmoud.github.io/Y0-AI-Code-Generator/)
