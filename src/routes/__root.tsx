import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Scripts,
	useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { ThemeProvider } from "#/components/portfolio/theme-provider";
import { localeFromPathname } from "#/content/locales";
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
				name: "theme-color",
				content: "#050506",
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

function useDocumentLang(): string {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});
	return localeFromPathname(pathname);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	const lang = useDocumentLang();

	return (
		<html lang={lang} suppressHydrationWarning>
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
