import { Menu, X } from "lucide-react";

import { portfolio } from "#/content/portfolio";

import { focusRing } from "./focus-ring";
import { navItems } from "./nav-config";

export function SiteHeader() {
	const [firstName, lastName] = portfolio.name.split(" ");

	return (
		<header className="sticky top-0 z-50 border-border-subtle border-b bg-surface-base/85 backdrop-blur-md">
			<div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-3.5 md:px-8 md:py-4">
				<a
					href="#top"
					className={`shrink-0 whitespace-nowrap font-display font-semibold text-text-primary text-sm tracking-tight transition-colors hover:text-accent-highlight ${focusRing}`}
				>
					{firstName}
					<span className="text-text-muted"> · </span>
					<span className="text-text-primary">{lastName}</span>
				</a>

				<nav aria-label="Page sections" className="hidden md:block">
					<ul className="flex items-center gap-6 text-sm">
						{navItems.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									className={`text-text-muted transition-colors hover:text-accent-highlight ${focusRing}`}
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<details className="mobile-nav group relative md:hidden">
					<summary
						className={`flex cursor-pointer list-none items-center gap-2 rounded-md border border-border-subtle bg-surface-overlay px-3 py-2 font-medium text-text-muted text-xs uppercase tracking-wider transition-colors hover:border-border-strong hover:text-accent-highlight [&::-webkit-details-marker]:hidden ${focusRing}`}
					>
						<Menu aria-hidden className="size-4 group-open:hidden" />
						<X aria-hidden className="hidden size-4 group-open:block" />
						<span>Menu</span>
					</summary>
					<nav
						aria-label="Page sections"
						className="absolute top-[calc(100%+0.5rem)] right-0 min-w-44 rounded-lg border border-border-strong bg-surface-overlay p-2 shadow-[0_16px_48px_rgb(0_0_0/0.45)]"
					>
						<ul className="flex flex-col">
							{navItems.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										onClick={(e) => {
											const details = e.currentTarget.closest("details");
											if (details) details.open = false;
										}}
										className={`block rounded-md px-3 py-2.5 text-sm text-text-muted transition-colors hover:bg-surface-raised hover:text-accent-highlight ${focusRing}`}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</details>
			</div>
		</header>
	);
}
