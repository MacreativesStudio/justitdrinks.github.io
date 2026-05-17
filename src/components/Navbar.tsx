import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Heart, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  wishlistCount?: number;
}

export default function Navbar({ cartCount, onOpenCart, onOpenWishlist, wishlistCount = 0 }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Why Just It", href: "#why" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-lg py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-display text-2xl font-bold text-gray-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full" />
            </div>
            <span className="tracking-tighter">JUST IT.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-black text-gray-900 uppercase tracking-[0.2em]">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-brand-primary transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenWishlist}
              className="p-2 sm:p-3 rounded-xl hover:bg-brand-secondary transition-all text-gray-900 relative active:scale-90"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenCart}
              className="bg-brand-primary text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl flex items-center gap-3 transition-all hover:shadow-xl hover:shadow-brand-primary/30 active:scale-95 group font-bold text-[13px] sm:text-sm btn-gradient"
            >
              <ShoppingBag size={18} className="group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-lg text-[10px]">
                {cartCount}
              </span>
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-3 rounded-xl md:hidden text-gray-900 hover:bg-brand-secondary transition-all"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[90] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[100] shadow-2xl p-8 flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="font-display text-xl font-bold text-gray-900">Navigation</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-gray-900 transition-all border border-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-3xl font-display font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                      {link.name}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-16">
                 <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Connect with us</p>
                 <div className="flex gap-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-12 h-12 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-primary transition-all">
                        <ShoppingBag size={20} />
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
