export function getData(config) {
  // Rutas de imágenes de proyectos, resueltas con la BASE del config.
  const PROJECT_IMAGES = {
    quality: `${config.BASE}Quality1.png`,
    cartas: `${config.BASE}CartasAsignacion.png`,
    factura: `${config.BASE}factura.png`,
    creditos: `${config.BASE}Fincen1.png`,
  };

  // Rutas de imágenes para certificados.
  const CERT_IMAGES = {
    python: `${config.BASE}cert_python_santander.png`,
  };

  // Proyectos principales a mostrar en la sección destacada.
  const PROJECTS = [
    {
      id: "quality",
      title: "Sitio Web de Papelería Quality",
      tag: "Público",
      imageAlt: "Screenshot del sitio Quality",
      imageSrc: PROJECT_IMAGES.quality,
      stack: ["HTML", "CSS", "JavaScript", "Ionos", "WhatsApp API"],
      bullets: [
        "Landing institucional y promocional.",
        "Enfoque en presencia digital, contacto y conversión.",
      ],
      visibility: "public",
      link: config.QUALITY_URL,
      linkLabel: "Ver sitio",
      privacyNote: null,
    },
    {
      id: "cartas",
      title: "Sistema de Gestión de Cartas de Asignación",
      tag: "Privado",
      imageAlt: "Screenshot del sistema de cartas de asignación",
      imageSrc: PROJECT_IMAGES.cartas,
      stack: ["FastAPI", "PostgreSQL", "Svelte", "Nginx", "DigitalOcean"],
      bullets: [
        "Plataforma para creación, firma y almacenamiento digital de cartas.",
        "Desarrollo backend, despliegue y liderazgo técnico del proyecto.",
      ],
      visibility: "private",
      link: null,
      linkLabel: null,
      privacyNote: "Privado (confidencialidad con la empresa asociada)",
    },
    {
      id: "factura",
      title: "Facturama Bot (WhatsApp Automation)",
      tag: "Privado",
      imageAlt: "Screenshot del bot de WhatsApp para facturación",
      imageSrc: PROJECT_IMAGES.factura,
      stack: ["Node.js", "Twilio API", "Facturama API", "PM2", "Nginx"],
      bullets: [
        "Chatbot para facturas y complementos de pago.",
        "Integración completa del flujo conversacional con APIs externas.",
      ],
      visibility: "private",
      link: null,
      linkLabel: null,
      privacyNote: "Privado (confidencialidad con la empresa asociada)",
    },
    {
      id: "creditos",
      title: "Plataforma de Créditos Comunitarios",
      tag: "Demo / Académico",
      imageAlt: "Screenshot de la plataforma de créditos comunitarios",
      imageSrc: PROJECT_IMAGES.creditos,
      stack: ["JavaScript", "React", "Supabase", "PostgreSQL"],
      bullets: [
        "Administración de préstamos, pagos y grupos.",
        "Desarrollo integral (frontend y backend).",
      ],
      visibility: "private",
      link: null,
      linkLabel: null,
      privacyNote: "Privado (confidencialidad con la empresa asociada)",
    },
  ];

  // Proyectos adicionales sin enlace público (por confidencialidad).
  const MORE_PROJECTS = [
    {
      id: "users-devices",
      title: "Sistema de Gestión de Usuarios y Dispositivos",
      tag: "Privado",
      desc:
        "Módulo vinculado al sistema de cartas de asignación, para control de usuarios y equipos.",
      stack: ["FastAPI", "PostgreSQL", "Svelte", "Nginx"],
      role: "Desarrollador backend y líder técnico del proyecto",
    },
    {
      id: "data-loader",
      title: "WHR / GTIM Data Loader (ETL)",
      tag: "Privado",
      desc:
        "Pipeline ETL para ingestión de CSV, validación, transformación y carga (arquitectura por pipelines).",
      stack: ["Python", "Pandas", "PostgreSQL", "DuckDB"],
      role: "Desarrollador (arquitectura, validaciones y pipeline)",
    },
    {
      id: "quality-orders",
      title: "Sistema de Administración de Pedidos (Quality)",
      tag: "Privado",
      desc:
        "Sistema para administración y control de pedidos operativos (proyecto interno/cliente).",
      stack: ["Node.js", "Express", "PostgreSQL", "Bootstrap"],
      role: "Líder del proyecto y administrador del sistema (dirección técnica y flujo operativo)",
    },
  ];

  // Cursos completados con certificado.
  const COURSES_DONE = [
    {
      id: "python-santander",
      title: "Programación básica en Python",
      org: "Santander",
      status: "Completado",
      imageAlt: "Certificado Programación básica en Python - Santander",
      imageSrc: CERT_IMAGES.python,
    },
  ];

  // Cursos actualmente en progreso.
  const COURSES_IN_PROGRESS = [
    { id: "pentest-edutin", title: "Pentest", org: "Edutin Academy", status: "En curso" },
    {
      id: "fundamentos-infotect",
      title: "Fundamentos del desarrollo de software",
      org: "Infotec / Gobierno de México",
      status: "En curso",
    },
  ];

  // Expone toda la data estructurada para el render.
  return {
    PROJECTS,
    MORE_PROJECTS,
    COURSES_DONE,
    COURSES_IN_PROGRESS,
  };
}
