import "./style.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/victor-hernandez-ba559022a/";
const QUALITY_URL = "https://cadereytaquality.com/";
const GITHUB_URL = "https://github.com/AdrianHernandez21";

const EMAIL = "victorhernandez.fraga@gmail.com";
const PHONE_DISPLAY = "+52 8281040259";
const PHONE_TEL = "+528281040259";

const BASE = import.meta.env.BASE_URL;

const CV_PDF = `${BASE}CV_Victor_Hernandez.pdf`;
const PROFILE_IMG = `${BASE}profile.jpeg`;

const PROJECT_IMAGES = {
  quality: `${BASE}Quality1.png`,
  cartas: `${BASE}CartasAsignacion.png`,
  factura: `${BASE}factura.png`,
  creditos: `${BASE}Fincen1.png`,
};

const CERT_IMAGES = {
  python: `${BASE}cert_python_santander.png`,
};

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
    link: QUALITY_URL,
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
    role: "Desarrollador (backend y flujo operativo)",
  },
];

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

const COURSES_IN_PROGRESS = [
  {
    id: "pentest-edutin",
    title: "Pentest",
    org: "Edutin Academy",
    status: "En curso",
  },
  {
    id: "fundamentos-infotect",
    title: "Fundamentos del desarrollo de software",
    org: "Infotec / Gobierno de México",
    status: "En curso",
  },
];

const app = document.querySelector("#app");
if (!app) throw new Error("No se encontró el contenedor #app en el HTML.");

app.innerHTML = `
  <canvas id="spaceDots" class="pointer-events-none fixed inset-0 -z-20"></canvas>

  <div class="pointer-events-none fixed inset-0 -z-10">
    <div class="absolute -top-24 left-10 h-80 w-80 rounded-full bg-accent/12 blur-3xl"></div>
    <div class="absolute -top-16 right-10 h-80 w-80 rounded-full bg-accent/8 blur-3xl"></div>
    <div class="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl"></div>
  </div>

  <div class="grain pointer-events-none fixed inset-0 -z-10 opacity-40"></div>

  <div id="modalRoot"></div>

  <header class="sticky top-0 z-50 border-b border-line bg-ink/60 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
      <a href="#top"
        class="grid h-11 w-11 place-items-center rounded-xl border border-accent/40 bg-accent/12 font-bold"
        aria-label="Inicio">
        VH
      </a>

      <nav class="hidden gap-2 md:flex">
        ${navLink("Archivo", "proyectos")}
        ${navLink("Experiencia", "experiencia")}
        ${navLink("Skills", "skills")}
        ${navLink("Cursos", "cursos")}
        ${navLink("Contacto", "contacto")}
      </nav>

      <div class="flex items-center gap-2">
        <a href="${CV_PDF}" download
          class="hidden md:inline-flex rounded-xl border border-accent/40 bg-accent/12 px-3 py-2 text-sm font-semibold shadow-soft hover:-translate-y-0.5 transition">
          Descargar CV
        </a>

        <a href="${LINKEDIN_URL}" target="_blank" rel="noreferrer"
          class="rounded-xl border border-line bg-white/5 px-3 py-2 text-sm font-semibold hover:bg-white/10 transition">
          LinkedIn
        </a>

        <a href="#contacto"
          class="rounded-xl border border-accent/40 bg-accent/12 px-4 py-2 text-sm font-semibold shadow-soft hover:-translate-y-0.5 transition">
          Contacto
        </a>
      </div>
    </div>
  </header>

  <main id="top" class="mx-auto max-w-6xl px-5">

    <section class="grid gap-8 py-16 md:grid-cols-[1.35fr_.65fr]">
      <div>
        <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
          Desarrollador Web · Backend / Fullstack
        </p>

        <h1 class="text-4xl font-bold leading-tight tracking-tight md:text-5xl font-[ui-serif]">
          Víctor Adrian Hernandez
        </h1>

        <div class="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
          <a class="hover:text-white transition" href="mailto:${EMAIL}">${EMAIL}</a>
          <span class="opacity-50">•</span>
          <a class="hover:text-white transition" href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a>
        </div>

        <p class="mt-5 max-w-xl text-base leading-relaxed text-muted">
          Desarrollador enfocado en soluciones web y backend orientadas a negocio.
          Actualmente en <span class="text-white/90 font-semibold">Grupo TI México</span>,
          participando en desarrollo y <span class="text-white/90 font-semibold">liderazgo técnico de equipos pequeños</span>.
        </p>

        <div class="mt-6 flex flex-wrap gap-2">
          ${pill("Construcción de sistemas")}
          ${pill("Automatización")}
          ${pill("Liderazgo técnico")}
          ${pill("Deploy")}
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          ${primaryBtn("Ver archivo", "#proyectos")}
          ${secondaryBtn("Ver experiencia", "#experiencia")}
          <a href="${CV_PDF}" download
            class="rounded-2xl border border-line bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
            Descargar CV
          </a>
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted">
          <span>Monterrey / Nuevo León, MX</span>
          <span class="opacity-50">•</span>
          <a class="hover:text-white transition" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span class="opacity-50">•</span>
          <a class="hover:text-white transition" href="${GITHUB_URL}" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <aside class="grid gap-4">
        ${photoCard()}

        ${infoCard(
          "Resumen de carrera",
          "Comenzó con prácticas en Grupo TI México, continuó como Especialista de Desarrollo y actualmente lidera equipos pequeños, guiando a nuevos recursos en su crecimiento técnico. También trabajó mediante Fiverr, donde conoció a Webco y colaboró desarrollando sistemas para su operación."
        )}

        ${infoCard(
          "Notas actuales",
          "En formación continua: mejora de inglés, buenas prácticas, y despliegues. Enfoque en soluciones sobrias y mantenibles con impacto en negocio."
        )}
      </aside>
    </section>

    <section id="proyectos" class="py-14">
      <div class="flex flex-col gap-1">
        <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
          <span class="rounded-full border border-line bg-white/5 px-3 py-1">Archivo</span>
          <span class="opacity-60">•</span>
          <span>Selección de trabajo</span>
        </div>

        <h2 class="mt-2 text-2xl font-semibold font-[ui-serif] tracking-tight">Proyectos destacados</h2>
        <p class="text-sm text-muted">
          Selección basada en proyectos activos y comprobables (con enlaces públicos cuando aplica).
        </p>
      </div>

      <div class="mt-6 grid gap-4 md:grid-cols-2">
        ${PROJECTS.map((p) => projectCard(p)).join("")}
      </div>

      <div class="mt-10">
        <h3 class="text-lg font-semibold font-[ui-serif] tracking-tight">Más proyectos</h3>
        <p class="mt-1 text-sm text-muted">
          Proyectos adicionales (sin enlaces públicos por confidencialidad).
        </p>

        <div class="mt-4 grid gap-4 md:grid-cols-2">
          ${MORE_PROJECTS.map((p) => moreProjectCard(p)).join("")}
        </div>
      </div>
    </section>

    <section id="experiencia" class="py-14">
      <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
        <span class="rounded-full border border-line bg-white/5 px-3 py-1">Registro</span>
        <span class="opacity-60">•</span>
        <span>Trayectoria</span>
      </div>

      <h2 class="mt-2 text-2xl font-semibold font-[ui-serif] tracking-tight">Experiencia</h2>
      <p class="mt-1 text-sm text-muted">
        Enfoque en entrega, coordinación técnica y despliegues.
      </p>

      <div class="mt-6 grid gap-4">
        ${experienceCard({
          company: "Grupo TI México",
          role: "Especialista de Desarrollo · Líder de equipo",
          time: "Jun 2025 – Actualidad",
          bullets: [
            "Coordinación y liderazgo de un equipo pequeño de desarrollo.",
            "Asesoría y guía a nuevos recursos para acelerar su integración técnica.",
            "Desarrollo de soluciones web/backend orientadas a negocio y despliegue productivo.",
          ],
        })}

        ${experienceCard({
          company: "Webco",
          role: "Desarrollador Web (colaboración vía Fiverr)",
          time: "May 2025",
          bullets: [
            "Colaboración en desarrollo de sistemas (front-end y back-end).",
            "Integraciones y automatización para procesos operativos.",
            "Apoyo en requerimientos, pruebas y mantenimiento.",
          ],
        })}
      </div>
    </section>

    <section id="skills" class="py-14">
      <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
        <span class="rounded-full border border-line bg-white/5 px-3 py-1">Herramientas</span>
        <span class="opacity-60">•</span>
        <span>Stack</span>
      </div>

      <h2 class="mt-2 text-2xl font-semibold font-[ui-serif] tracking-tight">Skills</h2>

      <div class="mt-6 grid gap-4 md:grid-cols-2">
        ${skillCard("Lenguajes", "JavaScript · TypeScript · Python · PHP · HTML · CSS")}
        ${skillCard("Backend & Deploy", "Node.js · FastAPI · PostgreSQL · Nginx · PM2 · DigitalOcean")}
        ${skillCard("Liderazgo técnico", "Entrega · revisión de código · documentación · coordinación")}
        ${skillCard("Integraciones", "Twilio · Facturama · APIs REST")}
      </div>
    </section>

    <section id="cursos" class="py-14">
      <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
        <span class="rounded-full border border-line bg-white/5 px-3 py-1">Archivo</span>
        <span class="opacity-60">•</span>
        <span>Certificados</span>
      </div>

      <h2 class="mt-2 text-2xl font-semibold font-[ui-serif] tracking-tight">Cursos</h2>

      <div class="mt-6 grid gap-4 md:grid-cols-2">
        ${COURSES_DONE.map((c) => certCard(c)).join("")}
      </div>

      <div class="mt-8">
        <h3 class="text-lg font-semibold font-[ui-serif] tracking-tight">En curso</h3>
        <p class="mt-1 text-sm text-muted">
          Formación continua.
        </p>

        <div class="mt-4 grid gap-4 md:grid-cols-2">
          ${COURSES_IN_PROGRESS.map((c) => progressCourseCard(c)).join("")}
        </div>
      </div>
    </section>

    <section id="contacto" class="py-14">
      <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
        <span class="rounded-full border border-line bg-white/5 px-3 py-1">Canal</span>
        <span class="opacity-60">•</span>
        <span>Contacto</span>
      </div>

      <h2 class="mt-2 text-2xl font-semibold font-[ui-serif] tracking-tight">Contacto</h2>
      <p class="mt-1 text-sm text-muted">
        Canal recomendado: correo o LinkedIn.
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        ${primaryBtn("Enviar correo", `mailto:${EMAIL}`)}

        <a href="${LINKEDIN_URL}" target="_blank" rel="noreferrer"
          class="rounded-2xl border border-line bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
          Abrir LinkedIn
        </a>

        <a href="${GITHUB_URL}" target="_blank" rel="noreferrer"
          class="rounded-2xl border border-line bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
          GitHub
        </a>

        <a href="${CV_PDF}" download
          class="rounded-2xl border border-line bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
          Descargar CV
        </a>
      </div>
    </section>

    <footer class="border-t border-line py-10 text-center text-sm text-muted">
      © ${new Date().getFullYear()} Víctor Hernandez
    </footer>
  </main>
`;

const modalRoot = document.getElementById("modalRoot");

document.querySelectorAll("[data-project-id]").forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.getAttribute("data-project-id");
    const p = PROJECTS.find((x) => x.id === id);
    if (p) openProjectModal(p);
  });
});

document.querySelectorAll("[data-cert-id]").forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.getAttribute("data-cert-id");
    const c = COURSES_DONE.find((x) => x.id === id);
    if (c) openCertModal(c);
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

function openProjectModal(project) {
  if (!modalRoot) return;

  modalRoot.innerHTML = `
    <div id="modalOverlay"
      class="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        class="w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-ink shadow-soft">
        <div class="flex items-center justify-between border-b border-line px-5 py-4">
          <div class="min-w-0">
            <h3 class="truncate text-lg font-semibold font-[ui-serif] tracking-tight">
              ${escapeHtml(project.title)}
            </h3>
            <p class="mt-1 text-sm text-muted">${escapeHtml(project.tag)}</p>
          </div>

          <button id="modalCloseBtn"
            class="rounded-xl border border-line bg-white/5 px-3 py-2 text-sm font-semibold hover:bg-white/10 transition"
            aria-label="Cerrar">
            ✕
          </button>
        </div>

        <div class="grid gap-5 p-5 md:grid-cols-[1.35fr_.65fr]">
          <div class="overflow-hidden rounded-xl border border-line bg-black/20">
            <img
              src="${project.imageSrc}"
              alt="${escapeHtml(project.imageAlt)}"
              class="max-h-[70vh] w-full object-contain"
              loading="lazy"
            />
          </div>

          <aside class="grid content-start gap-4">
            <div class="rounded-2xl border border-line bg-white/5 p-4">
              <h4 class="text-sm font-semibold">Notas</h4>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                ${project.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
              </ul>
            </div>

            <div class="rounded-2xl border border-line bg-white/5 p-4">
              <h4 class="text-sm font-semibold">Stack</h4>
              <div class="mt-2 flex flex-wrap gap-2 text-xs text-muted">
                ${project.stack
                  .map((s) => `<span class="rounded-lg border border-line px-2 py-1">${escapeHtml(s)}</span>`)
                  .join("")}
              </div>
            </div>

            <div class="flex flex-wrap gap-2">
              ${
                project.visibility === "public"
                  ? `
                    <a href="${project.link}" target="_blank" rel="noreferrer"
                      class="rounded-2xl border border-accent/40 bg-accent/12 px-5 py-3 text-sm font-semibold shadow-soft hover:-translate-y-0.5 transition">
                      ${escapeHtml(project.linkLabel || "Ver sitio")}
                    </a>
                  `
                  : `
                    <span class="rounded-2xl border border-line bg-white/5 px-5 py-3 text-sm text-muted">
                      ${escapeHtml(project.privacyNote || "Privado (confidencialidad)")}
                    </span>
                  `
              }
            </div>

            <p class="text-xs text-muted">
              Tip: Presiona <span class="text-white/80 font-semibold">ESC</span> para cerrar.
            </p>
          </aside>
        </div>
      </div>
    </div>
  `;

  const btn = document.getElementById("modalCloseBtn");
  if (btn) btn.addEventListener("click", closeModal);

  const overlay = document.getElementById("modalOverlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  document.body.style.overflow = "hidden";
}

function openCertModal(cert) {
  if (!modalRoot) return;

  modalRoot.innerHTML = `
    <div id="modalOverlay"
      class="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        class="w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-ink shadow-soft">
        <div class="flex items-center justify-between border-b border-line px-5 py-4">
          <div class="min-w-0">
            <h3 class="truncate text-lg font-semibold font-[ui-serif] tracking-tight">
              ${escapeHtml(cert.title)}
            </h3>
            <p class="mt-1 text-sm text-muted">${escapeHtml(cert.org)} · ${escapeHtml(cert.status)}</p>
          </div>

          <button id="modalCloseBtn"
            class="rounded-xl border border-line bg-white/5 px-3 py-2 text-sm font-semibold hover:bg-white/10 transition"
            aria-label="Cerrar">
            ✕
          </button>
        </div>

        <div class="p-5">
          <div class="overflow-hidden rounded-xl border border-line bg-black/20">
            <img
              src="${cert.imageSrc}"
              alt="${escapeHtml(cert.imageAlt)}"
              class="max-h-[75vh] w-full object-contain"
              loading="lazy"
            />
          </div>

          <p class="mt-4 text-sm text-muted">
            Tip: Presiona <span class="text-white/80 font-semibold">ESC</span> para cerrar.
          </p>
        </div>
      </div>
    </div>
  `;

  const btn = document.getElementById("modalCloseBtn");
  if (btn) btn.addEventListener("click", closeModal);

  const overlay = document.getElementById("modalOverlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modalRoot) return;
  modalRoot.innerHTML = "";
  document.body.style.overflow = "";
}

initSpaceDots();

function initSpaceDots() {
  const canvas = document.getElementById("spaceDots");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let raf = 0;

  const dots = [];
  const DOTS_COUNT = 58;
  const SPEED = 0.12;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function seed() {
    dots.length = 0;
    for (let i = 0; i < DOTS_COUNT; i++) {
      dots.push({
        x: rand(0, w),
        y: rand(0, h),
        r: rand(0.6, 2.0),
        vx: rand(-SPEED, SPEED),
        vy: rand(-SPEED, SPEED),
        a: rand(0.08, 0.28),
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    for (const d of dots) {
      d.x += d.vx;
      d.y += d.vy;

      if (d.x < -20) d.x = w + 20;
      if (d.x > w + 20) d.x = -20;
      if (d.y < -20) d.y = h + 20;
      if (d.y > h + 20) d.y = -20;

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(190, 205, 255, ${d.a})`;
      ctx.fill();
    }

    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const a = dots[i];
        const b = dots[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.045;
          ctx.strokeStyle = `rgba(190, 205, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    raf = requestAnimationFrame(step);
  }

  resize();
  seed();
  step();

  window.addEventListener("resize", () => {
    resize();
    seed();
  });

  import.meta.hot?.dispose(() => cancelAnimationFrame(raf));
}

function navLink(label, id) {
  return `
    <a href="#${id}"
      class="rounded-xl px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-white transition">
      ${escapeHtml(label)}
    </a>
  `;
}

function pill(text) {
  return `
    <span class="rounded-full border border-line bg-white/5 px-3 py-1 text-sm">
      ${escapeHtml(text)}
    </span>
  `;
}

function primaryBtn(text, href) {
  return `
    <a href="${href}"
      class="rounded-2xl border border-accent/40 bg-accent/12 px-5 py-3 text-sm font-semibold shadow-soft hover:-translate-y-0.5 transition">
      ${escapeHtml(text)}
    </a>
  `;
}

function secondaryBtn(text, href) {
  return `
    <a href="${href}"
      class="rounded-2xl border border-line bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
      ${escapeHtml(text)}
    </a>
  `;
}

function infoCard(title, text) {
  return `
    <div class="rounded-2xl border border-line bg-white/5 p-4">
      <h3 class="text-sm font-semibold">${escapeHtml(title)}</h3>
      <p class="mt-2 text-sm text-muted">${escapeHtml(text)}</p>
    </div>
  `;
}

function photoCard() {
  return `
    <div class="rounded-2xl border border-line bg-white/5 p-4">
      <div class="flex items-center gap-4">
        <div class="relative">
          <div class="absolute -inset-1 rounded-full bg-accent/16 blur"></div>
          <img
            src="${PROFILE_IMG}"
            alt="Foto de Víctor Hernandez"
            class="relative h-20 w-20 rounded-full border border-line object-cover"
            onerror="this.style.display='none';"
          />
        </div>

        <div>
          <h3 class="text-sm font-semibold">Especialidad</h3>
          <p class="mt-1 text-sm text-muted">
            Web · Backend · Automatización · Liderazgo técnico
          </p>
        </div>
      </div>
    </div>
  `;
}

function projectCard(p) {
  return `
    <article
      data-project-id="${p.id}"
      class="group cursor-pointer rounded-2xl border border-line bg-white/5 p-4 hover:bg-white/[0.07] transition">
      <div class="mb-4 overflow-hidden rounded-xl border border-line bg-black/20">
        <img
          src="${p.imageSrc}"
          alt="${escapeHtml(p.imageAlt)}"
          class="h-36 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          onerror="this.closest('div').innerHTML='<div class=&quot;flex h-36 items-center justify-center text-xs text-muted&quot;>Imagen no disponible</div>'"
        />
      </div>

      <div class="flex items-start justify-between gap-3">
        <h3 class="text-base font-semibold">${escapeHtml(p.title)}</h3>
        <span class="rounded-full border border-line bg-black/20 px-3 py-1 text-xs text-muted">${escapeHtml(
          p.tag
        )}</span>
      </div>

      <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
        ${p.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>

      <div class="mt-3 flex flex-wrap gap-2 text-xs text-muted">
        ${p.stack
          .map((s) => `<span class="rounded-lg border border-line px-2 py-1">${escapeHtml(s)}</span>`)
          .join("")}
      </div>

      <div class="mt-4 flex flex-wrap gap-2">
        ${
          p.visibility === "public"
            ? `
              <a href="${p.link}" target="_blank" rel="noreferrer"
                class="rounded-xl border border-accent/40 bg-accent/12 px-3 py-2 text-sm font-semibold shadow-soft hover:-translate-y-0.5 transition">
                ${escapeHtml(p.linkLabel || "Ver sitio")}
              </a>
            `
            : `
              <span class="rounded-xl border border-line bg-white/5 px-3 py-2 text-sm text-muted">
                Privado (confidencialidad)
              </span>
            `
        }
      </div>
    </article>
  `;
}

function moreProjectCard(p) {
  return `
    <article class="rounded-2xl border border-line bg-white/5 p-4 hover:bg-white/[0.07] transition">
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-base font-semibold">${escapeHtml(p.title)}</h3>
        <span class="rounded-full border border-line bg-black/20 px-3 py-1 text-xs text-muted">${escapeHtml(
          p.tag
        )}</span>
      </div>

      <p class="mt-2 text-sm text-muted">${escapeHtml(p.desc)}</p>

      <p class="mt-3 text-sm text-white/80">
        <span class="text-muted">Rol:</span> ${escapeHtml(p.role)}
      </p>

      <div class="mt-3 flex flex-wrap gap-2 text-xs text-muted">
        ${p.stack
          .map((s) => `<span class="rounded-lg border border-line px-2 py-1">${escapeHtml(s)}</span>`)
          .join("")}
      </div>

      <div class="mt-4">
        <span class="rounded-xl border border-line bg-white/5 px-3 py-2 text-sm text-muted">
          Privado (confidencialidad)
        </span>
      </div>
    </article>
  `;
}

function certCard(c) {
  return `
    <article
      data-cert-id="${c.id}"
      class="group cursor-pointer rounded-2xl border border-line bg-white/5 p-4 hover:bg-white/[0.07] transition">
      <div class="mb-4 overflow-hidden rounded-xl border border-line bg-black/20">
        <img
          src="${c.imageSrc}"
          alt="${escapeHtml(c.imageAlt)}"
          class="h-36 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          onerror="this.closest('div').innerHTML='<div class=&quot;flex h-36 items-center justify-center text-xs text-muted&quot;>Imagen no disponible</div>'"
        />
      </div>

      <div class="flex items-start justify-between gap-3">
        <h3 class="text-base font-semibold">${escapeHtml(c.title)}</h3>
        <span class="rounded-full border border-line bg-black/20 px-3 py-1 text-xs text-muted">${escapeHtml(
          c.status
        )}</span>
      </div>

      <p class="mt-2 text-sm text-muted">${escapeHtml(c.org)}</p>
      <p class="mt-2 text-xs text-muted">Click para ver certificado</p>
    </article>
  `;
}

function progressCourseCard(c) {
  return `
    <article class="rounded-2xl border border-line bg-white/5 p-4">
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-base font-semibold">${escapeHtml(c.title)}</h3>
        <span class="rounded-full border border-line bg-black/20 px-3 py-1 text-xs text-muted">${escapeHtml(
          c.status
        )}</span>
      </div>
      <p class="mt-2 text-sm text-muted">${escapeHtml(c.org)}</p>
    </article>
  `;
}

function experienceCard({ company, role, time, bullets }) {
  return `
    <div class="rounded-2xl border border-line bg-white/5 p-4">
      <div class="flex flex-wrap justify-between gap-2">
        <div>
          <h3 class="text-base font-semibold">${escapeHtml(company)}</h3>
          <p class="text-sm text-muted">${escapeHtml(role)}</p>
        </div>
        <span class="text-sm text-muted">${escapeHtml(time)}</span>
      </div>

      <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
        ${bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function skillCard(title, text) {
  return `
    <div class="rounded-2xl border border-line bg-white/5 p-4">
      <h3 class="text-sm font-semibold">${escapeHtml(title)}</h3>
      <p class="mt-2 text-sm text-muted">${escapeHtml(text)}</p>
    </div>
  `;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
