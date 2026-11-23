"use client";

import React from "react";
import { CLINIC_LOCATIONS } from "@/data/clinic-data";
import { PhoneCall, MessageCircle } from "lucide-react";

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  const jesus = CLINIC_LOCATIONS.jesus;

  const whatsappUrl = `https://wa.me/${jesus.whatsappNumber}?text=${encodeURIComponent(
    "Hola Clínica FisioDietetic (Sede C/ Jesús, 114 - València) 👋 Me gustaría pedir cita previa."
  )}`;

  return (
    <div
      role="region"
      aria-label="Acciones rápidas de cita previa en móvil"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-8px_25px_-5px_rgba(15,23,42,0.1)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <button
          type="button"
          onClick={onOpenBooking}
          className="min-h-[48px] px-3 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-transform"
        >
          <PhoneCall className="w-4 h-4 shrink-0" />
          <span>Llamar / Cita</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[48px] px-3 py-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-transform"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WhatsApp Directo</span>
        </a>
      </div>
    </div>
  );
}
