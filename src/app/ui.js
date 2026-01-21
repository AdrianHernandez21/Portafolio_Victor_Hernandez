import { openProjectModal, openCertModal, closeModal } from "./modals.js";
import { escapeHtml } from "./utils.js";

export function wireEvents({ data }) {
  // Conecta eventos: clicks para abrir modales y ESC para cerrarlos.
  const modalRoot = document.getElementById("modalRoot");
  if (!modalRoot) return;

  document.querySelectorAll("[data-project-id]").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-project-id");
      const p = data.PROJECTS.find((x) => x.id === id);
      if (p) openProjectModal(modalRoot, p);
    });
  });

  document.querySelectorAll("[data-cert-id]").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-cert-id");
      const c = data.COURSES_DONE.find((x) => x.id === id);
      if (c) openCertModal(modalRoot, c);
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal(modalRoot);
  });
}

export function navLink(label, id) {
  // Link de navegación (header) a una sección por id.
  return `
    <a href="#${id}"
      class="rounded-xl px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-white transition">
      ${escapeHtml(label)}
    </a>
  `;
}

export function pill(text) {
  // Etiqueta visual pequeña (chips) para resaltar conceptos.
  return `
    <span class="rounded-full border border-line bg-white/5 px-3 py-1 text-sm">
      ${escapeHtml(text)}
    </span>
  `;
}

export function primaryBtn(text, href) {
  // Botón primario (CTA) reutilizable.
  return `
    <a href="${href}"
      class="rounded-2xl border border-accent/40 bg-accent/12 px-5 py-3 text-sm font-semibold shadow-soft hover:-translate-y-0.5 transition">
      ${escapeHtml(text)}
    </a>
  `;
}

export function secondaryBtn(text, href) {
  // Botón secundario para acciones de soporte/navegación.
  return `
    <a href="${href}"
      class="rounded-2xl border border-line bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
      ${escapeHtml(text)}
    </a>
  `;
}

export function infoCard(title, text) {
  // Tarjeta informativa simple (sidebar) con título y texto.
  return `
    <div class="rounded-2xl border border-line bg-white/5 p-4">
      <h3 class="text-sm font-semibold">${escapeHtml(title)}</h3>
      <p class="mt-2 text-sm text-muted">${escapeHtml(text)}</p>
    </div>
  `;
}

export function photoCard(PROFILE_IMG) {
  // Tarjeta de perfil: foto + tagline de especialidad.
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

export function projectCard(p) {
  // Card clickable de proyecto (abre modal usando data-project-id).
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

export function moreProjectCard(p) {
  // Variante compacta para “Más proyectos” (sin modal ni link público).
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

export function certCard(c) {
  // Card clickable de certificado (abre modal usando data-cert-id).
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

export function progressCourseCard(c) {
  // Card simple para cursos “En curso” (sin imagen ni modal).
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

export function experienceCard({ company, role, time, bullets }) {
  // Bloque de experiencia: encabezado + bullets principales.
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

export function skillCard(title, text) {
  // Card de skills: título + lista corta (texto).
  return `
    <div class="rounded-2xl border border-line bg-white/5 p-4">
      <h3 class="text-sm font-semibold">${escapeHtml(title)}</h3>
      <p class="mt-2 text-sm text-muted">${escapeHtml(text)}</p>
    </div>
  `;
}
