import { CopyEmailButton } from "./copy-email-button";
import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { ScrambleText } from "./scramble-text";

export function HeroSection() {
	const { portfolio, ui } = useLocaleContent();

	const links = [
		{
			href: portfolio.links.resume,
			label: ui.hero.resume,
			emphasize: true,
		},
		{
			href: portfolio.links.linkedIn,
			label: ui.hero.linkedIn,
			emphasize: false,
		},
		{
			href: portfolio.links.github,
			label: ui.hero.github,
			emphasize: false,
		},
	] as const;

	return (
		<section
			id="top"
			aria-labelledby="hero-heading"
			className="content-column pb-16 pt-10 md:pb-20 md:pt-14"
		>
			<div className="stagger-children">
				<p className="flex items-center gap-2 text-sm text-text-muted">
					<span
						aria-hidden
						className="size-1.5 shrink-0 rounded-full bg-accent-status"
					/>
					<span>
						{ui.hero.status}
						<span className="text-text-faint"> · </span>
						{portfolio.location}
					</span>
				</p>

				<h1
					id="hero-heading"
					aria-label={portfolio.name}
					className="editorial-display mt-6 text-balance text-4xl text-text-primary sm:text-5xl md:text-[3.5rem]"
				>
					<ScrambleText text={portfolio.name} />
				</h1>

				<p className="mt-3 text-lg text-text-muted md:text-xl">
					{portfolio.headline}
				</p>

				<p className="mt-6 max-w-prose text-pretty text-base text-text-primary leading-relaxed md:text-[1.05rem]">
					{portfolio.heroSubtitle}
				</p>
				<p className="mt-3 max-w-prose text-pretty text-base text-text-muted leading-relaxed">
					{portfolio.heroSupportingText}
				</p>

				<ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-text-muted">
					<li className="flex items-center">
						<CopyEmailButton email={portfolio.links.email} />
					</li>
					{links.map((link) => (
						<li key={link.href} className="flex items-center">
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className={`editorial-link inline-flex min-h-11 items-center gap-1 hover:text-text-primary hover:opacity-100 ${link.emphasize ? "font-medium text-text-primary" : ""} ${focusRing}`}
							>
								{link.label}
								<span aria-hidden className="text-text-faint">
									↗
								</span>
								<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
