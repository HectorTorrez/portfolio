import { useLocaleContent } from "./locale-context";
import { SectionHeading } from "./section-heading";

export function EducationSection() {
	const { portfolio, ui } = useLocaleContent();

	return (
		<section
			id="education"
			aria-labelledby="education-heading"
			className="section-reveal scroll-mt-24 px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-[980px]">
				<SectionHeading id="education-heading">
					{ui.sections.education}
				</SectionHeading>
				<ul className="mt-10 flex flex-col gap-8">
					{portfolio.education.map((edu) => (
						<li key={`${edu.institution}-${edu.period}`}>
							<article className="border-border-subtle border-l-2 pl-5 md:pl-6">
								<h3 className="text-lg text-text-primary md:text-xl">
									{edu.institution}
								</h3>
								<p className="mt-1.5 text-sm text-text-muted md:text-base">
									{edu.credential}
								</p>
								<p className="mt-1.5 text-text-faint text-sm tabular-nums">
									{edu.period}
								</p>
							</article>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
