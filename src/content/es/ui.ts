import type { UiStrings } from "../types";

export const ui: UiStrings = {
	skipToContent: "Saltar al contenido principal",
	nav: [
		{ href: "#projects", label: "Proyectos" },
		{ href: "/experiments", label: "Labs" },
		{ href: "#experience", label: "Experiencia" },
		{ href: "#contact", label: "Contacto" },
	],
	sections: {
		skills: "Habilidades",
		projects: "Proyectos destacados",
		projectsBlurb:
			"Una app de cocina con IA en vivo y una plataforma de tickets en tiempo real con asientos reservados.",
		experience: "Experiencia",
		education: "Educación",
		contact: "Contacto",
	},
	contact: {
		linkedInProfile: "LinkedIn",
		githubProfile: "GitHub",
		email: "Correo",
		resume: "CV",
	},
	hero: {
		status: "Abierto a roles Frontend / Full-Stack de nivel medio",
		workArrangement: "Remoto · horarios de EE. UU. (CST)",
		emailMe: "Escríbeme",
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
		liveDemo: "Demo en vivo",
		source: "Código",
		frontend: "Frontend",
		backend: "Backend",
		readCaseStudy: "Leer caso de estudio",
		backToWork: "Volver a proyectos destacados",
	},
	experiments: {
		label: "Labs",
		title: "Experimentos",
		blurb:
			"Pequeñas exploraciones interactivas — interacciones, motion e ideas de UI que estoy probando.",
		backHome: "Volver al inicio",
		items: {
			dynamicIsland: {
				title: "Dynamic Island",
				description:
					"Una isla al estilo iPhone que pasa de una píldora compacta de reproducción a un control de música completo.",
			},
			signatureCard: {
				title: "Tarjeta con firma",
				description:
					"Edita los campos abajo — la tarjeta se actualiza en vivo, y la firma es la ruta QWERTY de tu nombre en un solo trazo.",
			},
		},
		dynamicIsland: {
			expand: "Expandir reproductor",
			collapse: "Contraer reproductor",
			play: "Reproducir",
			pause: "Pausar",
			next: "Siguiente pista",
			previous: "Pista anterior",
			nowPlaying: (title, artist) => `Reproduciendo ${title} de ${artist}`,
		},
		signatureCard: {
			cardLabel: "Titular",
			nameLabel: "Nombre",
			namePlaceholder: "TU NOMBRE",
			networkLabel: "Red",
			networkPlaceholder: "visa",
			expiryLabel: "Caducidad",
			expiryPlaceholder: "MM/AA",
			last4Label: "Últimos 4",
			last4Placeholder: "4242",
			defaultName: "Hector",
			defaultNetwork: "visa",
			defaultExpiry: "12/28",
			defaultLast4: "4242",
			signedAs: "Firma autorizada",
			hint: "La firma sigue la ruta QWERTY del nombre — H → E → C → T → O → R",
		},
	},
};
