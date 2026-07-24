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
	experiments: {
		label: "Labs",
		title: "Experiments",
		blurb:
			"Small interactive explorations — interactions, motion, and UI ideas I'm trying out.",
		backHome: "Back home",
		items: {
			dynamicIsland: {
				title: "Dynamic Island",
				description:
					"An iPhone-style island that morphs from a compact now-playing pill into a full music control.",
			},
			signatureCard: {
				title: "Signature Card",
				description:
					"Edit the fields below — the card updates live, and the signature is your name’s QWERTY swipe path as one continuous stroke.",
			},
		},
		dynamicIsland: {
			expand: "Expand player",
			collapse: "Collapse player",
			play: "Play",
			pause: "Pause",
			next: "Next track",
			previous: "Previous track",
			nowPlaying: (title, artist) => `Now playing ${title} by ${artist}`,
		},
		signatureCard: {
			cardLabel: "Cardholder",
			nameLabel: "Name",
			namePlaceholder: "YOUR NAME",
			networkLabel: "Network",
			networkPlaceholder: "visa",
			expiryLabel: "Expiry",
			expiryPlaceholder: "MM/YY",
			last4Label: "Last 4",
			last4Placeholder: "4242",
			defaultName: "Hector",
			defaultNetwork: "visa",
			defaultExpiry: "12/28",
			defaultLast4: "4242",
			signedAs: "Authorized signature",
			hint: "The signature follows the QWERTY path of the name — H → E → C → T → O → R",
		},
	},
};
