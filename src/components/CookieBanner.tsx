"use client";

import React, { useState, useEffect } from "react";
import { useCookieConsent } from "@/context/CookieConsentContext";
import { ShieldCheck, Cookie, SlidersHorizontal, X, Check, Lock } from "lucide-react";

export function CookieBanner({
  onOpenLegalDoc,
}: {
  onOpenLegalDoc: (doc: "aviso-legal" | "privacidad" | "cookies") => void;
}) {
  const {
    preferences,
    isBannerOpen,
    isPreferencesModalOpen,
    acceptAllCookies,
    rejectAllCookies,
    saveCustomPreferences,
    openPreferencesModal,
    closePreferencesModal,
  } = useCookieConsent();

  const [analyticsToggle, setAnalyticsToggle] = useState<boolean>(false);
  const [externalMediaToggle, setExternalMediaToggle] = useState<boolean>(false);

  useEffect(() => {
    if (preferences) {
      setAnalyticsToggle(preferences.analytics);
      setExternalMediaToggle(preferences.externalMedia);
    }
  }, [preferences, isPreferencesModalOpen]);

  if (!isBannerOpen && !isPreferencesModalOpen) {
    return null;
  }

  return (
    <>
      {/* Banner inferior conforme a la Guía AEPD 2024/2026 */}
      {isBannerOpen && !isPreferencesModalOpen && (
        <div
          role="region"
          aria-label="Aviso de Cookies y Privacidad conforme a la AEPD"
          className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-5 bg-slate-900/95 backdrop-blur-md border-t border-slate-700 text-white shadow-2xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2 text-teal-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                <Cookie className="w-4 h-4 shrink-0" />
                <span>Privacidad Sanitaria y Control de Cookies (RGPD / LSSI-CE)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                En <strong>Clínica FisioDietetic (Centro Sanitario Reg. 21951)</strong> utilizamos cookies técnicas
                estrictamente necesarias para el funcionamiento seguro de la web y, solo si nos das tu consentimiento
                explícito, cookies analíticas y de mapas interactivos externos (Google Maps). Ningún script de terceros
                se carga sin tu elección. Puedes consultar nuestra{" "}
                <button
                  type="button"
                  onClick={() => onOpenLegalDoc("cookies")}
                  className="underline text-teal-300 hover:text-white font-medium focus:outline-none"
                >
                  Política de Cookies
                </button>{" "}
                y{" "}
                <button
                  type="button"
                  onClick={() => onOpenLegalDoc("privacidad")}
                  className="underline text-teal-300 hover:text-white font-medium focus:outline-none"
                >
                  Política de Privacidad
                </button>
                .
              </p>
            </div>

            {/* Tres botones con idéntica jerarquía visual (Directriz AEPD) y touch target >= 44x44px */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 shrink-0">
              <button
                type="button"
                onClick={acceptAllCookies}
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-teal-700 border border-slate-500 hover:border-teal-400 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Aceptar todas</span>
              </button>
              <button
                type="button"
                onClick={rejectAllCookies}
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-500 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <X className="w-4 h-4" />
                <span>Rechazar todas</span>
              </button>
              <button
                type="button"
                onClick={openPreferencesModal}
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-500 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Configurar preferencias</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Granular de Configuración de Cookies */}
      {isPreferencesModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
        >
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-floating p-6 sm:p-8 text-ink">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary-light px-2.5 py-1 rounded-full mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Cumplimiento AEPD · RGPD / LOPDGDD
                </span>
                <h2 id="cookie-modal-title" className="text-xl sm:text-2xl font-display font-bold text-ink">
                  Panel de Configuración de Cookies
                </h2>
              </div>
              <button
                type="button"
                onClick={closePreferencesModal}
                aria-label="Cerrar configuración de cookies"
                className="min-w-[44px] min-h-[44px] rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-ink hover:bg-slate-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4">
              <p className="text-sm text-ink-secondary leading-relaxed">
                Selecciona de forma granular qué categorías de cookies autorizas en{" "}
                <strong>Clínica FisioDietetic</strong>. Puedes cambiar o revocar tu consentimiento en cualquier momento
                desde el botón <em>«Configurar Cookies»</em> situado en el pie de página.
              </p>

              {/* Categoría 1: Técnicas necesarias */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    <h3 className="font-display font-bold text-sm sm:text-base text-ink">
                      1. Cookies Técnicas Necesarias
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-primary">
                      Siempre activas
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary">
                    Imprescindibles para recordar tu preferencia de privacidad, proteger el formulario de cita previa
                    frente a ataques CSRF/spam y garantizar la navegación segura HTTPS.
                  </p>
                </div>
                <div className="shrink-0 pt-1">
                  <span className="inline-flex items-center justify-center w-11 h-6 rounded-full bg-primary text-white text-xs font-bold">
                    SÍ
                  </span>
                </div>
              </div>

              {/* Categoría 2: Analíticas */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-sm sm:text-base text-ink">
                    2. Cookies Analíticas y Estadísticas
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary">
                    Nos permiten medir de forma agregada y anónima qué especialidades (Fisioterapia, Osteopatía,
                    Nutrición, Podología o Láser) generan más interés en València para mejorar nuestros servicios.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsToggle}
                  aria-label="Activar o desactivar cookies analíticas"
                  onClick={() => setAnalyticsToggle((prev) => !prev)}
                  className={`min-w-[52px] min-h-[32px] p-1 rounded-full transition-colors flex items-center ${
                    analyticsToggle ? "bg-primary justify-end" : "bg-slate-300 justify-start"
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-white shadow-sm block" />
                </button>
              </div>

              {/* Categoría 3: Multimedia y Mapas externos */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-sm sm:text-base text-ink">
                    3. Multimedia y Mapas Interactivos Externos (Google Maps)
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary">
                    Permite cargar el mapa interactivo de Google Maps con la ubicación exacta de nuestras clínicas en{" "}
                    <strong>C/ Jesús, 114 (València)</strong> y <strong>C/ Pintor Peris Aragó, 26 (Alboraya)</strong>.
                    Si se desactiva, se muestra una tarjeta estática segura sin conexión a servidores de Google.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={externalMediaToggle}
                  aria-label="Activar o desactivar mapas interactivos externos"
                  onClick={() => setExternalMediaToggle((prev) => !prev)}
                  className={`min-w-[52px] min-h-[32px] p-1 rounded-full transition-colors flex items-center ${
                    externalMediaToggle ? "bg-primary justify-end" : "bg-slate-300 justify-start"
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-white shadow-sm block" />
                </button>
              </div>
            </div>

            {/* Botonera paritaria dentro del modal */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() =>
                  saveCustomPreferences({
                    analytics: analyticsToggle,
                    externalMedia: externalMediaToggle,
                  })
                }
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm transition-colors"
              >
                Guardar mi selección
              </button>
              <button
                type="button"
                onClick={acceptAllCookies}
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-ink font-semibold text-sm transition-colors"
              >
                Aceptar todas
              </button>
              <button
                type="button"
                onClick={rejectAllCookies}
                className="min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-ink font-semibold text-sm transition-colors"
              >
                Rechazar todas
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
