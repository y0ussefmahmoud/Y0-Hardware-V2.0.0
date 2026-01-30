/**
 * ProjectContext - Context لإدارة المشاريع المولدة
 * --------------------------------------------------------------
 * Purpose (الغرض): إدارة حالة المشاريع (الحفظ، التحميل، التعديل، الحذف)
 * Features (المميزات):
 * - توليد المشاريع باستخدام AI
 * - حفظ المشاريع في localStorage
 * - تحميل المشاريع المحفوظة
 * - تحديث وحذف المشاريع
 * - مشاركة المشاريع
 * 
 * @author Y0ussefMahmoud
 * @version 1.0.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { generateCode, buildPrompt, extractFiles } from '../services/aiService';
import { STORAGE_KEYS } from '../utils/constants';

/**
 * ProjectContext - Context للمشاريع
 */
const ProjectContext = createContext();

/**
 * useProject - Custom Hook للوصول إلى ProjectContext
 * 
 * @returns {object} { projects, currentProject, isGenerating, generateProject, saveProject, ... }
 */
export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject يجب استخدامه داخل ProjectProvider');
  }
  return context;
};

/**
 * ProjectProvider - Provider لإدارة المشاريع
 * 
 * @param {object} props - Props المكون
 * @param {React.ReactNode} props.children - المكونات الفرعية
 */
export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  /**
   * loadProjects - تحميل المشاريع من localStorage
   */
  useEffect(() => {
    try {
      const savedProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (savedProjects) {
        const parsedProjects = JSON.parse(savedProjects);
        setProjects(parsedProjects);
      }
    } catch (error) {
      console.error('خطأ في تحميل المشاريع:', error);
    }
  }, []);

  /**
   * saveProjectsToStorage - حفظ المشاريع في localStorage
   * 
   * @param {Array} projectsToSave - المشاريع المراد حفظها
   */
  const saveProjectsToStorage = (projectsToSave) => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projectsToSave));
    } catch (error) {
      console.error('خطأ في حفظ المشاريع:', error);
    }
  };

  /**
   * generateProject - توليد مشروع جديد باستخدام AI
   * 
   * @param {string} idea - الفكرة البرمجية
   * @param {string} language - لغة البرمجة
   * @param {string} provider - مزود AI
   * @param {string} apiKey - مفتاح API
   * @param {object} options - خيارات إضافية
   * @returns {Promise<object>} المشروع المولد
   */
  const generateProject = async (idea, language, provider, apiKey, options = {}) => {
    setIsGenerating(true);
    
    try {
      // بناء الـ prompt
      const prompt = buildPrompt(idea, language, options);
      
      // توليد الكود
      const code = await generateCode(provider, apiKey, prompt, language, options);
      
      // استخراج الملفات
      const files = extractFiles(code);
      
      // إنشاء المشروع
      const project = {
        id: `project-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: idea.substring(0, 50) + (idea.length > 50 ? '...' : ''),
        idea,
        language,
        provider,
        code: files.length > 0 ? files[0].content : code,
        files: files.length > 0 ? files : [{ name: 'code.txt', content: code }],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        options
      };

      setCurrentProject(project);
      setIsGenerating(false);
      
      return project;
    } catch (error) {
      setIsGenerating(false);
      throw error;
    }
  };

  /**
   * saveProject - حفظ مشروع في localStorage
   * 
   * @param {object} project - المشروع المراد حفظه
   */
  const saveProject = (project) => {
    const updatedProject = {
      ...project,
      updatedAt: new Date().toISOString()
    };

    // التحقق من وجود المشروع في القائمة
    const existingIndex = projects.findIndex(p => p.id === project.id);
    
    let updatedProjects;
    if (existingIndex >= 0) {
      // تحديث مشروع موجود
      updatedProjects = [...projects];
      updatedProjects[existingIndex] = updatedProject;
    } else {
      // إضافة مشروع جديد
      updatedProjects = [...projects, updatedProject];
    }

    setProjects(updatedProjects);
    saveProjectsToStorage(updatedProjects);
    setCurrentProject(updatedProject);
  };

  /**
   * deleteProject - حذف مشروع
   * 
   * @param {string} id - معرف المشروع
   */
  const deleteProject = (id) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    setProjects(updatedProjects);
    saveProjectsToStorage(updatedProjects);
    
    // إذا كان المشروع المحذوف هو الحالي، مسحه
    if (currentProject && currentProject.id === id) {
      setCurrentProject(null);
    }
  };

  /**
   * updateProject - تحديث مشروع موجود
   * 
   * @param {string} id - معرف المشروع
   * @param {object} updates - التحديثات
   */
  const updateProject = (id, updates) => {
    const updatedProjects = projects.map(p => {
      if (p.id === id) {
        return {
          ...p,
          ...updates,
          updatedAt: new Date().toISOString()
        };
      }
      return p;
    });

    setProjects(updatedProjects);
    saveProjectsToStorage(updatedProjects);
    
    // تحديث المشروع الحالي إذا كان هو المحدّث
    if (currentProject && currentProject.id === id) {
      setCurrentProject(updatedProjects.find(p => p.id === id));
    }
  };

  /**
   * loadProject - تحميل مشروع محدد
   * 
   * @param {string} id - معرف المشروع
   */
  const loadProject = (id) => {
    const project = projects.find(p => p.id === id);
    if (project) {
      setCurrentProject(project);
    }
  };

  /**
   * shareProject - مشاركة مشروع (توليد رابط)
   * 
   * @param {string} id - معرف المشروع
   * @returns {string} رابط المشاركة
   */
  const shareProject = (id) => {
    const project = projects.find(p => p.id === id) || currentProject;
    if (!project) {
      throw new Error('المشروع غير موجود');
    }

    // ترميز المشروع في base64
    const encoded = btoa(JSON.stringify(project));
    const shareUrl = `${window.location.origin}${window.location.pathname}#/share/${encoded}`;
    
    // نسخ الرابط للحافظة
    navigator.clipboard.writeText(shareUrl).catch(err => {
      console.error('فشل نسخ الرابط:', err);
    });

    return shareUrl;
  };

  /**
   * clearCurrentProject - مسح المشروع الحالي
   */
  const clearCurrentProject = () => {
    setCurrentProject(null);
  };

  const value = {
    projects,
    currentProject,
    isGenerating,
    generateProject,
    saveProject,
    deleteProject,
    updateProject,
    loadProject,
    shareProject,
    clearCurrentProject
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;

