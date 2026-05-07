import { portfolio } from "#/content/portfolio";

export function SkillsSection() {
	return (
		<section
			id="skills"
			aria-labelledby="skills-heading"
			className="scroll-mt-24 px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-3xl">
				<h2
					id="skills-heading"
					className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl"
				>
					Skills
				</h2>
				<ul className="mt-8 flex flex-wrap gap-2 md:gap-3">
					{portfolio.skills.map((skill) => (
						<li key={skill}>
							<span className="inline-block rounded-full border border-border-subtle bg-surface-overlay px-4 py-2 text-text-muted text-sm">
								{skill}
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
