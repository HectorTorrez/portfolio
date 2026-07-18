import { createFileRoute, redirect } from "@tanstack/react-router";

import { defaultLocale } from "#/content/locales";

export const Route = createFileRoute("/")({
	beforeLoad: () => {
		throw redirect({
			to: "/$locale",
			params: { locale: defaultLocale },
		});
	},
});
