/**
 * ZIP Generator - مولد ملفات ZIP
 * --------------------------------------------------------------
 * Purpose (الغرض): توليد ملفات ZIP من المشاريع المولدة
 * Features (المميزات):
 * - إنشاء ملف ZIP من المشروع
 * - إضافة ملفات المشروع
 * - إضافة README.md تلقائياً
 * - إضافة package.json للمشاريع JavaScript
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import JSZip from 'jszip';
import { saveAs } from 'file-saver';

/**
 * generateZip - توليد ملف ZIP من المشروع
 * 
 * @param {object} project - المشروع المراد تحويله لـ ZIP
 * @returns {Promise<void>}
 */
export const generateZip = async (project) => {
  try {
    const zip = new JSZip();

    // إضافة ملفات المشروع
    if (project.files && project.files.length > 0) {
      project.files.forEach(file => {
        zip.file(file.name, file.content);
      });
    } else if (project.code) {
      // إذا لم تكن هناك ملفات متعددة، إضافة الكود كملف واحد
      const extension = getFileExtension(project.language);
      zip.file(`code.${extension}`, project.code);
    }

    // إضافة README.md
    const readmeContent = generateReadme(project);
    zip.file('README.md', readmeContent);

    // إضافة package.json للمشاريع JavaScript
    if (isJavaScriptProject(project.language)) {
      const packageJson = generatePackageJson(project);
      zip.file('package.json', JSON.stringify(packageJson, null, 2));
    }

    // توليد ملف ZIP
    const blob = await zip.generateAsync({ type: 'blob' });
    
    // تحميل الملف
    const filename = `${sanitizeFilename(project.name)}.zip`;
    saveAs(blob, filename);
  } catch (error) {
    console.error('خطأ في توليد ZIP:', error);
    throw new Error('فشل توليد ملف ZIP. يرجى المحاولة مرة أخرى.');
  }
};

/**
 * createProjectStructure - إنشاء بنية مشروع صحيحة
 * 
 * @param {Array} files - مصفوفة الملفات
 * @param {string} language - لغة البرمجة
 * @returns {Array} الملفات المنظمة
 */
export const createProjectStructure = (files, language) => {
  const organizedFiles = [];

  files.forEach(file => {
    // تحديد مسار الملف حسب نوعه
    let filePath = file.name;

    // تنظيم ملفات React
    if (language === 'react') {
      if (file.name.endsWith('.jsx') || file.name.endsWith('.js')) {
        filePath = `src/${file.name}`;
      } else if (file.name.endsWith('.css')) {
        filePath = `src/styles/${file.name}`;
      }
    }

    // تنظيم ملفات Vue
    if (language === 'vue') {
      if (file.name.endsWith('.vue')) {
        filePath = `src/components/${file.name}`;
      }
    }

    organizedFiles.push({
      name: filePath,
      content: file.content
    });
  });

  return organizedFiles;
};

/**
 * generateReadme - توليد README.md تلقائياً
 * 
 * @param {object} project - المشروع
 * @returns {string} محتوى README.md
 */
const generateReadme = (project) => {
  const languageNames = {
    react: 'React',
    vue: 'Vue.js',
    python: 'Python',
    java: 'Java',
    nodejs: 'Node.js',
    php: 'PHP',
    go: 'Go',
    rust: 'Rust',
    unity: 'Unity (C#)',
    auto: 'Auto-detected'
  };

  const languageName = languageNames[project.language] || project.language;

  let readme = `# ${project.name}\n\n`;
  readme += `## 📝 الوصف\n\n`;
  readme += `${project.idea}\n\n`;
  readme += `## 🛠️ التقنيات المستخدمة\n\n`;
  readme += `- **اللغة**: ${languageName}\n`;
  readme += `- **مزود AI**: ${project.provider}\n\n`;
  readme += `## 📅 تاريخ الإنشاء\n\n`;
  readme += `${new Date(project.createdAt).toLocaleDateString('ar-EG')}\n\n`;

  if (project.options?.addReadme) {
    readme += `## 🚀 التشغيل\n\n`;
    readme += `\`\`\`bash\n`;
    
    if (isJavaScriptProject(project.language)) {
      readme += `npm install\n`;
      readme += `npm start\n`;
    } else if (project.language === 'python') {
      readme += `python main.py\n`;
    } else if (project.language === 'java') {
      readme += `javac *.java\n`;
      readme += `java Main\n`;
    }
    
    readme += `\`\`\`\n\n`;
  }

  readme += `---\n\n`;
  readme += `*تم إنشاء هذا المشروع باستخدام Y0 AI Code Generator*\n`;

  return readme;
};

/**
 * generatePackageJson - توليد package.json للمشاريع JavaScript
 * 
 * @param {object} project - المشروع
 * @returns {object} محتوى package.json
 */
const generatePackageJson = (project) => {
  const basePackage = {
    name: sanitizeFilename(project.name).toLowerCase().replace(/\s+/g, '-'),
    version: '1.0.0',
    description: project.idea,
    main: 'index.js',
    scripts: {
      start: 'node index.js'
    },
    keywords: ['ai-generated', 'code-generator'],
    author: '',
    license: 'MIT'
  };

  // إضافة dependencies حسب اللغة
  if (project.language === 'react') {
    basePackage.dependencies = {
      'react': '^18.2.0',
      'react-dom': '^18.2.0'
    };
    basePackage.scripts.start = 'react-scripts start';
    basePackage.devDependencies = {
      'react-scripts': '5.0.1'
    };
  } else if (project.language === 'vue') {
    basePackage.dependencies = {
      'vue': '^3.3.0'
    };
  } else if (project.language === 'nodejs') {
    basePackage.dependencies = {};
  }

  return basePackage;
};

/**
 * getFileExtension - الحصول على امتداد الملف حسب اللغة
 * 
 * @param {string} language - لغة البرمجة
 * @returns {string} امتداد الملف
 */
const getFileExtension = (language) => {
  const extensions = {
    react: 'jsx',
    vue: 'vue',
    python: 'py',
    java: 'java',
    nodejs: 'js',
    php: 'php',
    go: 'go',
    rust: 'rs',
    unity: 'cs',
    auto: 'txt'
  };
  return extensions[language] || 'txt';
};

/**
 * isJavaScriptProject - التحقق من كون المشروع JavaScript
 * 
 * @param {string} language - لغة البرمجة
 * @returns {boolean}
 */
const isJavaScriptProject = (language) => {
  return ['react', 'vue', 'nodejs'].includes(language);
};

/**
 * sanitizeFilename - تنظيف اسم الملف
 * 
 * @param {string} filename - اسم الملف
 * @returns {string} اسم الملف المنظف
 */
const sanitizeFilename = (filename) => {
  return filename
    .replace(/[^a-z0-9]/gi, '_')
    .toLowerCase()
    .substring(0, 50);
};

