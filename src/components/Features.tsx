import { motion } from "motion/react";
import { Leaf, Heart, Zap, ShieldCheck, Globe, Star } from "lucide-react";

const features = [
  {
    icon: <Leaf />,
    title: "Natural Ingredients",
    description: "Sourced directly from the fertile soils of Kenya's premium farms."
  },
  {
    icon: <Zap />,
    title: "Refreshing Taste",
    description: "Cold-pressed energy that keeps you sharp and hydrated all day."
  },
  {
    icon: <Heart />,
    title: "Healthy Lifestyle",
    description: "Zero preservatives, zero alcohol—just pure African goodness."
  },
  {
    icon: <Star />,
    title: "Modern African Flavor",
    description: "Traditional blends reinvented for the contemporary world."
  }
];

export default function Features() {
  return (
    <section id="why" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] rounded-[50px] overflow-hidden relative shadow-2xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop" 
                alt="Health lifestyle"
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 glass p-8 rounded-[32px] max-w-[240px] shadow-2xl hidden sm:block border-brand-primary/10"
            >
              <div className="w-12 h-12 bg-brand-primary text-white rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <p className="font-bold text-gray-900 mb-2 leading-tight">100% Quality Guaranteed</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-loose">Hygienic • Natural • Fresh</p>
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-primary" />
              <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-[10px]">The Better Choice</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-10 leading-[1.1] tracking-tight"
            >
              Why Just It is <br />
              <span className="text-brand-primary italic">Refreshing.</span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center mb-5 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 text-gray-900 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
