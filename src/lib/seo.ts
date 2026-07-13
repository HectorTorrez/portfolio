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

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": `${portfolioSiteBase.url}${localePathname === "/" ? "" : localePathname}/#website`,
				url: absoluteUrl(localePathname),
				name: meta.title,
				description: meta.description,
				inLanguage: locale,
				publisher: {
					"@id": `${portfolioSiteBase.url}${localePathname === "/" ? "" : localePathname}/#person`,
				},
			},
			{
				"@type": "ProfilePage",
				"@id": `${portfolioSiteBase.url}${localePathname === "/" ? "" : localePathname}/#profile`,
				url: absoluteUrl(localePathname),
				name: meta.title,
				description: meta.description,
				inLanguage: locale,
				isPartOf: {
					"@id": `${portfolioSiteBase.url}${localePathname === "/" ? "" : localePathname}/#website`,
				},
				mainEntity: {
					"@id": `${portfolioSiteBase.url}${localePathname === "/" ? "" : localePathname}/#person`,
				},
			},
			{
				"@type": "Person",
				"@id": `${portfolioSiteBase.url}${localePathname === "/" ? "" : localePathname}/#person`,
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

function buildHreflangLinks(): HeadLink[] {
	return [
		...locales.map((locale) => ({
			rel: "alternate",
			hreflang: locale,
			href: absoluteUrl(localePath(locale)),
		})),
		{
			rel: "alternate",
			hreflang: "x-default",
			href: absoluteUrl("/"),
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
			...buildHreflangLinks(),
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
