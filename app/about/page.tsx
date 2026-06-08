import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisScroll from "@/components/LenisScroll";

export const metadata: Metadata = {
  title: "Our Story | Pawar Cafe Udgir",
  description: "Learn about Bajrang Pawar and the incredible journey of Pawar Cafe. From humble beginnings to Udgir's finest street food destination.",
};

export default function AboutPage() {
  return (
    <LenisScroll>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 max-w-[1000px] mx-auto text-on-surface">
        
        <div className="mb-16 text-center">
          <span className="inline-block text-primary-container font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-2 rounded-full mb-5 border border-primary-container/30 bg-primary-container/8">
            The Journey
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Our <span className="text-gradient-gold">Story</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-on-surface-variant font-display italic">
            "We didn't just open a cafe. We started a movement in Udgir."
          </p>
        </div>

        <div className="space-y-12 text-lg text-on-surface-variant leading-relaxed">
          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/20 shadow-2xl">
            <h2 className="text-3xl font-display font-bold text-on-surface mb-6 uppercase tracking-tight">
              The Beginning
            </h2>
            <p className="mb-6">
              Every great story starts with a simple idea. For <strong className="text-on-surface">Bajrang Pawar</strong>, the vision was clear: Udgir needed a place where premium quality met authentic street food vibes. A place where you could get an incredibly cheesy pizza, and in the next breath, the most fiery, authentic Misal in town.
            </p>
            <p>
              In 2018, that vision became reality. <span className="text-on-surface font-bold">Pawar Cafe</span> was born out of pure passion for culinary excellence. We didn't have a massive budget, but we had something better: an unbreakable commitment to <strong className="text-primary-container">QUALITY</strong>.
            </p>
          </section>

          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/20 shadow-2xl">
            <h2 className="text-3xl font-display font-bold text-on-surface mb-6 uppercase tracking-tight">
              आमचा प्रवास, आमची शान
            </h2>
            <p className="mb-6">
              "तुम्ही आम्हाला वेळ द्या, आम्ही तुम्हाला QUALITY देऊ..." हे फक्त एक वाक्य नाही, हा आमचा शब्द आहे. 
              जेव्हा आम्ही सुरुवात केली, तेव्हा लोकांचा विश्वास जिंकणे हे आमचे पहिले ध्येय होते. आज, हजारो समाधानी ग्राहकांचे प्रेम हीच आमची खरी कमाई आहे.
            </p>
            <p>
              Udgir locals know — when you want a meal that hits the spot perfectly, whether it's our legendary Cheese Burst Pizza or our classic Vada Pav, you come to Pawar Cafe.
            </p>
          </section>

          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/20 shadow-2xl">
            <h2 className="text-3xl font-display font-bold text-on-surface mb-6 uppercase tracking-tight">
              The Vision Forward
            </h2>
            <p>
              We are constantly evolving, pushing the boundaries of taste. The famous <strong className="text-primary-container">Pizza Challenge</strong> is just one example of how we love to keep things exciting for our community. 
            </p>
            <p className="mt-6">
              Thank you for being part of our journey. The best is yet to come.
            </p>
          </section>
        </div>

      </main>
      <Footer />
    </LenisScroll>
  );
}
