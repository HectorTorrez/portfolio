import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

import {
	applyTheme,
	getStoredThemePreference,
	type ResolvedTheme,
	THEME_STORAGE_KEY,
	type ThemePreference,
} from "#/lib/theme";

type ThemeContextValue = {
	preference: ThemePreference;
	resolved: ResolvedTheme;
	setPreference: (preference: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [preference, setPreferenceState] = useState<ThemePreference>(() =>
		getStoredThemePreference(),
	);
	const [resolved, setResolved] = useState<ResolvedTheme>(() =>
		typeof document !== "undefined" &&
		document.documentElement.dataset.theme === "light"
			? "light"
			: "dark",
	);

	useEffect(() => {
		setResolved(applyTheme(preference));
		localStorage.setItem(THEME_STORAGE_KEY, preference);
	}, [preference]);

	useEffect(() => {
		if (preference !== "system") {
			return;
		}

		const media = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = () => {
			setResolved(applyTheme("system"));
		};

		media.addEventListener("change", handleChange);
		return () => media.removeEventListener("change", handleChange);
	}, [preference]);

	const setPreference = (next: ThemePreference) => {
		setPreferenceState(next);
	};

	return (
		<ThemeContext.Provider value={{ preference, resolved, setPreference }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}

	return context;
}
