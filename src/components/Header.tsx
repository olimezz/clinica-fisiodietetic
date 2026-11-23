"use client";

import React, { useState } from "react";
import { CLINIC_INFO, CLINIC_LOCATIONS } from "@/data/clinic-data";
import {
  Menu,
  X,
  CalendarCheck,
  MessageCircle,
  Sparkles,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

interface HeaderProps {
  onSelectBooking: (preset?: { clinic?: "jesus" | "alboraya"; treatment?: string }) => void;
}

const NAV_LINKS = [
  { label: "Especialidades", href: "#especialidades" },
  { label: "Por qué elegirnos", href: "#por-que-elegirnos" },
  { label: "Tarifas Láser", href: "#tarifas-laser" },
  { label: "Vídeos y Consejos", href: "#videos-youtube" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Ubicación y Mapa", href: "#ubicacion" },
];

export function Header({ onSelectBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
        {/* Logo Oficial FisioDietetic (con silueta plank + Osteopatía - Fisioterapia - Nutrición) */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none min-h-[44px] py-1"
          aria-label="Clínica FisioDietetic — Inicio"
        >
          <img
            src="/logotag.jpg"
            alt="Logo Clínica FisioDietetic — Osteopatía, Fisioterapia, Nutrición"
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </a>

        {/* Links Desktop */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-[44px] px-3 py-2 rounded-xl text-sm font-medium text-ink-secondary hover:text-primary hover:bg-primary-light/60 transition-colors flex items-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Redes Sociales Oficiales (Instagram, YouTube, Facebook) + WhatsApp + Pedir Cita */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Botones Redes Sociales Oficiales */}
          <div className="flex items-center gap-1.5 mr-1">
            <a
              href={CLINIC_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram oficial de Clínica FisioDietetic"
              title="Síguenos en Instagram"
              className="min-w-[40px] min-h-[40px] rounded-full bg-slate-100 hover:bg-pink-600 text-ink hover:text-white transition-colors flex items-center justify-center"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={CLINIC_INFO.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Canal de YouTube oficial de Clínica FisioDietetic"
              title="Canal de YouTube FisioDietetic"
              className="min-w-[40px] min-h-[40px] rounded-full bg-slate-100 hover:bg-red-600 text-ink hover:text-white transition-colors flex items-center justify-center"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href={CLINIC_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook oficial de Clínica FisioDietetic"
              title="Síguenos en Facebook"
              className="min-w-[40px] min-h-[40px] rounded-full bg-slate-100 hover:bg-blue-600 text-ink hover:text-white transition-colors flex items-center justify-center"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          <a
            href={`https://wa.me/${CLINIC_LOCATIONS.jesus.whatsappNumber}?text=${encodeURIComponent(
              "Hola Clínica FisioDietetic, me gustaría pedir cita previa."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-3.5 py-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold text-xs lg:text-sm transition-colors inline-flex items-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>WhatsApp {CLINIC_LOCATIONS.jesus.phoneFormatted}</span>
          </a>

          <button
            type="button"
            onClick={() => onSelectBooking({ clinic: "jesus" })}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-display font-bold text-sm shadow-sm hover:shadow transition-all inline-flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4 shrink-0" />
            <span>Pedir Cita</span>
          </button>
        </div>

        {/* Botón Menú Móvil (<1280px) con Touch Target >= 44x44px */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          className="xl:hidden min-w-[44px] min-h-[44px] rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-ink flex items-center justify-center transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Drawer Menú Móvil Ergonómico */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-1" aria-label="Menú móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="min-h-[46px] px-4 py-2.5 rounded-xl font-display font-semibold text-base text-ink hover:bg-primary-light hover:text-primary flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                {link.href === "#tarifas-laser" && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-100 text-primary inline-flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Sin bonos
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Iconos Sociales en Móvil */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-ink-secondary">
              Síguenos en redes:
            </span>
            <div className="flex items-center gap-2">
              <a
                href={CLINIC_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram FisioDietetic"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CLINIC_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube FisioDietetic"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-red-50 text-red-600 flex items-center justify-center"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={CLINIC_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook FisioDietetic"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectBooking({ clinic: "jesus" });
              }}
              className="min-h-[48px] w-full px-4 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Pedir Cita Previa</span>
            </button>

            <a
              href={`https://wa.me/${CLINIC_LOCATIONS.jesus.whatsappNumber}?text=${encodeURIComponent(
                "Hola Clínica FisioDietetic, quiero consultar disponibilidad para una cita."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="min-h-[48px] w-full px-4 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp {CLINIC_LOCATIONS.jesus.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
