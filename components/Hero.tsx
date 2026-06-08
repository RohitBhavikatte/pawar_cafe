"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        const el = contentRef.current;
        const video = videoRef.current;
        if (!el || !video) return;

        // Reveal animation
        gsap.fromTo(
          el.querySelectorAll('.hero-animate'),
          { y: 60, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.4, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
        );

        // Parallax scroll effect for video
        gsap.to(video, {
          y: '30%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        });
      } catch {
        // Fallback
      }
    };
    loadGSAP();
  }, []);

  return (
    <section className="hero-section relative w-full h-[100dvh] min-h-[600px] md:min-h-[700px] flex flex-col justify-end overflow-hidden bg-[#080a0a]">
      {/* Background Video with Parallax Wrapper */}
      <div className="absolute top-0 left-0 w-full h-[65vh] md:h-full md:inset-0 z-0 overflow-hidden flex items-center justify-center bg-[#080a0a]">
        <video
          ref={videoRef}
          className="w-full h-full md:h-[120%] object-cover absolute top-0 md:top-[-10%] left-0"
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Luxury Vignette and Fade-to-Black */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a0a] via-[#080a0a]/60 to-transparent" />
      </div>

      {/* Floating Gold Orbs for Ambience */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none animate-pulse mix-blend-screen" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#ff8c00]/10 rounded-full blur-[100px] pointer-events-none animate-pulse mix-blend-screen" style={{ animationDelay: '1s' }} />

      {/* Hero Content — Right Aligned */}
      <div ref={contentRef} className="relative z-10 px-6 md:px-16 pb-10 md:pb-24 max-w-2xl ml-auto text-right flex flex-col justify-end h-full">
        
        <div className="flex items-center justify-end gap-4 mb-2 hero-animate opacity-0 mt-auto md:mt-0">
          <div className="flex flex-col items-end">
            <span className="font-label text-primary-container uppercase tracking-[0.4em] text-[10px] font-black drop-shadow-md">
              The Legend
            </span>
            <span className="text-white/60 text-[9px] uppercase tracking-[0.2em]">Since 2018</span>
          </div>
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-primary-container/60" />
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container/80 shadow-[0_0_30px_rgba(255,215,0,0.4)]">
            <Image src="/images/logo.png" alt="Pawar Cafe Logo" fill className="object-cover" unoptimized />
          </div>
        </div>

        <h1 className="hero-animate opacity-0 font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-tight md:leading-[0.9] tracking-tighter mb-3 py-1">
          <span className="inline-block drop-shadow-2xl mr-2">पवार</span>
          <span className="text-gradient-gold inline-block drop-shadow-2xl">कॅफे</span>
        </h1>

        <p className="hero-animate opacity-0 text-white/80 font-sans text-sm md:text-base max-w-sm ml-auto mb-8 leading-relaxed border-r-2 border-primary-container/50 pr-4">
          Where Udgir's finest ingredients meet culinary passion. Prepare your senses for an unforgettable experience.
        </p>

        <div className="hero-animate opacity-0 flex flex-wrap sm:flex-nowrap gap-4 justify-end items-center">
          <a
            href="#about"
            className="group flex items-center justify-center gap-2 text-white text-xs px-6 py-3 rounded-full hover:bg-white/5 transition-all duration-300 uppercase tracking-widest font-bold whitespace-nowrap"
          >
            <span>Our Story</span>
            <span className="w-6 h-px bg-white/40 group-hover:bg-white group-hover:w-8 transition-all" />
          </a>
          <a
            href="#menu"
            className="relative overflow-hidden group bg-primary-container text-on-primary-fixed font-black text-xs px-8 py-3 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 uppercase tracking-widest whitespace-nowrap"
          >
            <span className="relative z-10">Discover Menu</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
