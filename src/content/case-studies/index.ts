import type { Locale } from "#/content/locales";
import { type CaseStudySlug, isCaseStudySlug } from "#/content/shared";

import pantryEn from "./en/pantry.md?raw";
import ticketsEn from "./en/tickets.md?raw";
import pantryEs from "./es/pantry.md?raw";
import ticketsEs from "./es/tickets.md?raw";

const caseStudyBodies: Record<Locale, Record<CaseStudySlug, string>> = {
	en: {
		pantry: pantryEn,
		tickets: ticketsEn,
	},
	es: {
		pantry: pantryEs,
		tickets: ticketsEs,
	},
};

export function getCaseStudyMarkdown(
	locale: Locale,
	slug: string,
): string | null {
	if (!isCaseStudySlug(slug)) {
		return null;
	}
	return caseStudyBodies[locale][slug] ?? null;
}

export { isCaseStudySlug, type CaseStudySlug };
