import { portfolio } from "#/content/portfolio";

import { focusRing } from "./focus-ring";

export function SiteFooter() {
	const mailHref = `mailto:${portfolio.links.email}`;

	return (
		<footer
			id="contact"
			className="scroll-mt-24 border-border-subtle border-t bg-surface-overlay px-5 py-16 md:px-8 md:py-20"
		>
			<div className="mx-auto max-w-3xl">
				<h2 className="font-display text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl">
					Let&apos;s talk
				</h2>
				<p className="mt-4 max-w-xl text-pretty text-lg text-text-muted">
					Have a project in mind or want to collaborate? Reach out by email,
					connect on LinkedIn, or browse work on GitHub.
				</p>
				<div className="mt-10 flex flex-wrap gap-4">
					<a
						href={mailHref}
						className={`inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-sm text-surface-base transition-opacity hover:opacity-90 ${focusRing} ring-offset-surface-overlay`}
					>
						Email {portfolio.links.email}
					</a>
					<a
						href={portfolio.links.linkedIn}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3 font-medium text-sm text-text-primary transition-colors hover:border-accent hover:text-accent ${focusRing}`}
					>
						LinkedIn profile
					</a>
					<a
						href={portfolio.links.github}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3 font-medium text-sm text-text-primary transition-colors hover:border-accent hover:text-accent ${focusRing}`}
					>
						GitHub profile
					</a>
				</div>
			</div>
		</footer>
	);
}
