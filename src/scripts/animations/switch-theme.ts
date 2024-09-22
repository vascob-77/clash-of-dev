import { waitForElement } from "../../utils/wait-for-element-dom";

document.addEventListener("DOMContentLoaded", () => {
	waitForElement("#themeSwitch")
		.then((themeSwitch) => {
			if (themeSwitch) {
				const currentTheme = localStorage.getItem("theme") || "light";
				document.documentElement.setAttribute("data-theme", currentTheme);
				document.body.setAttribute("data-theme", currentTheme);
				themeSwitch.classList.toggle("active", currentTheme === "dark");
				updateButtonTheme(currentTheme);
				updateImageTheme(currentTheme);
				updateThemeElement(
					".illustration--clash-of-dev",
					currentTheme,
					"/illustrations/landing/logo-clash-of-dev--black.svg",
					"/illustrations/landing/logo-clash-of-dev--blue.svg"
				);
				updateSwitchIcon(currentTheme);
				updateThemeSwitchBackground(currentTheme);
				updateProgressBarTheme(currentTheme);

				themeSwitch.addEventListener("click", () => {
					const newTheme = themeSwitch.classList.contains("active")
						? "light"
						: "dark";
					themeSwitch.classList.toggle("active", newTheme === "dark");
					document.documentElement.setAttribute("data-theme", newTheme);
					document.body.setAttribute("data-theme", newTheme);
					localStorage.setItem("theme", newTheme);
					updateButtonTheme(newTheme);
					updateImageTheme(newTheme);
					updateThemeElement(
						".illustration--clash-of-dev",
						newTheme,
						"/illustrations/landing/logo-clash-of-dev--black.svg",
						"/illustrations/landing/logo-clash-of-dev--blue.svg"
					);
					updateSwitchIcon(newTheme);
					updateThemeSwitchBackground(newTheme);
					updateProgressBarTheme(newTheme);
				});
			}
		})
		.catch((error) => console.error(error));
});

const updateButtonTheme = (theme: string): void => {
	const buttons = document.querySelectorAll('.button') as NodeListOf<HTMLElement>;

	buttons.forEach((button) => {
		button.style.backgroundColor = theme === "dark" ? "#FEFEFE" : "#262625";
		button.style.color = theme === "dark" ? "#262625" : "#FEFEFE";
	});
};

const updateImageTheme = (theme: string): void => {
	const img = document.querySelector(
		".landing__illustration"
	) as HTMLImageElement;
	if (img) {
		img.src =
			theme === "dark"
				? "/illustrations/landing/text-horizontal-white.svg"
				: "/illustrations/landing/text-horizontal-black.svg";
	}
};

const updateThemeElement = (
	selector: string,
	theme: string,
	lightSrc: string,
	darkSrc: string
): void => {
	const element = document.querySelector(selector) as HTMLImageElement;
	if (element) {
		element.src = theme === "dark" ? darkSrc : lightSrc;
	}
};

const updateSwitchIcon = (theme: string): void => {
	const switchIcon = document.querySelector(
		".theme-switch__icon"
	) as HTMLElement;
	if (switchIcon) {
		switchIcon.style.backgroundImage =
			theme === "dark"
				? 'url("/illustrations/landing/switch-black.svg")'
				: 'url("/illustrations/landing/switch-white.svg")';
	}
};

const updateThemeSwitchBackground = (theme: string): void => {
	const themeSwitch = document.querySelector(".theme-switch") as HTMLElement;
	if (themeSwitch) {
		themeSwitch.style.backgroundColor =
			theme === "dark" ? "#FEFEFE" : "#262625";
	}
};

const updateProgressBarTheme = (theme: string): void => {
	const progressBarFill = document.querySelector('.progress-bar__fill') as HTMLElement;
	if (progressBarFill) {
		progressBarFill.style.backgroundColor = theme === "dark" ? '#FEFEFE' : '#262625';
	}
};
