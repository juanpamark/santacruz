"use client";

import React, { useState } from "react";
import { MENU_CATEGORIES } from "@/constants/fullMenu";
import { SlidersHorizontal } from "lucide-react";
import MobileCategoryDrawer from "./MobileCategoryDrawer";

interface CategoryNavProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function CategoryNav({
  activeCategory,
  onSelectCategory,
}: CategoryNavProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Find label of active category for mobile button
  const currentCategoryLabel =
    activeCategory === "todos"
      ? "Todos"
      : MENU_CATEGORIES.find((c) => c.id === activeCategory)?.name || "Categorías";

  return (
    <>
      <div className="sticky top-16 sm:top-20 z-30 w-full py-2.5 sm:py-3 bg-[#F5F2EB]/95 backdrop-blur-md border-y border-[#261A14]/10 px-3 sm:px-8 mb-6 sm:mb-8 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          {/* Mobile Filter Button (Hamburger / Category Sheet Trigger) */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden flex items-center gap-2 bg-brand-walnut text-[#F5F2EB] px-3.5 py-2 rounded-full text-xs font-sans font-bold flex-shrink-0 shadow-sm border border-brand-gold/30 active:scale-95"
            aria-label="Abrir selector de categorías"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-brand-gold" />
            <span>{currentCategoryLabel}</span>
          </button>

          {/* Horizontal Category Pills with Hidden Scrollbar (.no-scrollbar) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 flex-1">
            <button
              onClick={() => onSelectCategory("todos")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-sans font-bold tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${
                activeCategory === "todos"
                  ? "bg-brand-walnut text-[#F5F2EB] shadow-sm"
                  : "bg-[#EDE8DF] hover:bg-[#E2DBD0] text-brand-dark border border-[#261A14]/10"
              }`}
            >
              Todos
            </button>

            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-sans font-bold tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-brand-gold text-brand-dark shadow-sm"
                    : "bg-[#EDE8DF] hover:bg-[#E2DBD0] text-brand-dark border border-[#261A14]/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileCategoryDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
      />
    </>
  );
}
