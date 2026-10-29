import React from "react";
import LevelNavigator from "@/components/venue/LevelNavigator";
import VenueHero from "@/components/venue/VenueHero";
import GroundFloorShowcase from "@/components/venue/GroundFloorShowcase";
import VenueQuickQuote from "@/components/venue/VenueQuickQuote";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { VENUE_INFO } from "@/constants/venue";

export const metadata = {
  title: "Conoce el Lugar | Arquitectura y Salón de Eventos Santa Cruz Restaurante Bogotá",
  description:
    "Descubre los dos niveles de Santa Cruz Restaurante en Engativá. Techos de doble altura, lámparas artesanales tejidas, luz cenital y salón exclusivo para eventos privados.",
};

export default function VenuePage() {
  return (
    <div className="w-full bg-[#121212] text-[#F5F2EB] pt-24 sm:pt-32 flex flex-col">
      {/* 
        Google SEO Semantic H1
      */}
      <h1 className="sr-only">
        Conoce Santa Cruz Restaurante | Arquitectura en Doble Altura y Salón de Eventos en Engativá, Bogotá
      </h1>

      {/* Sticky Floor Navigator without technical numbers */}
      <LevelNavigator />

      {/* Fachada y Llegada */}
      <VenueHero />

      {/* Salón Principal con Hotspots Interactivos */}
      <GroundFloorShowcase />

      {/* Segundo Nivel con Dual-State Slider y Tarjeta de Gala */}
      <VenueQuickQuote />

      {/* Bottom Visit Invitation Bar */}
      <section className="bg-brand-walnut border-t border-[#C5A059]/20 py-16 px-4 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-brand-gold">
            Te Esperamos en Engativá
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F5F2EB]">
            ¿Quieres vivir la experiencia en persona?
          </h3>
          <p className="text-sm text-[#EDE8DF]/80 font-sans">
            Visítanos en la <strong>{VENUE_INFO.address}</strong> de lunes a domingo de 11:30 AM a 5:00 PM o reserva con antelación.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={VENUE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold hover:bg-brand-goldLight text-brand-dark px-7 py-3.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-glow-gold active:scale-95 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Cómo Llegar (Google Maps)
            </a>

            <Link
              href="/menu"
              className="bg-transparent hover:bg-white/5 text-[#F5F2EB] px-7 py-3.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider border border-brand-gold/40 hover:border-brand-gold transition-all shadow-sm active:scale-95 flex items-center gap-2"
            >
              Ver Menú Completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
