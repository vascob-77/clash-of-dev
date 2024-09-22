import "./styles/main.scss";

import { loadComponent } from "./utils/fetch-component";

document.addEventListener("DOMContentLoaded", () => {
	loadComponent<HTMLElement>("/src/components/landing.html", "#app")
		.then(() => console.log("Composant landing chargé avec succès"))
		.catch((error) =>
			console.error("Erreur lors du chargement du composant landing", error)
		);

	loadComponent<HTMLElement>("/src/components/cards.html", "#cards")
		.then(() => console.log("Composant cards chargé avec succès"))
		.catch((error) =>
			console.error("Erreur lors du chargement du composant cards", error)
		);

	loadComponent<HTMLElement>("/src/components/footer.html", "#footer")
		.then(() => console.log("Composant footer chargé avec succès"))
		.catch((error) =>
			console.error("Erreur lors du chargement du composant footer", error)
		);
});

// // "footer"
// loadComponent<HTMLElement>("/src/components/footer.html", "#footer")
//   .then(() => console.log("Composant footer chargé avec succès"))
//   .catch((error) => console.error("Erreur lors du chargement du composant footer", error));
