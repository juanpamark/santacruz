import { create } from "zustand";
import { CartItem, Dish } from "@/types";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (dish: Dish) => void;
  removeItem: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setOpen: (open: boolean) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (dish: Dish) => {
    set((state) => {
      const existing = state.items.find((i) => i.dish.id === dish.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.dish.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        items: [...state.items, { dish, quantity: 1 }],
      };
    });
  },
  removeItem: (dishId: string) => {
    set((state) => ({
      items: state.items.filter((i) => i.dish.id !== dishId),
    }));
  },
  updateQuantity: (dishId: string, quantity: number) => {
    set((state) => {
      if (quantity <= 0) {
        return {
          items: state.items.filter((i) => i.dish.id !== dishId),
        };
      }
      return {
        items: state.items.map((i) =>
          i.dish.id === dishId ? { ...i, quantity } : i
        ),
      };
    });
  },
  clearCart: () => set({ items: [] }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpen: (open: boolean) => set({ isOpen: open }),
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.dish.price * item.quantity,
      0
    );
  },
}));
