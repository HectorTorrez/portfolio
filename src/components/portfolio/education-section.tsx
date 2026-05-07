import { portfolio } from "#/content/portfolio";

export function EducationSection() {
	return (
		<section
			id="education"
			aria-labelledby="education-heading"
			className="scroll-mt-24 px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-3xl">
				<h2
					id="education-heading"
					className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl"
				>
					Education
				</h2>
				<ul className="mt-10 flex flex-col gap-10">
					{portfolio.education.map((edu) => (
						<li key={`${edu.institution}-${edu.period}`}>
							<article>
								<h3 className="font-display font-semibold text-lg text-text-primary md:text-xl">
									{edu.institution}
								</h3>
								<p className="mt-2 text-accent text-sm md:text-base">
									{edu.credential}
								</p>
								<p className="mt-2 text-text-faint text-sm">{edu.period}</p>
							</article>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
