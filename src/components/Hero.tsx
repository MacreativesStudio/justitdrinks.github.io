import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Star, Leaf } from "lucide-react";

const WHATSAPP_NUMBER = "+254735008421";

export default function Hero() {
  const handleExplore = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/50 rounded-l-[100px] md:rounded-l-[200px] -z-0" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-primary/10 rounded-full blur-[100px] -z-0" 
      />
      
      {/* Floating Blobs */}
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl -z-0"
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/2 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl -z-0"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/20 bg-brand-secondary/50 mb-8"
          >
            <Leaf size={14} className="text-brand-primary" />
            <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.2em]">Kenya's Premium Refreshment</span>
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Refresh <br />
            <span className="text-brand-primary italic">Naturally.</span>
          </h1>
          
          <p className="text-gray-500 text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Just It is a modern non-alcoholic beverage brand inspired by natural African flavors and healthy Kenyan vibes. Real ingredients, real goodness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Hi Just It! I'd like to see your menu.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 transition-all active:scale-95"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
            <button
              onClick={handleExplore}
              className="border border-gray-100 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:border-brand-primary/30 transition-all active:scale-95"
            >
              Explore Drinks
              <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="mt-12 md:mt-16 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-secondary overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-gray-500">
               <span className="text-gray-900 font-bold block">1,000+</span>
               happy Kenyans refreshed
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:mt-0 mt-12"
        >
          {/* Main Visual */}
          <div className="relative z-10 p-4 bg-white rounded-[50px] shadow-2xl shadow-brand-primary/10 border border-gray-50">
            <div className="rounded-[40px] overflow-hidden aspect-[4/5] relative">
              <img 
                src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1000&auto=format&fit=crop" 
                alt="Hibiscus Refreshment" 
                className="w-full h-full object-cover transition-transform duration-2000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-6 rounded-3xl">
                   <p className="text-brand-primary font-black text-[10px] uppercase tracking-[0.3em] mb-1">Our Philosophy</p>
                   <h3 className="text-gray-900 text-2xl font-display font-bold italic">Refreshment Reinvented.</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Badges */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 md:-top-10 md:-right-10 glass p-5 rounded-3xl shadow-xl z-20 border border-brand-primary/10"
          >
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white">
                 <Star size={18} fill="currentColor" />
               </div>
               <div>
                  <p className="font-bold text-sm text-gray-900">0% Alcohol</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">100% Kenyan</p>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
