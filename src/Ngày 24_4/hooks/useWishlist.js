import { useState, useCallback } from 'react';

const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  const handleToggleWishlist = useCallback((productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  }, []);

  return {
    wishlist,
    showWishlistOnly,
    setShowWishlistOnly,
    handleToggleWishlist
  };
};

export default useWishlist;
