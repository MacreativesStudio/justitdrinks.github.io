import { motion } from "motion/react";
import { ExternalLink, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-display text-3xl font-bold mb-6 block tracking-tighter text-gray-900">
              JUST IT<span className="text-brand-primary">.</span>
            </a>
            <p className="text-gray-500 max-w-sm mb-10 leading-relaxed text-lg">
              Kenya's premium non-alcoholic beverage brand. We're on a mission to redefine refreshing through natural flavors and African spirit.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-900">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">Our Story</a></li>
              <li><a href="#products" className="hover:text-brand-primary transition-colors">Menu</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 mb-8">Brand</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-900">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Join the Vibe</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-gray-100">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
            © 2024 Just It Beverages Ltd. Nairobi, Kenya.
          </p>
          
          {/* MA CREATIVES FOOTER SYSTEM */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <a 
              href="https://macreativesstudio.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-brand-secondary px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all hover:bg-brand-primary hover:text-white border border-brand-primary/10"
            >
              <span>Need a website like this?</span> 
              <span className="flex items-center gap-2">
                Talk to Ma Creatives
                <ExternalLink size={12} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
