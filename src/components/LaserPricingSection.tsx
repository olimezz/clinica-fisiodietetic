"use client";

import React, { useState } from "react";
import { LASER_TARIFFS, type LaserTariffItem } from "@/data/clinic-data";
import {
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  Clock,
  ShieldCheck,
  BadgeEuro,
} from "lucide-react";

type FilterTab = "todas" | "promocion" | "mujer" | "hombre" | "facial";

interface LaserPricingSectionProps {
  onBookLaserZone: (zone: LaserTariffItem) => void;
}

export function LaserPricingSection({ onBookLaserZone }: LaserPricingSectionProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("todas");

  const filteredTariffs = LASER_TARIFFS.filter((item) => {
    if (activeTab === "todas") return true;
    if (activeTab === "promocion") return item.category === "promocion";
    if (activeTab === "mujer")
      return item.category === "mujer" || item.category === "unisex" || item.id === "cc-mujer";
    if (activeTab === "hombre")
      return item.category === "hombre" || item.category === "unisex" || item.id === "cc-hombre";
    if (activeTab === "facial") return item.bodyArea === "facial";
    return true;
  });

  const tabs: { id: FilterTab; label: string; countBadge?: string }[] = [
    { id: "todas", label: "Todas las Zonas (18)" },
    { id: "promocion", label: "Promoción Cuerpo Completo", countBadge: "95€ / 105€" },
    { id: "mujer", label: "Mujer y Zonas Sueltas" },
    { id: "hombre", label: "Hombre y Deportistas" },
    { id: "facial", label: "Zona Facial (Desde 13€)" },
  ];

  return (
    <section
      id="tarifas-laser"
      aria-labelledby="laser-pricing-heading"
      className="py-16 sm:py-22 bg-gradient-to-b from-slate-900 via-slate-900 to-teal-950 text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado y Propuesta Sin Bonos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-8 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/60 border border-teal-700/70 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              Depilación Láser Diodo Indoloro en València · Sin Bonos
            </span>
            <h2
              id="laser-pricing-heading"
              className="font-display font-extrabold text-white tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 2.6vw + 0.9rem, 2.65rem)" }}
            >
              Tarifas Oficiales por Sesión Suelta: Sin atarte a bonos caros
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              Apto para todo tipo de pieles todo el año. Con nuestra especialista{" "}
              <strong className="text-white">Erica Ortiz</strong>, pagas únicamente la sesión que realizas ese día, con
              total transparencia y resultados visibles desde las primeras sesiones.
            </p>
          </div>

          {/* Tarjeta Destacada Cuerpo Completo */}
          <div className="lg:col-span-4 p-5 rounded-3xl bg-gradient-to-br from-teal-700 to-primary border border-teal-400/40 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-200 mb-2">
              ⭐ Promoción Estrella (Sesión Suelta)
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-2xl bg-slate-950/35 border border-white/15">
                <p className="text-xs text-teal-100">Cuerpo Completo Mujer</p>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-0.5">
                  95€
                  <span className="text-xs font-normal text-teal-200"> /sesión</span>
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/35 border border-white/15">
                <p className="text-xs text-teal-100">Cuerpo Completo Hombre</p>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-0.5">
                  105€
                  <span className="text-xs font-normal text-teal-200"> /sesión</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros Interactivos con Touch Target >= 44px */}
        <div
          role="tablist"
          aria-label="Filtrar tarifas de depilación láser diodo"
          className="flex flex-wrap gap-2 mb-8"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl font-display font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-teal-500 text-slate-950 shadow-md"
                    : "bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700"
                }`}
              >
                <span>{tab.label}</span>
                {tab.countBadge && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                      isActive ? "bg-slate-950 text-teal-300" : "bg-teal-900 text-teal-200"
                    }`}
                  >
                    {tab.countBadge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Griglia de Tarifas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTariffs.map((item) => {
            const isPromo = item.category === "promocion";
            return (
              <div
                key={item.id}
                className={`rounded-2xl p-5 border transition-all flex flex-col justify-between gap-4 ${
                  isPromo
                    ? "bg-gradient-to-br from-teal-900/90 to-slate-800 border-teal-400/60 shadow-lg"
                    : "bg-slate-800/75 hover:bg-slate-800 border-slate-700/90 hover:border-teal-500/50"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        {isPromo && (
                          <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950">
                            Cuerpo Completo
                          </span>
                        )}
                        {item.popular && !isPromo && (
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                            Muy Solicitado
                          </span>
                        )}
                        <span className="text-[11px] text-slate-400 inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {item.durationApprox}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-white">
                        {item.zone}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-display font-extrabold text-2xl sm:text-3xl text-teal-300">
                        {item.price}€
                      </span>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-400">
                        por sesión
                      </span>
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => onBookLaserZone(item)}
                  className={`min-h-[44px] w-full px-4 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 ${
                    isPromo
                      ? "bg-accent hover:bg-accent-hover text-white shadow-sm"
                      : "bg-slate-700/90 hover:bg-teal-600 text-white"
                  }`}
                >
                  <CalendarCheck className="w-4 h-4 shrink-0" />
                  <span>Reservar {item.zone} ({item.price}€)</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Nota de garantía inferior */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-teal-400 shrink-0" />
            <span>
              <strong>Garantía Clínica FisioDietetic:</strong> Precios finales con IVA incluido por sesión individual.
              Puedes combinar varias zonas sueltas en la misma cita en <strong>Sede Jesús (València)</strong> o{" "}
              <strong>Alboraya</strong>.
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-bold text-teal-300 shrink-0">
            <BadgeEuro className="w-4 h-4" /> Sin permanencia ni financiación
          </span>
        </div>
      </div>
    </section>
  );
}
