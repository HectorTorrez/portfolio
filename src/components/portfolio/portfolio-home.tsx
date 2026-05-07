import { AboutSection } from "./about-section";
import { EducationSection } from "./education-section";
import { ExperienceSection } from "./experience-section";
import { HeroSection } from "./hero-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SkillsSection } from "./skills-section";

export function PortfolioHome() {
	return (
		<div className="grain relative min-h-dvh bg-surface-base">
			<a className="skip-link" href="#main-content">
				Skip to main content
			</a>

			<SiteHeader />

			<main id="main-content" className="overflow-x-hidden">
				<HeroSection />
				<AboutSection />
				<SkillsSection />
				<ExperienceSection />
				<EducationSection />
			</main>

			<SiteFooter />
		</div>
	);
}
