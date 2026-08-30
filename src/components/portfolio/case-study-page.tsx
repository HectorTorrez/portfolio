import type { Locale } from "#/content/locales";
import type { ProjectEntry } from "#/content/types";
import { markdownToNodes } from "#/lib/markdown";

import { focusRing } from "./focus-ring";
import { LocaleProvider, useLocaleContent } from "./locale-context";
import { ProjectSourceLinks } from "./project-source-links";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type CaseStudyPageProps = {
	locale: Locale;
	project: ProjectEntry;
	markdown: string;
};

export function CaseStudyPage({
	locale,
	project,
	markdown,
}: CaseStudyPageProps) {
	return (
		<LocaleProvider locale={locale}>
			<CaseStudyPageContent project={project} markdown={markdown} />
		</LocaleProvider>
	);
}

function CaseStudyPageContent({
	project,
	markdown,
}: {
	project: ProjectEntry;
	markdown: string;
}) {
	const { locale, ui } = useLocaleContent();
	const body = markdownToNodes(markdown);

	return (
		<div className="min-h-dvh bg-surface-base">
			<a className="skip-link" href="#main-content">
				{ui.skipToContent}
			</a>

			<SiteHeader />

			<main id="main-content" className="overflow-x-hidden">
				<article className="content-column pb-16 pt-10 md:pb-20 md:pt-14">
					<a
						href={`/${locale}#projects`}
						className={`editorial-link inline-flex min-h-11 items-center text-sm text-text-muted ${focusRing}`}
					>
						← {ui.projects.backToWork}
					</a>

					<header className="mt-8">
						<p className="editorial-label">{ui.sections.projects}</p>
						<h1 className="editorial-display mt-3 text-balance text-3xl text-text-primary sm:text-4xl md:text-[2.75rem]">
							{project.name}
						</h1>
						<p className="mt-4 max-w-prose text-pretty text-base text-text-muted leading-relaxed md:text-[1.05rem]">
							{project.description}
						</p>
						<p className="mt-4 text-sm text-text-faint">
							{project.stack.join(" · ")}
						</p>

						<ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm">
							{project.url ? (
								<li>
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className={`editorial-link group inline-flex min-h-11 items-center gap-1.5 ${focusRing}`}
									>
										{ui.projects.liveDemo}
										<span
											aria-hidden
											className="text-text-faint text-sm transition-colors duration-150 ease-out group-hover:text-text-primary"
										>
											↗
										</span>
										<span className="sr-only"> {ui.a11y.opensInNewTab}</span>
									</a>
								</li>
							) : null}
							<ProjectSourceLinks project={project} />
						</ul>
					</header>

					<div className="case-study-prose prose mt-10 max-w-none">{body}</div>
				</article>
			</main>

			<SiteFooter />
		</div>
	);
}
