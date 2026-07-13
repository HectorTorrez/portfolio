import { createFileRoute } from "@tanstack/react-router";

import { PortfolioHome } from "#/components/portfolio/portfolio-home";
import { buildPortfolioHead } from "#/lib/seo";

export const Route = createFileRoute("/es/")({
	head: () => buildPortfolioHead("es"),
	component: SpanishHome,
});

function SpanishHome() {
	return <PortfolioHome locale="es" />;
}
