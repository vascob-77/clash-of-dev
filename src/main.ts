import "./styles/main.scss";

import { loadComponent } from "./utils/fetch-component";

document.addEventListener("DOMContentLoaded", () => {
	loadComponent<HTMLElement>("/src/components/landing.html", "#app");

	loadComponent<HTMLElement>("/src/components/cards.html", "#cards");

	loadComponent<HTMLElement>("/src/components/footer.html", "#footer");
});
