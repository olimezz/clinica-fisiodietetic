"use client";

import React, { useRef, useState } from "react";
import { PATIENT_REVIEWS } from "@/data/clinic-data";
import {
  Star,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MessageSquareHeart,
} from "lucide-react";

export function ReviewsCarouselSection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("todas");

  const filteredReviews =
    selectedFilter === "todas"
      ? PATIENT_REVIEWS
      : PATIENT_REVIEWS.filter((r) => r.specialtyId === selectedFilter);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -380 : 380;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const filterButtons = [
    { id: "todas", label: "Todas las Opiniones (6)" },
    { id: "fisioterapia", label: "Fisioterapia y Rehabilitación" },
    { id: "nutricion", label: "Nutrición (Comida Real)" },
    { id: "podologia", label: "Podología y Plantillas" },
    { id: "laser-diodo", label: "Láser Diodo" },
  ];

  return (
    <section
      id="opiniones"
      aria-labelledby="reviews-heading"
      className="py-16 sm:py-22 bg-white border-t border-slate-200/80 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-9">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary-light px-3.5 py-1.5 rounded-full mb-3">
              <MessageSquareHeart className="w-3.5 h-3.5" />
              90% Recomendación Boca a Boca · 4.5★ en Google València
            </span>
            <h2
              id="reviews-heading"
              className="font-display font-extrabold text-ink tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 2.5vw + 0.9rem, 2.55rem)" }}
            >
              Lo que opinan nuestros pacientes reales en València
            </h2>
            <p className="text-base text-ink-secondary mt-2">
              Historias reales de recuperación de lesiones deportivas, pérdida de peso sin batidos, podología y
              depilación láser en <strong>Clínica FisioDietetic</strong>.
            </p>
          </div>

          {/* Controles de Navegación del Carrusel */}
          <div className="flex items-center gap-2.5 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Desplazar opiniones hacia la izquierda"
              className="min-w-[46px] min-h-[46px] rounded-2xl border border-slate-200 bg-slate-50 hover:bg-primary hover:text-white hover:border-primary text-ink flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Desplazar opiniones hacia la derecha"
              className="min-w-[46px] min-h-[46px] rounded-2xl border border-slate-200 bg-slate-50 hover:bg-primary hover:text-white hover:border-primary text-ink flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filtros por Especialidad */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterButtons.map((btn) => {
            const active = selectedFilter === btn.id;
            return (
              <button
                key={btn.id}
                type="button"
                onClick={() => setSelectedFilter(btn.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition-colors ${
                  active
                    ? "bg-primary text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-ink-secondary"
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Carrusel Horizontal Touch / Drag Fluido + Griglia Responsive */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin"
          style={{ scrollbarWidth: "thin" }}
        >
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="snap-start shrink-0 w-[88vw] sm:w-[370px] lg:w-[390px] rounded-3xl bg-background border border-slate-200/90 p-6 sm:p-7 shadow-medical flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-400" aria-label="5 de 5 estrellas">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary bg-teal-100/80 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {review.verifiedLabel}
                  </span>
                </div>

                <div className="relative">
                  <Quote
                    className="w-8 h-8 text-teal-200/70 absolute -top-2 -left-1 pointer-events-none"
                    aria-hidden="true"
                  />
                  <blockquote className="relative z-10 text-sm sm:text-base text-ink font-medium leading-relaxed pl-3">
                    «{review.quote}»
                  </blockquote>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                    {review.author.slice(0, 1)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-ink">{review.author}</p>
                    <p className="text-xs text-primary font-semibold">{review.treatmentTag}</p>
                  </div>
                </div>
                <span className="text-[11px] text-ink-secondary text-right">{review.dateLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
