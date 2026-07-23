import { getContent } from "#/content";
import type { Locale } from "#/content/locales";
import {
	defaultLocale,
	isLocale,
	localePath,
	locales,
} from "#/content/locales";
import { portfolioSiteBase } from "#/content/shared";

type HeadMeta = {
	title?: string;
	name?: string;
	property?: string;
	content?: string;
	charSet?: string;
};

type HeadLink = {
	rel: string;
	href: string;
	type?: string;
	sizes?: string;
	hreflang?: string;
};

type HeadScript = {
	type: string;
	children: string;
};

export function absoluteUrl(path: string): string {
	return new URL(path, portfolioSiteBase.url).href;
}

function buildPersonJsonLd(locale: Locale) {
	const { portfolio, meta } = getContent(locale);
	const { name, headline, skills, education, links } = portfolio;
	const localePathname = localePath(locale);
	const localeBase = `${portfolioSiteBase.url}${localePathname}`;

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": `${localeBase}/#website`,
				url: absoluteUrl(localePathname),
				name: meta.title,
				description: meta.description,
				inLanguage: locale,
				publisher: { "@id": `${localeBase}/#person` },
			},
			{
				"@type": "ProfilePage",
				"@id": `${localeBase}/#profile`,
				url: absoluteUrl(localePathname),
				name: meta.title,
				description: meta.description,
				inLanguage: locale,
				isPartOf: { "@id": `${localeBase}/#website` },
				mainEntity: { "@id": `${localeBase}/#person` },
			},
			{
				"@type": "Person",
				"@id": `${localeBase}/#person`,
				name,
				jobTitle: headline,
				url: absoluteUrl(localePathname),
				image: absoluteUrl(portfolioSiteBase.ogImage),
				email: `mailto:${links.email}`,
				address: {
					"@type": "PostalAddress",
					addressLocality: portfolio.location,
					addressCountry: "SV",
				},
				sameAs: [links.linkedIn, links.github],
				knowsAbout: [...skills],
				alumniOf: education.map((entry) => ({
					"@type": "EducationalOrganization",
					name: entry.institution,
				})),
				worksFor: {
					"@type": "Organization",
					name: portfolio.experience[0]?.company,
				},
			},
		],
	};
}

function caseStudyPath(locale: Locale, slug: string): string {
	return `${localePath(locale)}/work/${slug}`;
}

function buildHreflangLinks(
	pathBuilder: (locale: Locale) => string,
): HeadLink[] {
	return [
		...locales.map((locale) => ({
			rel: "alternate",
			hreflang: locale,
			href: absoluteUrl(pathBuilder(locale)),
		})),
		{
			rel: "alternate",
			hreflang: "x-default",
			href: absoluteUrl(pathBuilder(defaultLocale)),
		},
	];
}

export function buildPortfolioHead(locale: string): {
	meta: HeadMeta[];
	links: HeadLink[];
	scripts: HeadScript[];
} {
	const resolvedLocale = isLocale(locale) ? locale : defaultLocale;
	const { portfolio, meta, site, ui } = getContent(resolvedLocale);
	const canonical = absoluteUrl(localePath(resolvedLocale));
	const image = absoluteUrl(site.ogImage);
	const alternateLocales = locales.filter((loc) => loc !== resolvedLocale);

	return {
		meta: [
			{ title: meta.title },
			{ name: "description", content: meta.description },
			{ name: "author", content: portfolio.name },
			{ name: "robots", content: "index, follow, max-image-preview:large" },
			{ name: "keywords", content: meta.keywords },
			{ property: "og:type", content: "profile" },
			{ property: "og:site_name", content: portfolio.name },
			{ property: "og:locale", content: site.locale },
			...alternateLocales.map((loc) => ({
				property: "og:locale:alternate",
				content: getContent(loc).site.locale,
			})),
			{ property: "og:url", content: canonical },
			{ property: "og:title", content: meta.title },
			{ property: "og:description", content: meta.description },
			{ property: "og:image", content: image },
			{
				property: "og:image:alt",
				content: ui.hero.portraitAlt(portfolio.name),
			},
			{ property: "profile:first_name", content: "Hector" },
			{ property: "profile:last_name", content: "Torrez" },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: meta.title },
			{ name: "twitter:description", content: meta.description },
			{ name: "twitter:image", content: image },
			{
				name: "twitter:image:alt",
				content: ui.hero.portraitAlt(portfolio.name),
			},
		],
		links: [
			{ rel: "canonical", href: canonical },
			...buildHreflangLinks(localePath),
			{ rel: "me", href: portfolio.links.github },
			{ rel: "me", href: portfolio.links.linkedIn },
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(buildPersonJsonLd(resolvedLocale)),
			},
		],
	};
}

export function buildCaseStudyHead(
	locale: string,
	slug: string,
): {
	meta: HeadMeta[];
	links: HeadLink[];
	scripts: HeadScript[];
} {
	const resolvedLocale = isLocale(locale) ? locale : defaultLocale;
	const { portfolio, site, ui } = getContent(resolvedLocale);
	const project = portfolio.projects.find((entry) => entry.slug === slug);

	if (!project) {
		return buildPortfolioHead(resolvedLocale);
	}

	const title = `${project.name} · ${portfolio.name}`;
	const description = project.description;
	const canonical = absoluteUrl(caseStudyPath(resolvedLocale, project.slug));
	const image = absoluteUrl(site.ogImage);
	const alternateLocales = locales.filter((loc) => loc !== resolvedLocale);

	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			{ name: "author", content: portfolio.name },
			{ name: "robots", content: "index, follow, max-image-preview:large" },
			{ property: "og:type", content: "article" },
			{ property: "og:site_name", content: portfolio.name },
			{ property: "og:locale", content: site.locale },
			...alternateLocales.map((loc) => ({
				property: "og:locale:alternate",
				content: getContent(loc).site.locale,
			})),
			{ property: "og:url", content: canonical },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:image", content: image },
			{
				property: "og:image:alt",
				content: ui.hero.portraitAlt(portfolio.name),
			},
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
			{ name: "twitter:image", content: image },
			{
				name: "twitter:image:alt",
				content: ui.hero.portraitAlt(portfolio.name),
			},
		],
		links: [
			{ rel: "canonical", href: canonical },
			...buildHreflangLinks((loc) => caseStudyPath(loc, project.slug)),
			{ rel: "me", href: portfolio.links.github },
			{ rel: "me", href: portfolio.links.linkedIn },
		],
		scripts: [],
	};
}
