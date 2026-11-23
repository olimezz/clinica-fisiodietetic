"use client";

import React, { useState } from "react";
import { SYMPTOM_GOALS, SPECIALTIES, type SpecialtyItem } from "@/data/clinic-data";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Activity,
  Flame,
  Apple,
  Footprints,
  Sparkles,
  Baby,
  ArrowRight,
  UserCheck,
  CalendarCheck,
  Stethoscope,
} from "lucide-react";

interface SymptomSelectorProps {
  onOpenSpecialtyModal: (specialty: SpecialtyItem) => void;
  onSelectBooking: (preset: { clinic?: "jesus" | "alboraya"; treatment?: string }) => void;
}

export function SymptomSelector({
  onOpenSpecialtyModal,
  onSelectBooking,
}: SymptomSelectorProps) {
  const [selectedId, setSelectedId] = useState<string>(SYMPTOM_GOALS[0]?.id ?? "dolor-espalda-cuello");
  const prefersReducedMotion = useReducedMotion();

  const activeGoal = SYMPTOM_GOALS.find((g) => g.id === selectedId) ?? SYMPTOM_GOALS[0]!;
  const recommendedSpecialties = SPECIALTIES.filter((s) =>
    activeGoal.recommendedSpecialtyIds.includes(s.id)
  );

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "spine":
        return <Activity className="w-5 h-5 shrink-0" />;
      case "runner":
        return <Flame className="w-5 h-5 shrink-0" />;
      case "apple":
        return <Apple className="w-5 h-5 shrink-0" />;
      case "footprints":
        return <Footprints className="w-5 h-5 shrink-0" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 shrink-0" />;
      case "baby":
        return <Baby className="w-5 h-5 shrink-0" />;
      default:
        return <Stethoscope className="w-5 h-5 shrink-0" />;
    }
  };

  return (
    <section
      aria-labelledby="symptom-selector-title"
      className="py-10 sm:py-14 bg-white border-y border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-7">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary-light px-3 py-1 rounded-full mb-2.5">
            <Stethoscope className="w-3.5 h-3.5" />
            Orientación Clínica Rápida
          </span>
          <h2
            id="symptom-selector-title"
            className="font-display font-extrabold text-ink tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 2.2vw + 0.8rem, 2.25rem)" }}
          >
            ¿Qué necesitas hoy? Te recomendamos el especialista adecuado
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary mt-1.5">
            Selecciona tu síntoma u objetivo y descubre cómo nuestro equipo colegiado en{" "}
            <strong>València (Barrio de Jesús)</strong> aborda tu caso.
          </p>
        </div>

        {/* Selector de Píldoras Interactivas (Touch Target >= 48px) */}
        <div
          role="tablist"
          aria-label="Selecciona tu síntoma u objetivo de salud"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 mb-7"
        >
          {SYMPTOM_GOALS.map((goal) => {
            const isSelected = goal.id === activeGoal.id;
            return (
              <button
                key={goal.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedId(goal.id)}
                className={`min-h-[54px] p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-md shadow-teal-900/10"
                    : "bg-slate-50/80 hover:bg-teal-50/50 text-ink border-slate-200 hover:border-teal-300"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-white/20 text-white" : "bg-white text-primary border border-slate-200"
                  }`}
                >
                  {renderIcon(goal.iconName)}
                </div>
                <div className="min-w-0">
                  <p className="font-display font-bold text-sm leading-tight truncate">{goal.label}</p>
                  <p
                    className={`text-xs truncate mt-0.5 ${
                      isSelected ? "text-teal-100" : "text-ink-secondary"
                    }`}
                  >
                    {goal.shortQuestion}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Panel Dinámico de Recomendación */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl bg-gradient-to-br from-teal-50/90 via-white to-slate-50 border border-teal-200/90 p-5 sm:p-7 shadow-medical"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary text-white">
                    Recomendación Clínica
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 text-primary">
                    {activeGoal.urgencyBadge}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink">
                  {activeGoal.label}
                </h3>

                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {activeGoal.explanation}
                </p>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Especialista(s) Titulado(s) de Referencia
                    </p>
                    <p className="font-display font-bold text-sm sm:text-base text-ink">
                      {activeGoal.recommendedSpecialistName}
                    </p>
                    <p className="text-xs text-ink-secondary">{activeGoal.recommendedSpecialistRole}</p>
                  </div>
                </div>
              </div>

              {/* Tarjetas de Especialidades Recomendadas + CTA directo */}
              <div className="lg:col-span-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-secondary">
                  Tratamientos recomendados para tu caso:
                </p>

                <div className="space-y-2.5">
                  {recommendedSpecialties.map((spec) => (
                    <div
                      key={spec.id}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-primary/60 transition-colors flex items-center justify-between gap-3 shadow-sm"
                    >
                      <div>
                        <span className="text-[11px] font-bold text-primary uppercase">
                          Especialidad {spec.number}
                        </span>
                        <h4 className="font-display font-bold text-sm sm:text-base text-ink">
                          {spec.title}
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenSpecialtyModal(spec)}
                        className="min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-ink font-semibold text-xs transition-colors inline-flex items-center gap-1.5 shrink-0"
                      >
                        <span>Ver ficha</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onSelectBooking({
                      clinic: "jesus",
                      treatment: recommendedSpecialties[0]?.title ?? activeGoal.label,
                    })
                  }
                  className="min-h-[48px] w-full px-5 py-3 rounded-2xl bg-accent hover:bg-accent-hover text-white font-display font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4 shrink-0" />
                  <span>
                    Reservar cita para {recommendedSpecialties[0]?.shortTitle ?? "Valoración"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
