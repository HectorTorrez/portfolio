import { Link, useRouterState } from "@tanstack/react-router";

import { type Locale, locales } from "#/content/locales";

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
							/
						</span>
					) : null}
					<Link
						to="/$locale"
						params={{ locale: loc }}
						hash={hash || undefined}
						aria-current={loc === locale ? "page" : undefined}
						className={`pressable pressable-fade inline-flex min-h-10 min-w-8 items-center justify-center px-1.5 font-medium tracking-wide ${focusRing} ${
							loc === locale ? "text-text-primary" : "text-text-muted"
						}`}
					>
						{loc}
					</Link>
				</span>
			))}
		</fieldset>
	);
}
