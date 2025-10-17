import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { 
  FaSearch, 
  FaTimes, 
  FaHistory, 
  FaFire, 
  FaMicrophone,
  FaMicrophoneSlash,
  FaFilter
} from 'react-icons/fa';
import { productsDatabase, categories, brands } from '../../data/products';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background.card};
  border: 2px solid ${({ theme, focused }) => 
    focused ? theme.colors.primary : theme.colors.border.primary
  };
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  overflow: hidden;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
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

const SearchButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

const VoiceButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm};
  border: none;
  background: transparent;
  color: ${({ active, theme }) => 
    active ? theme.colors.error : theme.colors.text.secondary
  };
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.base};
  }
`;

const ClearButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm};
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.tertiary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const SearchDropdown = styled.div`
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
  animation: ${slideDown} 0.2s ease-out;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const SearchSection = styled.div`
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
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
  }
`;

const SuggestionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SuggestionItem = styled.li`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.hover};
  }
  
  &.selected {
    background: ${({ theme }) => theme.colors.primary}20;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProductSuggestion = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.hover};
  }
`;

const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
`;

const ProductPrice = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
`;

const FilterChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const FilterChip = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const NoResults = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const AdvancedSearch = ({ onSearch, placeholder = "ابحث عن المنتجات..." }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isListening, setIsListening] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [productSuggestions, setProductSuggestions] = useState([]);
  
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const recognitionRef = useRef(null);

  // Load search history from localStorage
  useEffect(() => {
    const history = localStorage.getItem('y0-hardware-search-history');
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  }, []);

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
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // Generate suggestions based on query
  useEffect(() => {
    if (query.length > 0) {
      const queryLower = query.toLowerCase();
      
      // Search suggestions from categories and brands
      const categorySuggestions = Object.values(categories)
        .filter(cat => cat.toLowerCase().includes(queryLower))
        .slice(0, 3);
      
      const brandSuggestions = Object.values(brands)
        .filter(brand => brand.toLowerCase().includes(queryLower))
        .slice(0, 3);
      
      // Search product suggestions
      const products = productsDatabase
        .filter(product => 
          product.name.toLowerCase().includes(queryLower) ||
          product.description.toLowerCase().includes(queryLower)
        )
        .slice(0, 5);
      
      setSuggestions([...categorySuggestions, ...brandSuggestions]);
      setProductSuggestions(products);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setProductSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery = query) => {
    if (!searchQuery.trim()) return;

    // Add to search history
    const newHistory = [searchQuery, ...searchHistory.filter(h => h !== searchQuery)].slice(0, 10);
    setSearchHistory(newHistory);
    localStorage.setItem('y0-hardware-search-history', JSON.stringify(newHistory));

    // Perform search
    if (onSearch) {
      onSearch(searchQuery);
    } else {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }

    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e) => {
    const totalItems = suggestions.length + productSuggestions.length + searchHistory.length;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % totalItems);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev <= 0 ? totalItems - 1 : prev - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0) {
        // Handle selection
        if (selectedIndex < searchHistory.length) {
          handleSearch(searchHistory[selectedIndex]);
        } else if (selectedIndex < searchHistory.length + suggestions.length) {
          handleSearch(suggestions[selectedIndex - searchHistory.length]);
        } else {
          const productIndex = selectedIndex - searchHistory.length - suggestions.length;
          navigate(`/product/${productSuggestions[productIndex].id}`);
        }
      } else {
        handleSearch();
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
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

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ar-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const popularSearches = ['معالج Intel', 'كارت شاشة RTX', 'لابتوب ألعاب', 'ذاكرة عشوائية', 'SSD'];

  return (
    <SearchContainer ref={dropdownRef}>
      <SearchInputContainer focused={isOpen}>
        <SearchInput
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
        />
        
        {query && (
          <ClearButton onClick={clearSearch}>
            <FaTimes />
          </ClearButton>
        )}
        
        {recognitionRef.current && (
          <VoiceButton
            active={isListening}
            onClick={isListening ? stopVoiceSearch : startVoiceSearch}
            title={isListening ? 'إيقاف البحث الصوتي' : 'البحث الصوتي'}
          >
            {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
          </VoiceButton>
        )}
        
        <SearchButton onClick={() => handleSearch()}>
          <FaSearch />
        </SearchButton>
      </SearchInputContainer>

      {isOpen && (
        <SearchDropdown>
          {/* Search History */}
          {searchHistory.length > 0 && query.length === 0 && (
            <SearchSection>
              <SectionTitle>
                <FaHistory />
                عمليات البحث السابقة
              </SectionTitle>
              <SuggestionsList>
                {searchHistory.map((item, index) => (
                  <SuggestionItem
                    key={index}
                    className={selectedIndex === index ? 'selected' : ''}
                    onClick={() => handleSearch(item)}
                  >
                    <FaHistory />
                    {item}
                  </SuggestionItem>
                ))}
              </SuggestionsList>
            </SearchSection>
          )}

          {/* Popular Searches */}
          {query.length === 0 && (
            <SearchSection>
              <SectionTitle>
                <FaFire />
                البحث الشائع
              </SectionTitle>
              <FilterChips>
                {popularSearches.map((search, index) => (
                  <FilterChip key={index} onClick={() => handleSearch(search)}>
                    {search}
                  </FilterChip>
                ))}
              </FilterChips>
            </SearchSection>
          )}

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <SearchSection>
              <SectionTitle>
                <FaFilter />
                اقتراحات
              </SectionTitle>
              <SuggestionsList>
                {suggestions.map((suggestion, index) => (
                  <SuggestionItem
                    key={index}
                    className={selectedIndex === searchHistory.length + index ? 'selected' : ''}
                    onClick={() => handleSearch(suggestion)}
                  >
                    <FaSearch />
                    {suggestion}
                  </SuggestionItem>
                ))}
              </SuggestionsList>
            </SearchSection>
          )}

          {/* Product Suggestions */}
          {productSuggestions.length > 0 && (
            <SearchSection>
              <SectionTitle>
                <FaSearch />
                المنتجات
              </SectionTitle>
              {productSuggestions.map((product, index) => (
                <ProductSuggestion
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductInfo>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                  </ProductInfo>
                </ProductSuggestion>
              ))}
            </SearchSection>
          )}

          {/* No Results */}
          {query.length > 0 && suggestions.length === 0 && productSuggestions.length === 0 && (
            <NoResults>
              لم يتم العثور على نتائج لـ "{query}"
            </NoResults>
          )}
        </SearchDropdown>
      )}
    </SearchContainer>
  );
};

export default AdvancedSearch;
