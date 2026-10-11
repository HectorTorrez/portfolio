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
	title: "Hector Torrez | Full-Stack Software Engineer · React & TypeScript",
	description:
		"Hector Torrez is a full-stack software engineer in El Salvador. React, TypeScript, and Node.js product work across ERP, logistics, e-commerce, and SaaS. Open to remote roles in US time zones.",
	keywords:
		"Hector Torrez, software engineer, full-stack, React, TypeScript, TanStack Query, NestJS, Node.js, Docker, AWS, Cloudflare Workers, El Salvador, portfolio",
};

export const portfolio: PortfolioContent = {
	name: "Hector Torrez",
	headline: "Full-Stack Software Engineer · React, TypeScript, Node.js",
	heroSubtitle:
		"I ship product features end to end: React and TypeScript on the frontend, and Node.js APIs on the backend. Three years across ERP, logistics, e-commerce, and SaaS.",
	heroSupportingText:
		"I lead frontend architecture for ERP and logistics platforms at JDK Tech, with Next.js and TanStack. On my own projects I own the whole stack: NestJS, PostgreSQL, Cloudflare, and AWS.",
	location: "El Salvador",
	skills: portfolioSkills,
	experience: [
		{
			company: "JDK Tech",
			role: "Full-stack developer",
			location: "Grand Prairie, Texas (remote, El Salvador)",
			start: "February 2025",
			end: "Present",
			startDateTime: "2025-02",
			highlights: [
				"Fixed a performance bottleneck in invoicing by virtualizing lists, so invoices with hundreds of line items render smoothly for 100+ daily users.",
				"Led frontend architecture for a logistics platform from day one: component structure, coding standards, and PR review ownership.",
				"Built a CI/CD pipeline in Azure Pipelines that deploys to Vercel via the Vercel CLI, standardizing deployments across all our projects.",
			],
		},
		{
			company: "BetaCode",
			role: "Frontend developer",
			location: "El Salvador",
			start: "June 2024",
			end: "February 2025",
			startDateTime: "2024-06",
			endDateTime: "2025-02",
			highlights: [
				"Shipped frontend features for e-commerce and event platforms in React, and contributed to the REST APIs and Node.js services behind them.",
				"Built sites and app features from scratch with Next.js, React, TypeScript, and TanStack Query.",
				"Built dashboard and admin workflows that reduced repetitive operational work.",
			],
		},
		{
			company: "Freelance",
			role: "Full-stack developer",
			location: "El Salvador",
			start: "June 2023",
			end: "May 2024",
			startDateTime: "2023-06",
			endDateTime: "2024-05",
			highlights: [
				"Built a financial management UI with custom Excel-like formulas and real-time calculations.",
				"Integrated backend services, databases, and APIs for internal business workflows.",
				"Built drag-and-drop workflows and the API endpoints behind them.",
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
