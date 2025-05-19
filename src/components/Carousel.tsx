'use client';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  autoPlay?: boolean | number;
}

export function Carousel<T>({ items, renderItem, className = '', autoPlay }: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prev = () => setCurrentIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (!autoPlay || items.length <= 1 || isPaused) return;
    const interval = typeof autoPlay === 'number' ? autoPlay : 5000;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, items.length, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className={`mx-auto w-full max-w-2xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>{renderItem(items[currentIndex], currentIndex)}</div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          className="flex justify-center items-center w-10 h-10 rounded-full text-primary hover:bg-primary/10"
          onClick={prev}
          aria-label="Previous"
        >
          <span className="sr-only">Previous</span>
          &#8592;
        </button>
        <div className="flex items-center space-x-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-primary scale-110' : 'bg-primary/20 hover:bg-primary/40'
              }`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          className="flex justify-center items-center w-10 h-10 rounded-full text-primary hover:bg-primary/10"
          onClick={next}
          aria-label="Next"
        >
          <span className="sr-only">Next</span>
          &#8594;
        </button>
      </div>
    </div>
  );
}
