"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES } from "@/constants/fullMenu";
import { X, UtensilsCrossed, Check } from "lucide-react";

interface MobileCategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function MobileCategoryDrawer({
  isOpen,
  onClose,
  activeCategory,
  onSelectCategory,
}: MobileCategoryDrawerProps) {
  const allCategories = [
    { id: "todos", name: "Todos los Platos", description: "Carta completa del restaurante" },
    ...MENU_CATEGORIES,
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            aria-hidden="true"
          />

          {/* Bottom Sheet Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 max-h-[80vh] bg-[#F5F2EB] rounded-t-[2.5rem] p-6 z-50 border-t border-[#261A14]/15 shadow-2xl flex flex-col md:hidden overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#261A14]/10 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-walnut text-brand-gold flex items-center justify-center">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-brand-dark">
                    Categorías del Menú
                  </h3>
                  <p className="text-[11px] text-brand-charcoal/70 font-sans">
                    Filtra por tu preparación preferida
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5 text-brand-charcoal transition-colors"
                aria-label="Cerrar filtros"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Options List */}
            <div className="flex-1 overflow-y-auto space-y-2 py-1 pr-1 font-sans">
              {allCategories.map((cat) => {
                const isSelected = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id);
                      onClose();
                    }}
                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all ${
                      isSelected
                        ? "bg-brand-walnut text-[#F5F2EB] shadow-md border border-brand-gold/30"
                        : "bg-[#FAF8F5] text-brand-dark hover:bg-[#EDE8DF] border border-[#261A14]/5"
                    }`}
                  >
                    <div>
                      <span className="font-bold text-sm block">
                        {cat.name}
                      </span>
                      {"description" in cat && (
                        <span
                          className={`text-[11px] block mt-0.5 ${
                            isSelected ? "text-brand-gold" : "text-brand-charcoal/60"
                          }`}
                        >
                          {cat.description}
                        </span>
                      )}
                    </div>

                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
