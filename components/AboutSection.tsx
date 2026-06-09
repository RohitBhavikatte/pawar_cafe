"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        const el = sectionRef.current;
        if (!el) return;

        gsap.fromTo(el.querySelector('.vision-text'),
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 75%' } }
        );
        gsap.fromTo(el.querySelector('.vision-image'),
          { x: 60, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.2,
            scrollTrigger: { trigger: el, start: 'top 75%' } }
        );
      } catch { /* CSS fallback */ }
    };
    initGSAP();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 px-6 md:px-16 bg-surface relative border-t border-outline-variant/10 overflow-hidden"
    >
      {/* Ambient orbs — no overlay on images */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,140,0,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Text Side */}
        <div className="vision-text order-2 lg:order-1 space-y-8">
          <div>
            <span className="inline-block text-primary-container font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-2 rounded-full mb-5 border border-primary-container/30 bg-primary-container/8">
              Our Story
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-on-surface">
              The{' '}
              <span className="text-gradient-gold">Vision</span>
            </h2>
          </div>

          <div className="space-y-6 text-on-surface-variant text-base md:text-lg font-medium leading-relaxed">
            <p>
              Pawar Cafe ही फक्त एक खाण्याची जागा नाही — हे एक <strong className="text-on-surface">movement</strong> आहे.
              आम्ही street food ची उष्णता आणि एक वातावरण घेऊन आलो आहोत जे तुम्हाला थक्क करेल.
            </p>

            {/* Quote card — claymorphism */}
            <div className="relative group cursor-crosshair"
              style={{
                background: 'linear-gradient(135deg, rgba(255,215,0,0.07) 0%, rgba(255,140,0,0.04) 100%)',
                border: '1px solid rgba(255,215,0,0.18)',
                borderRadius: 20,
                padding: '24px 28px',
                boxShadow: '0 8px 32px rgba(255,215,0,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div className="absolute top-0 left-6 w-8 h-1 rounded-full bg-primary-container" />
              <p className="text-primary-container text-2xl md:text-3xl font-black font-display italic leading-tight">
                &ldquo;तुम्ही आम्हाला वेळ द्या,
                <br />आम्ही तुम्हाला QUALITY देऊ...&rdquo;
              </p>
              <p className="text-on-surface-variant text-sm mt-3 font-medium">— Bajrang Pawar, Founder</p>
            </div>

            <p>
              From humble beginnings to becoming Udgir&apos;s ultimate taste destination — every plate is
              crafted to be a total <strong className="text-on-surface">brain-melt of flavor</strong>. Welcome to the feast.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { value: '10+', label: 'Menu Items' },
              { value: '500+', label: 'Happy Customers' },
              { value: '⭐ 5', label: 'Star Rating' },
            ].map((stat) => (
              <div key={stat.label}
                style={{
                  background: 'rgba(255,215,0,0.05)',
                  border: '1px solid rgba(255,215,0,0.15)',
                  borderRadius: 16,
                  padding: '16px 12px',
                  textAlign: 'center',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                <div className="text-gradient-gold font-display font-black text-2xl">{stat.value}</div>
                <div className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Side — claymorphism frame, NO dark overlay on image */}
        <div className="vision-image order-1 lg:order-2">
          <div
            className="relative group"
            style={{
              borderRadius: 28,
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,215,0,0.12)',
              transition: 'transform 0.5s ease, box-shadow 0.5s ease',
            }}
          >
            {/* The actual image — full color, no overlay */}
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/founder.jpg"
                alt="Bajrang Pawar — Founder of Pawar Cafe"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Name card — only at the BOTTOM, minimal gradient just for text legibility */}
            <div
              className="absolute bottom-0 left-0 right-0 px-6 py-5"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
              }}
            >
              <p className="text-white font-display font-black text-3xl uppercase tracking-wider drop-shadow-lg">
                Bajrang Pawar
              </p>
              <p className="text-primary-container text-xs uppercase tracking-[0.3em] font-bold mt-1">
                Founder & Head Chef
              </p>
            </div>

            {/* Claymorphism shine overlay — top edge only */}
            <div
              className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, transparent 100%)',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
