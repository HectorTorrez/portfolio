import { portfolio } from "#/content/portfolio";

import { ExperienceJob } from "./experience-job";

export function ExperienceSection() {
	return (
		<section
			id="experience"
			aria-labelledby="experience-heading"
			className="scroll-mt-24 border-border-subtle border-t bg-surface-raised px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-3xl">
				<h2
					id="experience-heading"
					className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl"
				>
					Experience
				</h2>
				<div className="mt-12 flex flex-col gap-14">
					{portfolio.experience.map((job) => (
						<ExperienceJob key={`${job.company}-${job.start}`} job={job} />
					))}
				</div>
			</div>
		</section>
	);
}
