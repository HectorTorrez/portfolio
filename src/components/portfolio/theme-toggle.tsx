import { Monitor, Moon, Sun } from "lucide-react";

import { getNextThemePreference, type ThemePreference } from "#/lib/theme";

import { focusRing } from "./focus-ring";
import { useTheme } from "./theme-provider";

const themeOptions: Record<
	ThemePreference,
	{ label: string; Icon: typeof Sun }
> = {
	light: { label: "Light theme", Icon: Sun },
	dark: { label: "Dark theme", Icon: Moon },
	system: { label: "System theme", Icon: Monitor },
};

export function ThemeToggle() {
	const { preference, setPreference } = useTheme();
	const { label, Icon } = themeOptions[preference];
	const nextLabel = themeOptions[getNextThemePreference(preference)].label;

	return (
		<button
			type="button"
			onClick={() => setPreference(getNextThemePreference(preference))}
			aria-label={`${label}. Activate to switch to ${nextLabel}.`}
			title={`${label} — click for ${nextLabel.toLowerCase()}`}
			className={`inline-flex min-h-10 min-w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border-subtle bg-surface-overlay text-text-muted transition-colors hover:border-border-strong hover:text-text-primary ${focusRing}`}
		>
			<Icon aria-hidden className="size-4" />
		</button>
	);
}
