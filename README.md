# Clínica FisioDietetic — Sede Jesús (València) & Alboraya

Sitio web de alta conversión (Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, Framer Motion, Zod) diseñado para **Clínica FisioDietetic** (**Centro Sanitario Autorizado Reg. 21951** en la Comunitat Valenciana).

## Características Principales

1. **Dirección Artística "Boutique Health & Sports Clinic":**
   - Paleta **Medical Clean & Vitality**: Fondo `#F8FAFC`, Superficies `#FFFFFF`, Brand `#0F766E` (hover `#115E59`), CTA `#EA580C`, WhatsApp `#16A34A`, Texto `#0F172A` / `#475569`.
   - Tipografía fluida (`clamp()`) con `Plus Jakarta Sans` para titulares e `Inter` para lectura clínica accesible.
   - Slots fotográficos con `aspect-ratio` bloqueado (`4:3`) y comentarios `// TODO: Sostituire con foto reale da /wp-content/uploads/ di fisiodietetic.com`, más fallback elegante con iniciales.

2. **Interactividad y CRO Médico:**
   - **Selector Interactivo de Síntoma / Objetivo (`¿Qué necesitas hoy?`):** Recomienda en tiempo real la especialidad y los profesionales colegiados adecuados.
   - **8 Especialidades con Modales Clínicos Completos:** Fisioterapia, Osteopatía (5 años post-grado: Estructural, Visceral, Craneal y Pediátrica/Bebés), Nutrición con Comida Real del supermercado (sin batidos), Podología, Masajes Terapéuticos/Deportivos, Drenaje Linfático Manual, Pilates Terapéutico y Depilación Láser Diodo.
   - **Tabla Interactiva de Tarifas Láser Diodo (Sin Bonos):** Filtros por promoción Cuerpo Completo (Mujer 95€ / Hombre 105€), Mujer, Hombre y Zona Facial con las 18 tarifas oficiales por sesión suelta.
   - **Equipo de Profesionales Colegiados:** Sofía Sánchez (Col. 2484), Andrés Esteban (Podólogo Col. 2712 y Fisio Col. 6686), Diana Ortiz (Col. 4644), Vanessa Lamela (Col. 8067), Florencia García (Col. 8560) y Erica Ortiz (Láser Diodo).
   - **Carrusel de Opiniones Verificadas:** Marta P., Marcos M., Rosalia G., Fernando C., Carmen S. y Eva L.

3. **Seguridad (RGPD Art. 9 Sanitario) y Cumplimiento AEPD (España):**
   - Validación cliente/servidor con **Zod** ([`src/lib/validation.ts`](./src/lib/validation.ts)), regex de teléfono español `^(\+34|0034|34)?[6789]\d{8}$`, sanitización anti-XSS, campo honeypot `website_url`, rate limiting por IP en [`/api/cita`](./src/app/api/cita/route.ts) y soporte para Cloudflare Turnstile.
   - Cabeceras HTTP de seguridad en [`next.config.js`](./next.config.js) (`Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Strict-Transport-Security`).
   - **Banner y Gestor de Cookies AEPD (`CookieConsentContext`):** Tres botones con idéntica jerarquía visual (*Aceptar todas*, *Rechazar todas*, *Configurar preferencias*) y bloqueo preventivo real de Google Maps hasta consentimiento explícito.

## Ejecución Local

```bash
./start.sh
# o bien:
npm run dev
```
