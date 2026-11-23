"use client";

import React, { useState } from "react";
import { CLINIC_LOCATIONS } from "@/data/clinic-data";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  CalendarCheck,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  Award,
} from "lucide-react";

interface HeroSectionProps {
  onSelectBooking: (preset?: { clinic?: "jesus" | "alboraya"; treatment?: string }) => void;
}

export function HeroSection({ onSelectBooking }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [heroImgError, setHeroImgError] = useState(false);
  const jesus = CLINIC_LOCATIONS.jesus;

  const whatsappHeroUrl = `https://wa.me/${jesus.whatsappNumber}?text=${encodeURIComponent(
    "Hola Clínica FisioDietetic (Sede C/ Jesús 114, València) 👋 Me gustaría solicitar cita previa."
  )}`;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-6 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-teal-50/50 via-background to-background"
    >
      {/* Decoración sutil clínica */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 w-[480px] h-[480px] rounded-full bg-teal-500/5 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna Izquierda: Propuesta de Valor y Conversión (7 cols) */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Badge Oficial Centro Sanitario */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200/90 shadow-sm text-primary text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>Centro Sanitario Autorizado en València · N.º Registro 21951</span>
            </div>

            {/* H1 Fluido con clamp() */}
            <h1
              id="hero-heading"
              className="font-display font-extrabold text-ink tracking-tight leading-[1.12]"
              style={{ fontSize: "clamp(1.95rem, 3.8vw + 0.85rem, 3.45rem)" }}
            >
              Tu clínica de{" "}
              <span className="text-primary underline decoration-teal-300/70 decoration-4 underline-offset-4">
                Fisioterapia, Osteopatía y Nutrición
              </span>{" "}
              de confianza en Jesús, València.
            </h1>

            {/* Subtítulo persuasivo */}
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
              Un equipo de <strong>profesionales sanitarios colegiados</strong>. Tratamientos 100% individualizados,{" "}
              <strong>nutrición con comida real del supermercado</strong> (sin batidos ni productos milagro), podología
              avanzada y tarifas accesibles sin bonos abusivos.{" "}
              <span className="text-primary font-semibold">Priorizamos tus urgencias de dolor.</span>
            </p>

            {/* Social Proof inmediata */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-medical flex flex-col sm:flex-row sm:items-center gap-3 max-w-2xl">
              <div className="flex items-center gap-1 text-amber-500 shrink-0" aria-label="Valoración 4.5 sobre 5 estrellas">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400/70 text-amber-400" />
                <span className="ml-1.5 font-display font-bold text-sm text-ink">4.5★</span>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <p className="text-xs sm:text-sm font-medium text-ink">
                <strong>El 90% de nuestros pacientes vienen recomendados por el boca a boca</strong> · 4.5★ en Google
                València
              </p>
            </div>

            {/* CTAs Principales */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => onSelectBooking({ clinic: "jesus" })}
                className="min-h-[54px] px-7 py-3.5 rounded-2xl bg-accent hover:bg-accent-hover text-white font-display font-bold text-base shadow-lg shadow-orange-600/20 hover:shadow-xl hover:shadow-orange-600/25 transition-all flex items-center justify-center gap-2.5"
              >
                <CalendarCheck className="w-5 h-5 shrink-0" />
                <span>Pedir Cita en València</span>
              </button>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[54px] px-6 py-3.5 rounded-2xl bg-whatsapp hover:bg-whatsapp-hover text-white font-display font-bold text-base shadow-md shadow-green-700/15 transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>WhatsApp {jesus.phoneFormatted}</span>
              </a>
            </div>

            {/* Micro-badges de ubicación y garantías */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-ink-secondary">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>
                  <strong>C/ Jesús, 114</strong> (46007 València)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Cita rápida en urgencias de dolor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>También en Alboraya ({CLINIC_LOCATIONS.alboraya.phoneFormatted})</span>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Visual Clínico 4:3 Bloqueado + Tarjetas Flotantes de Autoridad (5 cols) */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl bg-white p-3 border border-slate-200 shadow-medical">
              {/* Aspect-ratio bloqueado 4:3 */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-teal-800 to-primary">
                {/* TODO: Sostituire con foto reale della clinica C/ Jesús 114 da /wp-content/uploads/ di fisiodietetic.com */}
                {!heroImgError ? (
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
                    alt="Interior luminoso y tratamiento fisioterapéutico personalizado en Clínica FisioDietetic València (Calle Jesús 114)"
                    className="w-full h-full object-cover"
                    onError={() => setHeroImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white">
                    <span className="font-display font-extrabold text-3xl tracking-tight mb-2">
                      Clínica FisioDietetic
                    </span>
                    <span className="text-sm text-teal-100">
                      C/ Jesús, 114 · 46007 València · Reg. Sanitario 21951
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between gap-2 text-white">
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/90 text-teal-100 backdrop-blur-sm mb-1">
                      Trato 100% Individualizado
                    </span>
                    <p className="font-display font-bold text-sm sm:text-base leading-snug">
                      Fisioterapia · Osteopatía C.O. · Nutrición · Podología · Láser
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarjeta inferior de garantías médicas */}
              <div className="mt-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs sm:text-sm text-ink">100% Colegiados</p>
                    <p className="text-[11px] text-ink-secondary">ICOFCV &amp; ICOPCV Oficial</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-accent flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs sm:text-sm text-ink">Sin Bonos Abusivos</p>
                    <p className="text-[11px] text-ink-secondary">Sesiones sueltas claras</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
