import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuGrid from "@/components/MenuGrid";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import LenisScroll from "@/components/LenisScroll";

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
