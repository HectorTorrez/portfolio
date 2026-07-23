import type { UiStrings } from "../types";

export const ui: UiStrings = {
	skipToContent: "Skip to main content",
	nav: [
		{ href: "#projects", label: "Work" },
		{ href: "#experience", label: "Experience" },
		{ href: "#contact", label: "Elsewhere" },
	],
	sections: {
		skills: "Skills",
		projects: "Selected work",
		projectsBlurb: "Things I've built and shipped.",
		experience: "Experience",
		education: "Education",
		elsewhere: "Elsewhere",
	},
	contact: {
		linkedInProfile: "LinkedIn",
		githubProfile: "GitHub",
		email: "Email",
		resume: "CV",
	},
	hero: {
		status: "Available for work",
		emailMe: "Email",
		linkedIn: "LinkedIn",
		github: "GitHub",
		resume: "CV",
		portraitAlt: (name) => `Portrait of ${name}`,
	},
	a11y: {
		pageSections: "Page sections",
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
		failedAria: "Couldn't copy email. Opening your email client instead.",
		copyAria: (email) => `Copy email ${email}`,
	},
	projects: {
		visitProject: (name) => `Visit ${name} (opens in new tab)`,
		liveDemo: "Live demo",
		source: "Source",
		readCaseStudy: "Read case study",
		backToWork: "Back to selected work",
	},
};
