export function escapeHtml(text) {
  // Escapa caracteres especiales para evitar inyección de HTML/XSS.
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
