"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<'intro' | 'text' | 'exit'>('intro');

  useEffect(() => {
    // Only show once per session to avoid annoying the user on every route change
    if (typeof window !== 'undefined' && sessionStorage.getItem('pawar_loaded_v3')) {
      setShow(false);
      return;
    }

    const t1 = setTimeout(() => setPhase('text'), 600);
    const t2 = setTimeout(() => setPhase('exit'), 2600);
    const t3 = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('pawar_loaded_v3', '1');
    }, 3200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: '#080a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: phase === 'exit' ? 0 : 1,
        transition: 'opacity 0.7s ease',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      {/* Glow blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '30%', left: '20%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(255,215,0,0.07) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(40px)',
          animation: 'pulse 3s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '25%', right: '20%',
          width: 320, height: 320,
          background: 'radial-gradient(circle, rgba(255,140,0,0.05) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(40px)',
          animation: 'pulse 3s ease-in-out infinite 1.5s',
        }} />
      </div>

      {/* Scan line */}
      <div style={{
        position: 'absolute', left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)',
        animation: 'scanLine 2.5s ease-in-out forwards',
      }} />

      {/* Logo */}
      <div style={{
        position: 'relative',
        opacity: phase === 'intro' ? 0 : 1,
        transform: phase === 'intro' ? 'scale(0.7)' : 'scale(1)',
        transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.34,1.56,0.64,1)',
        transitionDelay: '100ms',
      }}>
        <div style={{
          position: 'absolute', inset: -16,
          border: '1px solid rgba(255,215,0,0.2)',
          borderRadius: '50%',
          animation: 'ringPulse 2s ease-in-out infinite',
        }} />
        <div style={{
          position: 'relative', width: 112, height: 112,
          borderRadius: '50%', overflow: 'hidden',
          border: '2px solid rgba(255,215,0,0.6)',
          boxShadow: '0 0 40px rgba(255,215,0,0.25), inset 0 0 20px rgba(255,215,0,0.05)',
        }}>
          <Image src="/images/logo.png" alt="Pawar Cafe" fill className="object-cover" unoptimized priority />
        </div>
      </div>

      {/* Text */}
      <div style={{
        marginTop: 32, textAlign: 'center',
        opacity: phase === 'text' || phase === 'exit' ? 1 : 0,
        transform: phase === 'text' || phase === 'exit' ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-syne, sans-serif)',
          fontSize: 52, fontWeight: 900,
          textTransform: 'uppercase', letterSpacing: '-0.02em',
          color: 'white', margin: 0, lineHeight: 1,
        }}>
          पवार{' '}
          <span style={{
            background: 'linear-gradient(90deg, #ffd700, #ff8c00, #ffd700)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 2s linear infinite',
          }}>
            कॅफे
          </span>
        </h1>
        <p style={{
          color: 'rgba(255,215,0,0.5)',
          fontSize: 11, letterSpacing: '0.4em',
          textTransform: 'uppercase', marginTop: 8,
        }}>
          Taste of Udgir
        </p>

        {/* Progress bar */}
        <div style={{
          marginTop: 32, width: 180, height: 1,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 2, overflow: 'hidden', margin: '32px auto 0',
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #ffd700, #ff8c00)',
            animation: 'loadBar 2.4s ease-out forwards',
            animationDelay: '0.2s',
            width: '0%',
          }} />
        </div>
        <p style={{
          color: 'rgba(255,255,255,0.2)',
          fontSize: 9, letterSpacing: '0.35em',
          textTransform: 'uppercase', marginTop: 12,
        }}>
          Crafting your experience...
        </p>
      </div>

      <style>{`
        @keyframes scanLine {
          0%   { top: -2px; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50%       { transform: scale(1.12); opacity: 0.1; }
        }
        @keyframes loadBar {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
