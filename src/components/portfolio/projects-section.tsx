import type { ProjectEntry } from "#/content/types";

import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { ProjectSourceLinks } from "./project-source-links";
import { SectionHeading } from "./section-heading";

export function ProjectArticle({
	project,
	headingLevel = "h3",
}: {
	project: ProjectEntry;
	headingLevel?: "h2" | "h3";
}) {
	const { ui } = useLocaleContent();
	const Heading = headingLevel;

	return (
		<article>
			<Heading className="text-lg text-text-primary md:text-xl">
				{project.name}
			</Heading>
			<p className="mt-2 max-w-prose text-pretty text-sm text-text-muted leading-relaxed md:text-base">
				{project.description}
			</p>

			{project.highlights?.length ? (
				<ul className="mt-4 max-w-prose list-disc space-y-1.5 pl-5 text-pretty text-sm text-text-muted leading-relaxed marker:text-text-faint md:text-[0.95rem]">
					{project.highlights.map((highlight) => (
						<li key={highlight}>{highlight}</li>
					))}
				</ul>
			) : null}

			<ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
				{project.url ? (
					<li>
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className={`editorial-link group inline-flex min-h-11 items-center gap-1.5 text-text-muted ${focusRing}`}
						>
							{ui.projects.liveDemo}
							<span
								aria-hidden
								className="text-text-faint text-sm transition-colors duration-150 ease-out group-hover:text-text-primary"
							>
								↗
							</span>
							<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
						</a>
					</li>
				) : null}
				<ProjectSourceLinks project={project} />
			</ul>

			<p className="mt-3 text-sm text-text-faint">
				{project.stack.join(" · ")}
			</p>
		</article>
	);
}

export function ProjectsSection() {
	const { locale, portfolio, ui } = useLocaleContent();

	return (
		<section
			id="projects"
			aria-labelledby="projects-heading"
			className="section-reveal scroll-mt-24 content-column py-12 md:py-16"
		>
			<SectionHeading
				id="projects-heading"
				description={ui.sections.projectsBlurb}
			>
				{ui.sections.projects}
			</SectionHeading>

			<div className="mt-8">
				<p className="mb-2 text-text-faint text-xs uppercase tracking-wider">
					{ui.projects.featured}
				</p>
				<ProjectArticle project={portfolio.featuredProject} />
			</div>

			{portfolio.projects.length > 0 ? (
				<a
					href={`/${locale}/projects`}
					className={`editorial-link group mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm text-text-primary ${focusRing}`}
				>
					{ui.projects.viewAll}
					<span
						aria-hidden
						className="text-text-faint transition-transform duration-150 ease-out group-hover:translate-x-0.5"
					>
						→
					</span>
				</a>
			) : null}
		</section>
	);
}
