import type { ReactNode } from "react";

import type { ProjectEntry } from "#/content/types";

import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { SectionHeading } from "./section-heading";

function CaseStudyBlock({
	label,
	children,
}: {
	label: string;
	children: ReactNode;
}) {
	return (
		<div>
			<h4 className="editorial-label">{label}</h4>
			<div className="mt-1.5 text-pretty text-sm text-text-muted leading-relaxed">
				{children}
			</div>
		</div>
	);
}

function ProjectArticle({ project }: { project: ProjectEntry }) {
	const { ui } = useLocaleContent();
	const { caseStudy } = project;

	return (
		<article>
			<h3 className="text-lg text-text-primary md:text-xl">{project.name}</h3>
			<p className="mt-2 max-w-prose text-pretty text-sm text-text-muted leading-relaxed md:text-base">
				{project.description}
			</p>

			{caseStudy ? (
				<div className="mt-6 flex flex-col gap-5 border-border-subtle border-l pl-4 md:pl-5">
					<CaseStudyBlock label={ui.projects.problem}>
						{caseStudy.problem}
					</CaseStudyBlock>
					<CaseStudyBlock label={ui.projects.role}>
						{caseStudy.role}
					</CaseStudyBlock>
					<CaseStudyBlock label={ui.projects.constraints}>
						{caseStudy.constraints}
					</CaseStudyBlock>
					<CaseStudyBlock label={ui.projects.decisions}>
						<ol className="flex list-none flex-col gap-3 p-0">
							{caseStudy.decisions.map((decision) => (
								<li key={decision.title}>
									<p className="font-medium text-text-primary">
										{decision.title}
									</p>
									<p className="mt-0.5 text-pretty leading-relaxed">
										{decision.detail}
									</p>
								</li>
							))}
						</ol>
					</CaseStudyBlock>
					<CaseStudyBlock label={ui.projects.outcome}>
						{caseStudy.outcome}
					</CaseStudyBlock>
				</div>
			) : null}

			<ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
				<li>
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className={`editorial-link group inline-flex min-h-11 items-center gap-1.5 ${focusRing}`}
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
				{project.sourceUrl ? (
					<li>
						<a
							href={project.sourceUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={`editorial-link group inline-flex min-h-11 items-center gap-1.5 text-text-muted ${focusRing}`}
						>
							{ui.projects.source}
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
			<ul className="mt-8 flex flex-col gap-12">
				{portfolio.projects.map((project) => (
					<li key={project.name}>
						<ProjectArticle project={project} />
					</li>
				))}
			</ul>
		</section>
	);
}
