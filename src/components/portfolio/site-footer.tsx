import { CopyEmailButton } from "./copy-email-button";
import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { SectionHeading } from "./section-heading";

export function SiteFooter() {
	const { portfolio, ui } = useLocaleContent();

	const links = [
		{
			href: portfolio.links.resume,
			label: ui.contact.resume,
		},
		{
			href: portfolio.links.linkedIn,
			label: ui.contact.linkedInProfile,
		},
		{
			href: portfolio.links.github,
			label: ui.contact.githubProfile,
		},
	] as const;

	return (
		<footer
			id="contact"
			className="section-reveal scroll-mt-24 content-column border-border-subtle border-t py-12 md:py-16"
		>
			<SectionHeading id="contact-heading">
				{ui.sections.elsewhere}
			</SectionHeading>
			<ul className="mt-6 flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1">
				<li className="flex items-center">
					<CopyEmailButton email={portfolio.links.email} />
				</li>
				{links.map((link) => (
					<li key={link.href} className="flex items-center">
						<a
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className={`editorial-link inline-flex min-h-11 items-center gap-1 text-sm text-text-muted hover:text-text-primary hover:opacity-100 ${focusRing}`}
						>
							{link.label}
							<span aria-hidden className="text-text-faint">
								↗
							</span>
							<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
						</a>
					</li>
				))}
			</ul>
		</footer>
	);
}
