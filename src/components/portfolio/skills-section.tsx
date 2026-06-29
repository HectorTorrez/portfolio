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
				<p className="mt-8 text-pretty text-base text-text-muted leading-relaxed md:text-lg">
					{portfolio.skills.join(" · ")}
				</p>
			</div>
		</section>
	);
}
