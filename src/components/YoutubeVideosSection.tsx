"use client";

import React from "react";
import { CLINIC_INFO, YOUTUBE_VIDEOS } from "@/data/clinic-data";
import {
  Youtube,
  Instagram,
  Facebook,
  ExternalLink,
  PlayCircle,
} from "lucide-react";

export function YoutubeVideosSection() {
  return (
    <section
      id="videos-youtube"
      aria-labelledby="youtube-videos-heading"
      className="py-16 sm:py-22 bg-background border-t border-slate-200/80 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3.5 py-1.5 rounded-full mb-3">
              <Youtube className="w-4 h-4" />
              Canal Oficial FisioDietetic · Divulgación de Salud
            </span>
            <h2
              id="youtube-videos-heading"
              className="font-display font-extrabold text-ink tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 2.5vw + 0.9rem, 2.6rem)" }}
            >
              Nuestros Vídeos de Fisioterapia y Nutrición con Comida Real
            </h2>
            <p className="text-base text-ink-secondary mt-2">
              Consejos prácticos de nuestro equipo sobre higiene postural, ejercicios terapéuticos y cómo elegir
              alimentos saludables en el supermercado sin caer en productos milagro.
            </p>
          </div>

          {/* Botones Redes Sociales Oficiales */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={CLINIC_INFO.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs sm:text-sm shadow-sm transition-colors inline-flex items-center gap-2"
            >
              <Youtube className="w-4 h-4 shrink-0" />
              <span>Ver Canal de YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={CLINIC_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-4 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-display font-bold text-xs sm:text-sm shadow-sm transition-colors inline-flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 shrink-0" />
              <span>Instagram</span>
            </a>

            <a
              href={CLINIC_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs sm:text-sm shadow-sm transition-colors inline-flex items-center gap-2"
            >
              <Facebook className="w-4 h-4 shrink-0" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Los 2 Vídeos Oficiales de fisiodietetic.com */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {YOUTUBE_VIDEOS.map((video) => (
            <article
              key={video.id}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-medical overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Reproductor YouTube 16:9 */}
                <div className="relative aspect-video w-full bg-slate-900">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                <div className="p-6 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary-light px-3 py-1 rounded-full">
                      <PlayCircle className="w-3.5 h-3.5" />
                      {video.category}
                    </span>
                    <a
                      href={video.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-ink-secondary hover:text-red-600 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Abrir en YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-ink">
                    {video.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
