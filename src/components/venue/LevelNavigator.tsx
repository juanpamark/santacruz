"use client";

import React, { useState, useEffect } from "react";
import { Building2, Compass, Users, Sparkles } from "lucide-react";

export default function LevelNavigator() {
  const [activeSection, setActiveSection] = useState("fachada");

  const sections = [
    { id: "fachada", label: "Fachada & Llegada", icon: Building2 },
    { id: "nivel-1", label: "Salón Principal", icon: Compass },
    { id: "nivel-2", label: "Segundo Nivel & Eventos", icon: Users },
    { id: "cotizar-seccion", label: "Cotizar Evento", icon: Sparkles },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-16 sm:top-20 z-30 w-full py-3 bg-[#121212]/90 backdrop-blur-md border-y border-white/10 px-4 sm:px-8 mb-10 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-center sm:justify-start gap-2.5 overflow-x-auto no-scrollbar py-1">
        {sections.map((s) => {
          const Icon = s.icon;
          const isActive = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-sans font-bold tracking-wider whitespace-nowrap transition-all flex items-center gap-2 flex-shrink-0 ${
                isActive
                  ? "bg-brand-gold text-brand-dark shadow-sm"
                  : "bg-white/5 hover:bg-white/10 text-[#EDE8DF] border border-white/10"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
