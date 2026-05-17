import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img src="https://images.unsplash.com/photo-1523362628242-4dc5820061fa?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Lifestyle" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Fresh ingredients" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img src="https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Beverage pour" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img src="https://images.unsplash.com/photo-1556761175-5973cf0f32e7?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="African youth" />
              </div>
            </div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-[100px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-primary" />
            <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-[10px]">Our Roots</span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            Modern Taste, <br />
            <span className="text-brand-primary italic">African Soul.</span>
          </h2>
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
            <p>
              Just It was born in the heart of Kenya with a simple mission: to create a drink that bridges tradition and modern lifestyle. We felt something was missing—a premium, healthy, non-alcoholic choice that didn't compromise on vibe or flavor.
            </p>
            <p>
              Every bottle is a celebration of our heritage, crafted using locally-sourced ingredients and inspired by the vibrant energy of Nairobi's streets. We’re bottling the spirit of a new generation.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-6 p-6 bg-brand-secondary/50 rounded-3xl border border-brand-primary/10">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-xs font-bold text-gray-800 uppercase tracking-widest leading-loose">
              <span className="text-brand-primary">5,000+</span> Refreshers across Kenya
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
