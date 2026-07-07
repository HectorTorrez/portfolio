import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { ThemeProvider } from "#/components/portfolio/theme-provider";
import { portfolioMeta } from "#/content/portfolio";
import { themeInitScript } from "#/lib/theme";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: portfolioMeta.title,
			},
			{
				name: "description",
				content: portfolioMeta.description,
			},
			{
				name: "theme-color",
				content: "#000000",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{ rel: "manifest", href: "/manifest.json" },
			{
				rel: "icon",
				href: "/favicon-32.png",
				type: "image/png",
				sizes: "32x32",
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "48x48",
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png",
				sizes: "180x180",
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: inline theme bootstrap avoids flash before hydration */}
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
				<HeadContent />
			</head>
			<body className="touch-manipulation antialiased">
				<ThemeProvider>{children}</ThemeProvider>
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
