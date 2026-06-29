import { portfolio } from "#/content/portfolio";

import { SectionHeading } from "./section-heading";

export function AboutSection() {
	return (
		<section
			id="about"
			aria-labelledby="about-heading"
			className="section-reveal scroll-mt-24 border-border-subtle border-t bg-surface-raised px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-4xl">
				<SectionHeading id="about-heading">
					About
				</SectionHeading>
				<div className="mt-8 space-y-5">
					{portfolio.aboutParagraphs.map((paragraph, i) => (
						<p
							key={paragraph}
							className={`text-pretty leading-relaxed ${
								i === 0
									? "font-display text-lg text-text-primary md:text-xl"
									: "text-base text-text-muted md:text-lg"
							}`}
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
