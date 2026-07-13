import { createContext, useContext } from "react";

import { getContent } from "#/content";
import type { Locale } from "#/content/locales";
import type { LocaleContent } from "#/content/types";

type LocaleContextValue = LocaleContent & {
	locale: Locale;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
	locale: Locale;
	children: React.ReactNode;
};

export function LocaleProvider({ locale, children }: LocaleProviderProps) {
	const content = getContent(locale);

	return (
		<LocaleContext.Provider value={{ ...content, locale }}>
			{children}
		</LocaleContext.Provider>
	);
}

export function useLocaleContent(): LocaleContextValue {
	const content = useContext(LocaleContext);
	if (!content) {
		throw new Error("useLocaleContent must be used within LocaleProvider");
	}
	return content;
}
