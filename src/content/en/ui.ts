import type { UiStrings } from "../types";

export const ui: UiStrings = {
	skipToContent: "Skip to main content",
	nav: [
		{ href: "#projects", label: "Work" },
		{ href: "#experience", label: "Experience" },
		{ href: "#contact", label: "Contact" },
	],
	sections: {
		skills: "Skills",
		projects: "Selected work",
		projectsBlurb: "Independent products, from idea to experience.",
		experience: "Experience",
		education: "Education",
		contact: "Contact",
	},
	contact: {
		linkedInProfile: "LinkedIn",
		githubProfile: "GitHub",
		email: "Email",
		title: "Let’s build something together.",
		blurb:
			"I’m open to new opportunities and conversations about products and software.",
		resume: "CV",
	},
	hero: {
		status: "Open to Frontend / Full-Stack roles",
		workArrangement: "Remote · US time zones (CST)",
		emailMe: "Get in touch",
		viewProjects: "See projects",
		linkedIn: "LinkedIn",
		github: "GitHub",
		resume: "CV (PDF)",
		ogImageAlt: (name) => `${name}, Full-Stack Software Engineer`,
	},
	a11y: {
		pageSections: "Page sections",
		openMenu: "Open menu",
		closeMenu: "Close menu",
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
		liveDemo: "Explore project",
		source: "Source",
		frontend: "Frontend",
		backend: "Backend",
		featured: "Featured project",
		viewAll: "See all projects",
	},
	projectsPage: {
		label: "Projects",
		title: "Projects",
		blurb: "A selection of products I’ve built.",
		backHome: "Back home",
	},
};
