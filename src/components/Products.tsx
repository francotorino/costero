import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section id="productos" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="font-sans text-[11px] font-medium tracking-[0.22em] text-wood uppercase mb-3">
            Colección
          </p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-3xl md:text-4xl font-light text-charcoal">
              Productos en stock
            </h2>
            <a
              href="https://wa.me/59894251731"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 font-sans text-sm text-muted hover:text-body transition-colors duration-200 pb-0.5 border-b border-border"
            >
              Pedidos a medida
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
          <div className="mt-5 h-px bg-border" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-center font-sans text-sm text-muted">
          ¿Buscás algo específico?{" "}
          <a
            href="https://wa.me/59894251731"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body underline underline-offset-4 hover:text-wood transition-colors"
          >
            Consultanos tu idea por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
