import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Cart, CartItem, ProductPrice } from '../types';

interface CartContextType {
  cart: Cart;
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string, variantId?: string) => boolean;
}

const STORAGE_KEY = '4blanc-cart';

const emptyCart: Cart = {
  items: [],
  totalQuantity: 0,
  subtotal: { amount: '0.00', currencyCode: 'USD' },
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const calculateSubtotal = (items: CartItem[]): ProductPrice => {
  const total = items.reduce((sum, item) => {
    return sum + parseFloat(item.price.amount) * item.quantity;
  }, 0);

  return {
    amount: total.toFixed(2),
    currencyCode: items[0]?.price.currencyCode || 'USD',
  };
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : emptyCart;
    } catch {
      return emptyCart;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = (item: Omit<CartItem, 'id'>) => {
    setCart((prev) => {
      const existingIndex = prev.items.findIndex(
        (i) => i.productId === item.productId && i.variantId === item.variantId
      );

      let newItems: CartItem[];
      if (existingIndex >= 0) {
        newItems = prev.items.map((i, idx) =>
          idx === existingIndex ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        const newItem: CartItem = { ...item, id: `cart-${Date.now()}` };
        newItems = [...prev.items, newItem];
      }

      return {
        items: newItems,
        totalQuantity: newItems.reduce((sum, i) => sum + i.quantity, 0),
        subtotal: calculateSubtotal(newItems),
      };
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) => {
      const newItems = prev.items.filter((i) => i.id !== id);
      return {
        items: newItems,
        totalQuantity: newItems.reduce((sum, i) => sum + i.quantity, 0),
        subtotal: calculateSubtotal(newItems),
      };
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;

    setCart((prev) => {
      const newItems = prev.items.map((i) =>
        i.id === id ? { ...i, quantity } : i
      );
      return {
        items: newItems,
        totalQuantity: newItems.reduce((sum, i) => sum + i.quantity, 0),
        subtotal: calculateSubtotal(newItems),
      };
    });
  };

  const clearCart = () => {
    setCart(emptyCart);
  };

  const isInCart = (productId: string, variantId?: string): boolean => {
    return cart.items.some(
      (i) => i.productId === productId && (!variantId || i.variantId === variantId)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
