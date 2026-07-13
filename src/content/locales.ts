export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

export function localePath(locale: Locale): "/" | "/es" {
	return locale === "en" ? "/" : "/es";
}

export function localeFromPathname(pathname: string): Locale {
	const segment = pathname.split("/").filter(Boolean)[0];
	return segment === "es" ? "es" : defaultLocale;
}
