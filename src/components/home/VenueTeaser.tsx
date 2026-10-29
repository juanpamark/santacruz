"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Sun, ShieldCheck, ArrowRight } from "lucide-react";
import { VENUE_IMAGES } from "@/constants/venue";

export default function VenueTeaser() {
  return (
    <section
      id="conoce-el-lugar"
      className="bg-[#1C1613] text-[#F5F2EB] py-20 sm:py-28 px-4 sm:px-8 w-full border-t border-[#C5A059]/15"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-sans font-bold tracking-[0.25em] uppercase text-brand-gold">
              Arquitectura & Hospitalidad
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F2EB] mt-2 tracking-tight">
              Nuestra Casa en Doble Altura
            </h2>
            <p className="text-sm sm:text-base text-[#EDE8DF]/75 mt-3 leading-relaxed font-sans">
              Dos plantas concebidas para la buena mesa: un primer nivel iluminado para el almuerzo diario y un segundo piso reservable para celebraciones privadas.
            </p>
          </div>

          <Link
            href="/conoce-el-lugar"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-wider uppercase text-brand-gold hover:text-brand-goldLight transition-colors pb-1 border-b border-brand-gold/40 flex-shrink-0"
          >
            Ver Recorrido Completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 
          Bento Grid Asimétrico de Lujo
          Tarjeta 1 (65%): Salón Principal & Doble Altura
          Tarjeta 2 (35%): Segundo Nivel para Eventos Privados
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Tarjeta Principal: Doble Altura (7 cols / ~60%) */}
          <div className="lg:col-span-7 bg-[#261A14] rounded-[2.5rem] overflow-hidden border border-[#C5A059]/20 shadow-2xl flex flex-col justify-between group">
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
              <Image
                src={VENUE_IMAGES.groundFloorDoubleHeight}
                alt="Salón principal en doble altura de Santa Cruz Restaurante"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#261A14] via-[#261A14]/20 to-transparent" />
            </div>

            <div className="p-7 sm:p-9 space-y-3">
              <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-brand-gold block">
                Primer Nivel • Comedor Principal
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F2EB]">
                Calidez de Madera, Ladrillo & Mimbre
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE8DF]/80 leading-relaxed font-sans">
                Un entorno espacioso con luz natural cenital, celosías de roble acústico y mesas de madera maciza para disfrutar tus almuerzos en el barrio Álamos, Engativá.
              </p>
            </div>
          </div>

          {/* Tarjeta Vertical: Segundo Piso para Eventos (5 cols / ~40%) */}
          <div className="lg:col-span-5 bg-[#261A14] rounded-[2.5rem] p-7 sm:p-9 border border-[#C5A059]/20 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 group">
                <Image
                  src={VENUE_IMAGES.secondFloorEvent}
                  alt="Segundo piso en pleno evento en Santa Cruz"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#121212]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider text-brand-gold border border-brand-gold/30">
                  Uso Exclusivo
                </div>
              </div>

              <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-brand-gold block mb-1">
                Segundo Nivel • Eventos
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F2EB]">
                Tu Celebración en Privado
              </h3>

              {/* 3 Pilares Visuales */}
              <div className="space-y-3 mt-5 pt-5 border-t border-white/10 text-xs font-sans text-[#EDE8DF]/90">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Privacidad Total:</strong> Salón cerrado para tu grupo.</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Capacidad:</strong> Hasta 50 personas cómodas en banquete.</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                    <Sun className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Luz Cenital:</strong> Claraboya natural y vigas a la vista.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                href="/conoce-el-lugar"
                className="w-full bg-brand-gold hover:bg-brand-goldLight text-brand-dark py-3.5 px-6 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-glow-gold active:scale-95 flex items-center justify-center gap-2"
              >
                Conoce el lugar y cotiza tu evento
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
