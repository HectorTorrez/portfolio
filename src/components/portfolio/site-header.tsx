import { Menu, X } from "lucide-react";

import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
	const { portfolio, ui, locale } = useLocaleContent();
	const [firstName, lastName] = portfolio.name.split(" ");

	return (
		<header className="apple-nav-blur sticky top-0 z-50">
			<div className="mx-auto flex max-w-[980px] items-center justify-between gap-4 px-5 py-3 md:px-8 md:py-4">
				<a
					href="#top"
					className={`shrink-0 whitespace-nowrap font-semibold text-sm text-text-primary tracking-tight transition-opacity hover:opacity-70 ${focusRing}`}
				>
					{firstName}
					<span className="text-text-muted"> · </span>
					{lastName}
				</a>

				<div className="hidden items-center gap-4 md:flex">
					<nav aria-label={ui.a11y.pageSections}>
						<ul className="flex items-center gap-1 text-xs text-text-muted">
							{ui.nav.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className={`inline-flex min-h-11 items-center px-3 transition-colors hover:text-text-primary ${focusRing}`}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
					<LocaleSwitcher locale={locale} />
					<ThemeToggle />
				</div>

				<div className="flex items-center gap-2 md:hidden">
					<LocaleSwitcher locale={locale} />
					<ThemeToggle />
					<details className="mobile-nav group relative">
						<summary
							className={`flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-overlay px-4 font-medium text-sm text-text-muted transition-colors hover:border-border-strong hover:text-text-primary [&::-webkit-details-marker]:hidden ${focusRing}`}
						>
							<Menu aria-hidden className="size-4 group-open:hidden" />
							<X aria-hidden className="hidden size-4 group-open:block" />
							<span className="sr-only">{ui.a11y.menu}</span>
						</summary>
						<nav
							aria-label={ui.a11y.pageSections}
							className="absolute top-[calc(100%+0.5rem)] right-0 min-w-48 rounded-2xl border border-border-strong bg-surface-overlay p-2 shadow-[var(--shadow-dropdown)]"
						>
							<ul className="flex flex-col gap-1">
								{ui.nav.map((item) => (
									<li key={item.href}>
										<a
											href={item.href}
											onClick={(e) => {
												const details = e.currentTarget.closest("details");
												if (details) details.open = false;
											}}
											className={`flex min-h-11 items-center rounded-xl px-4 text-sm text-text-muted transition-colors hover:bg-surface-raised hover:text-text-primary ${focusRing}`}
										>
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</details>
				</div>
			</div>
		</header>
	);
}
