"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Sun, Layers } from "lucide-react";
import { VENUE_INFO, VENUE_IMAGES } from "@/constants/venue";

export default function VenueHero() {
  return (
    <section
      id="fachada"
      className="px-4 sm:px-8 max-w-6xl mx-auto w-full mb-20 sm:mb-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left: Text & Badges (5 cols) */}
        <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-gold/15 text-brand-gold px-4 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider border border-brand-gold/25">
            Recorrido Espacial Santa Cruz
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F2EB] tracking-tight leading-[1.08]">
            Una Casa Diseñada para Compartir
          </h2>

          <p className="text-sm sm:text-base text-[#EDE8DF]/80 leading-relaxed font-sans">
            Una propuesta arquitectónica que fusiona la nobleza de la madera, la textura del ladrillo rústico y amplios ventanales en doble altura que inundan de luz cada rincón de nuestro salón.
          </p>

          <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-2">
            <span className="bg-[#261A14] px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold text-[#F5F2EB] border border-[#C5A059]/20 flex items-center gap-1.5 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              {VENUE_INFO.address}
            </span>
            <span className="bg-[#261A14] px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold text-[#F5F2EB] border border-[#C5A059]/20 flex items-center gap-1.5 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-brand-gold" />
              2 Niveles Espaciosos
            </span>
            <span className="bg-[#261A14] px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold text-[#F5F2EB] border border-[#C5A059]/20 flex items-center gap-1.5 shadow-sm">
              <Sun className="w-3.5 h-3.5 text-brand-gold" />
              Luz Cenital Natural
            </span>
          </div>
        </div>

        {/* Right: Imposing Facade Card (7 cols) - Larger image prominence */}
        <div className="lg:col-span-7 relative">
          <div className="relative h-88 sm:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src={VENUE_IMAGES.facade}
              alt="Fachada de Santa Cruz Restaurante con celosías de madera y ventanales"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
              <div>
                <span className="bg-brand-dark/90 text-brand-gold text-[10px] font-sans font-extrabold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md inline-block mb-2 border border-brand-gold/30">
                  Llegada & Fachada Principal
                </span>
                <p className="font-display font-bold text-xl sm:text-2xl text-white">
                  Celosías de Madera & Doble Altura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
