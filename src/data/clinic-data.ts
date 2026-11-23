export interface ClinicLocation {
  id: "jesus" | "alboraya";
  name: string;
  shortName: string;
  badge: string;
  address: string;
  postalCode: string;
  city: string;
  neighborhood: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  email: string;
  schedule: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  isPrimary: boolean;
}

export interface SymptomGoal {
  id: string;
  label: string;
  shortQuestion: string;
  iconName: "spine" | "runner" | "apple" | "footprints" | "sparkles" | "baby";
  recommendedSpecialtyIds: string[];
  recommendedSpecialistName: string;
  recommendedSpecialistRole: string;
  explanation: string;
  urgencyBadge: string;
}

export interface SpecialtyItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  badge: string;
  iconName:
    | "activity"
    | "bone"
    | "apple"
    | "footprints"
    | "hand"
    | "droplets"
    | "users"
    | "sparkles";
  imageUrl: string;
  imageAlt: string;
  imageComment: string;
  summary: string;
  conditionsTreated: string[];
  subSpecialties?: {
    name: string;
    details: string;
  }[];
  techniquesUsed: string[];
  durationAndApproach: string;
  priceHighlight?: string;
  recommendedProfessional: string;
}

export interface LaserTariffItem {
  id: string;
  zone: string;
  category: "promocion" | "mujer" | "hombre" | "unisex";
  bodyArea: "cuerpo-completo" | "piernas-gluteos" | "torso-brazos" | "facial";
  price: number;
  durationApprox: string;
  popular?: boolean;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  colegiadoBadges: {
    discipline: string;
    number: string;
  }[];
  imageSlotId: string;
  imageUrl: string;
  imageAlt: string;
  initials: string;
  bio: string;
  specialties: string[];
  featuredQuote: string;
}

export interface PatientReview {
  id: string;
  author: string;
  treatmentTag: string;
  specialtyId: string;
  rating: number;
  dateLabel: string;
  quote: string;
  verifiedLabel: string;
  specialistMentioned?: string;
}

export const CLINIC_INFO = {
  brandName: "Clínica FisioDietetic",
  tagline: "Fisioterapia, Osteopatía, Nutrición, Podología y Láser Diodo en València",
  sanitaryRegistryNumber: "21951",
  sanitaryRegistryText: "Centro Sanitario Autorizado por la Generalitat Valenciana · N.º Registro 21951",
  googleRating: "4.5",
  wordOfMouthPercentage: "90%",
  email: "info@fisiodietetic.com",
  copyrightYear: 2026,
};

export const CLINIC_LOCATIONS: Record<"jesus" | "alboraya", ClinicLocation> = {
  jesus: {
    id: "jesus",
    name: "FisioDietetic Jesús (València)",
    shortName: "Sede Jesús · València",
    badge: "Sede Principal en València Capital",
    address: "C/ Jesús, 114",
    postalCode: "46007",
    city: "València",
    neighborhood: "Barrio de Jesús / Patraix",
    phone: "623025258",
    phoneFormatted: "623 025 258",
    whatsappNumber: "34623025258",
    email: "info@fisiodietetic.com",
    schedule: "Lunes a Viernes: 09:00 – 21:00 h (Cita Previa)",
    googleMapsUrl: "https://maps.google.com/?q=Calle+Jesus+114+46007+Valencia+Espa%C3%B1a",
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Calle+Jes%C3%BAs+114,+46007+Val%C3%A8ncia,+Espa%C3%B1a&output=embed",
    isPrimary: true,
  },
  alboraya: {
    id: "alboraya",
    name: "FisioDietetic Alboraya",
    shortName: "Sede Alboraya",
    badge: "Clínica Hermana en l'Horta Nord",
    address: "C/ Pintor Peris Aragó, 26",
    postalCode: "46120",
    city: "Alboraya (Valencia)",
    neighborhood: "Alboraya Centro",
    phone: "654252244",
    phoneFormatted: "654 252 244",
    whatsappNumber: "34654252244",
    email: "info@fisiodietetic.com",
    schedule: "Lunes a Viernes: 09:00 – 21:00 h (Cita Previa)",
    googleMapsUrl:
      "https://maps.google.com/?q=Calle+Pintor+Peris+Arago+26+46120+Alboraya+Valencia",
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Calle+Pintor+Peris+Arag%C3%B3+26,+46120+Alboraya,+Valencia&output=embed",
    isPrimary: false,
  },
};

export const TRUST_PILLARS = [
  {
    id: "colegiados",
    title: "Profesionales Titulados y Colegiados",
    description:
      "Atención sanitaria real con número de colegiado visible en cada especialista. Con tu salud no se juega: huye del intrusismo.",
    badge: "Reg. Sanitario 21951",
    icon: "shield-check",
  },
  {
    id: "precios",
    title: "Precios Competitivos y Transparentes",
    description:
      "Salud privada de máxima calidad al alcance de todos los bolsillos. Tarifas claras por sesión individual, sin bonos abusivos ni letra pequeña.",
    badge: "Sin bonos obligatorios",
    icon: "badge-euro",
  },
  {
    id: "deportistas",
    title: "Especialistas en Deportistas",
    description:
      "Experiencia clínica diaria tratando a corredores de maratón, ciclistas, triatletas, opositores y entusiastas del fitness en València.",
    badge: "Readaptación & Descarga",
    icon: "trophy",
  },
  {
    id: "multidisciplinar",
    title: "Enfoque Multidisciplinar Real",
    description:
      "Valoración 100% individualizada. Si tu lesión o patología lo requiere, fisioterapeutas, osteópatas, podólogo y nutricionista colaboran en equipo.",
    badge: "Visión 360º",
    icon: "network",
  },
  {
    id: "urgencias",
    title: "Prioridad en Urgencias de Dolor",
    description:
      "Sabemos que un bloqueo lumbar o cervical no puede esperar semanas. Reorganizamos agenda para darte cita lo antes posible y aliviar tu dolor agudo.",
    badge: "Atención Rápida",
    icon: "clock-alert",
  },
  {
    id: "recomendacion",
    title: "90% Recomendación Boca a Boca",
    description:
      "9 de cada 10 pacientes acuden a FisioDietetic recomendados por familiares o amigos. Trato humano, cercano y resultados que se notan.",
    badge: "4.5★ en Google",
    icon: "heart-handshake",
  },
];

export const SYMPTOM_GOALS: SymptomGoal[] = [
  {
    id: "dolor-espalda-cuello",
    label: "Dolor lumbar, cervical o migrañas",
    shortQuestion: "Me duele la espalda, el cuello o sufro bloqueos/cefaleas",
    iconName: "spine",
    recommendedSpecialtyIds: ["fisioterapia", "osteopatia"],
    recommendedSpecialistName: "Sofía Sánchez / Vanessa Lamela / Florencia García",
    recommendedSpecialistRole: "Fisioterapeutas y Osteópatas C.O. Colegiadas",
    explanation:
      "Abordamos el origen mecánico, miofascial o craneal de tu dolor mediante terapia manual avanzada, osteopatía estructural/craneal y punción seca para liberar la tensión desde la primera sesión.",
    urgencyBadge: "Prioridad para dolor agudo",
  },
  {
    id: "lesion-deportiva",
    label: "Lesión deportiva o Running",
    shortQuestion: "Corro, entreno y tengo molestias o quiero descargar piernas",
    iconName: "runner",
    recommendedSpecialtyIds: ["fisioterapia", "masajes", "podologia"],
    recommendedSpecialistName: "Diana Ortiz / Andrés Esteban",
    recommendedSpecialistRole: "Fisioterapia Deportiva (Col. 4644) y Podología (Col. 2712)",
    explanation:
      "Tratamos tendinitis, sobrecargas, esguinces y fascitis plantar. Combinamos descarga muscular deportiva (reduce hasta un 90% el riesgo de lesión) con estudio biomecánico de la pisada si es necesario.",
    urgencyBadge: "Especialistas en Maratón y Triatlón",
  },
  {
    id: "perder-peso-comida-real",
    label: "Perder peso sin batidos",
    shortQuestion: "Quiero adelgazar o mejorar mi salud con comida real",
    iconName: "apple",
    recommendedSpecialtyIds: ["nutricion"],
    recommendedSpecialistName: "Sofía Sánchez",
    recommendedSpecialistRole: "T.S. en Dietética y Nutrición · Fisioterapeuta Col. 2484",
    explanation:
      "«No necesitas comer menos, solo necesitas comer mejor». Diseñamos pautas 100% personalizadas con alimentos reales del supermercado, estudio antropométrico y sin venderte batidos ni productos milagro.",
    urgencyBadge: "100% Comida Real del Supermercado",
  },
  {
    id: "pisada-plantillas-pies",
    label: "Dolor de pies, uñas o plantillas",
    shortQuestion: "Necesito plantillas a medida, estudio de pisada o podólogo",
    iconName: "footprints",
    recommendedSpecialtyIds: ["podologia"],
    recommendedSpecialistName: "Andrés Esteban",
    recommendedSpecialistRole: "Podólogo Colegiado 2712 y Fisioterapeuta Colegiado 6686",
    explanation:
      "Doble visión clínica única (Podólogo + Fisioterapeuta). Realizamos estudio biomecánico de la marcha, plantillas funcionales a medida, quiropodia completa, tratamiento de uñas encarnadas, papilomas y hongos.",
    urgencyBadge: "Doble Titulación Podología + Fisio",
  },
  {
    id: "laser-diodo-sin-bonos",
    label: "Depilación Láser sin bonos",
    shortQuestion: "Busco depilación láser indolora pagando solo por sesión",
    iconName: "sparkles",
    recommendedSpecialtyIds: ["laser-diodo"],
    recommendedSpecialistName: "Erica Ortiz",
    recommendedSpecialistRole: "Esteticista Especialista en Depilación Láser Diodo",
    explanation:
      "Tecnología Láser Diodo de alta eficacia e indolora apta para todo tipo de pieles todo el año. Pagas únicamente tus sesiones sueltas (ej. Axilas 23€, Cuerpo completo Mujer 95€ / Hombre 105€) sin atarte a bonos caros.",
    urgencyBadge: "Sesiones sueltas desde 13€",
  },
  {
    id: "bebes-embarazo-pilates",
    label: "Bebés (Cólicos), Embarazo o Pilates",
    shortQuestion: "Cólicos del lactante, suelo pélvico o Pilates terapéutico",
    iconName: "baby",
    recommendedSpecialtyIds: ["osteopatia", "pilates", "drenaje-linfatico"],
    recommendedSpecialistName: "Vanessa Lamela / Diana Ortiz / Sofía Sánchez",
    recommendedSpecialistRole: "Osteopatía Pediátrica, Suelo Pélvico y Pilates Fisioterapéutico",
    explanation:
      "Cuidamos de los más pequeños (cólicos del lactante, plagiocefalia, reflujo con osteopatía pediátrica suave) y de la mujer (suelo pélvico, drenaje linfático y grupos reducidos de Pilates impartido por fisioterapeutas).",
    urgencyBadge: "Grupos Reducidos y Trato Experto",
  },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: "fisioterapia",
    slug: "fisioterapia-avanzada",
    number: "01",
    title: "Fisioterapia Traumatológica y Deportiva",
    shortTitle: "Fisioterapia",
    subtitle: "Recuperación funcional, alivio del dolor agudo/crónico y readaptación de lesiones",
    badge: "Fisioterapeutas Colegiados",
    iconName: "activity",
    // TODO: Sostituire con foto reale da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Fisioterapeuta colegiada realizando terapia manual cervical y articular en Clínica FisioDietetic València",
    imageComment:
      "TODO: Sostituire con foto reale trattamento fisioterapia da /wp-content/uploads/ di fisiodietetic.com",
    summary:
      "Tratamiento clínico individualizado en box privado. Abordamos desde dolores cervicales y lumbares del día a día hasta rehabilitaciones complejas post-quirúrgicas, accidentes de tráfico y lesiones de alto rendimiento deportivo.",
    conditionsTreated: [
      "Afecciones traumatológicas: esguinces, subluxaciones, fracturas y rehabilitación post-quirúrgica",
      "Secuelas de accidentes de tráfico (latigazo cervical) y accidentes laborales",
      "Patología de raquis y columna: escoliosis, hipercifosis, hiperlordosis, hernias y protrusiones discales",
      "Lesiones deportivas: tendinopatías rotulianas/aquíleas, roturas fibrilares, fascitis plantar, sobrecargas",
      "Dolor crónico, fibromialgia, cefaleas tensionales y disfunción de ATM (mandíbula)",
    ],
    techniquesUsed: [
      "Terapia Manual Ortopédica y Movilización Articular",
      "Punción Seca para puntos gatillo miofasciales",
      "Anclaje Miofascial y Terapia Instrumentalizada (Método Richelli)",
      "Vendaje Funcional y Vendaje Neuromuscular (Kinesiotaping)",
      "Electroestimulación y Reeducación Propioceptiva",
      "Diagnóstico y tratamiento especializado de ATM (Articulación Temporomandibular)",
    ],
    durationAndApproach:
      "Sesiones individuales de aprox. 50-60 minutos centradas 100% en terapia activa y manual con tu fisioterapeuta colegiado. Sin máquinas de relleno.",
    recommendedProfessional: "Sofía Sánchez (Col. 2484), Diana Ortiz (Col. 4644), Vanessa Lamela (Col. 8067), Florencia García (Col. 8560)",
  },
  {
    id: "osteopatia",
    slug: "osteopatia-integral",
    number: "02",
    title: "Osteopatía Estructural, Visceral y Pediátrica",
    shortTitle: "Osteopatía C.O.",
    subtitle: "Formación de 5 años post-grado en Fisioterapia · Enfoque holístico del cuerpo",
    badge: "5 Años Post-Grado C.O.",
    iconName: "bone",
    // TODO: Sostituire con foto reale da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Sesión de osteopatía craneal y estructural realizada por fisioterapeuta osteópata C.O. en València",
    imageComment:
      "TODO: Sostituire con foto reale osteopatia da /wp-content/uploads/ di fisiodietetic.com",
    summary:
      "Nuestras osteópatas son Fisioterapeutas Colegiadas con 5 años adicionales de formación superior en Osteopatía (C.O.). Buscamos la causa primaria del desequilibrio conectando el sistema musculoesquelético, visceral y craneal.",
    conditionsTreated: [
      "Osteopatía Estructural: contracturas profundas, bloqueos vertebrales, tendinitis, esguinces, ciáticas y lesiones deportivas",
      "Osteopatía Visceral: estreñimiento crónico, colon irritable, hernia de hiato, gastritis, gases, trastornos ginecológicos (amenorrea, dismenorrea y dolor menstrual)",
      "Osteopatía Craneal en Adultos: migrañas, cefaleas, vértigos, mareos, bruxismo y neuralgias faciales",
      "Osteopatía Pediátrica (Bebés): cólicos del lactante, reflujo gastroesofágico, plagiocefalia y deformidades craneales, tortícolis congénita y trastornos del sueño",
    ],
    subSpecialties: [
      {
        name: "Osteopatía Estructural",
        details:
          "Restaura la movilidad de articulaciones, músculos y fascias en contracturas, tendinitis, esguinces y lesiones deportivas.",
      },
      {
        name: "Osteopatía Visceral",
        details:
          "Mejora la movilidad y motilidad visceral en estreñimiento, colon irritable, hernia de hiato, gastritis, gases y dismenorrea/amenorrea.",
      },
      {
        name: "Osteopatía Craneal y Pediátrica (Bebés)",
        details:
          "Maniobras extremadamente suaves e indoloras para migrañas y vértigos en adultos, y para plagiocefalia, cólicos del lactante, reflujo y tortícolis congénita en bebés.",
      },
    ],
    techniquesUsed: [
      "Manipulaciones estructurales de alta precisión y técnicas de energía muscular",
      "Liberación miofascial y visceral suave",
      "Terapia sacro-craneal en adultos y lactantes",
      "Valoración biomecánica global de cadenas lesionales",
    ],
    durationAndApproach:
      "Sesión integral de anamnesis clínica, test osteopáticos y tratamiento manual adaptado a cada paciente, desde recién nacidos hasta adultos y deportistas.",
    recommendedProfessional: "Sofía Sánchez (Col. 2484 · Osteópata C.O.) y Vanessa Lamela (Col. 8067 · Osteópata C.O.)",
  },
  {
    id: "nutricion",
    slug: "nutricion-y-dietetica",
    number: "03",
    title: "Nutrición y Dietética con Comida Real",
    shortTitle: "Nutrición Real",
    subtitle: "«No necesitas comer menos, solo necesitas comer mejor» · Sin batidos ni productos milagro",
    badge: "Sin Batidos · Comida Real",
    iconName: "apple",
    // TODO: Sostituire con foto reale da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Plan nutricional saludable con comida fresca y real del supermercado en Clínica FisioDietetic València",
    imageComment:
      "TODO: Sostituire con foto reale nutrizione da /wp-content/uploads/ di fisiodietetic.com",
    summary:
      "Olvídate de pasar hambre, pesar cada gramo de por vida o gastar dinero en batidos, pastillas o productos milagro. Aprendemos a nutrir tu cuerpo con comida real que compras en tu supermercado habitual, adaptada a tus horarios y gustos.",
    conditionsTreated: [
      "Pérdida de peso saludable y sostenible sin efecto rebote",
      "Nutrición deportiva: optimización del rendimiento, carga de glucógeno y recomposición corporal",
      "Dietoterapia clínica: control de diabetes, hipercolesterolemia, patología de tiroides, ácido úrico (gota) e hipertensión arterial",
      "Nutrición vegetariana y vegana equilibrada sin déficits nutricionales",
      "Nutrición infantil, educación alimentaria familiar, embarazo y lactancia",
    ],
    techniquesUsed: [
      "Estudio antropométrico completo y análisis de composición corporal (masa grasa, masa muscular, agua)",
      "Menús y pautas semanales flexibles con ingredientes 100% de supermercado",
      "Educación nutricional práctica: lectura de etiquetas, organización de tuppers y recetas sencillas",
      "Seguimiento cercano y adaptación continua para mantener la adherencia y motivación",
    ],
    durationAndApproach:
      "Primera consulta de valoración nutricional y antropométrica completa + revisiones periódicas donde ajustamos tu pauta sin suplementos innecesarios.",
    recommendedProfessional: "Sofía Sánchez (T.S. en Dietética y Nutrición · Especialista en Nutrición Clínica, Deportiva y Vegetariana)",
  },
  {
    id: "podologia",
    slug: "podologia-avanzada",
    number: "04",
    title: "Podología Clínica, Deportiva y Biomecánica",
    shortTitle: "Podología",
    subtitle: "Estudio biomecánico de la marcha, plantillas a medida y salud integral del pie",
    badge: "Podólogo Colegiado 2712",
    iconName: "footprints",
    // TODO: Sostituire con foto reale da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Estudio biomecánico de la pisada y exploración podológica en Clínica FisioDietetic València",
    imageComment:
      "TODO: Sostituire con foto reale podologia da /wp-content/uploads/ di fisiodietetic.com",
    summary:
      "Dirigido por Andrés Esteban (Podólogo Col. 2712 y Fisioterapeuta Col. 6686), integramos la salud del pie con la biomecánica de rodilla, cadera y columna. Desde quiropodia médica hasta plantillas funcionales personalizadas y cirugía ungueal.",
    conditionsTreated: [
      "Alteraciones de la pisada en adultos y podología infantil (pies planos, cavos, valgos)",
      "Podología deportiva: prevención y tratamiento de esguinces de repetición, fascitis plantar, espolón calcáneo y tendinitis",
      "Quiropodia completa: eliminación indolora de callosidades (helomas) y durezas (hiperqueratosis)",
      "Alteraciones ungueales: uñas encarnadas (onicocriptosis), uñas engrosadas y cirugía ungueal/partes blandas",
      "Infecciones: verrugas plantares (papilomas), hongos en uñas (onicomicosis) y pie de atleta",
    ],
    techniquesUsed: [
      "Estudio Biomecánico informatizado y clínico de la marcha y carrera",
      "Diseño y adaptación de Plantillas Funcionales Personalizadas a medida",
      "Ortesiología digital: separadores de silicona a medida",
      "Farmacoterapéutica podológica, infiltraciones ecoguiadas/clínicas y cirugía menor podológica",
    ],
    durationAndApproach:
      "Atención dedicada sin prisas («está mucho rato contigo y te deja los pies muy bien», destacan nuestros pacientes). Instrumental esterilizado en autoclave grado médico.",
    recommendedProfessional: "Andrés Esteban (Podólogo Colegiado 2712 y Fisioterapeuta Colegiado 6686)",
  },
  {
    id: "masajes",
    slug: "masajes-terapeuticos-y-deportivos",
    number: "05",
    title: "Masajes Terapéuticos y Deportivos",
    shortTitle: "Masaje Deportivo",
    subtitle: "Preparación, descarga post-competición y alivio de contracturas por fisioterapeutas",
    badge: "-90% Riesgo de Lesión",
    iconName: "hand",
    // TODO: Sostituire con foto reale da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Masaje deportivo de descarga muscular y descontracturante realizado por fisioterapeuta en València",
    imageComment:
      "TODO: Sostituire con foto reale massaggio terapeutico da /wp-content/uploads/ di fisiodietetic.com",
    summary:
      "Todo masaje en FisioDietetic es realizado exclusivamente por fisioterapeutas colegiadas con conocimiento anatómico profundo. Un buen masaje deportivo regular reduce hasta en un 90% el riesgo de sufrir una lesión muscular.",
    conditionsTreated: [
      "Masaje Deportivo Pre y Post-Competición: preparación del tono muscular y descarga de fatiga tras carreras, maratones o entrenamientos intensos",
      "Masaje Terapéutico Descontracturante: liberación de sobrecargas en espalda, trapecios, cuello y piernas por posturas laborales",
      "Masaje Relajante Anti-Estrés: reducción del cortisol, tensión nerviosa, bruxismo e insomnio",
      "Masaje Circulatorio: activación del retorno venoso en piernas cansadas, pesadez y retención hídrica",
    ],
    techniquesUsed: [
      "Masoterapia profunda transversal y longitudinal",
      "Liberación miofascial y técnicas de inhibición por presión",
      "Terapia manual instrumentalizada (Método Richelli) para tejido profundo sin dolor excesivo",
      "Estiramientos pasivos asistidos y crioterapia/termoterapia local",
    ],
    durationAndApproach:
      "Adaptamos la intensidad y profundidad exactamente a tu umbral de tolerancia y al momento de tu temporada deportiva.",
    recommendedProfessional: "Diana Ortiz (Col. 4644), Florencia García (Col. 8560), Sofía Sánchez (Col. 2484)",
  },
  {
    id: "drenaje-linfatico",
    slug: "drenaje-linfatico-manual",
    number: "06",
    title: "Drenaje Linfático Manual Médico",
    shortTitle: "Drenaje Linfático",
    subtitle: "Tratamiento sanitario de edemas, linfedemas oncológicos, post-cirugía y retención",
    badge: "Especialidad Clínica",
    iconName: "droplets",
    // TODO: Sostituire con foto reale da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Fisioterapeuta aplicando maniobras suaves de Drenaje Linfático Manual médico en Clínica FisioDietetic",
    imageComment:
      "TODO: Sostituire con foto reale drenaggio linfatico da /wp-content/uploads/ di fisiodietetic.com",
    summary:
      "Técnica manual sanitaria suave, rítmica y específica que activa el sistema linfático para evacuar el exceso de líquido intersticial y macromoléculas. Imprescindible en recuperaciones post-quirúrgicas y patologías vasculares.",
    conditionsTreated: [
      "Linfedemas y post-operatorios tras extirpación de ganglios linfáticos (ej. recuperación tras cirugía de cáncer de mama)",
      "Edemas traumáticos, post-quirúrgicos (cirugía estética o traumatológica) y piernas/brazos hinchados",
      "Retención severa de líquidos y pesadez de extremidades inferiores durante el embarazo",
      "Problemas circulatorios crónicos, insuficiencia venosa y celulitis edematosa",
    ],
    techniquesUsed: [
      "Maniobras oficiales de Drenaje Linfático Manual (bombeo ganglionar y reabsorción)",
      "Vendaje neuromuscular linfático (Kinesiotaping en pulpo) para prolongar el drenaje 24/7",
      "Pautas de ejercicio terapéutico miolinfocinético y cuidados posturales",
    ],
    durationAndApproach:
      "Maniobras lentas, indoloras y profundamente relajantes realizadas por fisioterapeutas formadas específicamente en fisioterapia linfática.",
    recommendedProfessional: "Florencia García (Fisioterapeuta Colegiada 8560 · Especialista en DLM)",
  },
  {
    id: "pilates",
    slug: "pilates-terapeutico",
    number: "07",
    title: "Pilates Terapéutico (Grupos Reducidos)",
    shortTitle: "Pilates Terapéutico",
    subtitle: "Impartido exclusivamente por fisioterapeutas especializados y adaptado a tus lesiones",
    badge: "Dirigido por Fisioterapeutas",
    iconName: "users",
    // TODO: Sostituire con foto reale da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Clase de Pilates Terapéutico en grupo reducido supervisada por fisioterapeuta en València",
    imageComment:
      "TODO: Sostituire con foto reale pilates terapeutico da /wp-content/uploads/ di fisiodietetic.com",
    summary:
      "A diferencia de un gimnasio masificado, en FisioDietetic el Pilates es una herramienta clínica impartida siempre por fisioterapeutas colegiadas en grupos muy reducidos. Adaptamos cada ejercicio a tu hernia, escoliosis o etapa vital.",
    conditionsTreated: [
      "Dolor de espalda crónico, hernias discales, protrusiones, escoliosis y rectificación cervical/lumbar",
      "Preparación física y prevención de lesiones en deportistas (mejora del core, estabilidad y flexibilidad)",
      "Pacientes con fibromialgia, fatiga crónica o rigidez articular que necesitan movimiento seguro",
      "Pilates adaptado al Embarazo (preparación al parto y pelvis) y recuperación Postparto (diástasis y suelo pélvico)",
    ],
    techniquesUsed: [
      "Método Pilates Clínico en suelo con implementos (aro mágico, fitball, bandas, rodillo foam)",
      "Activación selectiva del transverso abdominal y musculatura profunda del suelo pélvico",
      "Control respiratorio, higiene postural y reeducación propioceptiva",
      "Corrección individualizada constante por parte del fisioterapeuta en sala",
    ],
    durationAndApproach:
      "Grupos reducidos con valoración previa de tus lesiones para garantizar que cada movimiento te fortalezca sin provocarte dolor.",
    recommendedProfessional: "Sofía Sánchez (Col. 2484), Diana Ortiz (Col. 4644), Vanessa Lamela (Col. 8067)",
  },
  {
    id: "laser-diodo",
    slug: "depilacion-laser-diodo",
    number: "08",
    title: "Depilación Láser Diodo Indoloro (Sin Bonos)",
    shortTitle: "Láser Diodo",
    subtitle: "Pago por sesiones sueltas sin compromiso de bonos caros · Apto para todo tipo de pieles",
    badge: "Cuerpo Completo 95€ / 105€",
    iconName: "sparkles",
    // TODO: Sostituire con foto reale da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Cabina de Depilación Láser Diodo indoloro en Clínica FisioDietetic València",
    imageComment:
      "TODO: Sostituire con foto reale laser diodo da /wp-content/uploads/ di fisiodietetic.com",
    summary:
      "Depilación definitiva con Láser Diodo de última generación con cabezal ultra-refrigerado indoloro. En FisioDietetic apostamos por la transparencia total: pagas solo la sesión que te haces, sin obligarte a financiar ni comprar bonos caros.",
    conditionsTreated: [
      "Eliminación progresiva y duradera del vello facial y corporal en mujer y hombre",
      "Foliculitis (pelos enquistados) en ingles, piernas, barba o glúteos",
      "Depilación deportiva para ciclistas, nadadores, corredores y atletas",
      "Apto para todos los fototipos de piel (incluso pieles bronceadas siguiendo pauta de seguridad)",
    ],
    techniquesUsed: [
      "Láser Diodo de alta potencia con sistema de enfriamiento por contacto (tratamiento indoloro)",
      "Parametrización personalizada según fototipo cutáneo y grosor/color del folículo",
      "Protocolo higiénico-sanitario en entorno de clínica autorizada",
    ],
    durationAndApproach:
      "Resultados visibles desde las primeras sesiones («Llevo tres sesiones en axilas y ya casi no me quedan pelos»). Tarifas cerradas por sesión suelta desde 13€.",
    priceHighlight: "Promoción Cuerpo Completo: Mujer 95€ · Hombre 105€ | Zonas sueltas desde 13€",
    recommendedProfessional: "Erica Ortiz (Esteticista Especialista en Depilación Láser Diodo)",
  },
];

export const LASER_TARIFFS: LaserTariffItem[] = [
  {
    id: "cc-mujer",
    zone: "Promoción Cuerpo Completo Mujer",
    category: "promocion",
    bodyArea: "cuerpo-completo",
    price: 95,
    durationApprox: "60-75 min",
    popular: true,
    description: "Sesión suelta completa sin necesidad de comprar bono. Incluye piernas, ingles, axilas y brazos/zonas a elegir.",
  },
  {
    id: "cc-hombre",
    zone: "Promoción Cuerpo Completo Hombre",
    category: "promocion",
    bodyArea: "cuerpo-completo",
    price: 105,
    durationApprox: "75-90 min",
    popular: true,
    description: "Sesión suelta integral masculina sin compromiso de bonos. Ideal para deportistas, ciclistas y cuidado personal.",
  },
  {
    id: "piernas-enteras",
    zone: "Piernas enteras",
    category: "unisex",
    bodyArea: "piernas-gluteos",
    price: 46,
    durationApprox: "35 min",
    popular: true,
    description: "Muslos, rodillas, medias piernas, empeines y dedos.",
  },
  {
    id: "medias-piernas",
    zone: "Medias piernas",
    category: "unisex",
    bodyArea: "piernas-gluteos",
    price: 25,
    durationApprox: "20 min",
    description: "Incluye rodillas, pantorrillas, empeines y dedos.",
  },
  {
    id: "ingles-normales",
    zone: "Ingles",
    category: "mujer",
    bodyArea: "piernas-gluteos",
    price: 25,
    durationApprox: "15 min",
    description: "Línea del bikini estándar con cabezal refrigerado indoloro.",
  },
  {
    id: "ingles-completas",
    zone: "Ingles completas",
    category: "mujer",
    bodyArea: "piernas-gluteos",
    price: 30,
    durationApprox: "20 min",
    popular: true,
    description: "Depilación íntima integral de ingles y pubis.",
  },
  {
    id: "gluteos",
    zone: "Glúteos",
    category: "unisex",
    bodyArea: "piernas-gluteos",
    price: 23,
    durationApprox: "15 min",
    description: "Zona glútea completa, ideal contra la foliculitis.",
  },
  {
    id: "perianal",
    zone: "Perianal",
    category: "unisex",
    bodyArea: "piernas-gluteos",
    price: 13,
    durationApprox: "10 min",
    description: "Zona interglútea/perianal con máxima higiene y confort.",
  },
  {
    id: "axilas",
    zone: "Axilas",
    category: "unisex",
    bodyArea: "torso-brazos",
    price: 23,
    durationApprox: "10 min",
    popular: true,
    description: "Una de las zonas más agradecidas: resultados rápidos desde la 1.ª-3.ª sesión.",
  },
  {
    id: "brazos-completos",
    zone: "Brazos completos",
    category: "unisex",
    bodyArea: "torso-brazos",
    price: 34,
    durationApprox: "25 min",
    description: "Hombros, brazos, antebrazos, manos y dedos.",
  },
  {
    id: "medios-brazos",
    zone: "Medios brazos",
    category: "unisex",
    bodyArea: "torso-brazos",
    price: 23,
    durationApprox: "15 min",
    description: "Antebrazos desde el codo hasta las manos.",
  },
  {
    id: "espalda",
    zone: "Espalda completa",
    category: "hombre",
    bodyArea: "torso-brazos",
    price: 46,
    durationApprox: "30 min",
    popular: true,
    description: "Espalda superior, dorsal y zona lumbar completa.",
  },
  {
    id: "pecho",
    zone: "Pecho",
    category: "hombre",
    bodyArea: "torso-brazos",
    price: 23,
    durationApprox: "15 min",
    description: "Zona pectoral completa por sesión suelta.",
  },
  {
    id: "abdomen",
    zone: "Abdomen",
    category: "unisex",
    bodyArea: "torso-brazos",
    price: 23,
    durationApprox: "15 min",
    description: "Zona abdominal completa o línea alba.",
  },
  {
    id: "facial-completo",
    zone: "Facial completo",
    category: "unisex",
    bodyArea: "facial",
    price: 34,
    durationApprox: "20 min",
    description: "Incluye labio superior, mentón, patillas y pómulos/entrecejo.",
  },
  {
    id: "labio-superior",
    zone: "Labio superior",
    category: "mujer",
    bodyArea: "facial",
    price: 13,
    durationApprox: "10 min",
    description: "Sesión rápida e indolora para labio superior.",
  },
  {
    id: "menton",
    zone: "Mentón",
    category: "mujer",
    bodyArea: "facial",
    price: 13,
    durationApprox: "10 min",
    description: "Eliminación precisa de vello hormonal o localizado en barbilla.",
  },
  {
    id: "patillas",
    zone: "Patillas",
    category: "unisex",
    bodyArea: "facial",
    price: 13,
    durationApprox: "10 min",
    description: "Definición y eliminación de vello en zona de patillas.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sofia-sanchez",
    name: "Sofía Sánchez",
    role: "Fisioterapeuta Colegiada 2484 y T.S. en Dietética y Nutrición",
    colegiadoBadges: [
      { discipline: "Fisioterapeuta Col. ICOFCV", number: "2484" },
      { discipline: "T.S. Dietética y Nutrición", number: "Titulada Oficial" },
    ],
    imageSlotId: "sofia",
    // TODO: Sostituire con foto reale `sofia` da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85",
    imageAlt:
      "Sofía Sánchez — Fisioterapeuta Colegiada 2484, Osteópata C.O. y Nutricionista en Clínica FisioDietetic València",
    initials: "SS",
    bio: "Directora clínica con visión integral de la salud: une la Fisioterapia y la Osteopatía C.O. con la Nutrición Clínica y Deportiva basada en comida real del supermercado.",
    specialties: [
      "Osteopatía C.O. (Estructural, Visceral y Craneal)",
      "Punción Seca y Acupuntura clínica",
      "Vendaje funcional y Kinesiotaping",
      "Método Pilates Terapéutico",
      "Nutrición clínica avanzada, deportiva y vegetariana",
    ],
    featuredQuote: "«No necesitas comer menos ni tomar batidos; necesitas comer mejor y entender tu cuerpo.»",
  },
  {
    id: "andres-esteban",
    name: "Andrés Esteban",
    role: "Podólogo Colegiado 2712 y Fisioterapeuta Colegiado 6686",
    colegiadoBadges: [
      { discipline: "Podólogo Col. ICOPCV", number: "2712" },
      { discipline: "Fisioterapeuta Col. ICOFCV", number: "6686" },
    ],
    imageSlotId: "andres-esteban",
    // TODO: Sostituire con foto reale `andres-esteban` da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85",
    imageAlt:
      "Andrés Esteban — Podólogo Colegiado 2712 y Fisioterapeuta Colegiado 6686 en Clínica FisioDietetic València",
    initials: "AE",
    bio: "Doble titulación universitaria en Podología y Fisioterapia. Esta combinación excepcional le permite diagnosticar cómo tu pisada afecta a tus rodillas, caderas y columna vertebral.",
    specialties: [
      "Estudio biomecánico de la marcha y plantillas a medida",
      "Farmacoterapéutica podológica e infiltraciones",
      "Cirugía ungueal (uñas encarnadas) y de partes blandas",
      "Tratamiento avanzado de onicomicosis y papilomas",
      "Podología deportiva e infantil",
    ],
    featuredQuote: "«Una pisada equilibrada es la base para prevenir lesiones desde el tobillo hasta la columna.»",
  },
  {
    id: "diana-ortiz",
    name: "Diana Ortiz",
    role: "Fisioterapeuta Colegiada 4644",
    colegiadoBadges: [{ discipline: "Fisioterapeuta Col. ICOFCV", number: "4644" }],
    imageSlotId: "prof3",
    // TODO: Sostituire con foto reale `prof3` (Diana) da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85",
    imageAlt:
      "Diana Ortiz — Fisioterapeuta Colegiada 4644 especialista en recuperación deportiva y Pilates en FisioDietetic",
    initials: "DO",
    bio: "Apasionada del movimiento y la readaptación funcional. Especializada en devolver a deportistas y pacientes con dolor crónico su máxima capacidad física sin recaídas.",
    specialties: [
      "Recuperación y descarga deportiva",
      "Reeducación funcional y propioceptiva",
      "Método Pilates Terapéutico en grupos reducidos",
      "Terapia Bobath aplicada en pediatría",
      "Terapia manual instrumentalizada (Método Richelli)",
    ],
    featuredQuote: "«El movimiento guiado y la terapia manual precisa son la mejor medicina contra la lesión.»",
  },
  {
    id: "vanessa-lamela",
    name: "Vanessa Lamela",
    role: "Fisioterapeuta Colegiada 8067",
    colegiadoBadges: [{ discipline: "Fisioterapeuta Col. ICOFCV", number: "8067" }],
    imageSlotId: "Screenshot",
    // TODO: Sostituire con foto reale `Screenshot` (Vanessa) da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=85",
    imageAlt:
      "Vanessa Lamela — Fisioterapeuta Colegiada 8067 especialista en Osteopatía C.O. y Suelo Pélvico en València",
    initials: "VL",
    bio: "Especialista en Osteopatía C.O. y rehabilitación de Suelo Pélvico. Acompaña con rigor y empatía a mujeres en embarazo, postparto y patologías uroginecológicas, así como dolor osteopático.",
    specialties: [
      "Osteopatía C.O. (Estructural, Visceral y Craneal)",
      "Fisioterapia de Suelo Pélvico y Salud de la Mujer",
      "Valoración preparto, recuperación postparto y diástasis",
      "Osteopatía pediátrica y visceral",
    ],
    featuredQuote: "«Cuidar el suelo pélvico y el equilibrio osteopático transforma la calidad de vida diaria.»",
  },
  {
    id: "florencia-garcia",
    name: "Florencia García",
    role: "Fisioterapeuta Colegiada 8560",
    colegiadoBadges: [{ discipline: "Fisioterapeuta Col. ICOFCV", number: "8560" }],
    imageSlotId: "IMG_1677",
    // TODO: Sostituire con foto reale `IMG_1677` (Florencia) da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=800&q=85",
    imageAlt:
      "Florencia García — Fisioterapeuta Colegiada 8560 especialista en ATM y Drenaje Linfático Manual en València",
    initials: "FG",
    bio: "Referente en patología craneomandibular (ATM y bruxismo), liberación miofascial y Drenaje Linfático Manual médico para edemas y recuperación post-quirúrgica.",
    specialties: [
      "Diagnóstico y tratamiento de ATM (Articulación Temporomandibular y Bruxismo)",
      "Anclaje Miofascial y liberación de cadenas tensionales",
      "Drenaje Linfático Manual médico y post-operatorio",
      "Vendaje neuromuscular (Kinesiotaping)",
    ],
    featuredQuote: "«Destensar la mandíbula (ATM) y el tejido miofascial libera dolores de cuello y cabeza de años.»",
  },
  {
    id: "erica-ortiz",
    name: "Erica Ortiz",
    role: "Esteticista Especialista en Depilación Láser Diodo",
    colegiadoBadges: [{ discipline: "Especialista Certificada", number: "Láser Diodo" }],
    imageSlotId: "prof1",
    // TODO: Sostituire con foto reale `prof1` (Erica) da /wp-content/uploads/ di fisiodietetic.com
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
    imageAlt:
      "Erica Ortiz — Esteticista Especialista en Depilación Láser Diodo Indoloro en Clínica FisioDietetic València",
    initials: "EO",
    bio: "Especialista técnica en fotodepilación con Láser Diodo de alta potencia. Cuida cada parámetro según tu piel para lograr la máxima eficacia en menos sesiones y sin dolor.",
    specialties: [
      "Depilación Láser Diodo indoloro en mujer y hombre",
      "Diagnóstico personalizado de fototipo y folículo",
      "Tratamiento preventivo de foliculitis y vello enquistado",
      "Protocolos seguros por sesiones sueltas sin bonos",
    ],
    featuredQuote: "«Resultados visibles desde las primeras sesiones, con trato cercano y sin atarte a ningún bono.»",
  },
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-marta",
    author: "Marta P.",
    treatmentTag: "Nutrición con Comida Real",
    specialtyId: "nutricion",
    rating: 5,
    dateLabel: "Paciente verificada · Sede València",
    quote:
      "Sigo la dieta de Sofía y estoy muy contenta, llevo 9kg perdidos y me encuentro mucho mejor anímicamente. Sencilla de seguir y sin depender de batidos.",
    verifiedLabel: "Reseña Real Verificada",
    specialistMentioned: "Sofía Sánchez",
  },
  {
    id: "rev-marcos",
    author: "Marcos M.",
    treatmentTag: "Fisioterapia Deportiva · Maratón",
    specialtyId: "fisioterapia",
    rating: 5,
    dateLabel: "Paciente verificado · Sede València",
    quote:
      "Estaba preparándome para la maratón y empezaba a notar molestias por la rodilla derecha. En dos sesiones ese dolor desapareció.",
    verifiedLabel: "Reseña Real Verificada",
    specialistMentioned: "Equipo Fisioterapia Deportiva",
  },
  {
    id: "rev-rosalia",
    author: "Rosalia G.",
    treatmentTag: "Rehabilitación de Hombro",
    specialtyId: "fisioterapia",
    rating: 5,
    dateLabel: "Paciente verificada · Sede València",
    quote:
      "Llevaba mucho tiempo con dolor de hombro tras rehabilitación sin mejorar del todo. Con las movilizaciones y masajes de estas chicas he conseguido que me quedara como el otro hombro.",
    verifiedLabel: "Reseña Real Verificada",
    specialistMentioned: "Equipo Fisioterapia",
  },
  {
    id: "rev-fernando",
    author: "Fernando C.",
    treatmentTag: "Fisioterapia Cervical y Cefaleas",
    specialtyId: "osteopatia",
    rating: 5,
    dateLabel: "Paciente verificado · Sede València",
    quote:
      "Mi dolor de cuello constante ha pasado a aparecer sólo un día o dos puntuales del mes y ya no me duele la cabeza como antes. Destacaría el trato cercano.",
    verifiedLabel: "Reseña Real Verificada",
    specialistMentioned: "Fisioterapia y Osteopatía",
  },
  {
    id: "rev-carmen",
    author: "Carmen S.",
    treatmentTag: "Podología y Plantillas a Medida",
    specialtyId: "podologia",
    rating: 5,
    dateLabel: "Paciente verificada · Sede València",
    quote:
      "Desde que fui allí al podólogo no he cambiado a otro. Está mucho rato contigo y te deja los pies muy bien. Mi hijo también fue a que le hiciera unas plantillas y está encantado.",
    verifiedLabel: "Reseña Real Verificada",
    specialistMentioned: "Andrés Esteban",
  },
  {
    id: "rev-eva",
    author: "Eva L.",
    treatmentTag: "Depilación Láser Diodo",
    specialtyId: "laser-diodo",
    rating: 5,
    dateLabel: "Paciente verificada · Sede València",
    quote:
      "Voy a depilarme las axilas. Llevo tres sesiones y ya casi no me quedan pelos.",
    verifiedLabel: "Reseña Real Verificada",
    specialistMentioned: "Erica Ortiz",
  },
];
