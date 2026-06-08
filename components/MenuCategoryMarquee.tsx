import Image from 'next/image';

const categoryImages: Record<string, string> = {
  pizza: '/images/pizza.png',
  burgers: '/images/burger.png',
  sandwich: '/images/sandwich.png',
  chinese: '/images/chinese.png',
  momos: '/images/momos.png',
  fries: '/images/fries.png',
  missal: '/images/misal.png',
  pavbhaji: '/images/pavbhaji.png',
  vadapav: '/images/vadapav.png',
  beverage: '/images/beverage.png',
};

export default function MenuCategoryMarquee({ category, reverse }: { category: any, reverse: boolean }) {
  // Ensure we have enough items to fill the screen by duplicating the array
  const displayItems = [...category.items, ...category.items, ...category.items].slice(0, 15);
  // Default to a fallback if not found
  const imageUrl = categoryImages[category.id] || '/images/pizza.png';

  const animationClass = reverse 
    ? 'animate-[marquee-reverse_30s_linear_infinite] hover:[animation-play-state:paused]' 
    : 'animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]';

  return (
    <section className="mb-24 relative">
      <div className="flex items-center gap-4 mb-8 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="h-px bg-gradient-gold flex-grow opacity-50"></div>
        <h2 className="font-display text-3xl md:text-5xl text-gradient-gold uppercase tracking-wider drop-shadow-md">
          {category.title}
        </h2>
        <div className="h-px bg-gradient-gold flex-grow opacity-50"></div>
      </div>
      
      <div className="overflow-hidden py-8 bg-surface-container-lowest/50 border-y border-outline/10 group relative">
        {/* Glow overlay that follows the marquee */}
        <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl z-0" />
        
        {/* Marquee Container */}
        <div className={`flex w-max pl-6 relative z-10 ${animationClass}`}>
          {/* Duplicate items for continuous scroll */}
          {[...Array(2)].map((_, containerIdx) => (
            <div key={`container-${containerIdx}`} className="flex space-x-6 px-3">
              {displayItems.map((item: any, idx: number) => (
                <div key={`${item._id}-${containerIdx}-${idx}`} className="min-w-[300px] md:min-w-[350px] snap-center bg-surface-container rounded-xl p-5 border border-outline/10 hover:border-primary-container hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all duration-300 group/card flex flex-col relative overflow-hidden transform hover:-translate-y-4 hover:scale-[1.02] cursor-pointer">
                  
                  <div className="w-full h-56 rounded-lg overflow-hidden mb-5 relative">
                    <Image src={imageUrl} alt={item.title} fill className="object-cover group-hover/card:scale-110 transition-transform duration-700 ease-out" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-80" />
                    
                    {item.isHighlight && (
                      <div className="absolute top-3 left-3 bg-primary-container/20 backdrop-blur-md text-primary-container text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-primary-container/30 shadow-[0_0_15px_rgba(255,215,0,0.4)]">
                        Signature
                      </div>
                    )}
                  </div>

                  <div className="flex-grow flex flex-col justify-between relative z-10">
                    <h3 className="font-sans font-bold text-2xl text-on-surface mb-2 group-hover/card:text-primary-container transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <div className="flex justify-between items-center mt-auto border-t border-outline/20 pt-4">
                      <span className="text-primary-fixed font-display text-2xl font-black">₹{item.price}</span>
                      <button className="w-10 h-10 rounded-full border border-primary-container text-primary-container flex items-center justify-center hover:bg-primary-container hover:text-on-primary-fixed transition-colors duration-300 transform group-hover/card:rotate-90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
