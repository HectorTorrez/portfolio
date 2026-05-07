export type ExperienceEntry = {
	company: string;
	role: string;
	location?: string;
	start: string;
	end: string | "Present";
	highlights: string[];
};

export type EducationEntry = {
	institution: string;
	credential: string;
	period: string;
};

export const portfolioMeta = {
	title: "Hector Torrez · Software Engineer",
	description:
		"Frontend developer with 3 years of experience building JavaScript applications across frontend and backend using Next.js, TypeScript, and modern data-fetching tools—focused on performance, UX, and polished interfaces.",
} as const;

export const portfolio = {
	name: "Hector Torrez",
	headline: "Software Engineer · Full Stack Engineer",
	location: "El Salvador",
	summary:
		"Frontend developer with 3 years of experience developing JavaScript applications across frontend and backend using technologies such as Next.js and TypeScript. Passionate about building attractive, functional, and user-focused interfaces, with a strong focus on performance and user experience.",

	skills: [
		"TanStack Query",
		"Next.js",
		"React",
		"TypeScript",
		"TanStack Start",
		"Astro",
		"SCSS",
		"WordPress",
		"REST APIs",
		"Web performance",
		"Accessibility",
	] as const,

	experience: [
		{
			company: "JDK Outstanding Technologies",
			role: "Frontend Developer",
			location: "Grand Prairie, Texas, United States",
			start: "February 2025",
			end: "Present",
			highlights: [
				"Refactored and optimized frontend components using React, Next.js, and TanStack Query, improving performance, scalability, and maintainability.",
				"Built reusable UI components and application features with Next.js and TanStack Start, focusing on modern routing, data fetching, and developer experience.",
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
			highlights: [
				"Developed websites from scratch using Next.js, React, TypeScript, and TanStack Query.",
			],
		},
		{
			company: "Freelance",
			role: "Full Stack Developer",
			start: "December 2023",
			end: "May 2024",
			highlights: [
				"Collaborated in the creation of a user interface that allowed users to view and manage earnings, improving accessibility and clarity of financial data.",
				"Developed custom formulas similar to Excel, enabling users to perform calculations within the platform.",
				"Created and integrated backend endpoints for various pages, ensuring smooth data flow between frontend and backend.",
				"Implemented drag-and-drop functionality for intuitive reordering and management of elements within the platform.",
				"Developed new API endpoints to support frontend features and data workflows.",
			],
		},
	] satisfies ExperienceEntry[],

	education: [
		{
			institution: "Universidad Capitán Gerardo Barrios",
			credential: "System Engineer, Computer Science",
			period: "June 2021 – December 2024",
		},
		{
			institution: "Universidad Capitán General Gerardo Barrios",
			credential: "Técnico en Ingeniería en Sistemas, Programación",
			period: "2018 – 2020",
		},
	] satisfies EducationEntry[],

	links: {
		email: "torrezhectorb@gmail.com",
		linkedIn: "https://www.linkedin.com/in/hector-torrez",
	},
} as const;
