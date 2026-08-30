import { Link } from "@tanstack/react-router";

import type { ProjectEntry } from "#/content/types";

import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { ProjectSourceLinks } from "./project-source-links";
import { SectionHeading } from "./section-heading";

function ProjectArticle({ project }: { project: ProjectEntry }) {
	const { locale, ui } = useLocaleContent();

	return (
		<article>
			<h3 className="text-lg text-text-primary md:text-xl">{project.name}</h3>
			<p className="mt-2 max-w-prose text-pretty text-sm text-text-muted leading-relaxed md:text-base">
				{project.description}
			</p>

			<ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
				<li>
					<Link
						to="/$locale/work/$slug"
						params={{ locale, slug: project.slug }}
						className={`editorial-link inline-flex min-h-11 items-center font-medium text-text-primary ${focusRing}`}
					>
						{ui.projects.readCaseStudy}
					</Link>
				</li>
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
	const { portfolio, ui } = useLocaleContent();

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
			<ul className="mt-8 flex flex-col gap-8">
				{portfolio.projects.map((project) => (
					<li key={project.slug}>
						<ProjectArticle project={project} />
					</li>
				))}
			</ul>
		</section>
	);
}
