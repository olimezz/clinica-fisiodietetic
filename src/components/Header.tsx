"use client";

import React, { useState } from "react";
import { CLINIC_INFO, CLINIC_LOCATIONS } from "@/data/clinic-data";
import {
  MapPin,
  Phone,
  ShieldCheck,
  Menu,
  X,
  CalendarCheck,
  MessageCircle,
  Sparkles,
} from "lucide-react";

interface HeaderProps {
  onSelectBooking: (preset?: { clinic?: "jesus" | "alboraya"; treatment?: string }) => void;
}

const NAV_LINKS = [
  { label: "Especialidades", href: "#especialidades" },
  { label: "Equipo Titulado", href: "#equipo" },
  { label: "Por qué elegirnos", href: "#por-que-elegirnos" },
  { label: "Tarifas Láser", href: "#tarifas-laser" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Ubicación", href: "#ubicacion" },
];

export function Header({ onSelectBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      {/* Top Bar Discreta con Sede Principal Jesús (València) y Sede Hermana Alboraya */}
      <div className="bg-slate-900 text-slate-100 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5 font-medium text-teal-300">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Centro Sanitario Autorizado Reg. {CLINIC_INFO.sanitaryRegistryNumber}</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <a
              href="#ubicacion"
              className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>
                <strong>Sede València (Jesús):</strong> {CLINIC_LOCATIONS.jesus.address}, {CLINIC_LOCATIONS.jesus.postalCode}{" "}
                {CLINIC_LOCATIONS.jesus.city}
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            <a
              href={`tel:+34${CLINIC_LOCATIONS.jesus.phone}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-teal-300 transition-colors"
              aria-label="Llamar a Clínica FisioDietetic Sede Jesús en València"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>València: {CLINIC_LOCATIONS.jesus.phoneFormatted}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:+34${CLINIC_LOCATIONS.alboraya.phone}`}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
              aria-label="Llamar a Clínica FisioDietetic Sede Alboraya"
            >
              <Phone className="w-3 h-3 text-slate-400 shrink-0" />
              <span>Alboraya: {CLINIC_LOCATIONS.alboraya.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo Clínica FisioDietetic */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none min-h-[44px]"
          aria-label="Clínica FisioDietetic — Inicio"
        >
          <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center font-display font-extrabold text-lg shadow-sm group-hover:bg-primary-hover transition-colors relative">
            <span>FD</span>
            <span
              className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-teal-300 border-2 border-white"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-ink leading-none">
              Clínica <span className="text-primary">FisioDietetic</span>
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-ink-secondary mt-0.5">
              Sede Jesús · València &amp; Alboraya
            </span>
          </div>
        </a>

        {/* Links Desktop */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegación principal">
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

        {/* CTAs Desktop */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={`https://wa.me/${CLINIC_LOCATIONS.jesus.whatsappNumber}?text=${encodeURIComponent(
              "Hola Clínica FisioDietetic (Sede C/ Jesús 114, València), me gustaría pedir cita previa."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-3.5 py-2.5 rounded-xl bg-whatsapp-light hover:bg-green-100 text-whatsapp font-semibold text-xs xl:text-sm border border-green-200 transition-colors inline-flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span className="hidden xl:inline">WhatsApp</span>
            <span>{CLINIC_LOCATIONS.jesus.phoneFormatted}</span>
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

        {/* Botón Menú Móvil (<1024px) con Touch Target >= 44x44px */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          className="lg:hidden min-w-[44px] min-h-[44px] rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-ink flex items-center justify-center transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Drawer Menú Móvil Ergonómico */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
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

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-ink-secondary space-y-1">
              <p className="font-semibold text-ink">
                📍 Sede Principal València: {CLINIC_LOCATIONS.jesus.address} ({CLINIC_LOCATIONS.jesus.neighborhood})
              </p>
              <p>📍 Sede Alboraya: {CLINIC_LOCATIONS.alboraya.address}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectBooking({ clinic: "jesus" });
                }}
                className="min-h-[48px] w-full px-4 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Pedir Cita en València</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_LOCATIONS.jesus.whatsappNumber}?text=${encodeURIComponent(
                  "Hola Clínica FisioDietetic (Sede C/ Jesús 114, València), quiero consultar disponibilidad para una cita."
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
        </div>
      )}
    </header>
  );
}
