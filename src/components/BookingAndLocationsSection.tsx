"use client";

import React, { useState, useEffect } from "react";
import { CLINIC_LOCATIONS } from "@/data/clinic-data";
import {
  ALLOWED_TREATMENTS,
  ALLOWED_TIME_SLOTS,
  bookingFormSchema,
} from "@/lib/validation";
import { useCookieConsent } from "@/context/CookieConsentContext";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarCheck,
  MessageCircle,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building2,
} from "lucide-react";

export interface BookingPreset {
  clinic?: "jesus" | "alboraya";
  treatment?: string;
  laserZone?: string;
}

interface BookingAndLocationsSectionProps {
  bookingPreset: BookingPreset | null;
  onOpenPrivacyPolicy: () => void;
}

export function BookingAndLocationsSection({
  bookingPreset,
  onOpenPrivacyPolicy,
}: BookingAndLocationsSectionProps) {
  useCookieConsent();

  const [selectedClinic, setSelectedClinic] = useState<"jesus" | "alboraya">("jesus");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState<string>(ALLOWED_TREATMENTS[0]);
  const [laserZoneOptional, setLaserZoneOptional] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTimeSlot, setPreferredTimeSlot] = useState<(typeof ALLOWED_TIME_SLOTS)[number]>(
    ALLOWED_TIME_SLOTS[0]
  );
  // Checkbox RGPD obligatoria NO pre-marcada por defecto
  const [rgpdConsent, setRgpdConsent] = useState<boolean>(false);
  // Campo Honeypot oculto anti-spam
  const [websiteUrlHoneypot, setWebsiteUrlHoneypot] = useState("");

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    referenceCode: string;
    clinicName: string;
    clinicPhone: string;
    whatsappRedirectUrl: string;
    message: string;
  } | null>(null);

  // Sincronizar cuando el usuario pulsa "Reservar este tratamiento" en modales o tarifas láser
  useEffect(() => {
    if (!bookingPreset) return;
    if (bookingPreset.clinic) {
      setSelectedClinic(bookingPreset.clinic);
    }
    if (bookingPreset.treatment) {
      const matched = ALLOWED_TREATMENTS.find((t) =>
        t.toLowerCase().includes(bookingPreset.treatment!.toLowerCase().slice(0, 8))
      );
      setTreatment(matched ?? bookingPreset.treatment);
    }
    if (bookingPreset.laserZone !== undefined) {
      setLaserZoneOptional(bookingPreset.laserZone);
    }
    setSubmitSuccess(null);
    setServerError(null);
  }, [bookingPreset]);

  const activeClinicObj = CLINIC_LOCATIONS[selectedClinic];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setServerError(null);

    const payload = {
      fullName,
      phone,
      clinic: selectedClinic,
      treatment,
      preferredDate,
      preferredTimeSlot,
      laserZoneOptional,
      rgpdConsent: rgpdConsent as true,
      website_url: websiteUrlHoneypot,
    };

    const parsed = bookingFormSchema.safeParse(payload);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "general");
        if (!errs[key]) {
          errs[key] = issue.message;
        }
      }
      setFieldErrors(errs);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/cita", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setServerError(
          data.error ||
            "No hemos podido procesar la solicitud. Por favor, revisa los datos o llámanos al 623 025 258."
        );
        return;
      }

      setSubmitSuccess({
        referenceCode: data.referenceCode,
        clinicName: data.clinicName,
        clinicPhone: data.clinicPhone,
        whatsappRedirectUrl: data.whatsappRedirectUrl,
        message: data.message,
      });
    } catch {
      setServerError(
        "Error de conexión al enviar tu solicitud. Puedes escribirnos directamente por WhatsApp al 623 025 258."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="ubicacion"
      aria-labelledby="locations-booking-heading"
      className="py-16 sm:py-24 bg-background border-t border-slate-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-teal-100/80 px-3.5 py-1.5 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Sede Principal València (Barrio de Jesús) &amp; Sede Alboraya
          </span>
          <h2
            id="locations-booking-heading"
            className="font-display font-extrabold text-ink tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 2.6vw + 0.9rem, 2.65rem)" }}
          >
            Ubicaciones y Reserva de Cita Previa
          </h2>
          <p className="text-base text-ink-secondary mt-2">
            Elige tu clínica más cercana —con foco principal en nuestra sede de{" "}
            <strong>C/ Jesús, 114 en València</strong>— y solicita tu cita. Priorizamos urgencias de dolor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Columna Izquierda: Tarjetas de las 2 Clínicas + Mapa con Placeholder RGPD AEPD (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Selector de tarjetas de las 2 Sedes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(["jesus", "alboraya"] as const).map((cid) => {
                const loc = CLINIC_LOCATIONS[cid];
                const isSelected = selectedClinic === cid;
                return (
                  <div
                    key={cid}
                    onClick={() => setSelectedClinic(cid)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedClinic(cid);
                      }
                    }}
                    className={`cursor-pointer rounded-3xl p-5 border transition-all flex flex-col justify-between gap-4 ${
                      isSelected
                        ? "bg-white border-2 border-primary shadow-medical-hover"
                        : "bg-white/80 hover:bg-white border-slate-200 shadow-sm"
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            loc.isPrimary
                              ? "bg-primary text-white"
                              : "bg-slate-100 text-ink-secondary"
                          }`}
                        >
                          {loc.isPrimary ? "Sede Principal València" : "Sede Alboraya"}
                        </span>
                        {isSelected && (
                          <span className="text-xs font-bold text-primary inline-flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" /> Activa
                          </span>
                        )}
                      </div>

                      <h3 className="font-display font-extrabold text-lg text-ink">
                        {loc.name}
                      </h3>

                      <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                        <li className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-ink">{loc.address}</strong>, {loc.postalCode} {loc.city}
                            <span className="block text-xs text-ink-muted">{loc.neighborhood}</span>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary shrink-0" />
                          <a
                            href={`tel:+34${loc.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="font-bold text-ink hover:text-primary underline decoration-teal-300"
                          >
                            {loc.phoneFormatted}
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary shrink-0" />
                          <span>{loc.email}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary shrink-0" />
                          <span>{loc.schedule}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                      <a
                        href={`https://wa.me/${loc.whatsappNumber}?text=${encodeURIComponent(
                          `Hola ${loc.name}, me gustaría pedir cita previa.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="min-h-[44px] flex-1 px-3 py-2 rounded-xl bg-whatsapp-light hover:bg-whatsapp hover:text-white text-whatsapp font-display font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>WhatsApp {loc.phoneFormatted}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contenedor de Google Maps con Bloqueo Preventivo AEPD / RGPD */}
            <div className="rounded-3xl bg-white border border-slate-200 shadow-medical overflow-hidden">
              <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2 bg-slate-50/70">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="font-display font-bold text-sm text-ink">
                    Mapa de Ubicación: {activeClinicObj.name}
                  </span>
                </div>
                <a
                  href={activeClinicObj.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <iframe
                  title={`Mapa interactivo de ${activeClinicObj.name}`}
                  src={activeClinicObj.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario Inteligente de Cita Previa (RGPD Sanitario Art. 9) (6 cols) */}
          <div
            id="reservar-cita"
            className="lg:col-span-6 rounded-3xl bg-white border border-slate-200/90 shadow-floating p-6 sm:p-8 lg:p-9 scroll-mt-24"
          >
            <div className="border-b border-slate-100 pb-5 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary-light px-3 py-1 rounded-full">
                  <CalendarCheck className="w-3.5 h-3.5" />
                  Cita Previa Rápida · Sin Registro
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink-secondary">
                  <ShieldCheck className="w-4 h-4 text-primary" /> RGPD Sanitario Protegido
                </span>
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink">
                Solicita tu Cita en Clínica FisioDietetic
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                Te confirmaremos tu cita por <strong>WhatsApp o llamada</strong> lo antes posible.
              </p>
            </div>

            {submitSuccess ? (
              <div
                role="status"
                aria-live="polite"
                className="p-6 rounded-2xl bg-teal-50/90 border-2 border-primary space-y-5 text-ink"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Referencia: {submitSuccess.referenceCode}
                    </span>
                    <h4 className="font-display font-extrabold text-lg sm:text-xl text-ink">
                      ¡Solicitud de cita registrada con éxito!
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                      {submitSuccess.message}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-teal-200 text-xs sm:text-sm space-y-1.5">
                  <p>
                    <strong>Clínica seleccionada:</strong> {submitSuccess.clinicName}
                  </p>
                  <p>
                    <strong>Teléfono directo de la sede:</strong> {submitSuccess.clinicPhone}
                  </p>
                  <p>
                    <strong>Especialidad:</strong> {treatment}
                    {laserZoneOptional ? ` (${laserZoneOptional})` : ""}
                  </p>
                  <p>
                    <strong>Preferencia horaria:</strong> {preferredDate} · {preferredTimeSlot}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <a
                    href={submitSuccess.whatsappRedirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[52px] w-full px-5 py-3 rounded-2xl bg-whatsapp hover:bg-whatsapp-hover text-white font-display font-bold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>Enviar ahora por WhatsApp para confirmación inmediata</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(null)}
                    className="min-h-[44px] w-full px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-ink font-semibold text-xs sm:text-sm transition-colors"
                  >
                    Modificar datos o hacer otra reserva
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot Anti-Spam invisible para humanos */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website_url_hp">No rellenar este campo si eres humano</label>
                  <input
                    id="website_url_hp"
                    name="website_url"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={websiteUrlHoneypot}
                    onChange={(e) => setWebsiteUrlHoneypot(e.target.value)}
                  />
                </div>

                {/* Selección de Clínica (Default: FisioDietetic Jesús) */}
                <div>
                  <label className="block font-display font-bold text-xs sm:text-sm text-ink mb-2">
                    1. Selecciona tu Clínica FisioDietetic *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(["jesus", "alboraya"] as const).map((cid) => {
                      const loc = CLINIC_LOCATIONS[cid];
                      const active = selectedClinic === cid;
                      return (
                        <button
                          key={cid}
                          type="button"
                          onClick={() => setSelectedClinic(cid)}
                          className={`min-h-[52px] p-3 rounded-xl border text-left transition-all flex items-center justify-between gap-2 ${
                            active
                              ? "bg-teal-50/90 border-2 border-primary text-ink shadow-sm"
                              : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-ink-secondary"
                          }`}
                        >
                          <div>
                            <p className="font-display font-bold text-xs sm:text-sm text-ink">
                              {loc.shortName}
                            </p>
                            <p className="text-[11px] text-ink-secondary">
                              {loc.address} · {loc.phoneFormatted}
                            </p>
                          </div>
                          <span
                            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                              active ? "border-primary bg-primary text-white" : "border-slate-300 bg-white"
                            }`}
                          >
                            {active && <span className="w-2 h-2 rounded-full bg-white" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Nombre y Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-fullname"
                      className="block font-display font-bold text-xs sm:text-sm text-ink mb-1.5"
                    >
                      2. Nombre y apellidos *
                    </label>
                    <input
                      id="booking-fullname"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Ej. Marta Pérez"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`min-h-[46px] w-full px-3.5 py-2.5 rounded-xl border text-sm text-ink bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        fieldErrors.fullName ? "border-red-500" : "border-slate-300 focus:border-primary"
                      }`}
                    />
                    {fieldErrors.fullName && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{fieldErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block font-display font-bold text-xs sm:text-sm text-ink mb-1.5"
                    >
                      3. Teléfono móvil (España) *
                    </label>
                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="Ej. 623 025 258"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`min-h-[46px] w-full px-3.5 py-2.5 rounded-xl border text-sm text-ink bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        fieldErrors.phone ? "border-red-500" : "border-slate-300 focus:border-primary"
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{fieldErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Especialidad / Tratamiento (Minimización RGPD Art. 9: sin campo libre de historial médico) */}
                <div>
                  <label
                    htmlFor="booking-treatment"
                    className="block font-display font-bold text-xs sm:text-sm text-ink mb-1.5"
                  >
                    4. Especialidad o Tratamiento *
                  </label>
                  <select
                    id="booking-treatment"
                    name="treatment"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="min-h-[46px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-ink bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  >
                    {ALLOWED_TREATMENTS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-ink-secondary mt-1">
                    🔒 <strong>Privacidad Sanitaria (Art. 9 RGPD):</strong> Por tu seguridad, no incluyas datos
                    médicos confidenciales en internet; tu especialista colegiado realizará la anamnesis en consulta.
                  </p>
                </div>

                {/* Si ha seleccionado una zona de láser diodo específica, mostrarla */}
                {(treatment.toLowerCase().includes("láser") || laserZoneOptional) && (
                  <div>
                    <label
                      htmlFor="booking-laser-zone"
                      className="block font-display font-bold text-xs sm:text-sm text-ink mb-1.5"
                    >
                      Zona de Láser Diodo (Opcional)
                    </label>
                    <input
                      id="booking-laser-zone"
                      type="text"
                      placeholder="Ej. Promoción Cuerpo Completo Mujer (95€) o Axilas (23€)"
                      value={laserZoneOptional}
                      onChange={(e) => setLaserZoneOptional(e.target.value)}
                      className="min-h-[44px] w-full px-3.5 py-2 rounded-xl border border-teal-300 bg-teal-50/40 text-sm text-ink focus:bg-white focus:outline-none"
                    />
                  </div>
                )}

                {/* Día y Franja Horaria Preferida */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block font-display font-bold text-xs sm:text-sm text-ink mb-1.5"
                    >
                      5. Día preferido *
                    </label>
                    <input
                      id="booking-date"
                      name="preferredDate"
                      type="text"
                      required
                      placeholder="Ej. Hoy / Mañana / Jueves"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`min-h-[46px] w-full px-3.5 py-2.5 rounded-xl border text-sm text-ink bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        fieldErrors.preferredDate ? "border-red-500" : "border-slate-300 focus:border-primary"
                      }`}
                    />
                    {fieldErrors.preferredDate && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{fieldErrors.preferredDate}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-slot"
                      className="block font-display font-bold text-xs sm:text-sm text-ink mb-1.5"
                    >
                      6. Franja horaria *
                    </label>
                    <select
                      id="booking-slot"
                      name="preferredTimeSlot"
                      value={preferredTimeSlot}
                      onChange={(e) =>
                        setPreferredTimeSlot(e.target.value as (typeof ALLOWED_TIME_SLOTS)[number])
                      }
                      className="min-h-[46px] w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-ink bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    >
                      {ALLOWED_TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Checkbox RGPD Obligatoria NO pre-marcada */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rgpdConsent}
                      onChange={(e) => setRgpdConsent(e.target.checked)}
                      className="mt-0.5 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary shrink-0"
                    />
                    <span className="text-xs text-ink-secondary leading-relaxed">
                      He leído y acepto la{" "}
                      <button
                        type="button"
                        onClick={onOpenPrivacyPolicy}
                        className="font-bold text-primary underline hover:text-primary-hover"
                      >
                        Política de Privacidad
                      </button>{" "}
                      y consiento el tratamiento de mis datos para gestionar mi cita previa. *
                    </span>
                  </label>
                  {fieldErrors.rgpdConsent && (
                    <p className="text-xs text-red-600 mt-1.5 font-medium">{fieldErrors.rgpdConsent}</p>
                  )}
                </div>

                {serverError && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{serverError}</span>
                  </div>
                )}

                {/* Botón Submit + Aviso de confirmación */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[54px] w-full px-6 py-3.5 rounded-2xl bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-display font-bold text-base shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2.5"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Procesando tu solicitud de cita...</span>
                    </>
                  ) : (
                    <>
                      <CalendarCheck className="w-5 h-5 shrink-0" />
                      <span>Solicitar Cita en {activeClinicObj.shortName}</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-ink-secondary font-medium">
                  ✨ <em>«Te confirmaremos tu cita por WhatsApp o llamada lo antes posible»</em>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
