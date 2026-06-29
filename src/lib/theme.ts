export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";

export const themeCycle: ThemePreference[] = ["light", "dark", "system"];

export function getNextThemePreference(
	preference: ThemePreference,
): ThemePreference {
	const index = themeCycle.indexOf(preference);
	return themeCycle[(index + 1) % themeCycle.length] ?? "system";
}

export function isThemePreference(
	value: string | null,
): value is ThemePreference {
	return value === "light" || value === "dark" || value === "system";
}

export function getStoredThemePreference(): ThemePreference {
	if (typeof window === "undefined") {
		return "system";
	}

	const stored = localStorage.getItem(THEME_STORAGE_KEY);
	return isThemePreference(stored) ? stored : "system";
}

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
	if (preference === "system") {
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	}

	return preference;
}

export function applyTheme(preference: ThemePreference): ResolvedTheme {
	const resolved = resolveTheme(preference);
	document.documentElement.dataset.theme = resolved;
	document.documentElement.dataset.themePreference = preference;
	document.documentElement.style.colorScheme = resolved;
	return resolved;
}

export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var p=localStorage.getItem(k)||"system";if(p!=="light"&&p!=="dark"&&p!=="system")p="system";var t=p==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):p;document.documentElement.dataset.theme=t;document.documentElement.dataset.themePreference=p;document.documentElement.style.colorScheme=t;}catch(e){}})();`;
