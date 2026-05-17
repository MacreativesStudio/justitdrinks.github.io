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
      fullDescription: "The pure essence of khat. Crafted with premium leaves for an authentic, energizing experience that keeps you sharp for hours. A traditional favorite reinvented for the modern lifestyle.",
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
    },
    {
      id: 5,
      name: "Mint Refresh Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Cooling mint infusion with peppery jaba notes.",
      fullDescription: "Premium jaba blended with cooling Kenyan spearmint. Perfect for hot afternoons, offering both energy and refreshment in every sip.",
      price: 270,
      image: "https://images.unsplash.com/photo-1535228145752-4a6145ff2d4d?q=80&w=600",
      tags: ["Cooling", "Refreshing"]
    },
    {
      id: 6,
      name: "Honey Ginger Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Smooth energy with natural honey sweetness.",
      fullDescription: "Premium jaba with wildflower honey and ginger spice. A smoother, naturally sweet energy boost that's gentle on the stomach.",
      price: 290,
      image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?q=80&w=600",
      tags: ["Sweet", "Immunity"]
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
    },
    {
      id: 12,
      name: "Spiced Heritage Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Traditional recipe with aromatic spices.",
      fullDescription: "Our classic Moratina enhanced with carefully selected spices like cardamom, cinnamon, and clove. A warm, sophisticated sip that honors tradition.",
      price: 480,
      image: "https://images.unsplash.com/photo-1523361044551-f06eec6ba0da?q=80&w=600",
      tags: ["Spiced", "Premium"]
    },
    {
      id: 13,
      name: "Vanilla Cream Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Smooth and creamy Moratina experience.",
      fullDescription: "Premium Moratina blended with Madagascar vanilla and a hint of cream. Rich, velvety, and absolutely luxurious.",
      price: 520,
      image: "https://images.unsplash.com/photo-1516432491912-816faf48a1ca?q=80&w=600",
      tags: ["Creamy", "Luxury"]
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
    },
    {
      id: 14,
      name: "Mango Sunrise",
      brand: "Tropical",
      category: "Natural Juice",
      description: "Sweet, ripe mango with a touch of turmeric.",
      fullDescription: "Pressed from sun-ripened Kenyan mangoes with a hint of golden turmeric. A naturally sweet, nutrient-rich juice that glows like sunrise.",
      price: 220,
      image: "https://images.unsplash.com/photo-1518444065514-ced96e17c495?q=80&w=600",
      tags: ["Fruity", "Anti-inflammatory"]
    },
    {
      id: 15,
      name: "Citrus Detox",
      brand: "Pure",
      category: "Natural Juice",
      description: "Cleansing blend of orange, lemon, and grapefruit.",
      fullDescription: "A powerful citrus blend with orange, lemon, and grapefruit. High in vitamin C, perfect for cleansing and energizing your system naturally.",
      price: 210,
      image: "https://images.unsplash.com/photo-1570092819352-8e0b8bf5e21a?q=80&w=600",
      tags: ["Citrus", "Detox"]
    },
    {
      id: 16,
      name: "Coconut Bliss",
      brand: "Paradise",
      category: "Natural Juice",
      description: "Fresh young coconut water with pineapple.",
      fullDescription: "Pure young coconut water with fresh pineapple juice. Naturally hydrating, electrolyte-rich, and perfect for post-workout recovery.",
      price: 240,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600",
      tags: ["Hydrating", "Tropical"]
    }
  ]
};

export const allProducts = Object.values(productData).flat();
