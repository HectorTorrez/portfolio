import { ArrowUpRight } from "lucide-react";

import { portfolio } from "#/content/portfolio";

import { focusRing } from "./focus-ring";

export function SiteFooter() {
	const mailHref = `mailto:${portfolio.links.email}`;

	return (
		<footer
			id="contact"
			className="section-reveal scroll-mt-24 border-border-subtle border-t bg-surface-overlay px-5 py-16 md:px-8 md:py-24"
		>
			<div className="mx-auto max-w-4xl">
				<p
					aria-hidden
					className="font-display font-bold text-5xl text-accent-highlight/15 leading-none md:text-6xl"
				>
					06
				</p>
				<h2 className="font-display mt-2 text-balance font-bold text-2xl text-text-primary tracking-tight md:text-3xl">
					Let&apos;s talk
				</h2>
				<p className="mt-4 max-w-lg text-pretty text-base text-text-muted md:text-lg">
					Have a project in mind or want to collaborate? Reach out by email,
					connect on LinkedIn, or browse work on GitHub.
				</p>
				<div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
					<a
						href={mailHref}
						className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent-highlight px-6 py-3 font-semibold text-sm text-surface-base transition-opacity hover:opacity-90 ${focusRing} ring-offset-surface-overlay`}
					>
						Email {portfolio.links.email}
						<ArrowUpRight aria-hidden className="size-4" />
					</a>
					<a
						href={portfolio.links.linkedIn}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3 font-medium text-sm text-text-primary transition-colors hover:border-accent-highlight/50 hover:text-accent-highlight ${focusRing}`}
					>
						LinkedIn profile
					</a>
					<a
						href={portfolio.links.github}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3 font-medium text-sm text-text-primary transition-colors hover:border-accent-highlight/50 hover:text-accent-highlight ${focusRing}`}
					>
						GitHub profile
					</a>
				</div>
			</div>
		</footer>
	);
}
