export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  tags: string[];
}

export const productData: { [key: string]: Product[] } = {
  jaba: [
    {
      id: 1,
      name: "Classic Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Authentic, energizing experience that keeps you sharp for hours.",
      fullDescription: "The pure essence of khat. Crafted with premium leaves for an authentic, energizing experience that keeps you sharp for hours. A traditional favorite reinvented for the modern palate.",
      price: 250,
      image: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=600",
      tags: ["Classic", "Energy"]
    },
    {
      id: 2,
      name: "Lemon Zing Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Infused with Mediterranean lemon zest for a refreshing kick.",
      fullDescription: "Our signature jaba juice infused with Mediterranean lemon zest. The perfect balance of bitter and sour for a refreshing kick that awakens the senses.",
      price: 280,
      image: "https://images.unsplash.com/photo-1523363342553-61fc072a2455?q=80&w=600",
      tags: ["Refreshing", "Zesty"]
    },
    {
      id: 3,
      name: "Berry Kush Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "A wild blend of forest berries with natural energy.",
      fullDescription: "A wild blend of forest berries mixed with the natural energy of jaba. Sweet, tart, and incredibly invigorating for any time of day.",
      price: 300,
      image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=600",
      tags: ["Sweet", "Fruity"]
    },
    {
      id: 4,
      name: "Ginger Blast Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Ultimate health-meets-energy tonic with double strength ginger.",
      fullDescription: "The ultimate health-meets-energy tonic. Double-strength ginger juice extracts combined with our premium jaba base for a spicy, healthy lift.",
      price: 280,
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600",
      tags: ["Immunity", "Spicy"]
    }
  ],
  moratina: [
    {
      id: 7,
      name: "Classic Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Refined non-alcoholic version of the tradition.",
      fullDescription: "A refined, non-alcoholic version of the traditional Kenyan classic. Deep, rich, and sophisticated with notes of roasted honey and heritage.",
      price: 450,
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=600",
      tags: ["Heritage", "Premium"]
    },
    {
      id: 10,
      name: "Honey Gold Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Liquid gold sweetness with a heritage base.",
      fullDescription: "Premium Moratina base infused with sustainably sourced honey. A smoother, sweeter take on the classic experience.",
      price: 500,
      image: "https://images.unsplash.com/photo-1514361892635-6b07eba1aa53?q=80&w=600",
      tags: ["Sweet", "Smooth"]
    }
  ],
  natural: [
    {
      id: 8,
      name: "Hibiscus High",
      brand: "Freshly",
      category: "Natural Juice",
      description: "Cold-brewed hibiscus with a hint of lime and mint.",
      fullDescription: "Cold-brewed hibiscus with a hint of lime and mint. A floral explosion that stays with you, packed with antioxidants and natural freshness.",
      price: 200,
      image: "https://images.unsplash.com/photo-1556761175-5973cf0f32e7?q=80&w=600",
      tags: ["Floral", "Antioxidant"]
    },
    {
      id: 9,
      name: "Baobab Bliss",
      brand: "Wild",
      category: "Natural Juice",
      description: "Superfood in a bottle. Tangy baobab and honey.",
      fullDescription: "Superfood in a bottle. Tangy baobab fruit blended with wild honey and vanilla for a creamy, nutritious delight that fuels your body.",
      price: 350,
      image: "https://images.unsplash.com/photo-1523362628242-4dc5820061fa?q=80&w=600",
      tags: ["Superfood", "Creamy"]
    },
    {
      id: 11,
      name: "Passion Punch",
      brand: "Coastal",
      category: "Natural Juice",
      description: "Intense passion fruit with a tropical twist.",
      fullDescription: "A vibrant blend of coastal passion fruits. Sharp, sweet, and perfectly chilled for Kenya's sunny afternoons.",
      price: 180,
      image: "https://images.unsplash.com/photo-1589733902251-6f6368d18440?q=80&w=600",
      tags: ["Tropical", "Vibrant"]
    }
  ]
};

export const allProducts = Object.values(productData).flat();
