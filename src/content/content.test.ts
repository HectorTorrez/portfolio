import { describe, expect, it } from "vitest";

import { getContent } from "#/content";
import { locales } from "#/content/locales";

function projectSlugs(locale: (typeof locales)[number]) {
	const { featuredProject, projects } = getContent(locale).portfolio;
	return [featuredProject, ...projects].map((project) => project.slug).sort();
}

describe("content", () => {
	it("keeps project slugs in sync across locales", () => {
		const [en, ...rest] = locales.map(projectSlugs);
		for (const slugs of rest) {
			expect(slugs).toEqual(en);
		}
	});

	it("does not repeat the featured project in the projects list", () => {
		for (const locale of locales) {
			const { featuredProject, projects } = getContent(locale).portfolio;
			expect(projects.map((project) => project.slug)).not.toContain(
				featuredProject.slug,
			);
		}
	});
});
