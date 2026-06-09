"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import fullMenu from '@/data/fullMenu.json';

// Star dish image per category
export const categoryImages: Record<string, string> = {
  "Pizza": "/images/cheese_pizza.png",
  "Burgers": "/images/veg_burger.png",
  "Sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=900&auto=format&fit=crop",
  "Chinese Food": "/images/hakka_noodles.png",
  "Momos": "/images/veg_steam_momos.png",
  "Fries": "/images/french_fries.png",
  "Missal": "/images/special_misal.png",
  "Pav Bhaji": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=900&auto=format&fit=crop",
  "Vadapav": "/images/vada_pav.png",
  "Beverage": "/images/cold_coffee.png",
};

// Category emoji icons
const categoryIcons: Record<string, string> = {
  "Pizza": "🍕", "Burgers": "🍔", "Sandwich": "🥪", "Chinese Food": "🍜",
  "Momos": "🥟", "Fries": "🍟", "Missal": "🍲", "Pav Bhaji": "🫕",
  "Vadapav": "🍔"
};

const MARQUEE_THRESHOLD = 4; // ≤4 items → static grid, >4 → marquee

export function getSeededRandom(seedString: string) {
  let h = 0;
  for (let i = 0; i < seedString.length; i++)
    h = Math.imul(31, h) + seedString.charCodeAt(i) | 0;
  // Return value between 4.1 and 4.9 based on string
  const val = Math.abs(h % 90) / 100;
  return (4.1 + val).toFixed(1);
}

export function DishCard({
  name,
  price,
  isFirst,
  image,
  ingredients,
  hook
}: {
  name: string;
  price: string;
  isFirst?: boolean;
  image?: string;
  ingredients?: string[];
  hook?: string;
}) {
  const rating = getSeededRandom(name);

  return (
    <div className="relative flex-shrink-0 w-[260px] sm:w-[360px] h-full flex flex-col bg-surface-container border border-outline-variant/20 rounded-2xl p-4 sm:p-5 hover:border-primary-container/50 hover:bg-surface-container-high transition-all duration-300 group cursor-default shadow-lg hover:shadow-2xl">
      {isFirst && (
        <span className="absolute -top-3 -right-3 bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary-container text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
          Chef's Special
        </span>
      )}

      {/* Image or placeholder */}
      <div className="relative w-full h-[140px] sm:h-[180px] shrink-0 bg-surface-container-highest/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden border border-outline-variant/10 shadow-inner group-hover:shadow-md transition-all duration-500">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        ) : (
          <span className="text-on-surface-variant/30 text-xs uppercase tracking-widest font-bold">Image Coming Soon</span>
        )}
      </div>

      <div className="flex justify-between items-start mb-2 gap-2 shrink-0">
        <h3 className="text-xl font-bold text-on-surface leading-tight font-serif">{name}</h3>
        <span className="text-primary-container font-black whitespace-nowrap bg-primary-container/10 px-2 py-0.5 rounded-md">₹ {price}</span>
      </div>

      {/* Dynamic Hook */}
      <p className="text-sm text-primary-container/80 italic mb-3 min-h-[40px] font-medium leading-snug shrink-0">
        {hook || "A taste of absolute perfection."}
      </p>

      {/* Dynamic Ingredients */}
      <div className="mb-3 shrink-0">
        <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold mb-1.5">Key Ingredients</p>
        <div className="flex flex-wrap gap-1.5 min-h-[40px]">
          {ingredients && ingredients.length > 0 ? (
            ingredients.map((ing, i) => (
              <span key={i} className="text-[11px] px-2.5 py-1 rounded-full bg-outline-variant/10 text-on-surface-variant/90 border border-outline-variant/20">
                {ing}
              </span>
            ))
          ) : (
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-outline-variant/10 text-on-surface-variant/50">Premium Spices</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-auto pt-3 border-t border-outline-variant/20 shrink-0">
        <div className="flex text-tertiary-container text-sm">
          ★★★★<span className="text-outline-variant">★</span>
        </div>
        <span className="text-xs text-on-surface-variant/70 font-medium">({rating}k reviews)</span>
      </div>
    </div>
  );
}

function MenuMarquee({ items, categoryImage, reverse }: { items: { name: string; price: string }[]; categoryImage?: string; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-outline-variant/15 bg-surface-container-lowest/30 py-8 px-0 group/marquee">
      <div className="overflow-x-auto no-scrollbar touch-pan-x hide-scroll-bar cursor-grab active:cursor-grabbing">
        <div
          className={`flex items-stretch gap-6 w-max group-hover/marquee:[animation-play-state:paused] active:[animation-play-state:paused] focus:[animation-play-state:paused] ${reverse ? 'animate-marquee-slow-reverse max-md:animate-[marquee_50s_linear_infinite_reverse]' : 'animate-marquee-slow max-md:animate-[marquee_50s_linear_infinite]'}`}
          style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
        >
          {/* Duplicate for seamless loop */}
          {[...items, ...items].map((item: any, idx) => (
            <div key={idx} className="h-auto">
              <DishCard name={item.name} price={item.price} isFirst={idx === 0 || idx === items.length} image={categoryImage} ingredients={item.ingredients} hook={item.hook} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StaticGrid({ items, categoryImage }: { items: { name: string; price: string }[]; categoryImage?: string }) {
  return (
    <div className="flex overflow-x-auto items-stretch gap-6 pb-6 no-scrollbar snap-x snap-mandatory hide-scroll-bar">
      {items.map((item: any, idx) => (
        <div key={idx} className="snap-start shrink-0 h-auto">
          <DishCard name={item.name} price={item.price} isFirst={idx === 0} image={categoryImage} ingredients={item.ingredients} hook={item.hook} />
        </div>
      ))}
    </div>
  );
}

export default function MenuGrid() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        sectionRefs.current.forEach((section) => {
          if (!section) return;
          const heading = section.querySelector('.menu-heading');
          const image = section.querySelector('.menu-star-image');
          const dishes = section.querySelector('.menu-dishes');

          if (heading) {
            gsap.fromTo(heading,
              { opacity: 0, y: 30 },
              {
                opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
                scrollTrigger: { trigger: heading, start: 'top 88%', toggleActions: 'play none none none' }
              }
            );
          }
          if (image) {
            gsap.fromTo(image,
              { opacity: 0, scale: 0.95 },
              {
                opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: image, start: 'top 85%', toggleActions: 'play none none none' }
              }
            );
          }
          if (dishes) {
            gsap.fromTo(dishes,
              { opacity: 0, y: 20 },
              {
                opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.2,
                scrollTrigger: { trigger: dishes, start: 'top 90%', toggleActions: 'play none none none' }
              }
            );
          }
        });
      } catch {
        // GSAP unavailable, static display
      }
    };
    initGSAP();
  }, []);

  return (
    <section id="menu" className="py-20 px-6 md:px-16 bg-surface space-y-28 max-w-[1400px] mx-auto">
      {/* Section Title */}
      <div className="text-center">
        <span className="inline-block text-primary-container font-bold uppercase tracking-[0.3em] text-xs border border-primary-container/30 bg-primary-container/10 px-4 py-2 rounded-full mb-4">
          Our Menu
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase text-on-surface tracking-tight">
          What We <span className="text-gradient-gold">Serve</span>
        </h2>
      </div>

      {fullMenu.map((category, index) => {
        const isMarquee = category.items.length > MARQUEE_THRESHOLD;
        const starImage = categoryImages[category.category];
        const icon = categoryIcons[category.category] ?? '🍽️';

        return (
          <section
            key={category.category}
            ref={(el) => { sectionRefs.current[index] = el; }}
          >
            {/* Category Heading */}
            <div className="menu-heading flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <span className="text-3xl shrink-0">{icon}</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-on-surface tracking-tight shrink-0">
                {category.category}
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary-container/40 to-transparent min-w-[20px]" />
              <span className="text-on-surface-variant text-sm font-medium shrink-0 whitespace-nowrap">
                {category.items.length} items
              </span>
            </div>

            {/* Star Dish Hero Image */}
            <div className="menu-star-image relative aspect-square w-full max-w-[400px] md:max-w-[450px] mx-auto rounded-[2rem] overflow-hidden mb-12 group bg-surface-container-highest/20 border-[6px] border-surface-container-highest shadow-xl">
              <Image
                src={starImage}
                alt={`${category.category} - star dish`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ objectPosition: category.category === 'Beverage' ? 'center 35%' : 'center' }}
              />
              {/* Star dish label */}
              <div className="absolute bottom-5 left-6 pointer-events-none">
                <span className="bg-surface/80 backdrop-blur-md border border-primary-container/40 text-primary-container font-bold text-sm px-4 py-2 rounded-full shadow-lg">
                  {icon} {category.items[0]?.name} — ₹{category.items[0]?.price}
                </span>
              </div>
            </div>

            {/* Dish List — Marquee if >5 items, Static Grid if ≤5 */}
            <div className="menu-dishes">
              {isMarquee ? (
                <MenuMarquee items={category.items} reverse={index % 2 !== 0} categoryImage={starImage} />
              ) : (
                <StaticGrid items={category.items} categoryImage={starImage} />
              )}
            </div>
          </section>
        );
      })}
    </section>
  );
}
