import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, ProductColor, CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedColor: ProductColor, quantity?: number) => void;
  updateQuantity: (uniqueKey: string, quantity: number) => void;
  removeFromCart: (uniqueKey: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  totalAmount: number;
  totalItems: number;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'selim_leather_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const addToCart = (product: Product, selectedColor: ProductColor, quantity: number = 1) => {
    const uniqueKey = `${product.id}-${selectedColor.name}`;

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.uniqueKey === uniqueKey);
      if (existingItemIndex > -1) {
        const updated = [...prevCart];
        updated[existingItemIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            uniqueKey,
            name: product.name,
            price: product.price,
            selectedColor,
            quantity,
            image: selectedColor.image
          }
        ];
      }
    });

    showToast(`تمت إضافة "${product.name}" باللون (${selectedColor.name}) إلى سلة التسوق`);
  };

  const updateQuantity = (uniqueKey: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(uniqueKey);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.uniqueKey === uniqueKey ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (uniqueKey: string) => {
    setCart((prev) => prev.filter((item) => item.uniqueKey !== uniqueKey));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        totalAmount,
        totalItems,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
