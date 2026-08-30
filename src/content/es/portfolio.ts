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
		"Hector Torrez es ingeniero de software en El Salvador. React, TypeScript y trabajo full-stack de producto. ERP, logística, e-commerce y plataformas de eventos. Disponible para trabajo remoto.",
	keywords:
		"Hector Torrez, ingeniero de software, full-stack, React, TypeScript, Node.js, AWS, Cloudflare Workers, TanStack, El Salvador, portafolio",
};

export const portfolio: PortfolioContent = {
	name: "Hector Torrez",
	headline: "Ingeniero de software",
	heroSubtitle:
		"Entrego funcionalidades de punta a punta. React y TypeScript en el cliente, APIs en Node cuando el trabajo pide el otro lado. Tres años en ERP, logística, e-commerce y plataformas de eventos.",
	heroSupportingText:
		"En el día a día, Next.js y TanStack. NestJS, PostgreSQL, Cloudflare y AWS cuando me toca más del stack.",
	location: "El Salvador",
	skills: portfolioSkills,
	experience: [
		{
			company: "JDK Tech",
			role: "Desarrollador full-stack",
			location: "Grand Prairie, Texas, Estados Unidos",
			start: "febrero 2025",
			end: "actualidad",
			startDateTime: "2025-02",
			highlights: [
				"Entregué funcionalidades de punta a punta, del UI en React hasta la API.",
				"Lideré el paso de CI/CD de Azure a Vercel con el CLI de Vercel para que la suite se despliegue por un solo pipeline.",
				"Construí UI de producto con React, Next.js y TanStack Query, incluidas páginas alimentadas por Headless WordPress sobre REST.",
				"Reviso pull requests y mantengo estándares frontend consistentes en la suite.",
			],
		},
		{
			company: "BetaCode",
			role: "Desarrollador Frontend",
			location: "El Salvador",
			start: "junio 2024",
			end: "febrero 2025",
			startDateTime: "2024-06",
			endDateTime: "2025-02",
			highlights: [
				"Construí funciones de tienda y de eventos en ambos lados: dashboards, filtros, actualizaciones en vivo, admin y APIs.",
				"Saqué componentes compartidos para no reconstruir el trabajo operativo en cada proyecto.",
			],
		},
		{
			company: "Independiente",
			role: "Desarrollador full-stack",
			start: "junio 2023",
			end: "mayo 2024",
			startDateTime: "2023-06",
			endDateTime: "2024-05",
			highlights: [
				"Construí la UI de ganancias: ver y gestionar números, fórmulas tipo Excel y reordenar con arrastrar y soltar.",
				"Escribí los endpoints de API que esas pantallas necesitaban.",
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
			credential: "Ingeniería de Software, Ciencias de la Computación",
			period: "junio 2021 – diciembre 2024",
		},
		{
			institution: "Universidad Capitán General Gerardo Barrios",
			credential: "Técnico en Ingeniería de Sistemas, programación",
			period: "2018 – 2020",
		},
	],
	links: portfolioLinks,
};
