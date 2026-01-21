export function getConfig() {
  // Obtiene la base pública del proyecto (compatible con Vite).
  const BASE = import.meta.env.BASE_URL;

  // Configuración centralizada de enlaces, contacto y assets.
  return {
    BASE,
    LINKEDIN_URL: "https://www.linkedin.com/in/victor-hernandez-ba559022a/",
    QUALITY_URL: "https://cadereytaquality.com/",
    GITHUB_URL: "https://github.com/AdrianHernandez21",
    EMAIL: "victorhernandez.fraga@gmail.com",
    PHONE_DISPLAY: "+52 8281040259",
    PHONE_TEL: "+528281040259",
    CV_PDF: `${BASE}CV_Victor_Hernandez.pdf`,
    PROFILE_IMG: `${BASE}profile.jpeg`,
  };
}
