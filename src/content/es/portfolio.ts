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
	title: "Hector Torrez | Ingeniero de software · React y TypeScript",
	description:
		"Hector Torrez es ingeniero de software en El Salvador. React, TypeScript y trabajo full-stack de producto. ERP, logística, e-commerce y SaaS. Disponible para trabajo remoto.",
	keywords:
		"Hector Torrez, ingeniero de software, full-stack, React, TypeScript, TanStack Query, NestJS, Node.js, Docker, AWS, Cloudflare Workers, El Salvador, portafolio",
};

export const portfolio: PortfolioContent = {
	name: "Hector Torrez",
	headline: "Ingeniero de software, desarrollador full-stack",
	heroSubtitle:
		"Entrego funcionalidades de punta a punta. React y TypeScript en el cliente, APIs en Node cuando el trabajo pide el otro lado. Tres años en ERP, logística, e-commerce y SaaS.",
	heroSupportingText:
		"Lideré arquitectura frontend para plataformas con más de 100 usuarios activos. En el día a día, Next.js y TanStack. NestJS, PostgreSQL, Cloudflare y AWS cuando me toca más del stack.",
	location: "El Salvador",
	skills: portfolioSkills,
	experience: [
		{
			company: "JDK Tech",
			role: "Ingeniero full-stack",
			location: "Grand Prairie, Texas (remoto, El Salvador)",
			start: "febrero 2025",
			end: "actualidad",
			startDateTime: "2025-02",
			highlights: [
				"Virtualicé un sistema de facturación de alto tráfico con cientos de líneas para más de 100 usuarios activos.",
				"Lideré la arquitectura frontend de una plataforma logística desde el día uno: estructura de componentes, estándares de código y revisión de PRs.",
				"Migré CI/CD de Azure a Vercel con el CLI de Vercel, un solo pipeline para la suite de productos.",
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
				"Entregué funcionalidades full-stack para e-commerce y plataformas de eventos: interfaces React, APIs REST y servicios Node.js.",
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
				"Construí una UI de gestión financiera con fórmulas personalizadas tipo Excel y cálculos en producto.",
				"Escribí servicios backend, bases de datos y APIs para flujos internos del negocio.",
				"Añadí arrastrar y soltar y nuevos endpoints de API.",
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
