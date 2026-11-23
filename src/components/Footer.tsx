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
          {/* Columna 1: Identidad Clínica y Registro Sanitario (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center font-display font-extrabold text-lg">
                FD
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white block leading-none">
                  Clínica <span className="text-teal-400">FisioDietetic</span>
                </span>
                <span className="text-xs text-teal-300 font-medium">
                  Centro Sanitario Autorizado · Reg. {CLINIC_INFO.sanitaryRegistryNumber}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Clínica multidisciplinar de Fisioterapia, Osteopatía C.O., Nutrición con comida real del supermercado,
              Podología, Drenaje Linfático, Pilates Terapéutico y Depilación Láser Diodo sin bonos en València y
              Alboraya.
            </p>

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
                  WhatsApp Directo Jesús
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
                <a href="#equipo" className="hover:text-teal-300 transition-colors">
                  Equipo Colegiado
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
                <a href="#opiniones" className="hover:text-teal-300 transition-colors">
                  Opiniones Reales
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
