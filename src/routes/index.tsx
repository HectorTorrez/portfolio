import { createFileRoute } from "@tanstack/react-router";

import { PortfolioHome } from "#/components/portfolio/portfolio-home";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return <PortfolioHome />;
}
