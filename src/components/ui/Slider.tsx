"use client";

import { ReactNode, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
  children?: ReactNode[];
  className?: string;
  interval?: number; // in ms, optional
}

export function Slider(
  { children = [], className = "", interval = 5000 }: SliderProps,
) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  }, [children.length]);

  // Timed slide effect
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, interval);
    return () => clearTimeout(timer);
  }, [currentIndex, interval, children.length, nextSlide]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Précédent"
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow transition cursor-pointer"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Suivant"
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow transition cursor-pointer"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {children.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-background" : "bg-foreground/80"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
