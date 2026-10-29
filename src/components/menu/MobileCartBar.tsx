"use client";

import React from "react";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileCartBar() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const setOpen = useCartStore((state) => state.setOpen);

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 z-40 sm:hidden"
        >
          <div className="bg-[#1C1613] text-[#F5F2EB] p-3.5 rounded-full shadow-2xl flex items-center justify-between border border-brand-gold/30 backdrop-blur-md">
            <div className="flex items-center gap-3 pl-2">
              <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center font-bold text-xs text-brand-dark shadow-sm">
                {totalItems}
              </div>
              <div className="leading-tight">
                <span className="text-[10px] text-neutral-400 block uppercase font-bold tracking-wider font-sans">
                  Total Pedido
                </span>
                <span className="font-sans font-bold text-sm text-brand-goldLight">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="bg-brand-gold hover:bg-brand-goldLight text-brand-dark px-4 py-2 rounded-full font-sans font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
            >
              <ShoppingCart className="w-3.5 h-3.5 stroke-[2.2]" />
              Ver Carrito
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
