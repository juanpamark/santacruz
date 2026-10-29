"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_DISHES } from "@/constants/dishes";

export default function DishesStage() {
  const levitateClasses = [
    "animate-levitate-1",
    "animate-levitate-2",
    "animate-levitate-3",
    "animate-levitate-4",
  ];

  // Restored balanced configuration:
  // All 4 dishes maintain uniform proportional dimensions (+10% size)
  // Ensures 100% of the 4 dishes remain completely visible on mobile and PC
  const plateConfigs = [
    {
      id: "dish-1",
      zIndex: 10,
      scale: "scale-[1.08] sm:scale-[1.10] lg:scale-[1.10]",
      yOffset: "translate-y-0",
    },
    {
      id: "dish-2",
      zIndex: 30,
      scale: "scale-[1.10] sm:scale-[1.12] lg:scale-[1.12]",
      yOffset: "-translate-y-1.5 sm:-translate-y-2 lg:-translate-y-3",
    },
    {
      id: "dish-3",
      zIndex: 25,
      scale: "scale-[1.09] sm:scale-[1.11] lg:scale-[1.11]",
      yOffset: "-translate-y-1 sm:-translate-y-1.5 lg:-translate-y-2",
    },
    {
      id: "dish-4",
      zIndex: 15,
      scale: "scale-[1.08] sm:scale-[1.10] lg:scale-[1.10]",
      yOffset: "translate-y-0",
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 z-10 -mt-2 sm:-mt-6 md:-mt-8 lg:-mt-12 flex justify-center items-center pointer-events-none select-none">
      {/* 
        Global Ambient Radial Warmth for the Hero Stage
      */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[620px] lg:w-[840px] h-[220px] sm:h-[380px] lg:h-[460px] pointer-events-none rounded-full blur-[70px] sm:blur-[100px] opacity-60 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(197, 160, 89, 0.35) 0%, rgba(138, 92, 42, 0.22) 45%, rgba(18, 18, 18, 0) 74%)",
        }}
        aria-hidden="true"
      />

      {/* 
        Oversized visual dishes clustered and overlapping in the center
        Grazing the baseline of 'RESTAURANTE' without covering the title letters.
        100% Decorative & Atmospheric — No clickable modals on Hero.
      */}
      <div className="relative z-10 flex items-center justify-center -space-x-7 sm:-space-x-11 md:-space-x-15 lg:-space-x-18 overflow-visible py-2 sm:py-4 lg:py-6">
        {HERO_DISHES.map((dish, index) => {
          const config = plateConfigs[index % plateConfigs.length];
          return (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 70, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.18 + index * 0.1,
                type: "spring",
                stiffness: 85,
                damping: 15,
              }}
              className={`relative flex-shrink-0 ${config.scale} ${config.yOffset} transition-all duration-300 pointer-events-none select-none`}
              style={{ zIndex: config.zIndex }}
            >
              {/* 
                Luz cálida ámbar radiando detrás de CADA plato
                Diseñada con gradiente radial circular puro desvanecido a transparente
                para eliminar cualquier artefacto de recuadro/mosaico en Safari iOS.
              */}
              <div
                className="absolute -inset-3 sm:-inset-4 rounded-full pointer-events-none -z-10 opacity-90 transition-opacity"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(225, 170, 55, 0.65) 0%, rgba(184, 115, 51, 0.35) 42%, rgba(18, 18, 18, 0) 68%)",
                }}
                aria-hidden="true"
              />

              {/* Floating Plate with CSS Idle Physics - Purely Decorative */}
              <div
                className={`relative w-36 h-36 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-76 xl:h-76 pointer-events-none ${
                  levitateClasses[index % levitateClasses.length]
                }`}
              >
                <div className="relative w-full h-full pointer-events-none">
                  <Image
                    src={dish.imageUrl}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 260px, 340px"
                    priority
                    className="object-contain select-none pointer-events-none drop-shadow-[0_20px_25px_rgba(0,0,0,0.65)]"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
