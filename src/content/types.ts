export type ExperienceEntry = {
	company: string;
	role: string;
	location?: string;
	/** Display label, e.g. "February 2025" */
	start: string;
	/** Display label, e.g. "Present" */
	end: string;
	/** Machine-readable start for <time dateTime>, month precision (YYYY-MM) */
	startDateTime: string;
	/** Machine-readable end for <time dateTime>; omit when ongoing */
	endDateTime?: string;
	highlights: string[];
};

export type EducationEntry = {
	institution: string;
	credential: string;
	period: string;
};

export type ProjectSourceKind = "source" | "frontend" | "backend";

export type ProjectSource = {
	href: string;
	kind: ProjectSourceKind;
};

export type ProjectEntry = {
	name: string;
	slug: string;
	description: string;
	url?: string;
	sources?: readonly ProjectSource[];
	category: string;
};

export type PortfolioLinks = {
	email: string;
	linkedIn: string;
	github: string;
	resume: string;
};

export type PortfolioContent = {
	name: string;
	headline: string;
	heroSubtitle: string;
	heroSupportingText: string;
	location: string;
	skills: readonly string[];
	experience: ExperienceEntry[];
	/** Lead project, shown on the home page */
	featuredProject: ProjectEntry;
	/** Remaining projects, listed on the projects page */
	projects: ProjectEntry[];
	education: EducationEntry[];
	links: PortfolioLinks;
};

export type PortfolioMeta = {
	title: string;
	description: string;
	keywords: string;
};

export type PortfolioSite = {
	url: string;
	ogImage: string;
	locale: string;
};

export type NavItem = {
	href: string;
	label: string;
};

export type UiStrings = {
	skipToContent: string;
	nav: readonly NavItem[];
	sections: {
		skills: string;
		projects: string;
		projectsBlurb: string;
		experience: string;
		education: string;
		contact: string;
	};
	contact: {
		linkedInProfile: string;
		githubProfile: string;
		email: string;
		title: string;
		blurb: string;
		resume: string;
	};
	hero: {
		status: string;
		workArrangement: string;
		emailMe: string;
		viewProjects: string;
		linkedIn: string;
		github: string;
		resume: string;
		ogImageAlt: (name: string) => string;
	};
	a11y: {
		pageSections: string;
		openMenu: string;
		closeMenu: string;
		opensInNewTab: string;
		language: string;
	};
	theme: {
		light: string;
		dark: string;
		system: string;
		switchLabel: (current: string, next: string) => string;
		switchTitle: (current: string, next: string) => string;
	};
	copyEmail: {
		label: string;
		copied: string;
		copiedAria: string;
		failedAria: string;
		copyAria: (email: string) => string;
	};
	projects: {
		visitProject: (name: string) => string;
		liveDemo: string;
		source: string;
		frontend: string;
		backend: string;
		featured: string;
		viewAll: string;
	};
	projectsPage: {
		label: string;
		title: string;
		blurb: string;
		backHome: string;
	};
};

export type LocaleContent = {
	portfolio: PortfolioContent;
	meta: PortfolioMeta;
	site: PortfolioSite;
	ui: UiStrings;
};
