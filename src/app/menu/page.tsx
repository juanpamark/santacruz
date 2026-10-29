"use client";

import React, { useState, useMemo } from "react";
import { FULL_MENU } from "@/constants/fullMenu";
import CategoryNav from "@/components/menu/CategoryNav";
import DishCard from "@/components/menu/DishCard";
import DishDetailModal from "@/components/menu/DishDetailModal";
import BuildYourLunchModal from "@/components/menu/BuildYourLunchModal";
import MobileCartBar from "@/components/menu/MobileCartBar";
import { Search, X, ChefHat, Sparkles, BookOpen } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Dish } from "@/types";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [showOnlyToday, setShowOnlyToday] = useState(true);
  const [lunchModalOpen, setLunchModalOpen] = useState(false);
  const [selectedDishForPreview, setSelectedDishForPreview] = useState<Dish | null>(null);

  // Filtered dishes
  const filteredDishes = useMemo(() => {
    return FULL_MENU.filter((dish) => {
      // Availability filter: defaults to showing only today's menu
      if (showOnlyToday && !dish.isAvailableToday) {
        return false;
      }

      // Category filter
      if (activeCategory !== "todos" && dish.category !== activeCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.shortDescription.toLowerCase().includes(query);
        const matchesCat = dish.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, searchQuery, showOnlyToday]);

  return (
    <div className="w-full bg-[#F5F2EB] text-[#1E1E1E] pt-20 sm:pt-28 pb-24 flex flex-col">
      {/* 
        Google SEO Semantic H1
      */}
      <h1 className="sr-only">
        Menú del Día y Carta Santa Cruz Restaurante | Almuerzos Caseros, Ejecutivos y Especiales en Álamos Engativá
      </h1>

      {/* Hero Header of the Menu */}
      <section className="px-3.5 sm:px-8 max-w-6xl mx-auto w-full text-center mb-6 sm:mb-8">
        <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.25em] uppercase text-brand-goldDark">
          Carta y Gastronomía Criolla
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-5xl text-brand-dark mt-1.5 tracking-tight">
          MENÚ DEL DÍA SANTA CRUZ
        </h2>
        <p className="text-xs sm:text-base text-brand-charcoal/80 max-w-2xl mx-auto mt-2 sm:mt-3 font-sans">
          Auténtica sazón casera y recetas tradicionales preparadas cada mañana con el cariño de nuestra cocina: reconfortantes sopas criollas, almuerzos caseros completos, cortes tiernos a la brasa y pescados dorados al carbón.
        </p>

        {/* Live Real-time Search Input in Warm Stone */}
        <div className="mt-6 sm:mt-8 max-w-xl mx-auto relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-brand-charcoal/40 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar mojarra, churrasco, ajiaco, limonada..."
              className="w-full pl-11 sm:pl-12 pr-10 py-2.5 sm:py-3.5 rounded-full bg-[#FAF8F5] border border-[#261A14]/15 text-xs sm:text-sm font-sans font-medium text-brand-dark placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 p-1 rounded-full hover:bg-neutral-200 text-brand-charcoal/50"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 
          Noble Walnut Card: "Arma tu Almuerzo Casero" ($15.000)
        */}
        <div className="mt-6 sm:mt-8 max-w-2xl mx-auto bg-brand-walnut text-[#F5F2EB] rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 shadow-xl border border-brand-gold/25 text-left relative overflow-hidden">
          <div className="flex items-center gap-3 sm:gap-4 relative z-10">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0 border border-brand-gold/20 shadow-sm">
              <ChefHat className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] font-sans font-extrabold text-brand-gold uppercase tracking-wider block">
                Almuerzo Casero Completo
              </span>
              <h3 className="font-display font-bold text-sm sm:text-lg text-[#F5F2EB]">
                ¿Prefieres armar tu almuerzo a tu gusto?
              </h3>
              <p className="text-[11px] sm:text-xs text-[#EDE8DF]/80 font-sans">
                Elige sopa, proteína, principio y bebida por solo {formatPrice(15000)}.
              </p>
            </div>
          </div>

          <button
            onClick={() => setLunchModalOpen(true)}
            className="w-full sm:w-auto bg-brand-gold hover:bg-brand-goldLight text-brand-dark px-5 sm:px-6 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider flex-shrink-0 shadow-sm hover:shadow-glow-gold active:scale-95 transition-all relative z-10 text-center"
          >
            Configurar
          </button>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <CategoryNav
        activeCategory={activeCategory}
        onSelectCategory={(id) => setActiveCategory(id)}
      />

      {/* 
        Strategic Filter Sub-Bar: "Disponibles Hoy" Toggle (Right below filters on PC)
      */}
      <div className="max-w-6xl mx-auto w-full px-3.5 sm:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#FAF8F5] p-2.5 sm:p-3 rounded-2xl sm:rounded-full border border-[#261A14]/10 shadow-sm">
          {/* Quick Dual Pill Selector */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setShowOnlyToday(true)}
              className={`flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-full text-xs font-sans font-bold transition-all flex items-center justify-center gap-2 ${
                showOnlyToday
                  ? "bg-brand-walnut text-[#F5F2EB] shadow-md border border-brand-gold/30"
                  : "bg-[#EDE8DF] text-brand-dark hover:bg-[#E2DBD0]"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Disponibles hoy</span>
            </button>

            <button
              onClick={() => setShowOnlyToday(false)}
              className={`flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-full text-xs font-sans font-bold transition-all flex items-center justify-center gap-2 ${
                !showOnlyToday
                  ? "bg-brand-walnut text-[#F5F2EB] shadow-md border border-brand-gold/30"
                  : "bg-[#EDE8DF] text-brand-dark hover:bg-[#E2DBD0]"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-brand-goldDark" />
              <span>Toda la Carta Completa</span>
            </button>
          </div>

          <span className="text-[11px] text-brand-charcoal/70 font-sans hidden md:inline">
            {showOnlyToday
              ? "✨ Mostrando la selección fresca preparada para el día de hoy."
              : "📜 Mostrando todo el repertorio gastronómico de Santa Cruz."}
          </span>
        </div>
      </div>

      {/* Dishes Grid: 2x2 on Mobile, 4 Columns on Large Desktop */}
      <section className="px-3.5 sm:px-8 max-w-6xl mx-auto w-full">
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 text-[11px] sm:text-xs font-sans text-brand-charcoal/70">
          <span>
            Mostrando <strong>{filteredDishes.length}</strong> platos{" "}
            {showOnlyToday ? "disponibles hoy" : "en toda la carta"}
          </span>
          {(searchQuery || !showOnlyToday || activeCategory !== "todos") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("todos");
                setShowOnlyToday(true);
              }}
              className="text-brand-goldDark font-bold hover:underline"
            >
              Restablecer a Menú del Día
            </button>
          )}
        </div>

        {filteredDishes.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-[#FAF8F5] rounded-3xl border border-[#261A14]/15 p-6 sm:p-8 max-w-md mx-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EDE8DF] flex items-center justify-center mx-auto mb-4 text-brand-charcoal/40">
              <Search className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h4 className="font-display font-bold text-base sm:text-lg text-brand-dark mb-1">
              No encontramos platos para este filtro
            </h4>
            <p className="text-xs text-brand-charcoal/70 mb-5 font-sans">
              Prueba cambiando de categoría o activando "Toda la Carta Completa".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("todos");
                setShowOnlyToday(false);
              }}
              className="bg-brand-walnut text-[#F5F2EB] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-sans font-bold shadow-sm"
            >
              Ver Toda la Carta
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredDishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onOpenLunchBuilder={() => setLunchModalOpen(true)}
                onPreview={(d) => setSelectedDishForPreview(d)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Interactive Dish Zoom & Presentation Modal */}
      <DishDetailModal
        dish={selectedDishForPreview}
        onClose={() => setSelectedDishForPreview(null)}
        onOpenLunchBuilder={() => setLunchModalOpen(true)}
      />

      {/* Interactive Lunch Builder Modal */}
      <BuildYourLunchModal
        isOpen={lunchModalOpen}
        onClose={() => setLunchModalOpen(false)}
      />

      {/* Floating Bottom Cart Bar for Mobile Devices */}
      <MobileCartBar />
    </div>
  );
}
