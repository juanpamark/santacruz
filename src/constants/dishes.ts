import { Dish } from "@/types";

export const HERO_DISHES: Dish[] = [
  {
    id: "hero-dish-1",
    name: "Mojarra Dorada al Carbón",
    shortDescription: "Mojarra fresca crujiente con patacones crocantes, arroz, ensalada y limonada.",
    price: 22000,
    category: "ejecutivos",
    imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793064838/Dise%C3%B1o_sin_t%C3%ADtulo_9.png",
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Plato Insignia",
  },
  {
    id: "hero-dish-2",
    name: "Churrasquito Santa Cruz",
    shortDescription: "Corte jugoso a la brasa con papas rústicas, chimichurri casero, ensalada y limonada.",
    price: 22000,
    category: "ejecutivos",
    imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793064838/Dise%C3%B1o_sin_t%C3%ADtulo_10.png",
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Favorito de la Brasa",
  },
  {
    id: "hero-dish-3",
    name: "Sopa de Ajiaco Santafereño",
    shortDescription: "Sopa insignia con tres papas andinas, pechuga desmechada, mazorca dulce y guascas.",
    price: 9500,
    category: "sopas",
    imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793064840/Dise%C3%B1o_sin_t%C3%ADtulo_11.png",
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Sopa del Día",
  },
  {
    id: "hero-dish-4",
    name: "Pechuga Gratinada al Romero",
    shortDescription: "Pechuga dorada con generoso queso mozzarella gratinado, vegetales salteados, papas y limonada.",
    price: 22000,
    category: "ejecutivos",
    imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793064837/Dise%C3%B1o_sin_t%C3%ADtulo_8.png",
    isAvailableToday: true,
    isDailySpecial: false,
    badge: "Recomendado",
  },
];

export const DAILY_SPECIALS: Dish[] = [
  ...HERO_DISHES,
  {
    id: "special-5",
    name: "Limonada de Coco Artesanal",
    shortDescription: "Limón tahití recién exprimido con crema de coco espesa y hielo frappé cremoso.",
    price: 12000,
    category: "bebidas",
    imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793064838/Dise%C3%B1o_sin_t%C3%ADtulo_9.png",
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Bebida del Día",
  },
];
