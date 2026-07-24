import { Link, useRouterState } from "@tanstack/react-router";

import { type Locale, locales } from "#/content/locales";
import { isCaseStudySlug } from "#/content/shared";

import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";

type LocaleSwitcherProps = {
	locale: Locale;
};

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
	const { ui } = useLocaleContent();
	const { hash, pathname } = useRouterState({
		select: (state) => ({
			hash: state.location.hash,
			pathname: state.location.pathname,
		}),
	});

	const segments = pathname.split("/").filter(Boolean);
	const workSlug =
		segments[1] === "work" && segments[2] && isCaseStudySlug(segments[2])
			? segments[2]
			: null;
	const isExperiments = segments[1] === "experiments";

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
					{workSlug ? (
						<Link
							to="/$locale/work/$slug"
							params={{ locale: loc, slug: workSlug }}
							aria-current={loc === locale ? "page" : undefined}
							className={`pressable pressable-fade inline-flex min-h-11 min-w-9 items-center justify-center px-1.5 font-medium tracking-wide ${focusRing} ${
								loc === locale ? "text-text-primary" : "text-text-muted"
							}`}
						>
							{loc}
						</Link>
					) : isExperiments ? (
						<Link
							to="/$locale/experiments"
							params={{ locale: loc }}
							aria-current={loc === locale ? "page" : undefined}
							className={`pressable pressable-fade inline-flex min-h-11 min-w-9 items-center justify-center px-1.5 font-medium tracking-wide ${focusRing} ${
								loc === locale ? "text-text-primary" : "text-text-muted"
							}`}
						>
							{loc}
						</Link>
					) : (
						<Link
							to="/$locale"
							params={{ locale: loc }}
							hash={hash || undefined}
							aria-current={loc === locale ? "page" : undefined}
							className={`pressable pressable-fade inline-flex min-h-11 min-w-9 items-center justify-center px-1.5 font-medium tracking-wide ${focusRing} ${
								loc === locale ? "text-text-primary" : "text-text-muted"
							}`}
						>
							{loc}
						</Link>
					)}
				</span>
			))}
		</fieldset>
	);
}
