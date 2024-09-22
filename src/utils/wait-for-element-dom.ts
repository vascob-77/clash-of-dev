// Fonction pour attendre qu'un élément soit présent dans le DOM
export const waitForElement = (
	selector: string,
	timeout: number = 3000
): Promise<Element | null> => {
	return new Promise((resolve, reject) => {
		const interval = setInterval(() => {
			const element = document.querySelector(selector);
			if (element) {
				clearInterval(interval);
				resolve(element);
			}
		}, 200);

		setTimeout(() => {
			clearInterval(interval);
			reject(
				`Element with selector "${selector}" not found within ${timeout}ms`
			);
		}, timeout);
	});
};
