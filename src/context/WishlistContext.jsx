import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create Wishlist Context
const WishlistContext = createContext();

// Custom hook to use wishlist
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

// Wishlist Actions
const WISHLIST_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_WISHLIST: 'CLEAR_WISHLIST',
  LOAD_WISHLIST: 'LOAD_WISHLIST'
};

// Wishlist Reducer
const wishlistReducer = (state, action) => {
  switch (action.type) {
    case WISHLIST_ACTIONS.ADD_ITEM:
      // Check if item already exists
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state; // Item already in wishlist
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, addedAt: new Date().toISOString() }],
        totalItems: state.totalItems + 1
      };

    case WISHLIST_ACTIONS.REMOVE_ITEM:
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: filteredItems,
        totalItems: filteredItems.length
      };

    case WISHLIST_ACTIONS.CLEAR_WISHLIST:
      return {
        items: [],
        totalItems: 0
      };

    case WISHLIST_ACTIONS.LOAD_WISHLIST:
      return {
        items: action.payload.items || [],
        totalItems: action.payload.items?.length || 0
      };

    default:
      return state;
  }
};

// Initial State
const initialState = {
  items: [],
  totalItems: 0
};

// Wishlist Provider Component
export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('y0-hardware-wishlist');
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);
        dispatch({
          type: WISHLIST_ACTIONS.LOAD_WISHLIST,
          payload: parsedWishlist
        });
      }
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error);
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('y0-hardware-wishlist', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving wishlist to localStorage:', error);
    }
  }, [state]);

  // Add item to wishlist
  const addItem = (product) => {
    dispatch({
      type: WISHLIST_ACTIONS.ADD_ITEM,
      payload: product
    });
  };

  // Remove item from wishlist
  const removeItem = (productId) => {
    dispatch({
      type: WISHLIST_ACTIONS.REMOVE_ITEM,
      payload: productId
    });
  };

  // Toggle item in wishlist
  const toggleItem = (product) => {
    const isInWishlist = state.items.some(item => item.id === product.id);
    if (isInWishlist) {
      removeItem(product.id);
      return false; // Removed
    } else {
      addItem(product);
      return true; // Added
    }
  };

  // Check if item is in wishlist
  const isInWishlist = (productId) => {
    return state.items.some(item => item.id === productId);
  };

  // Clear entire wishlist
  const clearWishlist = () => {
    dispatch({
      type: WISHLIST_ACTIONS.CLEAR_WISHLIST
    });
  };

  // Get wishlist summary
  const getWishlistSummary = () => {
    const totalValue = state.items.reduce((sum, item) => sum + item.price, 0);
    const averagePrice = state.totalItems > 0 ? totalValue / state.totalItems : 0;
    
    return {
      totalItems: state.totalItems,
      totalValue,
      averagePrice: Math.round(averagePrice * 100) / 100
    };
  };

  // Get items by category
  const getItemsByCategory = () => {
    const categories = {};
    state.items.forEach(item => {
      if (!categories[item.category]) {
        categories[item.category] = [];
      }
      categories[item.category].push(item);
    });
    return categories;
  };

  // Get recently added items
  const getRecentItems = (limit = 5) => {
    return [...state.items]
      .sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt))
      .slice(0, limit);
  };

  const value = {
    // State
    items: state.items,
    totalItems: state.totalItems,
    
    // Actions
    addItem,
    removeItem,
    toggleItem,
    clearWishlist,
    
    // Utilities
    isInWishlist,
    getWishlistSummary,
    getItemsByCategory,
    getRecentItems
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
