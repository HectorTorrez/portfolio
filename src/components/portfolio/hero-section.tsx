import { CopyEmailButton } from "./copy-email-button";
import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";

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
			<p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-muted">
				<span
					aria-hidden
					className="size-1.5 shrink-0 rounded-full bg-accent-status"
				/>
				<span>{ui.hero.status}</span>
				<span>
					<span className="text-text-faint">· </span>
					{ui.hero.workArrangement}
					<span className="text-text-faint"> · </span>
					{portfolio.location}
				</span>
			</p>

			<h1
				id="hero-heading"
				className="editorial-display mt-6 text-balance text-4xl text-text-primary sm:text-5xl md:text-[3.5rem]"
			>
				{portfolio.name}
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
				<li className="mr-1 flex items-center">
					<a
						href={`mailto:${portfolio.links.email}`}
						className={`pressable inline-flex min-h-11 items-center rounded-full bg-text-primary px-5 font-medium text-sm text-surface-base hover:opacity-85 ${focusRing}`}
					>
						{ui.hero.emailMe}
					</a>
				</li>
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
		</section>
	);
}
