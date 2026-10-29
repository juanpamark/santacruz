"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  CreditCard,
  Banknote,
  QrCode,
  ExternalLink,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import { VENUE_INFO } from "@/constants/venue";

export default function Footer() {
  return (
    <footer
      id="ubicacion-contacto"
      className="bg-[#121212] text-[#F5F2EB] relative pt-16 sm:pt-24 pb-12 px-4 sm:px-8 border-t border-[#C5A059]/20 overflow-hidden"
    >
      {/* Subtle Golden Radial Glow */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 
          1. Showcase of the Official Gold Logo (Prestigious Presentation)
        */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden p-2 shadow-glow-gold border border-brand-gold/30 bg-black flex items-center justify-center mb-6 group">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={VENUE_INFO.officialLogoUrl}
                alt="Logo Oficial Santa Cruz Restaurante Bogotá"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-gold tracking-wider">
            SANTA CRUZ RESTAURANTE
          </h2>
          <p className="text-xs sm:text-sm text-[#EDE8DF]/75 max-w-md mt-2 font-sans">
            Tradición gastronómica, sabor criollo y confort en doble altura. Tu punto de encuentro favorito en Engativá, Bogotá.
          </p>
        </div>

        {/* 
          2. Information Grid: Ubicación, Horarios y Métodos de Pago
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-14 border-b border-white/10 font-sans">
          {/* Column 1: Ubicación & Contacto */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-[#F5F2EB] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-gold" />
              Ubicación y Llegada
            </h3>
            <p className="text-sm text-[#EDE8DF]/80 leading-relaxed">
              <strong className="text-white block">{VENUE_INFO.address}</strong>
              {VENUE_INFO.neighborhood}
              <br />
              {VENUE_INFO.city}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={VENUE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-goldLight transition-colors bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
              >
                Google Maps
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={VENUE_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E2DBD0] hover:text-brand-gold transition-colors bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
              >
                Waze
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={`https://wa.me/${VENUE_INFO.deliveryWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between gap-2.5 bg-brand-walnut hover:bg-brand-gold text-[#F5F2EB] hover:text-brand-dark border border-brand-gold/30 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm active:scale-95"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-brand-gold" />
                  Domicilios:
                </span>
                <span className="font-mono text-brand-goldLight">{VENUE_INFO.deliveryPhoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${VENUE_INFO.reservationWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between gap-2.5 bg-[#1C1613] hover:bg-[#2A1D15] text-[#EDE8DF] hover:text-[#FFFFFF] border border-white/15 hover:border-brand-gold/40 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm active:scale-95"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-brand-gold" />
                  Reservas & Eventos:
                </span>
                <span className="font-mono text-[#F5F2EB]">{VENUE_INFO.reservationPhoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Horarios de Atención */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-[#F5F2EB] flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-gold" />
              Horarios de Cocina
            </h3>
            <p className="text-sm text-[#EDE8DF]/80">
              Servicio de almuerzos caseros, cortes al carbón y atención en salón:
            </p>

            <div className="bg-[#1C1613] rounded-2xl p-4 border border-[#C5A059]/20 space-y-2 text-xs">
              <div className="flex justify-between items-center text-neutral-200">
                <span>Lunes a Domingo</span>
                <span className="font-bold text-brand-gold">11:30 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-neutral-400">
                <span>Segundo Nivel (Eventos)</span>
                <span className="font-semibold text-white">Previa Reserva</span>
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 italic">
              *Los platos del día se preparan frescos cada mañana hasta agotar existencias.
            </p>
          </div>

          {/* Column 3: Métodos de Pago Clarificados */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-[#F5F2EB] flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-brand-gold" />
              Medios de Pago
            </h3>

            {/* Presencial */}
            <div className="bg-[#1C1613] rounded-2xl p-4 border border-[#C5A059]/20 space-y-3">
              <div>
                <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider block mb-1">
                  En el Restaurante (Salón)
                </span>
                <p className="text-xs text-neutral-300 flex items-center gap-1.5 flex-wrap">
                  <Banknote className="w-3.5 h-3.5 text-brand-gold" /> Efectivo
                  <span className="text-neutral-500">•</span>
                  <CreditCard className="w-3.5 h-3.5 text-brand-gold" /> Tarjeta (Datáfono)
                  <span className="text-neutral-500">•</span>
                  <QrCode className="w-3.5 h-3.5 text-brand-gold" /> Nequi / Daviplata / Bre-B
                </p>
              </div>

              {/* Domicilios */}
              <div className="pt-2 border-t border-white/10">
                <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider block mb-1">
                  A Domicilio (Entrega)
                </span>
                <p className="text-xs text-neutral-300 flex items-center gap-1.5 flex-wrap">
                  <Banknote className="w-3.5 h-3.5 text-brand-gold" /> Efectivo
                  <span className="text-neutral-500">•</span>
                  <QrCode className="w-3.5 h-3.5 text-brand-gold" /> Nequi / Daviplata / Bre-B
                </p>
                <div className="mt-1.5 flex items-center gap-1 text-[11px] text-neutral-400">
                  <AlertCircle className="w-3 h-3 text-brand-gold flex-shrink-0" />
                  <span>No se recibe tarjeta física a domicilio.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
          3. Sub-footer & Copyright
        */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4 font-sans">
          <p>© {new Date().getFullYear()} Santa Cruz Restaurante. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Hecho con dedicación en Bogotá, Colombia.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
