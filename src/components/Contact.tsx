import { motion } from "motion/react";
import { MessageCircle, Instagram, Twitter, Facebook, MapPin, Phone, Mail, CheckCircle2, LayoutGrid, Users } from "lucide-react";
import { useState, FormEvent } from "react";

const CONTACT_INFO = {
  phone: "+254 735 008 421",
  whatsapp: "+254735008421",
  email: "hello@justit.com",
  location: "Nairobi, Kenya",
  channel: "https://whatsapp.com/channel/0029Vb7zk5kC6ZveJ7ZVkg0J",
  group: "https://chat.whatsapp.com/BSymefaxBV6Jm6i0RPp8Lr"
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-primary" />
              <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-[10px]">Get In Touch</span>
            </motion.div>
            
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Connect with <br />
              <span className="text-brand-primary italic">The Vibe.</span>
            </h2>
            
            <p className="text-gray-500 mb-12 text-lg leading-relaxed max-w-md">
              Have questions, feedback, or want to partner? We're always open to fresh ideas and collaborations.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-5 group py-4 border-b border-gray-200/50">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Location</p>
                   <span className="text-gray-900 font-bold">{CONTACT_INFO.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-5 group py-4 border-b border-gray-200/50">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Call/WhatsApp</p>
                   <span className="text-gray-900 font-bold">{CONTACT_INFO.phone}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Join Our Communities</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={CONTACT_INFO.channel} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary/30 transition-all font-bold text-sm text-gray-900"
                >
                  <LayoutGrid size={18} className="text-brand-primary" />
                  WhatsApp Channel
                </a>
                <a 
                  href={CONTACT_INFO.group} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary/30 transition-all font-bold text-sm text-gray-900"
                >
                  <Users size={18} className="text-brand-primary" />
                  WhatsApp Group
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[50px] shadow-2xl shadow-brand-primary/5 border border-gray-50"
          >
            {isSubmitted ? (
               <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-gray-900 text-3xl font-display font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-500">We'll get back to you faster than a cold drink disappears.</p>
               </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => { setFormData({...formData, name: e.target.value}); setErrors({...errors, name: ''}); }}
                    className={`w-full bg-gray-50 px-6 py-4 rounded-2xl border ${errors.name ? 'border-red-500' : 'border-gray-100'} focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-gray-900 text-sm transition-all`} 
                    placeholder="Enter your name" 
                  />
                  {errors.name && <span className="text-red-500 text-[10px] font-bold mt-1 px-2">{errors.name}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => { setFormData({...formData, email: e.target.value}); setErrors({...errors, email: ''}); }}
                    className={`w-full bg-gray-50 px-6 py-4 rounded-2xl border ${errors.email ? 'border-red-500' : 'border-gray-100'} focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-gray-900 text-sm transition-all`} 
                    placeholder="your@email.com" 
                  />
                  {errors.email && <span className="text-red-500 text-[10px] font-bold mt-1 px-2">{errors.email}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => { setFormData({...formData, message: e.target.value}); setErrors({...errors, message: ''}); }}
                    className={`w-full bg-gray-50 px-6 py-4 rounded-2xl border ${errors.message ? 'border-red-500' : 'border-gray-100'} focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-gray-900 text-sm transition-all resize-none`} 
                    placeholder="How can we help?"
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-[10px] font-bold mt-1 px-2">{errors.message}</span>}
                </div>
                
                <button type="submit" className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-[0.1em] btn-gradient transition-all shadow-xl shadow-brand-primary/20">
                  Send Message
                </button>
                
                <div className="pt-6 text-center">
                  <p className="text-[10px] text-gray-400 mb-4 uppercase tracking-widest font-black">Quick Order</p>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi Just It! I'd like to place an order.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-sm text-brand-primary bg-brand-secondary hover:bg-brand-primary hover:text-white transition-all border border-brand-primary/10"
                  >
                    <MessageCircle size={18} />
                    Instant WhatsApp Order
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
