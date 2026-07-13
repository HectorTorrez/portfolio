import { useLocaleContent } from "./locale-context";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
	const { portfolio, ui } = useLocaleContent();

	return (
		<section
			id="about"
			aria-labelledby="about-heading"
			className="section-reveal scroll-mt-24 px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-[980px]">
				<SectionHeading id="about-heading">{ui.sections.about}</SectionHeading>
				<div className="mt-8 space-y-5">
					{portfolio.aboutParagraphs.map((paragraph, i) => (
						<p
							key={paragraph}
							className={`text-pretty leading-relaxed ${
								i === 0
									? "text-lg text-text-primary md:text-xl"
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
