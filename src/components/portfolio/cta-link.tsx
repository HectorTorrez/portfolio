import type { ReactNode } from "react";

import { focusRing } from "./focus-ring";

type CtaLinkProps = {
	href: string;
	variant?: "primary" | "secondary" | "tertiary";
	children: ReactNode;
	className?: string;
	target?: string;
	rel?: string;
};

const base =
	"inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors";

const variants = {
	primary: `bg-accent-highlight font-semibold text-surface-base hover:opacity-90 ${focusRing} ring-offset-surface-overlay`,
	secondary: `border border-border-strong text-text-primary hover:border-accent-highlight/50 hover:text-accent-highlight ${focusRing}`,
	tertiary: `text-text-muted hover:text-accent-highlight ${focusRing}`,
};

export function CtaLink({
	href,
	variant = "secondary",
	children,
	className = "",
	target,
	rel,
}: CtaLinkProps) {
	return (
		<a
			href={href}
			className={`${base} ${variants[variant]} ${className}`}
			target={target}
			rel={rel}
		>
			{children}
		</a>
	);
}
