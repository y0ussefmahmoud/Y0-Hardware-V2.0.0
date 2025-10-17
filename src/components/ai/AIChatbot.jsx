/**
 * AI Chatbot Component
 * 
 * Intelligent chatbot that helps users with:
 * - Product recommendations
 * - Technical support
 * - PC building advice
 * - Price comparisons
 * - Troubleshooting
 * 
 * @version 2.0.0
 */

import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaRobot, 
  FaPaperPlane, 
  FaTimes, 
  FaUser, 
  FaMicrophone,
  FaMicrophoneSlash,
  FaVolumeUp,
  FaLightbulb
} from 'react-icons/fa';
import { productsDatabase } from '../../data/products';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const typing = keyframes`
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
`;

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatbotButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary}
  );
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.shadow.medium};
  transition: all ${({ theme }) => theme.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px ${({ theme }) => theme.colors.shadow.heavy};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const ChatWindow = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0 10px 40px ${({ theme }) => theme.colors.shadow.heavy};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideUp} 0.3s ease-out;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  
  @media (max-width: 768px) {
    width: 90vw;
    height: 70vh;
    bottom: 80px;
    right: 5vw;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary}
  );
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BotInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const BotAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const BotName = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
`;

const BotStatus = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  opacity: 0.9;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.secondary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.primary};
    border-radius: 3px;
  }
`;

const Message = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  ${({ isUser }) => isUser && 'flex-direction: row-reverse;'}
`;

const MessageAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ isUser, theme }) => 
    isUser ? theme.colors.primary : theme.colors.secondary
  };
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
`;

const MessageBubble = styled.div`
  max-width: 70%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ isUser, theme }) => 
    isUser 
      ? theme.colors.primary 
      : theme.colors.background.secondary
  };
  color: ${({ isUser, theme }) => 
    isUser 
      ? theme.colors.text.inverse 
      : theme.colors.text.primary
  };
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  line-height: 1.4;
  animation: ${slideUp} 0.3s ease-out;
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  
  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.text.secondary};
    animation: ${typing} 1.4s infinite;
    
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
`;

const InputContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const MessageInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.background.secondary
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

const QuickActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const QuickActionButton = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
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
        setInputValue(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // Initial welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          id: 1,
          text: 'مرحباً! أنا مساعدك الذكي في Y0 Hardware 🤖\n\nيمكنني مساعدتك في:\n• اختيار المنتجات المناسبة\n• بناء جهاز كمبيوتر\n• مقارنة الأسعار\n• الدعم التقني\n\nكيف يمكنني مساعدتك اليوم؟',
          isUser: false,
          timestamp: new Date(),
          quickActions: [
            'أريد بناء جهاز ألعاب',
            'ما أفضل معالج؟',
            'مقارنة كروت الشاشة',
            'مساعدة في الاختيار'
          ]
        }]);
      }, 500);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom when new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // AI Response Generator
  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Gaming PC recommendations
    if (message.includes('ألعاب') || message.includes('جيمنج') || message.includes('gaming')) {
      return {
        text: '🎮 ممتاز! لبناء جهاز ألعاب قوي أنصحك بـ:\n\n• معالج: Intel i7 أو AMD Ryzen 7\n• كارت شاشة: RTX 4070 أو أعلى\n• ذاكرة عشوائية: 16GB DDR4\n• قرص صلب: SSD 1TB\n\nما هي ميزانيتك المتاحة؟',
        quickActions: ['أقل من 30,000 ج.م', '30,000 - 50,000 ج.م', 'أكثر من 50,000 ج.م']
      };
    }
    
    // Processor recommendations
    if (message.includes('معالج') || message.includes('بروسيسور') || message.includes('cpu')) {
      const processors = productsDatabase.filter(p => p.subcategory === 'processors');
      const topProcessor = processors.sort((a, b) => b.rating - a.rating)[0];
      
      return {
        text: `💻 أفضل معالج حالياً هو ${topProcessor?.name || 'Intel Core i9'}\n\nالمعالجات المتاحة:\n• للألعاب: Intel i7 / AMD Ryzen 7\n• للعمل: Intel i5 / AMD Ryzen 5\n• للأداء العالي: Intel i9 / AMD Ryzen 9\n\nما هو استخدامك الأساسي؟`,
        quickActions: ['ألعاب', 'عمل ومكتب', 'تصميم ومونتاج', 'برمجة']
      };
    }
    
    // Graphics card comparison
    if (message.includes('كارت شاشة') || message.includes('جرافيك') || message.includes('gpu')) {
      return {
        text: '🎯 مقارنة كروت الشاشة:\n\n• RTX 4090: الأقوى للألعاب 4K\n• RTX 4080: ممتاز للألعاب 1440p\n• RTX 4070: جيد للألعاب 1080p\n• RTX 3060: اقتصادي للألعاب\n\nما هي دقة الشاشة التي تستخدمها؟',
        quickActions: ['1080p', '1440p', '4K', 'غير متأكد']
      };
    }
    
    // Budget recommendations
    if (message.includes('30000') || message.includes('30,000')) {
      return {
        text: '💰 بميزانية 30,000 ج.م يمكنك بناء جهاز ممتاز:\n\n• معالج: AMD Ryzen 5 5600X\n• كارت شاشة: RTX 3060\n• ذاكرة: 16GB DDR4\n• لوحة أم: B450M\n• مزود طاقة: 650W\n\nهل تريد رؤية المنتجات المتاحة؟',
        quickActions: ['نعم، أرني المنتجات', 'أريد بديل أرخص', 'أريد ترقية المواصفات']
      };
    }
    
    // Technical support
    if (message.includes('مشكلة') || message.includes('عطل') || message.includes('لا يعمل')) {
      return {
        text: '🔧 سأساعدك في حل المشكلة!\n\nما نوع المشكلة التي تواجهها؟',
        quickActions: ['الجهاز لا يشتغل', 'بطء في الأداء', 'مشكلة في الشاشة', 'مشكلة صوت']
      };
    }
    
    // Price inquiries
    if (message.includes('سعر') || message.includes('كام') || message.includes('تكلفة')) {
      return {
        text: '💲 يمكنني مساعدتك في معرفة الأسعار!\n\nعن أي منتج تريد معرفة السعر؟',
        quickActions: ['معالجات', 'كروت شاشة', 'لابتوب', 'ذاكرة عشوائية']
      };
    }
    
    // Default response
    return {
      text: 'شكراً لسؤالك! 😊\n\nيمكنني مساعدتك في العديد من الأمور. جرب أن تسأل عن:\n• بناء جهاز كمبيوتر\n• مقارنة المنتجات\n• حل المشاكل التقنية\n• اختيار المنتج المناسب',
      quickActions: ['أريد بناء جهاز', 'مقارنة منتجات', 'مساعدة تقنية', 'اختيار منتج']
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      const botMessage = {
        id: Date.now() + 1,
        text: aiResponse.text,
        isUser: false,
        timestamp: new Date(),
        quickActions: aiResponse.quickActions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickAction = (action) => {
    setInputValue(action);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const startVoiceInput = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopVoiceInput = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <ChatbotContainer>
      <ChatbotButton onClick={() => setIsOpen(!isOpen)}>
        <FaRobot />
      </ChatbotButton>

      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <BotInfo>
              <BotAvatar>
                <FaRobot />
              </BotAvatar>
              <div>
                <BotName>مساعد Y0 الذكي</BotName>
                <BotStatus>متصل • يكتب بسرعة البرق</BotStatus>
              </div>
            </BotInfo>
            <CloseButton onClick={() => setIsOpen(false)}>
              <FaTimes />
            </CloseButton>
          </ChatHeader>

          <MessagesContainer>
            {messages.map(message => (
              <div key={message.id}>
                <Message isUser={message.isUser}>
                  <MessageAvatar isUser={message.isUser}>
                    {message.isUser ? <FaUser /> : <FaRobot />}
                  </MessageAvatar>
                  <MessageBubble isUser={message.isUser}>
                    {message.text}
                    {!message.isUser && (
                      <ActionButton
                        onClick={() => speakText(message.text)}
                        style={{ marginTop: '8px', width: '24px', height: '24px' }}
                      >
                        <FaVolumeUp style={{ fontSize: '12px' }} />
                      </ActionButton>
                    )}
                  </MessageBubble>
                </Message>
                
                {message.quickActions && (
                  <QuickActions>
                    {message.quickActions.map((action, index) => (
                      <QuickActionButton
                        key={index}
                        onClick={() => handleQuickAction(action)}
                      >
                        {action}
                      </QuickActionButton>
                    ))}
                  </QuickActions>
                )}
              </div>
            ))}
            
            {isTyping && (
              <Message>
                <MessageAvatar>
                  <FaRobot />
                </MessageAvatar>
                <MessageBubble>
                  <TypingIndicator>
                    <span></span>
                    <span></span>
                    <span></span>
                  </TypingIndicator>
                </MessageBubble>
              </Message>
            )}
            <div ref={messagesEndRef} />
          </MessagesContainer>

          <InputContainer>
            <MessageInput
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="اكتب رسالتك هنا..."
              disabled={isTyping}
            />
            
            {recognitionRef.current && (
              <ActionButton
                active={isListening}
                onClick={isListening ? stopVoiceInput : startVoiceInput}
                disabled={isTyping}
              >
                {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
              </ActionButton>
            )}
            
            <ActionButton onClick={handleSendMessage} disabled={!inputValue.trim() || isTyping}>
              <FaPaperPlane />
            </ActionButton>
          </InputContainer>
        </ChatWindow>
      )}
    </ChatbotContainer>
  );
};

export default AIChatbot;
