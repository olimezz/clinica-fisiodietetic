import { NextRequest, NextResponse } from "next/server";
import { bookingFormSchema } from "@/lib/validation";
import { CLINIC_LOCATIONS } from "@/data/clinic-data";

// Almacenamiento en memoria para Rate Limiting por IP (ventana deslizante)
interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const RATE_LIMIT_MAP = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const RATE_LIMIT_MAX_REQUESTS = 6; // Máx 6 solicitudes por IP cada 10 min

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "127.0.0.1";
  }
  return req.headers.get("x-real-ip") || "127.0.0.1";
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; retryAfterSec: number } {
  const now = Date.now();
  const entry = RATE_LIMIT_MAP.get(ip);

  if (!entry || now > entry.resetAt) {
    RATE_LIMIT_MAP.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, retryAfterSec: 0 };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterSec = Math.ceil((entry.resetAt - now) / 1000);
    return { allowed: false, remaining: 0, retryAfterSec };
  }

  entry.count += 1;
  RATE_LIMIT_MAP.set(ip, entry);
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
    retryAfterSec: 0,
  };
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rateStatus = checkRateLimit(ip);

    if (!rateStatus.allowed) {
      return NextResponse.json(
        {
          ok: false,
          error: `Has superado el límite de solicitudes. Por favor, espera ${rateStatus.retryAfterSec} segundos o llámanos directamente al 623 025 258.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateStatus.retryAfterSec),
          },
        }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Formato de solicitud inválido." },
        { status: 400 }
      );
    }

    // Si el campo honeypot website_url viene relleno por un bot, devolvemos éxito silencioso
    if (typeof body.website_url === "string" && body.website_url.trim().length > 0) {
      return NextResponse.json({
        ok: true,
        referenceCode: "FD-BOT-FILTERED",
        message: "Solicitud procesada.",
      });
    }

    const parsed = bookingFormSchema.safeParse(body);
    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        {
          ok: false,
          error: firstIssue?.message || "Revisa los campos del formulario.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const data = parsed.data;

    // Verificación opcional de Cloudflare Turnstile si TURNSTILE_SECRET_KEY está configurada en servidor
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret && data.turnstileToken) {
      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: data.turnstileToken,
            remoteip: ip,
          }),
        }
      ).catch(() => null);

      if (verifyRes && verifyRes.ok) {
        const verifyJson = (await verifyRes.json()) as { success?: boolean };
        if (!verifyJson.success) {
          return NextResponse.json(
            {
              ok: false,
              error: "La verificación de seguridad anti-spam no ha sido superada.",
            },
            { status: 403 }
          );
        }
      }
    }

    const clinicObj = CLINIC_LOCATIONS[data.clinic];
    const referenceCode = `FD-${data.clinic.toUpperCase().slice(0, 3)}-${Date.now()
      .toString(36)
      .toUpperCase()
      .slice(-5)}`;

    const treatmentDetail = data.laserZoneOptional
      ? `${data.treatment} (${data.laserZoneOptional})`
      : data.treatment;

    const whatsappMessage = [
      `Hola Clínica FisioDietetic (${clinicObj.shortName}) 👋`,
      `Acabo de solicitar cita previa desde la web (Ref: ${referenceCode}):`,
      `• *Nombre:* ${data.fullName}`,
      `• *Teléfono:* ${data.phone}`,
      `• *Clínica:* ${clinicObj.name} (${clinicObj.address})`,
      `• *Especialidad:* ${treatmentDetail}`,
      `• *Día preferido:* ${data.preferredDate}`,
      `• *Horario:* ${data.preferredTimeSlot}`,
      `Quedo a la espera de vuestra confirmación. ¡Muchas gracias!`,
    ].join("\n");

    const whatsappRedirectUrl = `https://wa.me/${clinicObj.whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return NextResponse.json(
      {
        ok: true,
        referenceCode,
        clinicName: clinicObj.name,
        clinicPhone: clinicObj.phoneFormatted,
        whatsappRedirectUrl,
        summary: {
          fullName: data.fullName,
          phone: data.phone,
          clinic: clinicObj.name,
          treatment: treatmentDetail,
          preferredDate: data.preferredDate,
          preferredTimeSlot: data.preferredTimeSlot,
        },
        message:
          "Solicitud de cita registrada conforme al RGPD. Te confirmaremos tu cita por WhatsApp o llamada lo antes posible.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Ha ocurrido un error inesperado al procesar la cita. Por favor, contáctanos por teléfono o WhatsApp al 623 025 258.",
      },
      { status: 500 }
    );
  }
}
