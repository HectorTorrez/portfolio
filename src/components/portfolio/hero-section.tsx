import { portfolio } from "#/content/portfolio";

import { focusRing } from "./focus-ring";

export function HeroSection() {
	const mailHref = `mailto:${portfolio.links.email}`;

	return (
		<section
			id="top"
			aria-labelledby="hero-heading"
			className="relative isolate overflow-hidden px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24"
		>
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute top-[-20%] right-[-15%] h-[min(520px,70vw)] w-[min(520px,70vw)] rounded-full bg-[radial-gradient(circle_at_center,rgb(232_228_220/0.07)_0%,transparent_68%)] blur-2xl" />
				<div className="absolute bottom-[-30%] left-[-20%] h-[min(480px,85vw)] w-[min(480px,85vw)] rounded-full bg-[radial-gradient(circle_at_center,rgb(200_190_175/0.05)_0%,transparent_65%)] blur-3xl" />
				<div className="absolute top-1/2 left-1/2 h-px w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] bg-linear-to-r from-transparent via-white/12 to-transparent opacity-40" />
			</div>

			<div className="mx-auto max-w-3xl stagger-children">
				<p className="font-medium text-accent-dim text-sm tracking-wide md:text-base">
					{portfolio.location}
				</p>
				<h1
					id="hero-heading"
					className="font-display mt-3 text-balance font-bold text-4xl text-text-primary leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
				>
					{portfolio.name}
				</h1>
				<p className="mt-4 font-display font-semibold text-accent text-xl md:text-2xl">
					{portfolio.headline}
				</p>
				<div className="mt-8 max-w-2xl space-y-6">
					{portfolio.aboutParagraphs.map((paragraph) => (
						<p
							key={paragraph}
							className="text-pretty text-lg text-text-muted leading-relaxed md:text-xl"
						>
							{paragraph}
						</p>
					))}
				</div>
				<div className="mt-10 flex flex-wrap gap-4">
					<a
						href={mailHref}
						className={`inline-flex items-center justify-center rounded-full border border-border-strong bg-surface-overlay px-6 py-3 font-medium text-accent text-sm transition-colors hover:border-accent hover:bg-surface-raised ${focusRing}`}
					>
						Email me
					</a>
					<a
						href={portfolio.links.linkedIn}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 font-medium text-text-muted text-sm transition-colors hover:text-accent ${focusRing}`}
					>
						LinkedIn
					</a>
				</div>
			</div>
		</section>
	);
}
