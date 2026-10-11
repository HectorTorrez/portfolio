import { useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

function resolveNavHref(locale: string, href: string, isHome: boolean): string {
	if (href.startsWith("#")) {
		return isHome ? href : `/${locale}${href}`;
	}
	if (href.startsWith("/")) {
		return `/${locale}${href}`;
	}
	return href;
}

export function SiteHeader() {
	const { portfolio, locale, ui } = useLocaleContent();
	const firstName = portfolio.name.split(" ")[0] ?? portfolio.name;
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});
	const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
	const homeHref = isHome ? "#top" : `/${locale}#top`;
	const [menuOpen, setMenuOpen] = useState(false);
	const mobileMenuId = useId();

	useEffect(() => {
		if (!menuOpen) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [menuOpen]);

	const navItems = ui.nav.map((item) => ({
		...item,
		resolvedHref: resolveNavHref(locale, item.href, isHome),
		isCurrent:
			item.href === "/experiments" &&
			(pathname === `/${locale}/experiments` ||
				pathname === `/${locale}/experiments/`),
	}));

	return (
		<header className="sticky top-0 z-50 bg-surface-base/80 backdrop-blur-md">
			<div className="content-column flex items-center justify-between gap-3 py-4">
				<a
					href={homeHref}
					className={`editorial-link shrink-0 font-medium text-sm tracking-tight no-underline ${focusRing}`}
				>
					{firstName.toLowerCase()}
				</a>

				<div className="flex min-w-0 items-center gap-1 sm:gap-2">
					<nav aria-label={ui.a11y.pageSections} className="min-w-0">
						<ul className="flex items-center gap-0.5 sm:gap-1">
							{navItems.map((item) => (
								<li key={item.href} className="hidden sm:list-item">
									<a
										href={item.resolvedHref}
										aria-current={item.isCurrent ? "page" : undefined}
										className={`editorial-link inline-flex min-h-11 items-center px-1.5 text-sm no-underline sm:px-2 ${focusRing} ${
											item.isCurrent
												? "text-text-primary"
												: "text-text-muted hover:text-text-primary"
										}`}
									>
										{item.label}
									</a>
								</li>
							))}
							<li>
								<a
									href={portfolio.links.resume}
									target="_blank"
									rel="noopener noreferrer"
									className={`editorial-link inline-flex min-h-11 items-center px-1.5 font-medium text-sm text-text-primary no-underline sm:px-2 ${focusRing}`}
								>
									{ui.contact.resume}
									<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
								</a>
							</li>
						</ul>
					</nav>

					<LocaleSwitcher locale={locale} />
					<ThemeToggle />

					<button
						type="button"
						aria-expanded={menuOpen}
						aria-controls={mobileMenuId}
						aria-label={menuOpen ? ui.a11y.closeMenu : ui.a11y.openMenu}
						onClick={() => setMenuOpen((open) => !open)}
						className={`pressable inline-flex size-11 items-center justify-center rounded-full text-text-muted hover:text-text-primary sm:hidden ${focusRing}`}
					>
						{menuOpen ? (
							<X aria-hidden className="icon-swap-in size-5" />
						) : (
							<Menu aria-hidden className="icon-swap-in size-5" />
						)}
					</button>
				</div>
			</div>

			{menuOpen ? (
				<nav
					id={mobileMenuId}
					aria-label={ui.a11y.pageSections}
					className="content-column border-border-subtle border-b pb-3 sm:hidden"
				>
					<ul className="flex flex-col">
						{navItems.map((item) => (
							<li key={item.href}>
								<a
									href={item.resolvedHref}
									aria-current={item.isCurrent ? "page" : undefined}
									onClick={() => setMenuOpen(false)}
									className={`editorial-link flex min-h-11 items-center text-base no-underline ${focusRing} ${
										item.isCurrent
											? "text-text-primary"
											: "text-text-muted hover:text-text-primary"
									}`}
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			) : null}
		</header>
	);
}
