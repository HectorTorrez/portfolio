import type { UiStrings } from "../types";

export const ui: UiStrings = {
	skipToContent: "Saltar al contenido principal",
	nav: [
		{ href: "#projects", label: "Proyectos" },
		{ href: "#experience", label: "Experiencia" },
		{ href: "#contact", label: "Contacto" },
	],
	sections: {
		skills: "Habilidades",
		projects: "Proyectos destacados",
		projectsBlurb: "Productos propios, de la idea a la experiencia.",
		experience: "Experiencia",
		education: "Educación",
		contact: "Contacto",
	},
	contact: {
		linkedInProfile: "LinkedIn",
		githubProfile: "GitHub",
		email: "Correo",
		title: "¿Construimos algo juntos?",
		blurb:
			"Estoy abierto a nuevas oportunidades y conversaciones sobre producto y software.",
		resume: "CV",
	},
	hero: {
		status: "Abierto a roles Frontend / Full-Stack",
		workArrangement: "Remoto · horarios de EE. UU. (CST)",
		emailMe: "Contactarme",
		viewProjects: "Ver proyectos",
		linkedIn: "LinkedIn",
		github: "GitHub",
		resume: "CV (PDF)",
		ogImageAlt: (name) => `${name}, ingeniero de software full-stack`,
	},
	a11y: {
		pageSections: "Secciones de la página",
		openMenu: "Abrir menú",
		closeMenu: "Cerrar menú",
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
		failedAria: "No se pudo copiar el correo. Abriendo tu cliente de correo.",
		copyAria: (email) => `Copiar correo ${email}`,
	},
	projects: {
		visitProject: (name) => `Visitar ${name} (se abre en una nueva pestaña)`,
		liveDemo: "Explorar proyecto",
		source: "Código",
		frontend: "Frontend",
		backend: "Backend",
		featured: "Proyecto destacado",
		viewAll: "Ver todos los proyectos",
	},
	projectsPage: {
		label: "Proyectos",
		title: "Proyectos",
		blurb: "Una selección de productos que he construido.",
		backHome: "Volver al inicio",
	},
};
