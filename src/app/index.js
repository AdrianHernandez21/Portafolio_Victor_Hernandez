import { getConfig } from "./config.js";
import { getData } from "./data.js";
import { renderApp } from "./render.js";
import { wireEvents } from "./ui.js";
import { initSpaceDots } from "./canvas.js";

export function initPortfolio() {
  // Valida que exista el contenedor principal donde se renderiza la app.
  const app = document.querySelector("#app");
  if (!app) throw new Error("No se encontró el contenedor #app en el HTML.");

  // Carga config (links/assets) y data (proyectos/cursos) para el render.
  const config = getConfig();
  const data = getData(config);

  // Renderiza el HTML completo y luego conecta eventos + animación de fondo.
  app.innerHTML = renderApp({ config, data });

  wireEvents({ data });
  initSpaceDots();
}
