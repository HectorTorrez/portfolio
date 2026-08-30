#!/usr/bin/env node
import { JSDOM } from "jsdom";

const BASE = process.env.BASE_URL ?? "http://localhost:3001";

const GENERIC_HEADLINES = new Set([
	"software engineer",
	"ingeniero de software",
]);

const CONTACT_NEEDLES = {
	en: ["Copy email", "LinkedIn", "GitHub", "CV"],
	es: ["Copiar correo", "LinkedIn", "GitHub", "CV"],
};

const CASE_STUDY_LINK = {
	en: "Read case study",
	es: "Leer caso de estudio",
};

const CASE_HEADINGS = {
	en: ["Problem", "Decisions", "Outcome"],
	es: ["Problema", "Decisiones", "Resultado"],
};

const ROLE_NEEDLE = {
	en: /frontend engineer/i,
	es: /ingeniero frontend/i,
};

const STACK_NEEDLE = {
	en: /react/i,
	es: /react/i,
};

const TYPESCRIPT_NEEDLE = /typescript/i;

async function fetchOk(path) {
	const url = `${BASE}${path}`;
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`${url} returned ${res.status}`);
	}
	return res.text();
}

function textOf(dom) {
	return (dom.window.document.body?.textContent ?? "").replace(/\s+/g, " ");
}

function fail(id, detail) {
	return { id, ok: false, detail };
}

function pass(id, detail) {
	return { id, ok: true, detail };
}

function checkHome(locale, html) {
	const dom = new JSDOM(html);
	const { document } = dom.window;
	const text = textOf(dom);
	const results = [];

	const h1 = document.querySelector("h1");
	const headline = h1?.nextElementSibling?.textContent?.trim() ?? "";
	const title = document.title;
	const roleHit =
		ROLE_NEEDLE[locale].test(headline) || ROLE_NEEDLE[locale].test(title);
	const genericOnly = GENERIC_HEADLINES.has(headline.toLowerCase());
	results.push(
		roleHit && !genericOnly
			? pass("role", `headline="${headline}" title="${title}"`)
			: fail(
					"role",
					`need a hireable frontend role, got headline="${headline}" title="${title}"`,
				),
	);

	const caseLinks = [...document.querySelectorAll("a")].filter((a) =>
		(a.textContent ?? "").includes(CASE_STUDY_LINK[locale]),
	);
	results.push(
		caseLinks.length >= 2
			? pass("proof", `${caseLinks.length} case-study links`)
			: fail("proof", `${caseLinks.length} case-study links, need ≥2`),
	);

	const jdk = [...document.querySelectorAll("p")].find((p) =>
		(p.textContent ?? "").includes("JDK Tech"),
	);
	const jdkList = jdk?.closest("article")?.querySelector("ul");
	const jdkBullets = jdkList
		? [...jdkList.querySelectorAll(":scope > li")].length
		: -1;
	results.push(
		jdkBullets > 0 && jdkBullets <= 4
			? pass("jdk-bullets", `${jdkBullets} bullets`)
			: fail("jdk-bullets", `${jdkBullets} bullets, need 1–4`),
	);

	const missing = CONTACT_NEEDLES[locale].filter(
		(needle) => !text.includes(needle),
	);
	results.push(
		missing.length === 0
			? pass("contact", CONTACT_NEEDLES[locale].join(", "))
			: fail("contact", `missing ${missing.join(", ")}`),
	);

	const hero = document.querySelector("#top")?.textContent ?? "";
	const heroHasStack =
		STACK_NEEDLE[locale].test(hero) && TYPESCRIPT_NEEDLE.test(hero);
	results.push(
		heroHasStack
			? pass("pitch", "hero names React and TypeScript")
			: fail("pitch", "hero must name React and TypeScript"),
	);

	return results;
}

function checkCaseStudy(locale, slug, html) {
	const text = textOf(new JSDOM(html));
	const missing = CASE_HEADINGS[locale].filter(
		(heading) => !text.includes(heading),
	);
	return [
		missing.length === 0
			? pass(
					`case-${locale}-${slug}`,
					CASE_HEADINGS[locale].join(", "),
				)
			: fail(
					`case-${locale}-${slug}`,
					`missing ${missing.join(", ")}`,
				),
	];
}

function companies(html) {
	const text = textOf(new JSDOM(html));
	return ["JDK Tech", "BetaCode"].every((name) => text.includes(name));
}

function projectSlugs(html) {
	const dom = new JSDOM(html);
	return [...dom.window.document.querySelectorAll('a[href*="/work/"]')]
		.map((a) => {
			const href = a.getAttribute("href") ?? "";
			return href.split("/work/")[1] ?? "";
		})
		.filter(Boolean)
		.sort();
}

async function main() {
	const enHome = await fetchOk("/en");
	const esHome = await fetchOk("/es");
	const pantryEn = await fetchOk("/en/work/pantry");
	const pantryEs = await fetchOk("/es/work/pantry");
	const ticketsEn = await fetchOk("/en/work/tickets");
	const ticketsEs = await fetchOk("/es/work/tickets");
	const sitemap = await fetchOk("/sitemap.xml");

	const results = [
		...checkHome("en", enHome),
		...checkHome("es", esHome),
		...checkCaseStudy("en", "pantry", pantryEn),
		...checkCaseStudy("es", "pantry", pantryEs),
		...checkCaseStudy("en", "tickets", ticketsEn),
		...checkCaseStudy("es", "tickets", ticketsEs),
	];

	const enSlugs = projectSlugs(enHome).join(",");
	const esSlugs = projectSlugs(esHome).join(",");
	results.push(
		enSlugs === esSlugs && enSlugs.length > 0
			? pass("bilingual-slugs", enSlugs)
			: fail("bilingual-slugs", `en=${enSlugs} es=${esSlugs}`),
	);
	results.push(
		companies(enHome) && companies(esHome)
			? pass("bilingual-jobs", "JDK Tech, BetaCode")
			: fail("bilingual-jobs", "a locale is missing JDK Tech or BetaCode"),
	);

	const slugs = [...new Set(projectSlugs(enHome).concat(projectSlugs(esHome)))];
	const missingSitemap = [];
	for (const slug of slugs) {
		for (const locale of ["en", "es"]) {
			const path = `/${locale}/work/${slug}`;
			if (!sitemap.includes(path)) {
				missingSitemap.push(path);
			}
		}
	}
	for (const path of ["/en/experiments", "/es/experiments"]) {
		if (!sitemap.includes(path)) {
			missingSitemap.push(path);
		}
	}
	results.push(
		missingSitemap.length === 0
			? pass("sitemap", slugs.join(",") || "empty")
			: fail("sitemap", `missing ${missingSitemap.join(", ")}`),
	);

	const failed = results.filter((r) => !r.ok);
	for (const r of results) {
		console.log(`${r.ok ? "PASS" : "FAIL"}\t${r.id}\t${r.detail}`);
	}
	console.log(
		failed.length === 0
			? `OK\t${results.length} checks\t${BASE}`
			: `NOT VERIFIED\t${failed.length}/${results.length} failed\t${BASE}`,
	);
	process.exit(failed.length === 0 ? 0 : 1);
}

main().catch((err) => {
	console.error(`INCONCLUSIVE\t${err.message}`);
	process.exit(2);
});
