import { portfolio } from "#/content/portfolio";

const focusRing =
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base";

const navItems = [
	{ href: "#about", label: "About" },
	{ href: "#skills", label: "Skills" },
	{ href: "#experience", label: "Experience" },
	{ href: "#education", label: "Education" },
	{ href: "#contact", label: "Contact" },
] as const;

export function PortfolioHome() {
	const mailHref = `mailto:${portfolio.links.email}`;

	return (
		<div className="grain relative min-h-dvh overflow-x-hidden bg-surface-base">
			<a className="skip-link" href="#main-content">
				Skip to main content
			</a>

			<header className="sticky top-0 z-50 border-border-subtle border-b bg-surface-base/80 backdrop-blur-md">
				<div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 md:px-8">
					<a
						href="#top"
						className={`font-display font-semibold text-accent text-sm tracking-tight transition-colors hover:text-text-primary ${focusRing}`}
					>
						{portfolio.name.split(" ")[0]}
						<span className="text-text-muted"> · </span>
						<span className="text-text-primary">
							{portfolio.name.split(" ")[1]}
						</span>
					</a>
					<nav aria-label="Page sections">
						<ul className="flex flex-wrap justify-end gap-x-4 gap-y-1 text-text-faint text-xs uppercase tracking-wider md:gap-x-6 md:text-sm md:normal-case md:tracking-normal">
							{navItems.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className={`text-text-muted transition-colors hover:text-accent ${focusRing}`}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>

			<main id="main-content">
				<section
					id="top"
					aria-labelledby="hero-heading"
					className="relative isolate overflow-hidden px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24"
				>
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 -z-10"
					>
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
						<p className="mt-8 max-w-2xl text-pretty text-lg text-text-muted leading-relaxed md:text-xl">
							{portfolio.summary}
						</p>
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

				<section
					id="about"
					aria-labelledby="about-heading"
					className="scroll-mt-24 border-border-subtle border-t bg-surface-raised px-5 py-16 md:px-8 md:py-20"
				>
					<div className="mx-auto max-w-3xl">
						<h2
							id="about-heading"
							className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl"
						>
							About
						</h2>
						<div className="prose prose-invert prose-zinc mt-6 max-w-none">
							<p className="text-pretty text-lg text-text-muted leading-relaxed">
								{portfolio.summary}
							</p>
						</div>
					</div>
				</section>

				<section
					id="skills"
					aria-labelledby="skills-heading"
					className="scroll-mt-24 px-5 py-16 md:px-8 md:py-20"
				>
					<div className="mx-auto max-w-3xl">
						<h2
							id="skills-heading"
							className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl"
						>
							Skills
						</h2>
						<ul className="mt-8 flex flex-wrap gap-2 md:gap-3">
							{portfolio.skills.map((skill) => (
								<li key={skill}>
									<span className="inline-block rounded-full border border-border-subtle bg-surface-overlay px-4 py-2 text-text-muted text-sm">
										{skill}
									</span>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section
					id="experience"
					aria-labelledby="experience-heading"
					className="scroll-mt-24 border-border-subtle border-t bg-surface-raised px-5 py-16 md:px-8 md:py-20"
				>
					<div className="mx-auto max-w-3xl">
						<h2
							id="experience-heading"
							className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl"
						>
							Experience
						</h2>
						<div className="mt-12 flex flex-col gap-14">
							{portfolio.experience.map((job) => (
								<article
									key={`${job.company}-${job.start}`}
									className="relative border-border-subtle border-l pl-6 md:pl-8"
								>
									<div
										aria-hidden
										className="absolute top-2 left-0 size-2 -translate-x-[calc(50%+0.5px)] rounded-full bg-accent"
									/>
									<header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
										<div>
											<h3 className="font-display font-semibold text-lg text-text-primary md:text-xl">
												{job.company}
											</h3>
											<p className="mt-1 font-medium text-accent text-sm md:text-base">
												{job.role}
											</p>
											{job.location ? (
												<p className="mt-1 text-text-faint text-sm">
													{job.location}
												</p>
											) : null}
										</div>
										<p className="mt-2 shrink-0 text-text-faint text-sm tabular-nums md:mt-0">
											<time dateTime={job.start}>{job.start}</time>
											{" — "}
											<time dateTime={job.end}>{job.end}</time>
										</p>
									</header>
									<ul className="mt-6 list-disc space-y-3 pl-5 text-text-muted marker:text-accent-dim">
										{job.highlights.map((item) => (
											<li key={item} className="text-pretty leading-relaxed">
												{item}
											</li>
										))}
									</ul>
								</article>
							))}
						</div>
					</div>
				</section>

				<section
					id="education"
					aria-labelledby="education-heading"
					className="scroll-mt-24 px-5 py-16 md:px-8 md:py-20"
				>
					<div className="mx-auto max-w-3xl">
						<h2
							id="education-heading"
							className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl"
						>
							Education
						</h2>
						<ul className="mt-10 flex flex-col gap-10">
							{portfolio.education.map((edu) => (
								<li key={`${edu.institution}-${edu.period}`}>
									<article>
										<h3 className="font-display font-semibold text-lg text-text-primary md:text-xl">
											{edu.institution}
										</h3>
										<p className="mt-2 text-accent text-sm md:text-base">
											{edu.credential}
										</p>
										<p className="mt-2 text-text-faint text-sm">{edu.period}</p>
									</article>
								</li>
							))}
						</ul>
					</div>
				</section>
			</main>

			<footer
				id="contact"
				className="scroll-mt-24 border-border-subtle border-t bg-surface-overlay px-5 py-16 md:px-8 md:py-20"
			>
				<div className="mx-auto max-w-3xl">
					<h2 className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl">
						Let&apos;s talk
					</h2>
					<p className="mt-4 max-w-xl text-pretty text-lg text-text-muted">
						Have a project in mind or want to collaborate? Reach out by email or
						connect on LinkedIn.
					</p>
					<div className="mt-10 flex flex-wrap gap-4">
						<a
							href={mailHref}
							className={`inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-sm text-surface-base transition-opacity hover:opacity-90 ${focusRing} ring-offset-surface-overlay`}
						>
							Email {portfolio.links.email}
						</a>
						<a
							href={portfolio.links.linkedIn}
							target="_blank"
							rel="noopener noreferrer"
							className={`inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3 font-medium text-sm text-text-primary transition-colors hover:border-accent hover:text-accent ${focusRing}`}
						>
							LinkedIn profile
						</a>
					</div>
					<p className="mt-14 text-text-faint text-xs">
						© {new Date().getFullYear()} {portfolio.name}. Built with React &
						TanStack Start.
					</p>
				</div>
			</footer>
		</div>
	);
}
