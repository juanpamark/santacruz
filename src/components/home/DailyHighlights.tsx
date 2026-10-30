"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DAILY_SPECIALS } from "@/constants/dishes";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { Plus, ArrowRight, Check, ZoomIn } from "lucide-react";
import DishDetailModal from "@/components/menu/DishDetailModal";
import { Dish } from "@/types";

export default function DailyHighlights() {
  const addItem = useCartStore((state) => state.addItem);
  const [selectedDishForPreview, setSelectedDishForPreview] = useState<Dish | null>(null);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  // Exact 4 signature dishes
  const highlights = DAILY_SPECIALS.slice(0, 4);

  const handleAdd = (dish: Dish) => {
    addItem(dish);
    setJustAddedId(dish.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1200);
  };

  return (
    <section
      id="destacados-hoy"
      className="bg-[#F5F2EB] text-[#1E1E1E] py-14 sm:py-20 px-3.5 sm:px-8 w-full border-t border-[#C5A059]/15"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.25em] uppercase text-brand-goldDark">
            Frescura y Tradición Diaria
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-brand-dark mt-1 sm:mt-2 tracking-tight">
            Sugerencias y Platos del Día
          </h2>
          <p className="text-xs sm:text-base text-brand-charcoal/80 mt-2 sm:mt-3 font-sans px-2">
            Preparados cada mañana con ingredientes seleccionados. Toca cualquier plato para ver su detalle o pídelo a tu casa en Engativá.
          </p>
        </div>

        {/* 
          2x2 Grid on Mobile, 4 Columns on Desktop with 4:3 Photographic Framing
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {highlights.map((dish) => (
            <div
              key={dish.id}
              className="group bg-[#FAF8F5] rounded-2xl sm:rounded-[2rem] p-3 sm:p-5 border border-[#261A14]/10 shadow-sm hover:shadow-card-luxury transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* 4:3 Editorial Photo Container - Clickable for Dish Detail Modal */}
                <div
                  onClick={() => setSelectedDishForPreview(dish)}
                  className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#EDE8DF] mb-2.5 sm:mb-4 border border-[#261A14]/10 cursor-pointer select-none shadow-sm"
                  title={`Ver presentación de ${dish.name}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedDishForPreview(dish);
                    }
                  }}
                >
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out">
                    <Image
                      src={dish.imageUrl}
                      alt={dish.name}
                      fill
                      sizes="(max-width: 640px) 200px, 320px"
                      className="object-cover"
                    />
                  </div>

                  {/* Discreet Zoom Overlay Pill on Hover */}
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-brand-dark/90 text-brand-gold text-[10px] font-sans font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md border border-brand-gold/30">
                      <ZoomIn className="w-3 h-3 text-brand-gold" />
                      Ver detalle
                    </span>
                  </div>

                  {/* Single Discrete Badge */}
                  {dish.badge && (
                    <div className="absolute top-2 left-2 bg-brand-walnut/90 backdrop-blur-xs text-[#F5F2EB] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[9px] font-sans font-bold tracking-wider uppercase border border-[#C5A059]/20 shadow-sm z-10 pointer-events-none">
                      {dish.badge}
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <h3
                  onClick={() => setSelectedDishForPreview(dish)}
                  className="font-display font-bold text-xs sm:text-base text-brand-dark mt-0.5 group-hover:text-brand-goldDark transition-colors line-clamp-1 cursor-pointer"
                >
                  {dish.name}
                </h3>
                <p className="hidden sm:block text-xs text-brand-charcoal/70 mt-1.5 line-clamp-2 leading-relaxed font-sans">
                  {dish.shortDescription}
                </p>
              </div>

              {/* Price & Clean Action Button */}
              <div className="flex items-center justify-between pt-2.5 sm:pt-4 mt-2 sm:mt-3 border-t border-[#261A14]/10">
                <span className="font-sans font-bold text-xs sm:text-base text-brand-dark">
                  {formatPrice(dish.price)}
                </span>

                <button
                  onClick={() => handleAdd(dish)}
                  className={`px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full font-sans font-bold text-[10px] sm:text-xs flex items-center gap-1 transition-all duration-300 shadow-sm active:scale-95 ${
                    justAddedId === dish.id
                      ? "bg-emerald-600 text-white"
                      : "bg-brand-walnut hover:bg-brand-gold text-[#F5F2EB] hover:text-brand-dark"
                  }`}
                  aria-label={`Agregar ${dish.name} al pedido`}
                >
                  {justAddedId === dish.id ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Listo</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3 h-3" />
                      <span>Añadir</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to explore all menu */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-brand-walnut hover:bg-brand-gold text-[#F5F2EB] hover:text-brand-dark font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md group"
          >
            <span>Explorar Toda la Carta</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Dish Presentation Modal */}
      <DishDetailModal
        dish={selectedDishForPreview}
        onClose={() => setSelectedDishForPreview(null)}
      />
    </section>
  );
}
