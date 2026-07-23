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
	"ExpressJS",
] as const;

export const pantryProject = {
	name: "Pantry",
	url: "https://recipe-generator-web.torrezhectorb.workers.dev/",
	sourceUrl: "https://github.com/HectorTorrez/recipe-generator",
	stack: ["TanStack Start", "Cloudflare Workers", "Workers AI", "D1"],
} as const;
