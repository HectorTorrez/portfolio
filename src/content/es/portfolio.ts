import {
	pantryProject,
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
	title: "Hector Torrez | Ingeniero de Software · React y TypeScript",
	description:
		"Hector Torrez es ingeniero de software en El Salvador. Desarrolla aplicaciones web con React, TypeScript y Cloudflare — ERP, logística, e-commerce y productos full-stack.",
	keywords:
		"Hector Torrez, ingeniero de software, desarrollador React, TypeScript, Node.js, Cloudflare Workers, TanStack, desarrollador frontend, El Salvador, portafolio",
};

export const portfolio: PortfolioContent = {
	name: "Hector Torrez",
	headline: "Ingeniero de Software",
	heroSubtitle:
		"Soy ingeniero de software con 3 años de experiencia construyendo aplicaciones web — ERP, logística, e-commerce y SaaS. Trabajo con React y TypeScript, y priorizo una UX clara y sistemas fáciles de mantener.",
	heroSupportingText:
		"También uso Node.js, PostgreSQL y Cloudflare cuando el producto lo necesita.",
	location: "El Salvador",
	skills: portfolioSkills,
	experience: [
		{
			company: "JDK Tech",
			role: "Desarrollador Frontend",
			location: "Grand Prairie, Texas, Estados Unidos",
			start: "febrero 2025",
			end: "actualidad",
			highlights: [
				"Refactoricé y optimicé componentes frontend con React, Next.js y TanStack Query para mejorar rendimiento, escalabilidad y mantenibilidad.",
				"Construí componentes de UI reutilizables y funcionalidades con Next.js y TanStack Start, con foco en routing moderno, carga de datos y una buena experiencia de desarrollo.",
				"Lideré la integración de un nuevo pipeline de CI/CD para desplegar productos desde Azure a Vercel con el CLI de Vercel, automatizando releases y mejorando la confiabilidad de los despliegues en toda la suite de productos.",
				"Desarrollé interfaces con contenido dinámico integrando Headless WordPress como CMS y consumiendo APIs REST.",
				"Construí y mantuve landing pages responsivas con Astro y SCSS, cuidando la consistencia del diseño y un enfoque mobile-first.",
				"Desarrollé una prueba de concepto (PoC) de chatbot en JavaScript para explorar mejoras en la interacción con el usuario y la automatización.",
				"Revisé pull requests y colaboré con el equipo para fomentar buenas prácticas, mantener la calidad del código y estándares frontend consistentes.",
			],
		},
		{
			company: "BetaCode",
			role: "Desarrollador Frontend",
			location: "El Salvador",
			start: "junio 2024",
			end: "febrero 2025",
			highlights: [
				"Desarrollé funcionalidades de frontend y backend para plataformas de e-commerce y eventos: dashboards, filtros, actualizaciones en tiempo real, herramientas administrativas e integraciones con APIs.",
				"Creé componentes reutilizables y flujos escalables que redujeron tareas operativas repetitivas y mejoraron la mantenibilidad en varios proyectos.",
			],
		},
		{
			company: "Freelance",
			role: "Desarrollador Full Stack",
			start: "diciembre 2023",
			end: "mayo 2024",
			highlights: [
				"Colaboré en una interfaz para ver y gestionar ganancias, mejorando la accesibilidad y claridad de los datos financieros.",
				"Desarrollé fórmulas personalizadas similares a Excel para calcular dentro de la plataforma.",
				"Creé e integré endpoints de backend en varias páginas, asegurando un buen flujo de datos entre frontend y backend.",
				"Implementé arrastrar y soltar para reordenar y gestionar elementos de forma intuitiva.",
				"Desarrollé nuevos endpoints de API para dar soporte a funcionalidades del frontend y flujos de datos.",
			],
		},
	],
	projects: [
		{
			...pantryProject,
			description:
				"Generador de recetas con IA que convierte ingredientes de la despensa y el tiempo de cocción en ideas útiles — con filtros dietéticos, modo cocina, favoritos y lista de compras.",
			caseStudy: {
				problem:
					"Quien cocina en casa suele partir de lo que ya tiene, pero buscar recetas termina empujando una lista de compras. Pantry responde “¿qué puedo cocinar ahora?” con ingredientes, tiempo y restricciones dietéticas.",
				role: "Construcción en solitario — producto, UI, Worker de API, auth, cuotas y despliegue en Cloudflare.",
				constraints:
					"Reto de entrevista con separación clara cliente/servidor, CSS plano (sin kit de UI) y despliegue en el edge sin claves externas de IA.",
				decisions: [
					{
						title: "Worker de API aparte para la IA",
						detail:
							"TanStack Start maneja la UI y el SSR; un Worker dedicado se encarga de Workers AI, validación, auth y rate limits para que el frontend no hable con el modelo directamente.",
					},
					{
						title: "Ingeniería de prompts en lugar de una base de recetas",
						detail:
							"Las restricciones se inyectan en un prompt estructurado con Llama 3.1 en el free tier de Workers AI, con un parser que valida campos — se prioriza cero claves externas y un camino nativo en el edge.",
					},
				],
				outcome:
					"Aplicación en vivo en Cloudflare Workers (web + API) que genera tres recetas por solicitud, envía resultados parseados a la UI y persiste favoritos, preferencias e historial en D1 para usuarios autenticados, manteniendo el estado de invitado en local.",
			},
		},
	],
	education: [
		{
			institution: "Universidad Capitán Gerardo Barrios",
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
