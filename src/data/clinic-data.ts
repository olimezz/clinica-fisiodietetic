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

export interface PatientReview {
  id: string;
  author: string;
  treatmentTag: string;
  specialtyId: string;
  rating: number;
  dateLabel: string;
  quote: string;
  verifiedLabel: string;
}

export interface YoutubeVideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  description: string;
  embedUrl: string;
  watchUrl: string;
}

export const CLINIC_INFO = {
  brandName: "Clínica FisioDietetic",
  tagline: "Osteopatía · Fisioterapia · Nutrición · Podología · Láser Diodo",
  sanitaryRegistryNumber: "21951",
  sanitaryRegistryText: "Centro Sanitario Autorizado por la Generalitat Valenciana · N.º Registro 21951",
  googleRating: "4.5",
  wordOfMouthPercentage: "90%",
  email: "info@fisiodietetic.com",
  copyrightYear: 2026,
  socialLinks: {
    instagram: "https://www.instagram.com/fisiodietetic",
    youtube: "https://www.youtube.com/channel/UCDkfCqJ_HSO_xXlVJT0nfBA",
    facebook: "https://www.facebook.com/fisiodietetic/",
  },
};

export const YOUTUBE_VIDEOS: YoutubeVideoItem[] = [
  {
    id: "video-joroba",
    youtubeId: "Vz3a-toeBwo",
    title: "CÓMO QUITAR LA JOROBA DE BÚFALO",
    category: "Fisioterapia y Postura Corporal",
    description:
      "Consejos prácticos y ejercicios de nuestro equipo de fisioterapeutas colegiados para corregir la postura cervical y dorsal.",
    embedUrl: "https://www.youtube.com/embed/Vz3a-toeBwo?rel=0",
    watchUrl: "https://www.youtube.com/watch?v=Vz3a-toeBwo",
  },
  {
    id: "video-yogur",
    youtubeId: "_R42nrDQoKQ",
    title: "¿QUÉ YOGUR ES MÁS SALUDABLE?",
    category: "Nutrición con Comida Real",
    description:
      "Aprende a elegir en el supermercado analizando los ingredientes reales, sin dejarte engañar por reclamos publicitarios ni productos milagro.",
    embedUrl: "https://www.youtube.com/embed/_R42nrDQoKQ?rel=0",
    watchUrl: "https://www.youtube.com/watch?v=_R42nrDQoKQ",
  },
];

export const CLINIC_LOCATIONS: Record<"jesus" | "alboraya", ClinicLocation> = {
  jesus: {
    id: "jesus",
    name: "FisioDietetic Jesús (València)",
    shortName: "Sede València (Jesús)",
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
    badge: "Clínica en Alboraya (Valencia)",
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
      "Atención sanitaria real por un equipo debidamente titulado y colegiado. Con tu salud no se juega: ponte siempre en buenas manos.",
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
      "Experiencia clínica diaria tratando a corredores de maratón, ciclistas, triatletas, opositores y entusiastas del fitness.",
    badge: "Readaptación & Descarga",
    icon: "trophy",
  },
  {
    id: "multidisciplinar",
    title: "Enfoque Multidisciplinar Real",
    description:
      "Valoración 100% individualizada. Si tu caso lo requiere, nuestras áreas de fisioterapia, osteopatía, podología y nutrición colaboran de forma complementaria.",
    badge: "Visión 360º",
    icon: "network",
  },
  {
    id: "urgencias",
    title: "Prioridad en Urgencias de Dolor",
    description:
      "Sabemos que un bloqueo lumbar o cervical no puede esperar semanas. Te damos cita lo antes posible para aliviar tu dolor rápido.",
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
    recommendedSpecialistRole: "Equipo de Fisioterapeutas y Osteópatas C.O. Colegiados",
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
    recommendedSpecialistRole: "Unidad de Fisioterapia Deportiva y Podología Biomecánica",
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
    recommendedSpecialistRole: "Unidad de Nutrición Clínica y Deportiva Titulada",
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
    recommendedSpecialistRole: "Unidad de Podología Colegiada y Biomecánica",
    explanation:
      "Realizamos estudio biomecánico de la marcha, plantillas funcionales a medida, quiropodia completa (callosidades y durezas), tratamiento de uñas encarnadas, papilomas, hongos y podología infantil.",
    urgencyBadge: "Estudio Biomecánico y Plantillas",
  },
  {
    id: "laser-diodo-sin-bonos",
    label: "Depilación Láser sin bonos",
    shortQuestion: "Busco depilación láser indolora pagando solo por sesión",
    iconName: "sparkles",
    recommendedSpecialtyIds: ["laser-diodo"],
    recommendedSpecialistRole: "Especialista en Depilación Láser Diodo Indoloro",
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
    recommendedSpecialistRole: "Osteopatía Pediátrica y Pilates impartido por Fisioterapeutas",
    explanation:
      "Cuidamos de los más pequeños (cólicos del lactante, plagiocefalia, reflujo con osteopatía pediátrica suave) y ofrecemos grupos reducidos de Pilates Terapéutico impartido siempre por fisioterapeutas especializados.",
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
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Tratamiento de fisioterapia manual cervical y articular en Clínica FisioDietetic",
    imageComment: "Imagen clínica de fisioterapia",
    summary:
      "Tratamiento clínico individualizado en cabina privada. Abordamos desde dolores cervicales y lumbares del día a día hasta rehabilitaciones complejas post-quirúrgicas, accidentes de tráfico y lesiones deportivas.",
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
      "Anclaje Miofascial y Terapia Instrumentalizada",
      "Vendaje Funcional y Vendaje Neuromuscular (Kinesiotaping)",
      "Electroestimulación y Reeducación Propioceptiva",
    ],
    durationAndApproach:
      "Sesiones individuales centradas 100% en terapia manual activa y personalizada por fisioterapeutas colegiados.",
    recommendedProfessional: "Equipo de Fisioterapeutas Titulados y Colegiados",
  },
  {
    id: "osteopatia",
    slug: "osteopatia-integral",
    number: "02",
    title: "Osteopatía Estructural, Visceral y Pediátrica",
    shortTitle: "Osteopatía",
    subtitle: "Formación de 5 años post-grado en Fisioterapia · Enfoque integral del cuerpo",
    badge: "5 Años Post-Grado",
    iconName: "bone",
    imageUrl:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Sesión de osteopatía craneal, visceral y estructural en Clínica FisioDietetic",
    imageComment: "Imagen clínica de osteopatía",
    summary:
      "Especialistas con formación superior de 5 años post-grado en Osteopatía. Buscamos la causa primaria del desequilibrio conectando el sistema musculoesquelético, visceral y craneal tanto en adultos como en bebés.",
    conditionsTreated: [
      "Osteopatía Estructural: contracturas profundas, bloqueos vertebrales, tendinitis, esguinces, ciáticas y lesiones deportivas",
      "Osteopatía Visceral: estreñimiento crónico, colon irritable, hernia de hiato, gastritis, gases, trastornos ginecológicos (amenorrea, dismenorrea)",
      "Osteopatía Craneal en Adultos: migrañas, cefaleas, vértigos, mareos, bruxismo y neuralgias faciales",
      "Osteopatía Pediátrica (Bebés): cólicos del lactante, reflujo gastroesofágico, plagiocefalia y deformidades craneales, tortícolis congénita",
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
          "Mejora la movilidad visceral en estreñimiento, colon irritable, hernia de hiato, gastritis, gases y dismenorrea/amenorrea.",
      },
      {
        name: "Osteopatía Craneal y Pediátrica (Bebés)",
        details:
          "Maniobras muy suaves para migrañas y vértigos en adultos, y para plagiocefalia, cólicos del lactante, reflujo y tortícolis congénita en bebés.",
      },
    ],
    techniquesUsed: [
      "Manipulaciones estructurales precisas y técnicas de energía muscular",
      "Liberación miofascial y visceral suave",
      "Terapia sacro-craneal en adultos y lactantes",
      "Valoración biomecánica global de cadenas lesionales",
    ],
    durationAndApproach:
      "Sesión integral de anamnesis clínica, test osteopáticos y tratamiento manual adaptado desde recién nacidos hasta adultos y deportistas.",
    recommendedProfessional: "Fisioterapeutas Especialistas en Osteopatía (Formación de 5 años post-grado)",
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
    imageUrl:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Plan nutricional saludable con comida fresca y real del supermercado en Clínica FisioDietetic",
    imageComment: "Imagen clínica de nutrición",
    summary:
      "Olvídate de pasar hambre o gastar dinero en batidos, pastillas o productos milagro. Aprendemos a nutrir tu cuerpo con comida real que compras en tu supermercado habitual, adaptada a tus horarios y gustos.",
    conditionsTreated: [
      "Pérdida de peso saludable y sostenible sin efecto rebote",
      "Nutrición deportiva: optimización del rendimiento y recomposición corporal",
      "Dietoterapia clínica: control de diabetes, colesterol, tiroides, ácido úrico e hipertensión arterial",
      "Nutrición vegetariana y vegana equilibrada",
      "Nutrición infantil, embarazo y lactancia",
    ],
    techniquesUsed: [
      "Estudio antropométrico completo y análisis de composición corporal",
      "Menús y pautas semanales flexibles con ingredientes 100% de supermercado",
      "Educación nutricional práctica y lectura de etiquetas",
      "Seguimiento cercano y adaptación continua para mantener la motivación",
    ],
    durationAndApproach:
      "Valoración nutricional y antropométrica completa + revisiones periódicas donde ajustamos tu pauta sin suplementos ni productos milagro.",
    recommendedProfessional: "Unidad de Dietética y Nutrición Titulada",
  },
  {
    id: "podologia",
    slug: "podologia-avanzada",
    number: "04",
    title: "Podología Clínica, Deportiva y Biomecánica",
    shortTitle: "Podología",
    subtitle: "Estudio biomecánico de la marcha, plantillas a medida y salud integral del pie",
    badge: "Podología Colegiada",
    iconName: "footprints",
    imageUrl:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Estudio biomecánico de la pisada y exploración podológica en Clínica FisioDietetic",
    imageComment: "Imagen clínica de podología",
    summary:
      "Cuidado integral de la salud del pie y su relación con la rodilla, cadera y columna. Desde quiropodia médica completa hasta estudio biomecánico de la marcha y plantillas funcionales personalizadas.",
    conditionsTreated: [
      "Estudio biomecánico de la marcha y plantillas funcionales personalizadas",
      "Podología deportiva: prevención de esguinces y tendinitis",
      "Quiropodia completa: eliminación indolora de callosidades y durezas",
      "Alteraciones ungueales (uñas encarnadas), verrugas plantares (papilomas), hongos y bacterias",
      "Separadores de silicona a medida y podología infantil",
    ],
    techniquesUsed: [
      "Estudio Biomecánico clínico de la marcha y la pisada",
      "Diseño y adaptación de Plantillas Funcionales Personalizadas a medida",
      "Ortesiología digital: separadores de silicona a medida",
      "Quiropodia médica e instrumental esterilizado en autoclave",
    ],
    durationAndApproach:
      "Atención dedicada sin prisas («está mucho rato contigo y te deja los pies muy bien», destacan nuestros pacientes).",
    recommendedProfessional: "Servicio de Podología Titulada y Colegiada",
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
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Masaje deportivo de descarga muscular y descontracturante realizado por fisioterapeuta",
    imageComment: "Imagen clínica de masaje terapéutico",
    summary:
      "Todo masaje en FisioDietetic es realizado exclusivamente por fisioterapeutas colegiados. Un buen masaje deportivo regular prepara los tejidos y reduce hasta en un 90% el riesgo de sufrir una lesión muscular.",
    conditionsTreated: [
      "Masaje Deportivo: preparación pre-competición y descarga post-competición (reduce hasta un 90% el riesgo de lesión)",
      "Masaje Terapéutico Descontracturante: liberación de sobrecargas en espalda, cuello y piernas",
      "Masaje Relajante Anti-Estrés: reducción de tensión nerviosa y fatiga",
      "Masaje Circulatorio: activación del retorno venoso y alivio de retención de líquidos",
    ],
    techniquesUsed: [
      "Masoterapia profunda transversal y longitudinal",
      "Liberación miofascial y técnicas de inhibición por presión",
      "Estiramientos pasivos asistidos y descarga muscular deportiva",
    ],
    durationAndApproach:
      "Adaptamos la intensidad y profundidad exactamente a tu umbral de tolerancia y al momento de tu entrenamiento.",
    recommendedProfessional: "Equipo de Fisioterapeutas Colegiados",
  },
  {
    id: "drenaje-linfatico",
    slug: "drenaje-linfatico-manual",
    number: "06",
    title: "Drenaje Linfático Manual",
    shortTitle: "Drenaje Linfático",
    subtitle: "Tratamiento sanitario de edemas, post-operatorios, piernas hinchadas y retención",
    badge: "Especialidad Clínica",
    iconName: "droplets",
    imageUrl:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Aplicación de maniobras suaves de Drenaje Linfático Manual médico en Clínica FisioDietetic",
    imageComment: "Imagen clínica de drenaje linfático",
    summary:
      "Técnica manual sanitaria suave, rítmica y específica que activa el sistema linfático para evacuar el exceso de líquido. Imprescindible en recuperaciones post-quirúrgicas y problemas circulatorios.",
    conditionsTreated: [
      "Post-operatorios de extirpación de ganglios linfáticos (ej. tras cirugía de cáncer de mama)",
      "Edemas traumáticos o post-quirúrgicos y piernas o brazos hinchados",
      "Retención severa de líquidos y pesadez de piernas",
      "Problemas circulatorios crónicos y celulitis edematosa",
    ],
    techniquesUsed: [
      "Maniobras oficiales de Drenaje Linfático Manual (bombeo ganglionar y reabsorción)",
      "Vendaje neuromuscular linfático (Kinesiotaping)",
      "Pautas posturales y ejercicio miolinfocinético",
    ],
    durationAndApproach:
      "Maniobras lentas, indoloras y profundamente relajantes realizadas por fisioterapeutas especializados.",
    recommendedProfessional: "Fisioterapeutas Especialistas en Drenaje Linfático Manual",
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
    imageUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Clase de Pilates Terapéutico en grupo reducido supervisada por fisioterapeuta",
    imageComment: "Imagen clínica de pilates terapéutico",
    summary:
      "A diferencia de un gimnasio masificado, en FisioDietetic el Pilates es una herramienta clínica impartida siempre por fisioterapeutas en grupos reducidos. Adaptamos cada ejercicio a tus lesiones o nivel.",
    conditionsTreated: [
      "Dolor de espalda crónico, hernias discales, protrusiones y escoliosis",
      "Preparación física y prevención de lesiones en deportistas (mejora del core y flexibilidad)",
      "Pacientes con fibromialgia o rigidez articular que necesitan movimiento guiado y seguro",
      "Pilates adaptado al Embarazo y recuperación Postparto",
    ],
    techniquesUsed: [
      "Método Pilates Clínico adaptado por fisioterapeutas",
      "Activación del transverso abdominal y musculatura profunda del suelo pélvico",
      "Control respiratorio, higiene postural y reeducación propioceptiva",
    ],
    durationAndApproach:
      "Grupos reducidos con supervisión constante de tu fisioterapeuta para fortalecerte sin dolor.",
    recommendedProfessional: "Fisioterapeutas Especializados en Pilates Terapéutico",
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
    imageUrl:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Cabina de Depilación Láser Diodo indoloro en Clínica FisioDietetic",
    imageComment: "Imagen clínica de láser diodo",
    summary:
      "Depilación definitiva con Láser Diodo de última generación con cabezal refrigerado indoloro. En FisioDietetic apostamos por la transparencia total: pagas solo la sesión que te haces, sin obligarte a comprar bonos caros.",
    conditionsTreated: [
      "Eliminación progresiva y duradera del vello facial y corporal en mujer y hombre",
      "Foliculitis (pelos enquistados) en ingles, piernas, barba o glúteos",
      "Depilación deportiva para ciclistas, nadadores, corredores y atletas",
      "Apto para todo tipo de pieles durante todo el año",
    ],
    techniquesUsed: [
      "Láser Diodo de alta potencia con sistema de enfriamiento por contacto (tratamiento indoloro)",
      "Parametrización personalizada según fototipo cutáneo y grosor del vello",
      "Protocolo higiénico-sanitario en entorno de clínica autorizada",
    ],
    durationAndApproach:
      "Resultados visibles desde las primeras sesiones («Llevo tres sesiones en axilas y ya casi no me quedan pelos»). Tarifas cerradas por sesión suelta desde 13€.",
    priceHighlight: "Promoción Cuerpo Completo: Mujer 95€ · Hombre 105€ | Zonas sueltas desde 13€",
    recommendedProfessional: "Especialista en Depilación Láser Diodo Indoloro",
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
    description: "Sesión suelta completa sin necesidad de comprar bono.",
  },
  {
    id: "cc-hombre",
    zone: "Promoción Cuerpo Completo Hombre",
    category: "promocion",
    bodyArea: "cuerpo-completo",
    price: 105,
    durationApprox: "75-90 min",
    popular: true,
    description: "Sesión suelta integral masculina sin compromiso de bonos.",
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
    description: "Resultados rápidos y visibles desde las primeras sesiones.",
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
    description: "Eliminación precisa de vello en barbilla.",
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

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-marta",
    author: "Marta P.",
    treatmentTag: "Nutrición con Comida Real",
    specialtyId: "nutricion",
    rating: 5,
    dateLabel: "Paciente verificada · València",
    quote:
      "Estoy muy contenta con el plan nutricional, llevo 9kg perdidos y me encuentro mucho mejor anímicamente. Es la dieta que mejor me ha ido: sencilla de seguir y sin depender de batidos.",
    verifiedLabel: "Reseña Real Verificada",
  },
  {
    id: "rev-marcos",
    author: "Marcos M.",
    treatmentTag: "Fisioterapia Deportiva · Maratón",
    specialtyId: "fisioterapia",
    rating: 5,
    dateLabel: "Paciente verificado · València",
    quote:
      "Me recomendó la clínica un compañero del club. Estaba preparándome para la maratón y empezaba a notar molestias por la rodilla derecha. En dos sesiones ese dolor desapareció.",
    verifiedLabel: "Reseña Real Verificada",
  },
  {
    id: "rev-rosalia",
    author: "Rosalia G.",
    treatmentTag: "Rehabilitación de Hombro",
    specialtyId: "fisioterapia",
    rating: 5,
    dateLabel: "Paciente verificada · València",
    quote:
      "Fue un acierto entrar en esta clínica. Llevaba mucho tiempo con dolor de hombro tras rehabilitación sin mejorar del todo. Con las movilizaciones y masajes he conseguido que me quedara como el otro hombro.",
    verifiedLabel: "Reseña Real Verificada",
  },
  {
    id: "rev-fernando",
    author: "Fernando C.",
    treatmentTag: "Fisioterapia Cervical y Cefaleas",
    specialtyId: "osteopatia",
    rating: 5,
    dateLabel: "Paciente verificado · València",
    quote:
      "Muy profesionales, pero sin duda lo que destacaría es el trato cercano. Mi dolor de cuello constante ha pasado a aparecer sólo un día o dos puntuales del mes y ya no me duele la cabeza como antes.",
    verifiedLabel: "Reseña Real Verificada",
  },
  {
    id: "rev-carmen",
    author: "Carmen S.",
    treatmentTag: "Podología y Plantillas a Medida",
    specialtyId: "podologia",
    rating: 5,
    dateLabel: "Paciente verificada · València",
    quote:
      "Desde que fui allí al podólogo no he cambiado a otro. Está mucho rato contigo y te deja los pies muy bien. Mi hijo también fue a que le hiciera unas plantillas y está encantado.",
    verifiedLabel: "Reseña Real Verificada",
  },
  {
    id: "rev-eva",
    author: "Eva L.",
    treatmentTag: "Depilación Láser Diodo",
    specialtyId: "laser-diodo",
    rating: 5,
    dateLabel: "Paciente verificada · València",
    quote:
      "Voy a depilarme las axilas. Llevo tres sesiones y ya casi no me quedan pelos.",
    verifiedLabel: "Reseña Real Verificada",
  },
];
