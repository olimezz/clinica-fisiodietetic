import { z } from "zod";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Sanitiza cualquier cadena eliminando etiquetas HTML, caracteres de control,
 * intentos de XSS (`javascript:`, `on*=`) y espacios redundantes.
 * Cumplimiento RGPD Art. 9 y prevención de inyecciones.
 */
export function sanitizeString(raw: unknown, maxLength = 150): string {
  if (typeof raw !== "string") return "";
  return raw
    .replace(/<[^>]*>?/gm, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/[<>"{}[\]\\^`]/g, "")
    .trim()
    .slice(0, maxLength);
}

/**
 * Normaliza un número de teléfono español eliminando espacios, guiones o puntos
 */
export function normalizeSpanishPhone(raw: unknown): string {
  if (typeof raw !== "string") return "";
  return raw.replace(/[\s\-().]/g, "").trim();
}

export const SPANISH_PHONE_REGEX = /^(\+34|0034|34)?[6789]\d{8}$/;

export const ALLOWED_CLINICS = ["jesus", "alboraya"] as const;

export const ALLOWED_TREATMENTS = [
  "Fisioterapia Traumatológica y Deportiva",
  "Osteopatía (Estructural, Visceral o Pediátrica)",
  "Nutrición y Dietética (Comida Real)",
  "Podología y Estudio Biomecánico / Plantillas",
  "Masaje Terapéutico o Deportivo",
  "Drenaje Linfático Manual",
  "Pilates Terapéutico (Grupos Reducidos)",
  "Depilación Láser Diodo (Sesiones Sueltas)",
  "Urgencia de Dolor / Valoración Inicial",
] as const;

export const ALLOWED_TIME_SLOTS = [
  "Mañanas (09:00 - 13:30)",
  "Mediodía (13:30 - 16:00)",
  "Tardes (16:00 - 20:30)",
  "Lo antes posible (Urgencia de dolor)",
] as const;

export const bookingFormSchema = z.object({
  fullName: z
    .string()
    .transform((v) => sanitizeString(v, 80))
    .refine((v) => v.length >= 3, {
      message: "Por favor, introduce tu nombre y apellidos (mínimo 3 caracteres).",
    })
    .refine((v) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜçÇ\s'.-]+$/.test(v), {
      message: "El nombre solo puede contener letras y espacios válidos.",
    }),
  phone: z
    .string()
    .transform((v) => normalizeSpanishPhone(v))
    .refine((v) => SPANISH_PHONE_REGEX.test(v), {
      message: "Introduce un teléfono español válido de 9 dígitos (ej. 623 025 258).",
    }),
  clinic: z.enum(ALLOWED_CLINICS, {
    errorMap: () => ({ message: "Selecciona una clínica válida (Jesús o Alboraya)." }),
  }),
  treatment: z
    .string()
    .transform((v) => sanitizeString(v, 100))
    .refine((v) => v.length >= 3, {
      message: "Por favor, selecciona la especialidad o tratamiento.",
    }),
  preferredDate: z
    .string()
    .transform((v) => sanitizeString(v, 50))
    .refine((v) => v.length >= 2, {
      message: "Indica tu día preferido (ej. Mañana, Lunes, Esta semana).",
    }),
  preferredTimeSlot: z.enum(ALLOWED_TIME_SLOTS, {
    errorMap: () => ({ message: "Selecciona una franja horaria." }),
  }),
  laserZoneOptional: z
    .string()
    .optional()
    .transform((v) => (v ? sanitizeString(v, 80) : "")),
  rgpdConsent: z.literal(true, {
    errorMap: () => ({
      message:
        "Debes leer y aceptar expresamente la Política de Privacidad para gestionar tu cita previa.",
    }),
  }),
  // Campo Honeypot anti-spam: siempre debe llegar vacío
  website_url: z
    .string()
    .optional()
    .transform((v) => (v ? v.trim() : ""))
    .refine((v) => v === "", {
      message: "Detección anti-spam activada.",
    }),
  turnstileToken: z.string().optional(),
});

export type BookingFormInput = z.infer<typeof bookingFormSchema>;
