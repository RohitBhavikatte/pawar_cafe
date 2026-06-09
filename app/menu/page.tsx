import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisScroll from "@/components/LenisScroll";
import { DishCard, categoryImages } from "@/components/MenuGrid";
import fullMenu from "@/data/fullMenu.json";
import FocalCarousel from "@/components/FocalCarousel";

export const metadata: Metadata = {
  title: "Full Menu | Pawar Cafe Udgir",
  description: "Explore the full menu of Pawar Cafe Udgir. Legendary Pizza, Misal, Burgers, Momos, Fries, and refreshing beverages.",
};

const localCategoryImages: Record<string, string> = {
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

export default function MenuPage() {
  return (
    <LenisScroll>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 max-w-[1200px] mx-auto text-on-surface relative">
        
        {/* Background ambient orbs for beautiful UI */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#ff8c00]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mb-8 mt-4">
          <Link href="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary-container transition-colors font-medium text-sm border border-outline-variant/30 bg-surface-container/50 px-4 py-2 rounded-full backdrop-blur-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </Link>
        </div>

        <div className="mb-24 text-center relative z-10">
          <span className="inline-flex items-center gap-2 text-primary-container font-black uppercase tracking-[0.5em] text-[10px] px-6 py-3 rounded-full mb-8 border border-primary-container/20 bg-primary-container/5 shadow-[0_0_30px_rgba(255,215,0,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
            Taste the Legend
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
          </span>
          <h1 className="font-display text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 drop-shadow-2xl">
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl leading-relaxed border-l-4 border-primary-container/30 pl-6 py-2">
            From the fiery bite of our authentic Misal to the ultimate cheese stretch of our pizzas — discover the flavors that took over Udgir.
          </p>
        </div>

        <div className="space-y-24 relative z-10">
          {fullMenu.map((category) => (
            <section key={category.category} className="scroll-mt-32" id={category.category.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex items-center gap-6 mb-10">
                <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-primary-container tracking-tight">
                  {category.category}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-primary-container/40 to-transparent" />
              </div>
              
              <FocalCarousel>
                {category.items.map((item: any, idx: number) => (
                  <DishCard 
                    key={idx} 
                    name={item.name} 
                    price={item.price} 
                    isFirst={idx === 0} 
                    image={localCategoryImages[category.category]} 
                    ingredients={item.ingredients}
                    hook={item.hook}
                  />
                ))}
              </FocalCarousel>
            </section>
          ))}
        </div>

      </main>
      <Footer />
    </LenisScroll>
  );
}
