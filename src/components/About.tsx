import Image from "next/image";

export default function About() {
  return (
    <section id="nosotros" className="py-14 md:py-20 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Mobile layout */}
        <div className="flex flex-col gap-8 md:hidden">
          <h2 className="font-display text-3xl font-light text-charcoal leading-tight">
            Costero desde 2013
          </h2>

          <div className="space-y-5 font-sans text-[15px] text-body leading-[1.75]">
            <p>
              Costero es un emprendimiento de artesanía en madera creado por{" "}
              <strong className="font-medium text-charcoal">Ignacio Torino</strong>,
              carpintero y artesano de Ciudad de la Costa, Uruguay.
            </p>
            <p>
              Cada pieza está hecha de forma artesanal, combinando funcionalidad,
              madera y detalles únicos. Costero ha participado en ferias y exposiciones
              como la{" "}
              <strong className="font-medium text-charcoal">Expo Prado</strong>,
              realizando envíos a todo el país.
            </p>
          </div>

          {/* Image — explicit height on mobile */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <Image
              src="/products/sobrenosotros.jpg"
              alt="Ignacio Torino — Costero Artesanía"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
            {[
              { value: "100%", label: "Artesanal" },
              { value: "UY", label: "Made in Uruguay" },
              { value: "+13", label: "Años siendo Costero" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-2xl font-medium text-charcoal">{value}</p>
                <p className="font-sans text-xs text-muted mt-1 tracking-wide">{label}</p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/59894251731"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-body border-b border-border hover:text-wood hover:border-wood transition-all duration-200 pb-0.5 self-start"
          >
            Consultanos por WhatsApp
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Desktop layout — 2 columns */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-20 md:items-center">
          {/* Image left */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream-dark max-w-sm">
            <Image
              src="/products/sobrenosotros.jpg"
              alt="Ignacio Torino — Costero Artesanía"
              fill
              sizes="384px"
              className="object-cover"
            />
          </div>

          {/* Text right */}
          <div>
            <h2 className="font-display text-[2.6rem] font-light text-charcoal leading-tight mb-8">
              Costero desde 2013
            </h2>

            <div className="space-y-5 font-sans text-base text-body leading-[1.75]">
              <p>
                Costero es un emprendimiento de artesanía en madera creado por{" "}
                <strong className="font-medium text-charcoal">Ignacio Torino</strong>,
                carpintero y artesano de Ciudad de la Costa, Uruguay.
              </p>
              <p>
                Cada pieza está hecha de forma artesanal, combinando funcionalidad,
                madera y detalles únicos. Costero ha participado en ferias y exposiciones
                como la{" "}
                <strong className="font-medium text-charcoal">Expo Prado</strong>,
                realizando envíos a todo el país.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {[
                { value: "100%", label: "Artesanal" },
                { value: "UY", label: "Made in Uruguay" },
                { value: "+13", label: "Años siendo Costero" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-2xl font-medium text-charcoal">{value}</p>
                  <p className="font-sans text-xs text-muted mt-1 tracking-wide">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/59894251731"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium text-body border-b border-border hover:text-wood hover:border-wood transition-all duration-200 pb-0.5"
            >
              Consultanos por WhatsApp
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
