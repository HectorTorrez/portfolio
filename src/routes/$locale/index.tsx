import { createFileRoute, redirect } from "@tanstack/react-router";

import { PortfolioHome } from "#/components/portfolio/portfolio-home";
import { defaultLocale, isLocale } from "#/content/locales";
import { buildPortfolioHead } from "#/lib/seo";

export const Route = createFileRoute("/$locale/")({
	beforeLoad: ({ params }) => {
		if (!isLocale(params.locale)) {
			throw redirect({
				to: "/$locale",
				params: { locale: defaultLocale },
			});
		}
	},
	head: ({ params }) => buildPortfolioHead(params.locale),
	component: LocaleHome,
});

function LocaleHome() {
	const { locale } = Route.useParams();
	return <PortfolioHome locale={locale} />;
}
