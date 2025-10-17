/**
 * AI Smart Search Component
 * 
 * Advanced search with AI capabilities:
 * - Natural language processing
 * - Intent recognition
 * - Smart filters
 * - Auto-complete with context
 * - Visual search (future)
 * 
 * @version 2.0.0
 */

import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaSearch, 
  FaBrain, 
  FaMagic, 
  FaFilter,
  FaCamera,
  FaMicrophone,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { productsDatabase } from '../../data/products';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px ${props => props.theme?.colors?.primary || '#667eea'}40; }
  50% { box-shadow: 0 0 20px ${props => props.theme?.colors?.primary || '#667eea'}60; }
`;

const SmartSearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background.card};
  border: 2px solid ${({ aiActive, theme }) => 
    aiActive ? theme.colors.secondary : theme.colors.border.primary
  };
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: all ${({ theme }) => theme.transitions.normal};
  overflow: hidden;
  
  ${({ aiActive }) => aiActive && `animation: ${glow} 2s infinite;`}
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;

const AIIndicator = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ active, theme }) => 
    active ? theme.colors.secondary : theme.colors.text.muted
  };
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  
  svg {
    animation: ${({ active }) => active ? 'pulse 1.5s infinite' : 'none'};
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm};
`;

const ActionButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'
  };
  color: ${({ active, theme }) => 
    active ? theme.colors.text.inverse : theme.colors.text.secondary
  };
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SearchButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: 0 ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

const SmartSuggestions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.shadow.medium};
  z-index: 1000;
  max-height: 400px;
  overflow-y: auto;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const SuggestionSection = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h4`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SmartSuggestion = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.hover};
  }
`;

const SuggestionIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
`;

const SuggestionText = styled.div`
  flex: 1;
`;

const SuggestionTitle = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
`;

const SuggestionDesc = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
`;

const AIInsight = styled.div`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.info}10, 
    ${({ theme }) => theme.colors.primary}10
  );
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  border-left: 4px solid ${({ theme }) => theme.colors.info};
`;

const InsightText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const AISmartSearch = ({ onSearch, placeholder = "ابحث بذكاء... جرب 'أريد جهاز ألعاب بميزانية 20000'" }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [aiActive, setAiActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [smartSuggestions, setSmartSuggestions] = useState([]);
  const [aiInsight, setAiInsight] = useState('');
  
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'ar-EG';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setIsListening(false);
        processAIQuery(transcript);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // AI Query Processing
  const processAIQuery = (searchQuery) => {
    const query = searchQuery.toLowerCase();
    setAiActive(true);
    
    // Intent recognition
    let intent = 'general';
    let suggestions = [];
    let insight = '';

    // Gaming PC intent
    if (query.includes('ألعاب') || query.includes('جيمنج') || query.includes('gaming')) {
      intent = 'gaming';
      suggestions = [
        {
          type: 'build',
          title: 'بناء جهاز ألعاب متكامل',
          description: 'معالج + كارت شاشة + ذاكرة',
          icon: <FaRocket />,
          action: () => navigate('/shop?category=pc-parts&gaming=true')
        },
        {
          type: 'gpu',
          title: 'كروت شاشة للألعاب',
          description: 'RTX 4070, RTX 4080, RTX 4090',
          icon: <FaMagic />,
          action: () => navigate('/shop?subcategory=graphics-cards')
        },
        {
          type: 'laptop',
          title: 'لابتوب ألعاب',
          description: 'أجهزة محمولة للألعاب',
          icon: <FaLightbulb />,
          action: () => navigate('/shop?category=laptops&subcategory=gaming')
        }
      ];
      insight = 'تم اكتشاف اهتمامك بالألعاب! إليك أفضل الخيارات المتاحة.';
    }
    
    // Budget intent
    else if (query.match(/\d+/) && (query.includes('ميزانية') || query.includes('جنيه') || query.includes('ج.م'))) {
      intent = 'budget';
      const budget = parseInt(query.match(/\d+/)[0]);
      
      if (budget < 15000) {
        suggestions = [
          {
            type: 'budget',
            title: 'منتجات اقتصادية',
            description: 'أفضل قيمة مقابل السعر',
            icon: <FaFilter />,
            action: () => navigate(`/shop?maxPrice=${budget}`)
          },
          {
            type: 'used',
            title: 'منتجات مستعملة',
            description: 'وفر أكثر مع منتجات مضمونة',
            icon: <FaLightbulb />,
            action: () => navigate('/shop?category=used')
          }
        ];
        insight = `بميزانية ${budget} ج.م، يمكنك الحصول على منتجات ممتازة!`;
      } else if (budget < 30000) {
        suggestions = [
          {
            type: 'mid',
            title: 'منتجات متوسطة المدى',
            description: 'توازن مثالي بين الأداء والسعر',
            icon: <FaRocket />,
            action: () => navigate(`/shop?minPrice=${budget-5000}&maxPrice=${budget}`)
          }
        ];
        insight = `ميزانية ممتازة! يمكنك بناء نظام قوي بـ ${budget} ج.م`;
      } else {
        suggestions = [
          {
            type: 'premium',
            title: 'منتجات عالية الأداء',
            description: 'أحدث التقنيات والأداء الأقوى',
            icon: <FaMagic />,
            action: () => navigate(`/shop?minPrice=${budget-10000}`)
          }
        ];
        insight = `ميزانية رائعة! يمكنك الحصول على أقوى المنتجات المتاحة.`;
      }
    }
    
    // Component-specific intent
    else if (query.includes('معالج') || query.includes('بروسيسور')) {
      intent = 'processor';
      suggestions = [
        {
          type: 'intel',
          title: 'معالجات Intel',
          description: 'Core i5, i7, i9',
          icon: <FaRocket />,
          action: () => navigate('/shop?subcategory=processors&brand=intel')
        },
        {
          type: 'amd',
          title: 'معالجات AMD',
          description: 'Ryzen 5, 7, 9',
          icon: <FaMagic />,
          action: () => navigate('/shop?subcategory=processors&brand=amd')
        }
      ];
      insight = 'المعالج هو قلب الكمبيوتر! اختر حسب استخدامك.';
    }
    
    // Default suggestions
    else {
      suggestions = [
        {
          type: 'popular',
          title: 'المنتجات الشائعة',
          description: 'الأكثر مبيعاً هذا الشهر',
          icon: <FaLightbulb />,
          action: () => navigate('/shop?sort=popular')
        },
        {
          type: 'new',
          title: 'أحدث المنتجات',
          description: 'آخر الإصدارات والتقنيات',
          icon: <FaRocket />,
          action: () => navigate('/shop?filter=new')
        },
        {
          type: 'deals',
          title: 'العروض والخصومات',
          description: 'وفر أكثر مع العروض الحالية',
          icon: <FaFilter />,
          action: () => navigate('/shop?deals=true')
        }
      ];
      insight = 'جرب البحث بطريقة طبيعية مثل "أريد جهاز للألعاب" أو "معالج بميزانية 10000"';
    }

    setSmartSuggestions(suggestions);
    setAiInsight(insight);
    setIsOpen(true);

    // Auto-hide AI active state after processing
    setTimeout(() => setAiActive(false), 2000);
  };

  // Handle query changes
  useEffect(() => {
    if (query.length > 3) {
      processAIQuery(query);
    } else {
      setIsOpen(false);
      setSmartSuggestions([]);
      setAiInsight('');
    }
  }, [query]);

  const handleSearch = () => {
    if (!query.trim()) return;

    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
    }

    setIsOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const startVoiceSearch = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopVoiceSearch = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    suggestion.action();
    setIsOpen(false);
  };

  return (
    <SmartSearchContainer>
      <SearchInputContainer aiActive={aiActive}>
        <AIIndicator active={aiActive}>
          <FaBrain />
          AI
        </AIIndicator>
        
        <SearchInput
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => query.length > 3 && setIsOpen(true)}
        />
        
        <ActionButtons>
          {recognitionRef.current && (
            <ActionButton
              active={isListening}
              onClick={isListening ? stopVoiceSearch : startVoiceSearch}
              title="البحث الصوتي"
            >
              <FaMicrophone />
            </ActionButton>
          )}
          
          <ActionButton title="البحث بالصورة (قريباً)">
            <FaCamera />
          </ActionButton>
        </ActionButtons>
        
        <SearchButton onClick={handleSearch}>
          <FaSearch />
          بحث ذكي
        </SearchButton>
      </SearchInputContainer>

      {isOpen && (smartSuggestions.length > 0 || aiInsight) && (
        <SmartSuggestions>
          {aiInsight && (
            <AIInsight>
              <InsightText>
                <FaBrain />
                {aiInsight}
              </InsightText>
            </AIInsight>
          )}
          
          {smartSuggestions.length > 0 && (
            <SuggestionSection>
              <SectionTitle>
                <FaMagic />
                اقتراحات ذكية
              </SectionTitle>
              
              {smartSuggestions.map((suggestion, index) => (
                <SmartSuggestion
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <SuggestionIcon>
                    {suggestion.icon}
                  </SuggestionIcon>
                  <SuggestionText>
                    <SuggestionTitle>{suggestion.title}</SuggestionTitle>
                    <SuggestionDesc>{suggestion.description}</SuggestionDesc>
                  </SuggestionText>
                </SmartSuggestion>
              ))}
            </SuggestionSection>
          )}
        </SmartSuggestions>
      )}
    </SmartSearchContainer>
  );
};

export default AISmartSearch;
