import { useLocaleContent } from "./locale-context";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
	const { portfolio, ui } = useLocaleContent();

	return (
		<section
			id="skills"
			aria-labelledby="skills-heading"
			className="section-reveal scroll-mt-24 content-column py-12 md:py-16"
		>
			<SectionHeading id="skills-heading">{ui.sections.skills}</SectionHeading>
			<p className="mt-6 text-pretty text-sm text-text-muted leading-relaxed md:text-base">
				{portfolio.skills.join(" · ")}
			</p>
		</section>
	);
}
