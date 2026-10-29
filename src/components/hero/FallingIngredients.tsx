"use client";

import React from "react";
import Image from "next/image";
import { INGREDIENTS } from "@/constants/ingredients";

interface LightParticle {
  id: string;
  ingredientIndex: number;
  leftPercent: number;
  size: number;
  animationClass: string;
  zIndex: number;
}

// 8 asynchronous, staggered particles. Due to varying durations and delays,
// only 2 to 3 particles ever appear on screen simultaneously, preventing saturation
// while eliminating rigid, predictable repetition.
const ASYNC_PARTICLES: LightParticle[] = [
  {
    id: "particle-tomate-1",
    ingredientIndex: 0, // Tomate
    leftPercent: 6,
    size: 57,
    animationClass: "animate-falling-1",
    zIndex: 5,
  },
  {
    id: "particle-patacon-1",
    ingredientIndex: 4, // Patacón Dorado
    leftPercent: 84,
    size: 64,
    animationClass: "animate-falling-2",
    zIndex: 5,
  },
  {
    id: "particle-limon-1",
    ingredientIndex: 3, // Limón
    leftPercent: 16,
    size: 60,
    animationClass: "animate-falling-3",
    zIndex: 25,
  },
  {
    id: "particle-romero-1",
    ingredientIndex: 2, // Romero
    leftPercent: 78,
    size: 56,
    animationClass: "animate-falling-4",
    zIndex: 25,
  },
  {
    id: "particle-pimienta-1",
    ingredientIndex: 5, // Pimienta
    leftPercent: 92,
    size: 32,
    animationClass: "animate-falling-5",
    zIndex: 5,
  },
  {
    id: "particle-perejil-1",
    ingredientIndex: 1, // Perejil
    leftPercent: 10,
    size: 46,
    animationClass: "animate-falling-6",
    zIndex: 5,
  },
  {
    id: "particle-tomate-2",
    ingredientIndex: 0, // Tomate
    leftPercent: 88,
    size: 52,
    animationClass: "animate-falling-7",
    zIndex: 25,
  },
  {
    id: "particle-romero-2",
    ingredientIndex: 2, // Romero
    leftPercent: 22,
    size: 50,
    animationClass: "animate-falling-8",
    zIndex: 5,
  },
];

export default function FallingIngredients() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10"
      style={{
        maskImage:
          "linear-gradient(to bottom, black 0%, black 75%, transparent 90%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 75%, transparent 90%)",
      }}
    >
      {ASYNC_PARTICLES.map((p) => {
        const ingredient = INGREDIENTS[p.ingredientIndex];

        return (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.leftPercent}%`,
              zIndex: p.zIndex,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            className={`flex items-center justify-center filter drop-shadow-md ${p.animationClass}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={ingredient.imageUrl}
                alt=""
                fill
                sizes="80px"
                className="object-contain select-none pointer-events-none"
                priority={false}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
