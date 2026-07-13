import type { UiStrings } from "../types";

export const ui: UiStrings = {
	skipToContent: "Skip to main content",
	nav: [
		{ href: "#about", label: "About" },
		{ href: "#skills", label: "Skills" },
		{ href: "#projects", label: "Projects" },
		{ href: "#experience", label: "Experience" },
		{ href: "#education", label: "Education" },
		{ href: "#contact", label: "Contact" },
	],
	sections: {
		about: "About",
		skills: "Skills",
		projects: "Projects",
		experience: "Experience",
		education: "Education",
	},
	contact: {
		heading: "Let's talk",
		body: "Have a project in mind or want to collaborate? Reach out by email, connect on LinkedIn, or browse work on GitHub.",
		linkedInProfile: "LinkedIn profile",
		githubProfile: "GitHub profile",
	},
	hero: {
		emailMe: "Email me",
		linkedIn: "LinkedIn",
		github: "GitHub",
		portraitAlt: (name) => `Portrait of ${name}`,
	},
	a11y: {
		pageSections: "Page sections",
		menu: "Menu",
		opensInNewTab: "(opens in new tab)",
		language: "Language",
	},
	theme: {
		light: "Light theme",
		dark: "Dark theme",
		system: "System theme",
		switchLabel: (current, next) =>
			`${current}. Activate to switch to ${next}.`,
		switchTitle: (current, next) =>
			`${current} — click for ${next.toLowerCase()}`,
	},
	copyEmail: {
		label: "Copy email",
		copied: "Copied!",
		copiedAria: "Email copied to clipboard",
		copyAria: (email) => `Copy email ${email}`,
	},
	projects: {
		featured: "Featured",
		visitProject: (name) => `Visit ${name} (opens in new tab)`,
	},
};
