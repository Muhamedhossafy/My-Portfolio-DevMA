
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const initialCartState = () => {
  try {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  } catch (error) {
    console.error("Error reading cart from localStorage", error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartState);
  const { toast } = useToast();

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart to localStorage", error);
      toast({
        title: "خطأ في التخزين",
        description: "لم نتمكن من حفظ عربة التسوق الخاصة بك محليًا.",
        variant: "destructive",
      });
    }
  }, [cartItems, toast]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    toast({
      title: "تمت الإضافة إلى السلة!",
      description: `${product.name} أضيف إلى سلة التسوق الخاصة بك.`,
      className: 'bg-green-500 text-white',
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    toast({
      title: "تم الحذف من السلة",
      description: "تم حذف المنتج من سلة التسوق.",
      variant: "destructive"
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "تم إفراغ السلة",
      description: "تم حذف جميع المنتجات من سلة التسوق.",
    });
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
  