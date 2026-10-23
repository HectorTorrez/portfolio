import { describe, expect, it } from "vitest";

import { getContent } from "#/content";
import { locales } from "#/content/locales";

function projectSlugs(locale: (typeof locales)[number]) {
	return getContent(locale)
		.portfolio.projects.map((project) => project.slug)
		.sort();
}

describe("content", () => {
	it("keeps project slugs in sync across locales", () => {
		const [en, ...rest] = locales.map(projectSlugs);
		for (const slugs of rest) {
			expect(slugs).toEqual(en);
		}
	});
});
