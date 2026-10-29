"use client";

import React from "react";
import Image from "next/image";
import { Users, Dog, Volume2, Sparkles } from "lucide-react";
import { VENUE_IMAGES } from "@/constants/venue";

export default function GroundFloorShowcase() {
  return (
    <section
      id="nivel-1"
      className="px-3.5 sm:px-8 max-w-6xl mx-auto w-full mb-16 sm:mb-24"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 sm:mb-7">
        <div className="max-w-2xl">
          <span className="text-xs font-sans font-bold tracking-[0.25em] uppercase text-brand-gold">
            Salón Principal • Doble Altura
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-[#F5F2EB] mt-1.5 tracking-tight">
            El Latido del Salón
          </h2>
          <p className="text-xs sm:text-base text-[#EDE8DF]/80 mt-1.5 font-sans">
            Un ambiente amplio, luminoso y cálido donde el confort acústico y la tradición bogotana se encuentran.
          </p>
        </div>

        {/* Pet Friendly & Family Quick Badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] sm:text-xs text-brand-gold font-sans font-bold flex items-center gap-1.5 bg-brand-gold/15 border border-brand-gold/30 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full">
            <Dog className="w-3.5 h-3.5" />
            100% Pet Friendly en Planta Baja
          </span>
          <span className="text-[11px] sm:text-xs text-[#EDE8DF]/70 font-sans flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full">
            <Users className="w-3.5 h-3.5 text-brand-gold" />
            Espacio Familiar
          </span>
        </div>
      </div>

      {/* 
        High-Resolution Venue Photography Display
        100% Unobstructed & Clean — No intrusive overlay cards or dark curtains on top of the image!
      */}
      <div className="relative w-full h-[320px] sm:h-[460px] md:h-[560px] rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 mb-5 sm:mb-7 bg-[#121212]">
        <Image
          src={VENUE_IMAGES.groundFloorDoubleHeight}
          alt="Vista general en doble altura del salón principal de Santa Cruz Restaurante"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />

        {/* Subtle, elegant corner badge */}
        <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 bg-[#121212]/80 backdrop-blur-md border border-brand-gold/30 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-sans font-bold text-brand-gold flex items-center gap-1.5 shadow-md">
          <Sparkles className="w-3 h-3 text-brand-gold" />
          Doble Altura & Lámparas Artesanales
        </div>
      </div>

      {/* 
        Compact Editorial Card Below Photo (Clean, Balanced & Pet Friendly)
      */}
      <div className="bg-brand-walnut rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 border border-[#C5A059]/30 shadow-xl text-[#F5F2EB]">
        <div className="max-w-3xl mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 font-sans">
            <Dog className="w-3 h-3" />
            Bienvenidas las Mascotas
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F2EB]">
            Doble Altura, Confort Acústico y Encuentro Familiar
          </h3>
          <p className="text-xs sm:text-sm text-[#EDE8DF]/85 mt-2 leading-relaxed font-sans">
            Bajo la iluminación cálida de nuestras lámparas artesanales en mimbre, la planta baja de Santa Cruz ofrece una atmósfera acogedora y desahogada. Diseñado con muros acústicos de roble para conversar tranquilamente con la familia y con hidratación fresca siempre lista para tu mascota.
          </p>
        </div>

        {/* 3 Balanced Micro-Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-sans">
          <div className="bg-[#1C1613] rounded-xl p-3.5 sm:p-4 border border-brand-gold/30 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0">
              <Dog className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#F5F2EB]">100% Pet Friendly</h4>
              <p className="text-[11px] text-[#EDE8DF]/70">Planta baja con agua fresca para tu compañero.</p>
            </div>
          </div>

          <div className="bg-[#1C1613] rounded-xl p-3.5 sm:p-4 border border-white/10 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 text-brand-gold flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#F5F2EB]">Ambiente Familiar</h4>
              <p className="text-[11px] text-[#EDE8DF]/70">Mesas cómodas con luz cenital natural.</p>
            </div>
          </div>

          <div className="bg-[#1C1613] rounded-xl p-3.5 sm:p-4 border border-white/10 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 text-brand-gold flex items-center justify-center flex-shrink-0">
              <Volume2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#F5F2EB]">Confort Acústico</h4>
              <p className="text-[11px] text-[#EDE8DF]/70">Muros en listones de roble que absorben el ruido.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Atmosphere Card: Escaleras & Vegetación */}
      <div className="mt-5 sm:mt-7 bg-[#261A14] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#C5A059]/20 shadow-lg flex flex-col sm:flex-row gap-4 sm:gap-5 items-center">
        <div className="relative w-full sm:w-48 h-36 sm:h-40 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 border border-white/10">
          <Image
            src={VENUE_IMAGES.groundFloorStairs}
            alt="Escalera y entrada con plantas y luz natural en Santa Cruz"
            fill
            sizes="(max-width: 640px) 100vw, 200px"
            className="object-cover"
          />
        </div>
        <div>
          <span className="text-[10px] font-sans font-bold text-brand-gold uppercase tracking-wider block">
            Detalle Arquitectónico
          </span>
          <h3 className="font-display font-bold text-sm sm:text-base text-[#F5F2EB] mt-0.5">
            Vegetación y Conexión Fluida entre Pisos
          </h3>
          <p className="text-xs text-[#EDE8DF]/80 mt-1.5 leading-relaxed font-sans">
            La transición al segundo nivel se realiza mediante una elegante escalera en madera maciza acompañada de vegetación interior y celosías que filtran la luz natural durante todo el día.
          </p>
        </div>
      </div>
    </section>
  );
}
