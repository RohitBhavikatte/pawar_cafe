import Image from 'next/image';

interface DishCardProps {
  item: any;
  imageUrl: string;
}

export default function DishCard({ item, imageUrl }: DishCardProps) {
  // Pure RedChilliz layout mixed with modern claymorphism (soft 3D inflated look)
  return (
    <div className="min-w-[280px] md:min-w-[300px] snap-center bg-surface dark:bg-surface-container rounded-2xl flex flex-col relative
      shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] 
      dark:shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(255,255,255,0.05)]
      transition-all duration-300 transform hover:scale-[1.02] cursor-pointer mb-6"
    >
      
      {/* Top Image Section */}
      <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={item.title} 
          fill 
          className="object-cover" 
          unoptimized 
        />
        
        {/* Heart Icon (top right like RedChilliz) */}
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        {/* The overlapping Add Button (RedChilliz specific) */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
          <button className="bg-white text-orange-600 font-bold px-6 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-orange-50 transition-colors border border-orange-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-orange-600">
              <circle cx="12" cy="12" r="10" fill="currentColor"></circle>
              <line x1="12" y1="8" x2="12" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round"></line>
              <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"></line>
            </svg>
            Add
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 pt-8 flex-grow flex flex-col justify-between">
        
        {/* Title & Veg Icon */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-sans font-bold text-[18px] text-on-surface line-clamp-1">
            {item.title}
          </h3>
          <div className="flex-shrink-0 mt-1">
            {/* Standard Veg Icon (Green square with dot) */}
            <div className="w-4 h-4 border-[1.5px] border-green-600 flex items-center justify-center rounded-[2px] bg-white">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-sm font-semibold text-on-surface-variant">4.5</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>

        {/* Price Section */}
        <div className="font-sans font-bold text-[15px] text-on-surface">
          ₹{item.price}.00
        </div>
      </div>
    </div>
  );
}
