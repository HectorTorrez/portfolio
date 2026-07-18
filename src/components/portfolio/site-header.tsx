import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
	const { portfolio, locale } = useLocaleContent();
	const firstName = portfolio.name.split(" ")[0] ?? portfolio.name;

	return (
		<header className="sticky top-0 z-50 bg-surface-base/80 backdrop-blur-md">
			<div className="content-column flex items-center justify-between gap-4 py-4">
				<a
					href="#top"
					className={`editorial-link shrink-0 font-medium text-sm tracking-tight no-underline ${focusRing}`}
				>
					{firstName.toLowerCase()}
				</a>

				<div className="flex items-center gap-1">
					<LocaleSwitcher locale={locale} />
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
