import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Kipchoge",
    role: "Coffee Enthusiast",
    content: "Just It Jaba has become my daily ritual. The Lemon Zing variety is absolutely incredible - perfectly balanced and energizing!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },
  {
    id: 2,
    name: "Marcus Ochieng",
    role: "Wellness Coach",
    content: "The Moratina collection is a game-changer. Premium quality that honors our heritage. This is what authentic tastes like.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
  },
  {
    id: 3,
    name: "Amara Njeri",
    role: "Health Blogger",
    content: "Finally, natural juices that actually taste good AND are good for you. The Baobab Bliss is my new favorite superfood.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
  },
  {
    id: 4,
    name: "David Kiplagat",
    role: "Athlete",
    content: "The Natural Juice collection has become essential for my recovery routine. Pure ingredients, pure results.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    id: 5,
    name: "Zainab Hassan",
    role: "Creative Director",
    content: "Love how Just It celebrates our culture while maintaining premium quality. Every sip tells a story.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=400",
  },
];

export default function Testimonials({ testimonials = defaultTestimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand-primary font-black uppercase text-xs tracking-[0.4em] mb-4 block">
            Real Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-brand-primary italic">Community</span> Says
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Join thousands of satisfied customers who have made Just It part of their daily ritual.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="h-[320px] md:h-[280px] relative overflow-hidden rounded-[32px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="absolute inset-0"
              >
                <div className="h-full bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <motion.img
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                        >
                          <Star size={18} className="fill-brand-primary text-brand-primary" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="mb-6">
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-700 text-lg md:text-xl leading-relaxed italic"
                      >
                        "{testimonials[current].content}"
                      </motion.p>
                    </blockquote>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="font-bold text-gray-900 mb-1">{testimonials[current].name}</p>
                      <p className="text-sm text-gray-500 font-medium">{testimonials[current].role}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`rounded-full transition-all ${
                    index === current
                      ? "bg-brand-primary w-3 h-3"
                      : "bg-gray-200 w-2 h-2 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => paginate(-1)}
                className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-secondary transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronRight size={20} className="rotate-180" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-secondary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
