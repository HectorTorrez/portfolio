import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";

export function HeroSection() {
	const { portfolio, ui } = useLocaleContent();

	return (
		<section
			id="top"
			aria-labelledby="hero-heading"
			className="portfolio-column py-16 md:py-28"
		>
			<div className="relative max-w-3xl">
				<p className="editorial-label">
					{portfolio.headline} · {portfolio.location}
				</p>
				<h1
					id="hero-heading"
					className="editorial-display mt-7 text-balance text-5xl text-text-primary sm:text-6xl md:text-7xl"
				>
					{portfolio.name}
				</h1>
				<p className="mt-6 max-w-2xl text-pretty text-xl text-text-primary leading-relaxed md:text-3xl md:leading-snug">
					{portfolio.heroSubtitle}
				</p>
				<p className="mt-4 max-w-xl text-pretty text-base text-text-muted leading-relaxed">
					{portfolio.heroSupportingText}
				</p>
				<div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
					<a
						href="#projects"
						className={`pressable inline-flex min-h-12 items-center gap-3 rounded-full bg-text-primary px-6 font-medium text-sm text-surface-base hover:opacity-85 ${focusRing}`}
					>
						{ui.hero.viewProjects}
						<span aria-hidden>↓</span>
					</a>
					<a
						href="#contact"
						className={`editorial-link inline-flex min-h-12 items-center gap-2 text-sm ${focusRing}`}
					>
						{ui.hero.emailMe}
						<span aria-hidden>↗</span>
					</a>
				</div>
			</div>
		</section>
	);
}
