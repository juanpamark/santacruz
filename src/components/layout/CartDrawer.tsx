"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { VENUE_INFO } from "@/constants/venue";
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Send,
  MapPin,
  Clock,
} from "lucide-react";

export default function CartDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const setOpen = useCartStore((state) => state.setOpen);
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const getTotalItems = useCartStore((state) => state.getTotalItems());

  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalPrice = getTotalPrice();

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsSubmitting(true);

    let message = `¡Hola Santa Cruz Restaurante! 🍽️\n\n`;
    message += `Quisiera realizar el siguiente pedido a domicilio:\n`;
    message += `──────────────────────\n`;

    items.forEach((item) => {
      message += `• ${item.quantity}x ${item.dish.name} - ${formatPrice(
        item.dish.price * item.quantity
      )}\n`;
      if (item.dish.isCustomLunch) {
        message += `  (Personalizado: ${item.dish.shortDescription})\n`;
      }
    });

    message += `──────────────────────\n`;
    message += `*Total a Pagar:* ${formatPrice(totalPrice)}\n\n`;

    if (customerName.trim()) {
      message += `*Nombre:* ${customerName.trim()}\n`;
    }
    if (customerAddress.trim()) {
      message += `*Dirección en Engativá:* ${customerAddress.trim()}\n`;
    }
    if (customerNotes.trim()) {
      message += `*Indicaciones:* ${customerNotes.trim()}\n`;
    }

    message += `\n*Medio de Pago Domicilio:* Efectivo / Bre-B / Nequi\n`;
    message += `_Enviado desde santacruzrestaurante.com_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${VENUE_INFO.deliveryWhatsapp}?text=${encoded}`, "_blank");

    setIsSubmitting(false);
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
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer Panel in Warm Bone / Stone */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#F5F2EB] text-[#1E1E1E] z-50 shadow-2xl flex flex-col border-l border-[#261A14]/20"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-[#261A14]/10 flex items-center justify-between bg-[#EDE8DF]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-walnut text-brand-gold flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 stroke-[1.9]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    Tu Pedido
                  </h3>
                  <p className="text-xs text-brand-charcoal/70 font-sans">
                    Santa Cruz Restaurante
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-black/5 text-brand-charcoal transition-colors"
                aria-label="Cerrar pedido"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 font-sans">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#EDE8DF] flex items-center justify-center mb-4 text-brand-charcoal/40">
                    <ShoppingCart className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <p className="font-display font-bold text-lg text-brand-dark mb-1">
                    Tu carrito está vacío
                  </p>
                  <p className="text-xs text-brand-charcoal/70 max-w-xs mb-6">
                    Explora nuestra carta y agrega tus preparaciones favoritas para ordenar directo a WhatsApp.
                  </p>
                  <Link
                    href="/menu"
                    onClick={() => setOpen(false)}
                    className="bg-brand-walnut text-[#F5F2EB] hover:bg-brand-gold hover:text-brand-dark px-7 py-3 rounded-full text-xs font-bold transition-all shadow-sm active:scale-95 inline-flex items-center gap-2"
                  >
                    Explorar el Menú
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.dish.id}
                    className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#261A14]/10 flex gap-4 items-center shadow-sm"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#EDE8DF] flex-shrink-0 border border-[#261A14]/5">
                      <Image
                        src={item.dish.imageUrl}
                        alt={item.dish.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-xs sm:text-sm text-brand-dark truncate">
                        {item.dish.name}
                      </h4>
                      <p className="text-xs font-bold text-brand-goldDark mt-0.5">
                        {formatPrice(item.dish.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-[#EDE8DF] hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center text-brand-dark transition-colors"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-[#EDE8DF] hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center text-brand-dark transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.dish.id)}
                      className="p-2 text-brand-charcoal/40 hover:text-red-700 transition-colors"
                      aria-label="Eliminar item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Form & Checkout */}
            {items.length > 0 && (
              <form
                onSubmit={handleSendWhatsAppOrder}
                className="p-5 sm:p-6 bg-[#EDE8DF] border-t border-[#261A14]/15 font-sans space-y-4"
              >
                {/* Inputs for Delivery */}
                <div className="space-y-2 text-xs">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre completo *"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#261A14]/15 focus:outline-none focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Dirección de entrega en Engativá *"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#261A14]/15 focus:outline-none focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>
                </div>

                {/* Subtotal & Delivery Notes */}
                <div className="pt-2 border-t border-[#261A14]/10">
                  <div className="flex items-center justify-between text-xs text-brand-charcoal/70 mb-1">
                    <span>{getTotalItems} preparaciones seleccionadas</span>
                    <span>Domicilio local</span>
                  </div>
                  <div className="flex items-center justify-between font-bold text-base text-brand-dark">
                    <span>Total estimado</span>
                    <span className="text-lg font-display text-brand-goldDark">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-gold hover:bg-brand-goldLight text-brand-dark py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-glow-gold active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Pedido a WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="w-full text-center text-[11px] text-brand-charcoal/60 hover:text-red-700 py-1"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
