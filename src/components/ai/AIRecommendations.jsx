/**
 * AI Product Recommendations Component
 * 
 * Uses machine learning algorithms to recommend products based on:
 * - User browsing history
 * - Cart contents
 * - Similar user preferences
 * - Product compatibility
 * 
 * @version 2.0.0
 */

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaRobot, FaBrain, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { productsDatabase } from '../../data/products';
import ProductCard from '../product/ProductCard';
import Card from '../common/Card';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const AIContainer = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}10, 
    ${({ theme }) => theme.colors.secondary}10
  );
  border: 2px solid ${({ theme }) => theme.colors.primary}20;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.colors.primary}, 
      ${({ theme }) => theme.colors.secondary}
    );
    animation: ${shimmer} 2s infinite;
  }
`;

const AIHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const AIIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary}, 
    ${({ theme }) => theme.colors.secondary}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;

const AITitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const AISubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
`;

const RecommendationTypes = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

const TypeButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.border.primary
  };
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'
  };
  color: ${({ active, theme }) => 
    active ? theme.colors.text.inverse : theme.colors.text.primary
  };
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const RecommendationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const AIInsight = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border-left: 4px solid ${({ theme }) => theme.colors.info};
`;

const InsightText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  line-height: 1.5;
`;

const LoadingState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    animation: spin 1s linear infinite;
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const AIRecommendations = ({ currentProduct = null, userId = null }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [activeType, setActiveType] = useState('smart');
  const [loading, setLoading] = useState(true);
  const [aiInsight, setAiInsight] = useState('');
  
  const { items: cartItems } = useCart();
  const { items: wishlistItems } = useWishlist();

  const recommendationTypes = [
    { 
      id: 'smart', 
      label: 'ذكي', 
      icon: <FaBrain />,
      description: 'توصيات ذكية بناءً على سلوكك'
    },
    { 
      id: 'similar', 
      label: 'مشابه', 
      icon: <FaLightbulb />,
      description: 'منتجات مشابهة للمنتج الحالي'
    },
    { 
      id: 'trending', 
      label: 'رائج', 
      icon: <FaChartLine />,
      description: 'المنتجات الأكثر رواجاً'
    },
    { 
      id: 'compatible', 
      label: 'متوافق', 
      icon: <FaRobot />,
      description: 'منتجات متوافقة مع مشترياتك'
    }
  ];

  // AI Algorithm for Smart Recommendations
  const generateSmartRecommendations = () => {
    let products = [...productsDatabase];
    let scores = new Map();

    // Score based on user behavior
    products.forEach(product => {
      let score = 0;

      // Base popularity score
      score += (product.rating || 0) * 10;
      score += (product.reviewCount || 0) * 2;

      // Cart compatibility score
      if (cartItems.length > 0) {
        cartItems.forEach(cartItem => {
          if (cartItem.category === product.category) {
            score += 15; // Same category bonus
          }
          if (cartItem.brand === product.brand) {
            score += 10; // Same brand bonus
          }
          if (Math.abs(cartItem.price - product.price) < 1000) {
            score += 5; // Similar price range
          }
        });
      }

      // Wishlist preferences
      if (wishlistItems.length > 0) {
        wishlistItems.forEach(wishItem => {
          if (wishItem.category === product.category) {
            score += 20; // Strong preference indicator
          }
          if (wishItem.brand === product.brand) {
            score += 15;
          }
        });
      }

      // Current product compatibility
      if (currentProduct) {
        if (currentProduct.category === product.category && currentProduct.id !== product.id) {
          score += 25; // Same category, different product
        }
        if (currentProduct.brand === product.brand && currentProduct.id !== product.id) {
          score += 20; // Same brand
        }
        
        // PC building compatibility logic
        if (isCompatible(currentProduct, product)) {
          score += 30; // High compatibility bonus
        }
      }

      // Exclude already owned items
      const isInCart = cartItems.some(item => item.id === product.id);
      const isInWishlist = wishlistItems.some(item => item.id === product.id);
      const isCurrent = currentProduct && currentProduct.id === product.id;
      
      if (isInCart || isInWishlist || isCurrent) {
        score = 0; // Don't recommend what user already has
      }

      scores.set(product.id, score);
    });

    // Sort by score and return top recommendations
    return products
      .filter(p => scores.get(p.id) > 0)
      .sort((a, b) => scores.get(b.id) - scores.get(a.id))
      .slice(0, 4);
  };

  // Check product compatibility (for PC building)
  const isCompatible = (product1, product2) => {
    // CPU + Motherboard compatibility
    if (product1.subcategory === 'processors' && product2.subcategory === 'motherboards') {
      return product1.specifications?.socket === product2.specifications?.socket;
    }
    
    // RAM + Motherboard compatibility
    if (product1.subcategory === 'memory' && product2.subcategory === 'motherboards') {
      return product1.specifications?.type === product2.specifications?.memoryType;
    }
    
    // GPU + PSU compatibility (power requirements)
    if (product1.subcategory === 'graphics-cards' && product2.subcategory === 'power-supplies') {
      const gpuPower = parseInt(product1.specifications?.power || '200');
      const psuPower = parseInt(product2.specifications?.wattage || '500');
      return psuPower >= gpuPower + 200; // 200W headroom
    }

    return false;
  };

  // Generate different types of recommendations
  const generateRecommendations = (type) => {
    setLoading(true);
    
    setTimeout(() => {
      let results = [];
      let insight = '';

      switch (type) {
        case 'smart':
          results = generateSmartRecommendations();
          insight = `تم تحليل ${cartItems.length + wishlistItems.length} عنصر من تفضيلاتك لإنشاء هذه التوصيات الذكية.`;
          break;
          
        case 'similar':
          if (currentProduct) {
            results = productsDatabase
              .filter(p => 
                p.category === currentProduct.category && 
                p.id !== currentProduct.id
              )
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 4);
            insight = `منتجات مشابهة لـ "${currentProduct.name}" في نفس الفئة.`;
          } else {
            results = productsDatabase
              .filter(p => p.rating >= 4.0)
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 4);
            insight = 'منتجات عالية التقييم في فئات مختلفة.';
          }
          break;
          
        case 'trending':
          results = productsDatabase
            .filter(p => p.reviewCount >= 5)
            .sort((a, b) => b.reviewCount - a.reviewCount)
            .slice(0, 4);
          insight = 'المنتجات الأكثر رواجاً ومراجعة من المستخدمين.';
          break;
          
        case 'compatible':
          if (cartItems.length > 0) {
            results = productsDatabase.filter(product => {
              return cartItems.some(cartItem => isCompatible(cartItem, product));
            }).slice(0, 4);
            insight = `منتجات متوافقة مع ${cartItems.length} عنصر في سلتك.`;
          } else {
            results = productsDatabase
              .filter(p => p.badge === 'bestseller')
              .slice(0, 4);
            insight = 'منتجات الأكثر مبيعاً - خيارات موثوقة.';
          }
          break;
          
        default:
          results = productsDatabase.slice(0, 4);
          insight = 'توصيات عامة بناءً على شعبية المنتجات.';
      }

      setRecommendations(results);
      setAiInsight(insight);
      setLoading(false);
    }, 1000); // Simulate AI processing time
  };

  useEffect(() => {
    generateRecommendations(activeType);
  }, [activeType, cartItems, wishlistItems, currentProduct]);

  const handleTypeChange = (type) => {
    setActiveType(type);
  };

  return (
    <AIContainer>
      <AIHeader>
        <AIIcon>
          <FaRobot />
        </AIIcon>
        <div>
          <AITitle>توصيات الذكاء الاصطناعي</AITitle>
          <AISubtitle>
            مدعوم بخوارزميات التعلم الآلي لتجربة تسوق مخصصة
          </AISubtitle>
        </div>
      </AIHeader>

      <RecommendationTypes>
        {recommendationTypes.map(type => (
          <TypeButton
            key={type.id}
            active={activeType === type.id}
            onClick={() => handleTypeChange(type.id)}
            title={type.description}
          >
            {type.icon}
            {type.label}
          </TypeButton>
        ))}
      </RecommendationTypes>

      {aiInsight && (
        <AIInsight>
          <InsightText>
            <FaBrain style={{ marginRight: '8px', color: '#3498db' }} />
            {aiInsight}
          </InsightText>
        </AIInsight>
      )}

      {loading ? (
        <LoadingState>
          <FaRobot />
          جاري تحليل البيانات وإنشاء التوصيات...
        </LoadingState>
      ) : (
        <RecommendationsGrid>
          {recommendations.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </RecommendationsGrid>
      )}
    </AIContainer>
  );
};

export default AIRecommendations;
