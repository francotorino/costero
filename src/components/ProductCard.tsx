"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";
import { Product } from "@/lib/products";

function ImagePlaceholder({ category }: { category: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-cream-dark gap-3 p-8">
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12 text-sand"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <path d="M8 12 Q16 8 32 12 Q48 16 56 12 L56 52 Q48 48 32 52 Q16 56 8 52 Z" />
        <path d="M8 22 Q16 18 32 22 Q48 26 56 22" />
        <path d="M8 32 Q16 28 32 32 Q48 36 56 32" />
        <path d="M8 42 Q16 38 32 42 Q48 46 56 42" />
      </svg>
      <span className="font-display text-sm italic text-muted">{category}</span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [imgError, setImgError] = useState(false);
  const [added, setAdded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const images = product.images && product.images.length > 1 ? product.images : null;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === 0 ? images!.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === images!.length - 1 ? 0 : i + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || !images) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      setCurrentIndex((i) =>
        diff > 0
          ? (i === images.length - 1 ? 0 : i + 1)
          : (i === 0 ? images.length - 1 : i - 1)
      );
    }
    setTouchStartX(null);
  };

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const currentImage = images ? images[currentIndex] : product.image ?? null;
  const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

  return (
    <article className="group flex flex-col bg-warm-white border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
      {/* Image area */}
      <div
        className="relative aspect-[4/3] overflow-hidden"
        onTouchStart={images ? handleTouchStart : undefined}
        onTouchEnd={images ? handleTouchEnd : undefined}
      >
        {imgError || !currentImage ? (
          <ImagePlaceholder category={product.category} />
        ) : isVideo(currentImage) ? (
          <video
            src={currentImage}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={currentImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            onError={() => setImgError(true)}
          />
        )}

        {/* Carousel controls */}
        {images && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-warm-white/80 backdrop-blur-sm border border-border/60 rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-warm-white"
              aria-label="Foto anterior"
            >
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 4l-4 4 4 4" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-warm-white/80 backdrop-blur-sm border border-border/60 rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-warm-white"
              aria-label="Foto siguiente"
            >
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
              </svg>
            </button>
            {/* Dots */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                  className={`rounded-full transition-all duration-200 ${i === currentIndex ? "w-4 h-1.5 bg-warm-white" : "w-1.5 h-1.5 bg-warm-white/50"}`}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Category badge */}
        <span className="absolute top-3.5 left-3.5 bg-warm-white/90 backdrop-blur-sm text-body font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border border-border/60">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="font-display text-[1.25rem] md:text-[1.35rem] font-medium text-charcoal leading-snug mb-2.5">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-muted leading-relaxed flex-1 mb-5 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-border/60">
          {/* Price */}
          <div>
            {product.price ? (
              <p className="font-sans text-lg font-semibold text-charcoal">
                ${product.price.toLocaleString("es-UY")}
              </p>
            ) : (
              <p className="font-display text-base italic text-muted">
                Consultar precio
              </p>
            )}
          </div>

          {/* Add button */}
          <button
            onClick={handleAdd}
            aria-label={added ? "Agregado al carrito" : "Agregar al carrito"}
            className={`flex-shrink-0 flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.06em] px-4 py-2.5 rounded-full transition-all duration-200 active:scale-95 ${
              added
                ? "bg-wood-light/30 text-wood-deep border border-wood-light"
                : "bg-charcoal text-warm-white hover:bg-wood"
            }`}
          >
            {added ? (
              <>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Agregado
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.7}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                </svg>
                Comprar
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
