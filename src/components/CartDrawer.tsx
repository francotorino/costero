"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.05 0C5.495 0 0 5.495 0 12.05c0 2.125.56 4.124 1.536 5.862L.056 23.76a.488.488 0 00.591.598l5.88-1.541A12.002 12.002 0 0012.05 24C18.605 24 24 18.505 24 11.95 24 5.395 18.605 0 12.05 0zm0 21.818a9.79 9.79 0 01-4.993-1.364l-.358-.212-3.716.974.99-3.623-.234-.372A9.773 9.773 0 012.237 12c0-5.409 4.404-9.818 9.816-9.818 5.41 0 9.812 4.41 9.812 9.818 0 5.41-4.402 9.818-9.815 9.818z" />
    </svg>
  );
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, handleCheckout } =
    useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm animate-fade-in"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-label="Carrito de compras"
        aria-modal="true"
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-[380px] bg-warm-white flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-display text-xl font-medium text-charcoal">
            Tu pedido
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar carrito"
            className="text-muted hover:text-charcoal transition-colors p-1"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-5 text-center px-8 py-16">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-border" fill="none" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              <div>
                <p className="font-display text-xl italic text-muted mb-1">
                  Tu carrito está vacío
                </p>
                <p className="font-sans text-sm text-muted/70">
                  Explorá los productos y agregá lo que te guste.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-1 font-sans text-sm font-medium text-wood underline underline-offset-4"
              >
                Ver productos
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-border px-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 py-5">
                  {/* Thumbnail */}
                  <div className="relative w-[68px] h-[68px] flex-shrink-0 rounded-xl overflow-hidden bg-cream-dark">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="68px"
                      className="object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-[1rem] font-medium text-charcoal leading-tight mb-1 line-clamp-2">
                      {item.name}
                    </p>
                    {item.price ? (
                      <p className="font-sans text-sm font-semibold text-wood">
                        ${(item.price * item.quantity).toLocaleString("es-UY")}
                      </p>
                    ) : (
                      <p className="font-sans text-xs italic text-muted">A confirmar</p>
                    )}

                    {/* Qty + remove */}
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center border border-border rounded-full overflow-hidden text-sm">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-3 py-1.5 text-body hover:bg-cream-dark transition-colors"
                          aria-label="Disminuir"
                        >
                          −
                        </button>
                        <span className="px-2 font-sans font-medium text-charcoal min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-3 py-1.5 text-body hover:bg-cream-dark transition-colors"
                          aria-label="Aumentar"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="font-sans text-xs text-muted hover:text-charcoal transition-colors underline underline-offset-4"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer checkout */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-6 flex flex-col gap-4 bg-warm-white">
            {total > 0 && (
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-sm text-muted">Total estimado</span>
                <span className="font-display text-2xl font-medium text-charcoal">
                  ${total.toLocaleString("es-UY")}
                </span>
              </div>
            )}

            <p className="font-sans text-xs text-muted leading-snug">
              El precio final se confirma por WhatsApp. Los precios son estimativos.
            </p>

            <button
              onClick={handleCheckout}
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eba57] active:scale-[0.98] text-white font-sans text-sm font-semibold tracking-[0.05em] py-4 rounded-full transition-all duration-200"
            >
              <WaIcon />
              Finalizar por WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
