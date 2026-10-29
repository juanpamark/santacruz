"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dish } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";
import { Plus, Check, ChefHat, ZoomIn } from "lucide-react";

interface DishCardProps {
  dish: Dish;
  onOpenLunchBuilder?: () => void;
  onPreview?: (dish: Dish) => void;
}

export default function DishCard({
  dish,
  onOpenLunchBuilder,
  onPreview,
}: DishCardProps) {
  const [justAdded, setJustAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);
  const isCustomLunch = dish.id === "dish-arma-almuerzo";

  const cartItem = items.find((i) => i.dish.id === dish.id);
  const inCartCount = cartItem ? cartItem.quantity : 0;

  const handleAction = () => {
    if (isCustomLunch && onOpenLunchBuilder) {
      onOpenLunchBuilder();
    } else {
      addItem(dish);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1200);
    }
  };

  const handleImageClick = () => {
    if (onPreview) {
      onPreview(dish);
    } else if (isCustomLunch && onOpenLunchBuilder) {
      onOpenLunchBuilder();
    }
  };

  return (
    <div className="group bg-[#FAF8F5] rounded-2xl sm:rounded-[2rem] p-3 sm:p-5 border border-[#261A14]/10 shadow-sm hover:shadow-card-luxury transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      <div>
        {/* 4:3 Editorial Photo Container - Clickable for HD Presentation / Zoom */}
        <div
          onClick={handleImageClick}
          className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#EDE8DF] mb-2.5 sm:mb-4 border border-[#261A14]/10 cursor-pointer select-none shadow-sm"
          title={`Ver presentación en alta resolución de ${dish.name}`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleImageClick();
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

          {/* Discreet Zoom Pill on Hover */}
          <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-brand-dark/90 text-brand-gold text-[10px] font-sans font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md border border-brand-gold/30">
              <ZoomIn className="w-3 h-3 text-brand-gold" />
              Ver detalle
            </span>
          </div>

          {/* Maximum 1 Discrete Badge for Signature Dishes */}
          {dish.badge && (
            <div className="absolute top-2 left-2 bg-brand-walnut/90 backdrop-blur-xs text-[#F5F2EB] text-[8px] sm:text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-[#C5A059]/20 shadow-sm z-10 pointer-events-none">
              {dish.badge}
            </div>
          )}

          {/* In-Cart Counter Pill */}
          {inCartCount > 0 && (
            <div className="absolute top-2 right-2 bg-brand-gold text-brand-dark text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full shadow-sm z-10 pointer-events-none">
              x{inCartCount}
            </div>
          )}
        </div>

        {/* Content */}
        <h3
          onClick={handleImageClick}
          className="font-display font-bold text-xs sm:text-base text-brand-dark group-hover:text-brand-goldDark transition-colors line-clamp-1 cursor-pointer"
        >
          {dish.name}
        </h3>
        <p className="hidden sm:block text-xs text-brand-charcoal/70 mt-1.5 line-clamp-2 leading-relaxed font-sans">
          {dish.shortDescription}
        </p>
      </div>

      {/* Clean Price & Sobrio Action Button */}
      <div className="flex items-center justify-between pt-2.5 sm:pt-4 mt-2 sm:mt-3 border-t border-[#261A14]/10">
        <span className="font-sans font-bold text-xs sm:text-base text-brand-dark">
          {formatPrice(dish.price)}
        </span>

        {isCustomLunch ? (
          <button
            onClick={handleAction}
            className="bg-brand-walnut hover:bg-brand-gold text-[#F5F2EB] hover:text-brand-dark px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full font-sans font-bold text-[10px] sm:text-xs flex items-center gap-1 transition-all shadow-sm active:scale-95"
            aria-label="Armar almuerzo a tu gusto"
          >
            <ChefHat className="w-3 h-3" />
            <span className="hidden sm:inline">Armar</span>
          </button>
        ) : (
          <button
            onClick={handleAction}
            className={`px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full font-sans font-bold text-[10px] sm:text-xs flex items-center gap-1 transition-all shadow-sm active:scale-95 ${
              justAdded
                ? "bg-emerald-600 text-white"
                : "bg-brand-walnut hover:bg-brand-gold text-[#F5F2EB] hover:text-brand-dark"
            }`}
            aria-label={`Agregar ${dish.name} al pedido`}
          >
            {justAdded ? (
              <>
                <Check className="w-3 h-3" />
                <span>Listo</span>
              </>
            ) : (
              <>
                <Plus className="w-3 h-3" />
                <span>Pedir</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
