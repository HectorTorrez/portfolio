import type { UiStrings } from "../types";

export const ui: UiStrings = {
	skipToContent: "Saltar al contenido principal",
	nav: [
		{ href: "#about", label: "Sobre mí" },
		{ href: "#skills", label: "Habilidades" },
		{ href: "#projects", label: "Proyectos" },
		{ href: "#experience", label: "Experiencia" },
		{ href: "#education", label: "Educación" },
		{ href: "#contact", label: "Contacto" },
	],
	sections: {
		about: "Sobre mí",
		skills: "Habilidades",
		projects: "Proyectos",
		experience: "Experiencia",
		education: "Educación",
	},
	contact: {
		heading: "Hablemos",
		body: "¿Tienes un proyecto en mente o quieres colaborar? Escríbeme por correo, conecta en LinkedIn o revisa mi trabajo en GitHub.",
		linkedInProfile: "Perfil de LinkedIn",
		githubProfile: "Perfil de GitHub",
	},
	hero: {
		emailMe: "Escríbeme",
		linkedIn: "LinkedIn",
		github: "GitHub",
		portraitAlt: (name) => `Retrato de ${name}`,
	},
	a11y: {
		pageSections: "Secciones de la página",
		menu: "Menú",
		opensInNewTab: "(se abre en una nueva pestaña)",
		language: "Idioma",
	},
	theme: {
		light: "Tema claro",
		dark: "Tema oscuro",
		system: "Tema del sistema",
		switchLabel: (current, next) =>
			`${current}. Activar para cambiar a ${next}.`,
		switchTitle: (current, next) =>
			`${current} — clic para ${next.toLowerCase()}`,
	},
	copyEmail: {
		label: "Copiar correo",
		copied: "¡Copiado!",
		copiedAria: "Correo copiado al portapapeles",
		copyAria: (email) => `Copiar correo ${email}`,
	},
	projects: {
		featured: "Destacado",
		visitProject: (name) => `Visitar ${name} (se abre en una nueva pestaña)`,
	},
};
