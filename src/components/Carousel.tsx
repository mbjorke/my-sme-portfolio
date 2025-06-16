'use client';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  autoPlay?: boolean | number;
  nextButtonAriaLabel?: string;
  prevButtonAriaLabel?: string;
  nextButtonClassName?: string;
  prevButtonClassName?: string;
  dotButtonClassName?: string;
  activeDotClassName?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  className = '',
  autoPlay,
  nextButtonAriaLabel = 'Next item',
  prevButtonAriaLabel = 'Previous item',
  nextButtonClassName = 'text-accent-100 hover:bg-accent-500/20',
  prevButtonClassName = 'text-accent-100 hover:bg-accent-500/20',
  dotButtonClassName = 'bg-accent-100 hover:bg-accent-500/20',
  activeDotClassName = 'bg-accent-500 scale-125',
}: CarouselProps<T>) {
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
      className={`grid grid-rows-[1fr_auto] h-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Content Area */}
      <div className="min-h-0">{renderItem(items[currentIndex], currentIndex)}</div>

      {/* Navigation Controls */}
      <div className="mt-4 flex justify-center">
        <div className="inline-flex items-center bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-accent/10 shadow-md">
          <button
            className={`flex justify-center items-center w-8 h-8 rounded-full transition-colors ${prevButtonClassName}`}
            onClick={prev}
            aria-label={prevButtonAriaLabel}
          >
            <span className="sr-only">{prevButtonAriaLabel}</span>
            &#8592;
          </button>

          <div className="flex items-center mx-2 space-x-1.5">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  idx === currentIndex
                    ? `${activeDotClassName} ${dotButtonClassName}`
                    : `${dotButtonClassName} hover:opacity-100`
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            className={`flex justify-center items-center w-8 h-8 rounded-full transition-colors ${nextButtonClassName}`}
            onClick={next}
            aria-label={nextButtonAriaLabel}
          >
            <span className="sr-only">{nextButtonAriaLabel}</span>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
