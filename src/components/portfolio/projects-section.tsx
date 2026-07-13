import { ArrowUpRight, ExternalLink } from "lucide-react";

import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
	const { portfolio, ui } = useLocaleContent();

	return (
		<section
			id="projects"
			aria-labelledby="projects-heading"
			className="section-reveal scroll-mt-24 px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-[980px]">
				<SectionHeading id="projects-heading">
					{ui.sections.projects}
				</SectionHeading>
				<ul className="mt-10 flex flex-col gap-6">
					{portfolio.projects.map((project, i) => (
						<li key={project.name}>
							<article
								className={`group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-overlay p-6 transition-all duration-300 hover:border-accent-highlight/25 hover:shadow-[var(--shadow-card)] md:p-8 ${i === 0 ? "md:grid md:grid-cols-[1fr_auto] md:gap-8" : ""}`}
							>
								<div
									aria-hidden
									className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(41_151_255/0.06)_0%,transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								/>
								<div className="relative">
									{i === 0 ? (
										<p className="mb-3 font-medium text-text-faint text-xs tracking-wide uppercase">
											{ui.projects.featured}
										</p>
									) : null}
									<h3 className="text-xl md:text-2xl">
										<a
											href={project.url}
											target="_blank"
											rel="noopener noreferrer"
											className={`group/link inline-flex items-center gap-2 text-text-primary transition-colors hover:text-accent-highlight ${focusRing}`}
										>
											{project.name}
											<ExternalLink
												aria-hidden
												className="size-[0.85em] shrink-0 opacity-50 transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:opacity-100"
											/>
											<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
										</a>
									</h3>
									<p className="mt-3 max-w-prose text-pretty text-text-muted leading-relaxed">
										{project.description}
									</p>
									<ul className="mt-5 flex flex-wrap gap-2">
										{project.stack.map((tech) => (
											<li key={tech}>
												<span className="apple-pill inline-block border border-accent-highlight/20 bg-accent-highlight/10 px-2.5 py-1 font-medium text-accent-highlight text-xs">
													{tech}
												</span>
											</li>
										))}
									</ul>
								</div>
								{i === 0 ? (
									<div className="relative mt-6 flex items-end md:mt-0">
										<a
											href={project.url}
											target="_blank"
											rel="noopener noreferrer"
											className={`inline-flex size-10 items-center justify-center rounded-full bg-accent-highlight text-white transition-all hover:brightness-110 ${focusRing}`}
										>
											<ArrowUpRight aria-hidden className="size-5" />
											<span className="sr-only">
												{ui.projects.visitProject(project.name)}
											</span>
										</a>
									</div>
								) : null}
							</article>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
