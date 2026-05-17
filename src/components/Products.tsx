import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Plus, ShoppingBag, X, MessageCircle, ChevronRight, Share2, Star } from "lucide-react";

const WHATSAPP_NUMBER = "+254735008421";

import { productData, Product } from "../data/products";

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
      className="flex-shrink-0 w-[170px] md:w-[200px] group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50"
    >
      <div className="relative h-[170px] md:h-[200px] overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
          onClick={() => onQuickView(product)}
        />
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleLike(product.id); }}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isLiked ? 'bg-red-500 text-white shadow-sm' : 'bg-white/90 backdrop-blur-sm text-gray-300 hover:text-red-500'}`}
        >
          <Heart size={14} fill={isLiked ? "currentColor" : "none"} />
        </button>
      </div>
      
      <div className="p-3">
        <div className="mb-2">
          <h3 
            className="font-bold text-sm text-gray-900 leading-tight line-clamp-1 cursor-pointer hover:text-brand-primary"
            onClick={() => onQuickView(product)}
          >
            {product.name}
          </h3>
          <p className="text-[10px] font-black text-brand-primary/60 uppercase tracking-tighter mt-0.5">{product.brand}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-gray-900 text-sm">Ksh {product.price}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-8 h-8 rounded-xl bg-brand-secondary text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all transform active:scale-90"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="flex flex-col mb-4">
    <div className="flex items-center gap-2 mb-1">
      <div className="w-6 h-[2px] bg-brand-primary" />
      <span className="text-brand-primary font-black uppercase text-[9px] tracking-[0.2em]">{subtitle}</span>
    </div>
    <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 -tracking-tight">{title}</h2>
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
    <div className="mb-16 last:mb-0">
      <div className="flex justify-between items-end mb-6 px-6 max-w-7xl mx-auto">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="hidden md:flex gap-1.5">
           <button 
            onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
            className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center text-gray-300 hover:border-brand-primary hover:text-brand-primary transition-all"
           >
             <ChevronRight className="rotate-180" size={16} />
           </button>
           <button 
            onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
            className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center text-gray-300 hover:border-brand-primary hover:text-brand-primary transition-all"
           >
             <ChevronRight size={16} />
           </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 pb-6 hide-scrollbar snap-x scroll-px-6"
      >
        {products.map((product) => (
          <div key={product.id} className="snap-start">
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
    <section id="products" className="py-16 bg-white overflow-hidden">
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white w-full max-w-[700px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 z-10 transition-all shadow-sm"
              >
                <X size={16} />
              </button>

              <div className="w-full md:w-1/2 h-[240px] md:h-auto bg-gray-50">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-brand-secondary text-brand-primary text-[9px] font-black uppercase tracking-widest rounded-full">
                      {selectedProduct.category}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                    {selectedProduct.fullDescription}
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="font-display font-black text-brand-primary text-3xl">
                    Ksh {selectedProduct.price}
                  </div>
                  <button 
                    onClick={() => onToggleLike(selectedProduct.id)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${likedIds.includes(selectedProduct.id) ? 'bg-red-500 text-white' : 'bg-gray-50 text-gray-300 hover:text-red-500'}`}
                  >
                    <Heart size={18} fill={likedIds.includes(selectedProduct.id) ? "currentColor" : "none"} />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <button 
                    onClick={() => { onAddToCart(selectedProduct); setSelectedProduct(null); }}
                    className="flex items-center justify-center gap-2 bg-brand-primary text-white py-3.5 rounded-xl font-bold hover:btn-gradient transition-all active:scale-95 text-sm"
                  >
                    <ShoppingBag size={18} />
                    Add to Basket
                  </button>
                  <button 
                    onClick={() => handleWhatsAppOrder(selectedProduct)}
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3.5 rounded-xl font-bold hover:bg-black transition-all active:scale-95 text-sm"
                  >
                    <MessageCircle size={18} />
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
