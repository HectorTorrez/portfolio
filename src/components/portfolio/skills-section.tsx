import { portfolio } from "#/content/portfolio";

import { SectionHeading } from "./section-heading";

export function SkillsSection() {
	return (
		<section
			id="skills"
			aria-labelledby="skills-heading"
			className="section-reveal scroll-mt-24 px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-4xl">
				<SectionHeading id="skills-heading">
					Skills
				</SectionHeading>
				<ul className="mt-8 flex flex-wrap gap-2 md:gap-2.5">
					{portfolio.skills.map((skill) => (
						<li key={skill}>
							<span className="inline-block rounded-md border border-border-subtle bg-surface-overlay px-3.5 py-2 text-sm text-text-muted">
								{skill}
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
