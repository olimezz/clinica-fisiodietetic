"use client";

import React, { useState } from "react";
import { TEAM_MEMBERS, type TeamMember } from "@/data/clinic-data";
import { Award, CheckCircle2, CalendarCheck, ShieldCheck } from "lucide-react";

interface TeamSectionProps {
  onBookWithSpecialist: (member: TeamMember) => void;
}

export function TeamSection({ onBookWithSpecialist }: TeamSectionProps) {
  const [failedPortraits, setFailedPortraits] = useState<Record<string, boolean>>({});

  return (
    <section
      id="equipo"
      aria-labelledby="team-heading"
      className="py-16 sm:py-22 bg-background scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-teal-100/80 px-3.5 py-1.5 rounded-full mb-3">
            <ShieldCheck className="w-4 h-4" />
            Equipo Sanitario Colegiado · Sin Intrusismo
          </span>
          <h2
            id="team-heading"
            className="font-display font-extrabold text-ink tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 2.5vw + 0.9rem, 2.6rem)" }}
          >
            Conoce a nuestro equipo de profesionales colegiados
          </h2>
          <p className="text-base text-ink-secondary mt-2.5">
            Con la salud no se juega. Cada miembro de <strong>Clínica FisioDietetic</strong> cuenta con titulación
            universitaria/oficial y número de colegiado público verificable en la Comunitat Valenciana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {TEAM_MEMBERS.map((member) => {
            const portraitFailed = Boolean(failedPortraits[member.id]);
            return (
              <article
                key={member.id}
                className="group rounded-3xl bg-surface border border-border shadow-medical hover:shadow-medical-hover hover:border-teal-300 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Slot Fotográfico con Aspect-Ratio 4:3 / 3:4 Bloqueado y Fallback con Iniciales */}
                  <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-teal-800 via-primary to-slate-900 overflow-hidden">
                    {/* TODO: Sostituire con foto reale (`sofia`, `andres-esteban`, `prof3`, `Screenshot`, `IMG_1677`, `prof1`) da /wp-content/uploads/ di fisiodietetic.com */}
                    {!portraitFailed ? (
                      <img
                        src={member.imageUrl}
                        alt={member.imageAlt}
                        loading="lazy"
                        onError={() =>
                          setFailedPortraits((prev) => ({ ...prev, [member.id]: true }))
                        }
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-white text-center">
                        <div className="w-20 h-20 rounded-full bg-white/15 border-2 border-teal-300 flex items-center justify-center font-display font-extrabold text-2xl mb-2">
                          {member.initials}
                        </div>
                        <span className="font-display font-bold text-base">{member.name}</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                    {/* Badges de Número de Colegiado superpuestos */}
                    <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5">
                      {member.colegiadoBadges.map((badge, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 text-ink font-display font-bold text-[11px] shadow-sm"
                        >
                          <Award className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>
                            {badge.discipline}: <strong className="text-primary">{badge.number}</strong>
                          </span>
                        </span>
                      ))}
                    </div>

                    {/* Nombre y Rol en parte inferior de la foto */}
                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <h3 className="font-display font-extrabold text-xl leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs text-teal-200 font-medium mt-0.5 leading-snug">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio y Especialidades del Profesional */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        Áreas de Especialización:
                      </p>
                      <ul className="space-y-1.5">
                        {member.specialties.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-ink">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="p-3 rounded-2xl bg-slate-50 border-l-4 border-primary text-xs italic text-ink-secondary">
                      {member.featuredQuote}
                    </blockquote>
                  </div>
                </div>

                {/* Botón Reservar con este Profesional */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => onBookWithSpecialist(member)}
                    className="min-h-[44px] w-full px-4 py-2.5 rounded-xl bg-teal-50 hover:bg-primary text-primary hover:text-white font-display font-bold text-xs sm:text-sm border border-teal-200/80 transition-colors flex items-center justify-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4 shrink-0" />
                    <span>Pedir cita con {member.name.split(" ")[0]}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
