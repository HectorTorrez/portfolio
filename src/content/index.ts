import * as en from "./en/portfolio";
import { ui as enUi } from "./en/ui";
import * as es from "./es/portfolio";
import { ui as esUi } from "./es/ui";
import type { Locale } from "./locales";
import type { LocaleContent } from "./types";

const contentByLocale: Record<Locale, LocaleContent> = {
	en: {
		portfolio: en.portfolio,
		meta: en.portfolioMeta,
		site: en.portfolioSite,
		ui: enUi,
	},
	es: {
		portfolio: es.portfolio,
		meta: es.portfolioMeta,
		site: es.portfolioSite,
		ui: esUi,
	},
};

export function getContent(locale: Locale): LocaleContent {
	return contentByLocale[locale];
}

export type { EducationEntry, ExperienceEntry, ProjectEntry } from "./types";
