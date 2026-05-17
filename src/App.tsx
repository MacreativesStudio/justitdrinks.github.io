import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { allProducts } from "./data/products";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ArrowUp, ShoppingBag, X, MessageCircle, ExternalLink, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const WHATSAPP_NUMBER = "254735008421";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [likedIds, setLikedIds] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) setLikedIds(JSON.parse(savedWishlist));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleLike = (id: number) => {
    setLikedIds(prev => {
      const next = prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
      localStorage.setItem('wishlist', JSON.stringify(next));
      return next;
    });
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    const message = `🍹 *NEW ORDER — JUST IT*%0A%0A` + 
      `Customer: Guest User%0A` +
      `━━━━━━━━━━━━━━━%0A%0A` + 
      cart.map(item => `🧃 *${item.name}*%0AQty: ${item.quantity}%0APrice: Ksh ${item.price * item.quantity}`).join('%0A%0A') + 
      `%0A%0A━━━━━━━━━━━━━━━%0A%0A` +
      `*TOTAL: Ksh ${cartTotal}*%0A%0A` +
      `Delivery/Pickup:%0APending confirmation%0A%0A` +
      `Thank you for ordering from JUST IT 🌿`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-brand-primary selection:text-white bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[70] origin-left"
        style={{ scaleX }}
      />

      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenWishlist={() => setIsWishlistOpen(true)}
        wishlistCount={likedIds.length} 
      />
      
      <main>
        <Hero />
        <About />
        <Products 
          onAddToCart={addToCart} 
          likedIds={likedIds} 
          onToggleLike={toggleLike}
        />
        <Features />
        <Testimonials />
        
        {/* The Vibe Section */}
        <section className="py-16 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-brand-primary" />
                  <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-[10px]">Real Moments</span>
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">The Just It <span className="text-brand-primary italic">Vibe.</span></h2>
              </div>
              <a href="#" className="flex items-center gap-2 text-sm font-bold text-gray-900 group">
                Follow @justit_kenya 
                <div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <ExternalLink size={14} />
                </div>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
              <div className="col-span-1 rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100">
                <img src="https://images.unsplash.com/photo-1523363342553-61fc072a2455?q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="vibe moment 1" />
              </div>
              <div className="col-span-1 md:col-span-2 row-span-2 rounded-[40px] overflow-hidden relative group bg-gray-50 border border-gray-100">
                <img src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="vibe main" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  <p className="text-white font-display font-bold text-2xl italic">Pure African Goodness.</p>
                </div>
              </div>
              <div className="col-span-1 rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100">
                <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="vibe moment 2" />
              </div>
              <div className="col-span-1 rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100">
                <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="vibe moment 3" />
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[80]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[90] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 tracking-tight">Your Bag</h2>
                  <p className="text-[10px] uppercase font-black tracking-widest text-brand-primary mt-1">Ready for refreshment</p>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-3 bg-white hover:bg-gray-100 rounded-2xl transition-all border border-gray-200">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-200">
                      <ShoppingBag size={40} />
                    </div>
                    <p className="text-gray-400 font-medium italic">Your bag is feeling empty...</p>
                    <button onClick={() => setIsCartOpen(false)} className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold text-sm btn-gradient">Discover Drinks</button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                         <div className="w-full h-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">JI</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Quantity: {item.quantity}</p>
                        <p className="text-sm font-black text-gray-900 mt-2">Ksh {item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 bg-gray-50/50 border-t border-gray-100 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Subtotal</span>
                    <span className="text-2xl font-black text-gray-900">Ksh {cartTotal}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-brand-primary/30 transition-all btn-gradient"
                  >
                    <MessageCircle size={20} />
                    Checkout via WhatsApp
                  </button>
                  <p className="text-center text-[10px] uppercase font-black tracking-widest text-gray-400">Secure Order Verification</p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Wishlist Drawer */}
      <AnimatePresence>
        {isWishlistOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWishlistOpen(false)}
              className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[80]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[90] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 tracking-tight">Your Wishlist</h2>
                  <p className="text-[10px] uppercase font-black tracking-widest text-brand-primary mt-1">Saved for later</p>
                </div>
                <button onClick={() => setIsWishlistOpen(false)} className="p-3 bg-white hover:bg-gray-100 rounded-2xl transition-all border border-gray-200">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                {likedIds.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-200">
                      <Heart size={40} />
                    </div>
                    <p className="text-gray-400 font-medium italic">Empty wishlist...</p>
                    <button onClick={() => setIsWishlistOpen(false)} className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold text-sm btn-gradient">Favorite some Drinks</button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {allProducts.filter(p => likedIds.includes(p.id)).map(product => (
                      <div key={product.id} className="flex gap-4 group">
                        <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                           <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-gray-900">{product.name}</h4>
                            <button onClick={() => toggleLike(product.id)} className="text-red-500">
                              <Heart size={16} fill="currentColor" />
                            </button>
                          </div>
                          <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{product.brand}</p>
                          <p className="text-sm font-black text-gray-900 mt-2">Ksh {product.price}</p>
                          <button 
                            onClick={() => { addToCart({ id: product.id, name: product.name, price: product.price }); setIsWishlistOpen(false); setIsCartOpen(true); }}
                            className="text-brand-primary text-[10px] font-black uppercase tracking-widest mt-2 hover:underline"
                          >
                            Add to Bag
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-2xl z-[70] hover:bg-brand-primary transition-all active:scale-90"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}
