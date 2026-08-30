import type { PortfolioLinks } from "./types";

export const portfolioSiteBase = {
	url: "https://portfolio.torrezhectorb.workers.dev",
	ogImage: "/profile-photo.jpg",
} as const;

export const portfolioLinks: PortfolioLinks = {
	email: "torrezhectorb@gmail.com",
	linkedIn: "https://www.linkedin.com/in/hector-torrez",
	github: "https://github.com/HectorTorrez",
	resume:
		"https://docs.google.com/document/d/1_PhNtvlutXrqt-tgLcCIC35xXBRq0mTT/edit?usp=sharing",
};

export const portfolioSkills = [
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"TanStack Start",
	"Tailwind CSS",
	"Node.js",
	"NestJS",
	"PostgreSQL",
	"Cloudflare Workers",
	"AWS",
] as const;

export const pantryProject = {
	name: "Pantry",
	slug: "pantry",
	url: "https://recipe-generator-web.torrezhectorb.workers.dev/",
	sources: [
		{
			kind: "source",
			href: "https://github.com/HectorTorrez/recipe-generator",
		},
	],
	stack: ["TanStack Start", "Cloudflare Workers", "Workers AI", "D1"],
} as const;

export const ticketsProject = {
	name: "Tickets",
	slug: "tickets",
	sources: [
		{
			kind: "frontend",
			href: "https://github.com/HectorTorrez/ticket-frontend",
		},
		{
			kind: "backend",
			href: "https://github.com/HectorTorrez/ticket-api",
		},
	],
	stack: ["TanStack Start", "NestJS", "PostgreSQL", "Socket.IO", "AWS"],
} as const;

export const caseStudySlugs = [
	pantryProject.slug,
	ticketsProject.slug,
] as const;

export type CaseStudySlug = (typeof caseStudySlugs)[number];

export function isCaseStudySlug(value: string): value is CaseStudySlug {
	return (caseStudySlugs as readonly string[]).includes(value);
}
