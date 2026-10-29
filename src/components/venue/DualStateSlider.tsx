"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { VENUE_IMAGES } from "@/constants/venue";

export default function DualStateSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Prevent native drag of images/text
    e.preventDefault();
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      e.preventDefault();
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  return (
    <div className="w-full select-none">
      {/* Controls & Quick Toggles */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setSliderPosition(0)}
            className={`px-4 py-2 rounded-full text-xs font-sans font-bold transition-all ${
              sliderPosition < 25
                ? "bg-brand-gold text-brand-dark shadow-sm"
                : "bg-white/5 hover:bg-white/10 text-[#EDE8DF] border border-white/10"
            }`}
          >
            1. Salón Preparado (Vacío)
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(100)}
            className={`px-4 py-2 rounded-full text-xs font-sans font-bold transition-all ${
              sliderPosition > 75
                ? "bg-brand-gold text-brand-dark shadow-sm"
                : "bg-white/5 hover:bg-white/10 text-[#EDE8DF] border border-white/10"
            }`}
          >
            2. En Pleno Evento (50 pers.)
          </button>
        </div>

        <span className="text-xs text-[#EDE8DF]/60 font-sans font-medium flex items-center gap-1.5">
          <MoveHorizontal className="w-4 h-4 text-brand-gold animate-pulse" />
          Desliza para comparar la transformación
        </span>
      </div>

      {/* Interactive Dual Slider Frame with Pointer Capture & Touch Action None */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ touchAction: "none", userSelect: "none", WebkitUserSelect: "none" }}
        className="relative w-full h-[380px] sm:h-[490px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 cursor-ew-resize select-none touch-none"
        aria-label="Comparador interactivo de salón vacío vs salón en evento"
      >
        {/* Layer 1: Salón Preparado / Vacío */}
        <div className="absolute inset-0 select-none pointer-events-none">
          <Image
            src={VENUE_IMAGES.secondFloorEmpty}
            alt="Segundo nivel de Santa Cruz preparado con mesas ordenadas y luz cenital"
            fill
            draggable={false}
            className="object-cover select-none pointer-events-none"
            priority
          />
          <div className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-md text-[#F5F2EB] text-[10px] font-sans font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/15 pointer-events-none shadow-md">
            Salón Preparado • Listo para recibirte
          </div>
        </div>

        {/* Layer 2: Salón en Pleno Evento (Clipped Over Top) */}
        <div
          className="absolute inset-0 overflow-hidden select-none pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={VENUE_IMAGES.secondFloorEvent}
            alt="Segundo nivel de Santa Cruz en pleno evento grupal con 50 personas"
            fill
            draggable={false}
            className="object-cover select-none pointer-events-none"
            priority
          />
          <div className="absolute top-4 right-4 bg-brand-walnut/95 backdrop-blur-md text-brand-gold text-[10px] font-sans font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-brand-gold/30 shadow-md pointer-events-none">
            En Pleno Evento • 50 personas cómodas
          </div>
        </div>

        {/* Draggable Divider Line in Gold/Brass */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-brand-gold shadow-[0_0_15px_rgba(197,160,89,0.7)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Brass Drag Puck */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-gold text-brand-dark shadow-2xl flex items-center justify-center border-2 border-[#121212] transition-transform ${
              isDragging ? "scale-110 shadow-glow-gold" : "hover:scale-105"
            }`}
          >
            <MoveHorizontal className="w-5 h-5 text-brand-dark stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
}
