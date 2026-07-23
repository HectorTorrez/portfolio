import {
	pantryProject,
	portfolioLinks,
	portfolioSiteBase,
	portfolioSkills,
} from "../shared";
import type { PortfolioContent, PortfolioMeta, PortfolioSite } from "../types";

export const portfolioSite: PortfolioSite = {
	...portfolioSiteBase,
	locale: "en_US",
};

export const portfolioMeta: PortfolioMeta = {
	title: "Hector Torrez | Software Engineer · React & TypeScript",
	description:
		"Hector Torrez is a Software Engineer in El Salvador building React, TypeScript, and Cloudflare web apps — ERP, logistics, e-commerce, and full-stack product delivery.",
	keywords:
		"Hector Torrez, software engineer, React developer, TypeScript, Node.js, Cloudflare Workers, TanStack, frontend developer, El Salvador, portfolio",
};

export const portfolio: PortfolioContent = {
	name: "Hector Torrez",
	headline: "Software Engineer",
	heroSubtitle:
		"I'm a software engineer with 3 years of experience building web apps — ERP, logistics, e-commerce, and SaaS. I care about React, TypeScript, clear UX, and maintainable systems.",
	heroSupportingText:
		"Also shipping with Node.js, PostgreSQL, and Cloudflare when the product needs it.",
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
				"Refactored and optimized frontend components using React, Next.js, and TanStack Query, improving performance, scalability, and maintainability.",
				"Built reusable UI components and application features with Next.js and TanStack Start, focusing on modern routing, data fetching, and developer experience.",
				"Led the integration of a new CI/CD pipeline to deploy products from Azure to Vercel using the Vercel CLI, automating releases and improving deployment reliability across the product suite.",
				"Developed data-driven interfaces by integrating Headless WordPress as a CMS, consuming REST APIs to power dynamic content.",
				"Built and maintained responsive landing pages using Astro and SCSS, ensuring design consistency and a mobile-first approach.",
				"Developed a chatbot proof of concept (PoC) in JavaScript to explore improvements in user interaction and automation.",
				"Reviewed pull requests and collaborated with the team to promote best practices, maintain high code quality, and ensure consistent frontend standards.",
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
				"Built frontend and backend features for e-commerce and event platforms, including dashboards, filtering systems, real-time updates, administrative tools, and API integrations.",
				"Developed reusable components and scalable workflows that reduced repetitive operational tasks and improved maintainability across multiple projects.",
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
				"Collaborated in the creation of a user interface that allowed users to view and manage earnings, improving accessibility and clarity of financial data.",
				"Developed custom formulas similar to Excel, enabling users to perform calculations within the platform.",
				"Created and integrated backend endpoints for various pages, ensuring smooth data flow between frontend and backend.",
				"Implemented drag-and-drop functionality for intuitive reordering and management of elements within the platform.",
				"Developed new API endpoints to support frontend features and data workflows.",
			],
		},
	],
	projects: [
		{
			...pantryProject,
			description:
				"AI recipe generator that turns pantry ingredients and cooking time into usable meal ideas — with dietary filters, cook mode, favorites, and a shopping list.",
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
