export interface IngredientAsset {
  id: string;
  name: string;
  imageUrl: string;
  baseSize: number; // reference size in px
}

export const INGREDIENTS: IngredientAsset[] = [
  {
    id: "tomate",
    name: "Tomate Campesino",
    imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793148440/Dise%C3%B1o_sin_t%C3%ADtulo_12.png",
    baseSize: 52,
  },
  {
    id: "perejil",
    name: "Perejil Fresco",
    imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793148433/Dise%C3%B1o_sin_t%C3%ADtulo_17.png",
    baseSize: 36,
  },
  {
    id: "romero",
    name: "Romero Silvestre",
    imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793148434/Dise%C3%B1o_sin_t%C3%ADtulo_16.png",
    baseSize: 42,
  },
  {
    id: "limon",
    name: "Limón Mandarino",
    imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793148439/Dise%C3%B1o_sin_t%C3%ADtulo_13.png",
    baseSize: 46,
  },
  {
    id: "patacon",
    name: "Patacón Dorado",
    imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793148436/Dise%C3%B1o_sin_t%C3%ADtulo_15.png",
    baseSize: 56,
  },
  {
    id: "pimienta",
    name: "Granos de Pimienta",
    imageUrl: "https://res.cloudinary.com/xdjdubsz/image/upload/v1793148437/Dise%C3%B1o_sin_t%C3%ADtulo_14.png",
    baseSize: 28,
  },
];
