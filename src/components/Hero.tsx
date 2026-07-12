import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-36 pb-0 overflow-hidden bg-cream">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-0 md:gap-16 items-center">

          {/* Text column */}
          <div className="pb-0 md:pb-16">

            {/* Eyebrow */}
            <p className="font-sans text-[11px] font-medium tracking-[0.22em] text-wood uppercase mb-6 animate-fade-up-d1">
              Ciudad de la Costa · Montevideo, Uruguay
            </p>

            {/* Headline */}
            <h1
              className="animate-fade-up-d1 mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              <span className="block text-[3rem] md:text-[4rem] lg:text-[4.8rem] font-semibold tracking-[0.28em] leading-none text-charcoal uppercase">
                Costero
              </span>
              <span className="block text-[1.1rem] md:text-[1.3rem] font-normal tracking-[0.05em] text-wood mt-3">
                Diseño artesanal en madera.
              </span>
            </h1>

            {/* Mobile-only image — between headline and body */}
            <div className="block md:hidden relative h-64 rounded-2xl overflow-hidden bg-cream-dark mb-8 animate-fade-up-d2">
              <Image
                src="/products/huevera32.jpg"
                alt="Huevera artesanal de madera — Costero"
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent" />
              {/* Featured badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-warm-white text-charcoal font-sans text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1.5 rounded-full shadow-sm">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                Producto destacado
              </div>
              <div className="absolute bottom-3 left-4 bg-warm-white/90 backdrop-blur-sm border border-border/60 rounded-xl px-3 py-2 shadow-sm">
                <p className="font-display text-sm font-medium text-charcoal leading-tight">Huevera artesanal</p>
                <p className="font-sans text-[11px] text-muted mt-0.5">32 huevos · $1.800</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up-d3">
              <a
                href="#productos"
                className="inline-flex items-center gap-2 bg-charcoal text-warm-white font-sans text-sm font-medium tracking-[0.06em] px-7 py-3.5 rounded-full hover:bg-wood transition-colors duration-300"
              >
                Ver productos
              </a>
              <a
                href="https://wa.me/59894251731"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-body font-sans text-sm font-medium tracking-[0.06em] px-7 py-3.5 rounded-full hover:border-sand hover:bg-cream-dark transition-all duration-300"
              >
                Consultar por WhatsApp
              </a>
            </div>

            {/* Shipping note */}
            <div className="mt-12 mb-16 md:mb-0 flex items-center gap-3 animate-fade-up-d3">
              <span className="block w-8 h-px bg-border" />
              <p className="font-sans text-xs text-muted tracking-[0.14em] uppercase">
                Envíos a todo el país
              </p>
            </div>
          </div>

          {/* Desktop-only image column */}
          <div className="hidden md:block relative h-[560px] animate-fade-up-d2">
            <div className="absolute inset-0 rounded-t-2xl overflow-hidden bg-cream-dark">
              <Image
                src="/products/huevera32.jpg"
                alt="Huevera artesanal de madera — Costero"
                fill
                sizes="50vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
            </div>
            {/* Featured badge — outside overflow-hidden so it's not clipped */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-warm-white text-charcoal font-sans text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1.5 rounded-full shadow-sm">
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Producto destacado
            </div>
            <div className="absolute bottom-8 left-5 bg-warm-white/90 backdrop-blur-sm border border-border/60 rounded-xl px-4 py-3 shadow-sm">
              <p className="font-display text-base font-medium text-charcoal leading-tight">Huevera artesanal</p>
              <p className="font-sans text-xs text-muted mt-0.5">32 huevos · $1.800</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
