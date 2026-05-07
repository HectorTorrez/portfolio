import { portfolio } from "#/content/portfolio";

export function AboutSection() {
	return (
		<section
			id="about"
			aria-labelledby="about-heading"
			className="scroll-mt-24 border-border-subtle border-t bg-surface-raised px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-3xl">
				<h2
					id="about-heading"
					className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl"
				>
					About
				</h2>
				<div className="prose prose-invert prose-zinc mt-6 max-w-none space-y-6">
					{portfolio.aboutParagraphs.map((paragraph) => (
						<p
							key={paragraph}
							className="text-pretty text-lg text-text-muted leading-relaxed"
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
