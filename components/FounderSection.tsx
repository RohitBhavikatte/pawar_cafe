import Image from 'next/image';

export default function FounderSection() {
  return (
    <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-700 ease-out"></div>
          <div className="relative aspect-square max-w-md mx-auto md:max-w-none rounded-[2rem] overflow-hidden border border-outline-variant/30 shadow-2xl">
            <Image
              src="/images/founder.jpg"
              alt="Founder of Pawar Cafe"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-display-md text-3xl md:text-5xl text-on-surface mb-6">
            Meet the <span className="text-gradient-gold">Visionary</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed mb-6">
            Pawar Cafe isn't just about food; it's about an unyielding passion for bringing the true "Taste of Udgir" to every plate. Our founder's journey started with a simple belief: that high-quality, authentic flavors should be accessible, exciting, and unforgettable.
          </p>
          <p className="font-body-md text-on-surface-variant leading-relaxed mb-8">
            From crafting the legendary Pizza Challenge to perfecting the fiery Indo-Chinese menu, every recipe is a testament to dedication and culinary excellence. It's more than a cafe—it's a community built on flavor and success.
          </p>
          <div className="flex flex-col gap-2">
            <span className="font-headline-md text-on-surface">Rohit Pawar</span>
            <span className="font-label-md text-primary tracking-widest uppercase">Founder & Head Chef</span>
          </div>
        </div>

      </div>
    </section>
  );
}
