"use client";

import React, { useState } from "react";
import DualStateSlider from "./DualStateSlider";
import { MessageCircle, Check } from "lucide-react";
import { VENUE_INFO } from "@/constants/venue";

export default function VenueQuickQuote() {
  const [eventType, setEventType] = useState("Cumpleaños");
  const [guestCount, setGuestCount] = useState("25 a 40 pers.");
  const [scheduleTime, setScheduleTime] = useState("Almuerzo (12:00 - 3:00 PM)");

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `¡Hola Santa Cruz! Vi el recorrido virtual del Segundo Piso en la página web y quisiera cotizar el espacio para un evento:%0A%0A` +
        `• *Tipo de Evento:* ${eventType}%0A` +
        `• *Cantidad de personas:* ${guestCount}%0A` +
        `• *Horario deseado:* ${scheduleTime}%0A%0A` +
        `¿Tienen disponibilidad y cómo funciona el menú grupal? ¡Muchas gracias!`
    );

    window.open(`https://wa.me/${VENUE_INFO.reservationWhatsapp}?text=${text}`, "_blank");
  };

  return (
    <section
      id="nivel-2"
      className="px-4 sm:px-8 max-w-6xl mx-auto w-full mb-24 sm:mb-32"
    >
      {/* Section Header */}
      <div className="max-w-2xl mb-8 sm:mb-12">
        <span className="text-xs font-sans font-bold tracking-[0.25em] uppercase text-brand-gold">
          Segundo Nivel • Espacio Exclusivo
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F2EB] mt-2 tracking-tight">
          Tu Evento en Privado
        </h2>
        <p className="text-sm sm:text-base text-[#EDE8DF]/80 mt-2 font-sans">
          Un salón reservable de forma exclusiva para celebraciones familiares, grados y almuerzos corporativos con luz cenital natural y privacidad absoluta.
        </p>
      </div>

      {/* Visual DualStateSlider Component (Expanded Prominence) */}
      <div className="mb-14">
        <DualStateSlider />
      </div>

      {/* 
        Tarjeta de Gala Exclusiva: "Reserva del Segundo Piso"
        Enmarcada en Madera Nogal con detalles dorados para cierre de página
      */}
      <div
        id="cotizar-seccion"
        className="bg-brand-walnut rounded-[2.5rem] p-7 sm:p-12 border border-[#C5A059]/30 shadow-2xl relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left: Proposal & Value Props (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-[11px] font-sans font-bold text-brand-gold uppercase tracking-wider block">
                Reserva del Segundo Piso
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F2EB] mt-1">
                Cotiza tu Evento en 3 Clics
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE8DF]/80 mt-2 leading-relaxed font-sans">
                Sin intermediarios ni demoras. Recibe una propuesta directa y personalizada a través de nuestro canal oficial de WhatsApp.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs font-sans text-[#EDE8DF]/90">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Privacidad Total:</strong> Segundo piso cerrado exclusivamente para tu grupo.</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Capacidad:</strong> Hasta 50 personas cómodas en banquete.</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span><strong>Luz Cenital:</strong> Iluminación natural por claraboya y ambientación cálida.</span>
              </div>
            </div>
          </div>

          {/* Right: Selectors & CTA (6 cols) */}
          <div className="lg:col-span-6 bg-[#1C1613] rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5">
            {/* 1. Motivo del Evento */}
            <div>
              <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-gold block mb-2">
                1. Motivo del evento
              </label>
              <div className="flex flex-wrap gap-2">
                {["Cumpleaños", "Corporativo", "Familiar / Grado", "Cena Especial"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setEventType(type)}
                    className={`text-xs px-3.5 py-1.5 rounded-full font-sans font-bold transition-all ${
                      eventType === type
                        ? "bg-brand-gold text-brand-dark shadow-sm"
                        : "bg-white/5 hover:bg-white/10 text-[#EDE8DF]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Cantidad de Personas */}
            <div>
              <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-gold block mb-2">
                2. Número de comensales
              </label>
              <div className="flex flex-wrap gap-2">
                {["15 a 25 pers.", "25 a 40 pers.", "Salón Completo (Hasta 50 pers.)"].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGuestCount(g)}
                    className={`text-xs px-3.5 py-1.5 rounded-full font-sans font-bold transition-all ${
                      guestCount === g
                        ? "bg-brand-gold text-brand-dark shadow-sm"
                        : "bg-white/5 hover:bg-white/10 text-[#EDE8DF]"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Franja Horaria */}
            <div>
              <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-gold block mb-2">
                3. Franja horaria
              </label>
              <div className="flex flex-wrap gap-2">
                {["Almuerzo (12:00 - 3:00 PM)", "Tardeo (3:00 - 5:30 PM)"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setScheduleTime(t)}
                    className={`text-xs px-3.5 py-1.5 rounded-full font-sans font-bold transition-all ${
                      scheduleTime === t
                        ? "bg-brand-gold text-brand-dark shadow-sm"
                        : "bg-white/5 hover:bg-white/10 text-[#EDE8DF]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                onClick={handleWhatsAppQuote}
                className="w-full bg-brand-gold hover:bg-brand-goldLight text-brand-dark py-4 px-6 rounded-full font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-glow-gold active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Cotizar Segundo Piso por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
