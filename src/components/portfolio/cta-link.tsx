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

const base = "inline-flex items-center justify-center gap-1 text-sm";

const variants = {
	primary: `editorial-link font-medium underline decoration-border-strong underline-offset-[0.18em] ${focusRing}`,
	secondary: `editorial-link text-text-muted hover:text-text-primary hover:opacity-100 ${focusRing}`,
	tertiary: `editorial-link text-text-muted underline decoration-transparent underline-offset-[0.18em] hover:decoration-border-strong hover:opacity-100 ${focusRing}`,
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
