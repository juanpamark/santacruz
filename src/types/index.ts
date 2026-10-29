export interface Dish {
  id: string;
  name: string;
  shortDescription: string;
  price: number;
  category: 'sopas' | 'almuerzos' | 'ejecutivos' | 'especiales' | 'bebidas' | 'postres';
  imageUrl: string;
  isAvailableToday: boolean;
  isDailySpecial: boolean;
  badge?: string;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  notes?: string;
}

export interface VenueLevel {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}
