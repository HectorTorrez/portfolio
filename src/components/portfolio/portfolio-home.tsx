import type { Locale } from "#/content/locales";

import { AboutSection } from "./about-section";
import { EducationSection } from "./education-section";
import { ExperienceSection } from "./experience-section";
import { HeroSection } from "./hero-section";
import { LocaleProvider, useLocaleContent } from "./locale-context";
import { ProjectsSection } from "./projects-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SkillsSection } from "./skills-section";

type PortfolioHomeProps = {
	locale: Locale;
};

export function PortfolioHome({ locale }: PortfolioHomeProps) {
	return (
		<LocaleProvider locale={locale}>
			<PortfolioHomeContent />
		</LocaleProvider>
	);
}

function PortfolioHomeContent() {
	const { ui } = useLocaleContent();

	return (
		<div className="min-h-dvh bg-surface-base">
			<a className="skip-link" href="#main-content">
				{ui.skipToContent}
			</a>

			<SiteHeader />

			<main id="main-content" className="overflow-x-hidden">
				<HeroSection />
				<AboutSection />
				<SkillsSection />
				<ProjectsSection />
				<ExperienceSection />
				<EducationSection />
			</main>

			<SiteFooter />
		</div>
	);
}
