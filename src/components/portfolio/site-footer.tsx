import { CopyEmailButton } from "./copy-email-button";
import { CtaLink } from "./cta-link";
import { useLocaleContent } from "./locale-context";
import { SectionHeading } from "./section-heading";

export function SiteFooter() {
	const { portfolio, ui } = useLocaleContent();

	return (
		<footer
			id="contact"
			className="section-reveal scroll-mt-24 border-border-subtle border-t px-5 py-16 md:px-8 md:py-24"
		>
			<div className="mx-auto max-w-[980px]">
				<SectionHeading id="contact-heading">
					{ui.contact.heading}
				</SectionHeading>
				<p className="mt-4 max-w-lg text-pretty text-base text-text-muted md:text-lg">
					{ui.contact.body}
				</p>
				<div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
					<CopyEmailButton email={portfolio.links.email} />
					<CtaLink
						href={portfolio.links.linkedIn}
						target="_blank"
						rel="noopener noreferrer"
						variant="secondary"
					>
						{ui.contact.linkedInProfile}
					</CtaLink>
					<CtaLink
						href={portfolio.links.github}
						target="_blank"
						rel="noopener noreferrer"
						variant="secondary"
					>
						{ui.contact.githubProfile}
					</CtaLink>
				</div>
			</div>
		</footer>
	);
}
