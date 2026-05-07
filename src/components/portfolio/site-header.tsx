import { portfolio } from "#/content/portfolio";

import { focusRing } from "./focus-ring";
import { navItems } from "./nav-config";

export function SiteHeader() {
	const [firstName, lastName] = portfolio.name.split(" ");

	return (
		<header className="sticky top-0 z-50 border-border-subtle border-b bg-surface-base/80 backdrop-blur-md">
			<div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 md:px-8">
				<a
					href="#top"
					className={`font-display font-semibold text-accent text-sm tracking-tight transition-colors hover:text-text-primary ${focusRing}`}
				>
					{firstName}
					<span className="text-text-muted"> · </span>
					<span className="text-text-primary">{lastName}</span>
				</a>
				<nav aria-label="Page sections">
					<ul className="flex flex-wrap justify-end gap-x-4 gap-y-1 text-text-faint text-xs uppercase tracking-wider md:gap-x-6 md:text-sm md:normal-case md:tracking-normal">
						{navItems.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									className={`text-text-muted transition-colors hover:text-accent ${focusRing}`}
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
