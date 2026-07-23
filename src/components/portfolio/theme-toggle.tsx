import { Monitor, Moon, Sun } from "lucide-react";

import { getNextThemePreference, type ThemePreference } from "#/lib/theme";

import { focusRing } from "./focus-ring";
import { useLocaleContent } from "./locale-context";
import { useTheme } from "./theme-provider";

const themeIcons: Record<ThemePreference, typeof Sun> = {
	light: Sun,
	dark: Moon,
	system: Monitor,
};

export function ThemeToggle() {
	const { ui } = useLocaleContent();
	const { preference, setPreference } = useTheme();

	const labels: Record<ThemePreference, string> = {
		light: ui.theme.light,
		dark: ui.theme.dark,
		system: ui.theme.system,
	};

	const label = labels[preference];
	const nextLabel = labels[getNextThemePreference(preference)];
	const Icon = themeIcons[preference];

	return (
		<button
			type="button"
			onClick={() => setPreference(getNextThemePreference(preference))}
			aria-label={ui.theme.switchLabel(label, nextLabel)}
			title={ui.theme.switchTitle(label, nextLabel)}
			className={`pressable pressable-fade inline-flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center text-text-muted hover:text-text-primary ${focusRing}`}
		>
			<Icon key={preference} aria-hidden className="icon-swap-in size-4" />
		</button>
	);
}
