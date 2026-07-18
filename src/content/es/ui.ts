import type { UiStrings } from "../types";

export const ui: UiStrings = {
	skipToContent: "Saltar al contenido principal",
	nav: [
		{ href: "#projects", label: "Proyectos" },
		{ href: "#experience", label: "Experiencia" },
		{ href: "#contact", label: "Enlaces" },
	],
	sections: {
		skills: "Habilidades",
		projects: "Proyectos destacados",
		projectsBlurb: "Cosas que he construido y lanzado.",
		experience: "Experiencia",
		education: "Educación",
		elsewhere: "Enlaces",
	},
	contact: {
		linkedInProfile: "LinkedIn",
		githubProfile: "GitHub",
		email: "Correo",
	},
	hero: {
		status: "Disponible para trabajar",
		emailMe: "Correo",
		linkedIn: "LinkedIn",
		github: "GitHub",
		portraitAlt: (name) => `Retrato de ${name}`,
	},
	a11y: {
		pageSections: "Secciones de la página",
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
			`${current} — haz clic para ${next.toLowerCase()}`,
	},
	copyEmail: {
		label: "Copiar correo",
		copied: "¡Copiado!",
		copiedAria: "Correo copiado al portapapeles",
		copyAria: (email) => `Copiar correo ${email}`,
	},
	projects: {
		visitProject: (name) => `Visitar ${name} (se abre en una nueva pestaña)`,
	},
};
