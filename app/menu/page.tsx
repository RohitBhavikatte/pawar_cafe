import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisScroll from "@/components/LenisScroll";
import { DishCard } from "@/components/MenuGrid";
import fullMenu from "@/data/fullMenu.json";

export const metadata: Metadata = {
  title: "Full Menu | Pawar Cafe Udgir",
  description: "Explore the full menu of Pawar Cafe Udgir. Legendary Pizza, Misal, Burgers, Momos, Fries, and refreshing beverages.",
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

        <div className="mb-20 text-center relative z-10">
          <span className="inline-block text-primary-container font-bold uppercase tracking-[0.4em] text-[10px] px-4 py-2 rounded-full mb-6 border border-primary-container/30 bg-primary-container/10">
            Taste the Legend
          </span>
          <h1 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 drop-shadow-lg">
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="text-on-surface-variant max-w-xl mx-auto text-lg leading-relaxed">
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
              
              <div className="flex overflow-x-auto md:flex-wrap gap-8 pb-6 no-scrollbar snap-x snap-mandatory hide-scroll-bar justify-start">
                {category.items.map((item, idx) => (
                  <div key={idx} className="snap-start shrink-0">
                    <DishCard name={item.name} price={item.price} isFirst={idx === 0} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

      </main>
      <Footer />
    </LenisScroll>
  );
}
