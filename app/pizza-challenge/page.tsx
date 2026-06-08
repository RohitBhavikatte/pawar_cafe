import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisScroll from "@/components/LenisScroll";

export const metadata: Metadata = {
  title: "The Pizza Challenge | Pawar Cafe Udgir",
  description: "Are you brave enough? The legendary Pawar Cafe Pizza Challenge is coming soon. Stay tuned for the rules.",
};

export default function PizzaChallengePage() {
  return (
    <LenisScroll>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 flex items-center justify-center relative overflow-hidden bg-[#080a0a]">
        
        {/* Cinematic glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="text-center relative z-10 max-w-2xl mx-auto">
          <span className="inline-block text-error font-bold uppercase tracking-[0.4em] text-xs px-4 py-2 rounded-full mb-6 border border-error/30 bg-error/10 animate-pulse">
            Classified // Top Secret
          </span>
          
          <h1 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-white drop-shadow-2xl">
            The <span className="text-error block mt-2" style={{ textShadow: '0 0 40px rgba(255,180,171,0.5)' }}>Challenge</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-white/70 font-display italic mb-12">
            "We are preparing something that Udgir has never seen before."
          </p>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="text-primary-container font-bold uppercase tracking-widest text-sm mb-4">Status Update</h3>
            <p className="text-on-surface-variant leading-relaxed">
              The official rules for the Pawar Cafe Pizza Challenge are currently under lock and key. We will unveil the ultimate test of appetite very soon.
            </p>
            <p className="text-white font-bold mt-6 uppercase tracking-widest text-xs">
              Prepare yourself.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </LenisScroll>
  );
}
