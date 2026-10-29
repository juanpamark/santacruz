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

// 5 strategic, lightweight particles positioned away from the center dishes
const LIGHT_PARTICLES: LightParticle[] = [
  {
    id: "particle-tomate",
    ingredientIndex: 0, // Tomate
    leftPercent: 6,
    size: 38,
    animationClass: "animate-falling-1",
    zIndex: 5,
  },
  {
    id: "particle-romero",
    ingredientIndex: 2, // Romero
    leftPercent: 82,
    size: 40,
    animationClass: "animate-falling-2",
    zIndex: 5,
  },
  {
    id: "particle-limon",
    ingredientIndex: 3, // Limón
    leftPercent: 14,
    size: 44,
    animationClass: "animate-falling-3",
    zIndex: 25,
  },
  {
    id: "particle-perejil",
    ingredientIndex: 1, // Perejil
    leftPercent: 78,
    size: 32,
    animationClass: "animate-falling-4",
    zIndex: 25,
  },
  {
    id: "particle-pimienta",
    ingredientIndex: 5, // Pimienta
    leftPercent: 92,
    size: 22,
    animationClass: "animate-falling-5",
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
      {LIGHT_PARTICLES.map((p) => {
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
                sizes="48px"
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
