"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroTitle() {
  return (
    <div className="relative w-full text-center select-none pointer-events-none z-10 overflow-hidden pt-4 sm:pt-6 lg:pt-2 pb-0 sm:pb-1">
      {/* 
        Google-Compliant Accessible SEO H1 (sr-only).
        Zero visual clutter, 100% crawlable indexation for local search without cloaking penalty.
      */}
      <h1 className="sr-only">
        Santa Cruz Restaurante | Almuerzos Caseros, Cortes al Carbón y Eventos Privados en Engativá, Bogotá
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4"
      >
        {/* Massive Mural Typography: SANTA CRUZ in Cinzel Serif */}
        <span
          className="font-display font-bold tracking-[0.04em] text-[15vw] sm:text-[13vw] lg:text-[9.5vw] xl:text-[9vw] leading-[0.88] text-[#F5F2EB] uppercase drop-shadow-lg"
          style={{
            textShadow: "0 15px 40px rgba(0, 0, 0, 0.8)",
          }}
        >
          SANTA CRUZ
        </span>

        {/* Subtitle: RESTAURANTE with Wide Letter Spacing */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-semibold text-[3.2vw] sm:text-[2.2vw] lg:text-[1.35vw] tracking-[0.45em] sm:tracking-[0.55em] text-brand-gold uppercase mt-0.5 sm:mt-1 pl-[0.5em]"
        >
          RESTAURANTE
        </motion.span>
      </motion.div>
    </div>
  );
}
