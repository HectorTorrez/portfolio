import type { PortfolioLinks } from "./types";

export const portfolioSiteBase = {
	url: "https://hectortorrez.com",
	ogImage: "/og-image.png",
} as const;

export const portfolioLinks: PortfolioLinks = {
	email: "torrezhectorb@gmail.com",
	linkedIn: "https://www.linkedin.com/in/hector-torrez",
	github: "https://github.com/HectorTorrez",
	resume: "/hector-torrez-cv.pdf",
};

export const portfolioSkills = [
	"TypeScript",
	"JavaScript",
	"React",
	"Next.js",
	"TanStack Start",
	"TanStack Query",
	"Node.js",
	"NestJS",
	"Express.js",
	"SQL",
	"PostgreSQL",
	"Supabase",
	"Cloudflare Workers",
	"AWS",
	"Docker",
] as const;

export const knowledgeHubProject = {
	name: "KnowledgeHub AI",
	slug: "knowledgehub-ai",
	url: "https://app.knowledgehubai.dev/",
	sources: [
		{
			kind: "source",
			href: "https://github.com/HectorTorrez/knowledgehub-ai",
		},
	],
} as const;

export const blinkProject = {
	name: "Blink",
	slug: "blink",
	sources: [
		{
			kind: "source",
			href: "https://github.com/HectorTorrez/nook-notes",
		},
	],
} as const;
