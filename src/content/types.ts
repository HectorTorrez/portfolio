export type ExperienceEntry = {
	company: string;
	role: string;
	location?: string;
	start: string;
	end: string;
	highlights: string[];
};

export type EducationEntry = {
	institution: string;
	credential: string;
	period: string;
};

export type ProjectEntry = {
	name: string;
	slug: string;
	description: string;
	url: string;
	sourceUrl?: string;
	stack: readonly string[];
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
		elsewhere: string;
	};
	contact: {
		linkedInProfile: string;
		githubProfile: string;
		email: string;
		resume: string;
	};
	hero: {
		status: string;
		emailMe: string;
		linkedIn: string;
		github: string;
		resume: string;
		portraitAlt: (name: string) => string;
	};
	a11y: {
		pageSections: string;
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
		copyAria: (email: string) => string;
	};
	projects: {
		visitProject: (name: string) => string;
		liveDemo: string;
		source: string;
		readCaseStudy: string;
		backToWork: string;
	};
};

export type LocaleContent = {
	portfolio: PortfolioContent;
	meta: PortfolioMeta;
	site: PortfolioSite;
	ui: UiStrings;
};
