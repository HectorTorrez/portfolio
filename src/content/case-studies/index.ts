import type { Locale } from "#/content/locales";
import { type CaseStudySlug, isCaseStudySlug } from "#/content/shared";

import pantryEn from "./en/pantry.md?raw";
import pantryEs from "./es/pantry.md?raw";

const caseStudyBodies: Record<Locale, Record<CaseStudySlug, string>> = {
	en: {
		pantry: pantryEn,
	},
	es: {
		pantry: pantryEs,
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
