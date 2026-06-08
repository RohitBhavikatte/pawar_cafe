import Image from 'next/image';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/pawar_cafe',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCHCmhAUj8r3fmBuZbVLpsDw',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-surface-container-high py-16 px-6 md:px-16 border-t border-outline-variant/20 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-primary-container/5 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-4 relative">
            <div className="absolute inset-0 rounded-full bg-primary-container/20 blur-xl" />
            <Image
              src="/images/logo.png"
              alt="Pawar Cafe"
              width={80}
              height={80}
              className="relative rounded-full border-2 border-primary-container/60"
              unoptimized
            />
          </div>
          <h3 className="font-display text-2xl font-black text-on-surface mb-1 uppercase tracking-tight">
            पवार <span className="text-gradient-gold">कॅफे</span>
          </h3>
          <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.25em] mb-3">
            Taste of Udgir
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-[220px]">
            आमचा स्वाद, आमची शान — serving passion on every plate since day one.
          </p>

          {/* Social Links */}
          <div className="flex gap-3 mt-5">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-9 h-9 rounded-full border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:border-primary-container hover:text-primary-container hover:shadow-[0_0_12px_rgba(255,215,0,0.3)] transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-on-surface font-bold uppercase tracking-widest text-xs mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            {[
              ['Home', '/'],
              ['Our Menu', '/menu'],
              ['The Pizza Challenge', '/pizza-challenge'],
              ['About Us', '/about'],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="hover:text-primary-container transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-4 h-px bg-outline-variant group-hover:bg-primary-container group-hover:w-6 transition-all duration-300" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-on-surface font-bold uppercase tracking-widest text-xs mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li className="flex items-start gap-3">
              <span className="text-primary-container mt-0.5">📍</span>
              <span className="leading-tight">1- Bus Stand Opposite, Pastapure Complex, Udgir</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-container mt-0.5">📍</span>
              <span className="leading-tight">2- Degloor Road, Naik Chowk, Udgir</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-container mt-0.5">📍</span>
              <span className="leading-tight text-primary-container font-bold">3- Coming Soon...</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-container">📸</span>
              <a href="https://www.instagram.com/pawar_cafe" target="_blank" rel="noopener noreferrer" className="hover:text-primary-container transition-colors">
                @pawar_cafe
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary-container">🎬</span>
              <a href="https://www.youtube.com/channel/UCHCmhAUj8r3fmBuZbVLpsDw" target="_blank" rel="noopener noreferrer" className="hover:text-primary-container transition-colors">
                Pawar Cafe YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-on-surface font-bold uppercase tracking-widest text-xs mb-5">
            Opening Hours
          </h4>
          <ul className="space-y-3 text-sm text-on-surface-variant w-full max-w-[200px]">
            {[
              ['Mon – Fri', '8:00 AM – 10:00 PM'],
              ['Saturday', '9:00 AM – 11:00 PM'],
              ['Sunday', '9:00 AM – 11:00 PM'],
            ].map(([day, time]) => (
              <li key={day} className="flex justify-between">
                <span>{day}</span>
                <span className="text-on-surface">{time}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 px-4 py-3 rounded-xl bg-primary-container/10 border border-primary-container/20 text-center">
            <p className="text-primary-container text-xs font-bold uppercase tracking-wider">🟢 Open Now</p>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-3 relative z-10">
        <p className="text-on-surface-variant/50 text-xs">
          © {new Date().getFullYear()} Pawar Cafe — Bajrang Pawar. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-on-surface-variant/50">
          <a href="#" className="hover:text-primary-container transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary-container transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
