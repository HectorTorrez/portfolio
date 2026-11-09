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
		<article className="border-t border-border-strong pt-7">
			<Heading className="font-medium text-2xl tracking-tight text-text-primary md:text-3xl">
				{project.url ? (
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className={`editorial-link inline-flex min-h-11 items-center gap-3 ${focusRing}`}
						aria-label={ui.projects.visitProject(project.name)}
					>
						{project.name}
						<span aria-hidden className="text-lg text-text-faint">
							↗
						</span>
					</a>
				) : (
					project.name
				)}
			</Heading>
			<p className="mt-3 max-w-xl text-pretty text-base text-text-muted leading-relaxed md:text-lg">
				{project.description}
			</p>
			<p className="mt-5 text-sm text-text-faint">{project.category}</p>
			<ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
				{project.url ? (
					<li>
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className={`editorial-link inline-flex min-h-11 items-center gap-2 ${focusRing}`}
						>
							{ui.projects.liveDemo}
							<span aria-hidden>↗</span>
							<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
						</a>
					</li>
				) : null}
				<ProjectSourceLinks project={project} />
			</ul>
		</article>
	);
}

export function ProjectsSection() {
	const { locale, portfolio, ui } = useLocaleContent();

	return (
		<section
			id="projects"
			aria-labelledby="projects-heading"
			className="section-reveal scroll-mt-24 portfolio-column section-layout py-12 md:py-20"
		>
			<SectionHeading
				id="projects-heading"
				description={ui.sections.projectsBlurb}
			>
				{ui.sections.projects}
			</SectionHeading>
			<div className="section-body">
				<ProjectArticle project={portfolio.featuredProject} />
				{portfolio.projects.length > 0 ? (
					<a
						href={`/${locale}/projects`}
						className={`editorial-link mt-6 inline-flex min-h-11 items-center gap-3 text-sm ${focusRing}`}
					>
						{ui.projects.viewAll}
						<span aria-hidden>→</span>
					</a>
				) : null}
			</div>
		</section>
	);
}
