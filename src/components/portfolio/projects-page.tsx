import type { Locale } from "#/content/locales";

import { focusRing } from "./focus-ring";
import { LocaleProvider, useLocaleContent } from "./locale-context";
import { ProjectArticle } from "./projects-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type ProjectsPageProps = {
	locale: Locale;
};

export function ProjectsPage({ locale }: ProjectsPageProps) {
	return (
		<LocaleProvider locale={locale}>
			<ProjectsPageContent />
		</LocaleProvider>
	);
}

function ProjectsPageContent() {
	const { locale, portfolio, ui } = useLocaleContent();
	const copy = ui.projectsPage;

	return (
		<div className="min-h-dvh bg-surface-base">
			<a className="skip-link" href="#main-content">
				{ui.skipToContent}
			</a>

			<SiteHeader />

			<main id="main-content" className="overflow-x-hidden">
				<div className="portfolio-column pb-16 pt-10 md:pb-20 md:pt-14">
					<a
						href={`/${locale}`}
						className={`editorial-link inline-flex min-h-11 items-center text-sm text-text-muted ${focusRing}`}
					>
						← {copy.backHome}
					</a>

					<header className="mt-8">
						<p className="editorial-label">{copy.label}</p>
						<h1 className="editorial-display mt-3 text-balance text-3xl text-text-primary sm:text-4xl md:text-[2.75rem]">
							{copy.title}
						</h1>
						<p className="mt-4 max-w-prose text-pretty text-base text-text-muted leading-relaxed md:text-[1.05rem]">
							{copy.blurb}
						</p>
					</header>

					<ul className="stagger-children mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:mt-14 md:grid-cols-2 md:gap-y-14">
						{[portfolio.featuredProject, ...portfolio.projects].map(
							(project) => (
								<li key={project.slug}>
									<ProjectArticle project={project} headingLevel="h2" />
								</li>
							),
						)}
					</ul>
				</div>
			</main>

			<SiteFooter />
		</div>
	);
}
