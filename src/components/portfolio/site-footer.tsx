import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { SectionHeading } from "./section-heading";

export function SiteFooter() {
	const { portfolio, ui } = useLocaleContent();

	const links = [
		{
			href: `mailto:${portfolio.links.email}`,
			label: ui.contact.email,
			external: false,
		},
		{
			href: portfolio.links.linkedIn,
			label: ui.contact.linkedInProfile,
			external: true,
		},
		{
			href: portfolio.links.github,
			label: ui.contact.githubProfile,
			external: true,
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
			<ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
				{links.map((link) => (
					<li key={link.href}>
						<a
							href={link.href}
							target={link.external ? "_blank" : undefined}
							rel={link.external ? "noopener noreferrer" : undefined}
							className={`editorial-link inline-flex items-baseline gap-1 text-sm text-text-muted hover:text-text-primary hover:opacity-100 ${focusRing}`}
						>
							{link.label}
							{link.external ? (
								<span aria-hidden className="text-text-faint">
									↗
								</span>
							) : null}
							{link.external ? (
								<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
							) : null}
						</a>
					</li>
				))}
			</ul>
		</footer>
	);
}
