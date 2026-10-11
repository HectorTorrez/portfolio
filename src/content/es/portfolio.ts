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
	locale: "es_SV",
};

export const portfolioMeta: PortfolioMeta = {
	title:
		"Hector Torrez | Ingeniero de software full-stack · React y TypeScript",
	description:
		"Hector Torrez es ingeniero de software full-stack en El Salvador. React, TypeScript y Node.js en producto para ERP, logística, e-commerce y SaaS. Abierto a roles remotos en horarios de EE. UU.",
	keywords:
		"Hector Torrez, ingeniero de software, full-stack, React, TypeScript, TanStack Query, NestJS, Node.js, Docker, AWS, Cloudflare Workers, El Salvador, portafolio",
};

export const portfolio: PortfolioContent = {
	name: "Hector Torrez",
	headline: "Ingeniero de software full-stack · React, TypeScript, Node.js",
	heroSubtitle:
		"Entrego funcionalidades de punta a punta: React y TypeScript en el frontend, y APIs en Node.js en el backend. Tres años en ERP, logística, e-commerce y SaaS.",
	heroSupportingText:
		"Lidero la arquitectura frontend de plataformas de ERP y logística en JDK Tech, con Next.js y TanStack. En mis propios proyectos llevo todo el stack: NestJS, PostgreSQL, Cloudflare y AWS.",
	location: "El Salvador",
	skills: portfolioSkills,
	experience: [
		{
			company: "JDK Tech",
			role: "Desarrollador full-stack",
			location: "Grand Prairie, Texas (remoto, El Salvador)",
			start: "febrero 2025",
			end: "actualidad",
			startDateTime: "2025-02",
			highlights: [
				"Resolví un cuello de botella de rendimiento en facturación virtualizando listas, para que facturas con cientos de líneas carguen con fluidez para más de 100 usuarios diarios.",
				"Lideré la arquitectura frontend de una plataforma logística desde el día uno: estructura de componentes, estándares de código y revisión de PRs.",
				"Construí un pipeline de CI/CD en Azure Pipelines que despliega a Vercel con el CLI de Vercel, estandarizando los despliegues de todos nuestros proyectos.",
			],
		},
		{
			company: "BetaCode",
			role: "Desarrollador frontend",
			location: "El Salvador",
			start: "junio 2024",
			end: "febrero 2025",
			startDateTime: "2024-06",
			endDateTime: "2025-02",
			highlights: [
				"Entregué funcionalidades frontend en React para e-commerce y plataformas de eventos, y contribuí a las APIs REST y servicios Node.js detrás de ellas.",
				"Construí sitios y funcionalidades desde cero con Next.js, React, TypeScript y TanStack Query.",
				"Construí dashboards y flujos de administración que redujeron trabajo operativo repetitivo.",
			],
		},
		{
			company: "Independiente",
			role: "Desarrollador full-stack",
			location: "El Salvador",
			start: "junio 2023",
			end: "mayo 2024",
			startDateTime: "2023-06",
			endDateTime: "2024-05",
			highlights: [
				"Construí una UI de gestión financiera con fórmulas personalizadas tipo Excel y cálculos en tiempo real.",
				"Integré servicios de backend, bases de datos y APIs para flujos internos del negocio.",
				"Construí flujos de arrastrar y soltar y los endpoints de API que los soportan.",
			],
		},
	],
	projects: [
		{
			...pantryProject,
			description:
				"Generador de recetas con IA que convierte ingredientes de la despensa y el tiempo de cocción en ideas útiles, con filtros dietéticos, modo cocina, favoritos y lista de compras.",
		},
		{
			...ticketsProject,
			description:
				"Ticketing de eventos con checkout reservado, tickets QR e inventario de asientos en vivo. Catálogo público, tickets del cliente y un dashboard de organizador con escáner en puerta.",
		},
	],
	education: [
		{
			institution: "Universidad Capitán General Gerardo Barrios",
			credential: "Ingeniería de software",
			period: "junio 2021 – diciembre 2024",
		},
		{
			institution: "Universidad Capitán General Gerardo Barrios",
			credential: "Técnico en ingeniería de sistemas, programación",
			period: "2018 – 2020",
		},
	],
	links: portfolioLinks,
};
