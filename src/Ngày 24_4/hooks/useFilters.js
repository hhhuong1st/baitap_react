import { useState, useMemo, useCallback } from 'react';

const useFilters = (productsData, wishlist, showWishlistOnly) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(productsData.map(p => p.category));
    return Array.from(cats);
  }, [productsData]);

  const filteredProducts = useMemo(() => {
    return productsData.filter(p => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchWishlist = showWishlistOnly ? wishlist.includes(p.id) : true;
      return matchCategory && matchSearch && matchWishlist;
    });
  }, [productsData, searchQuery, selectedCategory, showWishlistOnly, wishlist]);

  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  return {
    searchQuery,
    selectedCategory,
    categories,
    filteredProducts,
    handleSearchChange,
    handleCategorySelect
  };
};

export default useFilters;
