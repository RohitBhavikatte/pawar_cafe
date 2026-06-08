import DishCard from './DishCard';

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

export default function MenuCategoryCarousel({ category }: { category: any }) {
  const imageUrl = categoryImages[category.id] || '/images/pizza.png';
  // Use more items for the carousel effect
  const displayItems = [...category.items, ...category.items].slice(0, 8); 

  return (
    <div className="mb-16 max-w-[1400px] mx-auto px-6 md:px-16">
      
      {/* Category Header (RedChilliz Style) */}
      <div className="flex justify-between items-end mb-6">
        <h2 className="font-display font-bold text-2xl text-on-surface tracking-wide dark:text-[#e0e0e0]">
          {category.title}
        </h2>
        <button className="text-sm font-semibold text-primary-container hover:text-primary-fixed transition-colors uppercase tracking-wider">
          Discover All
        </button>
      </div>
      
      {/* Horizontal Carousel */}
      <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide py-2 px-2 -mx-2">
        {displayItems.map((item: any, idx: number) => (
          <DishCard 
            key={`${item._id}-${idx}`} 
            item={item} 
            imageUrl={imageUrl} 
          />
        ))}
      </div>
    </div>
  );
}
