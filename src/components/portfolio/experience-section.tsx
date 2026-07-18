import { ExperienceJob } from "./experience-job";
import { useLocaleContent } from "./locale-context";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
	const { portfolio, ui } = useLocaleContent();

	return (
		<section
			id="experience"
			aria-labelledby="experience-heading"
			className="section-reveal scroll-mt-24 content-column py-12 md:py-16"
		>
			<SectionHeading id="experience-heading">
				{ui.sections.experience}
			</SectionHeading>
			<div className="mt-8 flex flex-col gap-10">
				{portfolio.experience.map((job) => (
					<ExperienceJob key={`${job.company}-${job.start}`} job={job} />
				))}
			</div>
		</section>
	);
}
