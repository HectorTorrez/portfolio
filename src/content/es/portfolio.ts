import {
	blinkProject,
	kiloraProject,
	knowledgeHubProject,
	portfolioLinks,
	portfolioSiteBase,
	portfolioSkills,
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
	headline: "Ingeniero de software full-stack",
	heroSubtitle:
		"Me gusta construir productos y cuidar los detalles que hacen que usarlos se sienta bien.",
	heroSupportingText:
		"Desde la primera idea hasta el producto en manos de las personas.",
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
	featuredProject: {
		...knowledgeHubProject,
		description:
			"Un espacio donde los equipos pueden consultar sus documentos y encontrar respuestas claras, con referencias a la información original.",
		category: "Conocimiento · IA",
	},
	projects: [
		{
			...kiloraProject,
			description:
				"Un historial de servicios compartido entre propietarios de vehículos y talleres en El Salvador. Los talleres gestionan órdenes y cotizaciones asistidas por IA, mientras los propietarios conservan su historial de mantenimiento, incluso al cambiar de taller.",
			category: "Automotriz · IA",
		},
		{
			...blinkProject,
			description:
				"Notas siempre a mano, sin interrumpir lo que estás haciendo. Una pequeña ventana flotante para capturar ideas y volver al trabajo.",
			category: "Productividad · macOS",
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
