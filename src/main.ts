
import "./styles/main.scss";

import { loadComponent } from "./utils/component-loader";

// "landing"
loadComponent<HTMLElement>("/src/components/landing.html", "#app")
  .then(() => console.log("Composant landing chargé avec succès"))
  .catch((error) => console.error("Erreur lors du chargement du composant landing", error));

// "sidebar"
loadComponent<HTMLElement>("/src/components/sidebar.html", "#sidebar")
  .then(() => console.log("Composant sidebar chargé avec succès"))
  .catch((error) => console.error("Erreur lors du chargement du composant sidebar", error));

// "footer"
loadComponent<HTMLElement>("/src/components/footer.html", "#footer")
  .then(() => console.log("Composant footer chargé avec succès"))
  .catch((error) => console.error("Erreur lors du chargement du composant footer", error));
