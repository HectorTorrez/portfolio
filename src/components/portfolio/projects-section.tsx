import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { SectionHeading } from "./section-heading";

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
					<li key={project.name}>
						<article>
							<h3 className="text-lg text-text-primary md:text-xl">
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className={`editorial-link group inline-flex items-baseline gap-1.5 ${focusRing}`}
								>
									{project.name}
									<span
										aria-hidden
										className="text-text-faint text-sm transition-colors duration-150 ease-out group-hover:text-text-primary"
									>
										↗
									</span>
									<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
								</a>
							</h3>
							<p className="mt-2 max-w-prose text-pretty text-sm text-text-muted leading-relaxed md:text-base">
								{project.description}
							</p>
							<p className="mt-3 text-sm text-text-faint">
								{project.stack.join(" · ")}
							</p>
						</article>
					</li>
				))}
			</ul>
		</section>
	);
}
