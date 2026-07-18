import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { ScrambleText } from "./scramble-text";

export function HeroSection() {
	const { portfolio, ui } = useLocaleContent();
	const mailHref = `mailto:${portfolio.links.email}`;

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

				<ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
					<li>
						<a href={mailHref} className={`editorial-link ${focusRing}`}>
							{ui.hero.emailMe}
						</a>
					</li>
					<li>
						<a
							href={portfolio.links.linkedIn}
							target="_blank"
							rel="noopener noreferrer"
							className={`editorial-link ${focusRing}`}
						>
							{ui.hero.linkedIn}
							<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
						</a>
					</li>
					<li>
						<a
							href={portfolio.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className={`editorial-link ${focusRing}`}
						>
							{ui.hero.github}
							<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}
