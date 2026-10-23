#!/usr/bin/env node
import { JSDOM } from "jsdom";

const BASE = process.env.BASE_URL ?? "http://localhost:3001";

const CONTACT_NEEDLES = {
	en: ["Copy email", "LinkedIn", "GitHub", "CV"],
	es: ["Copiar correo", "LinkedIn", "GitHub", "CV"],
};

const ROLE_NEEDLE = {
	en: /software engineer|full[ -]?stack/i,
	es: /ingeniero de software|full[ -]?stack/i,
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
	results.push(
		roleHit
			? pass("role", `headline="${headline}" title="${title}"`)
			: fail(
					"role",
					`need software engineer or full-stack, got headline="${headline}" title="${title}"`,
				),
	);

	const jdk = [...document.querySelectorAll("article p")].find((p) =>
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

	results.push(
		/virtualiz/i.test(text)
			? pass("cv-virtualization", "virtualization on homepage")
			: fail("cv-virtualization", "homepage must mention virtualization"),
	);

	const scaleHit = /100\+/.test(text) || /más de 100/.test(text);
	results.push(
		scaleHit
			? pass("cv-scale", "100+ or más de 100 on homepage")
			: fail("cv-scale", "homepage must mention 100+ or más de 100"),
	);

	const skillsHeading = document.getElementById("skills-heading");
	const skillsSection = skillsHeading?.closest("section");
	const skillsLine = skillsSection?.textContent ?? text;
	results.push(
		skillsLine.includes("TanStack Query") && skillsLine.includes("Docker")
			? pass("cv-skills", "TanStack Query and Docker in skills")
			: fail("cv-skills", "skills must include TanStack Query and Docker"),
	);

	const freelanceNeedle = locale === "en" ? "Freelance" : "Independiente";
	results.push(
		text.includes(freelanceNeedle)
			? pass("cv-freelance", freelanceNeedle)
			: fail("cv-freelance", `homepage must mention ${freelanceNeedle}`),
	);

	return results;
}

function companies(html) {
	const text = textOf(new JSDOM(html));
	return ["JDK Tech", "BetaCode"].every((name) => text.includes(name));
}

function projectNames(html) {
	const dom = new JSDOM(html);
	return [...dom.window.document.querySelectorAll("#projects h3")]
		.map((heading) => heading.textContent?.trim() ?? "")
		.filter(Boolean)
		.sort();
}

async function main() {
	const enHome = await fetchOk("/en");
	const esHome = await fetchOk("/es");
	const sitemap = await fetchOk("/sitemap.xml");

	const results = [
		...checkHome("en", enHome),
		...checkHome("es", esHome),
	];

	const homeAws =
		/aws/i.test(textOf(new JSDOM(enHome))) &&
		/aws/i.test(textOf(new JSDOM(esHome)));
	results.push(
		homeAws
			? pass("aws", "AWS on EN and ES homepages")
			: fail("aws", "homepages must name AWS"),
	);

	const ticketRepos = (html) =>
		[
			...new Set(
				[...new JSDOM(html).window.document.querySelectorAll("a[href]")]
					.map((a) => a.getAttribute("href") ?? "")
					.filter((href) => href.includes("github.com/HectorTorrez/ticket-")),
			),
		];
	const homeRepos = ticketRepos(enHome);
	results.push(
		homeRepos.length >= 2
			? pass("tickets-repos", `home=${homeRepos.length}`)
			: fail(
					"tickets-repos",
					`need frontend and backend links, home=${homeRepos.length}`,
				),
	);

	const jdkFullStack =
		/full[ -]?stack/i.test(textOf(new JSDOM(enHome))) &&
		/full[ -]?stack/i.test(textOf(new JSDOM(esHome)));
	results.push(
		jdkFullStack
			? pass("jdk-fullstack", "full-stack on both homepages")
			: fail("jdk-fullstack", "homepages must name full-stack"),
	);

	const enProjects = projectNames(enHome).join(",");
	const esProjects = projectNames(esHome).join(",");
	results.push(
		enProjects === esProjects && enProjects.length > 0
			? pass("bilingual-projects", enProjects)
			: fail("bilingual-projects", `en=${enProjects} es=${esProjects}`),
	);
	results.push(
		companies(enHome) && companies(esHome)
			? pass("bilingual-jobs", "JDK Tech, BetaCode")
			: fail("bilingual-jobs", "a locale is missing JDK Tech or BetaCode"),
	);

	const missingSitemap = [];
	for (const path of ["/en/experiments", "/es/experiments"]) {
		if (!sitemap.includes(path)) {
			missingSitemap.push(path);
		}
	}
	results.push(
		missingSitemap.length === 0
			? pass("sitemap", "experiments")
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
