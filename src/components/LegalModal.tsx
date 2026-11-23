"use client";

import React from "react";
import { X, ShieldCheck, Scale, Cookie, Building2 } from "lucide-react";

export type LegalDocType = "aviso-legal" | "privacidad" | "cookies" | null;

export function LegalModal({
  activeDoc,
  onClose,
}: {
  activeDoc: LegalDocType;
  onClose: () => void;
}) {
  if (!activeDoc) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[88vh] flex flex-col shadow-floating overflow-hidden text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
              {activeDoc === "aviso-legal" && <Scale className="w-5 h-5" />}
              {activeDoc === "privacidad" && <ShieldCheck className="w-5 h-5" />}
              {activeDoc === "cookies" && <Cookie className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary block">
                Clínica FisioDietetic · Centro Sanitario Reg. 21951
              </span>
              <h2 id="legal-modal-title" className="text-lg sm:text-xl font-display font-bold text-ink">
                {activeDoc === "aviso-legal" && "Aviso Legal y Condiciones de Uso (LSSI-CE)"}
                {activeDoc === "privacidad" && "Política de Privacidad y Protección de Datos Sanitarios (RGPD)"}
                {activeDoc === "cookies" && "Política de Cookies (Directrices AEPD)"}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar documento legal"
            className="min-w-[44px] min-h-[44px] rounded-xl border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cuerpo del documento */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-ink-secondary leading-relaxed">
          {activeDoc === "aviso-legal" && (
            <>
              <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 text-ink space-y-1">
                <div className="flex items-center gap-2 font-display font-bold text-primary">
                  <Building2 className="w-4 h-4" />
                  <span>Datos Identificativos del Titular (Art. 10 LSSI-CE)</span>
                </div>
                <ul className="text-xs sm:text-sm space-y-1 pt-1">
                  <li>
                    <strong>Denominación Comercial:</strong> Clínica FisioDietetic
                  </li>
                  <li>
                    <strong>Titular / Razón Social:</strong> [Pendiente de completar CIF/NIF del Titular en producción]
                  </li>
                  <li>
                    <strong>Autorización Sanitaria:</strong> Centro Sanitario Autorizado por la Conselleria de Sanitat
                    (Generalitat Valenciana) con <strong>N.º de Registro Autonómico 21951</strong>.
                  </li>
                  <li>
                    <strong>Domicilio Sede València:</strong> C/ Jesús, 114, 46007 València (Valencia, España) · Tel.:
                    623 025 258
                  </li>
                  <li>
                    <strong>Domicilio Sede Alboraya:</strong> C/ Pintor Peris Aragó, 26, 46120 Alboraya (Valencia,
                    España) · Tel.: 654 252 244
                  </li>
                  <li>
                    <strong>Correo electrónico de contacto:</strong> info@fisiodietetic.com
                  </li>
                </ul>
              </div>

              <h3 className="font-display font-bold text-base text-ink">1. Objeto y Ámbito Sanitario</h3>
              <p>
                El presente Aviso Legal regula el acceso, navegación y uso del sitio web de{" "}
                <strong>Clínica FisioDietetic</strong>. La información publicada tiene carácter informativo sobre
                nuestras especialidades sanitarias (Fisioterapia, Osteopatía, Nutrición y Dietética, Podología, Drenaje
                Linfático Manual y Pilates Terapéutico) y estéticas (Depilación Láser Diodo), prestadas por
                profesionales debidamente titulados y colegiados en sus respectivos Colegios Oficiales de la Comunitat
                Valenciana (ICOFCV, ICOPCV).
              </p>

              <h3 className="font-display font-bold text-base text-ink">2. Colegiación Profesional</h3>
              <p>
                En cumplimiento de la Ley 44/2003 de Ordenación de las Profesiones Sanitarias, todos nuestros
                profesionales sanitarios disponen de titulación oficial y número de colegiado activo visible en la
                sección <em>«Equipo Titulado»</em> (Sofía Sánchez Col. 2484, Andrés Esteban Col. 2712 / 6686, Diana
                Ortiz Col. 4644, Vanessa Lamela Col. 8067, Florencia García Col. 8560).
              </p>

              <h3 className="font-display font-bold text-base text-ink">3. Propiedad Intelectual y Legislación</h3>
              <p>
                Todos los contenidos, textos, diseño e identidad visual de Clínica FisioDietetic están protegidos por la
                normativa española y europea de propiedad intelectual. Para cualquier controversia serán competentes los
                Juzgados y Tribunales de la ciudad de València (España).
              </p>
            </>
          )}

          {activeDoc === "privacidad" && (
            <>
              <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 text-ink">
                <p className="text-xs sm:text-sm">
                  <strong>Protección reforzada de datos en el ámbito sanitario:</strong> De conformidad con el{" "}
                  <strong>Reglamento (UE) 2016/679 (RGPD)</strong> —especialmente su Artículo 9 relativo a categorías
                  especiales de datos— y la <strong>Ley Orgánica 3/2018 (LOPDGDD)</strong>, nuestro formulario web
                  aplica el principio de <em>minimización de datos</em>: no solicitamos informes médicos ni detalles
                  clínicos sensibles por internet, únicamente la especialidad deseada y tus datos de contacto para
                  coordinar la cita previa.
                </p>
              </div>

              <h3 className="font-display font-bold text-base text-ink">1. Responsable del Tratamiento</h3>
              <p>
                <strong>Clínica FisioDietetic</strong> (Centro Sanitario Reg. 21951), con sedes en C/ Jesús, 114, 46007
                València y C/ Pintor Peris Aragó, 26, 46120 Alboraya (Valencia). Correo de contacto en materia de
                privacidad: <strong>info@fisiodietetic.com</strong>.
              </p>

              <h3 className="font-display font-bold text-base text-ink">2. Finalidad y Base Jurídica</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Gestión de Cita Previa:</strong> Atender tu solicitud de reserva o consulta telefónica /
                  WhatsApp en la clínica seleccionada (Jesús o Alboraya).
                </li>
                <li>
                  <strong>Base legitimadora:</strong> Consentimiento expreso del interesado (Art. 6.1.a RGPD) otorgado
                  mediante la casilla no pre-marcada del formulario, y aplicación de medidas precontractuales /
                  asistenciales a petición del paciente (Art. 6.1.b y Art. 9.2.h RGPD).
                </li>
              </ul>

              <h3 className="font-display font-bold text-base text-ink">3. Conservación y Destinatarios</h3>
              <p>
                Los datos de solicitud de cita previa se conservarán únicamente durante el tiempo indispensable para
                confirmar y gestionar tu cita. No se cederán datos a terceros salvo obligación legal. Si el usuario
                decide voluntariamente continuar la conversación por WhatsApp, dicha comunicación se rige adicionalmente
                por las condiciones del servicio de mensajería elegido por el usuario.
              </p>

              <h3 className="font-display font-bold text-base text-ink">4. Derechos ARSOPOL del Paciente</h3>
              <p>
                Puedes ejercer en cualquier momento tus derechos de Acceso, Rectificación, Supresión, Oposición,
                Limitación del tratamiento y Portabilidad enviando una solicitud a{" "}
                <strong>info@fisiodietetic.com</strong> o presencialmente en cualquiera de nuestras dos clínicas.
                Asimismo, tienes derecho a presentar una reclamación ante la{" "}
                <strong>Agencia Española de Protección de Datos (AEPD - www.aepd.es)</strong>.
              </p>
            </>
          )}

          {activeDoc === "cookies" && (
            <>
              <p>
                En cumplimiento del artículo 22.2 de la Ley 34/2002 (LSSI-CE) y la{" "}
                <strong>Guía sobre el uso de las cookies de la Agencia Española de Protección de Datos (AEPD)</strong>,
                esta web bloquea preventivamente cualquier cookie o script no necesario hasta que el usuario pulsa
                «Aceptar todas» o las activa en «Configurar preferencias».
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-ink font-display font-bold border-b border-slate-200">
                      <th className="p-3">Nombre / Clave</th>
                      <th className="p-3">Tipo</th>
                      <th className="p-3">Duración</th>
                      <th className="p-3">Finalidad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-mono text-xs">fisiodietetic_aepd_cookie_consent_v1</td>
                      <td className="p-3">Técnica (Propia)</td>
                      <td className="p-3">12 meses</td>
                      <td className="p-3">
                        Almacena en localStorage la decisión del usuario sobre las cookies (Aceptar, Rechazar o
                        personalizada).
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">Google Maps Embed</td>
                      <td className="p-3">Terceros (Multimedia)</td>
                      <td className="p-3">Sesión / Persistente</td>
                      <td className="p-3">
                        Se carga exclusivamente si el usuario acepta la categoría «Multimedia / Mapas externos» o pulsa
                        «Activar mapa interactivo».
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-display font-bold text-base text-ink">
                ¿Cómo revocar o modificar tu consentimiento?
              </h3>
              <p>
                En cualquier momento puedes hacer clic en el botón <strong>«Configurar Cookies»</strong> presente de
                forma permanente en el pie de página de nuestra web para cambiar tu elección con efecto inmediato.
              </p>
            </>
          )}
        </div>

        {/* Pie del modal */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm transition-colors"
          >
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
