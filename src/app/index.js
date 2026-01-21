import { getConfig } from "./config.js";
import { getData } from "./data.js";
import { renderApp } from "./render.js";
import { wireEvents } from "./ui.js";
import { initSpaceDots } from "./canvas.js";

export function initPortfolio() {
  const app = document.querySelector("#app");
  if (!app) throw new Error("No se encontró el contenedor #app en el HTML.");

  const config = getConfig();
  const data = getData(config);

  app.innerHTML = renderApp({ config, data });

  wireEvents({ data });
  initSpaceDots();
}
