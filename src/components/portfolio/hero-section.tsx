import { ArrowUpRight } from "lucide-react";

import { portfolio } from "#/content/portfolio";

import { CtaLink } from "./cta-link";

export function HeroSection() {
	const mailHref = `mailto:${portfolio.links.email}`;

	return (
		<section
			id="top"
			aria-labelledby="hero-heading"
			className="relative isolate overflow-hidden px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16"
		>
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute top-[-15%] right-[-10%] h-[min(560px,75vw)] w-[min(560px,75vw)] rounded-full bg-[radial-gradient(circle_at_center,rgb(56_189_248/0.07)_0%,transparent_68%)] blur-2xl" />
				<div className="absolute bottom-[-25%] left-[-15%] h-[min(440px,80vw)] w-[min(440px,80vw)] rounded-full bg-[radial-gradient(circle_at_center,rgb(148_163_184/0.04)_0%,transparent_65%)] blur-3xl" />
				<div className="absolute top-[38%] left-1/2 h-px w-[130%] max-w-none -translate-x-1/2 rotate-[-6deg] bg-linear-to-r from-transparent via-accent-highlight/15 to-transparent" />
			</div>

			<div className="mx-auto max-w-4xl stagger-children">
				<div className="flex items-center gap-5 sm:gap-7">
					<img
						src="/profile-photo.jpg"
						alt={`Portrait of ${portfolio.name}`}
						width={176}
						height={176}
						fetchPriority="high"
						className="h-24 w-24 shrink-0 rounded-full border border-border-strong object-cover shadow-[var(--shadow-portrait)] ring-2 ring-accent-highlight/20 sm:h-32 sm:w-32 md:h-40 md:w-40"
					/>
					<div className="min-w-0 flex-1">
						<p className="text-sm text-text-muted tracking-wide">
							{portfolio.location}
						</p>
						<h1
							id="hero-heading"
							className="font-display mt-2 text-balance font-bold text-3xl text-text-primary leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]"
						>
							{portfolio.name}
						</h1>
						<p className="mt-2 font-medium text-accent text-lg sm:text-xl md:text-2xl">
							{portfolio.headline}
						</p>
					</div>
				</div>

				<div className="mt-8 max-w-2xl space-y-4 border-border-subtle border-l-2 pl-5 md:mt-10 md:pl-6">
					<p className="text-pretty text-base text-text-muted leading-relaxed md:text-lg">
						{portfolio.heroSubtitle}
					</p>
					<p className="text-pretty text-base text-text-muted leading-relaxed md:text-lg">
						{portfolio.heroSupportingText}
					</p>
				</div>

				<div className="mt-8 flex flex-wrap gap-3 md:mt-10">
					<CtaLink href={mailHref} variant="primary">
						Email me
						<ArrowUpRight aria-hidden className="size-4" />
					</CtaLink>
					<CtaLink
						href={portfolio.links.linkedIn}
						target="_blank"
						rel="noopener noreferrer"
						variant="secondary"
					>
						LinkedIn
					</CtaLink>
					<CtaLink
						href={portfolio.links.github}
						target="_blank"
						rel="noopener noreferrer"
						variant="secondary"
					>
						GitHub
					</CtaLink>
				</div>
			</div>
		</section>
	);
}
