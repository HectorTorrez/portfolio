import {
	pantryProject,
	portfolioLinks,
	portfolioSiteBase,
	portfolioSkills,
	ticketsProject,
} from "../shared";
import type { PortfolioContent, PortfolioMeta, PortfolioSite } from "../types";

export const portfolioSite: PortfolioSite = {
	...portfolioSiteBase,
	locale: "en_US",
};

export const portfolioMeta: PortfolioMeta = {
	title: "Hector Torrez | Software engineer · React & TypeScript",
	description:
		"Hector Torrez is a software engineer in El Salvador. React, TypeScript, and full-stack product work. ERP, logistics, e-commerce, and SaaS. Available for remote work.",
	keywords:
		"Hector Torrez, software engineer, full-stack, React, TypeScript, TanStack Query, NestJS, Node.js, Docker, AWS, Cloudflare Workers, El Salvador, portfolio",
};

export const portfolio: PortfolioContent = {
	name: "Hector Torrez",
	headline: "Software engineer, full-stack developer",
	heroSubtitle:
		"I ship product features end to end. React and TypeScript on the client, Node APIs when the job needs the other side. Three years across ERP, logistics, e-commerce, and SaaS.",
	heroSupportingText:
		"Led frontend architecture for platforms serving 100+ active users. Next.js and TanStack at work. NestJS, PostgreSQL, Cloudflare, and AWS when I own more of the stack.",
	location: "El Salvador",
	skills: portfolioSkills,
	experience: [
		{
			company: "JDK Tech",
			role: "Full-stack engineer",
			location: "Grand Prairie, Texas (remote, El Salvador)",
			start: "February 2025",
			end: "Present",
			startDateTime: "2025-02",
			highlights: [
				"Virtualized a high-traffic invoicing system with hundreds of line items for 100+ active users.",
				"Led frontend architecture for a logistics platform from day one: component structure, coding standards, and PR review ownership.",
				"Migrated CI/CD from Azure to Vercel with the Vercel CLI, one pipeline for the product suite.",
			],
		},
		{
			company: "BetaCode",
			role: "Frontend Developer",
			location: "El Salvador",
			start: "June 2024",
			end: "February 2025",
			startDateTime: "2024-06",
			endDateTime: "2025-02",
			highlights: [
				"Shipped full-stack features for e-commerce and event platforms: React UIs, REST APIs, and Node.js services.",
				"Built sites and app features from scratch with Next.js, React, TypeScript, and TanStack Query.",
				"Built dashboard and admin workflows that reduced repetitive operational work.",
			],
		},
		{
			company: "Freelance",
			role: "Full-stack Developer",
			location: "El Salvador",
			start: "June 2023",
			end: "May 2024",
			startDateTime: "2023-06",
			endDateTime: "2024-05",
			highlights: [
				"Built a financial management UI with custom Excel-like formulas and in-product calculations.",
				"Wrote backend services, databases, and APIs for internal business workflows.",
				"Added drag-and-drop functionality and new API endpoints.",
			],
		},
	],
	projects: [
		{
			...pantryProject,
			description:
				"AI recipe generator that turns pantry ingredients and cooking time into usable meal ideas, with dietary filters, cook mode, favorites, and a shopping list.",
		},
		{
			...ticketsProject,
			description:
				"Event ticketing with reserved checkout, QR tickets, and live seat inventory. Public catalog, customer tickets, and an organizer dashboard with a gate scanner.",
		},
	],
	education: [
		{
			institution: "Universidad Capitán General Gerardo Barrios",
			credential: "Software engineering",
			period: "June 2021 – December 2024",
		},
		{
			institution: "Universidad Capitán General Gerardo Barrios",
			credential: "Systems engineering technician, programming",
			period: "2018 – 2020",
		},
	],
	links: portfolioLinks,
};
