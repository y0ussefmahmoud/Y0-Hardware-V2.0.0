import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShopSEO } from '../components/common/SEO';
import styled from 'styled-components';
import { FaFilter, FaSearch, FaTh, FaList, FaSortAmountDown } from 'react-icons/fa';
import { productsDatabase, categories, subcategories, brands } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  min-height: calc(100vh - 160px);
`;

const ShopHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ShopControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchAndFilter = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  padding-right: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.shadow.colored};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

const ViewControls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ViewButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.background.card
  };
  color: ${({ active, theme }) => 
    active ? theme.colors.text.inverse : theme.colors.text.secondary
  };
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;

const ShopContent = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

const FilterCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FilterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FilterGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const FilterCheckbox = styled.input`
  accent-color: ${({ theme }) => theme.colors.primary};
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const PriceRange = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`;

const PriceInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const MainContent = styled.main`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
  }
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ResultsCount = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
`;

const SortSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ viewMode }) => 
    viewMode === 'grid' 
      ? 'repeat(auto-fill, minmax(280px, 1fr))' 
      : '1fr'
  };
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [sortBy, setSortBy] = useState('name');
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    subcategory: '',
    brand: '',
    minPrice: '',
    maxPrice: '',
    inStock: false,
    onSale: searchParams.get('deals') === 'true' || false,
    usedOnly: false,
  });

  const filteredProducts = useMemo(() => {
    let filtered = [...productsDatabase];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Subcategory filter
    if (filters.subcategory) {
      filtered = filtered.filter(product => product.subcategory === filters.subcategory);
    }

    // Brand filter
    if (filters.brand) {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }

    // Price range filter
    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= parseInt(filters.maxPrice));
    }

    // Stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Sale filter
    if (filters.onSale) {
      filtered = filtered.filter(product => product.oldPrice);
    }

    // Used products filter
    if (filters.usedOnly) {
      filtered = filtered.filter(product => product.category === 'used');
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id - a.id;
        default:
          return a.name.localeCompare(b.name, 'ar');
      }
    });

    return filtered;
  }, [searchQuery, filters, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const uniqueBrands = [...new Set(productsDatabase.map(p => p.brand))];
  const uniqueSubcategories = [...new Set(productsDatabase.map(p => p.subcategory))];

  return (
    <>
      <ShopSEO />
      <ShopContainer>
      <ShopHeader>
        <PageTitle>متجر المنتجات</PageTitle>
      </ShopHeader>

      <ShopControls>
        <SearchAndFilter>
          <SearchBox>
            <SearchInput
              type="text"
              placeholder="ابحث عن المنتجات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </SearchBox>
        </SearchAndFilter>

        <ViewControls>
          <ViewButton
            active={viewMode === 'grid'}
            onClick={() => setViewMode('grid')}
            title="عرض شبكي"
          >
            <FaTh />
          </ViewButton>
          <ViewButton
            active={viewMode === 'list'}
            onClick={() => setViewMode('list')}
            title="عرض قائمة"
          >
            <FaList />
          </ViewButton>
        </ViewControls>
      </ShopControls>

      <ShopContent>
        <Sidebar>
          <FilterCard>
            <FilterTitle>
              <FaFilter />
              تصفية المنتجات
            </FilterTitle>

            <FilterGroup>
              <h4>الفئة</h4>
              <FilterSelect
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">جميع الفئات</option>
                {Object.entries(categories).map(([key, value]) => (
                  key !== 'all' && <option key={key} value={key}>{value}</option>
                ))}
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <h4>الفئة الفرعية</h4>
              <FilterSelect
                value={filters.subcategory}
                onChange={(e) => handleFilterChange('subcategory', e.target.value)}
              >
                <option value="">جميع الفئات الفرعية</option>
                {uniqueSubcategories.map(sub => (
                  <option key={sub} value={sub}>{subcategories[sub]}</option>
                ))}
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <h4>الماركة</h4>
              <FilterSelect
                value={filters.brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
              >
                <option value="">جميع الماركات</option>
                {uniqueBrands.map(brand => (
                  <option key={brand} value={brand}>{brands[brand]}</option>
                ))}
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <h4>نطاق السعر</h4>
              <PriceRange>
                <PriceInput
                  type="number"
                  placeholder="من"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                />
                <span>-</span>
                <PriceInput
                  type="number"
                  placeholder="إلى"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                />
              </PriceRange>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel>الحالة</FilterLabel>
              <FilterCheckbox>
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => setFilters({...filters, inStock: e.target.checked})}
                />
                <span>متوفر فقط</span>
              </FilterCheckbox>
              <FilterCheckbox>
                <input
                  type="checkbox"
                  checked={filters.onSale}
                  onChange={(e) => setFilters({...filters, onSale: e.target.checked})}
                />
                <span>عروض وتخفيضات</span>
              </FilterCheckbox>
              <FilterCheckbox>
                <input
                  type="checkbox"
                  checked={filters.usedOnly}
                  onChange={(e) => setFilters({...filters, usedOnly: e.target.checked})}
                />
                <span>منتجات مستعملة فقط</span>
              </FilterCheckbox>
            </FilterGroup>
          </FilterCard>
        </Sidebar>

        <MainContent>
          <ResultsHeader>
            <ResultsCount>
              عرض {filteredProducts.length} من أصل {productsDatabase.length} منتج
            </ResultsCount>
            <SortSelect value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">ترتيب أبجدي</option>
              <option value="price-low">السعر: من الأقل للأعلى</option>
              <option value="price-high">السعر: من الأعلى للأقل</option>
              <option value="rating">التقييم</option>
              <option value="newest">الأحدث</option>
            </SortSelect>
          </ResultsHeader>

          {filteredProducts.length > 0 ? (
            <ProductsGrid viewMode={viewMode}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductsGrid>
          ) : (
            <NoResults>
              <h3>لم يتم العثور على منتجات</h3>
              <p>جرب تغيير معايير البحث أو التصفية</p>
            </NoResults>
          )}
        </MainContent>
      </ShopContent>
    </ShopContainer>
    </>
  );
};

export default Shop;
