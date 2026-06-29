import { portfolio } from "#/content/portfolio";

import { CopyEmailButton } from "./copy-email-button";
import { CtaLink } from "./cta-link";
import { SectionHeading } from "./section-heading";

export function SiteFooter() {
	return (
		<footer
			id="contact"
			className="section-reveal scroll-mt-24 border-border-subtle border-t bg-surface-overlay px-5 py-16 md:px-8 md:py-24"
		>
			<div className="mx-auto max-w-4xl">
				<SectionHeading id="contact-heading">Let&apos;s talk</SectionHeading>
				<p className="mt-4 max-w-lg text-pretty text-base text-text-muted md:text-lg">
					Have a project in mind or want to collaborate? Reach out by email,
					connect on LinkedIn, or browse work on GitHub.
				</p>
				<div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
					<CopyEmailButton email={portfolio.links.email} />
					<CtaLink
						href={portfolio.links.linkedIn}
						target="_blank"
						rel="noopener noreferrer"
						variant="secondary"
					>
						LinkedIn profile
					</CtaLink>
					<CtaLink
						href={portfolio.links.github}
						target="_blank"
						rel="noopener noreferrer"
						variant="secondary"
					>
						GitHub profile
					</CtaLink>
				</div>
			</div>
		</footer>
	);
}
