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

export const blinkProject = {
	name: "Blink",
	slug: "blink",
	sources: [
		{
			kind: "source",
			href: "https://github.com/HectorTorrez/nook-notes",
		},
	],
	stack: ["SwiftUI", "Swift", "macOS"],
} as const;
