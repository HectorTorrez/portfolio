import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

import { CaseStudyPage } from "#/components/portfolio/case-study-page";
import { getContent } from "#/content";
import { getCaseStudyMarkdown, isCaseStudySlug } from "#/content/case-studies";
import { defaultLocale, isLocale } from "#/content/locales";
import { buildCaseStudyHead } from "#/lib/seo";

export const Route = createFileRoute("/$locale/work/$slug")({
	beforeLoad: ({ params }) => {
		if (!isLocale(params.locale)) {
			throw redirect({
				to: "/$locale/work/$slug",
				params: { locale: defaultLocale, slug: params.slug },
			});
		}

		if (!isCaseStudySlug(params.slug)) {
			throw notFound();
		}

		const markdown = getCaseStudyMarkdown(params.locale, params.slug);
		if (!markdown) {
			throw notFound();
		}

		const project = getContent(params.locale).portfolio.projects.find(
			(entry) => entry.slug === params.slug,
		);
		if (!project) {
			throw notFound();
		}

		return { project, markdown };
	},
	head: ({ params }) => buildCaseStudyHead(params.locale, params.slug),
	component: CaseStudyRoute,
});

function CaseStudyRoute() {
	const { locale, slug } = Route.useParams();
	const { project, markdown } = Route.useRouteContext();

	if (!isLocale(locale) || !isCaseStudySlug(slug)) {
		return null;
	}

	return (
		<CaseStudyPage locale={locale} project={project} markdown={markdown} />
	);
}
