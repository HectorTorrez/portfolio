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
	title: "Hector Torrez | Frontend engineer · React & TypeScript",
	description:
		"Hector Torrez is a frontend engineer in El Salvador. React, TypeScript, and the APIs behind the UI. ERP, logistics, e-commerce, and event platforms. Available for remote work.",
	keywords:
		"Hector Torrez, frontend engineer, React developer, TypeScript, Node.js, Cloudflare Workers, TanStack, El Salvador, portfolio",
};

export const portfolio: PortfolioContent = {
	name: "Hector Torrez",
	headline: "Frontend engineer",
	heroSubtitle:
		"I ship React and TypeScript product UIs, and the Node APIs behind them when that's the job. Three years across ERP, logistics, e-commerce, and event platforms.",
	heroSupportingText:
		"Next.js and TanStack at work. NestJS, PostgreSQL, and Cloudflare when I own more of the stack.",
	location: "El Salvador",
	skills: portfolioSkills,
	experience: [
		{
			company: "JDK Tech",
			role: "Frontend Developer",
			location: "Grand Prairie, Texas, United States",
			start: "February 2025",
			end: "Present",
			startDateTime: "2025-02",
			highlights: [
				"Led the CI/CD move from Azure to Vercel with the Vercel CLI so the product suite deploys through one pipeline.",
				"Built product UI in React, Next.js, and TanStack Query, including pages fed by Headless WordPress over REST.",
				"Review pull requests and keep frontend standards consistent across the suite.",
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
				"Built storefront and event-platform features on both sides: dashboards, filters, live updates, admin tools, and APIs.",
				"Extracted shared components so repeat ops work did not get rebuilt on every project.",
			],
		},
		{
			company: "Independent",
			role: "Full Stack Developer",
			start: "December 2023",
			end: "May 2024",
			startDateTime: "2023-12",
			endDateTime: "2024-05",
			highlights: [
				"Built the earnings UI: view and manage numbers, Excel-like formulas, and drag-and-drop reorder.",
				"Wrote the API endpoints those screens needed.",
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
			credential: "Software Engineer, Computer Science",
			period: "June 2021 – December 2024",
		},
		{
			institution: "Universidad Capitán General Gerardo Barrios",
			credential: "Technical degree in systems engineering, programming",
			period: "2018 – 2020",
		},
	],
	links: portfolioLinks,
};
