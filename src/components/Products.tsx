import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Plus, ShoppingBag, X, MessageCircle, ChevronRight, Share2, Star } from "lucide-react";

const WHATSAPP_NUMBER = "+254735008421";

const productData: { [key: string]: Product[] } = {
  jaba: [
    {
      id: 1,
      name: "Original Jaba Juice",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Authentic, energizing experience that keeps you sharp for hours.",
      fullDescription: "The pure essence of khat. Crafted with premium leaves for an authentic, energizing experience that keeps you sharp for hours. A traditional favorite reinvented for the modern palate.",
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=1000&auto=format&fit=crop",
      price: 250,
      tags: ["Energizing", "Pure"],
    },
    {
      id: 2,
      name: "Lemon Zing Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Infused with Mediterranean lemon zest for a refreshing kick.",
      fullDescription: "Our signature jaba juice infused with Mediterranean lemon zest. The perfect balance of bitter and sour for a refreshing kick that awakens the senses.",
      image: "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?q=80&w=1000&auto=format&fit=crop",
      price: 280,
      tags: ["Zesty", "Refreshing"],
    },
    {
      id: 3,
      name: "Berry Kush Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "A wild blend of forest berries with natural energy.",
      fullDescription: "A wild blend of forest berries mixed with the natural energy of jaba. Sweet, tart, and incredibly invigorating for any time of day.",
      image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=1000&auto=format&fit=crop",
      price: 300,
      tags: ["Fruit", "Vitality"],
    },
    {
      id: 4,
      name: "Ginger Blast Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Ultimate health-meets-energy tonic with double strength ginger.",
      fullDescription: "The ultimate health-meets-energy tonic. Double-strength ginger juice extracts combined with our premium jaba base for a spicy, healthy lift.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000&auto=format&fit=crop",
      price: 280,
      tags: ["Immunity", "Spicy"],
    },
  ],
  moratina: [
    {
      id: 7,
      name: "Classic Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Refined non-alcoholic version of the tradition.",
      fullDescription: "A refined, non-alcoholic version of the traditional Kenyan classic. Deep, rich, and sophisticated with notes of roasted honey and heritage.",
      image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=600&auto=format&fit=crop",
      price: 350,
      tags: ["Heritage", "Rich"],
    },
    {
      id: 10,
      name: "Honey Gold Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Liquid gold sweetness with a heritage base.",
      fullDescription: "Premium Moratina base infused with sustainably sourced honey. A smoother, sweeter take on the classic experience.",
      image: "https://images.unsplash.com/photo-1582298538104-fe2e74274c10?q=80&w=1000&auto=format&fit=crop",
      price: 380,
      tags: ["Sweet", "Natural"],
    },
  ],
  natural: [
    {
      id: 8,
      name: "Hibiscus High",
      brand: "Freshly",
      category: "Natural Juice",
      description: "Cold-brewed hibiscus with a hint of lime and mint.",
      fullDescription: "Cold-brewed hibiscus with a hint of lime and mint. A floral explosion that stays with you, packed with antioxidants and natural freshness.",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop",
      price: 220,
      tags: ["Antioxidant", "Floral"],
    },
    {
      id: 9,
      name: "Baobab Bliss",
      brand: "Wild",
      category: "Natural Juice",
      description: "Superfood in a bottle. Tangy baobab and honey.",
      fullDescription: "Superfood in a bottle. Tangy baobab fruit blended with wild honey and vanilla for a creamy, nutritious delight that fuels your body.",
      image: "https://images.unsplash.com/photo-1600271886391-fc54930145c3?q=80&w=600&auto=format&fit=crop",
      price: 280,
      tags: ["Superfood", "Tangy"],
    },
    {
      id: 11,
      name: "Passion Punch",
      brand: "Coastal",
      category: "Natural Juice",
      description: "Intense passion fruit with a tropical twist.",
      fullDescription: "A vibrant blend of coastal passion fruits. Sharp, sweet, and perfectly chilled for Kenya's sunny afternoons.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
      price: 240,
      tags: ["Tropical", "Vibrant"],
    }
  ]
};

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  price: number;
  tags: string[];
}

const ProductCard: React.FC<{
  product: Product;
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
  isLiked: boolean;
  onToggleLike: (id: number) => void;
}> = ({ product, onAddToCart, onQuickView, isLiked, onToggleLike }) => {
  return (
    <motion.div 
      layout
      className="flex-shrink-0 w-[240px] md:w-[280px] group bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-500 border border-gray-100"
    >
      <div className="relative h-[240px] md:h-[280px] overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
          onClick={() => onQuickView(product)}
        />
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleLike(product.id); }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isLiked ? 'bg-red-500 text-white shadow-lg' : 'bg-white/80 backdrop-blur-sm text-gray-400 hover:text-red-500'}`}
        >
          <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
        </button>
        <div className="absolute bottom-4 left-4 flex gap-1">
          {product.tags.slice(0, 1).map(tag => (
            <span key={tag} className="px-2 py-1 bg-brand-primary/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-display font-bold text-lg text-gray-900 leading-tight line-clamp-1">{product.name}</h3>
            <span className="text-[10px] font-black text-brand-primary/40 uppercase tracking-tighter">{product.brand}</span>
          </div>
          <p className="text-gray-400 text-xs line-clamp-1 uppercase tracking-wider font-semibold">{product.category}</p>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display font-black text-brand-primary text-xl">Ksh {product.price}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-10 h-10 rounded-2xl bg-brand-secondary text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all transform active:scale-95"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="flex flex-col mb-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-[2px] bg-brand-primary" />
      <span className="text-brand-primary font-black uppercase text-[10px] tracking-[0.3em]">{subtitle}</span>
    </div>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 -tracking-tight">{title}</h2>
  </div>
);

const HorizontalCollection: React.FC<{
  title: string;
  subtitle: string;
  products: Product[];
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
  likedIds: number[];
  onToggleLike: (id: number) => void;
}> = ({ title, subtitle, products, onAddToCart, onQuickView, likedIds, onToggleLike }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-20 last:mb-0">
      <div className="flex justify-between items-end mb-8 px-6 max-w-7xl mx-auto">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="hidden md:flex gap-2">
           <button 
            onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
            className="w-10 h-10 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:border-brand-primary hover:text-brand-primary transition-all"
           >
             <ChevronRight className="rotate-180" size={20} />
           </button>
           <button 
            onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
            className="w-10 h-10 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:border-brand-primary hover:text-brand-primary transition-all"
           >
             <ChevronRight size={20} />
           </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 pb-8 hide-scrollbar snap-x scroll-px-6 md:px-[calc((100vw-min(1280px,calc(100vw-3rem)))/2)]"
      >
        {products.map((product) => (
          <div key={product.id} className="snap-start first:pl-0">
            <ProductCard 
              product={product} 
              onAddToCart={onAddToCart} 
              onQuickView={onQuickView}
              isLiked={likedIds.includes(product.id)}
              onToggleLike={onToggleLike}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProductsProps {
  onAddToCart: (p: any) => void;
  likedIds: number[];
  onToggleLike: (id: number) => void;
}

export default function Products({ onAddToCart, likedIds, onToggleLike }: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeBrand, setActiveBrand] = useState<string>("All Brands");

  const brands = ["All Brands", ...new Set(Object.values(productData).flat().map(p => p.brand))];

  const filterProducts = (products: Product[]) => {
    if (activeBrand === "All Brands") return products;
    return products.filter(p => p.brand === activeBrand);
  };

  const handleWhatsAppOrder = (product: Product) => {
    const message = encodeURIComponent(`Hi Just It! I want to order ${product.name} (Ksh ${product.price}).`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand-primary font-black uppercase text-xs tracking-[0.4em] mb-4 block">Our Shop</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            Refresh Your <span className="text-brand-primary italic">Vibe.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Partnering with premium brands to bring you the best African-inspired refreshments.
          </p>
        </motion.div>

        {/* Brand Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {brands.map(brand => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-6 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                activeBrand === brand 
                  ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                  : "bg-gray-50 text-gray-400 hover:bg-gray-100"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <HorizontalCollection 
        title="Jaba Collection" 
        subtitle="Energy & Focus"
        products={filterProducts(productData.jaba)} 
        onAddToCart={onAddToCart}
        onQuickView={setSelectedProduct}
        likedIds={likedIds}
        onToggleLike={onToggleLike}
      />

      <HorizontalCollection 
        title="Moratina Collection" 
        subtitle="Heritage Refined"
        products={filterProducts(productData.moratina)} 
        onAddToCart={onAddToCart}
        onQuickView={setSelectedProduct}
        likedIds={likedIds}
        onToggleLike={onToggleLike}
      />

      <HorizontalCollection 
        title="Natural Juice" 
        subtitle="Pure Goodness"
        products={filterProducts(productData.natural)} 
        onAddToCart={onAddToCart}
        onQuickView={setSelectedProduct}
        likedIds={likedIds}
        onToggleLike={onToggleLike}
      />

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-md"
            />
            
            <motion.div 
              layoutId={`product-${selectedProduct.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-[900px] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 z-10 transition-all shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-gray-50 flex items-center justify-center">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-brand-secondary text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                      {selectedProduct.category}
                    </span>
                    <div className="flex text-brand-gold">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                    </div>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {selectedProduct.fullDescription}
                  </p>
                </div>

                <div className="flex items-center gap-6 mb-10">
                  <div className="font-display font-black text-brand-primary text-4xl">
                    Ksh {selectedProduct.price}
                  </div>
                  <div className="w-px h-10 bg-gray-100" />
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    In Stock <br />
                    <span className="text-green-500 text-[10px]">Fresh Batch</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => { onAddToCart(selectedProduct); setSelectedProduct(null); }}
                    className="flex items-center justify-center gap-3 bg-brand-primary text-white py-4 rounded-2xl font-bold hover:btn-gradient transition-all shadow-lg shadow-brand-primary/20 active:scale-95"
                  >
                    <ShoppingBag size={20} />
                    Add to Basket
                  </button>
                  <button 
                    onClick={() => handleWhatsAppOrder(selectedProduct)}
                    className="flex items-center justify-center gap-3 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all active:scale-95"
                  >
                    <MessageCircle size={20} />
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
