import { Link, useRouterState } from "@tanstack/react-router";

import { type Locale, localePath, locales } from "#/content/locales";

import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";

type LocaleSwitcherProps = {
	locale: Locale;
};

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
	const { ui } = useLocaleContent();
	const hash = useRouterState({ select: (state) => state.location.hash });

	return (
		<fieldset className="m-0 flex min-w-0 items-center gap-1 border-0 p-0 text-xs text-text-muted">
			<legend className="sr-only">{ui.a11y.language}</legend>
			{locales.map((loc, index) => (
				<span key={loc} className="inline-flex items-center gap-1">
					{index > 0 ? (
						<span aria-hidden className="text-text-faint">
							|
						</span>
					) : null}
					<Link
						to={localePath(loc)}
						hash={hash || undefined}
						aria-current={loc === locale ? "page" : undefined}
						className={`inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg px-2 font-medium tracking-wide transition-colors hover:text-text-primary ${focusRing} ${
							loc === locale ? "text-text-primary" : "text-text-muted"
						}`}
					>
						{loc.toUpperCase()}
					</Link>
				</span>
			))}
		</fieldset>
	);
}
