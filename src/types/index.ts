export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'steamed' | 'pan-fried' | 'specialty' | 'drinks';
  tag?: 'Popular' | 'New' | 'Vegan' | "Chef's Pick";
  available: boolean; // prep for future online ordering
  image?: string;
}

export interface CafeInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
  };
}
