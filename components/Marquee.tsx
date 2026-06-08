'use client';

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const values = ["DREAM", "PLAN", "ACTION", "SUCCESS"];

export default function Marquee() {
  return (
    <div className="bg-surface-container py-6 border-y-2 border-primary-container/20 overflow-hidden relative group cursor-wait">
      {/* Intense glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-container to-tertiary-fixed opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
      
      {/* Ultra-fast marquee */}
      <div className="flex space-x-12 animate-[marquee_10s_linear_infinite] whitespace-nowrap group-hover:animate-[marquee_5s_linear_infinite] opacity-90 group-hover:opacity-100 transition-all items-center">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex space-x-12 items-center">
            {values.map((value, idx) => (
              <div key={`${value}-${i}-${idx}`} className="flex items-center gap-4 hover:scale-125 transition-transform duration-200">
                <CheckCircle2 className="text-primary-container animate-pulse" />
                <span className="font-display text-4xl md:text-5xl text-primary-fixed uppercase tracking-[0.2em] font-black drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
