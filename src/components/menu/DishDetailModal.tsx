"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Check, Sparkles, ChefHat } from "lucide-react";
import { Dish } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
  onOpenLunchBuilder?: () => void;
}

export default function DishDetailModal({
  dish,
  onClose,
  onOpenLunchBuilder,
}: DishDetailModalProps) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  if (!dish) return null;

  const isCustomLunch = dish.id === "dish-arma-almuerzo";

  const handleAdd = () => {
    if (isCustomLunch && onOpenLunchBuilder) {
      onClose();
      onOpenLunchBuilder();
      return;
    }
    addItem(dish);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 26, stiffness: 240 }}
          className="relative w-full max-w-lg bg-[#FAF8F5] text-brand-dark rounded-[2.5rem] p-6 sm:p-8 border border-brand-gold/30 shadow-2xl z-10 overflow-hidden font-sans"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#121212]/5 hover:bg-[#121212]/10 text-brand-dark/70 hover:text-brand-dark transition-colors z-20"
            aria-label="Cerrar presentación del plato"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Zoom Presentation Stage */}
          <div className="relative w-full h-56 sm:h-72 rounded-3xl overflow-hidden bg-gradient-to-b from-[#EAE5DC] to-[#DED7CB] border border-[#261A14]/10 mb-5 flex items-center justify-center p-4 group">
            {/* Ambient warm glow behind dish */}
            <div className="absolute w-44 h-44 rounded-full bg-brand-gold/25 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            {/* High-Resolution Zoomable Dish Image */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 transform group-hover:scale-110 transition-transform duration-500 ease-out">
              <Image
                src={dish.imageUrl}
                alt={dish.name}
                fill
                sizes="(max-width: 640px) 240px, 320px"
                className="object-contain drop-shadow-[0_15px_25px_rgba(38,26,20,0.35)]"
                priority
              />
            </div>

            {/* Top Category / Special Badge */}
            {dish.badge && (
              <div className="absolute top-4 left-4 bg-brand-walnut text-[#F5F2EB] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-brand-gold/30 shadow-md">
                {dish.badge}
              </div>
            )}
          </div>

          {/* Dish Information */}
          <div className="space-y-3">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-goldDark">
                {dish.category === "almuerzos"
                  ? "Menú del Día • Almuerzo Casero"
                  : dish.category === "ejecutivos"
                  ? "Plato Ejecutivo con Limonada"
                  : dish.category === "especiales"
                  ? "Especial de la Casa"
                  : dish.category === "sopas"
                  ? "Sopa Tradicional"
                  : "Bebida"}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark mt-1 leading-tight">
                {dish.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
              {dish.shortDescription}
            </p>

            {/* Accompaniments & Quality Guarantee */}
            <div className="bg-[#EDE8DF]/60 rounded-2xl p-3 border border-[#261A14]/5 text-xs text-brand-charcoal/85 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-walnut">
                ✓ Preparado al momento
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-walnut">
                ✓ Ingredientes frescos del día
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-walnut">
                ✓ Sazón criolla tradicional
              </span>
            </div>
          </div>

          {/* Bottom Bar: Price & Action Button */}
          <div className="flex items-center justify-between pt-5 mt-4 border-t border-[#261A14]/10">
            <div>
              <span className="text-[10px] text-brand-charcoal/60 uppercase tracking-wider block font-bold">
                Precio al cliente
              </span>
              <span className="font-display font-bold text-2xl text-brand-dark">
                {formatPrice(dish.price)}
              </span>
            </div>

            {isCustomLunch ? (
              <button
                onClick={handleAdd}
                className="bg-brand-walnut hover:bg-brand-gold text-[#F5F2EB] hover:text-brand-dark px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <ChefHat className="w-4 h-4" />
                Configurar Almuerzo
              </button>
            ) : (
              <button
                onClick={handleAdd}
                className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md active:scale-95 ${
                  added
                    ? "bg-emerald-600 text-white"
                    : "bg-brand-gold hover:bg-brand-goldLight text-brand-dark hover:shadow-glow-gold"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    ¡Agregado al Pedido!
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                    Agregar al Pedido
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
