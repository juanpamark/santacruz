import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Negro Carbón & Estructura
          dark: "#121212",
          charcoal: "#181818",
          surface: "#1E1A17",
          surfaceLight: "#26221F",

          // Maderas Nobles: Nogal & Espresso
          walnut: "#261A14",
          walnutDark: "#1C130E",
          walnutLight: "#38261E",
          woodAccent: "#4A3328",

          // Acentos Metálicos: Dorado Suave & Bronce
          gold: "#C5A059",
          goldLight: "#E0C58A",
          goldDark: "#9E7B3B",
          bronze: "#8C6A32",

          // Tonos Piedra & Hueso Cálido (Fondos de Lectura)
          bone: "#F5F2EB",
          boneMuted: "#EDE8DF",
          boneDark: "#E2DBD0",
          cream: "#FAF8F5",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      boxShadow: {
        "dish-float": "0 30px 45px -10px rgba(0, 0, 0, 0.65), 0 15px 20px -5px rgba(0, 0, 0, 0.45)",
        "card-luxury": "0 20px 40px -15px rgba(18, 18, 18, 0.12), 0 0 0 1px rgba(197, 160, 89, 0.15)",
        "glow-gold": "0 0 45px -5px rgba(197, 160, 89, 0.35)",
        "glow-pedestal": "0 -20px 50px rgba(0, 0, 0, 0.5)",
      },
      dropShadow: {
        "dish-25d": [
          "0 25px 30px rgba(0, 0, 0, 0.6)",
          "0 45px 45px rgba(0, 0, 0, 0.35)",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
