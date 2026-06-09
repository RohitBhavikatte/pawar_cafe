import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from 'next/dynamic';

import CookieConsent from "@/components/CookieConsent";
import LenisScroll from "@/components/LenisScroll";

const MenuGrid = dynamic(() => import("@/components/MenuGrid"), { ssr: true });
const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: true });
const ReviewsSection = dynamic(() => import("@/components/ReviewsSection"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <LenisScroll>
      <main className="min-h-screen bg-surface overflow-x-hidden selection:bg-primary-container selection:text-on-primary-fixed relative">
        <Navbar />
        <Hero />
        <MenuGrid />
        <AboutSection />
        <ReviewsSection />
        <Footer />
        <CookieConsent />
      </main>
    </LenisScroll>
  );
}
