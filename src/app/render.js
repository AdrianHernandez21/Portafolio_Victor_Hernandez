import {
  navLink,
  pill,
  primaryBtn,
  secondaryBtn,
  infoCard,
  photoCard,
  projectCard,
  moreProjectCard,
  certCard,
  progressCourseCard,
  experienceCard,
  skillCard,
} from "./ui.js";

export function renderApp({ config, data }) {
  // Render principal: arma todo el HTML usando config (links/assets) y data (proyectos/cursos).
  return `
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
        <a href="${config.CV_PDF}" download
          class="hidden md:inline-flex rounded-xl border border-accent/40 bg-accent/12 px-3 py-2 text-sm font-semibold shadow-soft hover:-translate-y-0.5 transition">
          Descargar CV
        </a>

        <a href="${config.LINKEDIN_URL}" target="_blank" rel="noreferrer"
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
          <a class="hover:text-white transition" href="mailto:${config.EMAIL}">${config.EMAIL}</a>
          <span class="opacity-50">•</span>
          <a class="hover:text-white transition" href="tel:${config.PHONE_TEL}">${config.PHONE_DISPLAY}</a>
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
          <a href="${config.CV_PDF}" download
            class="rounded-2xl border border-line bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
            Descargar CV
          </a>
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted">
          <span>Monterrey / Nuevo León, MX</span>
          <span class="opacity-50">•</span>
          <a class="hover:text-white transition" href="${config.LINKEDIN_URL}" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span class="opacity-50">•</span>
          <a class="hover:text-white transition" href="${config.GITHUB_URL}" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <aside class="grid gap-4">
        ${photoCard(config.PROFILE_IMG)}

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
        ${data.PROJECTS.map((p) => projectCard(p)).join("")}
      </div>

      <div class="mt-10">
        <h3 class="text-lg font-semibold font-[ui-serif] tracking-tight">Más proyectos</h3>
        <p class="mt-1 text-sm text-muted">
          Proyectos adicionales (sin enlaces públicos por confidencialidad).
        </p>

        <div class="mt-4 grid gap-4 md:grid-cols-2">
          ${data.MORE_PROJECTS.map((p) => moreProjectCard(p)).join("")}
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
        ${data.COURSES_DONE.map((c) => certCard(c)).join("")}
      </div>

      <div class="mt-8">
        <h3 class="text-lg font-semibold font-[ui-serif] tracking-tight">En curso</h3>
        <p class="mt-1 text-sm text-muted">
          Formación continua.
        </p>

        <div class="mt-4 grid gap-4 md:grid-cols-2">
          ${data.COURSES_IN_PROGRESS.map((c) => progressCourseCard(c)).join("")}
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
        ${primaryBtn("Enviar correo", `mailto:${config.EMAIL}`)}

        <a href="${config.LINKEDIN_URL}" target="_blank" rel="noreferrer"
          class="rounded-2xl border border-line bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
          Abrir LinkedIn
        </a>

        <a href="${config.GITHUB_URL}" target="_blank" rel="noreferrer"
          class="rounded-2xl border border-line bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
          GitHub
        </a>

        <a href="${config.CV_PDF}" download
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
}
