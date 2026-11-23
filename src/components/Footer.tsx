"use client";

import React from "react";
import { CLINIC_INFO, CLINIC_LOCATIONS } from "@/data/clinic-data";
import { useCookieConsent } from "@/context/CookieConsentContext";
import type { LegalDocType } from "@/components/LegalModal";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Cookie,
  MessageCircle,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

interface FooterProps {
  onOpenLegalDoc: (doc: Exclude<LegalDocType, null>) => void;
}

export function Footer({ onOpenLegalDoc }: FooterProps) {
  const { openPreferencesModal } = useCookieConsent();
  const jesus = CLINIC_LOCATIONS.jesus;
  const alboraya = CLINIC_LOCATIONS.alboraya;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pb-22 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Columna 1: Logo Oficial, Identidad Clínica y Redes Sociales (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block bg-white p-2.5 rounded-2xl shadow-sm">
              <img
                src="/logotag.jpg"
                alt="Logo Clínica FisioDietetic — Osteopatía, Fisioterapia, Nutrición"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Clínica multidisciplinar de Fisioterapia, Osteopatía, Nutrición con comida real del supermercado,
              Podología, Drenaje Linfático, Pilates Terapéutico y Depilación Láser Diodo sin bonos en València y
              Alboraya.
            </p>

            {/* Botones Redes Sociales Oficiales */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-white block">
                Síguenos en nuestras redes sociales:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={CLINIC_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Clínica FisioDietetic"
                  className="min-h-[40px] px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-pink-600 text-white border border-slate-800 hover:border-pink-500 text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={CLINIC_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Canal YouTube Clínica FisioDietetic"
                  className="min-h-[40px] px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-red-600 text-white border border-slate-800 hover:border-red-500 text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  <Youtube className="w-4 h-4" />
                  <span>YouTube</span>
                </a>
                <a
                  href={CLINIC_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Clínica FisioDietetic"
                  className="min-h-[40px] px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white border border-slate-800 hover:border-blue-500 text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-teal-300 font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Generalitat Valenciana · Conselleria de Sanitat N.º 21951</span>
            </div>
          </div>

          {/* Columna 2: Sede Principal València - Jesús (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Sede Principal · València (Jesús)
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">{jesus.address}</strong>, {jesus.postalCode} {jesus.city}
                  <span className="block text-xs text-slate-400">({jesus.neighborhood})</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`tel:+34${jesus.phone}`}
                  className="text-white font-bold hover:text-teal-300 transition-colors"
                >
                  {jesus.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href={`https://wa.me/${jesus.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline font-medium"
                >
                  WhatsApp Directo València
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`mailto:${jesus.email}`}
                  className="hover:text-white transition-colors"
                >
                  {jesus.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Sede Secundaria Alboraya (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Sede Alboraya · Valencia
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">{alboraya.address}</strong>, {alboraya.postalCode} {alboraya.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`tel:+34${alboraya.phone}`}
                  className="text-white font-bold hover:text-teal-300 transition-colors"
                >
                  {alboraya.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href={`https://wa.me/${alboraya.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline font-medium"
                >
                  WhatsApp Directo Alboraya
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`mailto:${alboraya.email}`}
                  className="hover:text-white transition-colors"
                >
                  {alboraya.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Enlaces Rápidos (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#especialidades" className="hover:text-teal-300 transition-colors">
                  8 Especialidades
                </a>
              </li>
              <li>
                <a href="#por-que-elegirnos" className="hover:text-teal-300 transition-colors">
                  ¿Por qué elegirnos?
                </a>
              </li>
              <li>
                <a href="#tarifas-laser" className="hover:text-teal-300 transition-colors">
                  Tarifas Láser Diodo
                </a>
              </li>
              <li>
                <a href="#videos-youtube" className="hover:text-teal-300 transition-colors">
                  Vídeos YouTube
                </a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-teal-300 transition-colors">
                  Opiniones Reales
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-teal-300 transition-colors">
                  Dónde estamos / Mapa
                </a>
              </li>
              <li>
                <a href="#reservar-cita" className="text-teal-300 font-bold hover:underline">
                  Pedir Cita Previa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior Legal Española (RGPD / LOPDGDD / LSSI-CE) y Copyright 2026 */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center lg:text-left">
            © {CLINIC_INFO.copyrightYear} <strong>Clínica FisioDietetic</strong> — Centro Sanitario Reg.{" "}
            {CLINIC_INFO.sanitaryRegistryNumber}. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={() => onOpenLegalDoc("aviso-legal")}
              className="min-h-[44px] px-2 hover:text-white underline decoration-slate-700 hover:decoration-teal-400 transition-colors"
            >
              Aviso Legal
            </button>
            <button
              type="button"
              onClick={() => onOpenLegalDoc("privacidad")}
              className="min-h-[44px] px-2 hover:text-white underline decoration-slate-700 hover:decoration-teal-400 transition-colors"
            >
              Política de Privacidad
            </button>
            <button
              type="button"
              onClick={() => onOpenLegalDoc("cookies")}
              className="min-h-[44px] px-2 hover:text-white underline decoration-slate-700 hover:decoration-teal-400 transition-colors"
            >
              Política de Cookies
            </button>
            <button
              type="button"
              onClick={openPreferencesModal}
              className="min-h-[44px] px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-teal-300 font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              <Cookie className="w-3.5 h-3.5" />
              <span>Configurar Cookies</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
