import { portfolio } from "#/content/portfolio";

import { ExperienceJob } from "./experience-job";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
	return (
		<section
			id="experience"
			aria-labelledby="experience-heading"
			className="section-reveal scroll-mt-24 border-border-subtle border-t bg-surface-raised px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-4xl">
				<SectionHeading index="04" id="experience-heading">
					Experience
				</SectionHeading>
				<div className="mt-12 flex flex-col gap-14">
					{portfolio.experience.map((job) => (
						<ExperienceJob key={`${job.company}-${job.start}`} job={job} />
					))}
				</div>
			</div>
		</section>
	);
}
