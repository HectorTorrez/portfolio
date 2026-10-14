import { describe, expect, it } from "vitest";

import { getContent } from "#/content";
import { getCaseStudyMarkdown } from "#/content/case-studies";
import { locales } from "#/content/locales";
import { caseStudySlugs } from "#/content/shared";

function projectSlugs(locale: (typeof locales)[number]) {
	return getContent(locale)
		.portfolio.projects.map((project) => project.slug)
		.sort();
}

describe("content", () => {
	it("has a case study slug for every project in every locale", () => {
		const expected = [...caseStudySlugs].sort();
		for (const locale of locales) {
			expect(projectSlugs(locale)).toEqual(expected);
		}
	});

	it("provides case study markdown for every slug in every locale", () => {
		for (const locale of locales) {
			for (const slug of caseStudySlugs) {
				expect(getCaseStudyMarkdown(locale, slug)).toBeTruthy();
			}
		}
	});

	it("keeps project slugs in sync across locales", () => {
		const [en, ...rest] = locales.map(projectSlugs);
		for (const slugs of rest) {
			expect(slugs).toEqual(en);
		}
	});
});
