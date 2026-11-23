"use client";

import React from "react";
import { TRUST_PILLARS } from "@/data/clinic-data";
import {
  ShieldCheck,
  BadgeEuro,
  Trophy,
  Network,
  ClockAlert,
  HeartHandshake,
} from "lucide-react";

export function WhyChooseUsSection() {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "shield-check":
        return <ShieldCheck className="w-6 h-6 text-primary" />;
      case "badge-euro":
        return <BadgeEuro className="w-6 h-6 text-primary" />;
      case "trophy":
        return <Trophy className="w-6 h-6 text-primary" />;
      case "network":
        return <Network className="w-6 h-6 text-primary" />;
      case "clock-alert":
        return <ClockAlert className="w-6 h-6 text-primary" />;
      case "heart-handshake":
        return <HeartHandshake className="w-6 h-6 text-primary" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section
      id="por-que-elegirnos"
      aria-labelledby="why-choose-us-title"
      className="py-16 sm:py-22 bg-background scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-teal-100/80 px-3.5 py-1.5 rounded-full mb-3">
            Rigurosidad Sanitaria y Trato Humano
          </span>
          <h2
            id="why-choose-us-title"
            className="font-display font-extrabold text-ink tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 2.5vw + 0.9rem, 2.5rem)" }}
          >
            ¿Por qué el 90% de nuestros pacientes nos recomiendan en València?
          </h2>
          <p className="text-base text-ink-secondary mt-2.5">
            En <strong>Clínica FisioDietetic</strong> unimos la excelencia clínica de un centro sanitario autorizado
            (Reg. 21951) con tarifas transparentes y cercanía real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="group rounded-3xl bg-surface p-6 sm:p-7 border border-border shadow-medical hover:shadow-medical-hover hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light border border-teal-200/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {renderIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-ink-secondary group-hover:bg-teal-50 group-hover:text-primary transition-colors">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-ink mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
