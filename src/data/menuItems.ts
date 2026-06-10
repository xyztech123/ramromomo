import type { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Steamed
  {
    id: 's1',
    name: 'Classic Chicken Momo',
    description: 'Hand-folded delicate wrappers filled with minced chicken, coriander, and traditional Himalayan spices.',
    price: 8.5,
    category: 'steamed',
    tag: 'Popular',
    available: true,
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    name: 'Vegan Vegetable Momo',
    description: 'Fresh seasonal vegetables, tofu, and ginger steamed to perfection in a spinach-infused green wrapper.',
    price: 7.5,
    category: 'steamed',
    tag: 'Vegan',
    available: true,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  
  // Pan-Fried (Kothey)
  {
    id: 'f1',
    name: 'Kothey Pork Momo',
    description: 'Half-steamed, half pan-fried momos with a crispy golden bottom and juicy pork filling.',
    price: 9.5,
    category: 'pan-fried',
    tag: "Chef's Pick",
    available: true,
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'f2',
    name: 'Pan-Fried Chicken Momo',
    description: 'Our classic chicken momos seared in an iron skillet for a deeply savory crunch.',
    price: 9.5,
    category: 'pan-fried',
    available: true,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800'
  },
  
  // Specialty
  {
    id: 'sp1',
    name: 'Jhol Momo',
    description: 'Steamed momos drowned in a hot, tangy, and spicy sesame-tomato broth. A winter favorite.',
    price: 11.0,
    category: 'specialty',
    tag: 'New',
    available: true,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sp2',
    name: 'Chilli C-Momo',
    description: 'Fried momos wok-tossed with bell peppers, onions, and our signature sweet & spicy garlic chilli sauce.',
    price: 12.0,
    category: 'specialty',
    tag: 'Popular',
    available: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800'
  },
  
  // Drinks
  {
    id: 'd1',
    name: 'Artisan Coca-Cola',
    description: 'Classic ice-cold Coca-Cola served over crystal clear ice with a fresh lime wedge.',
    price: 3.5,
    category: 'drinks',
    tag: 'Popular',
    available: true,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd2',
    name: 'Himalayan Masala Chai',
    description: 'Traditional spiced sweet tea slowly brewed with cardamom, cinnamon, and ginger.',
    price: 4.5,
    category: 'drinks',
    available: true,
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=800'
  }
];
