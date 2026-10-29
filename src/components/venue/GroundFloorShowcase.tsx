"use client";

import React from "react";
import Image from "next/image";
import { Users, Dog, Sparkles, Volume2, HeartHandshake } from "lucide-react";
import { VENUE_IMAGES } from "@/constants/venue";

export default function GroundFloorShowcase() {
  return (
    <section
      id="nivel-1"
      className="px-4 sm:px-8 max-w-6xl mx-auto w-full mb-20 sm:mb-28"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div className="max-w-2xl">
          <span className="text-xs font-sans font-bold tracking-[0.25em] uppercase text-brand-gold">
            Salón Principal • Doble Altura
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F2EB] mt-2 tracking-tight">
            El Latido del Salón
          </h2>
          <p className="text-sm sm:text-base text-[#EDE8DF]/80 mt-2 font-sans">
            Un ambiente amplio, luminoso y cálido donde el confort acústico y la tradición bogotana se encuentran.
          </p>
        </div>

        {/* Pet Friendly & Family Quick Badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-brand-gold font-sans font-bold flex items-center gap-1.5 bg-brand-gold/15 border border-brand-gold/30 px-3.5 py-1.5 rounded-full">
            <Dog className="w-3.5 h-3.5" />
            100% Pet Friendly en Nivel 1
          </span>
          <span className="text-xs text-[#EDE8DF]/70 font-sans flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            <Users className="w-3.5 h-3.5 text-brand-gold" />
            Ideal para Familias
          </span>
        </div>
      </div>

      {/* 
        High-Resolution Venue Photography Display
      */}
      <div className="relative w-full h-[380px] sm:h-[500px] md:h-[580px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 mb-6 bg-[#121212]">
        <Image
          src={VENUE_IMAGES.groundFloorDoubleHeight}
          alt="Vista general en doble altura del salón principal de Santa Cruz Restaurante"
          fill
          priority
          className="object-cover"
        />

        {/* Ambient Subtle Vignette & Warm Floor Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

        {/* Floating In-Image Atmospheric Callout */}
        <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-auto bg-[#121212]/90 backdrop-blur-md border border-brand-gold/30 rounded-2xl p-4 sm:p-5 max-w-lg shadow-2xl">
          <div className="flex items-center gap-2 text-brand-gold text-[10px] font-sans font-extrabold uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Experiencia Gastronómica en Planta Baja
          </div>
          <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2EB]">
            Doble Altura, Luz Cenital y Calidez Artesanal
          </h3>
          <p className="text-xs text-[#EDE8DF]/80 mt-1 leading-relaxed font-sans">
            Tres imponentes lámparas en mimbre tejidas a mano custodian nuestras mesas principales, proyectando una iluminación dorada y envolvente para cada almuerzo.
          </p>
        </div>
      </div>

      {/* 
        Editorial Presentation Panel: Dining Experience & Pet Friendly Welcome
      */}
      <div className="bg-brand-walnut rounded-[2.5rem] p-6 sm:p-10 border border-[#C5A059]/30 shadow-2xl text-[#F5F2EB]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Description */}
          <div className="lg:col-span-7 space-y-4 font-sans">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-[11px] font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              Tu Hogar Gastronómico en Engativá
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F2EB] leading-tight">
              Un espacio creado para compartir en familia y disfrutar sin prisas
            </h3>

            <p className="text-sm sm:text-base text-[#EDE8DF]/85 leading-relaxed font-normal">
              Comer en la planta baja de Santa Cruz es una pausa placentera en el día a día. El techo en doble altura brinda una sensación inigualable de desahogo y frescura, mientras que nuestros muros en listones de roble absorben el ruido ambiental, permitiendo conversaciones amenas y relajadas incluso a salón lleno.
            </p>

            <p className="text-xs sm:text-sm text-[#EDE8DF]/75 leading-relaxed">
              Ya sea para disfrutar el almuerzo del día entre semana o una gran reunión familiar de fin de semana, cada rincón está diseñado para que te sientas tan cómodo como en casa.
            </p>
          </div>

          {/* Highlights & Pet Friendly Badge Box */}
          <div className="lg:col-span-5 flex flex-col gap-3 font-sans">
            {/* Pet Friendly Feature Card */}
            <div className="bg-[#1C1613] rounded-2xl p-4 sm:p-5 border border-brand-gold/30 flex items-start gap-4 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 text-brand-gold flex items-center justify-center flex-shrink-0 border border-brand-gold/40">
                <Dog className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold block">
                  Planta Baja Pet Friendly
                </span>
                <h4 className="font-bold text-sm text-[#F5F2EB] mt-0.5">
                  Tu peludo siempre es bienvenido
                </h4>
                <p className="text-xs text-[#EDE8DF]/75 mt-1 leading-snug">
                  Sabemos que las mascotas son parte de la familia. En nuestro primer piso disponemos de hidratación fresca y espacio cómodo para que te acompañen.
                </p>
              </div>
            </div>

            {/* Acoustic Comfort Card */}
            <div className="bg-[#1C1613] rounded-2xl p-4 sm:p-5 border border-white/10 flex items-start gap-4 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-white/5 text-brand-gold flex items-center justify-center flex-shrink-0 border border-white/10">
                <Volume2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold block">
                  Confort Sonoro
                </span>
                <h4 className="font-bold text-sm text-[#F5F2EB] mt-0.5">
                  Muros acústicos y ladrillo rústico
                </h4>
                <p className="text-xs text-[#EDE8DF]/75 mt-1 leading-snug">
                  Diseño que mitiga la reverberación para que disfrutes de tu almuerzo y charla familiar en un entorno tranquilo y acogedor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Atmosphere Card: Escaleras & Vegetación */}
      <div className="mt-8 bg-[#261A14] rounded-3xl p-6 border border-[#C5A059]/20 shadow-xl flex flex-col sm:flex-row gap-5 items-center">
        <div className="relative w-full sm:w-56 h-48 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10">
          <Image
            src={VENUE_IMAGES.groundFloorStairs}
            alt="Escalera y entrada con plantas y luz natural en Santa Cruz"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <span className="text-[10px] font-sans font-bold text-brand-gold uppercase tracking-wider block">
            Detalle Arquitectónico
          </span>
          <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2EB] mt-1">
            Vegetación y Conexión Fluida entre Pisos
          </h3>
          <p className="text-xs sm:text-sm text-[#EDE8DF]/80 mt-2 leading-relaxed font-sans">
            La transición al segundo nivel se realiza mediante una elegante escalera en madera maciza acompañada de vegetación interior y celosías que filtran la luz natural durante todo el día.
          </p>
        </div>
      </div>
    </section>
  );
}
