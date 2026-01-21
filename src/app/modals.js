import { escapeHtml } from "./utils.js";

export function openProjectModal(modalRoot, project) {
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
  if (btn) btn.addEventListener("click", () => closeModal(modalRoot));

  const overlay = document.getElementById("modalOverlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(modalRoot);
    });
  }

  document.body.style.overflow = "hidden";
}

export function openCertModal(modalRoot, cert) {
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
  if (btn) btn.addEventListener("click", () => closeModal(modalRoot));

  const overlay = document.getElementById("modalOverlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(modalRoot);
    });
  }

  document.body.style.overflow = "hidden";
}

export function closeModal(modalRoot) {
  modalRoot.innerHTML = "";
  document.body.style.overflow = "";
}
