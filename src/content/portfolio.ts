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
		"Software Developer building complex web applications across ERP, logistics, and e-commerce — invoicing, shipment dashboards, inventory flows, React, TanStack, and full-stack delivery.",
} as const;

export const portfolio = {
	name: "Hector Torrez",
	headline: "Software Engineer",
	heroSubtitle:
		"Building modern web applications with React, TypeScript, Node.js, and Cloudflare.",
	heroSupportingText:
		"3 years building ERP, logistics, e-commerce, financial management, and SaaS platforms.",
	location: "El Salvador",
	aboutParagraphs: [
		"I'm a Software Engineer focused on building scalable web applications and modern product experiences.",
		"Over the past three years, I've worked on ERP systems, logistics platforms, e-commerce solutions, financial management tools, and SaaS products.",
		"My primary expertise is React, TypeScript, and modern frontend architecture, while also developing backend solutions using Node.js, PostgreSQL, Supabase, and Cloudflare.",
		"I enjoy building maintainable software, improving developer experience, and solving real business problems through technology.",
	] as const,

	skills: [
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
	] as const,

	experience: [
		{
			company: "JDK Tech",
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
				"Built frontend and backend features for e-commerce and event platforms, including dashboards, filtering systems, real-time updates, administrative tools, and API integrations.",
				"Developed reusable components and scalable workflows that reduced repetitive operational tasks and improved maintainability across multiple projects.",
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
		github: "https://github.com/HectorTorrez",
	},
} as const;
