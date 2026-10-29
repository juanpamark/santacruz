"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Utensils, ChefHat, Sparkles } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/lib/utils";

interface BuildYourLunchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOPAS_OPTIONS = [
  "Sopa de Ajiaco Tradicional",
  "Peto Dulce Bogotano",
  "Sin sopa (Porción extra de ensalada)",
];

const PROTEINAS_OPTIONS = [
  "Lomo a la Grillé",
  "Pollo en Salsa de Tocineta",
  "Hígado Encebollado Tradicional",
  "Carne de Res a la Plancha",
];

const PRINCIPIOS_OPTIONS = [
  "Arvejas con Chorizo Artesanal",
  "Vegetales al Vapor",
  "Puré de Papa Casero",
];

const BEBIDAS_OPTIONS = [
  "Jugo Natural de Mango",
  "Limonada Natural",
  "Sin bebida",
];

export default function BuildYourLunchModal({ isOpen, onClose }: BuildYourLunchModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedSopa, setSelectedSopa] = useState(SOPAS_OPTIONS[0]);
  const [selectedProteina, setSelectedProteina] = useState(PROTEINAS_OPTIONS[0]);
  const [selectedPrincipio, setSelectedPrincipio] = useState(PRINCIPIOS_OPTIONS[0]);
  const [selectedBebida, setSelectedBebida] = useState(BEBIDAS_OPTIONS[0]);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    const customLunch = {
      id: `custom-lunch-${Date.now()}`,
      name: `Almuerzo Casero (${selectedProteina})`,
      shortDescription: `Sopa: ${selectedSopa} • Proteína: ${selectedProteina} • Principio: ${selectedPrincipio} • Bebida: ${selectedBebida} • Incluye arroz, ensalada y maduro.`,
      price: 15000,
      category: "almuerzos" as const,
      imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793064838/Dise%C3%B1o_sin_t%C3%ADtulo_10.png",
      isAvailableToday: true,
      isDailySpecial: true,
      badge: "Minuta del Día",
    };

    addItem(customLunch);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
      setStep(1);
    }, 700);
  };

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
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 transition-opacity"
          />

          {/* Modal Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="bg-[#F5F2EB] text-brand-dark border border-[#C5A059]/30 rounded-[2.5rem] shadow-2xl max-w-xl w-full p-6 sm:p-8 pointer-events-auto relative overflow-hidden"
            >
              {/* Top Accent Decoration */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-walnut via-brand-gold to-brand-walnut" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-brand-dark/60 hover:text-brand-dark transition-colors"
                aria-label="Cerrar configurador"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-walnut text-brand-gold flex items-center justify-center shadow-sm">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-goldDark">
                    Menú del Día Santa Cruz
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-dark">
                    Arma tu Almuerzo Casero
                  </h3>
                  <p className="text-xs text-brand-charcoal/70 font-sans">
                    Sopa + Proteína + Principio + Acompañamientos + Bebida • {formatPrice(15000)}
                  </p>
                </div>
              </div>

              {/* Step Navigation Tabs */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-6">
                {[
                  { num: 1, title: "1. Sopa" },
                  { num: 2, title: "2. Proteína" },
                  { num: 3, title: "3. Principio" },
                  { num: 4, title: "4. Bebida" },
                ].map((s) => (
                  <button
                    key={s.num}
                    onClick={() => setStep(s.num as 1 | 2 | 3 | 4)}
                    className={`py-2 px-1.5 sm:px-2 rounded-full text-[10px] sm:text-xs font-sans font-bold transition-all text-center ${
                      step === s.num
                        ? "bg-brand-walnut text-[#F5F2EB] shadow-sm"
                        : "bg-[#EDE8DF] hover:bg-[#E2DBD0] text-brand-dark"
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>

              {/* Step Content */}
              <div className="min-h-[220px] mb-6 font-sans">
                {step === 1 && (
                  <div className="space-y-2.5">
                    <p className="text-xs font-semibold text-brand-charcoal/80 mb-2">
                      Selecciona la sopa o crema de entrada para hoy:
                    </p>
                    {SOPAS_OPTIONS.map((sopa) => (
                      <button
                        key={sopa}
                        onClick={() => setSelectedSopa(sopa)}
                        className={`w-full p-3.5 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border ${
                          selectedSopa === sopa
                            ? "bg-[#FAF8F5] border-brand-gold text-brand-dark shadow-sm"
                            : "bg-[#EDE8DF]/70 border-[#261A14]/10 hover:bg-[#FAF8F5] text-brand-charcoal"
                        }`}
                      >
                        <span>{sopa}</span>
                        {selectedSopa === sopa && (
                          <div className="w-5 h-5 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-2.5">
                    <p className="text-xs font-semibold text-brand-charcoal/80 mb-2">
                      Selecciona la proteína principal:
                    </p>
                    {PROTEINAS_OPTIONS.map((prot) => (
                      <button
                        key={prot}
                        onClick={() => setSelectedProteina(prot)}
                        className={`w-full p-3.5 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border ${
                          selectedProteina === prot
                            ? "bg-[#FAF8F5] border-brand-gold text-brand-dark shadow-sm"
                            : "bg-[#EDE8DF]/70 border-[#261A14]/10 hover:bg-[#FAF8F5] text-brand-charcoal"
                        }`}
                      >
                        <span>{prot}</span>
                        {selectedProteina === prot && (
                          <div className="w-5 h-5 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-2.5">
                    <p className="text-xs font-semibold text-brand-charcoal/80 mb-2">
                      Selecciona tu principio o guarnición del día:
                    </p>
                    {PRINCIPIOS_OPTIONS.map((principio) => (
                      <button
                        key={principio}
                        onClick={() => setSelectedPrincipio(principio)}
                        className={`w-full p-3.5 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border ${
                          selectedPrincipio === principio
                            ? "bg-[#FAF8F5] border-brand-gold text-brand-dark shadow-sm"
                            : "bg-[#EDE8DF]/70 border-[#261A14]/10 hover:bg-[#FAF8F5] text-brand-charcoal"
                        }`}
                      >
                        <span>{principio}</span>
                        {selectedPrincipio === principio && (
                          <div className="w-5 h-5 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-2.5">
                    <p className="text-xs font-semibold text-brand-charcoal/80 mb-2">
                      Selecciona la bebida incluida con tu almuerzo:
                    </p>
                    {BEBIDAS_OPTIONS.map((bebida) => (
                      <button
                        key={bebida}
                        onClick={() => setSelectedBebida(bebida)}
                        className={`w-full p-3.5 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between border ${
                          selectedBebida === bebida
                            ? "bg-[#FAF8F5] border-brand-gold text-brand-dark shadow-sm"
                            : "bg-[#EDE8DF]/70 border-[#261A14]/10 hover:bg-[#FAF8F5] text-brand-charcoal"
                        }`}
                      >
                        <span>{bebida}</span>
                        {selectedBebida === bebida && (
                          <div className="w-5 h-5 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Summary Preview Box in Stone */}
              <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#261A14]/10 mb-6 text-xs text-brand-charcoal space-y-1 font-sans">
                <span className="font-bold text-brand-dark block text-[11px] uppercase tracking-wider text-brand-goldDark">
                  Tu Combinación Seleccionada:
                </span>
                <p>• <strong>Entrada:</strong> {selectedSopa}</p>
                <p>• <strong>Proteína:</strong> {selectedProteina}</p>
                <p>• <strong>Principio:</strong> {selectedPrincipio}</p>
                <p>• <strong>Bebida:</strong> {selectedBebida}</p>
                <p className="text-[11px] text-neutral-500 italic pt-1">
                  *Incluye arroz blanco, ensalada fresca del día y tajada de plátano maduro.
                </p>
              </div>

              {/* Navigation & Action Buttons */}
              <div className="flex items-center justify-between gap-3 font-sans">
                {step > 1 ? (
                  <button
                    onClick={() => setStep((step - 1) as 1 | 2 | 3)}
                    className="px-5 py-3 rounded-full bg-[#EDE8DF] hover:bg-[#E2DBD0] text-brand-dark font-bold text-xs transition-all"
                  >
                    Anterior
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    onClick={() => setStep((step + 1) as 2 | 3 | 4)}
                    className="bg-brand-walnut hover:bg-brand-dark text-[#F5F2EB] px-6 py-3 rounded-full font-bold text-xs tracking-wide transition-all shadow-sm"
                  >
                    Siguiente paso
                  </button>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    disabled={addedSuccess}
                    className={`bg-brand-gold hover:bg-brand-goldLight text-brand-dark px-7 py-3 rounded-full font-bold text-xs tracking-wide transition-all shadow-sm active:scale-95 flex items-center gap-2 ${
                      addedSuccess ? "bg-emerald-600 text-white" : ""
                    }`}
                  >
                    {addedSuccess ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        ¡Agregado al Pedido!
                      </>
                    ) : (
                      <>
                        <Utensils className="w-4 h-4" />
                        Agregar al Pedido ({formatPrice(15000)})
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
