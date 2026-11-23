"use client";

import React, { useState } from "react";
import { SPECIALTIES, type SpecialtyItem } from "@/data/clinic-data";
import {
  Activity,
  Bone,
  Apple,
  Footprints,
  Hand,
  Droplets,
  Users,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  CalendarCheck,
  X,
  Stethoscope,
  Clock,
  UserCheck,
} from "lucide-react";

interface SpecialtiesSectionProps {
  activeModalSpecialty: SpecialtyItem | null;
  onOpenModal: (spec: SpecialtyItem) => void;
  onCloseModal: () => void;
  onBookSpecialty: (spec: SpecialtyItem) => void;
}

export function SpecialtiesSection({
  activeModalSpecialty,
  onOpenModal,
  onCloseModal,
  onBookSpecialty,
}: SpecialtiesSectionProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const renderSpecialtyIcon = (iconName: SpecialtyItem["iconName"], className = "w-5 h-5") => {
    switch (iconName) {
      case "activity":
        return <Activity className={className} />;
      case "bone":
        return <Bone className={className} />;
      case "apple":
        return <Apple className={className} />;
      case "footprints":
        return <Footprints className={className} />;
      case "hand":
        return <Hand className={className} />;
      case "droplets":
        return <Droplets className={className} />;
      case "users":
        return <Users className={className} />;
      case "sparkles":
        return <Sparkles className={className} />;
      default:
        return <Activity className={className} />;
    }
  };

  return (
    <section
      id="especialidades"
      aria-labelledby="specialties-heading"
      className="py-16 sm:py-22 bg-white border-t border-slate-200/80 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary-light px-3.5 py-1.5 rounded-full mb-3">
              8 Especialidades Clínicas en València y Alboraya
            </span>
            <h2
              id="specialties-heading"
              className="font-display font-extrabold text-ink tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 2.6vw + 0.9rem, 2.6rem)" }}
            >
              Especialidades y Tratamientos 100% Individualizados
            </h2>
            <p className="text-base text-ink-secondary mt-2.5">
              Haz clic en cualquiera de nuestras 8 especialidades para ver en detalle las{" "}
              <strong>patologías tratadas, técnicas clínicas, equipo responsable</strong> y reservar directamente tu
              sesión.
            </p>
          </div>

          <a
            href="#tarifas-laser"
            className="min-h-[46px] px-4 py-2.5 rounded-2xl bg-teal-50 hover:bg-teal-100 text-primary font-display font-bold text-xs sm:text-sm border border-teal-200 transition-colors inline-flex items-center gap-2 self-start lg:self-auto shrink-0"
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Ver Tarifas Láser Diodo sin bonos (Desde 13€)</span>
          </a>
        </div>

        {/* Griglia de 8 Tarjetas con Aspect Ratio 4:3 bloqueado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTIES.map((spec) => {
            const imgFailed = Boolean(failedImages[spec.id]);
            return (
              <article
                key={spec.id}
                className="group rounded-3xl bg-surface border border-border shadow-medical hover:shadow-medical-hover hover:border-primary/50 transition-all flex flex-col overflow-hidden"
              >
                {/* Slot Fotográfico con Aspect-Ratio 4:3 Bloqueado */}
                <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-teal-800 to-primary overflow-hidden">
                  {/* TODO: Sostituire con foto reale da /wp-content/uploads/ di fisiodietetic.com */}
                  {!imgFailed ? (
                    <img
                      src={spec.imageUrl}
                      alt={spec.imageAlt}
                      loading="lazy"
                      onError={() => setFailedImages((prev) => ({ ...prev, [spec.id]: true }))}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-white text-center">
                      <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-2">
                        {renderSpecialtyIcon(spec.iconName, "w-6 h-6")}
                      </div>
                      <span className="font-display font-bold text-sm">{spec.title}</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 text-ink font-display font-extrabold text-xs shadow-sm">
                      {spec.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-primary/95 text-white font-semibold text-[11px] backdrop-blur-sm">
                      {spec.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                      {renderSpecialtyIcon(spec.iconName, "w-4 h-4")}
                    </div>
                    <h3 className="font-display font-bold text-base leading-snug line-clamp-2">
                      {spec.title}
                    </h3>
                  </div>
                </div>

                {/* Cuerpo de la tarjeta */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-primary leading-relaxed">
                      {spec.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-ink-secondary line-clamp-3 leading-relaxed">
                      {spec.summary}
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {spec.conditionsTreated.slice(0, 2).map((cond, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-ink">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenModal(spec)}
                      className="min-h-[44px] w-full px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-ink font-display font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Ver patologías y técnicas</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onBookSpecialty(spec)}
                      className="min-h-[44px] w-full px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-accent hover:text-white text-primary font-display font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>Reservar {spec.shortTitle}</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal / Ficha Clínica Detallada de la Especialidad */}
      {activeModalSpecialty && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="specialty-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm"
          onClick={onCloseModal}
        >
          <div
            className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-floating overflow-hidden text-ink"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera del Modal */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-primary to-teal-800 text-white flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20">
                    Especialidad {activeModalSpecialty.number}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-950/40 text-teal-200">
                    {activeModalSpecialty.badge}
                  </span>
                </div>
                <h2
                  id="specialty-modal-title"
                  className="text-xl sm:text-2xl font-display font-extrabold"
                >
                  {activeModalSpecialty.title}
                </h2>
                <p className="text-xs sm:text-sm text-teal-100">{activeModalSpecialty.subtitle}</p>
              </div>

              <button
                type="button"
                onClick={onCloseModal}
                aria-label="Cerrar ficha de especialidad"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido detallado */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-sm">
              <p className="text-base text-ink-secondary leading-relaxed">
                {activeModalSpecialty.summary}
              </p>

              {/* Si es Osteopatía o tiene sub-especialidades */}
              {activeModalSpecialty.subSpecialties && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeModalSpecialty.subSpecialties.map((sub) => (
                    <div
                      key={sub.name}
                      className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-1"
                    >
                      <h3 className="font-display font-bold text-sm text-primary">{sub.name}</h3>
                      <p className="text-xs text-ink-secondary leading-relaxed">{sub.details}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Patologías tratadas */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-base text-ink flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  <span>¿Qué patologías y objetivos tratamos?</span>
                </h3>
                <ul className="grid grid-cols-1 gap-2">
                  {activeModalSpecialty.conditionsTreated.map((cond, i) => (
                    <li
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-ink"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Técnicas Utilizadas */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-base text-ink">
                  Técnicas clínicas y metodología aplicada
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeModalSpecialty.techniquesUsed.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-teal-50 border border-teal-200 text-primary font-medium text-xs sm:text-sm"
                    >
                      • {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Duración, enfoque y especialista */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-primary font-display font-bold text-xs uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>Enfoque de la Sesión</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {activeModalSpecialty.durationAndApproach}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-primary font-display font-bold text-xs uppercase tracking-wider">
                    <UserCheck className="w-4 h-4" />
                    <span>Especialista(s) Responsable(s)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">
                    {activeModalSpecialty.recommendedProfessional}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer CTA del Modal */}
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={onCloseModal}
                className="min-h-[46px] px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-ink font-semibold text-sm transition-colors"
              >
                Cerrar ficha
              </button>

              <button
                type="button"
                onClick={() => {
                  const specToBook = activeModalSpecialty;
                  onCloseModal();
                  onBookSpecialty(specToBook);
                }}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-display font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4 shrink-0" />
                <span>Reservar este tratamiento ({activeModalSpecialty.shortTitle})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
