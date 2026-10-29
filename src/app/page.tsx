import HeroSection from "@/components/hero/HeroSection";
import DailyHighlights from "@/components/home/DailyHighlights";
import VenueTeaser from "@/components/home/VenueTeaser";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-[#121212]">
      {/* 
        Hero Section (Composición 2.5D):
        - Capa z-0: Tipografía Serif Cinzel "SANTA CRUZ RESTAURANTE" + SEO H1 sr-only
        - Capa z-10: 4 platos gigantes solapados sin etiquetas ni textos
        - Capa z-20: Pedestal curvo de madera nogal con 2 botones ("Domicilio" y "Conoce el lugar")
      */}
      <HeroSection />

      {/* 
        Sección 1: Sugerencias y Platos del Día en Hueso Cálido (#F5F2EB)
      */}
      <DailyHighlights />

      {/* 
        Sección 2: Bento Grid Asimétrico en Madera Oscura (#1C1613)
      */}
      <VenueTeaser />
    </div>
  );
}
