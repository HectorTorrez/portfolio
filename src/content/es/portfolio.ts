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
				"Generador de recetas a partir de los ingredientes que ya tienes en la cocina. Elige tiempo de cocción, dificultad y preferencias dietéticas para obtener recetas con IA — sin lista de compras.",
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
