import { createFileRoute, redirect } from "@tanstack/react-router";

import { ProjectsPage } from "#/components/portfolio/projects-page";
import { defaultLocale, isLocale } from "#/content/locales";
import { buildProjectsHead } from "#/lib/seo";

export const Route = createFileRoute("/$locale/projects/")({
	beforeLoad: ({ params }) => {
		if (!isLocale(params.locale)) {
			throw redirect({
				to: "/$locale/projects",
				params: { locale: defaultLocale },
			});
		}
	},
	head: ({ params }) => buildProjectsHead(params.locale),
	component: ProjectsRoute,
});

function ProjectsRoute() {
	const { locale } = Route.useParams();
	if (!isLocale(locale)) {
		return null;
	}
	return <ProjectsPage locale={locale} />;
}
