import type { ReactNode } from "react";

import { focusRing } from "./focus-ring";

type CtaLinkProps = {
	href: string;
	variant?: "primary" | "secondary" | "tertiary" | "pill";
	children: ReactNode;
	className?: string;
	target?: string;
	rel?: string;
};

const base =
	"inline-flex items-center justify-center gap-1.5 text-sm font-medium transition-all duration-200";

const variants = {
	primary: `apple-pill bg-accent-highlight px-5 py-2.5 font-normal text-white hover:brightness-110 ${focusRing}`,
	secondary: `apple-pill border border-border-strong px-5 py-2.5 text-accent-highlight hover:bg-accent-highlight/10 ${focusRing}`,
	tertiary: `text-accent-highlight hover:underline ${focusRing}`,
	pill: `apple-pill bg-accent-highlight px-6 py-3 text-base font-normal text-white hover:brightness-110 ${focusRing}`,
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
