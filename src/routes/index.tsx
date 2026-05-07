import { createFileRoute } from "@tanstack/react-router";

import { PortfolioHome } from "#/components/portfolio/PortfolioHome";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return <PortfolioHome />;
}
