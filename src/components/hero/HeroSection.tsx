"use client";

import React from "react";
import HeroTitle from "./HeroTitle";
import DishesStage from "./DishesStage";
import HeroActions from "./HeroActions";
import FallingIngredients from "./FallingIngredients";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Presentación Santa Cruz Restaurante"
      className="relative w-full pt-20 sm:pt-24 lg:pt-20 bg-[#121212] overflow-hidden flex flex-col justify-between lg:min-h-screen lg:max-h-[920px]"
    >
      {/* 
        Semantic SEO H2 (Google compliant via sr-only)
      */}
      <h2 className="sr-only">
        Platos Estrella y Gastronomía Tradicional al Carbón en Santa Cruz Restaurante
      </h2>

      {/* Subtle Warm Amber/Gold Radial Background Ambiance */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] pointer-events-none rounded-full opacity-20 blur-[120px] bg-brand-gold"
        aria-hidden="true"
      />

      {/* Dynamic Falling Ingredients Cascade (Multi-layered 2.5D) */}
      <FallingIngredients />

      {/* Capa 0: Tipografía Mural Masiva (Superior) */}
      <HeroTitle />

      {/* Capa 1: Escenario Flotante 2.5D con los 4 Platos Gigantes Solapados */}
      <DishesStage />

      {/* Capa 2: Pedestal Curvo de Madera Nogal con los 3 Botones */}
      <HeroActions />
    </section>
  );
}
