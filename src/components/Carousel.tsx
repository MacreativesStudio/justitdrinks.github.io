import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: string | number;
  image: string;
  alt: string;
  caption?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showDots?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showDots = true,
}) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

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
    setCurrent((prev) => (prev + newDirection + items.length) % items.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = e.clientX - dragStartX.current;
    const minDragDistance = 50;

    if (dragDistance > minDragDistance) {
      paginate(-1); // Swiped right, go to previous
    } else if (dragDistance < -minDragDistance) {
      paginate(1); // Swiped left, go to next
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = e.changedTouches[0].clientX - dragStartX.current;
    const minDragDistance = 50;

    if (dragDistance > minDragDistance) {
      paginate(-1); // Swiped right, go to previous
    } else if (dragDistance < -minDragDistance) {
      paginate(1); // Swiped left, go to next
    }
  };

  useEffect(() => {
    if (!autoPlay) return;

    autoPlayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
      setDirection(1);
    }, interval);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, interval, items.length]);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (!autoPlay) return;

    autoPlayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
      setDirection(1);
    }, interval);
  };

  const handleNext = () => {
    paginate(1);
    resetAutoPlay();
  };

  const handlePrev = () => {
    paginate(-1);
    resetAutoPlay();
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-[32px] md:rounded-[40px] bg-gray-50"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={current}
          src={items[current].image}
          alt={items[current].alt}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
          draggable="false"
        />
      </AnimatePresence>

      {/* Gradient overlay for text */}
      {items[current].caption && (
        <motion.div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
          <p className="text-white font-display font-bold text-2xl italic">
            {items[current].caption}
          </p>
        </motion.div>
      )}

      {/* Controls */}
      {showControls && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="text-gray-900" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="text-gray-900" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
                resetAutoPlay();
              }}
              className={`rounded-full transition-all ${
                index === current
                  ? "bg-white w-2 h-2"
                  : "bg-white/50 w-1.5 h-1.5 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
