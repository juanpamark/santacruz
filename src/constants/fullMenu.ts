import { Dish } from "@/types";

export interface MenuCategory {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  description: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "almuerzos",
    name: "Almuerzos Caseros",
    shortName: "Caseros",
    iconName: "utensils",
    description: "La tradición bogotana ($15.000). Arma tu almuerzo completo con sopa, principio, proteína y jugo.",
  },
  {
    id: "ejecutivos",
    name: "Platos Ejecutivos",
    shortName: "Ejecutivos",
    iconName: "flame",
    description: "Menú ejecutivo ($22.000): Cortes jugosos, mojarras frescas o pechugas gratinadas con limonada.",
  },
  {
    id: "especiales",
    name: "Platos Especiales",
    shortName: "Especiales",
    iconName: "star",
    description: "Nuestra selección especial ($31.000) y Platos Fuertes: Bandeja paisa, costillas BBQ, churrasco y punta de anca.",
  },
  {
    id: "sopas",
    name: "Sopas & Cremas",
    shortName: "Sopas",
    iconName: "soup",
    description: "Sancocho campesino criollo, ajiaco santafereño tradicional y caldos reconfortantes.",
  },
  {
    id: "bebidas",
    name: "Jugos & Bebidas",
    shortName: "Bebidas",
    iconName: "glass",
    description: "Jugo de mango natural, limonada refrescante y limonada de coco artesanal.",
  },
  {
    id: "postres",
    name: "Postres & Tradición",
    shortName: "Postres",
    iconName: "cake",
    description: "Arroz con leche de la abuela, torta de plátano con queso y delicias caseras.",
  },
];

// High-resolution 4:3 Cloudinary culinary assets
const IMG_CARNE_CRIOLLA = "https://res.cloudinary.com/xdjdubsz/image/upload/v1793253843/Gemini_Generated_Image_glv47kglv47kglv4.jpg";
const IMG_BANDEJA_PAISA = "https://res.cloudinary.com/xdjdubsz/image/upload/v1793253849/Gemini_Generated_Image_r0qfrhr0qfrhr0qf.jpg";
const IMG_SANCOCHO_CRIOLLO = "https://res.cloudinary.com/xdjdubsz/image/upload/v1793253853/Gemini_Generated_Image_odmi7yodmi7yodmi.jpg";
const IMG_MOJARRA_DORADA = "https://res.cloudinary.com/xdjdubsz/image/upload/v1793253859/Gemini_Generated_Image_7t4jyt7t4jyt7t4j.jpg";

export const FULL_MENU: Dish[] = [
  // ==========================================
  // 1. MENÚ DEL DÍA / ALMUERZOS CASEROS ($15.000)
  // ==========================================
  {
    id: "dish-arma-almuerzo",
    name: "Arma tu Almuerzo Casero Completo",
    shortDescription: "Sopa criolla del día + principio a elección + proteína seleccionada + arroz, ensalada y jugo de mango o limonada.",
    price: 15000,
    category: "almuerzos",
    imageUrl: IMG_CARNE_CRIOLLA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Minuta del Día",
  },
  {
    id: "dish-lomo-grille",
    name: "Lomo a la Grillé en Salsa Criolla",
    shortDescription: "Tierno corte de lomo asado a la grillé bañado en salsa criolla, papas al vapor con queso, sopa del día, arroz y jugo natural.",
    price: 15000,
    category: "almuerzos",
    imageUrl: IMG_CARNE_CRIOLLA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Casero del Día",
  },
  {
    id: "dish-pollo-tocineta",
    name: "Pollo en Salsa Criolla y Tocineta",
    shortDescription: "Suprema de pollo tierna en reducción de hogao y tocineta ahumada, papas doradas, sopa de entrada, principio y bebida.",
    price: 15000,
    category: "almuerzos",
    imageUrl: IMG_CARNE_CRIOLLA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Casero del Día",
  },
  {
    id: "dish-higado-encebollado",
    name: "Hígado Encebollado Tradicional",
    shortDescription: "Hígado tierno sofrito con abundante cebolla caramelizada y especias de la casa, sopa de entrada, puré o arvejas y bebida.",
    price: 15000,
    category: "almuerzos",
    imageUrl: IMG_CARNE_CRIOLLA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Casero del Día",
  },
  {
    id: "dish-carne-plancha",
    name: "Carne a la Plancha Casera",
    shortDescription: "Filete de res asado a la plancha, servido con arroz blanco, principio del día, ensalada fresca, sopa y limonada o jugo de mango.",
    price: 15000,
    category: "almuerzos",
    imageUrl: IMG_CARNE_CRIOLLA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Casero del Día",
  },

  // ==========================================
  // 2. MENÚ EJECUTIVO ($22.000 - Incluye Limonada)
  // ==========================================
  {
    id: "dish-churrasquito-ejecutivo",
    name: "Churrasquito Ejecutivo al Carbón",
    shortDescription: "Corte jugoso a la brasa servido con papas doradas, chimichurri artesanal, ensalada fresca de la casa y vaso de limonada natural.",
    price: 22000,
    category: "ejecutivos",
    imageUrl: IMG_CARNE_CRIOLLA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Incluye Limonada",
  },
  {
    id: "dish-mojarra-ejecutiva",
    name: "Mojarra Dorada Ejecutiva",
    shortDescription: "Mojarra fresca dorada y crocante con patacones crujientes, arroz con coco o blanco, ensalada de la casa y limonada.",
    price: 22000,
    category: "ejecutivos",
    imageUrl: IMG_MOJARRA_DORADA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Incluye Limonada",
  },
  {
    id: "dish-pechuga-gratinada-ejecutiva",
    name: "Pechuga Gratinada Ejecutiva",
    shortDescription: "Pechuga tierna dorada cubierta de generoso queso mozzarella gratinado al horno, papas a la francesa y limonada natural.",
    price: 22000,
    category: "ejecutivos",
    imageUrl: IMG_CARNE_CRIOLLA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Incluye Limonada",
  },
  {
    id: "dish-lomo-gratinado-ejecutivo",
    name: "Lomo Gratinado Ejecutivo",
    shortDescription: "Filete de lomo a la plancha bañado con queso fundido gratinado, papas a la francesa, ensalada fresca y vaso de limonada.",
    price: 22000,
    category: "ejecutivos",
    imageUrl: IMG_CARNE_CRIOLLA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Incluye Limonada",
  },

  // ==========================================
  // 3. PLATO FUERTE ($27.000) & PLATOS ESPECIALES ($31.000)
  // ==========================================
  {
    id: "dish-bandeja-paisa",
    name: "Bandeja Paisa Tradicional Santa Cruz",
    shortDescription: "Cazuela de fríjoles campesinos, chicharrón crocante carnudo, carne molida, chorizo artesanal, huevo frito sobre arroz, tajada, arepa y aguacate.",
    price: 27000,
    category: "especiales",
    imageUrl: IMG_BANDEJA_PAISA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Favorito de la Casa",
  },
  {
    id: "dish-chuleta-valluna",
    name: "Chuleta Valluna Tradicional",
    shortDescription: "Gran corte de cerdo apanado crujiente con sazón del Valle, papas a la francesa doradas, arroz blanco y ensalada dulce.",
    price: 27000,
    category: "especiales",
    imageUrl: IMG_BANDEJA_PAISA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Plato Fuerte 27k",
  },
  {
    id: "dish-costillas-bbq",
    name: "Costillas a la BBQ Glaseadas",
    shortDescription: "500g de costillas de cerdo tiernas bañadas en salsa BBQ artesanal ahumada de la casa con papas a la francesa y limonada.",
    price: 31000,
    category: "especiales",
    imageUrl: IMG_BANDEJA_PAISA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Corte Estrella",
  },
  {
    id: "dish-churrasco-especial",
    name: "Churrasco a la Brasa Especial",
    shortDescription: "Generoso corte de churrasco asado al carbón con chimichurri casero, papas rústicas, ensalada fresca y limonada.",
    price: 31000,
    category: "especiales",
    imageUrl: IMG_BANDEJA_PAISA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Favorito de la Brasa",
  },
  {
    id: "dish-punta-anca-especial",
    name: "Punta de Anca Premium",
    shortDescription: "Corte grueso y jugoso a la brasa con borde dorado y crocante, papas a la francesa, ensalada fresca y limonada.",
    price: 31000,
    category: "especiales",
    imageUrl: IMG_BANDEJA_PAISA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Corte Premium",
  },
  {
    id: "dish-mojarra-especial",
    name: "Mojarra Dorada Especial Grande",
    shortDescription: "Mojarra fresca de gran tamaño dorada a la perfección con patacones crocantes gigantes, arroz con coco, ensalada y limonada.",
    price: 31000,
    category: "especiales",
    imageUrl: IMG_MOJARRA_DORADA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Especial del Mar",
  },
  {
    id: "dish-pechuga-gratinada-especial",
    name: "Pechuga Gratinada Especial",
    shortDescription: "Pechuga suprema generosa cubierta de doble queso mozzarella gratinado al romero, vegetales al vapor, papas y limonada.",
    price: 31000,
    category: "especiales",
    imageUrl: IMG_CARNE_CRIOLLA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Recomendado",
  },

  // ==========================================
  // 4. SOPAS DEL DÍA
  // ==========================================
  {
    id: "dish-sancocho-criollo",
    name: "Sancocho Criollo Campesino",
    shortDescription: "Sancocho tradicional de pollo campesino con mazorca dulce, yuca tierna, cilantro, acompañado de arroz blanco, patacón crocante, aguacate y ají casero.",
    price: 15000,
    category: "sopas",
    imageUrl: IMG_SANCOCHO_CRIOLLO,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Sopa Especial",
  },
  {
    id: "dish-sopa-ajiaco",
    name: "Sopa de Ajiaco Santafereño",
    shortDescription: "Sopa insignia bogotana con tres papas andinas, pechuga desmechada, mazorca dulce, alcaparras y notas de guascas frescas.",
    price: 9500,
    category: "sopas",
    imageUrl: IMG_SANCOCHO_CRIOLLO,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Sopa del Día",
  },
  {
    id: "dish-peto-dulce",
    name: "Peto Dulce Bogotano",
    shortDescription: "Preparación tradicional caliente a base de maíz blanco cocido a fuego lento en leche entera con canela y panela.",
    price: 9000,
    category: "sopas",
    imageUrl: IMG_SANCOCHO_CRIOLLO,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Tradición",
  },

  // ==========================================
  // 5. BEBIDAS DEL DÍA
  // ==========================================
  {
    id: "dish-jugo-mango",
    name: "Jugo Natural de Mango",
    shortDescription: "Elaborado con pulpa 100% natural de mango de azúcar, servido bien frío en agua o en leche cremosa.",
    price: 8500,
    category: "bebidas",
    imageUrl: IMG_MOJARRA_DORADA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Bebida del Día",
  },
  {
    id: "dish-limonada-natural",
    name: "Limonada Natural Refrescante",
    shortDescription: "Zumo recién exprimido de limón criollo con agua filtrada y hielo frappé para acompañar tus platos al carbón.",
    price: 7500,
    category: "bebidas",
    imageUrl: IMG_MOJARRA_DORADA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Cítrica",
  },
  {
    id: "dish-limonada-coco",
    name: "Limonada de Coco Artesanal",
    shortDescription: "El clásico refrescante de la costa: zumo de limón tahití, crema de coco espesa y hielo frappé cremoso.",
    price: 12000,
    category: "bebidas",
    imageUrl: IMG_MOJARRA_DORADA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Favorito",
  },

  // ==========================================
  // 6. POSTRES CASEROS
  // ==========================================
  {
    id: "dish-arroz-leche",
    name: "Arroz con Leche de la Abuela",
    shortDescription: "Arroz cocido lentamente en leche entera con canela, leche condensada, uvas pasas y un toque de canela en polvo.",
    price: 9000,
    category: "postres",
    imageUrl: IMG_SANCOCHO_CRIOLLO,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Postre Casero",
  },
  {
    id: "dish-torta-platano",
    name: "Torta de Plátano Maduro y Queso",
    shortDescription: "Bizcocho húmedo tradicional elaborado con plátano maduro horneado y generoso queso campesino derretido.",
    price: 12000,
    category: "postres",
    imageUrl: IMG_CARNE_CRIOLLA,
    isAvailableToday: true,
    isDailySpecial: true,
    badge: "Tradición",
  },
];
