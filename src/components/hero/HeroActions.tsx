"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroActions() {
  return (
    <div className="relative z-20 w-full -mt-8 sm:-mt-12 md:-mt-14 lg:-mt-16">
      {/* 
        Pronounced Curved Pedestal (Nogal Wood / Espresso)
        Cuts the dishes visually across their base, creating an architectural stage.
      */}
      <div className="w-full bg-brand-walnut rounded-t-[2.5rem] sm:rounded-t-[4rem] lg:rounded-t-[5rem] px-4 sm:px-8 pt-7 sm:pt-10 lg:pt-8 pb-8 sm:pb-11 lg:pb-9 shadow-glow-pedestal border-t border-brand-gold/25 relative overflow-hidden">
        {/* Subtle Warm Amber Glow Inside the Pedestal */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          {/* Subtle Editorial Hook */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase mb-4 sm:mb-6"
          >
            Gastronomía Tradicional & Cortes al Carbón en Engativá
          </motion.p>

          {/* 
            Balanced 3 Buttons: Menú, Domicilio, Conoce el lugar
            Harmonized Luxury Espresso & Gold Trim:
            Neither looks like a pre-selected active tab.
          */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-5"
          >
            {/* Button 1: Menú in Noble Espresso & Gold Trim */}
            <Link
              href="/menu"
              className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#1C130E] hover:bg-brand-gold text-[#F5F2EB] hover:text-brand-dark border border-brand-gold/60 hover:border-brand-gold font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-glow-gold active:scale-95 inline-flex items-center justify-center"
            >
              Menú
            </Link>

            {/* Button 2: Domicilio in Noble Espresso & Gold Trim */}
            <Link
              href="/menu"
              className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#1C130E] hover:bg-brand-gold text-[#F5F2EB] hover:text-brand-dark border border-brand-gold/60 hover:border-brand-gold font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-glow-gold active:scale-95 inline-flex items-center justify-center"
            >
              Domicilio
            </Link>

            {/* Button 3: Conoce el lugar in Glass & Subtle Border */}
            <Link
              href="/conoce-el-lugar"
              className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-[#EDE8DF] hover:text-white border border-white/20 hover:border-brand-gold font-sans font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-sm active:scale-95 inline-flex items-center justify-center"
            >
              Conoce el lugar
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
