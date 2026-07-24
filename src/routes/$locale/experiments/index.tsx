import { createFileRoute, redirect } from "@tanstack/react-router";

import { ExperimentsPage } from "#/components/portfolio/experiments-page";
import { defaultLocale, isLocale } from "#/content/locales";
import { buildExperimentsHead } from "#/lib/seo";

export const Route = createFileRoute("/$locale/experiments/")({
	beforeLoad: ({ params }) => {
		if (!isLocale(params.locale)) {
			throw redirect({
				to: "/$locale/experiments",
				params: { locale: defaultLocale },
			});
		}
	},
	head: ({ params }) => buildExperimentsHead(params.locale),
	component: ExperimentsRoute,
});

function ExperimentsRoute() {
	const { locale } = Route.useParams();
	if (!isLocale(locale)) {
		return null;
	}
	return <ExperimentsPage locale={locale} />;
}
