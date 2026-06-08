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

export default function MenuCategoryGrid({ category, reverse }: { category: any, reverse: boolean }) {
  const imageUrl = categoryImages[category.id] || '/images/pizza.png';
  const displayItems = category.items.slice(0, 4); // Limit to 4 for clean layout

  return (
    <div className="mb-24 px-6 md:px-16 max-w-[1400px] mx-auto">
      {/* Premium Category Header */}
      <div className="flex items-center gap-6 mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-on-surface uppercase tracking-widest border-l-4 border-primary-container pl-6 py-1">
          {category.title}
        </h2>
        <div className="h-px bg-gradient-to-r from-primary-container/50 to-transparent flex-grow"></div>
      </div>
      
      {/* Asymmetrical Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {displayItems.map((item: any, idx: number) => {
          // Highlight first item by spanning 8 columns, others span 4
          const isHighlight = idx === 0;
          const colSpan = isHighlight ? "md:col-span-8" : "md:col-span-4";
          
          return (
            <div key={item._id} className={`${colSpan} group relative overflow-hidden bg-surface-container rounded-2xl border border-outline/10 hover:border-primary-container/50 transition-all duration-500`}>
              
              {/* Image Section */}
              <div className={`relative w-full ${isHighlight ? 'h-[400px]' : 'h-[250px]'} overflow-hidden`}>
                <Image 
                  src={imageUrl} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent opacity-90" />
                
                {isHighlight && (
                  <div className="absolute top-6 left-6 bg-primary-container/20 backdrop-blur-md text-primary-container text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary-container/30">
                    Signature Drop
                  </div>
                )}
              </div>

              {/* Text Section */}
              <div className="p-6 md:p-8 relative z-10 flex flex-col justify-between -mt-16">
                <div>
                  <h3 className={`font-display font-black text-on-surface uppercase tracking-wide mb-2 ${isHighlight ? 'text-4xl' : 'text-2xl'}`}>
                    {item.title}
                  </h3>
                  {isHighlight && (
                    <p className="text-on-surface-variant font-sans text-lg mb-6 line-clamp-2 max-w-xl">
                      Experience the premium taste crafted exactly to perfection. Unmatched quality served fresh.
                    </p>
                  )}
                </div>
                
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-outline/20">
                  <span className="text-primary-fixed font-display text-3xl font-black">₹{item.price}</span>
                  <button className="w-12 h-12 rounded-full border border-primary-container text-primary-container flex items-center justify-center hover:bg-primary-container hover:text-on-primary-fixed transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
