import { Menu, X } from "lucide-react";

import { portfolio } from "#/content/portfolio";

import { focusRing } from "./focus-ring";
import { navItems } from "./nav-config";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
	const [firstName, lastName] = portfolio.name.split(" ");

	return (
		<header className="sticky top-0 z-50 bg-surface-base">
			<div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-3.5 md:px-8 md:py-4">
				<a
					href="#top"
					className={`shrink-0 whitespace-nowrap font-display font-semibold text-text-primary text-sm tracking-tight transition-colors hover:text-accent-highlight ${focusRing}`}
				>
					{firstName}
					<span className="text-text-muted"> · </span>
					<span className="text-text-primary">{lastName}</span>
				</a>

				<div className="hidden items-center gap-4 md:flex">
					<nav aria-label="Page sections">
						<ul className="flex items-center gap-2 text-sm">
							{navItems.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className={`inline-flex min-h-12 items-center px-3 text-text-muted transition-colors hover:text-accent-highlight ${focusRing}`}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
					<ThemeToggle />
				</div>

				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<details className="mobile-nav group relative">
						<summary
							className={`flex min-h-12 min-w-12 cursor-pointer list-none items-center justify-center gap-2 rounded-lg border border-border-subtle bg-surface-overlay px-4 font-medium text-sm text-text-muted transition-colors hover:border-border-strong hover:text-text-primary [&::-webkit-details-marker]:hidden ${focusRing}`}
						>
							<Menu aria-hidden className="size-4 group-open:hidden" />
							<X aria-hidden className="hidden size-4 group-open:block" />
							<span>Menu</span>
						</summary>
						<nav
							aria-label="Page sections"
							className="absolute top-[calc(100%+0.5rem)] right-0 min-w-48 rounded-lg border border-border-strong bg-surface-overlay p-2 shadow-[var(--shadow-dropdown)]"
						>
							<ul className="flex flex-col gap-1">
								{navItems.map((item) => (
									<li key={item.href}>
										<a
											href={item.href}
											onClick={(e) => {
												const details = e.currentTarget.closest("details");
												if (details) details.open = false;
											}}
											className={`flex min-h-12 items-center rounded-md px-4 text-sm text-text-muted transition-colors hover:bg-surface-raised hover:text-text-primary ${focusRing}`}
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
