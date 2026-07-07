import { portfolio } from "#/content/portfolio";

import { ExperienceJob } from "./experience-job";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
	return (
		<section
			id="experience"
			aria-labelledby="experience-heading"
			className="section-reveal scroll-mt-24 apple-section-elevated px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-[980px]">
				<SectionHeading id="experience-heading">Experience</SectionHeading>
				<div className="mt-12 flex flex-col gap-8">
					{portfolio.experience.map((job) => (
						<ExperienceJob key={`${job.company}-${job.start}`} job={job} />
					))}
				</div>
			</div>
		</section>
	);
}
