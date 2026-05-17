import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GallerySlide {
  id: number;
  image: string;
  caption?: string;
  layout?: "small" | "large" | "featured";
}

interface VibeGalleryProps {
  slides: GallerySlide[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const VibeGallery: React.FC<VibeGalleryProps> = ({
  slides,
  title = "The Just It Vibe",
  subtitle = "Real Moments",
  autoPlay = true,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragEnd, setDragEnd] = useState<number | null>(null);

  // Get 4 slides for display - current + 3 next
  const getDisplaySlides = () => {
    const display = [];
    for (let i = 0; i < 4; i++) {
      display.push(slides[(currentIndex + i) % slides.length]);
    }
    return display;
  };

  const displaySlides = getDisplaySlides();

  // Auto-play logic
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, slides.length, autoPlayInterval]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
    setIsAutoPlaying(false);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    setDragEnd(e.clientX);
    if (dragStart && e.clientX < dragStart - 50) {
      handleNext();
    } else if (dragStart && e.clientX > dragStart + 50) {
      handlePrev();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setDragEnd(e.changedTouches[0].clientX);
    if (dragStart && e.changedTouches[0].clientX < dragStart - 50) {
      handleNext();
    } else if (dragStart && e.changedTouches[0].clientX > dragStart + 50) {
      handlePrev();
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-[2px] bg-brand-primary" />
              <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-[10px]">
                {subtitle}
              </span>
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-brand-primary italic">
                {title.split(" ").slice(-1)[0]}.
              </span>
            </h2>
          </div>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] md:h-[500px] cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            {/* Small Card 1 */}
            <motion.div
              key={`slide-0-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ duration: 0.5 }}
              className="col-span-1 rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100 group"
            >
              <img
                src={displaySlides[0].image}
                alt={displaySlides[0].caption || "Gallery slide"}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Featured Large Card */}
            <motion.div
              key={`slide-1-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-1 md:col-span-2 row-span-2 rounded-[40px] overflow-hidden relative group bg-gray-50 border border-gray-100"
            >
              <img
                src={displaySlides[1].image}
                alt={displaySlides[1].caption || "Gallery slide"}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                <p className="text-white font-display font-bold text-2xl italic">
                  {displaySlides[1].caption || "Pure African Goodness."}
                </p>
              </div>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div
              key={`slide-2-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-1 rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100 group"
            >
              <img
                src={displaySlides[2].image}
                alt={displaySlides[2].caption || "Gallery slide"}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Small Card 3 */}
            <motion.div
              key={`slide-3-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-1 rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100 group"
            >
              <img
                src={displaySlides[3].image}
                alt={displaySlides[3].caption || "Gallery slide"}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-brand-primary"
                  : "w-2 bg-gray-200 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Auto-play toggle hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-8"
        >
          <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">
            {isAutoPlaying
              ? "🔄 Auto-playing • Swipe or click to navigate"
              : "▶ Click play to auto-rotate • Swipe to browse"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VibeGallery;
