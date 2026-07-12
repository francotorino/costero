import Image from "next/image";

function WaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.05 0C5.495 0 0 5.495 0 12.05c0 2.125.56 4.124 1.536 5.862L.056 23.76a.488.488 0 00.591.598l5.88-1.541A12.002 12.002 0 0012.05 24C18.605 24 24 18.505 24 11.95 24 5.395 18.605 0 12.05 0zm0 21.818a9.79 9.79 0 01-4.993-1.364l-.358-.212-3.716.974.99-3.623-.234-.372A9.773 9.773 0 012.237 12c0-5.409 4.404-9.818 9.816-9.818 5.41 0 9.812 4.41 9.812 9.818 0 5.41-4.402 9.818-9.815 9.818z" />
    </svg>
  );
}

function IgIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FbIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-charcoal text-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 md:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Brand */}
          <div>
            <Image
              src="/costero.png"
              alt="Costero Artesanía"
              width={220}
              height={220}
              className="h-24 w-auto object-contain mb-5 opacity-90"
            />
            <p className="font-sans text-sm text-warm-white/50 leading-relaxed mb-7">
              Diseño y artesanía en piezas únicas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-warm-white/30 mb-6">
              Navegación
            </h3>
            <ul className="space-y-3.5">
              {[
                { href: "#productos", label: "Productos" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#contacto", label: "Contacto" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="font-sans text-sm text-warm-white/60 hover:text-warm-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-warm-white/30 mb-6">
              Contacto
            </h3>
            <div className="flex gap-10">
              {/* Links */}
              <ul className="space-y-4">
                <li>
                  <a href="https://wa.me/59894251731" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-sans text-sm text-warm-white/70 hover:text-warm-white transition-colors duration-200 group">
                    <WaIcon className="w-4 h-4 flex-shrink-0 group-hover:text-[#25D366] transition-colors" />
                    094 251 731
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/costero_artesania/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-sans text-sm text-warm-white/70 hover:text-warm-white transition-colors duration-200 group">
                    <IgIcon className="w-4 h-4 flex-shrink-0" />
                    @costero_artesania
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/costerouy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-sans text-sm text-warm-white/70 hover:text-warm-white transition-colors duration-200 group">
                    <FbIcon className="w-4 h-4 flex-shrink-0" />
                    Costero Artesanía
                  </a>
                </li>
              </ul>
              {/* Location & shipping */}
              <div className="flex flex-col justify-center gap-3 border-l border-warm-white/10 pl-10">
                <p className="font-sans text-sm text-warm-white/70">Ciudad de la Costa, Uruguay</p>
                <p className="font-sans text-sm text-warm-white/70">Envíos a todo el país</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-warm-white/25">
            © {year} Costero Artesanía · Ciudad de la Costa, Uruguay
          </p>
          <p className="font-sans text-xs text-warm-white/20">
            Hecho por Costero.
          </p>
        </div>
      </div>
    </footer>
  );
}
