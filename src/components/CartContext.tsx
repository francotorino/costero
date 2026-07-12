"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Product } from "@/lib/products";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  total: number;
  count: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleCheckout: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const total = items.reduce(
    (sum, item) => sum + (item.price ?? 0) * item.quantity,
    0
  );

  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = useCallback(() => {
    const productNames = items.map((i) => i.name).join(", ");
    const message = `Hola buenas, quería consultar por la disponibilidad y colores de ${productNames}.`;
    window.open(
      `https://wa.me/59894251731?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }, [items, total]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        total,
        count,
        isOpen,
        setIsOpen,
        handleCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
