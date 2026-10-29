"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { VENUE_INFO } from "@/constants/venue";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const toggleCart = useCartStore((state) => state.toggleCart);

  // Check if current route has a light background (e.g. /menu)
  const isLightPage = pathname === "/menu";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookingClick = () => {
    const msg = encodeURIComponent(
      "¡Hola Santa Cruz! Quisiera consultar disponibilidad para reservar en su restaurante."
    );
    window.open(`https://wa.me/${VENUE_INFO.reservationWhatsapp}?text=${msg}`, "_blank");
  };

  // Determine whether header should present in dark theme (on scroll OR on dark pages)
  const isDarkHeader = scrolled || !isLightPage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-[#121212]/95 backdrop-blur-md border-b border-[#C5A059]/20 py-2.5 sm:py-3 shadow-xl"
          : isLightPage
          ? "bg-[#F5F2EB]/90 backdrop-blur-md py-3.5 sm:py-5 border-b border-[#261A14]/10 shadow-sm"
          : "bg-transparent py-3.5 sm:py-5 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Left: Typographic Logo with Cinzel Serif */}
        <Link href="/" className="flex flex-col group">
          <span
            className={`font-display font-bold text-xl sm:text-2xl tracking-[0.06em] transition-colors duration-300 ${
              isDarkHeader
                ? "text-[#F5F2EB] group-hover:text-brand-gold"
                : "text-brand-dark group-hover:text-brand-goldDark"
            }`}
          >
            SANTA CRUZ
          </span>
          <span
            className={`text-[9px] sm:text-[10px] tracking-[0.38em] font-sans font-semibold uppercase -mt-1 transition-colors duration-300 ${
              isDarkHeader ? "text-brand-gold" : "text-brand-goldDark"
            }`}
          >
            Restaurante
          </span>
        </Link>

        {/* Center: Editorial Navigation Links (Desktop) */}
        <nav
          className={`hidden md:flex items-center gap-9 text-xs sm:text-sm font-sans font-medium tracking-wide transition-colors duration-300 ${
            isDarkHeader ? "text-[#E2DBD0]" : "text-[#2A2A2A]"
          }`}
        >
          <Link
            href="/"
            className={`py-1 transition-colors ${
              pathname === "/"
                ? isDarkHeader
                  ? "text-brand-gold font-semibold"
                  : "text-brand-goldDark font-semibold"
                : isDarkHeader
                ? "hover:text-brand-gold"
                : "hover:text-brand-goldDark"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/menu"
            className={`py-1 transition-colors ${
              pathname === "/menu"
                ? isDarkHeader
                  ? "text-brand-gold font-semibold"
                  : "text-brand-goldDark font-semibold"
                : isDarkHeader
                ? "hover:text-brand-gold"
                : "hover:text-brand-goldDark"
            }`}
          >
            Menú
          </Link>
          <Link
            href="/conoce-el-lugar"
            className={`py-1 transition-colors ${
              pathname === "/conoce-el-lugar"
                ? isDarkHeader
                  ? "text-brand-gold font-semibold"
                  : "text-brand-goldDark font-semibold"
                : isDarkHeader
                ? "hover:text-brand-gold"
                : "hover:text-brand-goldDark"
            }`}
          >
            Conoce el Lugar
          </Link>
          <Link
            href="/#ubicacion-contacto"
            className={`py-1 transition-colors ${
              isDarkHeader
                ? "hover:text-brand-gold"
                : "hover:text-brand-goldDark"
            }`}
          >
            Visítanos
          </Link>
        </nav>

        {/* Right: Cart & Primary Action */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Shopping Cart Icon with Wheels */}
          <button
            onClick={toggleCart}
            aria-label="Abrir carrito de compras"
            className={`relative p-2.5 rounded-full transition-colors active:scale-95 ${
              isDarkHeader
                ? "hover:bg-white/5 text-[#EDE8DF] hover:text-brand-gold"
                : "hover:bg-black/5 text-brand-dark hover:text-brand-goldDark"
            }`}
          >
            <ShoppingCart className="w-5 h-5 stroke-[1.9]" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-dark text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Primary Action Button: Reservar in Muted Soft Gold */}
          <button
            onClick={handleBookingClick}
            className="bg-brand-gold hover:bg-brand-goldLight text-brand-dark px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-glow-gold active:scale-95"
          >
            Reservar
          </button>
        </div>
      </div>
    </header>
  );
}
