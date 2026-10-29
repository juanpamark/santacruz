"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { INGREDIENTS } from "@/constants/ingredients";

interface ParticleConfig {
  id: string;
  ingredientIndex: number;
  leftPercent: number;
  size: number;
  duration: number;
  delay: number;
  initialYPercent: number; // initial vertical spawn offset (0 to 100)
  rotationDeg: number;
  driftX: number; // subtle horizontal sway
  zIndex: number;
  blurClass?: string;
}

export default function FallingIngredients() {
  // Pre-configured deterministic particle attributes for zero hydration mismatch
  const particles: ParticleConfig[] = useMemo(
    () => [
      // Layer 0: Behind Title (z-0, slightly smaller / subtle)
      {
        id: "p-1",
        ingredientIndex: 0, // Tomate
        leftPercent: 8,
        size: 40,
        duration: 15,
        delay: -4,
        initialYPercent: 20,
        rotationDeg: 120,
        driftX: 25,
        zIndex: 0,
      },
      {
        id: "p-2",
        ingredientIndex: 1, // Perejil
        leftPercent: 24,
        size: 26,
        duration: 18,
        delay: -11,
        initialYPercent: 45,
        rotationDeg: 280,
        driftX: -20,
        zIndex: 0,
      },
      {
        id: "p-3",
        ingredientIndex: 5, // Pimienta
        leftPercent: 88,
        size: 22,
        duration: 14,
        delay: -2,
        initialYPercent: 15,
        rotationDeg: 90,
        driftX: 15,
        zIndex: 0,
      },

      // Layer 1: In front of Title, Behind Dishes (z-5)
      {
        id: "p-4",
        ingredientIndex: 3, // Limón
        leftPercent: 16,
        size: 48,
        duration: 13,
        delay: -7,
        initialYPercent: 30,
        rotationDeg: -160,
        driftX: -30,
        zIndex: 5,
      },
      {
        id: "p-5",
        ingredientIndex: 2, // Romero
        leftPercent: 78,
        size: 44,
        duration: 16,
        delay: -9,
        initialYPercent: 60,
        rotationDeg: 190,
        driftX: 20,
        zIndex: 5,
      },
      {
        id: "p-6",
        ingredientIndex: 4, // Patacón
        leftPercent: 84,
        size: 52,
        duration: 12,
        delay: -3,
        initialYPercent: 10,
        rotationDeg: -110,
        driftX: -25,
        zIndex: 5,
      },
      {
        id: "p-7",
        ingredientIndex: 5, // Pimienta
        leftPercent: 32,
        size: 24,
        duration: 17,
        delay: -14,
        initialYPercent: 70,
        rotationDeg: 340,
        driftX: 18,
        zIndex: 5,
      },

      // Layer 2: In front of Dishes (z-32, crisp, floating foreground)
      {
        id: "p-8",
        ingredientIndex: 1, // Perejil
        leftPercent: 38,
        size: 34,
        duration: 14,
        delay: -5,
        initialYPercent: 25,
        rotationDeg: 220,
        driftX: 30,
        zIndex: 32,
      },
      {
        id: "p-9",
        ingredientIndex: 0, // Tomate
        leftPercent: 62,
        size: 50,
        duration: 11,
        delay: -8,
        initialYPercent: 55,
        rotationDeg: -140,
        driftX: -22,
        zIndex: 32,
      },
      {
        id: "p-10",
        ingredientIndex: 2, // Romero
        leftPercent: 48,
        size: 40,
        duration: 15,
        delay: -12,
        initialYPercent: 40,
        rotationDeg: 150,
        driftX: 15,
        zIndex: 32,
      },
      {
        id: "p-11",
        ingredientIndex: 3, // Limón
        leftPercent: 70,
        size: 46,
        duration: 13,
        delay: -1,
        initialYPercent: 5,
        rotationDeg: -200,
        driftX: -18,
        zIndex: 32,
      },
      {
        id: "p-12",
        ingredientIndex: 4, // Patacón
        leftPercent: 12,
        size: 58,
        duration: 10,
        delay: -6,
        initialYPercent: 50,
        rotationDeg: 240,
        driftX: 25,
        zIndex: 32,
      },
      {
        id: "p-13",
        ingredientIndex: 5, // Pimienta
        leftPercent: 56,
        size: 26,
        duration: 16,
        delay: -10,
        initialYPercent: 65,
        rotationDeg: 300,
        driftX: -15,
        zIndex: 32,
      },
    ],
    []
  );

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      style={{
        // Mask out the bottom 18% so elements seamlessly dissolve before reaching the curved wooden pedestal
        maskImage:
          "linear-gradient(to bottom, black 0%, black 72%, transparent 88%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 72%, transparent 88%)",
      }}
    >
      {particles.map((p) => {
        const ingredient = INGREDIENTS[p.ingredientIndex];

        return (
          <motion.div
            key={p.id}
            initial={{
              y: `${p.initialYPercent - 120}vh`,
              x: 0,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: ["-10vh", "90vh"],
              x: [0, p.driftX, -p.driftX * 0.5, p.driftX * 0.8, 0],
              rotate: [0, p.rotationDeg],
              opacity: [0, 0.95, 0.95, 0.4, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: `${p.leftPercent}%`,
              zIndex: p.zIndex,
              // Responsive size variables: normal on mobile, ~35% larger on PC
              ["--size-m" as string]: `${p.size}px`,
              ["--size-d" as string]: `${Math.round(p.size * 1.36)}px`,
            }}
            className="flex items-center justify-center filter drop-shadow-md w-[var(--size-m)] h-[var(--size-m)] lg:w-[var(--size-d)] lg:h-[var(--size-d)]"
          >
            <div className="relative w-full h-full">
              <Image
                src={ingredient.imageUrl}
                alt=""
                fill
                sizes="64px"
                className="object-contain"
                priority={false}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
