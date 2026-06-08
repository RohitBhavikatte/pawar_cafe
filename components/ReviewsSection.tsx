"use client";

const reviews = [
  { name: "Rahul S.", rating: 5, text: "The Misal here is absolutely legendary. Best in Udgir, hands down!" },
  { name: "Priya M.", rating: 5, text: "Cheese Burst Pizza is out of this world. चव विसरता येत नाही!" },
  { name: "Amit K.", rating: 4, text: "Vada Pav authentic आहे. Vibes are unmatched. Highly recommended." },
  { name: "Sneha P.", rating: 5, text: "\"तुम्ही आम्हाला वेळ द्या\" — completely true! Quality never disappoints." },
  { name: "Vikas R.", rating: 5, text: "Paneer 65 is fire. Premium ambiance at very affordable prices." },
  { name: "Pooja D.", rating: 5, text: "Cold coffee + Momos combo hit different. Pawar Cafe एकदम बेस्ट!" },
];

const starColors = ['#FFD700', '#FFD700', '#FFD700', '#FFD700', '#FFD700'];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-24 px-6 md:px-16 bg-surface-container-lowest relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,215,0,0.08)' }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800, height: 400,
          background: 'radial-gradient(ellipse, rgba(255,215,0,0.03) 0%, transparent 70%)',
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-container font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-2 rounded-full mb-5 border border-primary-container/30 bg-primary-container/8">
            What People Say
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-on-surface">
            Customer{' '}
            <span className="text-gradient-gold">Verdict</span>
          </h2>
        </div>

        {/* Cards Grid — claymorphism */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 no-scrollbar snap-x snap-mandatory hide-scroll-bar items-stretch">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,215,0,0.03) 100%)',
                border: '1px solid rgba(255,215,0,0.12)',
                borderRadius: 24,
                padding: '28px 24px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.05) inset',
                backdropFilter: 'blur(12px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 48px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,215,0,0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth > 768) {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.05) inset';
                }
              }}
            >
              {/* Shine top edge */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)',
              }} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24"
                    fill={i < review.rating ? starColors[i] : 'none'}
                    stroke={i < review.rating ? starColors[i] : 'rgba(255,215,0,0.3)'}
                    strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,215,0,0.08)' }}>
                <div style={{
                  width: 36, height: 36,
                  background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-syne, sans-serif)',
                  fontWeight: 900, fontSize: 16,
                  color: '#1a1200',
                  flexShrink: 0,
                }}>
                  {review.name.charAt(0)}
                </div>
                <span className="text-on-surface font-bold text-sm tracking-wide">{review.name}</span>
                <span className="ml-auto text-primary-container text-[10px] font-bold uppercase tracking-widest">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
