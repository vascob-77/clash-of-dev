import { waitForElement } from "../../utils/wait-for-element-dom";

document.addEventListener("DOMContentLoaded", () => {
	waitForElement(".progress-bar__fill")
		.then((progressBarFill) => {
			if (!progressBarFill) throw new Error("Progress bar fill not found");
			const progressBarElement = progressBarFill as HTMLElement;

			return waitForElement(".progress-bar-number p").then((progressText) => {
				if (!progressText) throw new Error("Progress text not found");
				const progressTextElement = progressText as HTMLElement;
				return { progressBarElement, progressTextElement };
			});
		})
		.then(({ progressBarElement, progressTextElement }) => {
			let progress = 0;
			let startTime = performance.now();

			const maxDuration = 2000; 

			const update = (currentTime: number) => {
				const elapsedTime = currentTime - startTime;
				if (elapsedTime >= maxDuration) {
					progress = 100;
				} else {
					const increment = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
					progress = Math.min(progress + increment, 100);
				}

				updateProgress(progressBarElement, progressTextElement, progress);

				if (progress < 100) {
					requestAnimationFrame(update);
				} else {
					showLandingContent();
				}
			};

			requestAnimationFrame(update);
		})
		.catch((error) => console.error(error));
});

function updateProgress(
	progressBarElement: HTMLElement,
	progressTextElement: HTMLElement,
	progress: number
) {
	progressBarElement.style.width = `${progress}%`;
	progressTextElement.textContent = `${progress}%`;

	const scaleValue = 3 - 2 * (progress / 100);
	const opacityValue = 1 - progress / 100;

	progressTextElement.style.transform = `scale(${scaleValue})`;
	progressTextElement.style.opacity = `${opacityValue}`;

	if (progress >= 100) {
		progressTextElement.classList.add("shrinking");
	}
}

function showLandingContent() {
	const navbarContent = document.querySelector('.header__nav-content') as HTMLElement;
	const themeSwitch = document.querySelector('.theme-switch') as HTMLElement;
	const landingContent = document.querySelector('.landing__content') as HTMLElement;
	const landingHeading = document.querySelector('.landing__heading') as HTMLElement;
	const landingCard = document.querySelector('.landing__card') as HTMLElement;
	const landingDescription = document.querySelector('.landing__description') as HTMLElement;

	if (landingContent && landingHeading && landingCard && landingDescription) {
		landingContent.classList.add('visible');

		setTimeout(() => {
			landingHeading.classList.add('visible');
		}, 300); 

		setTimeout(() => {
			landingCard.classList.add('visible');
		}, 800); 

		setTimeout(() => {
			landingDescription.classList.add('visible');
		}, 1400); 

		setTimeout(() => {
			navbarContent.classList.add('visible');
			themeSwitch.classList.add('visible');
		}, 1800); 
	} else {
		console.error("Landing content, heading, card or description not found");
	}
}
