"use client";

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('pawar_cafe_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pawar_cafe_cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 max-w-sm w-[calc(100%-48px)] z-50 animate-fade-in-up"
         style={{
           background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,215,0,0.03) 100%)',
           border: '1px solid rgba(255,215,0,0.12)',
           borderRadius: 24,
           padding: '24px',
           boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
           backdropFilter: 'blur(16px)',
         }}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🍪</span>
          <h4 className="font-display font-bold text-on-surface">We value your privacy</h4>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
        </p>
        <div className="flex gap-3 mt-2">
          <button 
            onClick={() => {
              localStorage.setItem('pawar_cafe_cookie_consent', 'false');
              setShow(false);
            }}
            className="flex-1 px-4 py-2 rounded-xl border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-xs font-bold uppercase tracking-wider"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 px-4 py-2 rounded-xl bg-primary-container text-on-primary-fixed hover:bg-primary-container/90 hover:scale-105 transition-all text-xs font-black uppercase tracking-wider shadow-[0_0_15px_rgba(255,215,0,0.3)]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
