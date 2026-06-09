"use client";

import { useState, useEffect, ReactNode, useCallback } from 'react';

export default function FocalCarousel({ children }: { children: ReactNode[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = children.length;

  // Auto-play interval: 5 seconds
  useEffect(() => {
    if (totalItems <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalItems]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // If no children, don't render
  if (totalItems === 0) return null;

  return (
    <div 
      className="relative w-full h-[550px] sm:h-[600px] overflow-hidden py-12 flex items-center justify-center touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      
      {/* Container for the absolute items */}
      <div className="relative w-full max-w-[350px] h-full flex items-center justify-center">
        {children.map((child, idx) => {
          // Calculate raw distance
          let distance = idx - activeIndex;
          
          // Normalize distance for infinite loop
          const half = Math.floor(totalItems / 2);
          if (distance > half) distance -= totalItems;
          if (distance < -half) distance += totalItems;

          // Visual calculations
          const isCenter = distance === 0;
          const absDistance = Math.abs(distance);
          
          // Card spacing - how far apart they are horizontally (smaller on mobile so they fit)
          const spacing = isMobile ? 180 : 360;
          const translateX = distance * spacing; 
          
          // Scale: 1.05 for center (slightly bigger, dropped from 1.3), 0.85 for others
          const scale = isCenter ? 1.05 : Math.max(0.7, 0.85 - (absDistance * 0.05));
          
          // Grayscale: 0 for center, 100 for others
          const grayscale = isCenter ? 0 : 100;
          
          // Opacity: 1 for center, fades out for far items
          const opacity = isCenter ? 1 : Math.max(0, 0.6 - (absDistance * 0.15));
          
          // z-index: center is highest
          const zIndex = 50 - absDistance;

          return (
            <div 
              key={idx} 
              className="absolute top-1/2 left-1/2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform cursor-pointer"
              style={{ 
                transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`, 
                filter: `grayscale(${grayscale}%)`,
                opacity: opacity,
                zIndex: zIndex,
                // Only show items within a certain distance to prevent rendering issues off-screen
                display: absDistance > 3 ? 'none' : 'block'
              }}
              onClick={() => {
                if (distance > 0) handleNext();
                if (distance < 0) handlePrev();
              }}
            >
              {/* Pointer events none for non-center items to prevent accidental clicks inside the card */}
              <div className={isCenter ? "" : "pointer-events-none"}>
                {child}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-2 sm:left-12 top-[85%] sm:top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container/50 backdrop-blur-md border border-outline/20 text-primary-container flex items-center justify-center hover:bg-primary-container hover:text-on-primary hover:scale-110 transition-all"
        aria-label="Previous dish"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-2 sm:right-12 top-[85%] sm:top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container/50 backdrop-blur-md border border-outline/20 text-primary-container flex items-center justify-center hover:bg-primary-container hover:text-on-primary hover:scale-110 transition-all"
        aria-label="Next dish"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Visual indicator / track line */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-outline-variant/20 rounded-full overflow-hidden flex">
         <div 
            className="h-full bg-primary-container transition-all duration-700 ease-out shadow-[0_0_10px_rgba(255,215,0,0.8)]" 
            style={{ 
              width: `${100 / totalItems}%`, 
              transform: `translateX(${activeIndex * 100}%)` 
            }}
          />
      </div>
    </div>
  );
}
