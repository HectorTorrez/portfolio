import { useLocaleContent } from "./locale-context";
import { SectionHeading } from "./section-heading";

export function EducationSection() {
	const { portfolio, ui } = useLocaleContent();

	return (
		<section
			id="education"
			aria-labelledby="education-heading"
			className="section-reveal scroll-mt-24 content-column py-12 md:py-16"
		>
			<SectionHeading id="education-heading">
				{ui.sections.education}
			</SectionHeading>
			<ul className="mt-8 flex flex-col gap-6">
				{portfolio.education.map((edu) => (
					<li key={`${edu.institution}-${edu.period}`}>
						<article>
							<h3 className="font-medium text-base text-text-primary md:text-lg">
								{edu.credential}
							</h3>
							<p className="mt-1 text-sm text-text-muted">{edu.institution}</p>
							<p className="mt-1 text-text-faint text-sm tabular-nums">
								{edu.period}
							</p>
						</article>
					</li>
				))}
			</ul>
		</section>
	);
}
