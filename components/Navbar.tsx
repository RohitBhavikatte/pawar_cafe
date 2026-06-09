"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Our Story', href: '/about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll detection for navbar blur intensity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy — highlight active section in nav
  useEffect(() => {
    const sections = navLinks
      .filter((l) => l.href.startsWith('#') || l.href.startsWith('/#'))
      .map((l) => {
        const id = l.href.split('#')[1];
        return document.getElementById(id);
      })
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection('/#' + entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Dark/light mode
  useEffect(() => {
    const saved = localStorage.getItem('pawar_theme');
    if (saved === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('pawar_theme', 'dark');
    } else {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('pawar_theme', 'light');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-2xl shadow-lg border-b border-primary-container/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
          
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group pt-1 pb-1">
            <div className="relative h-11 w-11 rounded-full overflow-hidden border-2 border-primary-container/60 group-hover:border-primary-container transition-colors duration-300 shadow-[0_0_12px_rgba(255,215,0,0.3)] shrink-0">
              <Image
                src="/images/logo.png"
                alt="Pawar Cafe Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col pt-2 pb-1">
              <span className="text-gradient-gold font-display font-black text-lg uppercase tracking-tight leading-normal" style={{ paddingBottom: '6px', paddingTop: '4px' }}>
                पवार कॅफे
              </span>
              <span className="text-on-surface-variant text-[9px] uppercase tracking-[0.25em] font-medium leading-none -mt-2">
                Taste of Udgir
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-lg group ${
                    isActive
                      ? 'text-primary-container'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-primary-container transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                    }`}
                    style={{ transformOrigin: 'left' }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:border-primary-container/50 hover:text-primary-container transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
              )}
            </button>

            {/* CTA */}
            <Link
              href="/menu"
              className="bg-primary-container text-on-primary-fixed font-bold text-xs px-5 py-2.5 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 uppercase tracking-wider"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-outline-variant/40 flex items-center justify-center text-on-surface-variant"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-full border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary-container transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="17" y2="17"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu — slide down panel */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#0c0f0f]/95 backdrop-blur-2xl border-t border-outline-variant/20 px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-4 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 ${
                  activeSection === link.href
                    ? 'text-primary-container bg-primary-container/10 border border-primary-container/20'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="mt-3 bg-primary-container text-on-primary-fixed font-bold text-sm py-3 px-6 rounded-xl text-center hover:opacity-90 transition-opacity"
            >
              🍕 Order Now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
